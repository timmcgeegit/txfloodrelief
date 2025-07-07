<script>
	import * as Card from "$lib/components/ui/card/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import { Phone, Mail, Building, GraduationCap, Users, Search, CheckCircle, Heart } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Looking for Someone - Texas Hill Country Flood Relief</title>
	<meta name="description" content="Reunification resources, missing persons hotline, and official search resources for flood victims." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">Looking for Someone</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-gray-600">
			Reunification centers, emergency hotlines, and official search resources
		</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm">Official Resources Only</Badge>
		
		
		<!-- Important Notice -->
		<Alert.Root class="mt-6 bg-blue-50 border-blue-200">
			<Alert.Description class="text-blue-800 text-center">
				<strong>Important:</strong> This page provides RESOURCES ONLY - we do not maintain a missing persons database. 
				Use the official channels below to report or search for missing persons.
			</Alert.Description>
		</Alert.Root>
	</div>
	
	<!-- Report Someone Missing - Priority Section -->
	<section class="mb-12">
		<h2 class="mb-8 text-center text-3xl font-bold text-red-800 flex items-center justify-center gap-3">
			<Phone class="h-8 w-8" />
			Report Someone Missing
		</h2>
		
		<Card.Root
			class="group relative overflow-hidden border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl mb-6"
		>
			<div
				class="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/10 transition-all duration-300 group-hover:from-red-500/10 group-hover:to-red-600/15"
			></div>
			<Card.Header class="relative z-10 pt-8 pb-4 text-center">
				<div
					class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-3xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
				>
					<Phone class="h-8 w-8 text-white" />
				</div>
				<Card.Title class="text-red-700 text-2xl font-bold mb-2">Kerr County Missing Persons Hotline</Card.Title>
				<Card.Description class="text-red-700 font-medium">
					Official hotline for reporting missing persons in the flood zone
				</Card.Description>
			</Card.Header>
			<Card.Content class="relative z-10 px-6 pb-8">
				<div class="grid md:grid-cols-2 gap-6 mb-6">
					<div class="text-center bg-white/80 p-4 rounded-xl border border-red-200 backdrop-blur-sm">
						<h4 class="font-semibold text-gray-800 mb-2">Phone Hotline</h4>
						<a href="tel:830-258-1111" class="text-2xl font-bold text-red-600 hover:text-red-800 block transition-colors duration-300 flex items-center justify-center gap-2">
							<Phone class="h-6 w-6" /> 830-258-1111
						</a>
						<p class="text-sm text-gray-600 mt-1">Available 24/7</p>
					</div>
					<div class="text-center bg-white/80 p-4 rounded-xl border border-red-200 backdrop-blur-sm">
						<h4 class="font-semibold text-gray-800 mb-2">Email Reports</h4>
						<a href="mailto:floodrecovery@co.kerr.tx.us" class="text-sm font-bold text-red-600 hover:text-red-800 block break-all transition-colors duration-300 flex items-center justify-center gap-2">
							<Mail class="h-4 w-4 flex-shrink-0" /> floodrecovery@co.kerr.tx.us
						</a>
						<p class="text-sm text-gray-600 mt-1">For detailed information</p>
					</div>
				</div>
				
				<Alert.Root class="bg-yellow-50 border-yellow-200 mb-4">
					<Alert.Description class="text-yellow-800">
						<strong>Have ready when you call:</strong> Full name, age, physical description, last seen location, 
						any medical needs, and your contact information.
					</Alert.Description>
				</Alert.Root>
				
				<Button href="tel:830-258-1111" class="w-full rounded-xl bg-gradient-to-r from-red-600 to-red-700 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-xl">
					Call Missing Persons Hotline Now →
				</Button>
			</Card.Content>
		</Card.Root>
	</section>
	
	<!-- Official Reunification Centers -->
	<section class="mb-12">
		<h2 class="mb-8 text-center text-3xl font-bold text-green-800 flex items-center justify-center gap-3">
			<Building class="h-8 w-8" />
			Official Reunification Centers
		</h2>
		
		<div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
			<!-- For Camp/Youth Groups -->
			<Card.Root class="border-2 border-green-600 bg-green-50">
				<Card.Header>
					<Card.Title class="text-green-800 flex items-center gap-2">
						<GraduationCap class="h-6 w-6" />
						For Camp/Youth Groups
					</Card.Title>
					<Card.Description class="text-green-700 font-semibold">
						Ingram Middle School
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div>
							<h4 class="font-semibold text-gray-800">Location</h4>
							<p class="text-gray-600">
								125 Brave Run W<br>
								Ingram, TX 78025
							</p>
						</div>
						<div>
							<h4 class="font-semibold text-gray-800">Hours</h4>
							<p class="text-gray-600">24/7 until further notice</p>
						</div>
						<div>
							<h4 class="font-semibold text-gray-800">Services</h4>
							<div class="flex flex-wrap gap-2">
								<Badge variant="outline" class="text-xs">Lists updated hourly</Badge>
								<Badge variant="outline" class="text-xs">Counseling available</Badge>
								<Badge variant="outline" class="text-xs">Youth specialist on-site</Badge>
							</div>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
			
			<!-- For General Public -->
			<Card.Root class="border-2 border-green-600 bg-green-50">
				<Card.Header>
					<Card.Title class="text-green-800 flex items-center gap-2">
						<Users class="h-6 w-6" />
						For General Public
					</Card.Title>
					<Card.Description class="text-green-700 font-semibold">
						Arcadia Live Theater
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div>
							<h4 class="font-semibold text-gray-800">Location</h4>
							<p class="text-gray-600">
								717 Water St<br>
								Kerrville, TX 78028
							</p>
						</div>
						<div>
							<h4 class="font-semibold text-gray-800">Hours</h4>
							<p class="text-gray-600">8 AM - 10 PM daily</p>
						</div>
						<div>
							<h4 class="font-semibold text-gray-800">Services</h4>
							<div class="flex flex-wrap gap-2">
								<Badge variant="outline" class="text-xs">Family reunification</Badge>
								<Badge variant="outline" class="text-xs">Charging stations</Badge>
								<Badge variant="outline" class="text-xs">Information updates</Badge>
							</div>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Search for Someone -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-blue-800 flex items-center gap-2">
			<Search class="h-6 w-6" />
			Search for Someone
		</h2>
		
		<div class="space-y-6">
			<!-- Step 1: Official Registries -->
			<Card.Root class="border-l-4 border-blue-600">
				<Card.Header>
					<Card.Title class="text-blue-800 flex items-center gap-2">
						<span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
						Check Official Registries
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="grid md:grid-cols-2 gap-4">
						<div class="bg-blue-50 p-4 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-2">Red Cross Safe and Well</h4>
							<p class="text-sm text-gray-600 mb-3">Register yourself or search for others who have checked in</p>
							<Button variant="outline" href="https://safeandwell.communityos.org" target="_blank" class="w-full">
								Visit Safe and Well →
							</Button>
						</div>
						<div class="bg-blue-50 p-4 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-2">Google Person Finder</h4>
							<p class="text-sm text-gray-600 mb-3">Global database for disaster victims and their families</p>
							<Button variant="outline" href="https://google.org/personfinder" target="_blank" class="w-full">
								Visit Person Finder →
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
			
			<!-- Step 2: Contact Hospitals -->
			<Card.Root class="border-l-4 border-blue-600">
				<Card.Header>
					<Card.Title class="text-blue-800 flex items-center gap-2">
						<span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
						Contact Hospitals Directly
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="bg-blue-50 p-4 rounded-lg">
						<h4 class="font-semibold text-gray-800 mb-2">Peterson Regional Medical Center</h4>
						<p class="text-sm text-gray-600 mb-3">Main hospital serving the Kerrville area</p>
						<div class="flex items-center justify-between">
							<div>
								<p class="font-medium text-gray-800">Ask for patient information</p>
								<p class="text-sm text-gray-600">Have ID ready and relationship to patient</p>
							</div>
							<Button href="tel:830-896-4200" class="bg-blue-600 hover:bg-blue-700">
								Call (830) 896-4200
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
			
			<!-- Step 3: Monitor Official Updates -->
			<Card.Root class="border-l-4 border-blue-600">
				<Card.Header>
					<Card.Title class="text-blue-800 flex items-center gap-2">
						<span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
						Monitor Official Updates
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="bg-blue-50 p-4 rounded-lg">
						<h4 class="font-semibold text-gray-800 mb-2">Kerr County Emergency Management</h4>
						<p class="text-sm text-gray-600 mb-3">Updates posted every 3 hours with official information</p>
						<Button variant="outline" href="https://facebook.com/KerrCountyEM" target="_blank" class="w-full">
							Follow @KerrCountyEM on Facebook →
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- If You Are Safe -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-green-800 flex items-center gap-2">
			<CheckCircle class="h-6 w-6" />
			If You Are Safe
		</h2>
		
		<Card.Root class="border-2 border-green-600 bg-green-50">
			<Card.Header>
				<Card.Title class="text-green-800">Let Your Family Know You're Safe</Card.Title>
				<Card.Description class="text-green-700">
					Help reduce search efforts by registering yourself as safe
				</Card.Description>
			</Card.Header>
			<Card.Content>
				<div class="grid md:grid-cols-3 gap-4">
					<div class="text-center p-4 bg-white rounded-lg">
						<h4 class="font-semibold text-gray-800 mb-2">Register Online</h4>
						<p class="text-sm text-gray-600 mb-3">Red Cross Safe and Well registry</p>
						<Button variant="outline" href="https://safeandwell.communityos.org" target="_blank" class="w-full">
							Register as Safe
						</Button>
					</div>
					<div class="text-center p-4 bg-white rounded-lg">
						<h4 class="font-semibold text-gray-800 mb-2">Call Family</h4>
						<p class="text-sm text-gray-600 mb-3">Contact family members directly if possible</p>
						<Button variant="outline" class="w-full">
							Use Phone
						</Button>
					</div>
					<div class="text-center p-4 bg-white rounded-lg">
						<h4 class="font-semibold text-gray-800 mb-2">Visit Center</h4>
						<p class="text-sm text-gray-600 mb-3">Check in at reunification center</p>
						<Button variant="outline" class="w-full">
							Go to Center
						</Button>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</section>
	
	<!-- Missing Pets -->
	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-6 text-purple-800 flex items-center gap-2">
			<Heart class="h-6 w-6" />
			Missing Pets
		</h2>
		
		<Card.Root class="border-2 border-purple-600 bg-purple-50">
			<Card.Header>
				<Card.Title class="text-purple-800">Pet Reunification Resources</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="grid md:grid-cols-3 gap-4">
					<div class="bg-white p-4 rounded-lg text-center">
						<h4 class="font-semibold text-gray-800 mb-2">Kerr County Animal Services</h4>
						<a href="tel:830-257-3100" class="text-lg font-bold text-purple-600 hover:text-purple-800">
							(830) 257-3100
						</a>
					</div>
					<div class="bg-white p-4 rounded-lg text-center">
						<h4 class="font-semibold text-gray-800 mb-2">PetFinder Disaster Page</h4>
						<Button variant="outline" href="https://petfinder.com" target="_blank" class="w-full">
							Search Lost Pets
						</Button>
					</div>
					<div class="bg-white p-4 rounded-lg text-center">
						<h4 class="font-semibold text-gray-800 mb-2">Local Shelters</h4>
						<p class="text-sm text-gray-600">Check all local animal shelters and veterinary clinics</p>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</section>
	
	<!-- Emergency Footer -->
	<Alert.Root class="bg-red-50 border-red-200">
		<Alert.Description class="text-center text-red-800">
			<strong>Emergency:</strong> If someone is in immediate danger, call 911. 
			For missing persons, call <a href="tel:830-258-1111" class="font-semibold underline">830-258-1111</a>. 
			For general Red Cross help, call <a href="tel:1-800-733-2767" class="font-semibold underline">1-800-733-2767</a>.
		</Alert.Description>
	</Alert.Root>
</div>