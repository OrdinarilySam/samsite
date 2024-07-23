<script lang="ts">
	import Headshot from '$lib/images/Headshot.jpeg';
	import Typewriter from './Typewriter.svelte';
  import Socials from './Socials.svelte'
	let polaroid: HTMLDivElement;
	const baseRotation = 10;
	let rotateLeft = true;
	function rotatePolaroid(event: Event) {
		if (event instanceof KeyboardEvent && event.code !== 'Space') {
			return;
		}
		let rotation = rotateLeft ? 360 + baseRotation : baseRotation;
		polaroid.style.transform = `rotate(${rotation}deg)`;
		rotateLeft = !rotateLeft;
	}
</script>

<div class="container">
	<div class="text">
		<h1>Sam Martin</h1>
		<Typewriter>
			<li>Developer</li>
			<li>Photographer</li>
			<li>Hiker</li>
		</Typewriter>
    <em>
      (Click the text to pause the typing animation)
    </em>
		<p>
      I'm currently going into my senior year at the University of Minnesota for a Bachelor's of Science in Computer Science.
      I've learned a lot there in all topics of Computer Science, but more of a focus in computer security.
      A couple of my favorite topics from the degree, aside from computer security, are networking, graphics, and front-end design.
    </p>
    <p>
      I have experience doing full-stack development at a supply chain management company called SPS Commerce.
      I have learned many things about production level development from there, including some developer operations
      and continuous integration/continuous delivery.
    </p>
    <p>
      While I have experience in many languages and frameworks, you'll mostly find me working with Python and Typescript.
      I've recently learned Go, and have really enjoyed the syntax and straight forward approach to most things.
      For front-end development, I've fallen in love with Svelte, though I have experience with React as well.
    </p>
    <p>
      I've worked on a number of projects (<a href="/code">more information here</a>), but the one I'd like to highlight
      is an implementation of the AES encryption algorithm written in Rust.
      This was done entirely from the official NIST document outlining how the algorithm works
      and was my first project in Rust.
      It was very rewarding watching the encryption and decryption actually work for the first time
      and I plan to expand upon this project in the near future.
    </p>
    <p>
      When I'm not programming, I can be found hanging out with friends, taking pictures, going on hikes, and playing videogames.
      I'm also an avid scuba diver, and love the water in general. 
      As far as photography goes, I love taking pictures of wildlife, landscapes, and the night sky.
    </p>
	</div>

	<div class="socials">
    <Socials />
  </div>

	<div class="image">
		<div
			class="headshot-container"
			bind:this={polaroid}
			on:click={rotatePolaroid}
			role="button"
			aria-label="press space to spin the headshot"
			tabindex="0"
			on:keydown={rotatePolaroid}
		>
			<img class="headshot" src={Headshot} alt="sam's headshot" />
		</div>
		<img
			class="pin"
			src="http://www.clker.com/cliparts/B/V/P/X/Z/e/thumbtack-pushpin-2-th.png"
			alt="Thumbtack/pushpin 2 clip art"
		/>
	</div>
</div>

<style>
	.pin {
		position: absolute;
		height: 50px;
		width: 50px;
		top: 2rem;
		right: 8rem;
	}

	.image {
		position: relative;
		grid-area: picture;
	}

	.headshot-container {
		position: absolute;
		top: 1.5rem;
		right: 3rem;
		transform: rotate(10deg);
		width: 240px;
		height: 276px;
		border: 1px solid black;
		background: white;
		padding: 13px;
		transition: transform 0.75s ease-in-out;
	}

	.headshot {
		border: 1px inset black;
		width: 100%;
	}

	.container {
		grid-template-areas: 'text picture' 'text socials';
		grid-template-columns: 3fr 2fr;
		grid-template-rows: 2fr 1fr;
		display: grid;
		height: 100%;
		width: 100%;
	}

	.text {
		grid-area: text;
		padding: 0.75rem;
	}

	.text > h1 {
		font-size: 4rem;
		font-weight: boldest;
		margin-bottom: 0;
		margin-top: 0.5rem;
	}

	.socials {
		grid-area: socials;
	}

  em {
    color: var(--color-text-hint);
    font-size: 0.8rem;
  }
</style>
