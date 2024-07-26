<script lang="ts">
  import { getResume } from "$lib/ts/readResume"
	import { onMount } from "svelte";
  let resume = {};

  onMount(async () => {
    resume = await getResume()
  })

</script>

{#each Object.keys(resume) as key }
  <h1>{key}</h1>
{/each}
