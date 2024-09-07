<script>
	import { Users } from 'lucide-svelte';

	import Button from '../ui/button/button.svelte';
	import Card from '../ui/card/card.svelte';
</script>

<div class="mt-40 text-center">
	<Button variant="outline" size="lg" class="mb-4 border-b border-black">Blog</Button>
	<p class="my-6 text-2xl font-semibold">perspiciatis unde omnis iste natus error sit voluptatem</p>
	<p>
		perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
		rem aperiam,
	</p>
</div>

<div class="mt-24 grid grid-cols-2 gap-4">
	<Card class="rounded-3xl bg-blue-500 p-8 px-12 text-white">
		<p class="text-3xl font-semibold">
			perspiciatis unde <br /> omnis iste natus error <br /> sit voluptatem
		</p>
		<p class="mt-8">
			perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
			totam rem aperiam, perspiciatis unde omnis iste
		</p>
		<Button class="mt-16 bg-white text-blue-500">Read Full Post</Button>
	</Card>
	<div class="grid grid-cols-1 gap-4">
		<Card class="rounded-3xl bg-gray-100 p-8">
			<p class="my-6">Profile</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum repudiandae sequi
				inventore labore neque quas quisquam amet velit natus laudantium iure, blanditiis provident
				sint, nemo quo exercitationem laboriosam impedit.
			</p>
		</Card>
		<Card class="rounded-3xl bg-gray-100 p-8">
			<p class="my-6">Profile</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum repudiandae sequi
				inventore labore neque quas quisquam amet velit natus laudantium iure, blanditiis provident
				sint, nemo quo exercitationem laboriosam impedit.
			</p>
		</Card>
	</div>
</div>
