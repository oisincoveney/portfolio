<script>
</script>

<div id="header-container">
	<div class="header">
		Oisin Coveney
	</div>
	<div class="links">
		<a href="/resume">Resume</a>
		<a href="https://www.linkedin.com/in/oisincoveney">LinkedIn</a>
		<a href="https://www.github.com/oisincoveney">Github</a>
	</div>
</div>

<style lang="scss">
  @import '../scss/_breakpoints';

  #header-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
		padding-bottom: 8rem;
    //padding-bottom: 15rem;
    //align-items: center;
  }

  .links {
    padding: 1rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    justify-content: center;
  }

  a {
    font-size: 2rem;
    border: var(--color-text-primary) 1px solid;
    padding: 0.5rem;
    border-radius: 1rem;

    &:hover {
      background: var(--color-text-primary);
      color: var(--gradient-after)
    }
  }

  .header {
    font-size: 7rem;
    padding: 2rem 2rem 1rem;
    text-align: center;
		overflow-wrap: anywhere;
  }

	@include breakpoint-lt('md') {
		.header {
			font-size: 4rem;
		}

		.links {
			margin-top: 1rem;
			flex-direction: column;
			align-items: center;
			row-gap: 1rem;
		}
	}

</style>
