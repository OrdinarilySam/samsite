<script lang="ts">
	// index of 0 -> bio, index of 1 -> resume
	import { aboutIndex } from '$lib/ts/stores';

	let currentIndex: number;

	function handleSwitch(selection: number) {
		aboutIndex.set(selection);
	}

	aboutIndex.subscribe((value) => {
		currentIndex = value;
	});
</script>

<svelte:head>
	<title>About - {currentIndex === 0 ? 'Bio' : 'Resume'}</title>
</svelte:head>

<nav>
	<button
		tabindex="0"
		class={currentIndex === 0 ? 'active' : 'inactive'}
		on:click={(_event) => handleSwitch(0)}
	>
		<div class="label bio">Bio</div>
		<div class="claws"></div>
	</button>
	<button
		tabindex="0"
		class={currentIndex === 1 ? 'active' : 'inactive'}
		on:click={(_event) => handleSwitch(1)}
	>
		<div class="label resume">Resume</div>
		<div class="claws"></div>
	</button>
</nav>

<style>
	* {
		box-sizing: border-box;
	}
	nav {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		height: 2em;
	}

	button {
		--border-size: 4px;
		width: 50%;
		background: rgba(240, 240, 255, 0.45);
		border: var(--border-size) outset rgba(0, 0, 0, 0.4);
		border-radius: 10px 10px 0 0;
		cursor: pointer;
		position: relative;
	}

	div {
		width: 90%;
	}

	.label {
		font-size: 1.5em;
		margin: 0 auto;
		width: 75%;
		color: rgba(0, 0, 0, 0.7);
		border-radius: 2px;
	}

	.bio {
		background: rgba(110, 200, 247, 0.7);
	}

	.resume {
		background: rgba(181, 247, 110, 0.7);
	}

	.active > .claws {
		box-sizing: border-box;
		position: absolute;
		bottom: calc(-1em - var(--border-size));
		left: 0;
		width: 100%;
		height: 1em;
		border-top: dashed 6px rgba(0, 0, 0, 0.4);
	}

	.inactive {
		border: var(--border-size) outset rgba(0, 0, 0, 0.25);
		background: rgba(240, 240, 255, 0.25);
	}
</style>
