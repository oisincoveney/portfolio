<script>
	import { onMount } from 'svelte';

	const changeTheme = () => {
		const elem = document.body.classList;
		if (elem.contains('dark')) {
			elem.remove('dark');
			elem.add('light');
			isDark = false;
		} else {
			elem.remove('light');
			elem.add('dark');
			isDark = true;
		}
	};

	let isDark = true;

	onMount(() => {
		isDark = document.body.classList.contains('dark');
	});

</script>

<button on:click={changeTheme}>
</button>


<style lang="scss">
  button {
    background: none;
    color: inherit;
    border: var(--color-text-primary) 1px solid;
		background: var(--color-text-primary);
		height: 1.2rem;
		width: 1.2rem;
    border-radius: 1rem;
    padding: 0.4rem;
    margin: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    &:hover {
      background: var(--color-text-primary);
      color: var(--color-bg-primary);
    }

  }
</style>