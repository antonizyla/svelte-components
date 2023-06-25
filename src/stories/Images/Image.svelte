<script lang="ts">
	export let src: string = '';
	export let alt: string = '';
	export let title: string = '';
	export let description: string = '';
</script>

<div class="">
	<div class="">{title}</div>
	<img {src} {alt} />
	<div class="">{description}</div>
</div>
