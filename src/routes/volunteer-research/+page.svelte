<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { onMount } from 'svelte';

	const STORAGE_KEY = 'volunteer-research-data';

	let researchResults = $state({});
	let customOrganizations = $state([]);
	let showAddForm = $state(false);
	let newOrgForm = $state({
		name: '',
		type: 'other',
		address: '',
		phone: '',
		issue: '',
		priority: 'medium'
	});
	let volunteerInfo = $state({
		name: '',
		email: '',
		phone: '',
		socialProfiles: {
			facebook: '',
			instagram: '',
			twitter: '',
			linkedin: '',
			other: ''
		},
		additionalResources: '',
		availableHelp: ''
	});

	// Load data from localStorage on mount
	onMount(() => {
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved) {
				const data = JSON.parse(saved);
				if (data.volunteerInfo) {
					volunteerInfo = data.volunteerInfo;
				}
				if (data.researchResults) {
					researchResults = data.researchResults;
				}
				if (data.customOrganizations) {
					customOrganizations = data.customOrganizations;
				}
			}
		} catch (error) {
			console.error('Error loading saved data:', error);
		}
	});

	// Auto-save data to localStorage whenever it changes
	$effect(() => {
		if (typeof window !== 'undefined') {
			try {
				const dataToSave = {
					volunteerInfo,
					researchResults,
					customOrganizations,
					lastSaved: new Date().toISOString()
				};
				localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
			} catch (error) {
				console.error('Error saving data:', error);
			}
		}
	});

	const presetOrganizations = [
		{
			id: 'kerrville-high-gym',
			name: 'Kerrville High School Gymnasium',
			type: 'shelter',
			priority: 'high',
			address: '1101 Barnett Street, Kerrville, TX 78028',
			phone: '830-257-2200',
			issue: 'No confirmation found that gymnasium is being used as emergency shelter',
			possibleWebsite: 'https://www.kerrvilleisd.net/',
			questions: [
				'Is the gymnasium at 1101 Barnett Street actually being used as an emergency shelter?',
				'If yes, confirm operating hours and capacity',
				'If no, remove from shelter listings or update with correct information',
				'Get direct contact number for emergency shelter coordinator'
			],
			contacts: [
				'Kerrville ISD Main Office: 830-257-2200',
				'Kerrville Emergency Management: 830-257-8000'
			]
		},
		{
			id: 'hunt-community-center',
			name: 'Hunt Community Center',
			type: 'shelter',
			priority: 'high',
			address: '2232 Hunt Store Road, Hunt, TX 78024',
			phone: '830-238-4388',
			issue: 'No online presence found, need to verify this location exists',
			nearbyLocation: 'Hunt Volunteer Fire Department at 2220 Hunt Store Road (very close address)',
			questions: [
				'Does Hunt Community Center actually exist at 2232 Hunt Store Road?',
				"If yes, confirm they're providing emergency shelter services",
				'If no, check if this is actually the Hunt VFD at 2220 Hunt Store Road',
				'Get website or social media information if available'
			],
			contacts: [
				'Listed number: 830-238-4388',
				'Hunt VFD (nearby): 830-238-4200',
				'Hunt, TX City Hall or community contacts'
			]
		},
		{
			id: 'first-baptist-kitchen',
			name: 'First Baptist Church Community Kitchen',
			type: 'food',
			priority: 'medium',
			address: '600 Water Street, Kerrville, TX 78028',
			phone: '830-257-3505',
			issue:
				'Address mismatch - First Baptist Church is at 625 Washington Street, not 600 Water Street',
			foundWebsite: 'https://fbckerrville.com/',
			actualAddress: '625 Washington Street, Kerrville, TX 78028',
			questions: [
				'Is there a community kitchen at 600 Water Street operated by First Baptist Church?',
				'OR is the community kitchen actually at the church (625 Washington Street)?',
				'OR is this a different organization entirely?',
				'Confirm meal times and services offered',
				'Get correct address for the kitchen location'
			],
			contacts: ['First Baptist Church: 830-257-3505']
		},
		{
			id: 'ingram-food-pantry',
			name: 'Ingram Food Pantry Emergency Distribution',
			type: 'food',
			priority: 'medium',
			address: '135 Broadway Street, Ingram, TX 78025',
			phone: '830-367-4232',
			issue: 'No online presence found anywhere',
			status: 'Completely unknown - may be community-run operation',
			questions: [
				'Does this food pantry exist at 135 Broadway Street?',
				'What are the actual operating hours?',
				'Is it still active during the emergency?',
				'Who runs it (church, nonprofit, community group)?',
				'Any website, Facebook page, or other online presence?'
			],
			contacts: [
				'Listed number: 830-367-4232',
				'Ingram, TX community contacts or local churches',
				'Kerr County emergency services: 830-315-2430'
			]
		},
		{
			id: 'rails-cafe',
			name: 'Rails Cafe Emergency Meals',
			type: 'food',
			priority: 'low',
			address: '623 Water Street, Kerrville, TX 78028',
			phone: '830-257-3877',
			issue: 'Address mismatch - Rails Cafe is at 615 Schreiner Street, not 623 Water Street',
			foundWebsite: 'http://railscafe.com/',
			foundFacebook: 'https://www.facebook.com/RailsCafe/',
			actualAddress: '615 Schreiner Street, Kerrville, TX 78028',
			questions: [
				'Are they actually providing emergency meals for flood relief?',
				'Is the address in our data wrong (should be 615 Schreiner St)?',
				'Are they still accepting ingredient donations?',
				'What are current meal service hours during emergency?'
			],
			contacts: ['Rails Cafe: 830-257-3877']
		}
	];

	// Combine preset and custom organizations
	let allOrganizations = $derived([...presetOrganizations, ...customOrganizations]);

	// Initialize results object for each organization
	$effect(() => {
		if (allOrganizations && allOrganizations.length > 0) {
			allOrganizations.forEach((org) => {
				if (!researchResults[org.id]) {
					researchResults[org.id] = {
						verified: '',
						serviceStatus: '',
						sources: '',
						correctInfo: '',
						notes: '',
						researcher: ''
					};
				}
			});
		}
	});

	function updateResult(orgId, field, value) {
		if (!researchResults[orgId]) {
			researchResults[orgId] = {
				verified: '',
				serviceStatus: '',
				sources: '',
				correctInfo: '',
				notes: '',
				researcher: ''
			};
		}
		researchResults[orgId][field] = value;
	}

	function exportResults() {
		const results = [];
		if (allOrganizations && allOrganizations.length > 0) {
			allOrganizations.forEach((org) => {
				const result = researchResults[org.id];
				if (
					result &&
					(result.verified ||
						result.serviceStatus ||
						result.sources ||
						result.correctInfo ||
						result.notes ||
						result.researcher)
				) {
					results.push({
						organizationId: org.id,
						organizationName: org.name,
						organizationType: org.type,
						priority: org.priority,
						originalIssue: org.issue,
						researchResults: {
							verified: result.verified || '',
							serviceStatus: result.serviceStatus || '',
							sources: result.sources || '',
							correctInfo: result.correctInfo || '',
							notes: result.notes || '',
							researcher: result.researcher || ''
						},
						timestamp: new Date().toISOString()
					});
				}
			});
		}

		if (results.length === 0 && !volunteerInfo.name && !volunteerInfo.additionalResources) {
			alert(
				'No research results or volunteer information to export yet. Please fill out at least one form.'
			);
			return;
		}

		const exportData = {
			exportDate: new Date().toISOString(),
			totalOrganizations: allOrganizations ? allOrganizations.length : 0,
			presetOrganizations: presetOrganizations.length,
			customOrganizations: customOrganizations.length,
			completedResearch: results.length,
			volunteerInformation: {
				name: volunteerInfo.name || '',
				email: volunteerInfo.email || '',
				phone: volunteerInfo.phone || '',
				socialProfiles: {
					facebook: volunteerInfo.socialProfiles.facebook || '',
					instagram: volunteerInfo.socialProfiles.instagram || '',
					twitter: volunteerInfo.socialProfiles.twitter || '',
					linkedin: volunteerInfo.socialProfiles.linkedin || '',
					other: volunteerInfo.socialProfiles.other || ''
				},
				additionalResources: volunteerInfo.additionalResources || '',
				availableHelp: volunteerInfo.availableHelp || ''
			},
			results: results
		};

		const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `volunteer-research-results-${new Date().toISOString().split('T')[0]}.json`;
		a.click();
		URL.revokeObjectURL(url);

		alert(
			`Successfully exported research for ${results.length} organizations and volunteer information!`
		);
	}

	function clearAllData() {
		if (confirm('Are you sure you want to clear all your research data? This cannot be undone.')) {
			try {
				localStorage.removeItem(STORAGE_KEY);

				// Reset all form data
				volunteerInfo = {
					name: '',
					email: '',
					phone: '',
					socialProfiles: {
						facebook: '',
						instagram: '',
						twitter: '',
						linkedin: '',
						other: ''
					},
					additionalResources: '',
					availableHelp: ''
				};

				researchResults = {};
				customOrganizations = [];

				// Reinitialize results for preset organizations only
				presetOrganizations.forEach((org) => {
					researchResults[org.id] = {
						verified: '',
						serviceStatus: '',
						sources: '',
						correctInfo: '',
						notes: '',
						researcher: ''
					};
				});

				alert('All data has been cleared.');
			} catch (error) {
				console.error('Error clearing data:', error);
				alert('Error clearing data. Please try again.');
			}
		}
	}

	function getSavedDataInfo() {
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved) {
				const data = JSON.parse(saved);
				return data.lastSaved ? new Date(data.lastSaved) : null;
			}
		} catch (error) {
			console.error('Error getting saved data info:', error);
		}
		return null;
	}

	function addCustomOrganization() {
		if (!newOrgForm.name.trim()) {
			alert('Please enter an organization name.');
			return;
		}

		const customOrg = {
			id: `custom-${Date.now()}`,
			name: newOrgForm.name.trim(),
			type: newOrgForm.type,
			priority: newOrgForm.priority,
			address: newOrgForm.address.trim(),
			phone: newOrgForm.phone.trim(),
			issue: newOrgForm.issue.trim() || 'Custom organization requiring verification',
			questions: [
				'Does this organization exist and provide services?',
				'What services do they currently offer?',
				'What are their current operating hours?',
				'Do they have a website or social media presence?',
				'Are they currently accepting volunteers or donations?'
			],
			contacts: newOrgForm.phone.trim()
				? [newOrgForm.phone.trim()]
				: ['Contact information needed'],
			isCustom: true
		};

		customOrganizations.push(customOrg);

		// Reset form
		newOrgForm = {
			name: '',
			type: 'other',
			address: '',
			phone: '',
			issue: '',
			priority: 'medium'
		};

		showAddForm = false;
	}

	function removeCustomOrganization(orgId) {
		if (confirm('Are you sure you want to remove this organization from your research list?')) {
			customOrganizations = customOrganizations.filter((org) => org.id !== orgId);
			// Also remove its research results
			delete researchResults[orgId];
		}
	}
