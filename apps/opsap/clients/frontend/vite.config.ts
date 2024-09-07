import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vitest/config"
import { dirname, fromFileUrl, resolve } from "$std/path/mod.ts"

const __dirname = dirname(fromFileUrl(import.meta.url))
console.log("dirname", __dirname)
console.log(
  resolve(
    __dirname,
    "../../../node_modules/.deno/@sveltejs+kit@2.5.26/node_modules/@sveltejs/kit/src/runtime/client",
  ),
)

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
  server: {
    fs: {
      allow: [
        // Add the path to your node_modules directory
        resolve(__dirname, "node_modules"),
        // Add the specific path causing the issue
        resolve(
          __dirname,
          "../../../node_modules/.deno/@sveltejs+kit@2.5.26/node_modules/@sveltejs/kit/src/runtime/client",
        ),
        resolve(
          __dirname,
          "../../../../node_modules/.deno/@sveltejs+kit@2.5.26/node_modules/@sveltejs/kit/src/runtime/client",
        ),
        // Add the parent directory of your project
        resolve(__dirname, "../../../node_modules"),
      ],
    },
  },
})
