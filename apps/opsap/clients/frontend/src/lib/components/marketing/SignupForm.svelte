<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Button from '../ui/button/button.svelte';
	import Checkbox from '../ui/checkbox/checkbox.svelte';

	// Variables to store input values
	let email = '';
	let password = '';
	let company = '';

	// Array to store selected checkbox options
	let selectedOptions: string[] = [];

	// Options for checkboxes
	const options = ['Diver', 'Supervisor', 'ROV Pilot', 'Contractor', 'Client Rep', 'Inspection'];

	async function handleSubmit() {
		console.log('Email:', email);
		console.log('Password:', password);

		const url = 'http://localhost:3000/signup';

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email,
					password
					// company,
					// selectedOptions
				})
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const result = await response.json();

			if (response.ok) {
				isCreateSuccesfull = true;
			}

			console.log('Server Response:', result);
		} catch (error) {
			console.error('Error:', error);
		}
	}

	let terms = false;
	let policy = false;
	let usePolicy = false;
	let data = false;

	$: isValid = !terms || !policy || !usePolicy || !data || !Boolean(email) || !Boolean(password);

	let isCreateSuccesfull = false;
</script>

<div>
	<Dialog.Root>
		<Dialog.Trigger>
			<slot />
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			{#if isCreateSuccesfull}
				<div>
					<Dialog.Header>
						<Dialog.Title>What describes you best?</Dialog.Title>
						<Dialog.Description>
							Chose any of the following best describes your specializtaon.
						</Dialog.Description>
					</Dialog.Header>

					<div class="mt-4 grid grid-cols-2 gap-4">
						{#each options as option}
							<div class="flex items-center space-x-2">
								<input type="checkbox" value={option} bind:group={selectedOptions} />
								<Label class="text-sm font-medium leading-none">
									{option}
								</Label>
							</div>
						{/each}
					</div>

					<div class="mt-8 grid grid-cols-1 items-center gap-4">
						<Label for="company" class="text-left"
							>Company<span class="pl-1 text-xs text-gray-500">(optional) </span>
						</Label>
						<Input id="company" class="col-span-3" bind:value={company} />
					</div>

					<Dialog.Footer>
						<Button type="button" class="mt-8" on:click={() => {}} disabled={isValid}>Save</Button>
					</Dialog.Footer>
				</div>
			{:else}
				<Dialog.Header>
					<Dialog.Title>Create account and join the waiting list</Dialog.Title>
					<Dialog.Description>
						By joining the waiting list, sign up for a free account.
					</Dialog.Description>
				</Dialog.Header>
				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="email" class="text-left">Email</Label>
						<Input id="email" class="col-span-3" bind:value={email} />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label for="password" class="text-left">Password</Label>
						<Input id="password" class="col-span-3" bind:value={password} type="password" />
					</div>

					<div class="mt-4 space-y-2">
						<div class="flex items-center justify-between space-x-2">
							<Label
								id="terms-label"
								for="terms"
								class="text-xs font-normal leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								I have read and agree to the <Button
									variant="link"
									class="m-0 h-fit p-0 text-xs text-gray-700"
								>
									<a href="https://www.google.com.tr/" target="_blank"> Terms of Service</a>
								</Button>
							</Label>
							<Checkbox
								id="terms"
								bind:checked={terms}
								aria-labelledby="terms-label"
								class="border border-gray-500"
							/>
						</div>
						<div class="flex items-center justify-between space-x-2">
							<Label
								id="terms-label"
								for="terms"
								class="text-xs font-normal leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								I have read and agree to the
								<Button variant="link" class="m-0 h-fit p-0 text-xs text-gray-700">
									<a href="https://www.google.com.tr/" target="_blank">Privacy Policy</a>
								</Button>
							</Label>
							<Checkbox
								id="terms"
								bind:checked={policy}
								aria-labelledby="terms-label"
								class="border border-gray-500"
							/>
						</div>
						<div class="flex items-center justify-between space-x-2">
							<Label
								id="terms-label"
								for="terms"
								class="text-xs font-normal leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								I have read and agree to the

								<Button variant="link" class="m-0 h-fit p-0 text-xs text-gray-700">
									<a href="https://www.google.com.tr/" target="_blank">Acceptable Use Policy</a>
								</Button>
							</Label>
							<Checkbox
								id="terms"
								bind:checked={usePolicy}
								aria-labelledby="terms-label"
								class="border border-gray-500"
							/>
						</div>
						<div class="flex items-center justify-between space-x-2">
							<Label
								id="terms-label"
								for="terms"
								class="text-xs font-normal leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								I have read and agree to the

								<Button variant="link" class="m-0 h-fit p-0 text-xs text-gray-700">
									<a href="https://www.google.com.tr/" target="_blank">Data Processing Agreement</a>
								</Button>
							</Label>
							<Checkbox
								id="terms"
								bind:checked={data}
								aria-labelledby="terms-label"
								class="border border-gray-500"
							/>
						</div>
					</div>
				</div>
				<Dialog.Footer>
					<Button type="button" on:click={handleSubmit} disabled={isValid}>Create</Button>
				</Dialog.Footer>
			{/if}
		</Dialog.Content>
	</Dialog.Root>
</div>
