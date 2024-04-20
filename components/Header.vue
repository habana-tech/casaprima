<script setup lang="ts">
const route = useRoute()
const { locale, locales } = useI18n()
const localePath = useLocalePath()


const links = [
  [{
    label: $t('nav.about'),
    // icon: 'i-heroicons-home',
    to: localePath('about'),
    labelClass: "text-primary hover:text-pink-700" 
  }, {
    label: 'Horizontal Navigation',
    icon: 'i-heroicons-chart-bar',
    to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`,
    labelClass: "text-primary hover:text-pink-700" 

  }, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette',
    labelClass: "text-primary hover:text-pink-700" 


  }], [{
    label: 'Examples',
    icon: 'i-heroicons-light-bulb',
    labelClass: "text-primary hover:text-pink-700" 

  }, {
    label: 'Help',
    icon: 'i-heroicons-question-mark-circle',
    labelClass: "text-primary hover:text-pink-700" ,
    iconClass: "text-primary hover:text-pink-700"
  }]
]
</script>

<template>
    <header class="bg-pink-200">
        <nav class="flex items-center justify-between px-4 py-2">
            <div class="flex items-center">
                <NuxtLink :to="localePath('/')" class="flex items-center space-x-2">
                    <img src="/logo.svg" alt="Logo" class="h-16 w-16">
                    <h1 class="text-primary text-3xl font-title ml-2">Casa Prima</h1>
                </NuxtLink>
            </div>
            <!-- <div class="flex items-center space-x-4">
                <a href="#" class="text-primary hover:text-pink-800 hover:underline underline-offset-2">Link 1</a>
                <a href="#" class="text-primary hover:text-pink-800">Link 1</a>
                <a href="#" class="text-primary hover:text-pink-800">Link 1</a>
                <a href="#" class="text-primary hover:text-pink-800">Link 1</a>
                <a href="#" class="text-primary hover:text-pink-800">Link 1</a>
                <a href="#" class="text-primary hover:text-pink-800">Link 1</a>
                <a href="#" class="text-primary hover:text-pink-800">Link 1</a>
                <a href="#" class="text-primary hover:text-pink-800">Link 1</a>
                
            </div> -->
            
            <header class="h-16 w-screen bg-pink-100">
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

      <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
        [{{ locale.name }} ({{ locale.code }})]
      </NuxtLink>
    </header>

            {{ $t('home') }}
        </nav>


    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
/* Add any custom styles here */
</style>