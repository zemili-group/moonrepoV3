<script lang="ts">
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';
	import '../app.css';
	import { goto } from '$app/navigation';
			
	let showWelcome = !!env.PUBLIC_SHOW_WELCOME_SCREEN

 	onMount(() => {
	 if (showWelcome){
	   goto('/launch')
	 }
  })

	let { children } = $props();
</script>

<div class="">
	{@render children()}
</div>
