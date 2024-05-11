<script lang="ts">
  // index of 0 -> bio, index of 1 -> resume
  import { aboutIndex } from "$lib/ts/stores";

  let currentIndex: number;
  
  function handleSwitch(selection: number) {
    aboutIndex.set(selection)
  }

  aboutIndex.subscribe((value) => {
    currentIndex = value;
  })

</script>


<nav>
  <button class="{currentIndex === 0 ? 'active' : currentIndex < 0 ? 'left' : 'right'}" on:click="{(_event) => handleSwitch(0)}">
    Bio
  </button>
  <button class="{currentIndex === 1 ? 'active' : currentIndex < 1 ? 'left' : 'right'}" on:click="{(_event) => handleSwitch(1)}">
    Resume
  </button>
</nav>


<style>

  * {
    box-sizing: border-box;
  }

  nav {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    text-align: center;
    position: relative; 
  }

  button {
    cursor: pointer;
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
