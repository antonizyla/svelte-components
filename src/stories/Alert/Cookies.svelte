<script lang="ts">
	import Alert from './Alert.svelte';
	import Button from '../Button/Button.svelte';
	import { onMount } from 'svelte';

	// bind dialog to popup to control it
	let dialog: HTMLDialogElement;
	export let storybook: boolean = false;

	onMount(() => {
		const seenCookiePolicy = localStorage.getItem('seenCookiePolicy');
		// if user doesn't select no then allow cookies by default
		allowedCookies();
		if (!seenCookiePolicy) {
			localStorage.setItem('seenCookiePolicy', 'true');
			setTimeout(() => {
				dialog.showModal();
			}, 3000);
		}
	});

	function allowedCookies() {
		console.log('Cookies Have Been set to Allowed');
		dialog.close();
		localStorage.setItem('allowCookies', 'true');
	}

	function disallowedCookies() {
		console.log('Cookies Have Been set to Disallowed');
		dialog.close();
		localStorage.setItem('allowCookies', 'false');
	}
</script>

{#if storybook}
	<Button
		on:click={() => {
			dialog.showModal();
		}}
		label="Toggle Alert"
	/>
{/if}

<Alert bind:dialog>
	<div class=" flex flex-col gap-4 text-text p-4 max-w-md">
		<div class="text-2xl font-bold">Cookie Policy</div>
		<div class="pb-5">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore voluptas quasi atque ipsam,
			tempora necessitatibus possimus molestiae in quidem ipsum esse non reiciendis laudantium.
			Nostrum, deserunt quam. Repudiandae, unde beatae.
		</div>
		<Button primary on:click={allowedCookies} label="Allow Cookies" />
		<Button on:click={disallowedCookies} label="Don't Allow Cookies" />
	</div>
</Alert>
