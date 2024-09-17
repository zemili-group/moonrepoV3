<script lang="ts">
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';
	import '../app.css';
	import { goto } from '$app/navigation';
	import { authCheck } from '../lib/stores/user-store';

	// forcing deployment

	let showWelcome = !!env.PUBLIC_SHOW_WELCOME_SCREEN
	let { children } = $props();
	// let authStatus = $derived(authCheck())

 	onMount(() => {
	 if (showWelcome){
	   goto('/launch')
	 }
  })

	// $effect(() => {
	// 	if (!authStatus) {
	// 		goto('/')
	// 	}
	// })
</script>

<div class="">
	{@render children()}
</div>
