<script lang="ts">
  import type { ResumeT } from "$lib/ts/readResume"
  import { getResume } from "$lib/ts/readResume"
	import { onMount } from "svelte";
  let resume: ResumeT = {} as ResumeT;

  onMount(async () => {
    resume = await getResume()
    console.log(resume)
  })

</script>

{#if Object.keys(resume).length > 0}
  <div>
    <h1>{resume.About.name}</h1>
  </div>
{/if}

<style>
  h1 {
    text-align: center;
  }
</style>
