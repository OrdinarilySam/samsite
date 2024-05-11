<script lang="ts">
	import Icon from '@iconify/svelte';
	import Postit from './Postit.svelte';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	const fullPos = 0.35;
	const halfPos = 0.3;
	const blinkInterval = 375;
	const blinkTransition = 0.15;

  const leftRot = 7;
  const rightRot = -4;

	let aboutDiv: HTMLElement;

	let timeout: number = NaN;
	let isVisible: boolean;
	let isRunning: boolean = false;

	let cursor = spring(
		{ x: 0, y: 0, rot: 0 },
		{
			stiffness: 0.07,
			damping: 0.45
		}
	);

	function moveCursor(x: number, y: number, rot: number) {
		if (timeout) clearTimeout(timeout);
		cursor.set({ x: x, y: y, rot: rot});
		isVisible = true;
		isRunning = false;
		timeout = setTimeout(() => {
			isRunning = true;
			timeout = NaN;
		}, 500);
	}

	function handleEnter(event: MouseEvent, fromLeft: number, rotation: number) {
		if (event == null || event.target == null) return;
		const target = event.target as HTMLElement;
		calculatePosition(target, fromLeft, rotation);
	}

	function calculatePosition(target: HTMLElement, fromLeft: number, rotation: number) {
		const width = target.offsetWidth;
		const height = target.offsetHeight;
		const x = target.offsetLeft + width * fromLeft;
		const y = target.offsetTop + height / 2;
		moveCursor(x, y, rotation);
	}

	onMount(() => {
		calculatePosition(aboutDiv, fullPos, 0);
		isRunning = false;
	});

	setInterval(() => {
		isVisible = isRunning ? !isVisible : isVisible;
	}, blinkInterval);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="samsite" content="Svelte demo app" />
</svelte:head>

<section>
	<a
		class="about-container"
		bind:this={aboutDiv}
		on:mouseenter={(event) => handleEnter(event, fullPos, 0)}
		href="/about"
	>
		<p>Hi,</p>
		<p>'m Sam</p>
	</a>

	<div class="code-container">
		<a href="/code" on:mouseenter={(event) => handleEnter(event, halfPos, leftRot)}>
			<Postit rotation="{leftRot}deg">
				<p>Write Code</p>
			</Postit>
		</a>
	</div>

	<div class="photos-container">
		<a on:mouseenter={(event) => handleEnter(event, halfPos, rightRot)} href="/photos">
			<Postit rotation="{rightRot}deg">
				<p>Take Photos</p>
			</Postit>
		</a>
	</div>
	<Icon
		icon="mdi:cursor-text"
		width="4em"
		height="4em"
		style="
      position: absolute; 
      pointer-events: none; 
      top: {$cursor.y - 128}px; 
      left: {$cursor.x - 128}px;
      transform: rotate({$cursor.rot}deg);
      opacity: {isVisible ? '1' : '0'};
      transition: opacity {blinkTransition}s;"
	/>
</section>

<style>
	section {
		display: grid;
		gap: 1rem;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr;
		height: 100%;
		width: 100%;
		font-size: 4rem;
    justify-items: center;
	}

	a {
		text-align: center;
		height: 100%;
		position: relative;
		text-decoration: none;
		color: black;
	}

	p {
		margin: 0;
		position: absolute;
		right: 0;
		align-self: center;
		width: 50%;
	}

	.about-container {
		grid-column: 1 / -1;
	}

	.code-container {
		grid-column: 1 / 2;
    margin: 0;
	}

	.photos-container {
		grid-column: 2 / 3;
    margin: 0;
	}
</style>
