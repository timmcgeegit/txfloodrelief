export async function load() {
	try {
		const financialAssistance = await import('$lib/data/financial-assistance.json');
		return {
			financialAssistance: financialAssistance.default,
			lastUpdated: financialAssistance.default.lastUpdated
		};
	} catch (error) {
		// Fallback data if JSON file doesn't exist yet
		return {
			financialAssistance: {
				lastUpdated: "2025-07-06T23:00:00Z",
				programs: []
			},
			lastUpdated: "2025-07-06T23:00:00Z"
		};
	}
}