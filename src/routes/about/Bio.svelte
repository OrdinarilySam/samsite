<script lang="ts">
	import Headshot from '$lib/images/Headshot.jpeg';
</script>

<div class="container">
	<div class="image">
		<img class="headshot" src={Headshot} alt="sam" />
		<img
			class="pin"
			src="http://www.clker.com/cliparts/B/V/P/X/Z/e/thumbtack-pushpin-2-th.png"
			alt="Thumbtack/pushpin 2 clip art"
		/>
	</div>
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

<style>
	.pin {
		position: absolute;
		height: 40px;
		width: 40px;
		top: 0.35em;
		left: 4.5em;
	}

	.image {
		position: absolute;
		top: 10rem;
		right: 5rem;
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
</style>
