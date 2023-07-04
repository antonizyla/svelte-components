<script>
	export let data;
	export let alt = '';
	export let title = '';
	export let description = '';
	export let pad = true;
	export let round = false;
</script>

<div class="text-center" class:p-4={pad}>
	{#if title != ''}
		<div class="p-2.5">{title}</div>
	{/if}
	<div class="">
		<picture class="w-fit">
			{#each Object.entries(data.sources) as [format, images]}
				<source
					srcset={images.map((img) => `${img.src} ${img.w}w`).join(', ')}
					type="image/{format}"
				/>
			{/each}
			<img
				class:rounded-md={pad}
				class:rounded-full={!pad && round}
				{alt}
				src={data.fallback.src}
			/>
		</picture>
	</div>
	{#if description != ''}
		<div class="text-text-800 text-md p-2">{description}</div>
	{/if}
</div>
