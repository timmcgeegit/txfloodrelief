<script>
	import * as Card from "$lib/components/ui/card/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Alert from "$lib/components/ui/alert/index.js";
</script>

<svelte:head>
	<title>Updates - Texas Hill Country Flood Relief</title>
	<meta name="description" content="Latest official updates, news coverage, and emergency information aggregated from official sources." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">Latest Updates</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-gray-600">
			Official information aggregated from external sources
		</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm">Real-time Emergency Information</Badge>
	</div>
		
	<!-- Important Notice -->
	<Alert.Root class="mb-6 bg-blue-50 border-blue-200">
		<Alert.Description class="text-blue-800">
			<strong>Note:</strong> We aggregate updates from official sources - this information is not maintained by us. 
			For the most current information, visit the official sources directly.
		</Alert.Description>
	</Alert.Root>
	
	<!-- Emergency Information -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-red-800 flex items-center gap-2">
			<span class="text-2xl">🚨</span>
			Current Emergency Information
		</h2>
		
		<div class="grid md:grid-cols-2 gap-6">
			<!-- Weather Alerts -->
			<Card.Root class="border-2 border-red-600 bg-red-50">
				<Card.Header>
					<Card.Title class="text-red-800 flex items-center gap-2">
						<span class="text-xl">🌪️</span>
						Weather Alerts
						<Badge class="bg-red-600 text-white">LIVE</Badge>
					</Card.Title>
					<Card.Description class="text-red-700">
						National Weather Service warnings and watches
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<p class="text-sm text-gray-600">
							Current weather conditions, flood warnings, and severe weather alerts for the Texas Hill Country region.
						</p>
						<Button href="https://weather.gov/ewx" target="_blank" class="w-full bg-red-600 hover:bg-red-700">
							View Live Weather Alerts →
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
			
			<!-- Road Closures -->
			<Card.Root class="border-2 border-orange-600 bg-orange-50">
				<Card.Header>
					<Card.Title class="text-orange-800 flex items-center gap-2">
						<span class="text-xl">🚧</span>
						Road Closures
						<Badge class="bg-orange-600 text-white">UPDATED</Badge>
					</Card.Title>
					<Card.Description class="text-orange-700">
						Current road conditions and closures
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<p class="text-sm text-gray-600">
							Real-time road closure information and alternate routes throughout the affected area.
						</p>
						<Button href="https://drivetexas.org" target="_blank" class="w-full bg-orange-600 hover:bg-orange-700">
							View Road Conditions →
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Official Sources -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-blue-800 flex items-center gap-2">
			<span class="text-2xl">📡</span>
			Official Social Media & Updates
		</h2>
		
		<div class="grid md:grid-cols-3 gap-6">
			<!-- Kerr County EM -->
			<Card.Root class="hover:shadow-lg transition-shadow">
				<Card.Header>
					<Card.Title class="text-blue-800">Kerr County Emergency Management</Card.Title>
					<Card.Description>Local emergency coordination updates</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div class="bg-blue-50 p-3 rounded-lg">
							<p class="text-sm text-gray-600 mb-2">Follow for real-time local updates</p>
							<p class="text-xs text-gray-500">Updates posted every 3 hours</p>
						</div>
						<div class="space-y-2">
							<Button href="https://facebook.com/KerrCountyEM" target="_blank" variant="outline" class="w-full">
								Facebook →
							</Button>
							<Button href="https://twitter.com/KerrCountyEM" target="_blank" variant="outline" class="w-full">
								Twitter/X →
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
			
			<!-- Texas Division of EM -->
			<Card.Root class="hover:shadow-lg transition-shadow">
				<Card.Header>
					<Card.Title class="text-blue-800">Texas Division of Emergency Management</Card.Title>
					<Card.Description>State-level emergency updates</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div class="bg-blue-50 p-3 rounded-lg">
							<p class="text-sm text-gray-600 mb-2">Official state emergency information</p>
							<p class="text-xs text-gray-500">Statewide perspective and resources</p>
						</div>
						<div class="space-y-2">
							<Button href="https://facebook.com/TexasDEM" target="_blank" variant="outline" class="w-full">
								Facebook →
							</Button>
							<Button href="https://twitter.com/TxDEM" target="_blank" variant="outline" class="w-full">
								Twitter/X →
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
			
			<!-- National Weather Service -->
			<Card.Root class="hover:shadow-lg transition-shadow">
				<Card.Header>
					<Card.Title class="text-blue-800">National Weather Service</Card.Title>
					<Card.Description>Austin/San Antonio Office</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div class="bg-blue-50 p-3 rounded-lg">
							<p class="text-sm text-gray-600 mb-2">Weather forecasts and flood warnings</p>
							<p class="text-xs text-gray-500">Scientific weather data and alerts</p>
						</div>
						<div class="space-y-2">
							<Button href="https://facebook.com/NWSAustin" target="_blank" variant="outline" class="w-full">
								Facebook →
							</Button>
							<Button href="https://twitter.com/NWSSanAntonio" target="_blank" variant="outline" class="w-full">
								Twitter/X →
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- News Coverage -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-green-800 flex items-center gap-2">
			<span class="text-2xl">📺</span>
			News Coverage
		</h2>
		
		<div class="grid md:grid-cols-2 gap-6">
			<!-- Local News -->
			<Card.Root class="border-l-4 border-green-600">
				<Card.Header>
					<Card.Title class="text-green-800">Local Coverage</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-4">
						<div>
							<h4 class="font-semibold text-gray-800 mb-2">KSAT San Antonio</h4>
							<p class="text-sm text-gray-600 mb-2">Live blog with local coverage and updates</p>
							<Button href="https://ksat.com" target="_blank" variant="outline" class="w-full">
								KSAT Live Coverage →
							</Button>
						</div>
						<div>
							<h4 class="font-semibold text-gray-800 mb-2">KXAN Austin</h4>
							<p class="text-sm text-gray-600 mb-2">Regional news and weather updates</p>
							<Button href="https://kxan.com" target="_blank" variant="outline" class="w-full">
								KXAN Coverage →
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
			
			<!-- State/National News -->
			<Card.Root class="border-l-4 border-green-600">
				<Card.Header>
					<Card.Title class="text-green-800">State & National Coverage</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-4">
						<div>
							<h4 class="font-semibold text-gray-800 mb-2">Texas Tribune</h4>
							<p class="text-sm text-gray-600 mb-2">Statewide perspective and policy implications</p>
							<Button href="https://texastribune.org" target="_blank" variant="outline" class="w-full">
								Texas Tribune →
							</Button>
						</div>
						<div>
							<h4 class="font-semibold text-gray-800 mb-2">CNN Weather</h4>
							<p class="text-sm text-gray-600 mb-2">National weather and disaster coverage</p>
							<Button href="https://cnn.com/weather" target="_blank" variant="outline" class="w-full">
								CNN Weather →
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Utility & Infrastructure -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-purple-800 flex items-center gap-2">
			<span class="text-2xl">⚡</span>
			Infrastructure Status
		</h2>
		
		<div class="grid md:grid-cols-3 gap-6">
			<!-- Power Outages -->
			<Card.Root class="hover:shadow-lg transition-shadow">
				<Card.Header>
					<Card.Title class="text-purple-800 flex items-center gap-2">
						<span class="text-xl">🔌</span>
						Power Outages
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<p class="text-sm text-gray-600">Current power outage maps and restoration estimates</p>
						<Button href="https://poweroutage.us/area/state/texas" target="_blank" variant="outline" class="w-full">
							Power Outage Map →
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
			
			<!-- Water Service -->
			<Card.Root class="hover:shadow-lg transition-shadow">
				<Card.Header>
					<Card.Title class="text-purple-800 flex items-center gap-2">
						<span class="text-xl">💧</span>
						Water Service
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<p class="text-sm text-gray-600">Water boil notices and service interruptions</p>
						<Button href="tel:830-257-8000" variant="outline" class="w-full">
							Call Water Dept.
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
			
			<!-- Internet/Cell -->
			<Card.Root class="hover:shadow-lg transition-shadow">
				<Card.Header>
					<Card.Title class="text-purple-800 flex items-center gap-2">
						<span class="text-xl">📱</span>
						Communications
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<p class="text-sm text-gray-600">Cell tower and internet service status</p>
						<Button href="https://downdetector.com" target="_blank" variant="outline" class="w-full">
							Service Status →
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Press Conferences -->
	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
			<span class="text-2xl">🎙️</span>
			Official Press Conferences
		</h2>
		
		<Card.Root class="bg-gray-50">
			<Card.Header>
				<Card.Title class="text-gray-800">Scheduled Updates</Card.Title>
				<Card.Description>Official briefings from emergency management</Card.Description>
			</Card.Header>
			<Card.Content>
				<div class="space-y-4">
					<div class="bg-white p-4 rounded-lg border">
						<div class="flex justify-between items-center">
							<div>
								<h4 class="font-semibold text-gray-800">Next scheduled briefing</h4>
								<p class="text-sm text-gray-600">Check official social media for announcement times</p>
							</div>
							<Button href="https://facebook.com/KerrCountyEM" target="_blank" variant="outline">
								Watch Live →
							</Button>
						</div>
					</div>
					<Alert.Root class="bg-blue-50 border-blue-200">
						<Alert.Description class="text-blue-800">
							<strong>Stay informed:</strong> Follow official social media accounts above for announcements 
							of press conference times and live stream links.
						</Alert.Description>
					</Alert.Root>
				</div>
			</Card.Content>
		</Card.Root>
	</section>
	
	<!-- Footer Notice -->
	<Alert.Root class="bg-gray-50 border-gray-200">
		<Alert.Description class="text-center text-gray-700">
			<strong>Information Disclaimer:</strong> All external links and information are provided as-is from official sources. 
			This site does not verify or maintain the accuracy of external content. For official information, 
			contact authorities directly.
		</Alert.Description>
	</Alert.Root>
</div>