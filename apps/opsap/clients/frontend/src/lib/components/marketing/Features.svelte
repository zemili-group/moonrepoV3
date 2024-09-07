<script>
	import { BookUser, ChartPie, Clipboard, History, ShieldCheck, User } from 'lucide-svelte';

	import Button from '../ui/button/button.svelte';
	import Card from '../ui/card/card.svelte';
</script>

<div class="mt-20">
	<Button variant="outline" class="mb-4 border-b border-black">Features</Button>
	<h4 class="text-2xl font-bold">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Enim voluptatibus consequatur obcaecati,
		ipsum sint eaque.
	</h4>
	<div class="mt-10 grid grid-cols-3 gap-6">
		<Card class="bg-gray-100 p-8">
			<User size={28} />
			<p class="my-6 text-2xl">Profile</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum repudiandae sequi
				inventore labore neque quas quisquam amet velit natus laudantium iure, blanditiis provident
				sint, nemo quo exercitationem laboriosam impedit.
			</p>
		</Card>
		<Card class="bg-gray-100 p-8">
			<Clipboard size={28} />
			<p class="my-6 text-2xl">Jobsboard</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum repudiandae sequi
				inventore labore neque quas quisquam amet velit natus laudantium iure, blanditiis provident
				sint, nemo quo exercitationem laboriosam impedit.
			</p>
		</Card>
		<Card class="bg-gray-100 p-8">
			<BookUser size={28} />
			<p class="my-6 text-2xl">Resume</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum repudiandae sequi
				inventore labore neque quas quisquam amet velit natus laudantium iure, blanditiis provident
				sint, nemo quo exercitationem laboriosam impedit.
			</p>
		</Card>
		<Card class="bg-gray-100 p-8">
			<History size={28} />
			<p class="my-6 text-2xl">Profile</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum repudiandae sequi
				inventore labore neque quas quisquam amet velit natus laudantium iure, blanditiis provident
				sint, nemo quo exercitationem laboriosam impedit.
			</p>
		</Card>
		<Card class="bg-gray-100 p-8">
			<ChartPie size={28} />
			<p class="my-6 text-2xl">Activity History</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum repudiandae sequi
				inventore labore neque quas quisquam amet velit natus laudantium iure, blanditiis provident
				sint, nemo quo exercitationem laboriosam impedit.
			</p>
		</Card>
		<Card class="bg-gray-100 p-8">
			<ShieldCheck size={28} />
			<p class="my-6 text-2xl">Cert Verification</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum repudiandae sequi
				inventore labore neque quas quisquam amet velit natus laudantium iure, blanditiis provident
				sint, nemo quo exercitationem laboriosam impedit.
			</p>
		</Card>
	</div>
</div>
