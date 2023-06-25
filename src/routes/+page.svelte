<script lang="ts">
	import Image from '../stories/Images/Image.svelte';

	import img1 from '$images/sampleImage.jpg?format=avif;webp&w=400;1200&picture';
</script>

<!-- 
<Image src={img1} alt="hello" />
<-->
<div class="w-5/12">
	<Image data={img1} title="hello there" description="hello again" alt="hello" />
</div>
