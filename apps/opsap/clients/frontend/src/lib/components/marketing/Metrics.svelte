<script>
	import { Briefcase, Landmark, NotebookPen, Users } from 'lucide-svelte';

	import Card from '../ui/card/card.svelte';

	import { statsStore } from '../../stores/stats-store';
	import { onMount } from 'svelte';
	import { getStats } from '@/requests/stats-request';


	onMount(async () => {
		const stats = await getStats("users")
		console.log(stats)
		statsStore.set({ userStats: stats.data })
	})

	$: console.log($statsStore)
</script>

<Card
	class="mt-14 rounded-none bg-black px-10 py-10 sm:rounded-bl-3xl sm:rounded-br-md sm:rounded-tl-3xl sm:rounded-tr-md"
>
	<div class="grid grid-cols-2 gap-8 text-white sm:flex sm:justify-between">
		<div class="flex flex-col items-center justify-center space-y-4">
			<Users size={28} />
			<div class="text-4xl">{$statsStore.userStats?.total_users}</div>
			<div>Registered Users</div>
		</div>
		<div class="flex flex-col items-center justify-center space-y-4">
			<Landmark size={28} />
			<div class="text-4xl">356</div>
			<div>Listed Companies</div>
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
