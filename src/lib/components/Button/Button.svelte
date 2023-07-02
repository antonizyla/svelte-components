<script lang="ts">
	export let primary: boolean = false;
	export let rounded: boolean = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let label: string = '';

	$: mode = primary ? 'primary' : 'secondary';
</script>

<button
	type="button"
	class={['button', size, mode].join(' ')}
	class:rounded-full={rounded}
	class:rounded-md={!rounded}
	on:click
>
	{label}
</button>

<style lang="postcss">
	.button {
		@apply inline-block cursor-pointer font-medium font-sans text-text;
	}
	.primary {
		@apply bg-primary-button ease-out transition duration-200;
	}
	.secondary {
		@apply bg-secondary-button ease-out transition duration-200;
	}
	.medium {
		@apply px-6 py-3;
	}
	.small {
		@apply px-4 py-2 text-sm;
	}
	.large {
		@apply px-8 py-3;
	}
	.button.primary:hover {
		@apply scale-105 transition duration-200 shadow-2xl shadow-primary-button/90 ease-in;
	}
	.button.secondary:hover {
		@apply scale-105 transition duration-200 shadow-xl shadow-secondary-button/60 ease-in;
	}
</style>
