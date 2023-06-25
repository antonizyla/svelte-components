<script lang="ts">
	export let name: string;
	export let multiple: boolean = false;
</script>

<input class="p-4 border-red-50 border rounded-md w-full" type="file" {name} {multiple} />

<style lang="postcss">
	input[type='file']::file-selector-button {
		@apply border-2 border-red-50 bg-white rounded-full inline-block cursor-pointer font-bold font-sans px-6 py-3 mr-10;
	}
	input[type='file']::file-selector-button:hover {
		@apply bg-blue-100;
	}
</style>
