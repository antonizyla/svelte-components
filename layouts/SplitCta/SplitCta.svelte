<script lang="ts">
	export let stickyNav: boolean = false;

    // nav, image and button 
    import Nav from "../../components/Nav/Nav.svelte"
    import Image from '../../components/Images/Image.svelte';
    import Button from '../../components/Button/Button.svelte';

	import bgImage from '../../components/Images/sampleImage2.jpg?as=picture';
	import bgImage2 from '../../components/Images/sampleImage2.jpg?brightness=0.8';
	
    console.log(bgImage2)

   let navData = {
	"mainLinks": [
		{
			"href": "#",
			"label": "Home"
		},
		{
			"href": "#",
			"label": "About"
		},
		{
			"href": "#",
			"label": "Contact"
		}
	],
	"ctaLinks": [
		{
			"href": "#",
			"label": "Sign Up",
			"primary": true
		},
		{
			"href": "#",
			"label": "Log In",
			"primary": false
		}
	],
	"title": "My Website"
    }

    export let navMainLinks: {href: string, label: string}[] = navData.mainLinks;
    export let navCtaLinks: {href: string, label: string, primary: boolean}[] = navData.ctaLinks;
    export let navTitle: string = navData.title;
    export let mainTitle: string = "Welcome to Website";
    export let mainText: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur similique doloremque, numquam reiciendis sapiente fugit incidunt architecto hic labore dolores ullam qui quam aspernatur a atque quis perferendis? Placeat.";
    export let buttonText: string = "Get Started";

	import { onMount } from 'svelte';

	// dodgy background image trickery
	const mediumBrakePoint = 768;
	let width: number = 0;
	let mounted: boolean = false;

	onMount(() => {
		mounted = true;
	});

    $: {
        if (mounted){
            if (width < mediumBrakePoint){
                document.getElementById("wholeCta").style.backgroundImage = `url(${bgImage2})`;
                document.getElementById("wholeCta").style.backgroundSize = 'cover';
                document.getElementById("wholeCta").style.backgroundPosition = 'center';
            } else {
                document.getElementById("wholeCta").style.backgroundImage = 'none';

            }
        }
    }

</script>

<svelte:window bind:innerWidth={width} />

<div class="flex min-h-screen w-full flex-col" id="wholeCta">
	<Nav
		classes="bg-transparent"
		mainLinks={navMainLinks}
		ctaLinks={navCtaLinks}
        overImage={mounted && width < mediumBrakePoint}
		title={navTitle}
		sticky={stickyNav}
	/>
	<div id="central-content" class="flex flex-grow justify-center bg-cover bg-center ">
		<div class="mx-auto flex flex-row flex-wrap items-center justify-center">
			<div
				class="flex w-[100vw] flex-col justify-center gap-6 p-10 py-12 text-center max-md:text-background md:w-5/12 md:p-4 md:text-left"
			>
				<h1 class="text-3xl font-extrabold text-text" class:text-background={mounted && width < mediumBrakePoint}>{mainTitle}</h1>
				<p class="max-w-prose text-text" class:text-background={mounted && width < mediumBrakePoint} >{mainText}</p>
				<Button
					primary
					size={'medium'}
					classes="w-40 rounded-full mx-auto md:ml-0 md:!text-background"
					>{buttonText}
				</Button>
			</div>
			<div class="w-[100vw] max-md:hidden md:w-4/12">
				<Image src={bgImage} pad />
			</div>
		</div>
	</div>
</div>


