<script lang="ts">
	export let name: string;
	export let multiple: boolean = false;
</script>

<input class="p-4 border-red-50 border rounded-md w-full" type="file" {name} {multiple} />

<style lang="postcss">
	input[type='file']::file-selector-button {
		@apply border-2 bg-secondary rounded-md inline-block cursor-pointer px-6 py-3 mr-10 scale-105 transition duration-200 shadow-2xl shadow-secondary ease-in border-secondary;
	}
</style>
