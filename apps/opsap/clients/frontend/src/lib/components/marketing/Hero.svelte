<script>
	import Button from '../ui/button/button.svelte';
	import SignupForm from './SignupForm.svelte';
</script>

<div class="flex">
	<div class="mt-24 flex flex-1 flex-col py-4">
		<h3 class="text-8xl font-extrabold">Divers</h3>
		<p class="mt-4 text-2xl">Inshore, Offshore, Salvage</p>
		<p class="mt-4">
			Automated Career Tracking,Digital logbooks, <br /> Jobsboard and applicant management platform
			<br />
			for the commercial diving industry
		</p>

		<SignupForm>
			<Button
				size="lg"
				class="mt-10 w-fit bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400"
				>Signup for free</Button
			>
		</SignupForm>
	</div>
	<div class="flex-1 p-20 pr-0 pt-10">
		<img src="/divers.svg" alt="logo opsap" class="h-[600px] w-full" />
	</div>
</div>
