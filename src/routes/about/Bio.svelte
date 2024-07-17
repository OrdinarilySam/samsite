<script lang="ts">
	import Headshot from '$lib/images/Headshot.jpeg';
	import { preprocess } from 'svelte/compiler';
</script>

<div class="container">
	<div class="image">
    <div class="headshot-container">
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
    <h1>
      Sam Martin
    </h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci maxime inventore neque quis
      quaerat ex autem natus non sunt? Provident, cupiditate explicabo totam velit necessitatibus quos
      repellendus autem perspiciatis! Temporibus. Neque dignissimos illum aperiam nam libero impedit
      temporibus deserunt? Dolores corrupti voluptatibus eveniet velit id nulla, consequuntur adipisci
      dolore quaerat rerum nostrum tenetur sed maiores voluptatum placeat provident, praesentium aut!
      Reiciendis explicabo provident impedit necessitatibus ipsum odio? Repellat voluptas nihil enim
      dolore adipisci libero dolorem iure suscipit. Pariatur ea enim ipsa! Eligendi accusantium
      pariatur, placeat ea ipsum repellendus cum laboriosam. Recusandae a fugiat minima labore
      veritatis, sit eum veniam ut voluptatibus quia corrupti ipsum earum exercitationem praesentium
      modi ipsa ratione. Neque et alias nisi corrupti eos provident qui fugiat velit. In corporis
      aspernatur possimus perferendis iure dolorum! Debitis vitae eligendi cumque. Deleniti doloremque
      aspernatur debitis magnam alias soluta animi, quisquam culpa voluptatem assumenda, iusto id nisi
      maxime illum corrupti rerum.
    </p>
  </div>
</div>

<style>
	.pin {
		position: absolute;
		height: 40px;
		width: 40px;
		top: 2rem;
		right: 7.5rem;
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
		width: 200px;
		height: 230px;
		border: 1px solid black;
		background: white;
		padding: 13px;
  }

	.headshot {
		border: 1px inset black;
		width: 100%;
	}

  .container {
    grid-template-areas: "text picture" "text socials";
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 1fr;
    display: grid;
    height: 100%;
    width: 100%;
  }

  .text {
    grid-area: text;
    padding: 0.75rem;
  }

  .text > h1 {
    font-size: 2rem;
  }

  .socials {
    grid-area: socials;
  }
</style>
