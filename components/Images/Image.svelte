<script lang="ts">
	// Usage Information
	// --------------------------------------------------------------
	// import image from "path?directives&as=picture";
	// <Image data={image} {alt} {title} {description}  {round} />

	import type { Picture } from 'vite-imagetools';

	export let src: Picture;
    export let alt: string = '';

	export let loading: 'lazy' | 'eager' = 'lazy';

	// picture frame stuff
	export let title: string = '';
	export let description: string = '';
	export let pad: boolean = true;
	export let round: boolean = false;

    export let classes: string = '';
</script>

<div class="text-center" class:p-4={pad}>
	<div class="p-2.5">{title}</div>
	<div class="">
		<picture class={`w-fit ${classes}`}>
			{#each Object.entries(src.sources) as [format, images]}
			  <source srcset={images} type={'image/' + format} />	
			{/each}
			<img
				class:rounded-md={pad}
				class:rounded-full={!pad && round}
				{loading}
				{alt}
				src={src.img.src}
				width={src.img.w}
				height={src.img.h}
			/>
		</picture>
	</div>
	<div class="text-text-800 text-md p-2">{description}</div>
</div>
