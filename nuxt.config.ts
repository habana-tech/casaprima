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
    locales: ['en', 'fr'], // used in URL path prefix
    defaultLocale: 'en', // default locale of your project for Nuxt pages and routings
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
})