<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<svelte:head>
	<title>Donate Money - Texas Hill Country Flood Relief</title>
	<meta
		name="description"
		content="Donate money to help Texas Hill Country flood victims. Verified organizations with direct impact."
	/>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-green-800">💵 Donate Money</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-gray-600">
			Money is the most effective way to help flood victims. It provides immediate relief and allows
			organizations to purchase exactly what's needed.
		</p>
		<Badge variant="outline" class="border-green-300 bg-green-50 text-green-800">
			Most Effective Way to Help
		</Badge>
	</div>

	<!-- Why Money Helps Most -->
	<section class="mb-12">
		<Alert.Root class="border-green-200 bg-green-50">
			<Alert.Description class="text-green-800">
				<h3 class="mb-3 text-lg font-bold">💡 Why Money is Most Effective</h3>
				<div class="grid gap-4 md:grid-cols-2">
					<ul class="space-y-2 text-sm">
						<li class="flex items-center gap-2">
							<span class="text-green-600">✓</span>
							<span>Organizations can buy exactly what's needed</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-600">✓</span>
							<span>Immediate deployment - no sorting or distribution delays</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-600">✓</span>
							<span>Local purchasing supports area businesses</span>
						</li>
					</ul>
					<ul class="space-y-2 text-sm">
						<li class="flex items-center gap-2">
							<span class="text-green-600">✓</span>
							<span>No transportation costs or volunteer time needed</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-600">✓</span>
							<span>Organizations get bulk pricing discounts</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-600">✓</span>
							<span>Helps with both immediate and long-term recovery</span>
						</li>
					</ul>
				</div>
			</Alert.Description>
		</Alert.Root>
	</section>

	<!-- Verified Organizations -->
	<section class="mb-12">
		<h2 class="mb-8 text-center text-3xl font-bold text-gray-800">
			Verified Organizations - Donate Safely
		</h2>

		<div class="grid gap-8 lg:grid-cols-2">
			<!-- Kerr County Fund - Primary Recommendation -->
			<Card.Root
				class="group relative overflow-hidden border-2 border-green-600 bg-gradient-to-br from-green-50 to-green-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
			>
				<div class="absolute -right-4 -top-4 rotate-12">
					<Badge class="bg-green-600 px-4 py-2 text-white">RECOMMENDED</Badge>
				</div>
				<Card.Header class="pb-4 pt-8 text-center">
					<div
						class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-700 text-3xl shadow-lg"
					>
						⭐
					</div>
					<Card.Title class="mb-2 text-2xl font-bold text-green-800">
						Kerr County Flood Relief Fund
					</Card.Title>
					<Card.Description class="text-lg font-medium text-green-700">
						Community Foundation of Texas Hill Country
					</Card.Description>
				</Card.Header>
				<Card.Content class="px-6 pb-8">
					<div class="space-y-6">
						<div class="rounded-xl border border-green-200 bg-white/80 p-4">
							<h4 class="mb-3 font-semibold text-gray-800">Why This Fund is Recommended</h4>
							<ul class="space-y-2 text-sm text-gray-700">
								<li class="flex items-start gap-2">
									<span class="mt-1 text-green-600">•</span>
									<span><strong>100% Local Impact:</strong> Every dollar stays in Kerr County</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-green-600">•</span>
									<span
										><strong>Community-Led:</strong> Managed by local leaders who understand needs</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-green-600">•</span>
									<span><strong>Immediate Action:</strong> No delays in fund distribution</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-green-600">•</span>
									<span><strong>Tax Deductible:</strong> 501(c)(3) nonprofit organization</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-green-600">•</span>
									<span><strong>Established:</strong> 25+ years serving Hill Country</span>
								</li>
							</ul>
						</div>

						<div class="rounded-xl border border-green-200 bg-white p-4">
							<h4 class="mb-3 text-center font-semibold text-gray-800">Tax Information</h4>
							<div class="text-center">
								<p class="text-sm text-gray-600">Federal Tax ID (EIN)</p>
								<p class="text-xl font-mono font-bold text-green-700">20-1974588</p>
								<p class="mt-2 text-sm text-gray-600">
									Community Foundation of Texas Hill Country
								</p>
							</div>
						</div>

						<div class="space-y-3">
							<Button
								href="https://cftexashillcountry.fcsuite.com/erp/donate/create/fund?funit_id=4201"
								target="_blank"
								rel="noopener noreferrer"
								class="w-full bg-gradient-to-r from-green-600 to-green-700 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-800 hover:shadow-xl"
							>
								🔒 Donate Securely Online
							</Button>
							<p class="text-center text-xs text-gray-500">
								Secure donation processing • SSL encrypted • Instant receipt
							</p>
						</div>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- American Red Cross -->
			<Card.Root
				class="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			>
				<Card.Header class="pb-4 pt-8 text-center">
					<div
						class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-3xl shadow-lg"
					>
						🏥
					</div>
					<Card.Title class="mb-2 text-2xl font-bold text-red-700">American Red Cross</Card.Title>
					<Card.Description class="text-lg font-medium text-red-600">
						National Disaster Relief
					</Card.Description>
				</Card.Header>
				<Card.Content class="px-6 pb-8">
					<div class="space-y-6">
						<div class="rounded-xl border border-red-200 bg-red-50 p-4">
							<h4 class="mb-3 font-semibold text-gray-800">Red Cross Services in Kerrville</h4>
							<ul class="space-y-2 text-sm text-gray-700">
								<li class="flex items-start gap-2">
									<span class="mt-1 text-red-500">•</span>
									<span>Emergency shelter operations and management</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-red-500">•</span>
									<span>Disaster relief supplies and distribution</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-red-500">•</span>
									<span>Emergency assistance programs</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-red-500">•</span>
									<span>Mental health and spiritual care</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="mt-1 text-red-500">•</span>
									<span>Volunteer coordination and training</span>
								</li>
							</ul>
						</div>

						<div class="space-y-3">
							<!-- Quick Text Donation -->
							<div class="rounded-xl border border-red-200 bg-red-50 p-4 text-center">
								<h4 class="mb-2 font-semibold text-gray-800">Quick Mobile Donation</h4>
								<p class="mb-3 text-sm text-gray-600">
									Text <span class="font-mono font-bold">REDCROSS</span> to
									<span class="font-mono font-bold">90999</span>
								</p>
								<p class="mb-3 text-xs text-gray-500">Donates $10 - Message & data rates may apply</p>
								<Button
									href="sms:90999?body=REDCROSS"
									class="w-full bg-gradient-to-r from-red-600 to-red-700 py-3 font-semibold text-white"
								>
									📱 Text to Donate $10
								</Button>
							</div>

							<!-- Online Donation -->
							<Button
								href="https://www.redcross.org/donate/donation.html/"
								target="_blank"
								rel="noopener noreferrer"
								variant="outline"
								class="w-full border-2 border-red-600 py-3 font-semibold text-red-700 transition-all duration-300 hover:bg-red-50"
							>
								🌐 Donate Online at RedCross.org
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>

	<!-- Additional Verified Organizations -->
	<section class="mb-12">
		<h2 class="mb-6 text-2xl font-bold text-gray-800">Additional Verified Organizations</h2>
		<div class="grid gap-6 md:grid-cols-2">
			<!-- Salvation Army -->
			<Card.Root class="border-l-4 border-blue-600">
				<Card.Header>
					<Card.Title class="flex items-center gap-2 text-blue-700">
						<span class="text-xl">🛡️</span>
						Salvation Army
					</Card.Title>
					<Card.Description>Emergency disaster services</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<p class="text-sm text-gray-600">
							Providing mobile feeding units, emergency shelter, and spiritual care to flood victims
							in the Texas Hill Country.
						</p>
						<div class="flex gap-3">
							<Button
								href="https://www.salvationarmyusa.org/usn/give/"
								target="_blank"
								rel="noopener noreferrer"
								variant="outline"
								class="flex-1 border-blue-600 text-blue-700"
							>
								Donate Online
							</Button>
							<Button
								href="tel:1-800-728-7825"
								variant="outline"
								class="flex-1 border-blue-600 text-blue-700"
							>
								Call to Donate
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- United Way -->
			<Card.Root class="border-l-4 border-orange-600">
				<Card.Header>
					<Card.Title class="flex items-center gap-2 text-orange-700">
						<span class="text-xl">🤝</span>
						United Way
					</Card.Title>
					<Card.Description>Community recovery coordination</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-3">
						<p class="text-sm text-gray-600">
							Coordinating long-term recovery efforts and connecting flood victims with local
							services and resources.
						</p>
						<div class="flex gap-3">
							<Button
								href="https://www.unitedway.org/give"
								target="_blank"
								rel="noopener noreferrer"
								variant="outline"
								class="flex-1 border-orange-600 text-orange-700"
							>
								Donate Online
							</Button>
							<Button
								href="tel:211"
								variant="outline"
								class="flex-1 border-orange-600 text-orange-700"
							>
								Call 211
							</Button>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</section>

	<!-- Donation Safety & Fraud Prevention -->
	<section class="mb-12">
		<Alert.Root class="border-red-200 bg-red-50">
			<Alert.Description class="text-red-800">
				<h3 class="mb-4 text-lg font-bold">🚨 Protect Yourself from Donation Scams</h3>
				<div class="grid gap-4 md:grid-cols-2">
					<div>
						<h4 class="mb-2 font-semibold">Red Flags to Watch For:</h4>
						<ul class="space-y-1 text-sm">
							<li class="flex items-start gap-2">
								<span class="mt-1 text-red-600">⚠️</span>
								<span>Pressure to donate immediately</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-red-600">⚠️</span>
								<span>Requests for cash, gift cards, or wire transfers</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-red-600">⚠️</span>
								<span>Vague descriptions of how funds will be used</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-red-600">⚠️</span>
								<span>Unsolicited emails or social media requests</span>
							</li>
						</ul>
					</div>
					<div>
						<h4 class="mb-2 font-semibold">Before You Donate:</h4>
						<ul class="space-y-1 text-sm">
							<li class="flex items-start gap-2">
								<span class="mt-1 text-green-600">✓</span>
								<span>Verify the organization's tax-exempt status</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-green-600">✓</span>
								<span>Check ratings at Give.org or CharityNavigator.org</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-green-600">✓</span>
								<span>Donate directly through official websites</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-green-600">✓</span>
								<span>Ask for documentation if donating by phone</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="mt-4 rounded-lg border border-red-300 bg-white p-3">
					<p class="text-center text-sm">
						<strong>Report Fraud:</strong> Call the National Disaster Fraud Hotline at
						<a href="tel:866-720-5721" class="font-semibold underline">866-720-5721</a>
					</p>
				</div>
			</Alert.Description>
		</Alert.Root>
	</section>

	<!-- Donation Verification Resources -->
	<section class="mb-12">
		<h2 class="mb-6 text-2xl font-bold text-gray-800">🔍 Verify Organizations Before Donating</h2>
		<div class="grid gap-6 md:grid-cols-3">
			<Card.Root class="border-blue-200 bg-blue-50">
				<Card.Header>
					<Card.Title class="text-blue-700">Give.org</Card.Title>
					<Card.Description>BBB Wise Giving Alliance</Card.Description>
				</Card.Header>
				<Card.Content>
					<p class="mb-3 text-sm text-gray-600">
						Official charity verification from the Better Business Bureau
					</p>
					<Button
						href="https://give.org"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full bg-blue-600 hover:bg-blue-700"
					>
						Check Charity Rating
					</Button>
				</Card.Content>
			</Card.Root>

			<Card.Root class="border-green-200 bg-green-50">
				<Card.Header>
					<Card.Title class="text-green-700">Charity Navigator</Card.Title>
					<Card.Description>Independent charity evaluator</Card.Description>
				</Card.Header>
				<Card.Content>
					<p class="mb-3 text-sm text-gray-600">
						Financial health and transparency ratings for nonprofits
					</p>
					<Button
						href="https://www.charitynavigator.org"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full bg-green-600 hover:bg-green-700"
					>
						Research Charities
					</Button>
				</Card.Content>
			</Card.Root>

			<Card.Root class="border-purple-200 bg-purple-50">
				<Card.Header>
					<Card.Title class="text-purple-700">IRS Tax Exempt</Card.Title>
					<Card.Description>Official tax-exempt verification</Card.Description>
				</Card.Header>
				<Card.Content>
					<p class="mb-3 text-sm text-gray-600">
						Verify an organization's tax-exempt status directly with the IRS
					</p>
					<Button
						href="https://www.irs.gov/charities-non-profits/tax-exempt-organization-search"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full bg-purple-600 hover:bg-purple-700"
					>
						Verify Tax Status
					</Button>
				</Card.Content>
			</Card.Root>
		</div>
	</section>

	<!-- Tax Benefits -->
	<section class="mb-12">
		<Card.Root class="border-gray-200 bg-gray-50">
			<Card.Header>
				<Card.Title class="flex items-center gap-2 text-gray-800">
					<span class="text-xl">📄</span>
					Tax Benefits of Charitable Donations
				</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="grid gap-6 md:grid-cols-2">
					<div>
						<h4 class="mb-3 font-semibold text-gray-800">Tax Deductible Donations</h4>
						<ul class="space-y-2 text-sm text-gray-600">
							<li class="flex items-start gap-2">
								<span class="mt-1 text-green-600">•</span>
								<span>Donations to 501(c)(3) organizations are tax-deductible</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-green-600">•</span>
								<span>Keep receipts for all donations</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-green-600">•</span>
								<span>Donations over $250 require written acknowledgment</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-green-600">•</span>
								<span>Consult your tax advisor for specific guidance</span>
							</li>
						</ul>
					</div>
					<div>
						<h4 class="mb-3 font-semibold text-gray-800">What You Need for Taxes</h4>
						<ul class="space-y-2 text-sm text-gray-600">
							<li class="flex items-start gap-2">
								<span class="mt-1 text-blue-600">📋</span>
								<span>Organization name and tax ID number</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-blue-600">📋</span>
								<span>Date and amount of donation</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-blue-600">📋</span>
								<span>Receipt or acknowledgment letter</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="mt-1 text-blue-600">📋</span>
								<span>Description of any goods or services received</span>
							</li>
						</ul>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</section>

	<!-- Contact Information -->
	<section class="mb-8">
		<Card.Root class="border-gray-200 bg-gray-50">
			<Card.Header>
				<Card.Title class="text-center text-gray-800">Need Help Choosing Where to Donate?</Card.Title>
			</Card.Header>
			<Card.Content class="text-center">
				<p class="mb-4 text-sm text-gray-600">
					Our volunteers can help you find the most effective way to contribute to flood relief
					efforts.
				</p>
				<div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
					<Button href="tel:211" variant="outline" class="border-gray-600 text-gray-700">
						Call 211 for Guidance
					</Button>
					<Button
						href="tel:1-800-733-2767"
						variant="outline"
						class="border-gray-600 text-gray-700"
					>
						Red Cross: 1-800-733-2767
					</Button>
				</div>
			</Card.Content>
		</Card.Root>
	</section>
</div>