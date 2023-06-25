<script lang="ts">
	export let labels: string[] = [];
	let bindingGroup = 1;
	export let vertical: boolean = false;
</script>

<div class="p-4">
	{#each labels as label}
		<label class="m-4">
			<input type="radio" name={label} value={label} bind:group={bindingGroup} />
			{label}
		</label>
	{/each}
</div>

<style lang="postcss">
	input[type='radio'] {
		@apply ml-5 m-2;
	}
</style>
