<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Search } from '@lucide/svelte';
</script>

<svelte:head>
	<title>About - Texas Hill Country Flood Relief</title>
	<meta
		name="description"
		content="Learn about this community-driven emergency resource website for Texas Hill Country flood victims."
	/>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-gray-900">About This Project</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-gray-600">
			A community-driven emergency resource website for Texas Hill Country flood victims
		</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm"
			>Volunteer-Maintained Community Project</Badge
		>
	</div>

	<div class="grid gap-6">
		<Alert.Root>
			<Alert.Description>
				<strong>Important:</strong> This is a community project created to help flood victims. All information
				should be verified independently. For official emergency information, contact local authorities.
			</Alert.Description>
		</Alert.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Our Mission</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<p>
					This website was created by community volunteers to help Texas Hill Country flood victims
					quickly find emergency resources and assistance. We believe in the power of neighbors
					helping neighbors during times of crisis.
				</p>
				<p>
					Our goal is simple: <strong>connect people who need help with people who can help</strong>
					- whether that's finding emergency shelter, locating food distribution sites, or connecting
					with volunteer opportunities.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Community-Driven Information</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<p>The information on this site is compiled from multiple sources including:</p>
				<ul class="list-inside list-disc space-y-2 text-sm">
					<li>Local government emergency management offices</li>
					<li>Verified nonprofit organizations and relief agencies</li>
					<li>Community volunteers and local residents</li>
					<li>Official emergency response coordination centers</li>
					<li>Faith-based and community organizations</li>
				</ul>
				<p class="text-muted-foreground text-sm">
					<strong>Note:</strong> While we strive for accuracy, emergency situations change rapidly. Always
					verify current information by calling the organization directly before traveling to a location.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>How We Verify Information</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<p>
					We take accuracy seriously because lives depend on it. Our verification process includes:
				</p>
				<ul class="list-inside list-disc space-y-2 text-sm">
					<li>Direct contact with organizations to confirm services and hours</li>
					<li>Cross-referencing with official emergency management sources</li>
					<li>Regular updates from volunteers in the field</li>
					<li>Removal of outdated or unverified information</li>
				</ul>
				<p class="text-muted-foreground text-sm">
					If you find incorrect information, please help us by reporting it through our contact
					page.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Technology & Privacy</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<p>This website is built with emergency situations in mind:</p>
				<ul class="list-inside list-disc space-y-2 text-sm">
					<li><strong>Fast loading</strong> - Works on slow mobile connections</li>
					<li><strong>Mobile-first</strong> - Designed for smartphones</li>
					<li><strong>Offline capable</strong> - Emergency contacts available without internet</li>
					<li><strong>No tracking</strong> - We don't collect or sell personal data</li>
					<li><strong>Open source</strong> - Code is transparent and community-reviewable</li>
				</ul>
				<p class="text-muted-foreground text-sm">
					We believe emergency information should be accessible to everyone, regardless of their
					device or connection speed.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Volunteer & Contribute</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<p>This project survives because of volunteers like you. Ways to help:</p>
				<ul class="list-inside list-disc space-y-2 text-sm">
					<li><strong>Verify information</strong> - Call organizations to confirm details</li>
					<li><strong>Report updates</strong> - Let us know about new resources or changes</li>
					<li><strong>Spread the word</strong> - Share with people who need help</li>
					<li><strong>Technical contributions</strong> - Help improve the website</li>
				</ul>
				<div class="flex gap-4 pt-4">
					<Button href="/volunteer-research" variant="default" class="flex items-center gap-2">
						<Search class="h-4 w-4" />
						Help Research Organizations
					</Button>
					<Button href="/contact" variant="outline">Get Involved →</Button>
				</div>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Disclaimer</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<p class="text-muted-foreground text-sm">
					This website is maintained by volunteers and is not affiliated with any government agency,
					official emergency management organization, or specific relief agency. Information is
					provided as-is for informational purposes only.
				</p>
				<p class="text-muted-foreground text-sm">
					<strong
						>For official emergency information and life-threatening situations, always contact
						local authorities directly:</strong
					>
				</p>
				<ul class="text-muted-foreground list-inside list-disc space-y-1 text-sm">
					<li><strong>Emergency: 911</strong></li>
					<li><strong>Kerr County Emergency Management: (830) 315-2430</strong></li>
					<li><strong>FEMA: 1-800-621-3362</strong></li>
				</ul>
			</Card.Content>
		</Card.Root>
	</div>
</div>
