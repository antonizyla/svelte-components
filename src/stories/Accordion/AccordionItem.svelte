<script lang="ts">
	export let title: string;
	export let content: string;
	export let open = false;

	function toggle_closed(): void {
		open = !open;
	}
	//  import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte'
	//import IoIosArrowUp from 'svelte-icons/io/IoIosArrowUp.svelte'
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
				<div in:fade|global={{ duration: 500 }}>
					<!--               <IoIosArrowUp></IoIosArrowUp>
            -->
					close
				</div>
			{:else}
				<div in:fade|global={{ duration: 500 }}>
					<!--
               <IoIosArrowDown></IoIosArrowDown>
                --> open
				</div>
			{/if}
		</div>
	</button>
	{#if open}
		<div class="pb-6 px-6  ">{content}</div>
	{/if}
</div>
