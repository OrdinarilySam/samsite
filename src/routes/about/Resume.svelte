<script lang="ts">
	import type { ResumeT } from '$lib/ts/readResume';
	import { getResume } from '$lib/ts/readResume';
	import { onMount } from 'svelte';
	let resume: ResumeT = {} as ResumeT;

	onMount(() => {
		async function loadResume() {
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
			<h2 class="title">Education</h2>
			<hr />
			{#each resume.Education as edu}
				<div class="container canonical">
					<p>{edu.location}</p>
					<h3>{edu.school}</h3>
					<p>{edu['start-date']} - {edu['end-date']}</p>
				</div>
				<p class="left">{edu.degree}</p>
				<p class="left"><em>Cumulative GPA: </em>{edu.gpa}</p>
				<p class="left"><em>Honors: </em>{edu.honors}</p>
			{/each}
		</section>
		<section>
			<h2 class="title">Skills</h2>
			<hr />
			<div class="container">
				{#each Object.entries(resume.Skills) as [skill, skills]}
					<div>
						<h3 class="center">{skill}</h3>
						<p class="center">{skills.join(', ')}</p>
					</div>
				{/each}
			</div>
		</section>
		<section>
			<h2 class="title">Experience</h2>
			<hr />
			{#each resume.Experience as exp}
				<div class="container canonical">
					<p>{exp.position}</p>
					<h3>{exp.company}</h3>
					<p>{exp['start-date']} - {exp['end-date']}</p>
				</div>
        <ul class="list-items">
          {#each exp.about as about}
            <li>{about}</li>
          {/each}
        </ul>
			{/each}
		</section>
    <section>
    <h2 class="title">Projects</h2>
    <hr />
    {#each resume.Projects as proj}
      <div class="container canonical small">
        <h3>{proj.name}</h3>
        <p>{proj.tools.join(", ")}</p>
      </div>
      <p>{proj.about}</p>
    {/each}
    </section>
	{/if}
</div>

<style>
	#printed {
		font-family: 'Times New Roman', Times, serif;
	}

  * {
    vertical-align: middle;
  }

	h1 {
		text-align: center;
	}

  p {
    margin: auto 3px;
  }

  p,
  li {
    font-size: 15px;
  }

  ul {
    margin: 3px;
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

  .container.small {
    grid: 1fr / 1fr 1fr;
  }

	.container.canonical > *:nth-child(2),
	.center {
		text-align: center;
	}

	.container.canonical > *:first-child,
	.left {
		text-align: left;
	}

	.container.canonical > *:last-child,
	.right {
		text-align: right;
	}

	.container.canonical > * {
		margin: 0.25rem 0;
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
		text-align: left;
	}

	em {
		font-style: normal;
		font-weight: bold;
	}

	section {
		margin-bottom: 1rem;
	}

  .list-items {
    width: 100%;
    text-align: left;
  }

  .list-items > * {
    width: 100%;
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
