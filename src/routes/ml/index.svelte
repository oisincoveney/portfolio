<script>
	import Head from '$lib/Head.svelte';
import BlogEntry from '../../lib/BlogEntry.svelte';

	const url = (route) => `/ml/${route}`
</script>
<BlogEntry title="Backpropagation" link={url('backprop')} />

<Head title="ML Playbook"></Head>

<style>
	div > a {
			font-size: 3rem;
	}
</style>