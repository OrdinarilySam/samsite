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
  <section class="container">
    <div class="left">
      <p>{resume.About.location}</p>
      <p>{resume.About.phone}</p>
    </div>
    <h1 class="name">{resume.About.name}</h1>
    <div class="right">
      <p>{resume.About.email}</p>
      <p>{resume.About.website}</p>
    </div>
  </section>
  <section>
    <h2 class="left title">Education</h2>
    <hr />
    {#each resume.Education as edu}
      <div class="container">
        <p class="left">{edu.location}</p>
        <h3 class="center">{edu.school}</h3>
        <p class="right">{edu['start-date']} - {edu['end-date']}</p>
      </div>
      <p class="left">{edu.degree}</p>
      <p class="left"><em>Cumulative GPA: </em>{edu.gpa}</p>
      <p class="left"><em>Honors: </em>{edu.honors}</p>
    {/each}
  </section>
{/if}

<style>

  * {
    font-family: 'Times New Roman', Times, serif;
  }

  h1 {
    text-align: center;
  }

  .container {
    display: grid;
    grid: 1fr / 1fr 1fr 1fr;
  }

  .name {
    text-transform: uppercase;
    font-size: 2rem;
  }

  .title {
    text-transform: uppercase;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }

  .center {
    text-align: center;
  }

  .left,
  .center,
  .right {
    margin: 0.25rem 0;
  }

  em {
    font-style: normal;
    font-weight: bold;
  }
</style>
