<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { AlertTriangle, CheckCircle, X, DollarSign, Star, Heart, Package, UserPlus, Home, PawPrint, Droplets } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Give Help - Texas Hill Country Flood Relief</title>
	<meta
		name="description"
		content="Donate money, supplies, volunteer time, or offer resources to flood victims. Most effective ways to help."
	/>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">Give Help</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-gray-600">
			Donate money, supplies, volunteer time, or offer other resources to flood victims
		</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm"
			>Most Effective Ways to Help</Badge
		>
	</div>

	<!-- Current Urgent Needs Alert -->
	<section class="mb-12">
		<Alert.Root class="mb-6 border-2 border-orange-500 bg-orange-50">
			<Alert.Description class="text-orange-900">
				<div class="text-center">
					<h3 class="mb-3 text-lg font-bold flex items-center justify-center gap-2"><AlertTriangle class="h-5 w-5 text-orange-600" />Current Urgent Needs</h3>
					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<h4 class="mb-2 font-semibold text-green-800">MOST NEEDED RIGHT NOW:</h4>
							<ul class="space-y-1 text-sm">
								<li class="flex items-center gap-2">
									<CheckCircle class="h-4 w-4 text-green-600" /> Monetary donations (fastest way to help)
								</li>
								<li class="flex items-center gap-2">
									<CheckCircle class="h-4 w-4 text-green-600" /> Bottled water
								</li>
								<li class="flex items-center gap-2">
									<CheckCircle class="h-4 w-4 text-green-600" /> Baby formula and diapers
								</li>
								<li class="flex items-center gap-2">
									<CheckCircle class="h-4 w-4 text-green-600" /> Volunteers for meal service
								</li>
							</ul>
						</div>
						<div>
							<h4 class="mb-2 font-semibold text-red-800">AT CAPACITY - DO NOT BRING:</h4>
							<ul class="space-y-1 text-sm">
								<li class="flex items-center gap-2">
									<X class="h-4 w-4 text-red-600" /> Used clothing
								</li>
								<li class="flex items-center gap-2">
									<X class="h-4 w-4 text-red-600" /> Furniture
								</li>
								<li class="flex items-center gap-2"><X class="h-4 w-4 text-red-600" /> Toys</li>
							</ul>
						</div>
					</div>
				</div>
			</Alert.Description>
		</Alert.Root>
	</section>

	<!-- Donate Money Section -->
	<section class="mb-12">
		<h2
			class="mb-8 flex items-center justify-center gap-3 text-center text-3xl font-bold text-green-800"
		>
			<DollarSign class="h-8 w-8 text-green-600" />
			Donate Money (Most Effective Way to Help)
		</h2>

		<div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
			<!-- Local Fund -->
			<Card.Root
				class="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
			>
				<div
					class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 transition-all duration-300 group-hover:from-green-500/10 group-hover:to-green-600/15"
				></div>
				<Card.Header class="relative z-10 pt-8 pb-4 text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
					>
						<Star class="h-8 w-8 text-yellow-500" />
					</div>
					<Card.Title
						class="mb-2 flex items-center justify-center gap-2 text-xl font-bold text-green-700"
					>
						Kerr County Flood Relief Fund
						<Badge class="border-green-200 bg-green-100 text-green-800">LOCAL</Badge>
					</Card.Title>
					<Card.Description class="font-medium text-green-700">
						Community Foundation of Texas Hill Country
					</Card.Description>
				</Card.Header>
				<Card.Content class="relative z-10 px-6 pb-8">
					<div class="space-y-4">
						<div>
							<h4 class="mb-3 text-center font-semibold text-gray-800">Why Give Locally?</h4>
							<ul class="space-y-2 text-sm text-gray-600">
								<li class="flex items-center gap-2">
									<span class="text-green-500">•</span> 100% goes directly to local flood victims
								</li>
								<li class="flex items-center gap-2">
									<span class="text-green-500">•</span> Managed by local community leaders
								</li>
								<li class="flex items-center gap-2">
									<span class="text-green-500">•</span> Immediate deployment of funds
								</li>
								<li class="flex items-center gap-2">
									<span class="text-green-500">•</span> Tax-deductible (Tax ID: 20-1974588)
								</li>
							</ul>
						</div>
						<div class="rounded-xl border border-green-200 bg-white/80 p-4 backdrop-blur-sm">
							<h4 class="mb-2 text-center font-semibold text-gray-800">Tax ID: 20-1974588</h4>
							<p class="mb-3 text-center text-sm text-gray-600">
								Community Foundation of Texas Hill Country
							</p>
							<Button
								href="https://cftexashillcountry.fcsuite.com/erp/donate/create/fund?funit_id=4201"
								target="_blank"
								class="w-full rounded-xl bg-gradient-to-r from-green-600 to-green-700 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-800 hover:shadow-xl"
							>
								Donate Securely Online →
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- Red Cross -->
			<Card.Root
				class="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
			>
				<div
					class="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/10 transition-all duration-300 group-hover:from-red-500/10 group-hover:to-red-600/15"
				></div>
				<Card.Header class="relative z-10 pt-8 pb-4 text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
					>
						<Heart class="h-8 w-8 text-red-500" />
					</div>
					<Card.Title class="mb-2 text-xl font-bold text-red-700">American Red Cross</Card.Title>
					<Card.Description class="font-medium text-red-700">
						Supporting shelters and emergency aid
					</Card.Description>
				</Card.Header>
				<Card.Content class="relative z-10 px-6 pb-8">
					<div class="space-y-4">
						<div>
							<h4 class="mb-3 text-center font-semibold text-gray-800">Red Cross Services</h4>
							<ul class="space-y-2 text-sm text-gray-600">
								<li class="flex items-center gap-2">
									<span class="text-red-500">•</span> Emergency shelter operations
								</li>
								<li class="flex items-center gap-2">
									<span class="text-red-500">•</span> Disaster relief supplies
								</li>
								<li class="flex items-center gap-2">
									<span class="text-red-500">•</span> Emergency assistance programs
								</li>
								<li class="flex items-center gap-2">
									<span class="text-red-500">•</span> Mental health support
								</li>
							</ul>
						</div>
						<div class="space-y-3">
							<div
								class="rounded-xl border border-red-200 bg-white/80 p-3 text-center backdrop-blur-sm"
							>
								<h4 class="mb-1 font-semibold text-gray-800">Quick Donation</h4>
								<p class="mb-2 text-sm text-gray-600">Text REDCROSS to 90999 to donate $10</p>
								<Button
									href="sms:90999?body=REDCROSS"
									class="w-full rounded-xl bg-gradient-to-r from-red-600 to-red-700 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-xl"
								>
									Text to Donate $10
								</Button>
							</div>
							<Button
								href="https://redcross.org"
								target="_blank"
								variant="outline"
								class="w-full rounded-xl border-2 border-red-600 py-2 font-semibold text-red-700 transition-all duration-300 hover:border-red-700 hover:bg-red-50"
							>
								Donate Online →
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>

		<!-- Donation Warning -->
		<Alert.Root class="mt-6 border-yellow-200 bg-yellow-50">
			<Alert.Description class="text-yellow-800">
				<strong class="flex items-center gap-2"><AlertTriangle class="h-4 w-4 text-yellow-600" />Warning:</strong> Verify all charities before donating.
				<a
					href="https://give.org"
					target="_blank"
					class="font-semibold underline hover:no-underline"
				>
					Check charity ratings at Give.org
				</a> or call the charity directly to confirm legitimacy.
			</Alert.Description>
		</Alert.Root>
	</section>

	<!-- Donate Supplies Section -->
	<section class="mb-12">
		<h2 class="mb-6 flex items-center gap-2 text-2xl font-semibold text-blue-800">
			<Package class="h-6 w-6 text-blue-600" />
			Donate Supplies
		</h2>

		<Alert.Root class="mb-6 border-blue-200 bg-blue-50">
			<Alert.Description class="text-blue-800">
				<strong>Check current needs first!</strong> Donation needs change rapidly. Call ahead to confirm
				what's needed before bringing supplies.
			</Alert.Description>
		</Alert.Root>

		<div class="grid gap-6 md:grid-cols-2">
			<!-- Water Drop-off -->
			<Card.Root class="border-l-4 border-blue-600">
				<Card.Header>
					<Card.Title class="text-blue-800">Kerrville Municipal Building</Card.Title>
					<Card.Description>Water donations only</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div>
							<h4 class="mb-1 font-semibold text-gray-800">Location</h4>
							<p class="text-sm text-gray-600">701 Main Street, Kerrville, TX 78028</p>
						</div>
						<div>
							<h4 class="mb-1 font-semibold text-gray-800">Accepting</h4>
							<div class="flex flex-wrap gap-2">
								<Badge variant="outline" class="text-xs">Bottled water only</Badge>
								<Badge variant="outline" class="text-xs">Drive-through drop-off</Badge>
							</div>
						</div>
						<Button href="tel:830-257-8000" variant="outline" class="w-full">
							Call (830) 257-8000
						</Button>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- Food Drop-off -->
			<Card.Root class="border-l-4 border-blue-600">
				<Card.Header>
					<Card.Title class="text-blue-800">First Baptist Church</Card.Title>
					<Card.Description>Food and baby supplies</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div>
							<h4 class="mb-1 font-semibold text-gray-800">Location</h4>
							<p class="text-sm text-gray-600">600 Water Street, Kerrville, TX 78028</p>
						</div>
						<div>
							<h4 class="mb-1 font-semibold text-gray-800">Accepting</h4>
							<div class="flex flex-wrap gap-2">
								<Badge variant="outline" class="text-xs">Non-perishable food</Badge>
								<Badge variant="outline" class="text-xs">Baby formula</Badge>
								<Badge variant="outline" class="text-xs">Diapers</Badge>
							</div>
						</div>
						<Button href="tel:830-257-3505" variant="outline" class="w-full">
							Call (830) 257-3505
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
		</div>

		<Button
			href="/give-help/supplies"
			variant="outline"
			class="mt-6 w-full border-blue-600 text-blue-700"
		>
			See Full Current Needs List →
		</Button>
	</section>

	<!-- Volunteer Section -->
	<section class="mb-12">
		<h2 class="mb-6 flex items-center gap-2 text-2xl font-semibold text-purple-800">
			<UserPlus class="h-6 w-6 text-purple-600" />
			Volunteer Your Time
		</h2>

		<Alert.Root class="mb-6 border-red-200 bg-red-50">
			<Alert.Description class="text-red-800">
				<strong>Must register first - do not self-deploy!</strong>
				Unorganized volunteers can interfere with emergency operations. Please register through official
				channels.
			</Alert.Description>
		</Alert.Root>

		<Card.Root class="mb-6 border-2 border-purple-600 bg-purple-50">
			<Card.Header>
				<Card.Title class="text-purple-800">Current Volunteer Needs</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="grid gap-6 md:grid-cols-2">
					<div>
						<h4 class="mb-3 font-semibold text-gray-800">Immediate Needs</h4>
						<ul class="space-y-2">
							<li class="flex items-center gap-2">
								<Badge class="bg-red-600 text-white">HIGH</Badge>
								<span class="text-sm">Meal service volunteers</span>
							</li>
							<li class="flex items-center gap-2">
								<Badge class="bg-red-600 text-white">HIGH</Badge>
								<span class="text-sm">Bilingual volunteers</span>
							</li>
							<li class="flex items-center gap-2">
								<Badge class="bg-orange-600 text-white">MED</Badge>
								<span class="text-sm">Shelter support</span>
							</li>
							<li class="flex items-center gap-2">
								<Badge class="bg-orange-600 text-white">MED</Badge>
								<span class="text-sm">Administrative help</span>
							</li>
						</ul>
					</div>
					<div>
						<h4 class="mb-3 font-semibold text-gray-800">Registration Channels</h4>
						<div class="space-y-3">
							<div class="rounded-lg border bg-white p-3">
								<h5 class="font-medium text-gray-800">Red Cross</h5>
								<a href="tel:1-800-733-2767" class="text-sm text-blue-600 hover:text-blue-800">
									1-800-RED-CROSS (1-800-733-2767)
								</a>
							</div>
							<div class="rounded-lg border bg-white p-3">
								<h5 class="font-medium text-gray-800">Local Coordination Center</h5>
								<a href="tel:830-257-7300" class="text-sm text-blue-600 hover:text-blue-800">
									(830) 257-7300
								</a>
							</div>
						</div>
					</div>
				</div>
				<Button href="/give-help/volunteer" class="mt-6 w-full bg-purple-600 hover:bg-purple-700">
					Volunteer Registration →
				</Button>
			</Card.Content>
		</Card.Root>
	</section>

	<!-- More Ways to Help -->
	<Card.Root class="mb-8 border-0 bg-white/80 shadow-lg backdrop-blur-sm">
		<Card.Header class="pb-2 text-center">
			<Card.Title class="text-2xl font-bold text-gray-800">More Ways to Help</Card.Title>
		</Card.Header>
		<Card.Content class="p-6">
			<div class="grid gap-6 md:grid-cols-3">
				<Button
					variant="outline"
					href="/give-help/housing"
					class="group h-auto justify-start rounded-xl border-2 bg-white px-6 py-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
				>
					<div class="flex items-center">
						<Home class="mr-4 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
						<div class="text-left">
							<p class="font-semibold text-gray-800">Offer Housing</p>
							<p class="text-sm text-gray-600">Register available space for displaced families</p>
						</div>
					</div>
				</Button>

				<Button
					variant="outline"
					href="tel:830-257-3100"
					class="group h-auto justify-start rounded-xl border-2 bg-white px-6 py-4 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50"
				>
					<div class="flex items-center">
						<PawPrint class="mr-4 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
						<div class="text-left">
							<p class="font-semibold text-gray-800">Foster Pets</p>
							<p class="text-sm text-gray-600">33 pets need temporary homes</p>
						</div>
					</div>
				</Button>

				<Button
					variant="outline"
					href="/give-help/blood-drive"
					class="group h-auto justify-start rounded-xl border-2 bg-white px-6 py-4 transition-all duration-300 hover:border-red-300 hover:bg-red-50"
				>
					<div class="flex items-center">
						<Droplets class="mr-4 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
						<div class="text-left">
							<p class="font-semibold text-gray-800">Donate Blood</p>
							<p class="text-sm text-gray-600">Critical shortage - Emergency need</p>
						</div>
					</div>
				</Button>
			</div>
		</Card.Content>
	</Card.Root>

	<!-- Footer Help -->
	<Alert.Root class="border-gray-200 bg-gray-50">
		<Alert.Description class="text-center text-gray-700">
			<strong>Want to help but not sure how?</strong> Call 211 (dial 2-1-1) to speak with a
			volunteer coordinator, or contact the Red Cross at
			<a href="tel:1-800-733-2767" class="font-semibold text-blue-600">1-800-733-2767</a> for guidance.
		</Alert.Description>
	</Alert.Root>
</div>

