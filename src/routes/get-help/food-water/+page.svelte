<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import { Utensils, Truck, Droplets, ShoppingCart, Users, Home, Phone, AlertTriangle, ExternalLink } from 'lucide-svelte';
	
	let { data } = $props();
	
	// Filter food sites by type and status
	const servingNow = $derived(data.foodSites.foodSites.filter(s => s.status === 'serving-now'));
	const hotMealSites = $derived(data.foodSites.foodSites.filter(s => s.type === 'hot-meals' || s.type === 'mobile-unit'));
	const waterSites = $derived(data.foodSites.foodSites.filter(s => s.type === 'water-only'));
	const foodPantrySites = $derived(data.foodSites.foodSites.filter(s => s.type === 'food-pantry'));
	const communitySites = $derived(data.foodSites.foodSites.filter(s => s.type === 'community-kitchen'));
	
	function getStatusBadge(site: any) {
		if (site.status === 'serving-now') {
			return { variant: 'success', text: 'SERVING NOW', class: 'bg-success animate-pulse' };
		} else if (site.status === 'active') {
			return { variant: 'default', text: 'ACTIVE', class: 'bg-primary' };
		}
		return { variant: 'outline', text: 'CLOSED', class: 'bg-muted' };
	}
	
	function getCurrentTime() {
		return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
	}
	
	function getTypeIcon(type: string) {
		switch(type) {
			case 'hot-meals': return Utensils;
			case 'mobile-unit': return Truck;
			case 'water-only': return Droplets;
			case 'food-pantry': return ShoppingCart;
			case 'community-kitchen': return Users;
			default: return Utensils;
		}
	}
</script>

