<script>
	import Head from '$lib/Head.svelte'

	export let title;
</script>

<Head title={title}></Head>

<div id="title">{title}</div>
<div id="content">
	<slot/>
</div>

<style>
	#title {
			font-size: 3rem;
			font-weight: bold;
			text-align: center;
			margin-bottom: 3rem;
	}

	#content {
			font-size: 1.2rem;
	}
</style>
