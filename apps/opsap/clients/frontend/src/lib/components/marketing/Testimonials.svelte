<script>
	import Button from '../ui/button/button.svelte';
	import Card from '../ui/card/card.svelte';
</script>

<div class="mt-32 grid h-[400px] grid-cols-3 gap-6">
	<div>
		<Button variant="outline" class="mb-6 border-b border-black">Testimonials</Button>
		<div class="text-4xl">What our user <br /> says about us</div>
		<Button
			size="lg"
			class="mt-10 w-fit bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400"
			>Wiev All Testimonials</Button
		>
	</div>
	<Card class="rounded-3xl bg-black p-8 text-white">
		<p class="my-6">industry Metrics</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum repudiandae sequi
			inventore labore neque quas quisquam amet velit natus laudantium iure, blanditiis provident
			sint, nemo quo exercitationem laboriosam impedit.
		</p>
	</Card>
	<Card class="rounded-3xl bg-gray-100 p-8">
		<p class="my-6">industry Metrics</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum repudiandae sequi
			inventore labore neque quas quisquam amet velit natus laudantium iure, blanditiis provident
			sint, nemo quo exercitationem laboriosam impedit.
		</p>
	</Card>
</div>
