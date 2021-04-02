<script>
	import ChangeTheme from './ChangeTheme.svelte';
	import Headroom from 'svelte-headroom';
	import { navigating, page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let showMobileDropdown = true;

	export let segment = '';

	const headers = [
		{
			link: '/',
			value: 'Home'
		},
		{
			link: '/resume',
			value: 'Resume'
		},
		{
			link: '/blog',
			value: 'Blog'
		},
		{
			link: '/bucketlist',
			value: 'Bucket List'
		}
		// ,
		// {
		// 	link: '/ml',
		// 	value: 'ML Playbook'
		// }
	];

	$: console.log(showMobileDropdown)
	$: console.log($navigating)
	$: {
		if ($navigating)
			showMobileDropdown = false;
			console.log("HELLO")
			setTimeout(() => {showMobileDropdown = true}, 1000);
	}

	$: console.log(segment, segment.split('/'))

	// $: showMobileDropdown = !!$page;
	// $: console.log('Navigating: ', !$navigating);
	// $: console.log('PAGE ', $page);
	// $: console.log('PAGE ', showMobileDropdown);


</script>

<Headroom>
	<nav class="desktop-dropdown-nav">
		{#each headers as head}
			<div class={head.link === segment ? "isSelected" : ""}><a href={head.link}>{head.value}</a></div>
		{/each}

		<ChangeTheme />

	</nav>

	<nav class="mobile-dropdown-nav">
		<div class="xs-dropdown-left">
			{#key segment}
				<div
					class="isSelected mobile-selected">{segment === '/' ? 'Home' : segment.split('/')[1]}</div>
			{/key}
			<div class="xs-choose-link">
				<svg version="1.0" xmlns="http://www.w3.org/2000/svg" id="chevron-down" viewBox="0 0 448 512">
					<path
						d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
				</svg>
			</div>
		</div>

		<div class="xs-change-theme-button">
			<ChangeTheme />
		</div>
	</nav>

	{#if showMobileDropdown}
		<ul transition:fade class="dropdown">
			{#each headers as head}
				<li class={"dropdown-element " + (head.link === segment ? "isSelected" : "")}><a
					href={head.link}>{head.value}</a></li>
			{/each}
		</ul>
	{/if}


</Headroom>


<style lang="scss">
  @import '../scss/_breakpoints';

  nav {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    text-transform: uppercase;
    width: 100vw;
    z-index: 999999999;
  }


  @include breakpoint-lt('sm') {
    nav {
      flex-direction: column;
    }
  }


  .isSelected {
    //font-weight: bolder;
    text-decoration: underline;
  }


  a {
    padding: 1rem 0.5rem;
    font-size: 1.2rem;
  }

  .mobile-dropdown-nav {
    background: var(--color-bg-primary);
    display: none;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 2rem;
    transition: background 1s ease-in;

    & > div:first-child {
      margin-left: 3rem;
    }

    & > div:last-child {
      margin-right: 3rem;
    }
  }

  #chevron-down {
    fill: var(--color-text-primary);
    height: 1.3rem;
  }

  .mobile-selected {
    font-size: 2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .xs-dropdown-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
  }

  .dropdown {
    display: none;
    list-style-type: none;
    text-transform: uppercase;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
    padding: 4rem;


    background: var(--color-bg-primary);


    & a {
      font-size: 3rem;
      color: var(--color-text-primary);
      text-align: center;
    }

  }


  @include breakpoint-lt('lg') {
    .mobile-dropdown-nav {
      display: flex;
    }

    .desktop-dropdown-nav {
      display: none;
    }
  }

  .dropdown-element {
    width: 100%;
    display: grid;
    place-items: center;
  }

  .mobile-dropdown-nav:hover + .dropdown,
  .dropdown:hover {
    display: flex;
  }

</style>
