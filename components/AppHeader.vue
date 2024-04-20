<script setup lang="ts">

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
const localePath = useLocalePath()
</script>

<template>
  <div class="bg-red text-yellow-500">
    <nav>
      <ul>
        <li>
          <NuxtLink :to="localePath('about')">About</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('index')">{{ $t('home') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <AppAlert>
      This is an auto-imported component.
    </AppAlert>
  </div>
  </template>