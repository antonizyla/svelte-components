<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown'; 
    export let snippet = '`markdown code`';

</script>

<div class="">
    <SvelteMarkdown source={snippet} />
</div>
