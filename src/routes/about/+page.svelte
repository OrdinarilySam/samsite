<script lang="ts">
	import SubNav from './SubNav.svelte';
	import Bio from './Bio.svelte';
	import Resume from './Resume.svelte';
	import { aboutIndex } from '$lib/ts/stores';

	let currentIndex: number;

	aboutIndex.subscribe((value) => {
		currentIndex = value;
	});
</script>

<SubNav />
<section class={currentIndex ? "" : "lined-paper"}>
	{#if currentIndex === 0}
		<Bio />
	{:else if currentIndex === 1}
		<Resume />
	{/if}
</section>

<style>
	section {
		background: rgba(255, 255, 255, 0.95);
		background: var(--color-paper);

		padding: 1em;
		min-height: 75vh;
		height: 100%;
		margin-bottom: 1em;
		box-shadow: 3px 3px 4em 3px rgba(0, 0, 0, 0.1);
	}

	.lined-paper {
		background: linear-gradient(to bottom, var(--color-paper) 95%, #b3b3d3aa 100%);
		background-size: 100% 2rem;
	}
</style>
