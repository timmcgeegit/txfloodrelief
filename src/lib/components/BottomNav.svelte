<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { page } from '$app/stores';
	import { Home, AlertTriangle, HandHeart, Search, Building, Utensils, DollarSign, CreditCard, Package, Smartphone, Settings, Globe, Phone, AlertCircle } from '@lucide/svelte';

	let menuOpen = $state(false);

	// Get current page for active state
	const currentPath = $derived($page.url.pathname);

	// Check if path is active
	function isActive(path: string) {
		return currentPath === path || currentPath.startsWith(path + '/');
	}

	// Additional menu items for the sliding sheet
	const quickActions = [
		{
			href: '/get-help/shelter',
			icon: 'Home',
			label: 'Emergency Shelters',
			description: 'Find shelter now'
		},
		{
			href: '/get-help/food-water',
			icon: 'Utensils',
			label: 'Food & Water',
			description: 'Distribution sites'
		},
		{
			href: '/get-help/financial',
			icon: 'DollarSign',
			label: 'Financial Aid',
			description: 'FEMA & SBA loans'
		},
		{
			href: '/give-help/donate',
			icon: 'CreditCard',
			label: 'Donate Money',
			description: 'Verified organizations'
		},
		{
			href: '/give-help/supplies',
			icon: 'Package',
			label: 'Supply Donations',
			description: 'Hygiene, cleaning, food'
		},
		{ href: '/updates', icon: 'Smartphone', label: 'Latest Updates', description: 'Official announcements' }
	];

	const emergencyContacts = [
		{ number: '830-258-1111', label: 'Camp Mystic' },
		{ number: '1-800-621-3362', label: 'FEMA' },
		{ number: '1-800-733-2767', label: 'Red Cross' },
		{ number: '830-315-2430', label: 'Kerr County' }
	];

</script>

