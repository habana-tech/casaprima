<template>
    <!-- nav - start -->
    <div class="hidden lg:flex gap-12">
        <AppMenuItems></AppMenuItems>
        <LanguageSwitcher />

    </div>

    <!-- nav - end -->

    <!-- buttons - start -->
    <a href="#"
        class="hidden rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold outline-none ring-pink-300 transition duration-100 
                        hover:bg-pink-700 focus-visible:ring active:text-pink-700 md:text-base lg:inline-block text-white">
        Contact Sales
    </a>

    <button type="button" @click="isOpen = true"
        class="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-semibold text-gray-600 ring-pink-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" />
        </svg>

        Menu
    </button>

    <!-- buttons - end -->





    <USlideover v-model="isOpen" prevent-close>
        <UCard class="flex flex-col flex-1"
            :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        <a href="/" class="inline-flex items-center gap-2.5 text-xl font-title text-black md:text-2xl"
                            aria-label="logo">
                            <img src="/logo.svg" class="w-14 h-14">

                            Casa Prima
                        </a>
                    </h3>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="isOpen = false" />
                </div>
            </template>

            <div class="flex flex-col gap-12 h-full">
                <AppMenuItems class="flex-col"> </AppMenuItems>
                <div class="gap-12 flex flex-col">
                    <a href="#"
                        class="rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold outline-none ring-pink-300 transition duration-100 
                        hover:bg-pink-700 focus-visible:ring active:text-pink-700 md:text-base lg:inline-block text-white">
                        Contact Sales
                    </a>
                    <LanguageSwitcher />
                </div>
            </div>
        </UCard>
    </USlideover>

</template>
<script setup lang="ts">

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const isOpen = ref(false)
</script>
