<script lang="ts">
	import CheckBox from '../../../svelte-components/components/Form/Checkbox/CheckBox.svelte';
	let check = false;

	import DatePicker from '../../../svelte-components/components/Form/DatePicker/DatePicker.svelte';
	let birthday: Date = new Date(1, 1, 2000);

	import TextInput from '../../../svelte-components/components/Form/TextInput/TextInput.svelte';
	let input: string= '';

	import FileUpload from '../../../svelte-components/components/Form/FileUpload/FileUpload.svelte';
    let file: File | FileList;

	import RadioButtons from '../../../svelte-components/components/Form/RadioButtons/RadioButtons.svelte';

	import Highlight from 'svelte-highlight';
	import xml from 'svelte-highlight/languages/xml';
	import ts from 'svelte-highlight/languages/typescript';
	import github from 'svelte-highlight/styles/github';
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div class="h1 text-center p-4">Example of Each type of form Utility</div>

<div class="rounded-md border-primary border border-solid w-fit m-4">
	<CheckBox label="Checkbox label" bind:checked={check}></CheckBox>
	<div class="p-2 w-fit m-2 border-primary border rounded-md border-solid">
		<div class="">
			<Highlight
				language={ts}
				code={"import CheckBox from '../../../svelte-components/components/Form/Checkbox/CheckBox.svelte';\nlet check = false;"}
			/>
			<Highlight
				language={xml}
				code={'<CheckBox label="Checkbox label" bind:checked={check}></CheckBox>'}
			/>
		</div>
		<div class="p-2 pl-4">
			State of Variable 'check': {check}
		</div>
	</div>
</div>

<div class="rounded-md border-primary border border-solid w-fit m-4">
	<DatePicker
		label="Choose a Date"
		bind:value={birthday}
		minVal={new Date(new Date().setFullYear(new Date().getFullYear() - 18))}
	/>
	<div class="p-2 w-fit m-2 border-primary border rounded-md border-solid">
		<div class="">
			<Highlight
				language={xml}
				code={`<DatePicker label="Choose a Date" bind:value={birthday} />`}
			/>
		</div>
		<div class="p-2 pl-4">
			State of Variable 'birthday': {birthday}
		</div>
	</div>
</div>

<div class="rounded-md border-primary border border-solid w-fit m-4">
	<TextInput placeholder="placeholder" id="name" label="label for input" name="name for input" bind:input={input}/>
	<div class="p-2 w-fit m-2 border-primary border rounded-md border-solid">
		<div class="">
			<Highlight
				language={ts}
				code={"import TextInput from '../../../svelte-components/components/Form/TextInput/TextInput.svelte';\nlet input: string= '';"}
			/>
			<Highlight
				language={xml}
				code={`<TextInput placeholder="placeholder" id="name" label="label for input" name="name for input" bind:input={input}/>`}
			/>
		</div>
		<div class="">
			<h2 class="p-2 px-4">Contains the following props</h2>
			<Highlight
				language={ts}
				code={`export let placeholder = 'Your Name...';
export let id = 'email';
export let label: string;
export let required: boolean = false;
export let validate = true;
export let validationMessage = '* Required';
export let autocomplete = false;
export let name: string;
export let regex: string = '(.)';`}
			/>
		</div>
		<div class="p-2 pl-4">
			State of Variable 'input': "{input}"
		</div>
	</div>
</div>

