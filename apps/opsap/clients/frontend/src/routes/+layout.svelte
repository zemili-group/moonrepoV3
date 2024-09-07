<script>
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';
	let { children } = $props();
	import '../app.css';
	import { goto } from '$app/navigation';
			
	let showWelcome = env.PUBLIC_SHOW_WELCOME_SCREEN

 	onMount(() => {
	 if (showWelcome){
	   goto('/launch')
	 }
 })
</script>

<div class="">
	{@render children()}
</div>
