<script lang="ts">
	import Button from '../Button/Button.svelte';

	export let buttonSize: 'small' | 'medium' | 'large' = 'small';
	export let buttonTypePrimary: boolean = false;

	export let label: string = 'ButtonLabel';
	let open: boolean = false;

	let openButtonWidth: number;
	$: console.log(openButtonWidth);
</script>

<div
	class=""
	on:mouseleave={() => {
		open = false;
	}}
	role="tooltip"
>
	<div
		class={` absolute flex flex-col border-secondary rounded-md drop-shadow-md shadow-secondary border border-solid origin-top-left p-2 pt-8 mt-3`}
		class:hidden={!open}
	>
		<slot />
	</div>
	<div bind:clientWidth={openButtonWidth}>
		<Button
			size={buttonSize}
			primary={buttonTypePrimary}
			on:click={() => {
				open = !open;
			}}
		>
			{label}
		</Button>
	</div>
</div>
