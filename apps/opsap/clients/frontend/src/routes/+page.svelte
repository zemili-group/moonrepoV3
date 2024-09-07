<script>
	import { env } from '$env/dynamic/public';
	import Footer from '$lib/components/marketing/Footer.svelte';
	import Header from '$lib/components/marketing/Header.svelte';
	import Hero from '$lib/components/marketing/Hero.svelte';
	import InfiniteCarousel from '$lib/components/marketing/InfiniteCarousel.svelte';
	import Metrics from '$lib/components/marketing/Metrics.svelte';
	import Features from '$lib/components/marketing/Features.svelte';
	import Product from '$lib/components/marketing/Product.svelte';
	import Blog from '$lib/components/marketing/Blog.svelte';
	import Stats from '$lib/components/marketing/Stats.svelte';
	import Testimonials from '$lib/components/marketing/Testimonials.svelte';
	import Cta from '$lib/components/marketing/Cta.svelte';

	let showWelcome = $state(!!env.PUBLIC_SHOW_WELCOME_SCREEN);
</script>

{#if !showWelcome}
	<main class="container flex flex-col">
		<Header />
		<Hero />
		<InfiniteCarousel />
		<Metrics />
		<Features />
		<Product />
		<Blog />
		<Stats />
		<Testimonials />
		<Cta />
		<Footer />
	</main>
{/if}
