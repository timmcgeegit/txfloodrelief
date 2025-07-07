<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import ActionCard from '$lib/components/ActionCard.svelte';
	import EmergencyContactCard from '$lib/components/EmergencyContactCard.svelte';
	import QuickAccessButton from '$lib/components/QuickAccessButton.svelte';
	import ScamWarning from '$lib/components/ScamWarning.svelte';
	import { AlertTriangle, HandHeart, Search, Home, Utensils, DollarSign, CreditCard, Package, Smartphone } from '@lucide/svelte';

	const emergencyContacts = [
		{ label: 'Camp Mystic Families', phone: '830-258-1111' },
		{ label: 'FEMA Disaster Aid', phone: '1-800-621-3362' },
		{ label: 'Red Cross Missing', phone: '1-800-733-2767' },
		{ label: 'Kerr County Emergency', phone: '830-315-2430' }
	];
</script>

<svelte:head>
	<title>Texas Hill Country Flood Relief - Emergency Resources</title>
	<meta
		name="description"
		content="Emergency resources for Texas Hill Country flood victims. Get help or give help."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-50">
<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-6 text-5xl leading-tight font-black text-gray-900">
			Texas Hill Country<br />
			<span class="text-primary">Flood Relief</span>
		</h1>
		<p class="mx-auto mb-4 max-w-2xl text-xl text-gray-600">
			Emergency Resources for Flood Victims
		</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm">Updated July 6, 2025</Badge>
	</div>

	<!-- Three Primary Action Cards -->
	<div class="mx-auto mb-12 grid max-w-6xl gap-8 md:grid-cols-3">
		<ActionCard
			href="/get-help"
			icon={AlertTriangle}
			title="I Need Help"
			description="Find shelter, food, medical care, financial assistance, and other emergency resources"
			badgeText="Emergency Resources"
		>
			Get Help Now →
		</ActionCard>

		<ActionCard
			href="/give-help"
			icon={HandHeart}
			title="I Want to Help"
			description="Donate money, supplies, volunteer time, or offer other resources to flood victims"
			badgeText="Donation Coordination"
		>
			Help Others →
		</ActionCard>

		<ActionCard
			href="/find-someone"
			icon={Search}
			title="Looking for Someone"
			description="Reunification centers, emergency hotlines, and official search resources"
			badgeText="Search & Rescue"
		>
			Find Resources →
		</ActionCard>
	</div>

	<!-- Critical Emergency Contacts -->
	<EmergencyContactCard contacts={emergencyContacts} />

	<!-- Quick Access Resources -->
	<Card.Root class="border border-gray-200 bg-white shadow-lg">
		<Card.Header class="pb-2 text-center">
			<Card.Title class="text-2xl font-bold text-gray-800">Quick Access Resources</Card.Title>
		</Card.Header>
		<Card.Content class="md:p-6">
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<QuickAccessButton
					href="/get-help/shelter"
					icon={Home}
					title="Emergency Shelters"
					description="Currently accepting residents"
					variant="primary"
				/>
				<QuickAccessButton
					href="/get-help/food-water"
					icon={Utensils}
					title="Food & Water"
					description="Distribution sites"
					variant="primary"
				/>
				<QuickAccessButton
					href="/get-help/financial"
					icon={DollarSign}
					title="Financial Assistance"
					description="FEMA & SBA loans"
					variant="primary"
				/>
				<QuickAccessButton
					href="/give-help/donate"
					icon={CreditCard}
					title="Donate Money"
					description="Verified organizations"
					variant="success"
				/>
				<QuickAccessButton
					href="/give-help/supplies"
					icon={Package}
					title="Supply Donations"
					description="Hygiene, cleaning, food"
					variant="success"
				/>
				<QuickAccessButton
					href="/updates"
					icon={Smartphone}
					title="Latest Updates"
					description="Official announcements"
					variant="primary"
				/>
			</div>
		</Card.Content>
	</Card.Root>

	<!-- Scam Warning -->
	<ScamWarning />
</div>
</div>