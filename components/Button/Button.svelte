<script lang="ts">
	export let primary: boolean = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let label: string = '';
	export let classes: string = '';

	$: mode = primary ? 'primary' : 'secondary';
</script>

<button type="button" class={['button', size, mode, classes].join(' ')} on:click> <slot /></button>

<style lang="postcss">
	.button {
		@apply inline-block cursor-pointer rounded-md font-sans font-medium text-text;
	}
	.primary {
		@apply bg-primary transition text-white ease-out;
	}
	.secondary {
		@apply bg-secondary ease-out;
	}
	.medium {
		@apply px-6 py-3;
	}
	.small {
		@apply px-4 py-2 text-sm;
	}
	.large {
		@apply px-8 py-4;
	}
	.button.primary:hover {
		@apply scale-105 shadow-2xl shadow-primary/90 transition duration-200 ease-in;
	}
	.button.secondary:hover {
		@apply scale-105 shadow-xl shadow-secondary/60 transition duration-200 ease-in;
	}
</style>
