<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Button from '../ui/button/button.svelte';

	// Variables to store input values
	let email = '';
	let password = '';
	let company = '';

	// Array to store selected checkbox options
	let selectedOptions: string[] = [];

	// Options for checkboxes
	const options = ['Diver', 'Supervisor', 'ROV Pilot', 'Contractor', 'Client Rep'];

	async function handleSubmit() {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Company:', company);
    console.log('Selected Options:', selectedOptions);

    const url = "http://localhost:3000/signup";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                // company,
                // selectedOptions
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Server Response:', result);

    } catch (error) {
        console.error('Error:', error);
    }
}

</script>

<div>
	<Dialog.Root>
		<Dialog.Trigger>
			<slot />
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>Signup & Join the waiting list</Dialog.Title>
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
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="company" class="text-left">Company</Label>
					<Input id="company" class="col-span-3" bind:value={company} />
				</div>

				<Label class="mt-4 text-left">What describes you best?</Label>
				<div class="grid grid-cols-2 gap-4">
					{#each options as option}
						<div class="flex items-center space-x-2">
							<input type="checkbox" value={option} bind:group={selectedOptions} />
							<Label class="text-sm font-medium leading-none">
								{option}
							</Label>
						</div>
					{/each}
				</div>
			</div>
			<Dialog.Footer>
				<Button type="button" on:click={handleSubmit}>Sign Up</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
