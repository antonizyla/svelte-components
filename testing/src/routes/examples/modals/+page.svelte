<script lang="ts">
	import Button from '../../../svelte-components/components/Button/Button.svelte';
	import Modal from '../../../svelte-components/components/Modal/Modal.svelte';
	let r: HTMLDialogElement;
</script>

<Button on:click={() => r.showModal()}>Open It!</Button>

<Modal bind:dialog={r}>
	Slot of Modal
	<div class="">
		<Button
			on:click={() => {
				r.close();
			}}>Close</Button
		>
	</div>
</Modal>

