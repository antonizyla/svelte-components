<script lang="ts">
	import Card from '$lib/components/Cards/Card.svelte';

	export let contents: { title: string; content: string }[] = [];
</script>

<div class="flex flex-row gap-8 p-4 flex-wrap justify-center">
	{#each contents as { title, content }}
		<Card {title} {content} />
	{/each}
</div>
