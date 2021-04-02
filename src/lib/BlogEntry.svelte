<script>
	export let title;
	export let link;
	export let description;
</script>


<div id="link"><a href={link}>{title}</a></div>
<div id="description">{description}</div>


<style>
	#link {
			font-size: 3rem;
	}
</style>