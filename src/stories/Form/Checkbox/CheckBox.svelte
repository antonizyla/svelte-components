<script lang="ts">
	import postcss from 'postcss';

	export let label: string = '';
	export let checked: boolean = false;
</script>

<label class="m-4 p-4" for={label}>
	<input class="m-3" type="checkbox" name={label} value={label} bind:checked />
	{label}
</label>
