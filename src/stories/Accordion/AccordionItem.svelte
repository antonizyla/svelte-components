<script lang="ts">
	export let title: string;
	export let content: string;
	export let open = false;

	function toggle_closed(): void {
		open = !open;
	}

	// make it look nice
	import Chevron_down from './chevron-down.svelte';
	import Chevron_up from './chevron-up.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="">
	<button
		on:click={() => toggle_closed()}
		class={['p-4 w-full flex flex-row justify-between'].join(' ')}
	>
		<div class="">{title}</div>
		<div class="h-[32px] w-[32px]">
			{#if open}
				<div class="" in:fade={{ duration: 500 }}>
					<Chevron_up />
				</div>
			{:else}
				<div in:fade={{ duration: 500 }}>
					<Chevron_down />
				</div>
			{/if}
		</div>
	</button>
	{#if open}
		<div class="pb-6 px-6">{content}</div>
	{/if}
</div>
