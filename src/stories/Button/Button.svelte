<script lang="ts">
	import '../../app.css';

	export let primary = false;
	export let backgroundColor: string | undefined = undefined;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let label: string = '';

	$: mode = primary ? 'primary' : 'secondary';

	$: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<button type="button" class={['button', size, mode].join(' ')} {style} on:click>
	{label}
</button>

<style lang="postcss">
	.button {
		@apply border-0 rounded-full inline-block cursor-pointer font-bold font-sans;
	}
	.primary {
		@apply text-white bg-blue-500;
	}
	.secondary {
		@apply bg-white border-2 border-blue-500;
	}
	.medium {
		@apply px-6 py-3;
	}
	.small {
		@apply px-4 py-2 font-medium text-sm;
	}
	.large {
		@apply px-8 py-3;
	}
	.button.primary:hover {
		@apply bg-blue-600;
	}
	.button.secondary:hover {
		@apply bg-blue-100;
	}
</style>
