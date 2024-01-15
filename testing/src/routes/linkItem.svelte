<script lang="ts">
    export let name: string;
    export let link: string;
    export let description: string;
</script>

<li class="border border-solid p-2 my-2">
    <a href="{link}" class="text-blue-500 hover:text-blue-700">{name}</a>
    <div>{description}</div>
</li>
