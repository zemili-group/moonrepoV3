<script>
	import Button from '../ui/button/button.svelte';
	import SignupForm from './SignupForm.svelte';
</script>

<div class="flex flex-row-reverse">
	<div class="mt-24 flex flex-1 flex-col py-4">
		<h3 class="text-4xl font-extrabold">Perspiciatis unde omnis iste natus error sit voluptatem</h3>
		<p class="mt-4 text-xl">
			vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
			deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
		</p>
		<p class="mt-4 text-xl">
			vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
			deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
		</p>

		<SignupForm>
			<Button
				size="lg"
				class="mt-10 w-fit bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400"
				>Signup for free
			</Button>
		</SignupForm>
	</div>
	<div class="flex-1 p-20 pl-10">
		<img src="/diverCage1.png" alt="logo opsap" class="h-[600px] w-full" />
	</div>
</div>
