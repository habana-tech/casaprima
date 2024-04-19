export default defineI18nConfig(() => ({
    legacy: false,
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr'],
    messages: {
      en: {
        home: 'Home',
        welcome: 'Welcome'

      },
      fr: {
    
        welcome: 'Bienvenue'
      },
      de: {
        welcome: 'Bienvenue'
      }
    }
  }))