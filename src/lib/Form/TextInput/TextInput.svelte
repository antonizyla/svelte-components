<script lang="ts">
	export let placeholder = 'Your Name...';
	export let id = 'email';
	export let label: string;
	export let required: boolean = false;
	export let validate = true;
	export let validationMessage = '* Required';
	export let autocomplete = false;
	export let name: string;
	export let regex: string = '(.)';

	const re = new RegExp(regex);

	let input = '';
	let valid = true;

	function validateMessage(message: string) {
		if (validate && message.length > 0) {
			valid = re.test(message);
		} else {
			valid = true;
		}
	}

	$: validateMessage(input);
</script>

<div class="flex flex-col w-full p-2">
	<div class="flex flex-row">
		<div class="p-1">{label}</div>
		{#if required}
			<div class="text-red-400 text-sm text-center p-1">*</div>
		{/if}
	</div>
	<input
		bind:value={input}
		class="p-3 border-text/40 border-2 min-w-full rounded-md shadow-sm"
		class:border-red-400={!valid}
		type="text"
		{name}
		{id}
		{placeholder}
		{required}
		autocomplete={autocomplete ? 'on' : 'off'}
	/>
	{#if !valid}
		<div class="text-red-400 text-sm text-center p-1">{validationMessage}</div>
	{/if}
</div>
