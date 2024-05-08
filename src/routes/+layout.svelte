<script>
	import Navbar from './Navbar.svelte';
	import './styles.css';
</script>

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
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
	}
</style>
