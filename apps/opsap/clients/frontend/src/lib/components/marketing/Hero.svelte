<script>
	import Button from '../ui/button/button.svelte';
	import SignupForm from './SignupForm.svelte';
</script>

<div class="relative flex flex-col items-center sm:flex-row sm:items-start">
	<!-- Background Container -->
	<div
		class="absolute inset-0 bg-[url('/hero_mobile_bg.png')] bg-cover bg-center bg-no-repeat sm:bg-[url('/hero_desktop_bg.png')] sm:bg-cover sm:bg-center"
	>
		<div class="h-full w-full"></div>
	</div>

	<!-- Content -->
	<div
		class="relative mt-24 flex-1 flex-col py-4 text-center text-white sm:text-left sm:text-black"
	>
		<h3 class="text-4xl font-extrabold sm:text-8xl">Divers</h3>
		<p class="mt-4 text-xl sm:text-2xl">Inshore, Offshore, Salvage</p>
		<p class="mt-4">
			Automated Career Tracking, Digital logbooks, <br />
			Jobsboard and applicant management platform <br />
			for the commercial diving industry
		</p>

		<SignupForm>
			<Button
				size="lg"
				class="mx-auto mt-10 w-fit bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 sm:mx-0"
				>Signup for free</Button
			>
		</SignupForm>
	</div>

	<div class="hidden flex-1 p-20 pr-0 pt-10 sm:block">
		<img src="/divers.svg" alt="logo opsap" class="h-[600px] w-full" />
	</div>
</div>
