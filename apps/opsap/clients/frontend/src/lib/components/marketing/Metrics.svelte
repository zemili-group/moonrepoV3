<script>
	import { Briefcase, Landmark, NotebookPen, Users } from 'lucide-svelte';

	import Card from '../ui/card/card.svelte';
</script>

<Card
	class="mt-14 rounded-none bg-black px-10 py-10 sm:rounded-bl-3xl sm:rounded-br-md sm:rounded-tl-3xl sm:rounded-tr-md"
>
	<div class="grid grid-cols-2 gap-8 text-white sm:flex sm:justify-between">
		<div class="flex flex-col items-center justify-center space-y-4">
			<Users size={28} />
			<div class="text-4xl">12,900</div>
			<div>Global Users</div>
		</div>
		<div class="flex flex-col items-center justify-center space-y-4">
			<Landmark size={28} />
			<div class="text-4xl">356</div>
			<div>Active Companies</div>
		</div>
		<div class="flex flex-col items-center justify-center space-y-4">
			<Briefcase size={28} />
			<div class="text-4xl">234</div>
			<div>Current Vacancy</div>
		</div>
		<div class="flex flex-col items-center justify-center space-y-4">
			<NotebookPen size={28} />
			<div class="text-4xl">1.2m</div>
			<div>Logs Recorded</div>
		</div>
	</div>
</Card>
