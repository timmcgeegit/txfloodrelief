<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { Home, Utensils, Building2, ClipboardList, Shield, DollarSign, Scale, Car, PawPrint, Heart, Users, FileText } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Get Help - Texas Hill Country Flood Relief</title>
	<meta
		name="description"
		content="Emergency resources for flood victims - shelter, food, medical care, financial assistance."
	/>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">Get Help</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-gray-600">Resources for Flood Victims</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm"
			>Emergency Resources Available Now</Badge
		>
	</div>

	<!-- Immediate Needs Section -->
	<section class="mb-12">
		<h2 class="mb-8 text-center text-3xl font-bold text-gray-800">Immediate Needs</h2>
		<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
			<!-- Emergency Shelter -->
			<Card.Root
				class="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
			>
				<div
					class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 transition-all duration-300 group-hover:from-green-500/10 group-hover:to-green-600/15"
				></div>
				<a href="/get-help/shelter" class="relative z-10 block h-full">
					<Card.Header class="pt-8 pb-6 text-center">
						<div
							class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-3xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
						>
							<Home class="h-8 w-8 text-white" />
						</div>
						<Card.Title class="mb-2 text-2xl font-bold text-green-700"
							>Emergency Shelter Tonight</Card.Title
						>
						<Badge class="border-green-200 bg-green-100 text-green-800">6 OPEN</Badge>
					</Card.Header>
					<Card.Content class="px-6 pb-8">
						<Card.Description class="mb-6 text-center leading-relaxed text-gray-600">
							Find safe places to stay with current availability
						</Card.Description>
						<ul class="mb-6 space-y-2 text-sm text-gray-600">
							<li class="flex items-center gap-2">
								<span class="text-green-500">•</span> 6 shelters currently open in Kerrville area
							</li>
							<li class="flex items-center gap-2">
								<span class="text-green-500">•</span> Medical shelter available
							</li>
							<li class="flex items-center gap-2">
								<span class="text-green-500">•</span> Pet-friendly options
							</li>
							<li class="flex items-center gap-2">
								<span class="text-green-500">•</span> Bilingual support available
							</li>
						</ul>
						<Button
							class="w-full rounded-xl bg-gradient-to-r from-green-600 to-green-700 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-800 hover:shadow-xl"
						>
							Find Shelter →
						</Button>
					</Card.Content>
				</a>
			</Card.Root>

			<!-- Food & Water -->
			<Card.Root
				class="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
			>
				<div
					class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 transition-all duration-300 group-hover:from-blue-500/10 group-hover:to-blue-600/15"
				></div>
				<a href="/get-help/food-water" class="relative z-10 block h-full">
					<Card.Header class="pt-8 pb-6 text-center">
						<div
							class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-3xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
						>
							<Utensils class="h-8 w-8 text-white" />
						</div>
						<Card.Title class="mb-2 text-2xl font-bold text-blue-700">Food & Water Now</Card.Title>
						<Badge class="border-blue-200 bg-blue-100 text-blue-800">AVAILABLE</Badge>
					</Card.Header>
					<Card.Content class="px-6 pb-8">
						<Card.Description class="mb-6 text-center leading-relaxed text-gray-600">
							Free meals and clean water distribution
						</Card.Description>
						<ul class="mb-6 space-y-2 text-sm text-gray-600">
							<li class="flex items-center gap-2">
								<span class="text-blue-500">•</span> Hot meals serving NOW at 3 locations
							</li>
							<li class="flex items-center gap-2">
								<span class="text-blue-500">•</span> Bottled water available
							</li>
							<li class="flex items-center gap-2">
								<span class="text-blue-500">•</span> Special dietary needs accommodated
							</li>
						</ul>
						<Button
							class="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
						>
							Get Food →
						</Button>
					</Card.Content>
				</a>
			</Card.Root>

			<!-- Medical Care -->
			<Card.Root
				class="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
			>
				<div
					class="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/10 transition-all duration-300 group-hover:from-red-500/10 group-hover:to-red-600/15"
				></div>
				<a href="/get-help/medical" class="relative z-10 block h-full">
					<Card.Header class="pt-8 pb-6 text-center">
						<div
							class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-3xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
						>
							<Building2 class="h-8 w-8 text-white" />
						</div>
						<Card.Title class="mb-2 text-2xl font-bold text-red-700">Urgent Medical Care</Card.Title
						>
						<Badge class="border-red-200 bg-red-100 text-red-800">URGENT</Badge>
					</Card.Header>
					<Card.Content class="px-6 pb-8">
						<Card.Description class="mb-6 text-center leading-relaxed text-gray-600">
							Hospitals, clinics, and mobile medical units
						</Card.Description>
						<ul class="mb-6 space-y-2 text-sm text-gray-600">
							<li class="flex items-center gap-2">
								<span class="text-red-500">•</span> Prescription replacement available
							</li>
							<li class="flex items-center gap-2">
								<span class="text-red-500">•</span> Mental health crisis support
							</li>
							<li class="flex items-center gap-2">
								<span class="text-red-500">•</span> Mobile units deployed
							</li>
						</ul>
						<Button
							class="w-full rounded-xl bg-gradient-to-r from-red-600 to-red-700 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-xl"
						>
							Find Medical Help →
						</Button>
					</Card.Content>
				</a>
			</Card.Root>
		</div>
	</section>

	<!-- Financial Help Section -->
	<section class="mb-12">
		<h2 class="mb-8 text-center text-3xl font-bold text-gray-800">Financial Assistance</h2>
		<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
			<!-- FEMA Aid -->
			<Card.Root
				class="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
			>
				<div
					class="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/10 transition-all duration-300 group-hover:from-amber-500/10 group-hover:to-amber-600/15"
				></div>
				<a href="/get-help/financial" class="relative z-10 block h-full">
					<Card.Header class="pt-8 pb-6 text-center">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
						>
							<ClipboardList class="h-6 w-6 text-white" />
						</div>
						<Card.Title class="mb-2 text-xl font-bold text-amber-700">FEMA Disaster Aid</Card.Title>
					</Card.Header>
					<Card.Content class="px-6 pb-8">
						<Card.Description class="mb-6 text-center leading-relaxed text-gray-600">
							Federal assistance for individuals and families
						</Card.Description>
						<ul class="mb-6 space-y-2 text-sm text-gray-600">
							<li class="flex items-center gap-2">
								<span class="text-amber-500">•</span> Apply online or by phone
							</li>
							<li class="flex items-center gap-2">
								<span class="text-amber-500">•</span> Covers temporary housing, repairs, other needs
							</li>
							<li class="flex items-center gap-2">
								<span class="text-amber-500">•</span> No fee to apply
							</li>
						</ul>
						<Button
							variant="outline"
							class="w-full rounded-xl border-2 border-amber-600 py-3 font-semibold text-amber-700 transition-all duration-300 hover:border-amber-700 hover:bg-amber-50"
						>
							Apply for FEMA →
						</Button>
					</Card.Content>
				</a>
			</Card.Root>

			<!-- Insurance Help -->
			<Card.Root
				class="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
			>
				<div
					class="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-600/10 transition-all duration-300 group-hover:from-slate-500/10 group-hover:to-slate-600/15"
				></div>
				<a href="/get-help/financial" class="relative z-10 block h-full">
					<Card.Header class="pt-8 pb-6 text-center">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-500 to-slate-600 text-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
						>
							<Shield class="h-6 w-6 text-white" />
						</div>
						<Card.Title class="mb-2 text-xl font-bold text-slate-700">Insurance Help</Card.Title>
					</Card.Header>
					<Card.Content class="px-6 pb-8">
						<Card.Description class="mb-6 text-center leading-relaxed text-gray-600">
							File claims and get assistance
						</Card.Description>
						<ul class="mb-6 space-y-2 text-sm text-gray-600">
							<li class="flex items-center gap-2">
								<span class="text-slate-500">•</span> What to document
							</li>
							<li class="flex items-center gap-2">
								<span class="text-slate-500">•</span> Fighting claim denials
							</li>
							<li class="flex items-center gap-2">
								<span class="text-slate-500">•</span> Finding your adjuster
							</li>
						</ul>
						<Button
							variant="outline"
							class="w-full rounded-xl border-2 border-slate-600 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-slate-700 hover:bg-slate-50"
						>
							Insurance Guide →
						</Button>
					</Card.Content>
				</a>
			</Card.Root>

			<!-- Emergency Loans -->
			<Card.Root
				class="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
			>
				<div
					class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 transition-all duration-300 group-hover:from-emerald-500/10 group-hover:to-emerald-600/15"
				></div>
				<a href="/get-help/financial" class="relative z-10 block h-full">
					<Card.Header class="pt-8 pb-6 text-center">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
						>
							<DollarSign class="h-6 w-6 text-white" />
						</div>
						<Card.Title class="mb-2 text-xl font-bold text-emerald-700">Emergency Loans</Card.Title>
					</Card.Header>
					<Card.Content class="px-6 pb-8">
						<Card.Description class="mb-6 text-center leading-relaxed text-gray-600">
							Low-interest disaster loans
						</Card.Description>
						<ul class="mb-6 space-y-2 text-sm text-gray-600">
							<li class="flex items-center gap-2">
								<span class="text-emerald-500">•</span> SBA loans up to $500,000
							</li>
							<li class="flex items-center gap-2">
								<span class="text-emerald-500">•</span> Business loans available
							</li>
							<li class="flex items-center gap-2">
								<span class="text-emerald-500">•</span> How to qualify
							</li>
						</ul>
						<Button
							variant="outline"
							class="w-full rounded-xl border-2 border-emerald-600 py-3 font-semibold text-emerald-700 transition-all duration-300 hover:border-emerald-700 hover:bg-emerald-50"
						>
							Loan Info →
						</Button>
					</Card.Content>
				</a>
			</Card.Root>
		</div>
	</section>

	<!-- Other Resources Section -->
	<Card.Root class="border-0 bg-white/80 shadow-lg backdrop-blur-sm">
		<Card.Header class="pb-2 text-center">
			<Card.Title class="text-2xl font-bold text-gray-800">Other Resources</Card.Title>
		</Card.Header>
		<Card.Content class="p-6">
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<Button
					variant="outline"
					href="/get-help/legal"
					class="group h-auto justify-start rounded-xl border-2 bg-white px-4 py-4 transition-all duration-300 hover:border-purple-300 hover:bg-purple-50"
				>
					<div class="flex items-center w-full min-w-0">
						<div class="mr-3 flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
							<Scale class="h-6 w-6 text-purple-600" />
						</div>
						<div class="text-left min-w-0 flex-1">
							<p class="font-semibold text-gray-800 truncate">Legal Aid</p>
							<p class="text-sm text-gray-600 leading-tight">Free legal help for disaster-related issues</p>
						</div>
					</div>
				</Button>
				<Button
					variant="outline"
					href="/get-help/transportation"
					class="group h-auto justify-start rounded-xl border-2 bg-white px-4 py-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
				>
					<div class="flex items-center w-full min-w-0">
						<div class="mr-3 flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
							<Car class="h-6 w-6 text-blue-600" />
						</div>
						<div class="text-left min-w-0 flex-1">
							<p class="font-semibold text-gray-800 truncate">Transportation</p>
							<p class="text-sm text-gray-600 leading-tight">Emergency rides and vehicle help</p>
						</div>
					</div>
				</Button>
				<Button
					variant="outline"
					href="/get-help/pets"
					class="group h-auto justify-start rounded-xl border-2 bg-white px-4 py-4 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50"
				>
					<div class="flex items-center w-full min-w-0">
						<div class="mr-3 flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
							<PawPrint class="h-6 w-6 text-orange-600" />
						</div>
						<div class="text-left min-w-0 flex-1">
							<p class="font-semibold text-gray-800 truncate">Pet Assistance</p>
							<p class="text-sm text-gray-600 leading-tight">Pet shelters, food, and veterinary care</p>
						</div>
					</div>
				</Button>
				<Button
					variant="outline"
					href="/get-help/mental-health"
					class="group h-auto justify-start rounded-xl border-2 bg-white px-4 py-4 transition-all duration-300 hover:border-green-300 hover:bg-green-50"
				>
					<div class="flex items-center w-full min-w-0">
						<div class="mr-3 flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
							<Heart class="h-6 w-6 text-green-600" />
						</div>
						<div class="text-left min-w-0 flex-1">
							<p class="font-semibold text-gray-800 truncate">Mental Health</p>
							<p class="text-sm text-gray-600 leading-tight">Counseling and crisis support</p>
						</div>
					</div>
				</Button>
				<Button
					variant="outline"
					href="/get-help/families"
					class="group h-auto justify-start rounded-xl border-2 bg-white px-4 py-4 transition-all duration-300 hover:border-pink-300 hover:bg-pink-50"
				>
					<div class="flex items-center w-full min-w-0">
						<div class="mr-3 flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
							<Users class="h-6 w-6 text-pink-600" />
						</div>
						<div class="text-left min-w-0 flex-1">
							<p class="font-semibold text-gray-800 truncate">Families & Children</p>
							<p class="text-sm text-gray-600 leading-tight">Special resources for families</p>
						</div>
					</div>
				</Button>
				<Button
					variant="outline"
					href="/get-help/documents"
					class="group h-auto justify-start rounded-xl border-2 bg-white px-4 py-4 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50"
				>
					<div class="flex items-center w-full min-w-0">
						<div class="mr-3 flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
							<FileText class="h-6 w-6 text-gray-600" />
						</div>
						<div class="text-left min-w-0 flex-1">
							<p class="font-semibold text-gray-800 truncate">Lost Documents</p>
							<p class="text-sm text-gray-600 leading-tight">Replace ID, birth certificates, etc.</p>
						</div>
					</div>
				</Button>
			</div>
		</Card.Content>
	</Card.Root>

	<!-- Emergency Contact Info -->
	<Alert.Root class="mt-8 border-amber-200 bg-amber-50">
		<Alert.Description class="text-center text-amber-800">
			<strong>Need immediate help?</strong> Call 911 for emergencies |
			<a href="tel:830-258-1111" class="font-semibold underline hover:text-amber-900"
				>830-258-1111 for missing persons</a
			>
			|
			<a href="tel:1-800-621-3362" class="font-semibold underline hover:text-amber-900"
				>1-800-621-3362 for FEMA</a
			>
		</Alert.Description>
	</Alert.Root>
</div>
