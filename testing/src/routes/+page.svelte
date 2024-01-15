<script lang="ts">
    import LinkItem from "./linkItem.svelte";
</script>

<div class="p-12 flex flex-col gap-2 w-[90vw]">
	<h1 class="text-xl font-bold">Examples of each of the components</h1>
	<div class="grid grid-cols-2 gap-4 p-2">
		<div class="">
			<h2 class="text-lg p-2">Layouts</h2>
			<ul class="px-2">
                <LinkItem name="SplitCta" link="examples/layouts/splitCta" description="Responsive landings screen layout, desktop: split the screen into image and text+cta; mobile: overlay text over the image at reduced brightness"/>
                <LinkItem name="BigBackground" link="examples/layouts/bigBackground" description="Responsive landing page layout. desktop: text+cta overlayed on an image. mobile: identical to desktop layout."/>
			</ul>
		</div>
        <div class="">
            <h2 class="text-lg p-2">Components</h2>
            <ul class="px-2">
                <LinkItem name="Buttons" link="examples/buttons" description="Variety of Buttons and their combinations" />
                <LinkItem name="Author Card" link="examples/authorCard" description="Basic card to display at end of blog posts which has a little bit of info about author" />
                <LinkItem name="Markdown Snippet" link="examples/snippet" description="Example of a modal and it's implementation" />
                <LinkItem name="Modals" link="examples/modals" description="Example of a modal and it's implementation" />
                <LinkItem name="Form Items" link="examples/Forms" description="Example of each form  item and it's various states" />
            </ul>
        </div>
	</div>
</div>

