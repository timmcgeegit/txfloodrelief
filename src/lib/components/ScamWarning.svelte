<script lang="ts">
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { AlertTriangle } from '@lucide/svelte';
</script>

<Alert.Root class="mt-8 border-warning/20 bg-warning/5">
	<Alert.Description class="text-warning">
		<span class="font-semibold flex items-center">
			<AlertTriangle class="h-4 w-4 mr-1 text-warning" />
			Scam Warning:
		</span> Legitimate disaster relief organizations will
		never demand immediate payment or refuse to provide detailed information. Report suspected fraud
		to 866-720-5721.
	</Alert.Description>
</Alert.Root>