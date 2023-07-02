<script lang="ts">
	import Image from '$lib/components/Images/Image.svelte';
	import sample from '$lib/components/Images/sampleImage.jpg?picture';
</script>

<Image data={sample} pad round alt="Hello" title="hello again" description="description" />
