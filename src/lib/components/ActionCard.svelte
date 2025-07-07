<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';

	let { 
		href, 
		icon, 
		title, 
		description, 
		badgeText,
		variant = 'primary',
		children
	}: {
		href: string;
		icon: any;
		title: string;
		description: string;
		badgeText: string;
		variant?: 'primary' | 'secondary';
		children: any;
	} = $props();
</script>

<Card.Root
	class="group relative overflow-hidden border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
>
	<div
		class="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 transition-all duration-300 group-hover:from-primary/10 group-hover:to-primary/15"
	></div>
	<a href={href} class="relative z-10 block h-full">
		<Card.Header class="pt-8 pb-6 text-center">
			<div
				class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-3xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
			>
				<svelte:component this={icon} class="h-8 w-8 text-primary-foreground" />
			</div>
			<Card.Title class="mb-2 text-2xl font-bold text-primary">{title}</Card.Title>
			<Badge variant="outline" class="border-primary/30 bg-primary/10 text-primary">{badgeText}</Badge>
		</Card.Header>
		<Card.Content class="px-6 pb-8">
			<Card.Description class="mb-6 text-center leading-relaxed text-gray-600">
				{description}
			</Card.Description>
			<Button
				variant="default"
				class="w-full rounded-xl py-3 font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				{@render children()}
			</Button>
		</Card.Content>
	</a>
</Card.Root>