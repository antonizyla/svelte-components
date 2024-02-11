<script lang="ts">
    export let name: string = "Upload File";
    export let label: string = "Upload your File.";
    export let multiple: boolean = false;
    export let required: boolean = false;
    export let files: File | FileList;
</script>

<label for={name}>{label}</label>
<input
    class="w-full rounded-md border border-red-50 p-4"
    type="file"
    {name}
    {multiple}
    {required}
    bind:value={files}
/>

<style lang="postcss">
    input[type="file"]::file-selector-button {
        @apply mr-10 inline-block scale-105 cursor-pointer rounded-md border-2 border-secondary bg-secondary px-6 py-3 shadow-2xl shadow-secondary transition duration-200 ease-in;
    }
</style>
