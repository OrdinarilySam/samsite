<script>
  import Icon from '@iconify/svelte'

</script>


<nav>
  <a href="/">
    <Icon icon="mdi:home" width="50px" height="50px" />
  </a>
  <a href="/about">
    <Icon icon="mdi:account" width="50px" height="50px" />
  </a>
  <a href="/code">
    <Icon icon="mdi:code" width="50px" height="50px" />
  </a>
  <a href="/photo">
    <Icon icon="mdi:camera" width="50px" height="50px" />
  </a>

</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-1);
    justify-content: space-around;
    padding: 1em;
    border-right: 2px solid black;
  }

  a {
    text-decoration: none;
    color: black;
  }
  
</style>
