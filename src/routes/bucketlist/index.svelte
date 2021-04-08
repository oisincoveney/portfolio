<script>
import Head from "$lib/Head.svelte";

	const done = [
		{
			goal: "Set up a personal Jupyter Notebook server",
			progress: "Used an old laptop and some Linux / IP snafu to create my own Jupyter notebook server!"
		}
	]

	const inProgress = [
		{
			goal: 'Make a personal website',
			progress: 'Just finished v2 of the website using SvelteKit!'
		},
		{
			goal: 'Get a job',
			progress: 'Just finished making a portfolio website (hello recruiters!)'
		},
		{
			goal: 'Make a music album',
			progress: 'Writing lyrics and trying to figure out what stories to tell without smoking insane amounts of weed like the Beatles'
		},
		{
			goal: "Get my master's thesis published",
			progress: "Working on the paper right now, will be presenting in August."
		}
	];
</script>

<Head title="Bucket List"></Head>

<div id="heading">2021 Bucket List</div>

<div class="bucket-list-container">

	<div class="bucket-list-subheading">In Progress</div>
	<hr />
	<section>
		{#each inProgress as d}
			<div>
				<div class="goal">{d.goal}</div>
				<div class="progress">{d.progress}</div>
			</div>
		{/each}
	</section>

	<div class="bucket-list-subheading">Done</div>
	<hr />
	<section>
		{#each done as d}
			<div>
				<div class="goal">{d.goal}</div>
				<div class="progress">{d.progress}</div>
			</div>
		{/each}
	</section>

</div>


<style lang="scss">

  #heading {
    font-size: 5rem;
    font-width: bold;
    text-align: center;
    margin-bottom: 4rem;
  }

  .bucket-list-container {
    & > section {
      display: flex;
      flex-direction: column;
      row-gap: 4rem;
      width: 100%;
			margin-bottom: 8rem;
    }

		& > hr {
			margin-bottom: 2rem;
		}
  }

  .goal {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .progress {
    font-size: 1.5rem;
  }

  .bucket-list-subheading {
    font-weight: bold;
    font-size: 3rem;
  }
</style>