/**
 * Notification utility for emergency alerts
 * Handles both browser notifications and PWA push notifications
 */

export class NotificationManager {
	constructor() {
		this.isSupported = 'Notification' in window;
		this.permission = this.isSupported ? Notification.permission : 'denied';
		this.serviceWorkerRegistration = null;
		this.init();
	}

	async init() {
		if ('serviceWorker' in navigator) {
			try {
				this.serviceWorkerRegistration = await navigator.serviceWorker.ready;
			} catch (error) {
				console.error('Service Worker not available:', error);
			}
		}
	}

	/**
	 * Request notification permission
	 */
	async requestPermission() {
		if (!this.isSupported) {
			return false;
		}

		try {
			const permission = await Notification.requestPermission();
			this.permission = permission;
			return permission === 'granted';
		} catch (error) {
			console.error('Failed to request notification permission:', error);
			return false;
		}
	}

	/**
	 * Show immediate notification (works offline)
	 */
	showNotification(title, options = {}) {
		if (!this.isSupported || this.permission !== 'granted') {
			return false;
		}

		const defaultOptions = {
			body: '',
			icon: '/icon-192.svg',
			badge: '/favicon.svg',
			vibrate: [100, 50, 100],
			requireInteraction: false,
			silent: false,
			data: {
				timestamp: Date.now(),
				url: '/'
			}
		};

		const notificationOptions = { ...defaultOptions, ...options };

		try {
			const notification = new Notification(title, notificationOptions);
			
			notification.onclick = () => {
				window.focus();
				if (notificationOptions.data.url) {
					window.location.href = notificationOptions.data.url;
				}
				notification.close();
			};

			return notification;
		} catch (error) {
			console.error('Failed to show notification:', error);
			return false;
		}
	}

	/**
	 * Show emergency alert with high priority
	 */
	showEmergencyAlert(message, url = '/') {
		return this.showNotification('🚨 Emergency Alert', {
			body: message,
			requireInteraction: true,
			vibrate: [200, 100, 200, 100, 200],
			silent: false,
			data: { url, priority: 'high' }
		});
	}

	/**
	 * Show resource update notification
	 */
	showResourceUpdate(message, url = '/') {
		return this.showNotification('📋 Resource Update', {
			body: message,
			requireInteraction: false,
			vibrate: [100, 50, 100],
			data: { url, priority: 'normal' }
		});
	}

	/**
	 * Show weather alert
	 */
	showWeatherAlert(message, severity = 'moderate') {
		const icons = {
			severe: '⚠️',
			moderate: '🌧️',
			minor: '☁️'
		};

		return this.showNotification(`${icons[severity]} Weather Alert`, {
			body: message,
			requireInteraction: severity === 'severe',
			vibrate: severity === 'severe' ? [200, 100, 200] : [100, 50, 100],
			data: { url: '/updates', priority: severity }
		});
	}

	/**
	 * Schedule notification for later (requires service worker)
	 */
	async scheduleNotification(title, options = {}, delay = 0) {
		if (!this.serviceWorkerRegistration) {
			console.warn('Service Worker not available for scheduled notifications');
			return false;
		}

		try {
			// This would typically involve a backend service for real push notifications
			// For now, we'll use setTimeout for demo purposes
			setTimeout(() => {
				this.showNotification(title, options);
			}, delay);

			return true;
		} catch (error) {
			console.error('Failed to schedule notification:', error);
			return false;
		}
	}

	/**
	 * Test notification functionality
	 */
	async testNotification() {
		if (this.permission !== 'granted') {
			const granted = await this.requestPermission();
			if (!granted) {
				alert('Notifications are not enabled. Please enable them in your browser settings.');
				return false;
			}
		}

		this.showNotification('Test Notification', {
			body: 'Emergency alerts are working correctly!',
			requireInteraction: false
		});

		return true;
	}

	/**
	 * Get notification status
	 */
	getStatus() {
		return {
			supported: this.isSupported,
			permission: this.permission,
			enabled: this.permission === 'granted',
			serviceWorker: !!this.serviceWorkerRegistration
		};
	}
}

// Create singleton instance
export const notificationManager = new NotificationManager();

// Common notification presets
export const NOTIFICATION_TYPES = {
	EMERGENCY: 'emergency',
	RESOURCE_UPDATE: 'resource',
	WEATHER: 'weather',
	GENERAL: 'general'
};

/**
 * Quick notification functions for common use cases
 */
export function showEmergencyAlert(message, url) {
	return notificationManager.showEmergencyAlert(message, url);
}

export function showResourceUpdate(message, url) {
	return notificationManager.showResourceUpdate(message, url);
}

export function showWeatherAlert(message, severity) {
	return notificationManager.showWeatherAlert(message, severity);
}

export function requestNotificationPermission() {
	return notificationManager.requestPermission();
}

export function testNotifications() {
	return notificationManager.testNotification();
}