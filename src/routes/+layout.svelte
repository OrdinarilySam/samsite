<script>
	import Navbar from './Navbar.svelte';
	import './styles.css';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Shadows+Into+Light&display=swap" rel="stylesheet">
</svelte:head>

<div class="app">
	<Navbar />

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
    z-index: 1;

	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
    background: var(--color-manila);
    background-image: linear-gradient(var(--color-manila), var(--color-manila-saturated));
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
	}
</style>
