<script lang="ts">
	export let title: string;
	export let content: string;
	export let open = false;

	function toggle_closed(): void {
		open = !open;
	}

	// make it look nice
	import chevron_down from './chevron-down.svg';
	import chevron_up from './chevron-up.svg';
	import { fade } from 'svelte/transition';
</script>

<div class="">
	<button
		on:click={() => toggle_closed()}
		class={['p-4 w-full flex flex-row justify-between'].join(' ')}
	>
		<div class="">{title}</div>
		<div class="h-[32px] w-[32px] text-gray-800">
			{#if open}
				<div in:fade={{ duration: 500 }}>
					<img src={chevron_up} alt="Open" />
				</div>
			{:else}
				<div in:fade={{ duration: 500 }}>
					<img src={chevron_down} alt="Close" />
				</div>
			{/if}
		</div>
	</button>
	{#if open}
		<div class="pb-6 px-6">{content}</div>
	{/if}
</div>
