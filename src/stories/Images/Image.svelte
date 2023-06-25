<script lang="ts">
	// Usage Information
	// --------------------------------------------------------------
	// import image from "path?directives&picture";
	// <Image data={image} {alt} {title} {description}  {round} />

	import type { Picture } from 'vite-imagetools';

	export let data: Picture;
	export let alt: string = '';

	// picture frame stuff
	export let title: string = '';
	export let description: string = '';
	export let pad: boolean = true;
</script>

<div class="text-center" class:p-4={pad}>
	<div class="p-2.5">{title}</div>
	<div class="">
		<picture class="w-fit">
			{#each Object.entries(data.sources) as [format, images]}
				<source
					srcset={images.map((img) => `${img.src} ${img.w}w`).join(', ')}
					type="image/{format}"
				/>
			{/each}
			<img class:rounded-md={pad} {alt} src={data.fallback.src} />
		</picture>
	</div>
	<div class="p-2 text-gray-800 text-md">{description}</div>
</div>
