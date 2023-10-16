<script lang="ts">
	export let stickyNav: boolean = false;

	import Nav from '$lib/components/Nav/Nav.svelte';
	import Image from '$lib/components/Images/Image.svelte';
	import Button from '$lib/components/Button/Button.svelte';

	//@ts-ignore
	import bgImage from '$lib/components/Images/sampleImage2.jpg?picture';
	//@ts-ignore
	import bgImage2 from '$lib/components/Images/sampleImage2.jpg?brightness=0.9';

	import navData from './navContent.json';
	import { onMount } from 'svelte';

	// dodgy background image trickery
	const mediumBrakePoint = 768;
	let width: number = 0;
	let mounted: boolean = false;

	onMount(() => {
		mounted = true;
	});

	$: {
		let stufftoBeModified: 'central-content' | 'wholeCta' = 'central-content';
		if (width < mediumBrakePoint && mounted) {
			// @ts-ignore , complains it may be null but the element will always exist
			document.getElementById(stufftoBeModified).style.backgroundImage = `url(${bgImage2})`;
			// @ts-ignore
			document.getElementById(stufftoBeModified).classList.add('bg-wrapper');
		} else if (mounted) {
			// @ts-ignore
			document.getElementById(stufftoBeModified).style.backgroundImage = 'none';
			// @ts-ignore
			document.getElementById(stufftoBeModified).classList.remove('bg-wrapper');
		}
	}

	console.log(width);
</script>

<svelte:window bind:innerWidth={width} />

<div class="flex min-h-screen w-full flex-col" id="wholeCta">
	<Nav
		classes="bg-background"
		mainLinks={navData.mainLinks}
		ctaLinks={navData.ctaLinks}
		title={navData.title}
		sticky={stickyNav}
	/>
	<div id="central-content" class="flex flex-grow justify-center bg-cover bg-center">
		<div class="mx-auto flex flex-row flex-wrap items-center justify-center">
			<div
				class="flex w-[100vw] flex-col justify-center gap-6 p-10 py-12 text-center max-md:text-background md:w-5/12 md:p-4 md:text-left"
			>
				<h1 class="text-3xl font-extrabold">Welcome to Website</h1>
				<p class="max-w-prose">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur similique
					doloremque, numquam reiciendis sapiente fugit incidunt architecto hic labore dolores ullam
					qui quam aspernatur a atque quis perferendis? Placeat.
				</p>
				<Button
					primary
					size={'medium'}
					classes="w-40 rounded-full mx-auto md:ml-0 max-md:!text-background"
					>Find Out More
				</Button>
			</div>
			<div class="w-[100vw] max-md:hidden md:w-4/12">
				<Image src={bgImage} pad />
			</div>
		</div>
	</div>
</div>
