<script>
	import { Users } from 'lucide-svelte';

	import Button from '../ui/button/button.svelte';
	import Card from '../ui/card/card.svelte';
	import SignupForm from './SignupForm.svelte';
</script>

<div class="mt-32 grid grid-cols-1 px-4 sm:grid-cols-2 sm:px-0">
	<div class="mt-10 grid flex-1 grid-cols-3 gap-6">
		<Card class="p-6">
			<p class="my-6 font-semibold">Overall Total Dives</p>
			<p>L</p>
			<div>
				<div>Offshore</div>
				<div>Inshore</div>
			</div>
		</Card>
		<Card class="-my-10 mt-10 p-6">
			<p class="my-6 font-semibold">Verified Total Dives</p>
			<p>L</p>
			<div class="flex items-center justify-between space-x-2 text-sm">
				<div>Offshore</div>
				<div>Inshore</div>
			</div>
		</Card>
		<Card class="p-6">
			<p class="my-6 font-semibold">Supervisor Panel Time</p>
			<p>L</p>
			<div class="flex items-center justify-between space-x-2 text-sm">
				<div>Offshore</div>
				<div>Inshore</div>
			</div>
		</Card>
		<Card class="p-6">
			<p class="my-6 font-semibold">Verified Supervisor Panel Time</p>
			<p>L.</p>
			<div class="flex items-center justify-between space-x-2 text-sm">
				<div>Offshore</div>
				<div>Inshore</div>
			</div>
		</Card>
		<Card class="-my-10 mt-10 p-6">
			<p class="my-6 font-semibold">Inspection Hours</p>
			<p>L</p>
			<div class="flex items-center justify-between space-x-2 text-sm">
				<div>Offshore</div>
				<div>Inshore</div>
			</div>
		</Card>
		<Card class="p-6">
			<p class="my-6 font-semibold">Sat Lockout Time Total</p>
			<p>L</p>
			<div class="flex items-center justify-between space-x-2 text-sm">
				<div>Offshore</div>
				<div>Inshore</div>
			</div>
		</Card>
	</div>
	<div class="mt-24 flex flex-col items-center py-4 sm:flex-row sm:items-start sm:pl-32">
		<!-- Content -->
		<div class="flex flex-col items-center text-center sm:items-start sm:text-left">
			<Button variant="outline" class="mb-4 w-fit border-b border-black sm:mb-4">Stats</Button>
			<p class="mt-4 text-xl">
				vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
				voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
			</p>
			<p class="mt-4 text-xl">
				vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
				voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
			</p>

			<SignupForm>
				<Button
					size="lg"
					class="mt-10 w-fit bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 sm:mt-10"
					>Signup for free
				</Button>
			</SignupForm>
		</div>
	</div>
</div>
