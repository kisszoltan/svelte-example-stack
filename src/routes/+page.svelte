<script lang="ts">
	export let data;
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="bg-gray-300 rounded-lg p-4">Page Data: {JSON.stringify(data)}</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.300);
	}
</style>
