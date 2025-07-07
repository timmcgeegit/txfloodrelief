<script>
	import * as Alert from '$lib/components/ui/alert/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<svelte:head>
	<title>Offline - Texas Hill Country Flood Relief</title>
	<meta name="description" content="You're currently offline. Emergency contact information available." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<Alert.Root class="mb-8 border-orange-200 bg-orange-50">
		<Alert.Description class="text-orange-800">
			<strong>You're currently offline.</strong> Some information may be outdated. 
			Try to reconnect when possible for the latest emergency updates.
		</Alert.Description>
	</Alert.Root>

	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">Texas Hill Country Flood Relief</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-gray-600">
			Critical Emergency Information Available Offline
		</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm">Emergency Contacts Always Available</Badge>
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		<Card.Root class="border-red-200 bg-red-50">
			<Card.Header>
				<Card.Title class="text-red-800">Emergency Services</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-3">
				<div>
					<strong>Emergency:</strong>
					<a href="tel:911" class="block text-lg font-bold text-red-600">911</a>
				</div>
				<div>
					<strong>Kerr County Emergency:</strong>
					<a href="tel:830-315-2430" class="block text-blue-600">830-315-2430</a>
				</div>
				<div>
					<strong>Camp Mystic Hotline:</strong>
					<a href="tel:830-258-1111" class="block text-blue-600">830-258-1111</a>
				</div>
			</Card.Content>
		</Card.Root>

		<Card.Root class="border-blue-200 bg-blue-50">
			<Card.Header>
				<Card.Title class="text-blue-800">Financial Assistance</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-3">
				<div>
					<strong>FEMA Disaster Assistance:</strong>
					<a href="tel:800-621-3362" class="block text-blue-600">800-621-3362</a>
				</div>
				<div>
					<strong>SBA Disaster Loans:</strong>
					<a href="tel:800-659-2955" class="block text-blue-600">800-659-2955</a>
				</div>
				<div>
					<strong>Legal Aid Hotline:</strong>
					<a href="tel:800-504-7030" class="block text-blue-600">800-504-7030</a>
				</div>
			</Card.Content>
		</Card.Root>

		<Card.Root class="border-green-200 bg-green-50">
			<Card.Header>
				<Card.Title class="text-green-800">Food & Shelter</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-3">
				<div>
					<strong>Red Cross:</strong>
					<a href="tel:800-733-2767" class="block text-blue-600">800-733-2767</a>
				</div>
				<div>
					<strong>Salvation Army:</strong>
					<a href="tel:800-725-2769" class="block text-blue-600">800-725-2769</a>
				</div>
				<div>
					<strong>First Methodist (Kerrville):</strong>
					<a href="tel:830-896-2875" class="block text-blue-600">830-896-2875</a>
				</div>
			</Card.Content>
		</Card.Root>

		<Card.Root class="border-purple-200 bg-purple-50">
			<Card.Header>
				<Card.Title class="text-purple-800">Missing Persons</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-3">
				<div>
					<strong>Kerr County Sheriff:</strong>
					<a href="tel:830-896-1216" class="block text-blue-600">830-896-1216</a>
				</div>
				<div>
					<strong>Flood Recovery Email:</strong>
					<a href="mailto:floodrecovery@co.kerr.tx.us" class="block text-blue-600 text-sm">floodrecovery@co.kerr.tx.us</a>
				</div>
			</Card.Content>
		</Card.Root>

		<Card.Root class="border-orange-200 bg-orange-50">
			<Card.Header>
				<Card.Title class="text-orange-800">Fraud Prevention</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-3">
				<div>
					<strong>National Disaster Fraud Hotline:</strong>
					<a href="tel:866-720-5721" class="block text-blue-600">866-720-5721</a>
				</div>
				<div class="text-sm text-orange-700">
					<strong>Warning:</strong> Only donate to verified organizations. 
					Scammers often target disaster victims.
				</div>
			</Card.Content>
		</Card.Root>

		<Card.Root class="border-gray-200 bg-gray-50">
			<Card.Header>
				<Card.Title class="text-gray-800">Cached Resources</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-3">
				<Button href="/" variant="outline" class="w-full">
					Home
				</Button>
				<Button href="/get-help" variant="outline" class="w-full">
					Get Help
				</Button>
				<Button href="/give-help" variant="outline" class="w-full">
					Give Help
				</Button>
				<Button href="/find-someone" variant="outline" class="w-full">
					Find Someone
				</Button>
			</Card.Content>
		</Card.Root>
	</div>

	<Alert.Root class="mt-8 border-blue-200 bg-blue-50">
		<Alert.Description class="text-blue-800">
			<strong>Stay Connected:</strong> This app works offline but information may be outdated. 
			When you regain internet connection, refresh the page for the latest emergency updates.
		</Alert.Description>
	</Alert.Root>
</div>