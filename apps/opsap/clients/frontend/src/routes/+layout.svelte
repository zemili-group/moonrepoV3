<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { User } from 'lucide-svelte';
	import '../app.css';
</script>

<div class="container">
	<div
		class="flex items-center justify-between bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-4"
	>
		<div class="text-white">
			<img src="/opsap6-white-final.png" alt="logo opsap" class="h-6 w-24" />
		</div>
		<Button variant="link" class="space-x-2 text-white"
			><User size="16px" /> <span>LOGIN </span></Button
		>
	</div>

	<slot></slot>

	<div class="flex items-center justify-between bg-black px-10 py-4">
		<div class="text-white">@ OPSAP</div>
	</div>
</div>
