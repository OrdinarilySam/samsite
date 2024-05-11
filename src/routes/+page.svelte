<script lang="ts">
	import Icon from '@iconify/svelte';
	import Postit from './Postit.svelte';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	const fullPos = 0.50;
	const halfPos = 0.50;
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
		cursor.set({ x: x, y: y, rot: rot });
		isVisible = true;
		isRunning = false;
		timeout = setTimeout(() => {
			isRunning = true;
			timeout = NaN;
		}, 500);
	}

  function calculateHalfPos(event: MouseEvent, rotation: number) {
    if (event == null || event.target == null) return; 
    const target = event.target as HTMLElement;
    const width = target.offsetWidth;
		const height = target.offsetHeight;
		const x = target.offsetLeft - width * halfPos * 0.5;
		const y = target.offsetTop + height / 2;
    moveCursor(x, y, rotation)
  }

  function calculateFullPos(event: MouseEvent, rotation: number) {
    if (event == null || event.target == null) return; 
    const target = event.target as HTMLElement;
    const width = target.offsetWidth;
		const height = target.offsetHeight;
		const x = target.offsetLeft + width * fullPos;
		const y = target.offsetTop + height / 2;
    moveCursor(x, y, rotation)
  }

	onMount(() => {
    const width = aboutDiv.offsetWidth;
		const height = aboutDiv.offsetHeight;
		const x = aboutDiv.offsetLeft + width * fullPos;
		const y = aboutDiv.offsetTop + height / 2;
    moveCursor(x, y, 0)
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

<section >
	<div class="about-container" >
		<a
      class="about-anchor"
			bind:this={aboutDiv}
			on:mouseenter={(event) => calculateFullPos(event, 0)}
			href="/about"
		>
      <Postit rotation="0deg">
        <p>Hi,</p>
      </Postit>
      <Postit rotation="-5deg">
        <p>'m Sam</p>
      </Postit>
		</a>
	</div>

	<div class="code-container">
		<a href="/code" on:mouseenter={(event) => calculateHalfPos(event, leftRot)}>
			<Postit rotation="{leftRot}deg">
				<p>Write Code</p>
			</Postit>
		</a>
	</div>

	<div class="photos-container">
		<a on:mouseenter={(event) => calculateHalfPos(event, rightRot)} href="/photos">
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
    text-align: center;
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
		width: 60%;
    font-size: 5rem;
	}

  .about-container p {
    font-size: 7rem;
    left: 0.5rem;
    width: 100%;
  }

  .about-anchor {
    display: flex;
    flex-direction: row;
    justify-content: center;

  }

	.about-container {
		grid-column: 1 / -1;
    width: 100%;
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
