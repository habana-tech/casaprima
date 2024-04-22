<script setup lang="ts">

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
const localePath = useLocalePath()
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header class="flex items-center justify-between border-b py-4 md:py-8">
        <!-- logo - start -->
        <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-title text-black md:text-3xl"
          aria-label="logo">
          <img src="/logo.svg" width="95" height="94">

          Casa Prima
        </a>
        <!-- logo - end -->

        <AppNav> </AppNav>


      </header>
    </div>
  </div>
</template>