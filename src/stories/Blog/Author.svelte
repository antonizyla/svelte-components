<script lang="ts">
	export let name: string;
	export let email: string;
	export let avatar: string;
	export let bio: string;
</script>

<div
	class="flex-row flex p-4 gap-5 w-fit rounded-xl bg-gray-100 shadow-gray-100 drop-shadow-lg border-gray-100 border"
>
	<div class="py-3">
		<img class="rounded-full drop-shadow-md" src={avatar} alt={`Image of ${name}`} />
	</div>
	<div class="flex flex-col gap-1 justify-between max-w-sm p-2 py-6 ">
		<h2 class="text-2xl underline underline-offset-[12px]">{name}</h2>
		<p>{bio}</p>
		<p class="text-gray-700 text-lg text-right px-6">{email}</p>
	</div>
</div>
