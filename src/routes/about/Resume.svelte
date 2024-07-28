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
  <div class="container">
    <div class="left">
      <p>{resume.About.location}</p>
      <p>{resume.About.phone}</p>
    </div>
    <h1>{resume.About.name}</h1>
    <div class="right">
      <p>{resume.About.email}</p>
      <p>{resume.About.website}</p>
    </div>
  </div>
{/if}

<style>
  h1 {
    text-align: center;
  }

  .container {
    display: grid;
    grid: 1fr / 1fr 1fr 1fr;
  }

  .container p {
    margin: 0.5rem;
  }

  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }
</style>
