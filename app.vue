<script setup lang="ts">

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
const localePath = useLocalePath()

const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl()

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes('google-analytics') &&
      current?.includes('google-analytics')
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true },
)
</script>

<template>
  <div>

    <!-- <AppHero> </AppHero> -->

    <AppHeader> </AppHeader>

    <NuxtPage />

    <CookieControl>
      <template #bar>
        <h2>{{ $t('cookies.bar.title') }}</h2>
        <p>{{ $t('cookies.bar.text') }}</p>
        <NuxtLink to="/privacy" class="text-primary">{{ $t('cookies.bar.privacyLink') }}</NuxtLink>
      </template>
    </CookieControl>


  </div>
</template>
