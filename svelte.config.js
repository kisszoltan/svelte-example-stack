import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess({
			style: {
				css: {
					postcss: {
						plugins: [tailwindcss(), autoprefixer()]
					}
				}
			}
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
