<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { BriefcaseBusiness, User, Users } from 'lucide-svelte';
	import { env } from '$env/dynamic/public';

	let showWelcome = $state(!!env.PUBLIC_SHOW_WELCOME_SCREEN);
</script>

{#if !showWelcome}
	<main class="container flex flex-col">
		<!-- navbar -->
		<div
			class="flex items-center justify-between bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-4"
		>
			<div class="text-white">
				<img src="/opsap6-white-final.png" alt="logo opsap" class="h-6 w-24" />
			</div>
			<Button variant="link" class="space-x-2 text-white"
				><User size="18px" /> <span>LOGIN </span></Button
			>
		</div>
		<div class="flex">
			<div class="flex flex-1 flex-col py-4">
				<h3 class="text-8xl font-extrabold">Divers</h3>
				<p class="mt-4 text-2xl">Inshore, Offshore, Salvage</p>
				<p class="mt-4">
					Automated Career Tracking,Digital logbooks, <br /> Jobsboard and applicant management
					platform
					<br />
					for the commercial diving industry
				</p>
				<Button
					size="lg"
					class="mt-10 w-fit bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400"
					>Signup for free</Button
				>
			</div>
			<div class="flex-1 p-24 pr-10 pt-10">
				<img src="/divers.svg" alt="logo opsap" class="h-[600px] w-full" />
			</div>
		</div>

		<div class="flex justify-between">
			<Card class="rounded-bl-2 rounded-tr-2 rounded-br-3xl rounded-tl-3xl px-20 py-10"
				>hey hey</Card
			>
			<Card class="rounded-bl-2 rounded-tr-2 rounded-br-3xl rounded-tl-3xl px-20 py-10"
				>hey hey</Card
			>
			<Card class="rounded-bl-2 rounded-tr-2 rounded-br-3xl rounded-tl-3xl px-20 py-10"
				>hey hey</Card
			>
			<Card class="rounded-bl-2 rounded-tr-2 rounded-br-3xl rounded-tl-3xl px-20 py-10"
				>hey hey</Card
			>
			<Card class="rounded-bl-2 rounded-tr-2 rounded-br-3xl rounded-tl-3xl px-20 py-10"
				>hey hey</Card
			>
		</div>
		<Card
			class="rounded-bl-2 rounded-tr-2 mt-2* mt-20 flex justify-between rounded-br-3xl rounded-tl-3xl bg-black px-20 py-10"
		>
			<div class="flex flex-col space-y-4 text-white">
				<Users />
				<div class="text-4xl">12,900</div>
				<div>Global Users</div>
			</div>
			<div class="flex flex-col space-y-4 text-white">
				<Users />
				<div class="text-4xl">12,900</div>
				<div>Global Users</div>
			</div>
			<div class="flex flex-col space-y-4 text-white">
				<Users />
				<div class="text-4xl">12,900</div>
				<div>Global Users</div>
			</div>
			<div class="flex flex-col space-y-4 text-white">
				<Users />
				<div class="text-4xl">12,900</div>
				<div>Global Users</div>
			</div>
		</Card>

		<div class="flex items-center justify-between bg-black px-10 py-4">
			<div class="text-white">@ OPSAP</div>
		</div>
	</main>
{/if}
