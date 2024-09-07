<script lang="ts">
	import { User } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import SignupForm from './SignupForm.svelte';
</script>

<div
	class="flex items-center justify-between rounded-bl-lg rounded-br-lg bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-4"
>
	<div class="text-white">
		<img src="/opsap6-white-final.png" alt="logo opsap" class="h-6 w-24" />
	</div>

	<SignupForm>
		<Button variant="link" class="space-x-2 text-white"
			><User size="18px" /> <span>LOGIN </span>
		</Button>
	</SignupForm>
</div>
