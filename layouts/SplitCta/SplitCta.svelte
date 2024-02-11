<script lang="ts">
    import { onMount } from "svelte";
    // nav, image and button
    import Nav from "../../components/Nav/Nav.svelte";
    import Image from "../../components/Images/Image.svelte";
    import Button from "../../components/Button/Button.svelte";

    // @ts-ignore
    import bgImage from "../../components/Images/sampleImage2.jpg?as=picture";
    // @ts-ignore
    import bgImage2 from "../../components/Images/sampleImage2.jpg?brightness=0.8";

    let navData = {
        mainLinks: [
            {
                href: "#",
                label: "Home",
            },
            {
                href: "#",
                label: "About",
            },
            {
                href: "#",
                label: "Contact",
            },
        ],
        ctaLinks: [
            {
                href: "#",
                label: "Sign Up",
                primary: true,
            },
            {
                href: "#",
                label: "Log In",
                primary: false,
            },
        ],
        title: "My Website",
    };

    export let navMainLinks: { href: string; label: string }[] =
        navData.mainLinks;
    export let navCtaLinks: {
        href: string;
        label: string;
        primary: boolean;
    }[] = navData.ctaLinks;
    export let navTitle: string = navData.title;
    export let mainTitle: string = "Welcome to Website";
    export let mainText: string =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur similique doloremque, numquam reiciendis sapiente fugit incidunt architecto hic labore dolores ullam qui quam aspernatur a atque quis perferendis? Placeat.";
    export let buttonText: string = "Get Started";

    // dodgy background image trickery
    const mediumBrakePoint = 768;
    let width: number = 0;
    let mounted: boolean = false;

    // for navigation if sticky
    let scrolledInPage: number = 0;

    onMount(() => {
        mounted = true;
    });

    $: {
        if (mounted) {
            let element = document.getElementById("wholeCta"); // can take on 'wholeCta' or 'central-content'
            if (width < mediumBrakePoint) {
                element.style.backgroundImage = `url(${bgImage2})`;
                element.style.backgroundSize = "cover";
                element.style.backgroundPosition = "center";
            } else {
                element.style.backgroundImage = "none";
            }
        }
    }
</script>

<svelte:window bind:innerWidth={width} bind:scrollY={scrolledInPage} />

<div class="flex min-h-screen w-full flex-col" id="wholeCta">
    <Nav
        mainLinks={navMainLinks}
        ctaLinks={navCtaLinks}
        overImage={mounted && width < mediumBrakePoint}
        title={navTitle}
        sticky={false}
        {scrolledInPage}
    />
    <div
        id="central-content"
        class="flex flex-grow justify-center bg-cover bg-center"
    >
        <div
            class="mx-auto flex flex-row flex-wrap items-center justify-center"
        >
            <div
                class="flex w-[100vw] flex-col justify-center gap-6 p-10 py-12 text-center max-md:text-background md:w-5/12 md:p-4 md:text-left"
            >
                <h1
                    class="text-3xl font-extrabold text-text"
                    class:text-background={mounted && width < mediumBrakePoint}
                >
                    {mainTitle}
                </h1>
                <p
                    class="max-w-prose text-text"
                    class:text-background={mounted && width < mediumBrakePoint}
                >
                    {mainText}
                </p>
                <Button
                    primary
                    size={"medium"}
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
