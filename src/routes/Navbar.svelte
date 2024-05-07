<script>
  import Icon from '@iconify/svelte'

</script>


<nav>
  <a href="/">
    <Icon icon="mdi:home" width="100%" height="100%" />
  </a>
  <a href="/about">
    <Icon icon="mdi:account" width="100%" height="100%" />
  </a>
  <a href="/code">
    <Icon icon="mdi:code" width="100%" height="100%" />
  </a>
  <a href="/photo">
    <Icon icon="mdi:camera" width="100%" height="100%" />
  </a>

</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-1);
    justify-content: space-around;
    padding: 1.5em;
    border-right: 2px solid black;
    width: 11%;
  }

  a {
    text-decoration: none;
    color: black;
    /* padding: 1.5em; */
    margin: 1.5em;
  }
  
</style>
