<script lang="ts">
    import Button from "../../../svelte-components/components/Button/Button.svelte";
</script>

<div class="p-8 w-fit mx-auto flex-row gap-4 flex flex-wrap ">
    <div>
        <Button size="small" >Small Button</Button>
    </div>
    <div>
        <Button size="medium">Regular Button</Button>
    </div>
    <div>
        <Button size="large">Large Button</Button>
    </div>
    <div>
        <Button primary={true} >Primary</Button>
    </div>
    <div>
        <Button primary={false}>Secondary</Button>
    </div>
</div>

<div class="text-xl text-center"> Button takes on the primary and secondary colours as defined in the tailwind config file </div>
