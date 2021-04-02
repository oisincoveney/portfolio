<script>
	import BlogEntry from '../../lib/BlogEntry.svelte';

	const url = (route) => `/ml/${route}`
</script>
<BlogEntry title="Backpropagation" link={url('backprop')} />



<style>
	div > a {
			font-size: 3rem;
	}
</style>