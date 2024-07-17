<script lang="ts">
  import SubNav from "./SubNav.svelte";
  import Bio from "./Bio.svelte"
  import Resume from "./Resume.svelte";
  import { aboutIndex } from "$lib/ts/stores";

  let currentIndex: number;

  aboutIndex.subscribe((value) => {
    currentIndex = value
  })
</script>

<SubNav />
<section>
  
  {#if currentIndex === 0}
    <Bio />
  {:else if currentIndex === 1}
    <Resume />
  {/if}


</section>

<style>
  section {
    background: rgba(255, 255, 255, 0.95);
    padding: 1em;
    min-height: 75vh;
    height: 100%;
    margin-bottom: 1em;
  }
</style>
