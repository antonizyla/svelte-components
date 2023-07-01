<script lang="ts">
	export let title: string;
	export let content: string;
</script>

<div
	class="flex flex-col text-center shadow-secondary-button p-4 bg-secondary-button/95 rounded-md drop-shadow-sm shadow-sm justify-stretch min-w-[16rm]"
>
	<div class="font-bold text-text p-2">
		{title}
	</div>
	<div class="text-text/80 p-2 max-w-[40ch]">
		{content}
	</div>
</div>
