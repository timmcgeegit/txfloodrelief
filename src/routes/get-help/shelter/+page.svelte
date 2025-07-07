<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import { Home, Phone, AlertTriangle, Heart } from 'lucide-svelte';
	
	let { data } = $props();
	
	// Filter shelters by type and status
	const openShelters = $derived(data.shelters.shelters.filter(s => s.status === 'open'));
	const medicalShelters = $derived(openShelters.filter(s => s.type === 'medical'));
	const familyShelters = $derived(openShelters.filter(s => s.type === 'family'));
	const generalShelters = $derived(openShelters.filter(s => s.type === 'general'));
	const nearCapacityShelters = $derived(data.shelters.shelters.filter(s => s.status === 'near-capacity'));
	
	function getStatusBadge(shelter: any) {
		if (shelter.status === 'open' && shelter.priority) {
			return { variant: 'default', text: 'PRIORITY', class: 'bg-green-600' };
		} else if (shelter.status === 'open') {
			return { variant: 'secondary', text: 'OPEN', class: 'bg-blue-600' };
		} else if (shelter.status === 'near-capacity') {
			return { variant: 'destructive', text: 'ALMOST FULL', class: 'bg-orange-600' };
		}
		return { variant: 'outline', text: 'CLOSED', class: 'bg-gray-600' };
	}
	
	function getCapacityText(shelter: any) {
		const available = shelter.capacity - shelter.current;
		return `${available} spots available (${shelter.current}/${shelter.capacity})`;
	}
</script>

