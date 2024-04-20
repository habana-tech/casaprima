<template>
    <nav class="gap-12 flex items-center">

        <NuxtLink v-for="item in items" :to="item.to"
            class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-pink-500 active:text-pink-700">
            {{item.title}}
        </NuxtLink>
        
    </nav>
</template>
<script setup lang="ts">
const localePath = useLocalePath()

const items = [
    { title: 'About', to: localePath('about') },
    { title: 'Our Facilities', to: localePath('facilities') },
    { title: 'Cost & Services', to: localePath('cost') },
    { title: 'Activities', to: localePath('activities') },
    { title: 'Local Attractions', to: localePath('attractions') },
]
</script>