// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },

    build: {
      csv: {
        // Convert CSV data to JSON objects
        json: true,
        // Specify custom delimiter (default is ',')
        delimiter: ','
      }
    },

  },
  ssr: true,

  // tailwindcss: {
  //   cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }]
  // },



})