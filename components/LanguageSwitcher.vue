<script setup>

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// const availableLocales = computed(() => {
//   return locales.value.filter(i => i.code !== locale.value)
// })

let localeMenuItems = locales.value.map(locale => (
   [{
  label: locale.code.toUpperCase(),
//   path: switchLocalePath(locale.code),
  avatar: {
      src: `/${locale.code}.svg`
    },
  to: switchLocalePath(locale.code)

}
]))

</script>

<template>
    <UDropdown :items="localeMenuItems" mode="click" :popper="{ placement: 'bottom-start' }" :ui="{ width: 'w-auto' }">
        <UButton color="white" :label="locale" trailing-icon="i-heroicons-chevron-down-20-solid"> 
            <img :src="`/${locale}.svg`" class="rounded-full h-6 w-6 text-sm">
        </UButton>
    </UDropdown>
</template>