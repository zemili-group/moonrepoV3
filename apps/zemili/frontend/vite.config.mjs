import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

// import "npm:playwright/test";
// import "npm:@sveltejs/adapter-auto";
// import "npm:@sveltejs/kit";
// import "npm:@sveltejs/vite-plugin-svelte";
// import "npm:@types/eslint";
// import "npm:eslint-config-prettier";
// import "npm:eslint-plugin-svelte";
// import "npm:globals";
// import "npm:prettier";
// import "npm:prettier-plugin-svelte";
// import "npm:svelte";
// import "npm:svelte-check";
// import "npm:typescript";
// import "npm:typescript-eslint";
// import "npm:vite";
// import "npm:vitest";

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
