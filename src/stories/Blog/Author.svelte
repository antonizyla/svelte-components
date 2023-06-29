<script lang="ts">
	import Image from '../Images/Image.svelte';

	export let name: string;
	export let email: string;
	export let avatar: string;
	export let bio: string;
</script>

<div
	class="flex-row flex p-4 gap-5 w-fit shadow shadow-inner-md rounded-lg bg-secondary/20 shadow-secondary/70 drop-shadow-lg"
>
	<div class="p-3 rounded-full shadow-text drop-shadow-xl">
		<Image pad={false} round={true} data={avatar} alt={`Image of ${name}`} />
	</div>
	<div class="flex flex-col gap-1 justify-between max-w-sm p-2 py-6">
		<h2 class="text-2xl underline underline-offset-[12px]">{name}</h2>
		<p>{bio}</p>
		<p class="text-text/70 text-lg text-right px-6">{email}</p>
	</div>
</div>
