import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vitest/config';
import Icons from 'unplugin-icons/vite'
import path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
		}),
	],

	resolve: {
		alias: {
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
		},
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
});
