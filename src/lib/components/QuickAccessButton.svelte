<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	let { 
		href, 
		icon, 
		title, 
		description,
		variant = 'primary'
	}: {
		href: string;
		icon: any;
		title: string;
		description: string;
		variant?: 'primary' | 'success';
	} = $props();

	const variantClasses = {
		primary: 'hover:border-primary/30 hover:bg-primary/5 text-primary',
		success: 'hover:border-success/30 hover:bg-success/5 text-success'
	};

	const iconColor = variant === 'success' ? 'text-success' : 'text-primary';
</script>

<Button
	variant="outline"
	{href}
	class="group h-auto justify-start rounded-xl border-2 bg-white px-6 py-4 transition-all duration-300 {variantClasses[variant]}"
>
	<div class="flex items-center">
		<div class="mr-4 flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:scale-110">
			<svelte:component this={icon} class="h-6 w-6 {iconColor}" />
		</div>
		<div class="text-left">
			<p class="font-semibold text-foreground">{title}</p>
			<p class="text-sm text-muted-foreground">{description}</p>
		</div>
	</div>
</Button>