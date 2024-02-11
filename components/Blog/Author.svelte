<script lang="ts">
    import Image from "../../components/Images/Image.svelte";
    import type {Picture} from "vite-imagetools";

	export let name: string;
	export let email: string;
	export let avatar: Picture; 
	export let bio: string;
</script>

<div
	class="shadow-inner-md border flex w-fit flex-row gap-5 rounded-lg bg-secondary-button p-4 shadow shadow-secondary-button/70 drop-shadow-lg"
>
	<div class="rounded-full p-3 shadow-text drop-shadow-xl">
		<Image pad={false} round={true} src={avatar} alt={`Image of ${name}`} />
	</div>
	<div class="flex max-w-sm flex-col justify-between gap-1 p-2 py-6">
		<h2 class="text-2xl decoration-primary decoration-2 underline underline-offset-[12px]">{name}</h2>
		<p>{bio}</p>
		<a href={`mailto:${email}`} class="px-6 text-right text-lg text-primary underline decoration-[1.5px] underline-offset-[8px]">{email}</a>
	</div>
</div>
