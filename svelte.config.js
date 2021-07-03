import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess  from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
        paths: {
            base: '/rath-python',
            assets: '/rath-python'
        },
	},

    preprocess: [
        preprocess(),
        mdsvex(mdsvexConfig)
    ]
};

export default config;
