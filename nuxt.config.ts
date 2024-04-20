// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/content",
    '@nuxtjs/seo',
    "@dargmuesli/nuxt-cookie-control",
    '@morev/vue-transitions/nuxt',
    'nuxt-aos',
  ],
  i18n: {
    locales: [{
      code: 'en',
      iso: 'en-US',
      file: 'en.json'
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr.json'
    }
    ],
    strategy: 'prefix_and_default', // used in URL path prefix
    defaultLocale: 'en', // default locale of your project for Nuxt pages and routings
    baseUrl: 'https://example.com',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    langDir: 'locales/',
    vueI18n: "./i18n.config.ts",

  },
  css: ['~/assets/css/fonts.css']
})