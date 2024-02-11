<script lang="ts">
    import Nav from "../../components/Nav/Nav.svelte";
    import Button from "../../components/Button/Button.svelte";

    let navContent = {
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
        navContent.mainLinks;
    export let navCtaLinks: {
        href: string;
        label: string;
        primary: boolean;
    }[] = navContent.ctaLinks;
    export let navTitle: string = navContent.title;

    export let mainTitle: string = "Welcome to Website";
    export let mainText: string = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`;
    // @ts-ignore
    import backgroundImage from "../../components/Images/sampleImage.jpg?webp"

    import { onMount } from "svelte";

    onMount(() => {
        const container = document.getElementById("container");
        container.style.backgroundImage = `url(${backgroundImage})`;
    });
</script>

<div
    class="!flex min-h-screen w-full flex-col bg-cover bg-center"
    id="container"
>
    <Nav
        classes=""
        title={navTitle}
        ctaLinks={navCtaLinks}
        mainLinks={navMainLinks}
    />
    <div class=" flex flex-grow justify-center">
        <div class="flex max-w-lg flex-col gap-6 self-center p-4 text-center">
            <div class="text-2xl font-semibold">{mainTitle}</div>
            <div class="">
                {mainText}
            </div>
            <Button primary classes="w-fit mx-auto">Sign Up Now</Button>
        </div>
    </div>
</div>
