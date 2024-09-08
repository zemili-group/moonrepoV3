<script>
	import { BookUser, ChartPie, Clipboard, History, ShieldCheck, User } from 'lucide-svelte';

	import Button from '../ui/button/button.svelte';
	import Card from '../ui/card/card.svelte';
</script>

<div class="mt-20">
	<div class="text-center sm:text-left">
		<Button
			variant="outline"
			class="mx-auto mb-4 border-b border-black text-center sm:mx-0 sm:text-left"
		>
			Features
		</Button>
	</div>

	<h4 class="px-4 text-center text-2xl font-bold sm:px-0 sm:text-left">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Enim voluptatibus consequatur obcaecati,
		ipsum sint eaque.
	</h4>
	<div class="mt-10 grid grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-0">
		<Card class="bg-gray-100 p-8">
			<User size={28} />
			<p class="my-6 text-2xl">Profile</p>
			<p>
				Build a profile so that the world’s best recruiters and most active companies can contact
				you directly for hard-to-fill vacancies matching your experience.
			</p>
		</Card>
		<Card class="bg-gray-100 p-8">
			<Clipboard size={28} />
			<p class="my-6 text-2xl">Jobsboard</p>
			<p>
				Access our internal jobsboard to apply for jobs easily by making your verified job history
				and profile accessible to decision-makers.
			</p>
		</Card>
		<Card class="bg-gray-100 p-8">
			<BookUser size={28} />
			<p class="my-6 text-2xl">Resume</p>
			<p>
				Build a profile so that the world’s best recruiters and most active companies can contact
				you directly for hard-to-fill vacancies matching your experience.
			</p>
		</Card>
		<Card class="bg-gray-100 p-8">
			<History size={28} />
			<p class="my-6 text-2xl">Profile</p>
			<p>
				By tracking your activity history, we compile all the relevant data into a beautifully
				presented online profile that you can submit to hiring managers.
			</p>
		</Card>
		<Card class="bg-gray-100 p-8">
			<ChartPie size={28} />
			<p class="my-6 text-2xl">Activity History</p>
			<p>
				We aggregate industry metrics so you can source future contracts early, upcoming regions,
				who’s hiring, and which companies are paying the best.
			</p>
		</Card>
		<Card class="bg-gray-100 p-8">
			<ShieldCheck size={28} />
			<p class="my-6 text-2xl">Cert Verification</p>
			<p>
				Certificates are verified by our team and are then securely stored on the world’s most
				secure blockchain networks as a safe, immutable data store.
			</p>
		</Card>
	</div>
</div>