<svelte:head>
	<title>Food & Water - Texas Hill Country Flood Relief</title>
	<meta name="description" content="Free meals and clean water distribution - hot meals, bottled water, and emergency food supplies." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-foreground">Food & Water Distribution</h1>
		<p class="mx-auto mb-6 max-w-2xl text-xl text-muted-foreground">
			Free meals and clean water for flood victims
		</p>
		<Badge variant="outline" class="border-gray-300 bg-white text-sm">
			Last updated: {new Date(data.lastUpdated).toLocaleString()} | Current time: {getCurrentTime()}
		</Badge>
	</div>
	
	<!-- Emergency Alert -->
	<Alert.Root class="mb-8 bg-success/10 border-success/20">
		<Alert.Description class="text-success">
			<strong>Need food right now?</strong> All sites below are serving disaster victims at no cost. 
			No questions asked, no paperwork required.
		</Alert.Description>
	</Alert.Root>
	
	<!-- Serving Now (Priority) -->
	{#if servingNow.length > 0}
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-6 text-success flex items-center gap-2">
				<span class="text-2xl">🔥</span>
				Serving Meals Right Now
			</h2>
			<div class="grid gap-6">
				{#each servingNow as site}
					<Card.Root class="border-2 border-success bg-success/5">
						<Card.Header>
							<div class="flex justify-between items-start">
								<Card.Title class="text-success text-xl flex items-center gap-2">
									{@const IconComponent = getTypeIcon(site.type)}
									<IconComponent class="h-6 w-6 text-success" />
									{site.name}
								</Card.Title>
								<Badge class={getStatusBadge(site).class + " text-white"}>
									{getStatusBadge(site).text}
								</Badge>
							</div>
							{#if site.currentLocation}
								<Card.Description class="text-success font-medium">
									Currently at: {site.currentLocation}
								</Card.Description>
							{/if}
						</Card.Header>
						<Card.Content>
							<!-- Address and Contact -->
							<div class="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h4 class="font-semibold text-foreground mb-2">Location</h4>
									<p class="text-sm text-muted-foreground">
										{site.address.street}<br>
										{site.address.city}, {site.address.state} {site.address.zip}
									</p>
								</div>
								<div>
									<h4 class="font-semibold text-foreground mb-2">Contact</h4>
									<div class="space-y-1">
										<a href="tel:{site.phone}" class="text-sm text-primary hover:text-primary/90 font-medium block">
											<Phone class="h-4 w-4 inline mr-1" /> {site.phone}
										</a>
										{#if site.emergencyPhone}
											<a href="tel:{site.emergencyPhone}" class="text-sm text-destructive hover:text-destructive/80 font-medium block">
												<AlertTriangle class="h-4 w-4 inline mr-1" /> Emergency: {site.emergencyPhone}
											</a>
										{/if}
										{#if site.website}
											<a href="{site.website}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
												<ExternalLink class="h-4 w-4 inline mr-1" /> Visit Website
											</a>
										{/if}
										{#if site.localWebsite}
											<a href="{site.localWebsite}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
												<Home class="inline h-4 w-4" /> Local Info
											</a>
										{/if}
										{#if site.facebook}
											<a href="{site.facebook}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
												📘 Facebook
											</a>
										{/if}
										{#if site.socialMedia}
											{#if site.socialMedia.facebook}
												<a href="https://facebook.com/{site.socialMedia.facebook}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
													📘 Facebook
												</a>
											{/if}
											{#if site.socialMedia.twitter}
												<a href="https://twitter.com/{site.socialMedia.twitter}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
													🐦 Twitter
												</a>
											{/if}
											{#if site.socialMedia.instagram}
												<a href="https://instagram.com/{site.socialMedia.instagram}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
													📷 Instagram
												</a>
											{/if}
										{/if}
									</div>
								</div>
							</div>
							
							<!-- Schedule -->
							<div class="mb-4">
								<h4 class="font-semibold text-foreground mb-2">Meal Times</h4>
								<div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
									{#each Object.entries(site.schedule) as [meal, time]}
										<div class="bg-white p-2 rounded border">
											<span class="font-medium capitalize">{meal.replace('-', ' ')}:</span> {time}
										</div>
									{/each}
								</div>
							</div>
							
							<!-- Services -->
							<div class="mb-4">
								<h4 class="font-semibold text-foreground mb-2">What's Available</h4>
								<div class="flex flex-wrap gap-2">
									{#each site.services as service}
										<Badge variant="outline" class="text-xs">
											{service}
										</Badge>
									{/each}
								</div>
							</div>
							
							<!-- Notes -->
							{#if site.notes}
								<div class="mb-4">
									<p class="text-sm text-muted-foreground italic">{site.notes}</p>
								</div>
							{/if}
							
							<!-- Action Button -->
							<Button href="tel:{site.phone}" class="w-full bg-success hover:bg-success/90">
								Call for Current Status →
							</Button>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>
	{/if}
	
	<!-- Hot Meal Sites -->
	{#if hotMealSites.length > 0}
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
				<Utensils class="h-6 w-6 text-primary" />
				Hot Meal Locations
			</h2>
			<div class="grid gap-6">
				{#each hotMealSites as site}
					{#if site.status !== 'serving-now'}
						<Card.Root class="border-2 border-primary bg-primary/5">
							<Card.Header>
								<div class="flex justify-between items-start">
									<Card.Title class="text-primary/90 text-xl flex items-center gap-2">
										{@const IconComponent = getTypeIcon(site.type)}
							<IconComponent class="h-6 w-6 text-primary" />
										{site.name}
									</Card.Title>
									<Badge class={getStatusBadge(site).class + " text-white"}>
										{getStatusBadge(site).text}
									</Badge>
								</div>
								{#if site.currentLocation}
									<Card.Description class="text-primary font-medium">
										Currently at: {site.currentLocation}
									</Card.Description>
								{/if}
							</Card.Header>
							<Card.Content>
								<!-- Address and Contact -->
								<div class="grid md:grid-cols-2 gap-4 mb-4">
									<div>
										<h4 class="font-semibold text-foreground mb-2">Location</h4>
										<p class="text-sm text-muted-foreground">
											{site.address.street}<br>
											{site.address.city}, {site.address.state} {site.address.zip}
										</p>
									</div>
									<div>
										<h4 class="font-semibold text-foreground mb-2">Contact</h4>
										<a href="tel:{site.phone}" class="text-sm text-primary hover:text-primary/90 font-medium">
											{site.phone}
										</a>
									</div>
								</div>
								
								<!-- Schedule -->
								<div class="mb-4">
									<h4 class="font-semibold text-foreground mb-2">Meal Times</h4>
									<div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
										{#each Object.entries(site.schedule) as [meal, time]}
											<div class="bg-white p-2 rounded border">
												<span class="font-medium capitalize">{meal.replace('-', ' ')}:</span> {time}
											</div>
										{/each}
									</div>
								</div>
								
								<!-- Services -->
								<div class="mb-4">
									<h4 class="font-semibold text-foreground mb-2">Services</h4>
									<div class="flex flex-wrap gap-2">
										{#each site.services as service}
											<Badge variant="outline" class="text-xs">
												{service}
											</Badge>
										{/each}
									</div>
								</div>
								
								<!-- Notes -->
								{#if site.notes}
									<div class="mb-4">
										<p class="text-sm text-muted-foreground italic">{site.notes}</p>
									</div>
								{/if}
								
								<!-- Action Button -->
								<Button href="tel:{site.phone}" class="w-full bg-primary hover:bg-primary/90">
									Call {site.name} →
								</Button>
							</Card.Content>
						</Card.Root>
					{/if}
				{/each}
			</div>
		</section>
	{/if}
	
	<!-- Water Distribution -->
	{#if waterSites.length > 0}
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-6 text-cyan-800 flex items-center gap-2">
				<Droplets class="h-6 w-6 text-primary" />
				Water Distribution Centers
			</h2>
			<div class="grid gap-4">
				{#each waterSites as site}
					<Card.Root class="border-2 border-primary bg-primary/5">
						<Card.Header>
							<div class="flex justify-between items-start">
								<Card.Title class="text-cyan-800 flex items-center gap-2">
									{@const IconComponent = getTypeIcon(site.type)}
						<IconComponent class="h-6 w-6 text-primary" />
									{site.name}
								</Card.Title>
								<Badge class={getStatusBadge(site).class + " text-white"}>
									{getStatusBadge(site).text}
								</Badge>
							</div>
						</Card.Header>
						<Card.Content>
							<div class="grid md:grid-cols-3 gap-4 items-center">
								<div>
									<h4 class="font-semibold text-foreground mb-1">Location</h4>
									<p class="text-sm text-muted-foreground">
										{site.address.street}<br>
										{site.address.city}, {site.address.state}
									</p>
								</div>
								<div>
									<h4 class="font-semibold text-foreground mb-1">Hours</h4>
									<p class="text-sm text-muted-foreground">
										{Object.values(site.schedule)[0]}
									</p>
								</div>
								<div>
									<Button href="tel:{site.phone}" class="w-full bg-primary hover:bg-primary/90">
										Call {site.phone}
									</Button>
								</div>
							</div>
							{#if site.notes}
								<p class="text-sm text-muted-foreground italic mt-3">{site.notes}</p>
							{/if}
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>
	{/if}
	
	<!-- Food Pantries -->
	{#if foodPantrySites.length > 0}
		<section class="mb-12">
			<h2 class="text-2xl font-semibold mb-6 text-purple-800 flex items-center gap-2">
				<ShoppingCart class="h-6 w-6 text-purple-600" />
				Emergency Food Pantries
			</h2>
			<div class="grid gap-6">
				{#each foodPantrySites as site}
					<Card.Root class="border-2 border-primary bg-primary/5">
						<Card.Header>
							<div class="flex justify-between items-start">
								<Card.Title class="text-purple-800 flex items-center gap-2">
									{@const IconComponent = getTypeIcon(site.type)}
						<IconComponent class="h-6 w-6 text-primary" />
									{site.name}
								</Card.Title>
								<Badge class={getStatusBadge(site).class + " text-white"}>
									{getStatusBadge(site).text}
								</Badge>
							</div>
						</Card.Header>
						<Card.Content>
							<!-- Address and Contact -->
							<div class="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h4 class="font-semibold text-foreground mb-2">Location</h4>
									<p class="text-sm text-muted-foreground">
										{site.address.street}<br>
										{site.address.city}, {site.address.state} {site.address.zip}
									</p>
								</div>
								<div>
									<h4 class="font-semibold text-foreground mb-2">Contact & Hours</h4>
									<div class="space-y-1">
										<a href="tel:{site.phone}" class="text-sm text-primary hover:text-primary/90 font-medium block">
											<Phone class="h-4 w-4 inline mr-1" /> {site.phone}
										</a>
										{#if site.website}
											<a href="{site.website}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
												🌐 Website
											</a>
										{/if}
									</div>
									<p class="text-sm text-muted-foreground">
										{Object.values(site.schedule)[0]}
									</p>
								</div>
							</div>
							
							<!-- Services -->
							<div class="mb-4">
								<h4 class="font-semibold text-foreground mb-2">Items Available</h4>
								<div class="flex flex-wrap gap-2">
									{#each site.services as service}
										<Badge variant="outline" class="text-xs">
											{service}
										</Badge>
									{/each}
								</div>
							</div>
							
							<!-- Notes -->
							{#if site.notes}
								<div class="mb-4">
									<p class="text-sm text-muted-foreground italic">{site.notes}</p>
								</div>
							{/if}
							
							<!-- Action Button -->
							<Button href="tel:{site.phone}" class="w-full bg-primary hover:bg-primary/90">
								Call for Current Inventory →
							</Button>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>
	{/if}
	
	<!-- Community Kitchens -->
	{#if communitySites.length > 0}
		<section class="mb-8">
			<h2 class="text-2xl font-semibold mb-6 text-orange-800 flex items-center gap-2">
				<Users class="h-6 w-6 text-orange-600" />
				Community Kitchens
			</h2>
			<div class="grid gap-6">
				{#each communitySites as site}
					<Card.Root class="border-2 border-primary bg-primary/5">
						<Card.Header>
							<div class="flex justify-between items-start">
								<Card.Title class="text-orange-800 flex items-center gap-2">
									{@const IconComponent = getTypeIcon(site.type)}
						<IconComponent class="h-6 w-6 text-primary" />
									{site.name}
								</Card.Title>
								<Badge class={getStatusBadge(site).class + " text-white"}>
									{getStatusBadge(site).text}
								</Badge>
							</div>
						</Card.Header>
						<Card.Content>
							<!-- Address and Contact -->
							<div class="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h4 class="font-semibold text-foreground mb-2">Location</h4>
									<p class="text-sm text-muted-foreground">
										{site.address.street}<br>
										{site.address.city}, {site.address.state} {site.address.zip}
									</p>
								</div>
								<div>
									<h4 class="font-semibold text-foreground mb-2">Contact</h4>
									<div class="space-y-1">
										<a href="tel:{site.phone}" class="text-sm text-primary hover:text-primary/90 font-medium block">
											<Phone class="h-4 w-4 inline mr-1" /> {site.phone}
										</a>
										{#if site.emergencyPhone}
											<a href="tel:{site.emergencyPhone}" class="text-sm text-destructive hover:text-destructive/80 font-medium block">
												<AlertTriangle class="h-4 w-4 inline mr-1" /> Emergency: {site.emergencyPhone}
											</a>
										{/if}
										{#if site.website}
											<a href="{site.website}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
												<ExternalLink class="h-4 w-4 inline mr-1" /> Visit Website
											</a>
										{/if}
										{#if site.localWebsite}
											<a href="{site.localWebsite}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
												<Home class="inline h-4 w-4" /> Local Info
											</a>
										{/if}
										{#if site.facebook}
											<a href="{site.facebook}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
												📘 Facebook
											</a>
										{/if}
										{#if site.socialMedia}
											{#if site.socialMedia.facebook}
												<a href="https://facebook.com/{site.socialMedia.facebook}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
													📘 Facebook
												</a>
											{/if}
											{#if site.socialMedia.twitter}
												<a href="https://twitter.com/{site.socialMedia.twitter}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
													🐦 Twitter
												</a>
											{/if}
											{#if site.socialMedia.instagram}
												<a href="https://instagram.com/{site.socialMedia.instagram}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary hover:text-primary/90 font-medium block">
													📷 Instagram
												</a>
											{/if}
										{/if}
									</div>
								</div>
							</div>
							
							<!-- Schedule -->
							<div class="mb-4">
								<h4 class="font-semibold text-foreground mb-2">Meal Times</h4>
								<div class="grid grid-cols-2 gap-2 text-sm">
									{#each Object.entries(site.schedule) as [meal, time]}
										<div class="bg-white p-2 rounded border">
											<span class="font-medium capitalize">{meal}:</span> {time}
										</div>
									{/each}
								</div>
							</div>
							
							<!-- Services -->
							<div class="mb-4">
								<h4 class="font-semibold text-foreground mb-2">What Makes Us Special</h4>
								<div class="flex flex-wrap gap-2">
									{#each site.services as service}
										<Badge variant="outline" class="text-xs">
											{service}
										</Badge>
									{/each}
								</div>
							</div>
							
							<!-- Notes -->
							{#if site.notes}
								<div class="mb-4">
									<p class="text-sm text-muted-foreground italic">{site.notes}</p>
								</div>
							{/if}
							
							<!-- Action Button -->
							<Button href="tel:{site.phone}" class="w-full bg-primary hover:bg-primary/90">
								Call {site.name} →
							</Button>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>
	{/if}
	
	<!-- Footer Help -->
	<Alert.Root class="bg-muted/50 border-border">
		<Alert.Description class="text-center text-muted-foreground">
			<strong>Can't find food or water?</strong> Call 211 (dial 2-1-1) for help finding additional resources, 
			or contact the Red Cross at <a href="tel:1-800-733-2767" class="font-semibold text-primary">1-800-733-2767</a>.
		</Alert.Description>
	</Alert.Root>
</div>