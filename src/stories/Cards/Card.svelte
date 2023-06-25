<script lang="ts">
	export let title: string;
	export let content: string;
</script>

<div
	class="flex flex-col text-center p-4 bg-gray-50 border-2 border-gray-100 rounded-md shadow-gray-100 drop-shadow-md justify-stretch min-w-[16rm]"
>
	<div class="font-bold text-gray-800 p-2">
		{title}
	</div>
	<div class="text-gray-700 p-2 max-w-[40ch]">
		{content}
	</div>
</div>
