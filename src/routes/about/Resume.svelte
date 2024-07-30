<script lang="ts">
	import type { ResumeT } from '$lib/ts/readResume';
	import { getResume } from '$lib/ts/readResume';
	import { onMount } from 'svelte';
	let resume: ResumeT = {} as ResumeT;

	onMount(() => {
    async function loadResume(){
		  resume = await getResume();
    }
    loadResume();
	});

</script>

<div id="printed">
	{#if Object.keys(resume).length > 0}
		<section class="about-container">
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
    <section>
      <h2 class="left title">Skills</h2>
      <hr />
      <div class="container">
        {#each Object.entries(resume.Skills) as [skill, skills]}
        <div>
          <h3 class="center">{skill}</h3>
          <p class="center">{skills.join(", ")}</p>
        </div>
        {/each}
      </div>
    </section>
	{/if}
</div>


<style>
  #printed {
		font-family: 'Times New Roman', Times, serif;
	}

	h1 {
		text-align: center;
	}

  .about-container {
    justify-content: space-between;
    width: 100%;
    display: flex;
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

  section {
    margin-bottom: 1rem;
  }

  @media print {
    @page {
      margin: 0;
    }

    #printed {
      padding: 2rem;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background-color: white;
      color: black;
    }

    #printed h1 {
      font-size: 2rem;
    }
  }
</style>
