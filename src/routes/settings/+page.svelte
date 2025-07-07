<script>
	import { onMount } from 'svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { CheckCircle, AlertTriangle, Phone } from 'lucide-svelte';
	import { notificationManager, testNotifications } from '$lib/utils/notifications.js';

	let notificationStatus = $state({
		supported: false,
		permission: 'default',
		enabled: false,
		serviceWorker: false
	});

	let isOnline = $state(true);

	onMount(() => {
		// Update notification status
		notificationStatus = notificationManager.getStatus();
		
		// Check online status
		isOnline = navigator.onLine;
		window.addEventListener('online', () => {
			isOnline = true;
		});
		window.addEventListener('offline', () => {
			isOnline = false;
		});
	});

	async function enableNotifications() {
		const granted = await notificationManager.requestPermission();
		if (granted) {
			notificationStatus = notificationManager.getStatus();
		}
	}

	async function testNotificationFunction() {
		await testNotifications();
	}

	function getPermissionBadge(permission) {
		switch (permission) {
			case 'granted':
				return { variant: 'default', text: 'Enabled' };
			case 'denied':
				return { variant: 'destructive', text: 'Blocked' };
			default:
				return { variant: 'secondary', text: 'Not Set' };
		}
	}
</script>

<svelte:head>
	<title>Settings - Texas Hill Country Flood Relief</title>
	<meta name="description" content="App settings and notification preferences" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">App Settings</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-gray-600">
			Configure notifications and app preferences
		</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm">PWA Settings & Notifications</Badge>
	</div>

	<div class="space-y-6">
		<!-- Notification Settings -->
		<Card.Root>
			<Card.Header>
				<Card.Title>Emergency Notifications</Card.Title>
				<Card.Description>
					Receive critical alerts even when the app is closed
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="flex items-center justify-between">
					<div>
						<p class="font-medium">Notification Status</p>
						<p class="text-sm text-muted-foreground">
							{#if notificationStatus.supported}
								Notifications are supported on this device
							{:else}
								Notifications are not supported on this device
							{/if}
						</p>
					</div>
					<Badge variant={getPermissionBadge(notificationStatus.permission).variant}>
						{getPermissionBadge(notificationStatus.permission).text}
					</Badge>
				</div>

				{#if notificationStatus.supported}
					<div class="space-y-3">
						{#if notificationStatus.permission === 'default'}
							<Alert.Root class="border-blue-200 bg-blue-50">
								<Alert.Description class="text-blue-800">
									Enable notifications to receive emergency alerts, shelter updates, and weather warnings.
								</Alert.Description>
							</Alert.Root>
							<Button onclick={enableNotifications} class="w-full">
								Enable Emergency Notifications
							</Button>
						{:else if notificationStatus.permission === 'granted'}
							<Alert.Root class="border-green-200 bg-green-50">
								<Alert.Description class="flex items-center gap-2 text-green-800">
									<CheckCircle class="h-4 w-4 text-green-600" />
									Emergency notifications are enabled. You'll receive critical alerts.
								</Alert.Description>
							</Alert.Root>
							<Button onclick={testNotificationFunction} variant="outline" class="w-full">
								Test Notification
							</Button>
						{:else}
							<Alert.Root class="border-red-200 bg-red-50">
								<Alert.Description class="flex items-start gap-2 text-red-800">
									<AlertTriangle class="h-4 w-4 text-red-600 mt-0.5" />
									<div>
										Notifications are blocked. You won't receive emergency alerts.
										To enable: Go to your browser settings → Notifications → Allow for this site.
									</div>
								</Alert.Description>
							</Alert.Root>
						{/if}
					</div>
				{:else}
					<Alert.Root class="border-gray-200 bg-gray-50">
						<Alert.Description class="text-gray-800">
							Your device or browser doesn't support notifications. 
							Consider upgrading to a newer version or using a different browser.
						</Alert.Description>
					</Alert.Root>
				{/if}
			</Card.Content>
		</Card.Root>

		<!-- Offline Functionality -->
		<Card.Root>
			<Card.Header>
				<Card.Title>Offline Functionality</Card.Title>
				<Card.Description>
					Access emergency information even without internet
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="flex items-center justify-between">
					<div>
						<p class="font-medium">Connection Status</p>
						<p class="text-sm text-muted-foreground">
							{isOnline ? 'Connected to internet' : 'Offline mode active'}
						</p>
					</div>
					<Badge variant={isOnline ? 'default' : 'secondary'}>
						{isOnline ? 'Online' : 'Offline'}
					</Badge>
				</div>

				<div class="flex items-center justify-between">
					<div>
						<p class="font-medium">Service Worker</p>
						<p class="text-sm text-muted-foreground">
							{notificationStatus.serviceWorker ? 'Active - Offline support enabled' : 'Loading...'}
						</p>
					</div>
					<Badge variant={notificationStatus.serviceWorker ? 'default' : 'secondary'}>
						{notificationStatus.serviceWorker ? 'Active' : 'Loading'}
					</Badge>
				</div>

				{#if !isOnline}
					<Alert.Root class="border-orange-200 bg-orange-50">
						<Alert.Description class="text-orange-800">
							You're currently offline. Emergency contacts and cached resources are still available.
						</Alert.Description>
					</Alert.Root>
					<Button href="/offline" variant="outline" class="w-full">
						View Offline Resources
					</Button>
				{/if}
			</Card.Content>
		</Card.Root>

		<!-- App Information -->
		<Card.Root>
			<Card.Header>
				<Card.Title>App Information</Card.Title>
				<Card.Description>
					About this emergency relief app
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<p class="font-medium">Version</p>
						<p class="text-sm text-muted-foreground">1.0.0</p>
					</div>
					<div>
						<p class="font-medium">Last Updated</p>
						<p class="text-sm text-muted-foreground">July 6, 2025</p>
					</div>
					<div>
						<p class="font-medium">Data Source</p>
						<p class="text-sm text-muted-foreground">Kerr County Emergency Management</p>
					</div>
					<div>
						<p class="font-medium">PWA Support</p>
						<p class="flex items-center gap-1 text-sm text-muted-foreground">
							<CheckCircle class="h-3 w-3 text-green-600" />
							Installable
						</p>
					</div>
				</div>

				<Alert.Root class="border-blue-200 bg-blue-50">
					<Alert.Description class="text-blue-800">
						<strong>Install this app:</strong> On mobile, tap the "Add to Home Screen" option in your browser menu. 
						On desktop, look for the install icon in your address bar.
					</Alert.Description>
				</Alert.Root>
			</Card.Content>
		</Card.Root>

		<!-- Emergency Contacts -->
		<Card.Root>
			<Card.Header>
				<Card.Title>Quick Emergency Contacts</Card.Title>
				<Card.Description>
					Always available, even offline
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-3">
				<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
					<Button href="tel:911" variant="destructive" class="justify-start">
						<AlertTriangle class="mr-2 h-4 w-4" />
						Emergency: 911
					</Button>
					<Button href="tel:830-315-2430" variant="outline" class="justify-start">
						<Phone class="mr-2 h-4 w-4" />
						Kerr County: 830-315-2430
					</Button>
					<Button href="tel:830-258-1111" variant="outline" class="justify-start">
						<Phone class="mr-2 h-4 w-4" />
						Camp Mystic: 830-258-1111
					</Button>
					<Button href="tel:800-621-3362" variant="outline" class="justify-start">
						<Phone class="mr-2 h-4 w-4" />
						FEMA: 800-621-3362
					</Button>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>