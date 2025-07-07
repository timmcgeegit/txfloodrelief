export async function load() {
	const foodSites = await import('$lib/data/food-sites.json');
	return {
		foodSites: foodSites.default,
		lastUpdated: foodSites.default.lastUpdated
	};
}