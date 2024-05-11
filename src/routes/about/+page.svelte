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

