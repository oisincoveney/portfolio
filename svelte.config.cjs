/* eslint-disable no-undef */
const sveltePreprocess = require('svelte-preprocess');
const firebaseAdapter = require("@sveltejs/adapter-static");
const pkg = require('./package.json');



/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	extensions: [".svelte"],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information resume preprocessors
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: 'postcss'
			},
			postcss: true
		}),
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: firebaseAdapter(),

		files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes',

		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