</script>

<svelte:head>
	<title>Volunteer Research - Organization Verification</title>
	<meta
		name="description"
		content="Help verify emergency organization information for Texas Hill Country Flood Relief"
	/>
</svelte:head>

<div class="container mx-auto max-w-6xl px-4 py-8">
	<!-- Header -->
	<div class="mb-8">
		<h1 class="mb-4 text-3xl font-bold text-gray-900">🔍 Volunteer Research Portal</h1>
		<p class="mb-4 text-lg text-gray-600">
			Help us verify emergency organization information for flood victims
		</p>

		<Alert.Root class="mb-6 border-blue-200 bg-blue-50">
			<Alert.Description class="text-blue-800">
				<strong>Thank you for volunteering!</strong> Your research helps ensure flood victims get accurate,
				up-to-date information about emergency resources. Please call the organizations below and fill
				out what you find.
			</Alert.Description>
		</Alert.Root>
	</div>

	<!-- Instructions -->
	<Card.Root class="mb-8 border-yellow-200 bg-yellow-50">
		<Card.Header>
			<Card.Title class="text-yellow-800">📋 Research Instructions</Card.Title>
		</Card.Header>
		<Card.Content class="text-yellow-700">
			<ol class="list-inside list-decimal space-y-2">
				<li><strong>Fill out your volunteer information</strong> below (optional but helpful)</li>
				<li>
					<strong>Research the organization</strong> using multiple methods:
					<ul class="mt-1 ml-4 list-inside list-disc space-y-1 text-sm">
						<li>Search for their website and flood relief pages</li>
						<li>Check their social media (Facebook, Instagram, etc.) for updates</li>
						<li>Call them if needed using the phone numbers provided</li>
						<li>Look for news articles or community posts about their services</li>
					</ul>
				</li>
				<li><strong>Focus on the key questions</strong> listed for each organization</li>
				<li><strong>Fill out the research forms</strong> with what you discover</li>
				<li>
					<strong>Be respectful</strong> - if calling, be polite and brief as these organizations are
					dealing with an emergency
				</li>
				<li><strong>Export your results</strong> when done and send them back to Tim</li>
			</ol>
			<p class="mt-4 font-semibold">🕐 Estimated time: 3-5 minutes per organization</p>
		</Card.Content>
	</Card.Root>

	<!-- Data Persistence Notice -->
	<Alert.Root class="mb-8 border-green-200 bg-green-50">
		<Alert.Description class="text-green-800">
			<div class="flex items-center justify-between">
				<div>
					<strong>💾 Your work is automatically saved!</strong> All form data is stored locally in
					your browser. You can refresh the page or close your browser and come back to continue
					where you left off.
					{#if getSavedDataInfo()}
						<br /><span class="text-sm text-green-600"
							>Last saved: {getSavedDataInfo()?.toLocaleString()}</span
						>
					{/if}
				</div>
				<Button
					variant="outline"
					size="sm"
					onclick={clearAllData}
					on:click={clearAllData}
					class="ml-4 border-red-200 text-red-600 hover:bg-red-50"
				>
					Clear All Data
				</Button>
			</div>
		</Alert.Description>
	</Alert.Root>

	<!-- Volunteer Information -->
	<Card.Root class="mb-8 border-green-200 bg-green-50">
		<Card.Header>
			<Card.Title class="text-green-800">👤 Volunteer Information</Card.Title>
			<Card.Description class="text-green-700">
				Help us coordinate better and share resources you might know about (all optional)
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="mb-4 grid gap-4 md:grid-cols-2">
				<div>
					<Label for="volunteer-name">Your Name</Label>
					<input
						id="volunteer-name"
						type="text"
						placeholder="Your name"
						class="mt-1 w-full rounded-md border border-gray-300 p-2"
						bind:value={volunteerInfo.name}
					/>
				</div>
				<div>
					<Label for="volunteer-email">Email</Label>
					<input
						id="volunteer-email"
						type="email"
						placeholder="your@email.com"
						class="mt-1 w-full rounded-md border border-gray-300 p-2"
						bind:value={volunteerInfo.email}
					/>
				</div>
			</div>

			<div class="mb-4 grid gap-4 md:grid-cols-2">
				<div>
					<Label for="volunteer-phone">Phone (Optional)</Label>
					<input
						id="volunteer-phone"
						type="tel"
						placeholder="830-555-0123"
						class="mt-1 w-full rounded-md border border-gray-300 p-2"
						bind:value={volunteerInfo.phone}
					/>
				</div>
				<div>
					<Label for="volunteer-facebook">Facebook Profile/Page</Label>
					<input
						id="volunteer-facebook"
						type="url"
						placeholder="https://facebook.com/yourname"
						class="mt-1 w-full rounded-md border border-gray-300 p-2"
						bind:value={volunteerInfo.socialProfiles.facebook}
					/>
				</div>
			</div>

			<div class="mb-4 grid gap-4 md:grid-cols-3">
				<div>
					<Label for="volunteer-instagram">Instagram</Label>
					<input
						id="volunteer-instagram"
						type="text"
						placeholder="@yourhandle"
						class="mt-1 w-full rounded-md border border-gray-300 p-2"
						bind:value={volunteerInfo.socialProfiles.instagram}
					/>
				</div>
				<div>
					<Label for="volunteer-twitter">Twitter/X</Label>
					<input
						id="volunteer-twitter"
						type="text"
						placeholder="@yourhandle"
						class="mt-1 w-full rounded-md border border-gray-300 p-2"
						bind:value={volunteerInfo.socialProfiles.twitter}
					/>
				</div>
				<div>
					<Label for="volunteer-linkedin">LinkedIn</Label>
					<input
						id="volunteer-linkedin"
						type="url"
						placeholder="https://linkedin.com/in/yourname"
						class="mt-1 w-full rounded-md border border-gray-300 p-2"
						bind:value={volunteerInfo.socialProfiles.linkedin}
					/>
				</div>
			</div>

			<div class="mb-4">
				<Label for="volunteer-other-social">Other Social Media</Label>
				<input
					id="volunteer-other-social"
					type="text"
					placeholder="TikTok, YouTube, Discord, etc."
					class="mt-1 w-full rounded-md border border-gray-300 p-2"
					bind:value={volunteerInfo.socialProfiles.other}
				/>
			</div>

			<div class="mb-4">
				<Label for="additional-resources">Additional Resources You Know About</Label>
				<Textarea
					id="additional-resources"
					placeholder="Know of other organizations, resources, or contacts that might help flood victims? Share them here..."
					class="mt-1"
					bind:value={volunteerInfo.additionalResources}
				/>
			</div>

			<div>
				<Label for="available-help">How Else Can You Help?</Label>
				<Textarea
					id="available-help"
					placeholder="Transportation, supplies, local knowledge, professional skills, etc."
					class="mt-1"
					bind:value={volunteerInfo.availableHelp}
				/>
			</div>
		</Card.Content>
	</Card.Root>

	<!-- Add New Organization -->
	<Card.Root class="mb-8 border-purple-200 bg-purple-50">
		<Card.Header>
			<div class="flex items-center justify-between">
				<Card.Title class="text-purple-800">➕ Add Organization to Research</Card.Title>
				<Button
					onclick={() => (showAddForm = !showAddForm)}
					on:click={() => (showAddForm = !showAddForm)}
					variant="outline"
					size="sm"
					class="border-purple-200 text-purple-600 hover:bg-purple-100"
				>
					{showAddForm ? 'Cancel' : 'Add New'}
				</Button>
			</div>
		</Card.Header>
		{#if showAddForm}
			<Card.Content>
				<div class="mb-4 grid gap-4 md:grid-cols-2">
					<div>
						<Label for="new-org-name">Organization Name *</Label>
						<input
							id="new-org-name"
							type="text"
							placeholder="e.g., Johnson City Community Center"
							class="mt-1 w-full rounded-md border border-gray-300 p-2"
							bind:value={newOrgForm.name}
						/>
					</div>
					<div>
						<Label for="new-org-type">Type</Label>
						<select
							id="new-org-type"
							class="mt-1 w-full rounded-md border border-gray-300 p-2"
							bind:value={newOrgForm.type}
						>
							<option value="shelter">Shelter</option>
							<option value="food">Food & Water</option>
							<option value="medical">Medical</option>
							<option value="financial">Financial Aid</option>
							<option value="volunteer">Volunteer Coordination</option>
							<option value="other">Other</option>
						</select>
					</div>
				</div>

				<div class="mb-4 grid gap-4 md:grid-cols-2">
					<div>
						<Label for="new-org-address">Address</Label>
						<input
							id="new-org-address"
							type="text"
							placeholder="123 Main St, City, TX 78000"
							class="mt-1 w-full rounded-md border border-gray-300 p-2"
							bind:value={newOrgForm.address}
						/>
					</div>
					<div>
						<Label for="new-org-phone">Phone Number</Label>
						<input
							id="new-org-phone"
							type="tel"
							placeholder="830-555-0123"
							class="mt-1 w-full rounded-md border border-gray-300 p-2"
							bind:value={newOrgForm.phone}
						/>
					</div>
				</div>

				<div class="mb-4 grid gap-4 md:grid-cols-2">
					<div>
						<Label for="new-org-priority">Priority</Label>
						<select
							id="new-org-priority"
							class="mt-1 w-full rounded-md border border-gray-300 p-2"
							bind:value={newOrgForm.priority}
						>
							<option value="high">High Priority</option>
							<option value="medium">Medium Priority</option>
							<option value="low">Low Priority</option>
						</select>
					</div>
				</div>

				<div class="mb-4">
					<Label for="new-org-issue">Research Issue/Question</Label>
					<Textarea
						id="new-org-issue"
						placeholder="What do you need to verify about this organization? (optional)"
						class="mt-1"
						bind:value={newOrgForm.issue}
					/>
				</div>

				<div class="flex justify-end gap-2">
					<Button
						variant="outline"
						onclick={() => (showAddForm = false)}
						on:click={() => (showAddForm = false)}
					>
						Cancel
					</Button>
					<Button
						onclick={addCustomOrganization}
						on:click={addCustomOrganization}
						class="bg-purple-600 hover:bg-purple-700"
					>
						Add Organization
					</Button>
				</div>
			</Card.Content>
		{/if}
	</Card.Root>

	<!-- Organizations to Research -->
	<div class="space-y-8">
		{#each allOrganizations || [] as org}
			<Card.Root
				class={'border-2 ' +
					(org.priority === 'high'
						? 'border-red-500 bg-red-50'
						: org.priority === 'medium'
							? 'border-orange-500 bg-orange-50'
							: 'border-blue-500 bg-blue-50')}
			>
				<Card.Header>
					<div class="flex items-start justify-between">
						<Card.Title class="flex items-center gap-2 text-xl">
							{#if org.type === 'shelter'}🏠{:else if org.type === 'food'}🍽️{:else if org.type === 'medical'}🏥{:else if org.type === 'financial'}💰{:else if org.type === 'volunteer'}🤝{:else}🏢{/if}
							{org.name}
							{#if org.isCustom}
								<span class="text-sm text-purple-600">(Custom)</span>
							{/if}
						</Card.Title>
						<div class="flex items-center gap-2">
							<Badge
								class={(org.priority === 'high'
									? 'bg-red-600'
									: org.priority === 'medium'
										? 'bg-orange-600'
										: 'bg-blue-600') + ' text-white'}
							>
								{org.priority.toUpperCase()} PRIORITY
							</Badge>
							{#if org.isCustom}
								<Button
									variant="ghost"
									size="sm"
									onclick={() => removeCustomOrganization(org.id)}
									on:click={() => removeCustomOrganization(org.id)}
									class="p-1 text-red-600 hover:bg-red-50"
									title="Remove this organization"
								>
									🗑️
								</Button>
							{/if}
						</div>
					</div>
					<Card.Description
						class={org.priority === 'high'
							? 'text-red-700'
							: org.priority === 'medium'
								? 'text-orange-700'
								: 'text-blue-700'}
					>
						<strong>Issue:</strong>
						{org.issue}
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<!-- Current Information -->
					<div class="mb-6 grid gap-4 md:grid-cols-2">
						<div>
							<h4 class="mb-2 font-semibold text-gray-800">📍 Listed Information</h4>
							<p class="mb-1 text-sm text-gray-600">{org.address}</p>
							<p class="text-sm text-gray-600">📞 {org.phone}</p>
							{#if org.foundWebsite}
								<p class="text-sm text-gray-600">
									🌐 <a
										href={org.foundWebsite}
										target="_blank"
										class="text-blue-600 hover:text-blue-800">{org.foundWebsite}</a
									>
								</p>
							{/if}
							{#if org.actualAddress}
								<p class="mt-2 text-sm text-red-600">
									<strong>Actual address found:</strong>
									{org.actualAddress}
								</p>
							{/if}
						</div>
						<div>
							<h4 class="mb-2 font-semibold text-gray-800">🔍 Research Resources</h4>
							{#each org.contacts as contact}
								<p class="mb-1 text-sm text-gray-600">{contact}</p>
							{/each}
							{#if org.foundWebsite}
								<p class="mb-1 text-sm text-gray-600">
									🌐 Website: <a
										href={org.foundWebsite}
										target="_blank"
										class="text-blue-600 hover:text-blue-800">{org.foundWebsite}</a
									>
								</p>
							{/if}
							{#if org.foundFacebook}
								<p class="mb-1 text-sm text-gray-600">
									📘 Facebook: <a
										href={org.foundFacebook}
										target="_blank"
										class="text-blue-600 hover:text-blue-800">{org.foundFacebook}</a
									>
								</p>
							{/if}
						</div>
					</div>

					<!-- Research Questions -->
					<div class="mb-6">
						<h4 class="mb-2 font-semibold text-gray-800">❓ Research Questions</h4>
						<p class="mb-2 text-sm text-gray-600">
							Find answers through websites, social media, news articles, or calling:
						</p>
						<ul class="list-inside list-disc space-y-1 text-sm text-gray-600">
							{#each org.questions as question}
								<li>{question}</li>
							{/each}
						</ul>
					</div>

					<!-- Research Form -->
					<div class="rounded-lg border border-gray-200 bg-white p-4">
						<h4 class="mb-4 font-semibold text-gray-800">📝 Your Research Results</h4>

						<div class="mb-4 grid gap-4 md:grid-cols-2">
							<div>
								<Label for="verified-{org.id}">Organization Verified?</Label>
								<select
									id="verified-{org.id}"
									class="mt-1 w-full rounded-md border border-gray-300 p-2"
									value={researchResults[org.id]?.verified || ''}
									onchange={(e) => updateResult(org.id, 'verified', e.target.value)}
								>
									<option value="">Select...</option>
									<option value="yes">✅ Yes, confirmed</option>
									<option value="no">❌ No, doesn't exist</option>
									<option value="different">🔄 Different than listed</option>
									<option value="no-answer">📞 No answer/couldn't reach</option>
								</select>
							</div>
							<div>
								<Label for="status-{org.id}">Emergency Service Status</Label>
								<select
									id="status-{org.id}"
									class="mt-1 w-full rounded-md border border-gray-300 p-2"
									value={researchResults[org.id]?.serviceStatus || ''}
									onchange={(e) => updateResult(org.id, 'serviceStatus', e.target.value)}
								>
									<option value="">Select...</option>
									<option value="active">🟢 Currently providing services</option>
									<option value="not-active">🔴 Not providing emergency services</option>
									<option value="limited">🟡 Limited services</option>
									<option value="unknown">❓ Unknown/unclear</option>
								</select>
							</div>
						</div>

						<div class="mb-4">
							<Label for="sources-{org.id}">Research Sources Used</Label>
							<Textarea
								id="sources-{org.id}"
								placeholder="List websites, social media accounts, phone calls, or other sources you checked..."
								class="mt-1"
								value={researchResults[org.id]?.sources || ''}
								oninput={(e) => updateResult(org.id, 'sources', e.target.value)}
							/>
						</div>

						<div class="mb-4">
							<Label for="correct-info-{org.id}">Correct Information Found</Label>
							<Textarea
								id="correct-info-{org.id}"
								placeholder="Enter correct address, phone, website, social media links, hours, services, etc."
								class="mt-1"
								value={researchResults[org.id]?.correctInfo || ''}
								oninput={(e) => updateResult(org.id, 'correctInfo', e.target.value)}
							/>
						</div>

						<div class="mb-4">
							<Label for="notes-{org.id}">Additional Notes</Label>
							<Textarea
								id="notes-{org.id}"
								placeholder="Special requirements, recent updates posted on social media, news articles found, or other observations..."
								class="mt-1"
								value={researchResults[org.id]?.notes || ''}
								oninput={(e) => updateResult(org.id, 'notes', e.target.value)}
							/>
						</div>

						<div>
							<Label for="researcher-{org.id}">Your Name (Optional)</Label>
							<input
								id="researcher-{org.id}"
								type="text"
								placeholder="Your name for follow-up if needed"
								class="mt-1 w-full rounded-md border border-gray-300 p-2"
								value={researchResults[org.id]?.researcher || ''}
								oninput={(e) => updateResult(org.id, 'researcher', e.target.value)}
							/>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>

	<!-- Progress Indicator -->
	{#if Object.keys(researchResults).length > 0}
		<Card.Root class="mt-8 border-blue-200 bg-blue-50">
			<Card.Header>
				<Card.Title class="text-blue-800">📊 Progress Tracker</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="mb-2 text-blue-700">Forms are working! Your progress:</p>
				<div class="mb-3 text-sm text-blue-600">
					<strong>Researching {allOrganizations ? allOrganizations.length : 0} organizations</strong
					>
					({presetOrganizations.length} preset + {customOrganizations.length} custom)
				</div>
				<ul class="text-sm text-blue-600">
					{#each allOrganizations || [] as org}
						{@const result = researchResults[org.id]}
						{#if result && (result.verified || result.serviceStatus || result.sources || result.correctInfo || result.notes)}
							<li>
								✅ {org.name}
								{org.isCustom ? '(Custom)' : ''} - {result.verified
									? 'Status: ' + result.verified
									: 'In progress...'}
							</li>
						{:else}
							<li>⏳ {org.name} {org.isCustom ? '(Custom)' : ''} - Not started</li>
						{/if}
					{/each}
				</ul>
			</Card.Content>
		</Card.Root>
	{/if}

	<!-- Export Section -->
	<Card.Root class="mt-8 border-green-200 bg-green-50">
		<Card.Header>
			<Card.Title class="text-green-800">📤 Submit Your Research</Card.Title>
		</Card.Header>
		<Card.Content>
			<p class="mb-4 text-green-700">
				When you've completed your research, click the button below to download your results. Then
				email the file to Tim or share it however you normally communicate.
			</p>
			<Button
				onclick={exportResults}
				on:click={exportResults}
				class="bg-green-600 hover:bg-green-700"
			>
				📥 Download Results File
			</Button>
		</Card.Content>
	</Card.Root>

	<!-- Emergency Contacts -->
	<Alert.Root class="mt-8 border-gray-200 bg-gray-50">
		<Alert.Description class="text-center text-gray-700">
			<strong>Questions about this research?</strong> Contact Tim directly.
			<strong>Emergency resources needed?</strong> Call 211 or visit the main flood relief site.
		</Alert.Description>
	</Alert.Root>
</div>

