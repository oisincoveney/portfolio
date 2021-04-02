<script>
	import { fade, fly } from 'svelte/transition';

	import { onMount } from 'svelte';

	import '../global.scss';
	import Nav from '../lib/Nav.svelte';
	import { page, navigating } from '$app/stores';


	const getBackgroundURL = (pathname) => {

		const url = (name) => `/img/${name}.jpg`;
		switch (pathname) {
			case '/':
				return url(`malahide`);
			case '/resume':
				return url(`causeway`);
			case '/blog':
				return url('kotor');
			case '/bucketlist':
				return url('austria');
			case '/ml':
				return url(`tallinn`);
			default:
				return null;
		}
	};

	let ready = false;
	onMount(() => {
		ready = true;
	});

	$: bg = getBackgroundURL($page.path);

</script>

{#if ready}
	{#if bg}
		<img transition:fade="{{duration: 500}}" id="background-image-styling"
				 class="background-pos"
				 src="{bg}" />
		<div transition:fade="{{duration: 500}}"
				 id={"gradient-image-background" }
				 class="background-pos"></div>

	{:else}
		<div transition:fade="{{duration: 500}}"
				 id={"background-standalone"}
				 class="background-pos"></div>
	{/if}
	<!--Set navbar and theme change button-->
	<div id="navbar" in:fly="{{ y: -50, duration: 600}}">
		<Nav segment={$page.path} />
	</div>

	{#if !$navigating}
		<div
			class="container"
			in:fly="{{ y: 10, duration: 600}}"
		>
			<div>
				<slot/>
			</div>
		</div>
	{/if}
{/if}


<style lang="scss">
  @import "../scss/_containers";

  #gradient-image-background, #background-standalone {
    background: var(--gradient-after);
    object-fit: cover;
    transition: background 1s ease-in-out;
  }

  #gradient-image-background {
    opacity: 65%;
  }

  #background-standalone {
    opacity: 90%;
  }

  #navbar {
    position: sticky;
    width: 100vw;
		z-index: 100000000;
  }

  .container > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: fit-content;
    margin: auto;
    min-width: 50vw;
  }


  //// Set spacing for elements in the navbar
  //#navbar {
  //  display: flex;
  //  flex-direction: row;
  //  justify-content: space-between;
  //}
  //
  //
  //// Set positioning for page elements
  //
  //.nav-pos {
  //  z-index: 1;
  //  position: fixed;
  //  top: 2rem;
  //  left: 3rem;
  //  right: 3rem;
  //  width: calc(100vw - 6rem);
  //}
  //
  //.main-pos {
  //  height: 90vh;
  //  width: 100vw;
  //	padding-top: 4rem;
  //
  //}
  //
  .background-pos {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -100000000;
    overflow: hidden;
    object-fit: cover;

    & > * {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      //width: 100vw;
      z-index: -100000000;
      object-fit: cover;
    }
  }

  //
  //.container {
  //	padding: 4vw;
  //	max-width: 75rem;
  //}

</style>