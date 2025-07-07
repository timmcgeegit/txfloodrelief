export async function load() {
	const shelters = await import('$lib/data/shelters.json');
	return {
		shelters: shelters.default,
		lastUpdated: shelters.default.lastUpdated
	};
}