<script lang="ts">
	import navContent from './navContent.json';

	import Nav from '$lib/components/Nav/Nav.svelte';
	import Button from '$lib/components/Button/Button.svelte';

	// @ts-ignore
	import backgroundImage from '$lib/components/Images/sampleImage.jpg';

	import { onMount } from 'svelte';

	onMount(() => {
		const container = document.getElementById('container');
		//@ts-ignore container won't be null
		container.style.backgroundImage = `url(${backgroundImage})`;
	});
</script>

<div class="!flex min-h-screen w-full flex-col bg-cover bg-center" id="container">
	<Nav
		classes=""
		title={navContent.title}
		ctaLinks={navContent.ctaLinks}
		mainLinks={navContent.mainLinks}
	/>
	<div class=" flex flex-grow justify-center">
		<div class="flex max-w-lg flex-col gap-6 self-center p-4 text-center">
			<div class="text-2xl font-semibold">Welcome to Website</div>
			<div class="">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores eius voluptate porro. Est
				ratione ea dolorum corporis nihil repudiandae repellendus, beatae maxime cupiditate itaque
				eum, consequatur maiores nulla blanditiis aliquid!
			</div>
			<Button primary classes="w-fit mx-auto">Sign Up Now</Button>
		</div>
	</div>
</div>
