<template>
  <AppHero />

   
  <div class="container flex font-title">
      <UButton label="Button" />

      <div>
        <NuxtLink to="/">English</NuxtLink> |
        <NuxtLink to="/fr">Français</NuxtLink>

        <p>{{ $t('welcome') }}</p>
      </div>
    </div>
</template>