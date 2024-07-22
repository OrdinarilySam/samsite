<script lang="ts">
	import Headshot from '$lib/images/Headshot.jpeg';
	import Typewriter from './Typewriter.svelte';
	let polaroid: HTMLDivElement;
	const baseRotation = 10;
	let rotateLeft = true;
	function rotatePolaroid(event: Event) {
    if (event instanceof KeyboardEvent && event.code !== "Space") {
      return;
    }
		let rotation = rotateLeft ? 360 + baseRotation : baseRotation;
		polaroid.style.transform = `rotate(${rotation}deg)`;
		rotateLeft = !rotateLeft;
	}
</script>

<div class="container">
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
	<div class="socials">
    
  </div>
	<div class="text">
		<h1>Sam Martin</h1>
    <Typewriter>
      <li>Programmer</li>
      <li>Photographer</li>
      <li>Hiker</li>
    </Typewriter>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in molestiae, quam aliquid laborum rerum consequatur quod, cum, culpa sapiente doloribus. Nulla quod nihil iure fuga culpa molestias labore totam.
      Consectetur, officia! Saepe cupiditate hic, consectetur nulla facere dolor ipsa deserunt tempore illo quibusdam, ab quia, in culpa nam cumque est nobis nisi vero reiciendis explicabo voluptates omnis. Repellat, facilis.
      Sunt maiores nisi odit reiciendis nam. Reiciendis fugit quos officiis blanditiis beatae maiores velit architecto, alias recusandae. Dolorum mollitia ab inventore numquam illo maiores, aliquid architecto, illum eveniet impedit doloribus!
      Qui quasi possimus similique hic reprehenderit accusamus cupiditate voluptatibus in! Accusamus at excepturi qui explicabo pariatur numquam repellat corporis dolorem libero expedita! Unde esse tenetur vel sapiente provident autem consequatur!
      Commodi laudantium, sit quas dolorum dolor harum magnam cupiditate enim ad tenetur cumque necessitatibus rem hic provident similique ullam corporis quis ducimus, blanditiis illo molestiae maxime ex. Tenetur, veritatis ex!
    </p>
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
		font-size: 3rem;
    font-weight: boldest;
    margin-bottom: 0;
	}

	.socials {
		grid-area: socials;
	}
</style>
