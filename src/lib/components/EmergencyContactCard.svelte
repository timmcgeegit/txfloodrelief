<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { AlertTriangle } from '@lucide/svelte';

	let { 
		contacts 
	}: {
		contacts: Array<{label: string, phone: string}>;
	} = $props();
</script>

<Card.Root class="mb-8 border-destructive/20 bg-gradient-to-r from-destructive/5 to-destructive/10 shadow-lg">
	<Card.Header class="bg-destructive text-destructive-foreground">
		<Card.Title class="text-center text-xl font-bold">
			<AlertTriangle class="inline h-5 w-5 mr-2 text-destructive-foreground" />
			Critical Emergency Contacts
		</Card.Title>
	</Card.Header>
	<Card.Content class="p-6">
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each contacts as contact}
				<div
					class="rounded-xl bg-white p-4 text-center shadow-md transition-shadow duration-300 hover:shadow-lg"
				>
					<p class="mb-1 text-sm font-medium text-gray-600">{contact.label}</p>
					<a
						href="tel:{contact.phone}"
						class="text-lg font-bold text-destructive transition-colors hover:text-destructive/80"
					>{contact.phone}</a>
				</div>
			{/each}
		</div>
	</Card.Content>
</Card.Root>