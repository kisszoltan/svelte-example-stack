<script lang="ts">
	import { onMount } from 'svelte';

	export let data;

	let userResponse: object;
	onMount(() => {
		fetch('/api/iam/user').then(async (res) => {
			userResponse = await res.json();
		});
	});
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="bg-gray-400 rounded-lg p-2 w-fit my-2">Page Data: {JSON.stringify(data)}</div>
<div class="bg-gray-400 rounded-lg p-2 w-fit">
	/api/iam/user API call result: {JSON.stringify(userResponse)}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.300);
	}
</style>
