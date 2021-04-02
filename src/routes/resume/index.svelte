<script>
	import { data as resume } from '$lib/resume';
</script>


<div class="resume-heading">
	Here's some work I've done:
</div>

<section class="experience">
	{#each resume.work as res}
		<div class="experience-card {res.company.split(' ')[0]}-card">
			{#if res.company === 'Clearwater Analytics'}
				<img src="/img/clearwater.png" />
			{:else}
				<img src="/img/{res.company.split(' ')[0].toLowerCase()}.svg" />
			{/if}
			<div class="logo-cover"></div>
			<div class="text-elements">
				<div class="elem-container">
					<div class="top-container">
						<div class="res-heading">
							{res.company}
						</div>
						<div class="res-location">{res.location}</div>
					</div>
					<div class="res-position">{res.position}</div>


					<div class="res-skills">
						{#each res.skills as skill}
							<div>{skill}</div>
						{/each}
					</div>

					<div class="res-highlights">
						{#each res.highlights as hl}
							<div>{hl}</div>
						{/each}
					</div>
					<div style="padding-top: 8rem; align-self: end; justify-self: end">
						from {res.startDate} to {res.endDate}
					</div>
				</div>

			</div>
		</div>
	{/each}

</section>
<div style="padding-bottom: 10rem;"></div>


<div class="resume-heading">Here are my schools</div>
<section class="school experience">
	<div class="experience-card DCU-card">
		<img src="/img/dcu.svg">
		<div class="logo-cover"></div>
		<div class="text-elements">
			<div class="elem-container">
				<div class="top-container">
					<div class="res-heading">Dublin City University</div>
					<div class="res-location">Dublin, Ireland</div>
				</div>
				<div class="res-position">Master's in Computing and Data Analytics - Graduation: August 2021</div>

				<div class="res-courses res-highlights">
					{#each resume.education[0].courses as hl}
						<div>{hl}</div>
					{/each}
				</div>
				<div style="padding-top: 8rem; align-self: end; justify-self: end">
					from {resume.education[0].startDate} to {resume.education[0].endDate}
				</div>
			</div>

		</div>
	</div>

	<div class="experience-card SJSU-card">
		<img src="/img/sjsu.svg">
		<div class="logo-cover"></div>
		<div class="text-elements">
			<div class="elem-container">
				<div class="top-container">
					<div class="res-heading">San Jose State University</div>
					<div class="res-location">San Jose, CA</div>
				</div>
				<div class="res-position">Bachelor's in Computer Science - Magna Cum Laude - GPA: 3.9
					<br style="margin: 0.3rem">
				<span style="display: block; margin-top: 0.4rem;">
					Exchange Student at University College Dublin (Dublin, Ireland) - Jan to June 2019
				</span>
				</div>

				<div class="res-courses res-highlights">
					{#each resume.education[1].courses as hl}
						<div>{hl}</div>
					{/each}
				</div>
				<div style="padding-top: 8rem; align-self: end; justify-self: end">
					from {resume.education[1].startDate} to {resume.education[1].endDate}
				</div>
			</div>

		</div>
	</div>
</section>


<section class="projects experience">
</section>


<div style="padding-bottom: 10rem;"></div>


<style lang="scss">
  @import '../../scss/_breakpoints';

  @mixin resume-card($color-primary, $color-text) {
    color: lighten($color-text, 30%);
    background: lighten($color-primary, 15%);
    border-radius: 1.5rem;
  }

  .res-courses {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
		height: 10rem;
  }

  .resume-heading {
    margin: 0 0 3rem;
    font-weight: bolder;
    font-size: 3rem;
  }

  .experience {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
		max-width: 100%;
    //margin: 0 auto;
  }

  .elem-container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .experience-card {
    min-height: 10rem;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 75rem;

    & > img {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      z-index: 1;
      height: 30%;
      max-height: 10rem;
    }

    & > .logo-cover {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      background: black;
      opacity: 30%;
      width: 100%;
      height: 100%;
    }
  }

  .elem-container {
    padding: 2rem;
  }

  div.text-elements {
    row-gap: 0.5rem;
    //padding: 1rem;
  }

  div.text-elements * {
    z-index: 3;
  }

  .res-heading {
    font-size: 3.5rem;
    font-weight: bold;
  }

  .res-position {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .res-skills {
    & > div {
      border: 1px solid;
      border-radius: 999px;
      padding: 0.5rem;
      font-size: 1.2rem;
    }

    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    row-gap: 1rem;
    flex-wrap: wrap;
  }

  .res-highlights {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-left: 0.2rem;
    row-gap: 1rem;
    font-size: 1.3rem;
  }


  .GoLinks-card {
    @include resume-card(#00beac, #f1f2f4)
  }

  .Clearwater-card {
    @include resume-card(#0a5eb2, #e5e5e5)
  }

  .Citi-card {
    @include resume-card(#0e2a48, #e5e5e5)
  }

  .Nuxeo-card {
    @include resume-card(#1f4cbf, #f5f5f5)
  }

  .DCU-card {
    @include resume-card(#042460, #fcb42c)
  }

  .SJSU-card {
    @include resume-card(#0055A2, #E5A823)
  }

  .top-container {
    display: flex;
    flex-direction: row;
    //align-items: center;
    justify-content: space-between;
  }

	@include breakpoint-lt('lg') {
		.top-container {
      flex-direction: column;
		}

		.res-courses {
			flex-wrap: nowrap;
			overflow-wrap: anywhere;
			height: auto;
		}
	}

  .res-location {
    font-size: 2rem;
  }

</style>

