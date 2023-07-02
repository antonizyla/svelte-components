<script lang="ts">
	import Button from '../Button/Button.svelte';

	export let mainLinks: { href: string; label: string }[] = [];
	export let ctaLinks: { href: string; label: string; primary: boolean }[] = [];
	export let title: string;

	let open: boolean = false;

	function toggleNav() {
		open = !open;
	}
</script>

<nav class="text-text" class:bg-background={open} class:h-screen={open}>
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex space-x-7">
				<div>
					<!-- Website Logo -->
					<a href="/" class="flex items-center py-4 px-2">
						<h2>{title}</h2>
					</a>
				</div>
			</div>
			<!-- Primary Navbar items -->
			<div class="hidden md:flex items-center space-x-1">
				{#each mainLinks as item}
					<a href={item.href} class="py-4 px-2 font-semibold">{item.label}</a>
				{/each}
			</div>
			<!-- Secondary Navbar items (cta etc..)) -->
			<div class="hidden md:flex items-center space-x-3">
				{#each ctaLinks as ctaItem}
					<Button primary={ctaItem.primary} size="small" label={ctaItem.label} />
				{/each}
			</div>
			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center">
				<button on:click={toggleNav} class="outline-none mobile-menu-button"> Toggle</button>
			</div>
		</div>
	</div>
	<!-- mobile menu -->
	<div class:hidden={!open} class="absolute top-[50%] px-4">
		<ul class="">
			{#each mainLinks as item}
				<li>
					<div class="block p-2">
						<a href={item.href}>{item.label}</a>
					</div>
				</li>
			{/each}
			{#each ctaLinks as ctaItem}
				<li>
					<div class="block py-2">
						<Button primary={ctaItem.primary} size="small" label={ctaItem.label} />
					</div>
				</li>
			{/each}
		</ul>
	</div>
</nav>
