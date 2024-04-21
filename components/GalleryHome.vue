<script setup lang="ts">
const items = [
  '/img/casa/02150dda-12de-4dac-bddd-a731120d2c9b.jpg',
  '/img/casa/389afc99-6e0b-4498-a473-f15b5991f6db.jpg',
  '/img/casa/458cd6a5-f5c5-42d1-ba01-17336780d8b1.jpg',
  '/img/casa/514bc7ca-7b91-4d61-a12d-b9aac1d16aed.jpg',
  '/img/casa/62aa7fc7-d47e-4d23-af91-e87d53825186.jpg',
  '/img/casa/7c071d39-4592-45cb-8448-de9b384a4f0a.jpg',
  '/img/casa/84630841-4de4-45f8-a632-a0e87fb8dac1.jpg',
  '/img/casa/98a38777-d396-4e46-93df-313e50402937.jpg',
  '/img/casa/c058abfa-476d-43fe-becc-1f06ea0fac3a.jpg',
  '/img/casa/d23e6f69-f5bf-4e69-b489-4b4ea134b27e.jpg',
  '/img/casa/d4f87529-15b6-4811-9c9f-894a352e6168.jpeg',
  '/img/casa/f8166a9f-f8b2-4728-b9d0-376a08256338.jpg',
]
</script>

<template>
    <UCarousel class="" v-slot="{ item }" :items="items" :ui="{ container: 'bg-pink-600 p-3 custom-pattern-1', item: 'basis-full md:basis-1/2 lg:basis-1/3 m-2 max-h-[50vh]' }">
        <img :src="item" class="w-full object-cover " draggable="false">
    </UCarousel>
  </template>










