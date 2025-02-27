// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/content"],
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	nitro: { preset: "bun" },
	content: {
		build: {
			markdown: {},
			pathMeta: {
				slugifyOptions: {
					lower: false,
				},
			},
		},
	},
});
