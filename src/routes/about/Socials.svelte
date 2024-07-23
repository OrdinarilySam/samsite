<script lang="ts">
	import Icon from '@iconify/svelte';
	const size = '5rem';
	const links = [
		{
			link: 'https://github.com/OrdinarilySam',
			icon: 'mdi:github'
		},
		{
			link: 'mailto:ordinarilysam@gmail.com',
			icon: 'mdi:email'
		},
		{
			link: 'https://linkedin.com/in/samuel-d-martin',
			icon: 'mdi:linkedin'
		}
	];
</script>

<div class="container">
	<h3>Find Me</h3>
	<div>
		{#each links as link}
			<a href={link.link} target="_blank"><Icon icon={link.icon} height={size} width={size} /></a>
		{/each}
	</div>
</div>

<style>
  h3 {
    font-size: 2rem;
    margin-bottom: 0rem;
  }
  
	div {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

  a {
    text-decoration: none;
    color: var(--color-text);
  }

  .container {
    flex-direction: column;
  }
</style>
