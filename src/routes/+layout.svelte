<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import { Smartphone, AlertTriangle } from '@lucide/svelte';

	let { children } = $props();
	let isOnline = $state(true);
	let notificationSupported = $state(false);
	let notificationPermission = $state('default');

	onMount(() => {
		// Register service worker
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker
				.register('/sw.js', {
					scope: '/'
				})
				.then((registration) => {
					console.log('Service Worker registered:', registration);
				})
				.catch((error) => {
					console.error('Service Worker registration failed:', error);
				});
		}

		// Check online status
		isOnline = navigator.onLine;
		window.addEventListener('online', () => {
			isOnline = true;
		});
		window.addEventListener('offline', () => {
			isOnline = false;
		});

		// Check notification support
		if ('Notification' in window) {
			notificationSupported = true;
			notificationPermission = Notification.permission;
		}

		// Request notification permission for emergency alerts
		if (notificationSupported && notificationPermission === 'default') {
			setTimeout(() => {
				requestNotificationPermission();
			}, 10000); // Wait 10 seconds before asking
		}
	});

	async function requestNotificationPermission() {
		if (!notificationSupported) return;

		try {
			const permission = await Notification.requestPermission();
			notificationPermission = permission;

			if (permission === 'granted') {
				// Show welcome notification
				new Notification('Texas Hill Country Flood Relief', {
					body: "You'll now receive emergency alerts and updates.",
					icon: '/icon-192.svg',
					badge: '/favicon.svg'
				});
			}
		} catch (error) {
			console.error('Notification permission request failed:', error);
		}
	}
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
	<!-- Offline Banner -->
	{#if !isOnline}
		<div class="bg-warning text-warning-foreground sticky top-0 z-50 px-4 py-2">
			<div class="container mx-auto text-center">
				<p class="flex items-center justify-center gap-1 text-xs font-medium">
					<Smartphone class="h-4 w-4" />
					You're offline - Emergency contacts still available |
					<a href="/offline" class="font-semibold underline hover:no-underline"
						>View offline resources →</a
					>
				</p>
			</div>
		</div>
	{/if}

	<!-- Emergency Banner -->
	<div class="bg-destructive text-destructive-foreground sticky top-0 z-40 px-4 py-2">
		<div class="container mx-auto text-center">
			<p class="flex items-center justify-center gap-1 text-xs font-medium">
				<AlertTriangle class="h-4 w-4" />
				Emergency? Call 911 |
				<a href="/updates" class="font-semibold text-white underline hover:no-underline"
					>Recent Updates</a
				>
			</p>
		</div>
	</div>

	<!-- Main Content -->
	<main class="pb-16">
		{@render children()}
	</main>

	<!-- Bottom Navigation -->
	<BottomNav />
</div>
