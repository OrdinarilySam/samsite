<script lang="ts">
  import { page } from '$app/stores'

  let pages = ['/', '/about', '/code', '/photos']
  $: currentIndex = pages.indexOf($page.url.pathname)

</script>


<nav>
  <a href="/" class="{currentIndex === 0 ? 'active' : currentIndex < 0 ? 'left' : 'right'}">
    Home
  </a>
  <a href="/about" class="{currentIndex === 1 ? 'active' : currentIndex < 1 ? 'left' : 'right'}">
    About
  </a>
  <a href="/code" class="{currentIndex === 2 ? 'active' : currentIndex < 2 ? 'left' : 'right'}">
    Code
  </a>
  <a href="/photos" class="{currentIndex === 3 ? 'active' : currentIndex < 3 ? 'left' : 'right'}">
    Photos
  </a>

</nav>

<style>

  * {
    box-sizing: border-box;
  }

  nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    padding: 0.5rem;
    padding-bottom: 0;
    position: relative; 
  }

  a {
    text-decoration: none;
    color: black;
    padding: 0.7rem;
    border: 1px solid black;
    width: 100%;
    height: 100%;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    background-color: var(--color-manila);
    font-family: var(--font-nav);
    font-size: 2rem;
    position: relative;
    line-height: 1em;
    color: rgba(0.1, 0.1, 0.1, 0.7);
  }

  .active {
    box-shadow: none;
    border-bottom: none;
  }

  .left {
    box-shadow: 
      inset 0.5rem -0.1rem 5px 0px rgba(0, 0, 0, 0.1),
      inset 0 -0.2rem 5px 0px rgba(0, 0, 0, 0.1);
  }

  .right {
    box-shadow: 
      inset -0.5rem -0.1rem 5px 0px rgba(0, 0, 0, 0.1),
      inset 0 -0.2rem 5px 0px rgba(0, 0, 0, 0.1);
  }

</style>
