<script lang="ts">
	import { page } from '$app/stores';
	import { AlertTriangle, HandHeart, Search, Menu } from '@lucide/svelte';
	
	// Get current page for active state
	const currentPath = $derived($page.url.pathname);
	
	// Check if path is active
	function isActive(path: string) {
		return currentPath === path || currentPath.startsWith(path + '/');
	}
</script>

<!-- Simple Bottom Navigation Test -->
<div class="fixed bottom-0 left-0 right-0 z-50">
	<nav class="bg-background border-t border-border shadow-lg">
		<div class="grid grid-cols-4 h-16">
			<!-- Get Help -->
			<a 
				href="/get-help" 
				class="flex flex-col items-center justify-center transition-colors duration-200 {isActive('/get-help') ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'}"
			>
				<div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm mb-1">
					<AlertTriangle class="h-4 w-4" />
				</div>
				<span class="text-xs font-medium">Get Help</span>
			</a>
			
			<!-- Give Help -->
			<a 
				href="/give-help" 
				class="flex flex-col items-center justify-center transition-colors duration-200 {isActive('/give-help') ? 'text-success bg-success/10' : 'text-muted-foreground hover:text-success hover:bg-success/5'}"
			>
				<div class="w-7 h-7 rounded-lg bg-success flex items-center justify-center text-success-foreground text-sm mb-1">
					<HandHeart class="h-4 w-4" />
				</div>
				<span class="text-xs font-medium">Give Help</span>
			</a>
			
			<!-- Find Someone -->
			<a 
				href="/find-someone" 
				class="flex flex-col items-center justify-center transition-colors duration-200 {isActive('/find-someone') ? 'text-secondary bg-secondary/10' : 'text-muted-foreground hover:text-secondary hover:bg-secondary/5'}"
			>
				<div class="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground text-sm mb-1">
					<Search class="h-4 w-4" />
				</div>
				<span class="text-xs font-medium">Find</span>
			</a>
			
			<!-- More Menu (simple button for now) -->
			<button 
				class="flex flex-col items-center justify-center transition-colors duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/30"
				onclick={() => alert('More menu clicked!')}
			>
				<div class="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-sm mb-1">
					<Menu class="h-4 w-4" />
				</div>
				<span class="text-xs font-medium">More</span>
			</button>
		</div>
	</nav>
</div>

<!-- Bottom padding spacer -->
<div class="h-16"></div>