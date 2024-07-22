<script lang="ts">
	import { onMount } from 'svelte';
	let parent: HTMLElement;
	let list: HTMLCollection;
	let wordIndex = 0;
	let charIndex = 0;
	export let timeout = 2000;
	export let speed = 75;
	let pauseTimer = timeout;
	let textElement: HTMLElement;
	let paused = false;

	let curText = '';

	function startTyping() {
		if (paused) return;

		let fulltext = list[wordIndex].textContent;
		if (!fulltext) {
			return '';
		}

		let lettersShown = fulltext.length - Math.abs(charIndex - fulltext.length);

		if (lettersShown < 0) {
			wordIndex = (wordIndex + 1) % list.length;
			charIndex = 1;
			changeWord();
			return;
		}

		if (lettersShown === fulltext.length && pauseTimer > 0) {
			pauseTimer -= speed;
		} else {
			charIndex++;
			pauseTimer = timeout;
		}

		curText = fulltext.substring(0, lettersShown);
	}

	function changeWord() {
		for (let c of list[(wordIndex + list.length - 1) % list.length].classList) {
			if (c.startsWith('s-')) continue;
			textElement.classList.remove(c);
		}
		for (let c of list[wordIndex].classList) {
			if (c.startsWith('s-')) continue;
			textElement.classList.add(c);
		}
	}

	onMount(() => {
		list = parent.children;
		changeWord();
		const typingInterval = setInterval(startTyping, speed);

		return () => {
			clearInterval(typingInterval);
		};
	});

	function pausePlay(event: Event) {
		if (event instanceof KeyboardEvent && event.code !== 'Space') {
			return;
		}
		paused = !paused;
	}
</script>

<div class="invisible" aria-hidden="true" bind:this={parent}>
	<slot />
</div>

<h2
	class="text"
	bind:this={textElement}
	on:click={pausePlay}
	on:keydown={pausePlay}
	tabindex="0"
	aria-label="Press space to pause and play typing effect"
>
	{curText}
</h2>

<style>
	.text {
		font-size: 1.5em;
		height: 1.5em;
		margin-bottom: 0;
		margin-top: 0;
		cursor: pointer;
	}

	.invisible {
		display: none;
	}
</style>
