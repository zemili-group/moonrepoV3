<script>
	import Card from '../ui/card/card.svelte';
</script>

<div class="carousel-wrapper">
	<div class="carousel-inner">
		<div class="carousel-items">
			<!-- Duplicate the items for seamless scrolling -->
			<div class="carousel-items-inner space-x-8">
				<div class="carousel-card">
					<img src="/technip.png" alt="logo opsap" class="h-full w-full" />
				</div>
				<div class="carousel-card">
					<img src="/ndeoffshore.png" alt="logo opsap" class="h-full w-full" />
				</div>

				<div class="carousel-card">
					<img src="/technip.png" alt="logo opsap" class="h-full w-full" />
				</div>
				<div class="carousel-card">
					<img src="/ndeoffshore.png" alt="logo opsap" class="h-full w-full" />
				</div>

				<div class="carousel-card">
					<img src="/technip.png" alt="logo opsap" class="h-full w-full" />
				</div>
				<div class="carousel-card">
					<img src="/ndeoffshore.png" alt="logo opsap" class="h-full w-full" />
				</div>

				<!-- Duplicate for seamless loop -->
				<!-- <Card
					class="carousel-card rounded-bl-2 rounded-tr-2 rounded-br-3xl rounded-tl-3xl px-20 py-10"
					>hey hey 1</Card
				>
				<Card
					class="carousel-card rounded-bl-2 rounded-tr-2 rounded-br-3xl rounded-tl-3xl px-20 py-10"
					>hey hey 2</Card
				>
				<Card
					class="carousel-card rounded-bl-2 rounded-tr-2 rounded-br-3xl rounded-tl-3xl px-20 py-10"
					>hey hey 3</Card
				>
				<Card
					class="carousel-card rounded-bl-2 rounded-tr-2 rounded-br-3xl rounded-tl-3xl px-20 py-10"
					>hey hey 4</Card
				>
				<Card
					class="carousel-card rounded-bl-2 rounded-tr-2 rounded-br-3xl rounded-tl-3xl px-20 py-10"
					>hey hey 5</Card
				> -->
			</div>
		</div>
	</div>
</div>

<style>
	.carousel-wrapper {
		overflow: hidden;
		width: 100%;
		position: relative;
	}

	.carousel-inner {
		display: flex;
		width: 100%;
		animation: scroll 30s linear infinite;
	}

	.carousel-items {
		display: flex;
		width: 100%;
	}

	.carousel-items-inner {
		display: flex;
		width: calc(100% * 2); /* Double the width of the carousel-wrapper */
	}

	.carousel-card {
		flex: 1 0 auto;
		box-sizing: border-box;
		margin-right: 20px; /* Space between cards */
	}

	.carousel-card:last-child {
		margin-right: 0; /* Remove margin for the last card */
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