<!-- Bottom Navigation - Always Visible -->
<div class="fixed right-0 bottom-0 left-0 z-50">
	<!-- Main Bottom Nav Bar -->
	<nav
		class="border-t border-border bg-background pb-5 shadow-lg"
		style="background: var(--background) !important; border-top: 1px solid var(--border) !important;"
	>
		<div class="grid h-16 grid-cols-5">
			<!-- Home -->
			<a
				href="/"
				class="flex flex-col items-center justify-center transition-colors duration-200 {isActive(
					'/'
				) && currentPath === '/'
					? 'bg-warning/10 text-warning'
					: 'text-muted-foreground hover:bg-warning/5 hover:text-warning'}"
			>
				<div
					class="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-warning text-sm text-warning-foreground"
				>
					<Home class="h-4 w-4 text-white" />
				</div>
				<span class="text-xs font-medium">Home</span>
			</a>

			<!-- Get Help -->
			<a
				href="/get-help"
				class="flex flex-col items-center justify-center transition-colors duration-200 {isActive(
					'/get-help'
				)
					? 'bg-primary/10 text-primary'
					: 'text-muted-foreground hover:bg-primary/5 hover:text-primary'}"
			>
				<div
					class="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground"
				>
					<AlertTriangle class="h-4 w-4 text-white" />
				</div>
				<span class="text-xs font-medium">Get Help</span>
			</a>

			<!-- Give Help -->
			<a
				href="/give-help"
				class="flex flex-col items-center justify-center transition-colors duration-200 {isActive(
					'/give-help'
				)
					? 'bg-success/10 text-success'
					: 'text-muted-foreground hover:bg-success/5 hover:text-success'}"
			>
				<div
					class="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-success text-sm text-success-foreground"
				>
					<HandHeart class="h-4 w-4 text-white" />
				</div>
				<span class="text-xs font-medium">Give Help</span>
			</a>

			<!-- Find Someone -->
			<a
				href="/find-someone"
				class="flex flex-col items-center justify-center transition-colors duration-200 {isActive(
					'/find-someone'
				)
					? 'bg-secondary/10 text-secondary'
					: 'text-muted-foreground hover:bg-secondary/5 hover:text-secondary'}"
			>
				<div
					class="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-secondary text-sm text-secondary-foreground"
				>
					<Search class="h-4 w-4 text-white" />
				</div>
				<span class="text-xs font-medium">Find</span>
			</a>

			<!-- More Menu -->
			<Sheet.Root bind:open={menuOpen}>
				<Sheet.Trigger
					class="flex flex-col items-center justify-center text-muted-foreground transition-colors duration-200 hover:bg-muted/50 hover:text-foreground"
				>
					<div
						class="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground"
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</div>
					<span class="text-xs font-medium">More</span>
				</Sheet.Trigger>

				<!-- Sliding Menu from Bottom -->
				<Sheet.Content side="bottom" class="h-[80vh] rounded-t-xl p-0">
					<div class="flex h-full flex-col">
						<!-- Header -->
						<Sheet.Header class="border-b bg-gradient-to-r from-primary/5 to-secondary/5 p-6 pb-4">
							<Sheet.Title class="text-xl font-bold text-foreground">More Options</Sheet.Title>
							<Sheet.Description class="text-muted-foreground">
								Additional resources and emergency contacts
							</Sheet.Description>
						</Sheet.Header>

						<!-- Content -->
						<div class="flex-1 space-y-8 overflow-y-auto p-6">
							<!-- Emergency Contacts -->
							<div>
								<h3 class="mb-4 flex items-center text-lg font-semibold text-foreground">
									<AlertCircle class="mr-2 h-5 w-5 text-destructive" />
									Emergency Contacts
								</h3>
								<div class="grid grid-cols-2 gap-3">
									{#each emergencyContacts as contact}
										<a
											href="tel:{contact.number}"
											class="flex items-center rounded-xl border border-destructive/20 bg-destructive/5 p-3 transition-colors hover:bg-destructive/10 active:scale-95"
											onclick={() => (menuOpen = false)}
										>
											<div class="flex-1">
												<p class="text-sm font-medium text-destructive">{contact.label}</p>
												<p class="text-xs text-destructive/80">{contact.number}</p>
											</div>
											<svg
												class="h-4 w-4 text-destructive/80"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
										</a>
									{/each}
								</div>
							</div>

							<!-- Quick Actions -->
							<div>
								<h3 class="mb-4 text-lg font-semibold text-foreground">Quick Actions</h3>
								<div class="space-y-3">
									{#each quickActions as action}
										<a
											href={action.href}
											class="flex items-center rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:border-border/80 hover:bg-muted/30 active:scale-95"
											onclick={() => (menuOpen = false)}
										>
											<div
												class="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-lg text-white"
											>
												{#if action.icon === 'Home'}
													<Home class="h-5 w-5" />
												{:else if action.icon === 'Utensils'}
													<Utensils class="h-5 w-5" />
												{:else if action.icon === 'DollarSign'}
													<DollarSign class="h-5 w-5" />
												{:else if action.icon === 'CreditCard'}
													<CreditCard class="h-5 w-5" />
												{:else if action.icon === 'Package'}
													<Package class="h-5 w-5" />
												{:else if action.icon === 'Smartphone'}
													<Smartphone class="h-5 w-5" />
												{:else}
													<Home class="h-5 w-5" />
												{/if}
											</div>
											<div class="flex-1">
												<p class="font-medium text-foreground">{action.label}</p>
												<p class="text-sm text-muted-foreground">{action.description}</p>
											</div>
											<svg
												class="h-5 w-5 text-muted-foreground"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</a>
									{/each}
								</div>
							</div>

							<!-- Language & Info -->
							<div>
								<h3 class="mb-4 text-lg font-semibold text-foreground">Language & Info</h3>
								<div class="space-y-3">
									<a
										href="/volunteer-research"
										class="flex items-center rounded-xl border border-border bg-background p-4 transition-colors hover:bg-muted/30 active:scale-95"
										onclick={() => (menuOpen = false)}
									>
										<Search class="mr-4 h-6 w-6 text-muted-foreground" />
										<div class="flex-1">
											<p class="font-medium text-foreground">Volunteer Research</p>
											<p class="text-sm text-muted-foreground">Help verify organizations</p>
										</div>
									</a>
									<a
										href="/settings"
										class="flex items-center rounded-xl border border-border bg-background p-4 transition-colors hover:bg-muted/30 active:scale-95"
										onclick={() => (menuOpen = false)}
									>
										<Settings class="mr-4 h-6 w-6 text-muted-foreground" />
										<div class="flex-1">
											<p class="font-medium text-foreground">Settings</p>
											<p class="text-sm text-muted-foreground">Notifications & offline</p>
										</div>
									</a>
									<a
										href="/es"
										class="flex items-center rounded-xl border border-border bg-background p-4 transition-colors hover:bg-muted/30 active:scale-95"
										onclick={() => (menuOpen = false)}
									>
										<Globe class="mr-4 h-6 w-6 text-muted-foreground" />
										<div class="flex-1">
											<p class="font-medium text-foreground">Español</p>
											<p class="text-sm text-muted-foreground">Cambiar idioma</p>
										</div>
									</a>
									<a
										href="/contact"
										class="flex items-center rounded-xl border border-border bg-background p-4 transition-colors hover:bg-muted/30 active:scale-95"
										onclick={() => (menuOpen = false)}
									>
										<Phone class="mr-4 h-6 w-6 text-muted-foreground" />
										<div class="flex-1">
											<p class="font-medium text-foreground">Contact</p>
											<p class="text-sm text-muted-foreground">Get in touch</p>
										</div>
									</a>
								</div>
							</div>

							<!-- Status Badge -->
							<div class="flex justify-center pt-4">
								<Badge variant="outline" class="border-border bg-background text-xs">
									Updated July 6, 2025 • Active Emergency
								</Badge>
							</div>
						</div>
					</div>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</nav>
</div>

<!-- Bottom padding spacer -->
<div class="h-16"></div>
