<script>
	import * as Card from "$lib/components/ui/card/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import { AlertTriangle, Home, Hospital, DollarSign, Zap, PawPrint, HandHeart, Monitor } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Contact Information - Texas Hill Country Flood Relief</title>
	<meta name="description" content="Complete directory of emergency contacts, services, and who to call for different needs during the flood emergency." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">Emergency Contact Directory</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-gray-600">
			Who to contact for different needs during the flood emergency
		</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm">Complete Contact Directory</Badge>
	</div>
		
	<!-- Emergency Banner -->
	<Alert.Root class="mb-6 bg-red-50 border-red-200">
		<Alert.Description class="text-red-800 text-center">
			<strong>Life-threatening emergency?</strong> Call 911 immediately. 
			All other contacts are listed below by category.
		</Alert.Description>
	</Alert.Root>
	
	<!-- Emergency Services -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-red-800 flex items-center gap-2">
			<AlertTriangle class="h-6 w-6 text-red-600" />
			Emergency Services
		</h2>
		
		<div class="grid md:grid-cols-3 gap-6">
			<Card.Root class="border-2 border-red-600 bg-red-50">
				<Card.Header>
					<Card.Title class="text-red-800">Life-Threatening Emergency</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="text-center">
						<a href="tel:911" class="text-4xl font-bold text-red-600 hover:text-red-800 block mb-2">
							911
						</a>
						<p class="text-sm text-gray-600">Fire, Police, Medical Emergency</p>
					</div>
				</Card.Content>
			</Card.Root>
			
			<Card.Root class="border-2 border-orange-600 bg-orange-50">
				<Card.Header>
					<Card.Title class="text-orange-800">Missing Persons</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="text-center">
						<a href="tel:830-258-1111" class="text-2xl font-bold text-orange-600 hover:text-orange-800 block mb-2">
							830-258-1111
						</a>
						<p class="text-sm text-gray-600">Kerr County Missing Persons Hotline</p>
						<p class="text-xs text-gray-500 mt-1">24/7 availability</p>
					</div>
				</Card.Content>
			</Card.Root>
			
			<Card.Root class="border-2 border-yellow-600 bg-yellow-50">
				<Card.Header>
					<Card.Title class="text-yellow-800">Poison Control</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="text-center">
						<a href="tel:1-800-222-1222" class="text-xl font-bold text-yellow-600 hover:text-yellow-800 block mb-2">
							1-800-222-1222
						</a>
						<p class="text-sm text-gray-600">National Poison Control</p>
						<p class="text-xs text-gray-500 mt-1">24/7 availability</p>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Shelter & Basic Needs -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-blue-800 flex items-center gap-2">
			<Home class="h-6 w-6 text-blue-600" />
			Shelter & Basic Needs
		</h2>
		
		<div class="grid md:grid-cols-2 gap-6">
			<Card.Root class="border-l-4 border-blue-600">
				<Card.Header>
					<Card.Title class="text-blue-800">Emergency Shelter Information</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div class="bg-blue-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Shelter Hotline</h4>
							<a href="tel:830-257-7300" class="text-lg font-bold text-blue-600 hover:text-blue-800">
								(830) 257-7300
							</a>
							<p class="text-xs text-gray-500">General shelter coordination</p>
						</div>
						<div class="bg-blue-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">First Methodist (Medical Shelter)</h4>
							<a href="tel:830-896-2875" class="text-lg font-bold text-blue-600 hover:text-blue-800">
								(830) 896-2875
							</a>
							<p class="text-xs text-gray-500">321 Thompson Drive, Kerrville</p>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
			
			<Card.Root class="border-l-4 border-blue-600">
				<Card.Header>
					<Card.Title class="text-blue-800">Food & Water</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div class="bg-blue-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">First Baptist Kitchen</h4>
							<a href="tel:830-257-3505" class="text-lg font-bold text-blue-600 hover:text-blue-800">
								(830) 257-3505
							</a>
							<p class="text-xs text-gray-500">600 Water Street - Hot meals 3x daily</p>
						</div>
						<div class="bg-blue-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Salvation Army Mobile Kitchen</h4>
							<a href="tel:830-257-7410" class="text-lg font-bold text-blue-600 hover:text-blue-800">
								(830) 257-7410
							</a>
							<p class="text-xs text-gray-500">Mobile unit - call for current location</p>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Medical & Health -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-green-800 flex items-center gap-2">
			<Hospital class="h-6 w-6 text-green-600" />
			Medical & Health Services
		</h2>
		
		<div class="grid md:grid-cols-2 gap-6">
			<Card.Root class="border-l-4 border-green-600">
				<Card.Header>
					<Card.Title class="text-green-800">Hospitals & Medical Centers</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div class="bg-green-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Peterson Regional Medical Center</h4>
							<a href="tel:830-896-4200" class="text-lg font-bold text-green-600 hover:text-green-800">
								(830) 896-4200
							</a>
							<p class="text-xs text-gray-500">551 Hill Country Dr, Kerrville</p>
						</div>
						<div class="bg-green-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Kerrville VA Hospital</h4>
							<a href="tel:830-896-2020" class="text-lg font-bold text-green-600 hover:text-green-800">
								(830) 896-2020
							</a>
							<p class="text-xs text-gray-500">3804 Memorial Blvd, Kerrville</p>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
			
			<Card.Root class="border-l-4 border-green-600">
				<Card.Header>
					<Card.Title class="text-green-800">Mental Health & Crisis Support</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div class="bg-green-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Mental Health Crisis Line</h4>
							<a href="tel:1-800-985-5990" class="text-lg font-bold text-green-600 hover:text-green-800">
								1-800-985-5990
							</a>
							<p class="text-xs text-gray-500">National crisis support - 24/7</p>
						</div>
						<div class="bg-green-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Hill Country Mental Health</h4>
							<a href="tel:830-896-2020" class="text-lg font-bold text-green-600 hover:text-green-800">
								(830) 896-2020
							</a>
							<p class="text-xs text-gray-500">Local mental health services</p>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Financial Assistance -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-purple-800 flex items-center gap-2">
			<DollarSign class="h-6 w-6 text-purple-600" />
			Financial Assistance
		</h2>
		
		<div class="grid md:grid-cols-3 gap-6">
			<Card.Root class="hover:shadow-lg transition-shadow">
				<Card.Header>
					<Card.Title class="text-purple-800">FEMA Assistance</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="text-center space-y-2">
						<a href="tel:1-800-621-3362" class="text-xl font-bold text-purple-600 hover:text-purple-800 block">
							1-800-621-3362
						</a>
						<p class="text-sm text-gray-600">Federal disaster assistance</p>
						<Button href="https://disasterassistance.gov" target="_blank" variant="outline" class="w-full">
							Apply Online →
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
			
			<Card.Root class="hover:shadow-lg transition-shadow">
				<Card.Header>
					<Card.Title class="text-purple-800">SBA Disaster Loans</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="text-center space-y-2">
						<a href="tel:1-800-659-2955" class="text-xl font-bold text-purple-600 hover:text-purple-800 block">
							1-800-659-2955
						</a>
						<p class="text-sm text-gray-600">Low-interest disaster loans</p>
						<Button href="https://sba.gov/disaster" target="_blank" variant="outline" class="w-full">
							Learn More →
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
			
			<Card.Root class="hover:shadow-lg transition-shadow">
				<Card.Header>
					<Card.Title class="text-purple-800">Insurance Help</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="text-center space-y-2">
						<a href="tel:1-800-621-0508" class="text-xl font-bold text-purple-600 hover:text-purple-800 block">
							1-800-621-0508
						</a>
						<p class="text-sm text-gray-600">TX Insurance Helpline</p>
						<p class="text-xs text-gray-500">Claim assistance & disputes</p>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Utilities & Infrastructure -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-orange-800 flex items-center gap-2">
			<Zap class="h-6 w-6 text-orange-600" />
			Utilities & Infrastructure
		</h2>
		
		<div class="grid md:grid-cols-3 gap-6">
			<Card.Root class="border-l-4 border-orange-600">
				<Card.Header>
					<Card.Title class="text-orange-800">Water Department</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-2">
						<a href="tel:830-257-8000" class="text-lg font-bold text-orange-600 hover:text-orange-800 block">
							(830) 257-8000
						</a>
						<p class="text-sm text-gray-600">Water service issues</p>
						<p class="text-xs text-gray-500">Boil notices, outages</p>
					</div>
				</Card.Content>
			</Card.Root>
			
			<Card.Root class="border-l-4 border-orange-600">
				<Card.Header>
					<Card.Title class="text-orange-800">Gas Emergencies</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-2">
						<a href="tel:911" class="text-lg font-bold text-red-600 hover:text-red-800 block">
							911
						</a>
						<p class="text-sm text-gray-600">Gas leaks or emergencies</p>
						<p class="text-xs text-gray-500">Call 911 for immediate response</p>
					</div>
				</Card.Content>
			</Card.Root>
			
			<Card.Root class="border-l-4 border-orange-600">
				<Card.Header>
					<Card.Title class="text-orange-800">Power Outages</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-2">
						<p class="text-sm text-gray-600 mb-2">Contact your electric provider:</p>
						<Button href="https://poweroutage.us" target="_blank" variant="outline" class="w-full">
							Find Your Provider →
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Pet & Animal Services -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-green-800 flex items-center gap-2">
			<PawPrint class="h-6 w-6 text-green-600" />
			Pet & Animal Services
		</h2>
		
		<div class="grid md:grid-cols-2 gap-6">
			<Card.Root class="border-l-4 border-green-600">
				<Card.Header>
					<Card.Title class="text-green-800">Missing Pets</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div class="bg-green-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Kerr County Animal Services</h4>
							<a href="tel:830-257-3100" class="text-lg font-bold text-green-600 hover:text-green-800">
								(830) 257-3100
							</a>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
			
			<Card.Root class="border-l-4 border-green-600">
				<Card.Header>
					<Card.Title class="text-green-800">Pet Emergency Care</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div class="bg-green-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Emergency Vet Services</h4>
							<p class="text-sm text-gray-600">Call local veterinary clinics</p>
							<p class="text-xs text-gray-500">Or check shelter pet care services</p>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Volunteer & Donation Coordination -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-blue-800 flex items-center gap-2">
			<HandHeart class="h-6 w-6 text-blue-600" />
			Volunteer & Donation Coordination
		</h2>
		
		<div class="grid md:grid-cols-2 gap-6">
			<Card.Root class="border-l-4 border-blue-600">
				<Card.Header>
					<Card.Title class="text-blue-800">Volunteer Coordination</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div class="bg-blue-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Red Cross Volunteer Line</h4>
							<a href="tel:1-800-733-2767" class="text-lg font-bold text-blue-600 hover:text-blue-800">
								1-800-733-2767
							</a>
						</div>
						<div class="bg-blue-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Local Volunteer Coordination</h4>
							<a href="tel:830-257-7300" class="text-lg font-bold text-blue-600 hover:text-blue-800">
								(830) 257-7300
							</a>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
			
			<Card.Root class="border-l-4 border-blue-600">
				<Card.Header>
					<Card.Title class="text-blue-800">Donation Questions</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div class="bg-blue-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Supply Donations</h4>
							<a href="tel:830-257-8000" class="text-lg font-bold text-blue-600 hover:text-blue-800">
								(830) 257-8000
							</a>
							<p class="text-xs text-gray-500">Municipal Building - Water only</p>
						</div>
						<div class="bg-blue-50 p-3 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-1">Food Donations</h4>
							<a href="tel:830-257-3505" class="text-lg font-bold text-blue-600 hover:text-blue-800">
								(830) 257-3505
							</a>
							<p class="text-xs text-gray-500">First Baptist Church</p>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- About This Site -->
	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
			<Monitor class="h-6 w-6 text-gray-600" />
			About This Website
		</h2>
		
		<Card.Root class="bg-gray-50">
			<Card.Header>
				<Card.Title class="text-gray-800">Website Support & Feedback</Card.Title>
				<Card.Description>Report outdated information or technical issues</Card.Description>
			</Card.Header>
			<Card.Content>
				<div class="space-y-4">
					<div class="bg-white p-4 rounded-lg border">
						<h4 class="font-semibold text-gray-800 mb-2">Report Outdated Information</h4>
						<p class="text-sm text-gray-600 mb-3">
							If you find outdated contact information or broken links, please let us know.
						</p>
						<Button href="mailto:help@example.com" variant="outline" class="w-full">
							Email Website Team →
						</Button>
					</div>
					<Alert.Root class="bg-blue-50 border-blue-200">
						<Alert.Description class="text-blue-800">
							<strong>Purpose:</strong> This website is maintained by volunteers to help flood victims find resources quickly. 
							All phone numbers and organizations listed are external - we are not affiliated with the services provided.
						</Alert.Description>
					</Alert.Root>
				</div>
			</Card.Content>
		</Card.Root>
	</section>
	
	<!-- Quick Reference -->
	<Alert.Root class="bg-destructive/10 border-destructive/20">
		<Alert.Description class="text-center text-destructive">
			<strong>Quick Reference:</strong> 
			<a href="tel:911" class="font-semibold underline mx-2">911 (Emergency)</a> | 
			<a href="tel:830-258-1111" class="font-semibold underline mx-2">830-258-1111 (Missing Persons)</a> | 
			<a href="tel:1-800-621-3362" class="font-semibold underline mx-2">1-800-621-3362 (FEMA)</a> | 
			<a href="tel:211" class="font-semibold underline mx-2">211 (General Help)</a>
		</Alert.Description>
	</Alert.Root>
</div>