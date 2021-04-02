<script>
	export let title;
	export let link;
	export let description;
</script>


<div id="link"><a href={link}>{title}</a></div>
{#if description}
	<div id="description">{description}</div>
{/if}

<style lang="css">
    #link {
        font-size: 3rem;
        transition: color 150ms ease-in;
    }

    #link:hover {
        color: var(--gradient-after);
        filter: brightness(0.8);
    }
</style>