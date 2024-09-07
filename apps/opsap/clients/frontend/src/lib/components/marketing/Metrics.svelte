<script>
	import { Briefcase, Landmark, NotebookPen, Users } from 'lucide-svelte';

	import Card from '../ui/card/card.svelte';
</script>

<Card
	class="mt-20 flex justify-between rounded-bl-3xl rounded-br-md rounded-tl-3xl rounded-tr-md  bg-black px-20 py-10"
>
	<div class="flex flex-col items-center justify-center space-y-4 text-white">
		<Users size={28} />
		<div class="text-4xl">12,900</div>
		<div>Global Users</div>
	</div>
	<div class="flex flex-col items-center justify-center space-y-4 text-white">
		<Landmark size={28} />
		<div class="text-4xl">356</div>
		<di>Active Companies</di>
	</div>
	<div class="flex flex-col items-center justify-center space-y-4 text-white">
		<Briefcase size={28} />
		<div class="text-4xl">234</div>
		<div>Current Vacancy</div>
	</div>
	<div class="flex flex-col items-center justify-center space-y-4 text-white">
		<NotebookPen size={28} />
		<div class="text-4xl">1.2m</div>
		<div>Logs Recorded</div>
	</div>
</Card>
