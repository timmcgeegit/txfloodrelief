<script>
	import * as Card from "$lib/components/ui/card/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import { Building2, FileText, Landmark, Shield, AlertTriangle } from 'lucide-svelte';
	
	let { data } = $props();
</script>

<svelte:head>
	<title>Financial Assistance - Texas Hill Country Flood Relief</title>
	<meta name="description" content="FEMA disaster assistance, SBA loans, insurance help, and other financial resources for flood victims." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">Financial Assistance</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-gray-600">
			FEMA disaster assistance, SBA loans, insurance help, and other financial resources for flood victims
		</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm">Federal & State Programs Available</Badge>
	</div>
		
	<!-- Important Notice -->
	<Alert.Root class="mb-6 bg-blue-50 border-blue-200">
		<Alert.Description class="text-blue-800">
			<strong>Apply for insurance first:</strong> You must file insurance claims before seeking federal assistance. 
			FEMA assistance is always free - anyone asking for fees is a scammer.
		</Alert.Description>
	</Alert.Root>
	
	<!-- Federal Assistance - Priority Section -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-green-800 flex items-center gap-2">
			<Building2 class="h-6 w-6 text-green-600" />
			Federal Disaster Assistance
		</h2>
		
		<div class="grid md:grid-cols-2 gap-6">
			<!-- FEMA Individual Assistance -->
			<Card.Root class="border-2 border-green-600 bg-green-50">
				<Card.Header>
					<Card.Title class="text-green-800 flex items-center gap-2">
						<FileText class="h-5 w-5 text-green-600" />
						FEMA Individual Assistance
						<Badge class="bg-green-600 text-white">APPROVED</Badge>
					</Card.Title>
					<Card.Description class="text-green-700 font-medium">
						Federal Emergency Management Agency
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-4">
						<div>
							<h4 class="font-semibold text-gray-800 mb-2">What's Covered:</h4>
							<ul class="text-sm text-gray-600 space-y-1">
								<li>• Temporary housing assistance</li>
								<li>• Home repairs (not covered by insurance)</li>
								<li>• Personal property replacement</li>
								<li>• Medical, dental, and funeral expenses</li>
								<li>• Other serious disaster-related needs</li>
							</ul>
						</div>
						
						<div class="bg-white p-4 rounded-lg border">
							<h4 class="font-semibold text-gray-800 mb-2">Apply Now - Free Application</h4>
							<div class="space-y-3">
								<div class="flex items-center justify-between">
									<div>
										<p class="font-medium text-gray-800">Online Application</p>
										<p class="text-sm text-gray-600">DisasterAssistance.gov</p>
									</div>
									<Button href="https://www.disasterassistance.gov" target="_blank" class="bg-green-600 hover:bg-green-700">
										Apply Online →
									</Button>
								</div>
								<div class="flex items-center justify-between">
									<div>
										<p class="font-medium text-gray-800">Phone Application</p>
										<p class="text-sm text-gray-600">24/7 multilingual support</p>
									</div>
									<Button href="tel:1-800-621-3362" class="bg-green-600 hover:bg-green-700">
										Call 1-800-621-3362
									</Button>
								</div>
							</div>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
			
			<!-- SBA Disaster Loans -->
			<Card.Root class="border-2 border-blue-600 bg-blue-50">
				<Card.Header>
					<Card.Title class="text-blue-800 flex items-center gap-2">
						<Landmark class="h-5 w-5 text-blue-600" />
						SBA Disaster Loans
					</Card.Title>
					<Card.Description class="text-blue-700 font-medium">
						Low-interest disaster loans for homeowners and businesses
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-4">
						<div>
							<h4 class="font-semibold text-gray-800 mb-2">Loan Options:</h4>
							<ul class="text-sm text-gray-600 space-y-1">
								<li>• <strong>Homeowners:</strong> Up to $500,000 at 2.75% interest</li>
								<li>• <strong>Personal Property:</strong> Up to $100,000</li>
								<li>• <strong>Business Property:</strong> Up to $2 million at 4% interest</li>
								<li>• <strong>Economic Injury:</strong> Up to $2 million for businesses</li>
								<li>• <strong>12-month payment deferment available</strong></li>
							</ul>
						</div>
						
						<div class="space-y-3">
							<div class="bg-white p-3 rounded-lg border text-center">
								<h4 class="font-semibold text-gray-800 mb-1">Apply for SBA Loans</h4>
								<p class="text-sm text-gray-600 mb-2">Must apply within 60 days of disaster declaration</p>
								<div class="space-y-2">
									<Button href="https://www.sba.gov/disaster" target="_blank" class="w-full bg-blue-600 hover:bg-blue-700">
										Apply Online at SBA.gov
									</Button>
									<Button href="tel:1-800-659-2955" variant="outline" class="w-full border-blue-600 text-blue-700">
										Call 1-800-659-2955
									</Button>
								</div>
							</div>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Insurance and Legal Help -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-purple-800 flex items-center gap-2">
			<Shield class="h-6 w-6 text-purple-600" />
			Insurance and Legal Help
		</h2>
		
		<div class="grid md:grid-cols-2 gap-6">
			<!-- Insurance Claims -->
			<Card.Root class="border-l-4 border-purple-600">
				<Card.Header>
					<Card.Title class="text-purple-800">Insurance Claims Assistance</Card.Title>
					<Card.Description>Get help navigating the insurance claim process</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div>
							<h4 class="font-semibold text-gray-800 mb-2">Important Steps:</h4>
							<ul class="text-sm text-gray-600 space-y-1">
								<li>• Document all damage with photos/video</li>
								<li>• Contact your insurance company immediately</li>
								<li>• Keep all receipts for temporary expenses</li>
								<li>• Don't sign anything you don't understand</li>
								<li>• Get multiple estimates for repairs</li>
							</ul>
						</div>
						<Button href="/get-help/legal" variant="outline" class="w-full border-purple-600 text-purple-700">
							Get Legal Help with Claims →
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
			
			<!-- Legal Aid -->
			<Card.Root class="border-l-4 border-purple-600">
				<Card.Header>
					<Card.Title class="text-purple-800">Free Legal Aid</Card.Title>
					<Card.Description>Legal assistance for disaster-related issues</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<div>
							<h4 class="font-semibold text-gray-800 mb-2">Services Available:</h4>
							<ul class="text-sm text-gray-600 space-y-1">
								<li>• Insurance claim disputes</li>
								<li>• Document replacement</li>
								<li>• Contract reviews</li>
								<li>• Landlord/tenant issues</li>
								<li>• Available in English, Spanish, Vietnamese</li>
							</ul>
						</div>
						<div class="bg-purple-50 p-3 rounded-lg border">
							<h4 class="font-semibold text-gray-800 mb-1">State Bar of Texas Legal Hotline</h4>
							<Button href="tel:1-800-504-7030" class="w-full bg-purple-600 hover:bg-purple-700">
								Call 1-800-504-7030
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
	
	<!-- Local Financial Resources -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-6 text-orange-800 flex items-center gap-2">
			<Building2 class="h-6 w-6 text-orange-600" />
			Local Financial Resources
		</h2>
		
		<Card.Root class="border-2 border-orange-600 bg-orange-50">
			<Card.Header>
				<Card.Title class="text-orange-800">Kerr County Flood Relief Fund</Card.Title>
				<Card.Description class="text-orange-700 font-medium">
					Community Foundation of Texas Hill Country
				</Card.Description>
			</Card.Header>
			<Card.Content>
				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<h4 class="font-semibold text-gray-800 mb-2">Fund Details:</h4>
						<ul class="text-sm text-gray-600 space-y-1">
							<li>• Grants to vetted nonprofits and local governments</li>
							<li>• Does NOT provide direct payments to individuals</li>
							<li>• Managed by local community leaders</li>
							<li>• 4-star Charity Navigator rating</li>
							<li>• Tax ID: 20-1974588</li>
						</ul>
					</div>
					<div>
						<h4 class="font-semibold text-gray-800 mb-2">Contact Information:</h4>
						<div class="space-y-2">
							<div class="bg-white p-3 rounded-lg border">
								<p class="text-sm text-gray-600">Community Foundation of Texas Hill Country</p>
								<p class="text-sm text-gray-600">241 Earl Garrett St., Kerrville, TX</p>
								<Button href="https://cftxhillcountry.org" target="_blank" variant="outline" class="w-full mt-2">
									Visit Website →
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</section>
	
	<!-- Application Requirements -->
	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-6 text-gray-800">Application Requirements</h2>
		
		<Card.Root class="bg-gray-50">
			<Card.Header>
				<Card.Title class="text-gray-800">What You'll Need to Apply</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="grid md:grid-cols-3 gap-6">
					<div>
						<h4 class="font-semibold text-gray-800 mb-3">Personal Information</h4>
						<ul class="text-sm text-gray-600 space-y-1">
							<li>• Social Security number</li>
							<li>• Driver's license or state ID</li>
							<li>• Current contact information</li>
							<li>• Bank account information</li>
						</ul>
					</div>
					<div>
						<h4 class="font-semibold text-gray-800 mb-3">Property Information</h4>
						<ul class="text-sm text-gray-600 space-y-1">
							<li>• Property deed or lease</li>
							<li>• Insurance policies</li>
							<li>• Photos of damage</li>
							<li>• Repair estimates</li>
						</ul>
					</div>
					<div>
						<h4 class="font-semibold text-gray-800 mb-3">Financial Information</h4>
						<ul class="text-sm text-gray-600 space-y-1">
							<li>• Income documentation</li>
							<li>• Tax returns (if available)</li>
							<li>• Insurance claim information</li>
							<li>• Recent bank statements</li>
						</ul>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</section>
	
	<!-- Scam Warning -->
	<Alert.Root class="mb-8 bg-red-50 border-red-200">
		<Alert.Description class="text-red-800">
			<strong class="flex items-center gap-2"><AlertTriangle class="h-4 w-4 text-red-600" />Scam Warning:</strong> FEMA assistance is always free. Anyone asking for payment to apply for FEMA assistance is a scammer. 
			Report fraud to the National Disaster Fraud Hotline: <a href="tel:1-866-720-5721" class="font-semibold underline">1-866-720-5721</a>
		</Alert.Description>
	</Alert.Root>
	
	<!-- Emergency Contact Info -->
	<Alert.Root class="bg-gray-50 border-gray-200">
		<Alert.Description class="text-center text-gray-700">
			<strong>Need help applying?</strong> Call FEMA at <a href="tel:1-800-621-3362" class="font-semibold text-blue-600">1-800-621-3362</a> for assistance, 
			or visit a Disaster Recovery Center when one opens in the area.
		</Alert.Description>
	</Alert.Root>
</div>