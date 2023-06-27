<script lang="ts">
	export let opened: boolean = false;

	let dialog: HTMLDialogElement;

	$: if (dialog && opened) dialog.showModal();
</script>

<button
	on:click={() => {
		opened = true;
	}}
>
	Open Modal
</button>

<dialog bind:this={dialog} on:close={() => (opened = false)} on:click|self={() => dialog.close()}>
	<div on:click|stopPropagation>
		<slot />
	</div>
</dialog>