<svelte:head>
	<title>Emergency Shelters - Texas Hill Country Flood Relief</title>
	<meta name="description" content="Find emergency shelter tonight - medical, family-friendly, and general shelters with current availability." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-foreground">Emergency Shelters</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-muted-foreground">
			Find safe places to stay tonight with current availability
		</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm">
			Last updated: {new Date(data.lastUpdated).toLocaleString()}
		</Badge>
	</div>
	
	<!-- Emergency Alert -->
	<Alert.Root class="mb-8 bg-red-50 border-red-200">
		<Alert.Description class="text-destructive">
			<strong>Need shelter right now?</strong> Call ahead to confirm availability. 
			<a href="tel:911" class="font-semibold underline">Call 911</a> if you have nowhere safe to go.
		</Alert.Description>
	</Alert.Root>
	
	<!-- Medical Shelters (Priority) -->
	{#if medicalShelters.length > 0}
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-6 text-destructive flex items-center gap-2">
				<Heart class="h-6 w-6" />
				Medical Shelters (Priority for Medical Needs)
			</h2>
			<div class="grid gap-6">
				{#each medicalShelters as shelter}
					<Card.Root class="border-2 border-destructive bg-destructive/5">
						<Card.Header>
							<div class="flex justify-between items-start">
								<Card.Title class="text-destructive text-xl">{shelter.name}</Card.Title>
								<Badge class={getStatusBadge(shelter).class + " text-white"}>
									{getStatusBadge(shelter).text}
								</Badge>
							</div>
							<Card.Description class="text-destructive">
								{getCapacityText(shelter)}
							</Card.Description>
						</Card.Header>
						<Card.Content>
							<!-- Address and Contact -->
							<div class="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h4 class="font-semibold text-foreground mb-2">Location</h4>
									<p class="text-sm text-muted-foreground">
										{shelter.address.street}<br>
										{shelter.address.city}, {shelter.address.state} {shelter.address.zip}
									</p>
								</div>
								<div>
									<h4 class="font-semibold text-foreground mb-2">Contact</h4>
									<div class="space-y-1">
										<a href="tel:{shelter.phone}" class="text-sm text-primary hover:text-primary/90 font-medium block">
											<Phone class="inline h-4 w-4" /> {shelter.phone}
										</a>
										{#if shelter.website}
											<a href="{shelter.website}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
												🌐 Visit Website
											</a>
										{/if}
									</div>
								</div>
							</div>
							
							<!-- Services -->
							<div class="mb-4">
								<h4 class="font-semibold text-foreground mb-2">Services Available</h4>
								<div class="flex flex-wrap gap-2">
									{#each shelter.services as service}
										<Badge variant="outline" class="text-xs">
											{service}
										</Badge>
									{/each}
								</div>
							</div>
							
							<!-- Notes -->
							{#if shelter.notes}
								<div class="mb-4">
									<p class="text-sm text-muted-foreground italic">{shelter.notes}</p>
								</div>
							{/if}
							
							<!-- Action Button -->
							<Button href="tel:{shelter.phone}" class="w-full bg-red-600 hover:bg-red-700">
								Call {shelter.name} →
							</Button>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>
	{/if}
	
	<!-- Family Shelters -->
	{#if familyShelters.length > 0}
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-6 text-success flex items-center gap-2">
				<span class="text-2xl">👨‍👩‍👧‍👦</span>
				Family-Friendly Shelters
			</h2>
			<div class="grid gap-6">
				{#each familyShelters as shelter}
					<Card.Root class="border-2 border-green-600 bg-green-50">
						<Card.Header>
							<div class="flex justify-between items-start">
								<Card.Title class="text-success text-xl">{shelter.name}</Card.Title>
								<Badge class={getStatusBadge(shelter).class + " text-white"}>
									{getStatusBadge(shelter).text}
								</Badge>
							</div>
							<Card.Description class="text-success">
								{getCapacityText(shelter)}
							</Card.Description>
						</Card.Header>
						<Card.Content>
							<!-- Address and Contact -->
							<div class="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h4 class="font-semibold text-foreground mb-2">Location</h4>
									<p class="text-sm text-muted-foreground">
										{shelter.address.street}<br>
										{shelter.address.city}, {shelter.address.state} {shelter.address.zip}
									</p>
								</div>
								<div>
									<h4 class="font-semibold text-foreground mb-2">Contact</h4>
									<div class="space-y-1">
										<a href="tel:{shelter.phone}" class="text-sm text-primary hover:text-primary/90 font-medium block">
											<Phone class="inline h-4 w-4" /> {shelter.phone}
										</a>
										{#if shelter.website}
											<a href="{shelter.website}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
												🌐 Visit Website
											</a>
										{/if}
									</div>
								</div>
							</div>
							
							<!-- Services -->
							<div class="mb-4">
								<h4 class="font-semibold text-foreground mb-2">Family Services</h4>
								<div class="flex flex-wrap gap-2">
									{#each shelter.services as service}
										<Badge variant="outline" class="text-xs">
											{service}
										</Badge>
									{/each}
								</div>
							</div>
							
							<!-- Notes -->
							{#if shelter.notes}
								<div class="mb-4">
									<p class="text-sm text-muted-foreground italic">{shelter.notes}</p>
								</div>
							{/if}
							
							<!-- Action Button -->
							<Button href="tel:{shelter.phone}" class="w-full bg-green-600 hover:bg-green-700">
								Call {shelter.name} →
							</Button>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>
	{/if}
	
	<!-- General Shelters -->
	{#if generalShelters.length > 0}
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-6 text-primary/90 flex items-center gap-2">
				<Home class="h-6 w-6 text-primary" />
				General Shelters
			</h2>
			<div class="grid gap-6">
				{#each generalShelters as shelter}
					<Card.Root class="border-2 border-blue-600 bg-blue-50">
						<Card.Header>
							<div class="flex justify-between items-start">
								<Card.Title class="text-primary/90 text-xl">{shelter.name}</Card.Title>
								<Badge class={getStatusBadge(shelter).class + " text-white"}>
									{getStatusBadge(shelter).text}
								</Badge>
							</div>
							<Card.Description class="text-blue-700">
								{getCapacityText(shelter)}
							</Card.Description>
						</Card.Header>
						<Card.Content>
							<!-- Address and Contact -->
							<div class="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h4 class="font-semibold text-foreground mb-2">Location</h4>
									<p class="text-sm text-muted-foreground">
										{shelter.address.street}<br>
										{shelter.address.city}, {shelter.address.state} {shelter.address.zip}
									</p>
								</div>
								<div>
									<h4 class="font-semibold text-foreground mb-2">Contact</h4>
									<div class="space-y-1">
										<a href="tel:{shelter.phone}" class="text-sm text-primary hover:text-primary/90 font-medium block">
											<Phone class="inline h-4 w-4" /> {shelter.phone}
										</a>
										{#if shelter.website}
											<a href="{shelter.website}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
												🌐 Visit Website
											</a>
										{/if}
									</div>
								</div>
							</div>
							
							<!-- Services -->
							<div class="mb-4">
								<h4 class="font-semibold text-foreground mb-2">Services Available</h4>
								<div class="flex flex-wrap gap-2">
									{#each shelter.services as service}
										<Badge variant="outline" class="text-xs">
											{service}
										</Badge>
									{/each}
								</div>
							</div>
							
							<!-- Notes -->
							{#if shelter.notes}
								<div class="mb-4">
									<p class="text-sm text-muted-foreground italic">{shelter.notes}</p>
								</div>
							{/if}
							
							<!-- Action Button -->
							<Button href="tel:{shelter.phone}" class="w-full bg-blue-600 hover:bg-blue-700">
								Call {shelter.name} →
							</Button>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>
	{/if}
	
	<!-- Near Capacity Shelters -->
	{#if nearCapacityShelters.length > 0}
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-6 text-warning flex items-center gap-2">
				<AlertTriangle class="h-6 w-6 text-warning" />
				Limited Space Available
			</h2>
			<div class="grid gap-4">
				{#each nearCapacityShelters as shelter}
					<Card.Root class="border-2 border-warning bg-orange-50">
						<Card.Header>
							<div class="flex justify-between items-start">
								<Card.Title class="text-warning">{shelter.name}</Card.Title>
								<Badge class="bg-orange-600 text-white">
									ALMOST FULL
								</Badge>
							</div>
							<Card.Description class="text-warning">
								{getCapacityText(shelter)} - Call ahead!
							</Card.Description>
						</Card.Header>
						<Card.Content>
							<div class="flex justify-between items-center">
								<div>
									<p class="text-sm text-muted-foreground">
										{shelter.address.street}, {shelter.address.city}
									</p>
								</div>
								<Button href="tel:{shelter.phone}" variant="outline" class="border-warning text-warning">
									Call {shelter.phone}
								</Button>
							</div>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>
	{/if}
	
	<!-- Footer Help -->
	<Alert.Root class="bg-gray-50 border-gray-200">
		<Alert.Description class="text-center text-muted-foreground">
			<strong>Can't find shelter?</strong> Call the Emergency Shelter Hotline at 
			<a href="tel:830-257-7300" class="font-semibold text-primary">830-257-7300</a> for assistance finding available space.
		</Alert.Description>
	</Alert.Root>
</div>