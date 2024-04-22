<template>
    <div class="bg-blue-400 pb-6 sm:pb-8 lg:pb-12 bg-no-repeat bg-fixed bg-cover"
        style="
    background-image: linear-gradient(#FCBBB280,#ffffff90), url('/img/casa/f8166a9f-f8b2-4728-b9d0-376a08256338.jpg');">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

            <section class="flex flex-col items-center">
                <div class="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
                    <p class="mb-4 font-semibold text-black md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

                    <h1 class="mb-8 text-4xl font-title text-black sm:text-5xl md:mb-12 md:text-6xl">{{ $t('Contemporary Rural Eco House') }}</h1>

                    <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                        <a href="#"
                            class="inline-block rounded-lg bg-pink-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-pink-300 transition duration-100 hover:bg-pink-600 focus-visible:ring active:bg-pink-700 md:text-base">
                            Start now</a>

                        <a href="#"
                            class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-pink-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                            Take tour</a>
                    </div>
                </div>

                <!-- social - start -->
                <div class="flex items-center justify-center gap-4 lg:justify-start">
                    <span
                        class="text-sm font-semibold uppercase tracking-widest text-gray-600 sm:text-base">Social</span>
                    <span class="h-px w-12 bg-gray-400"></span>

                    <div class="flex gap-4">
                        <a href="#" target="_blank"
                            class="text-gray-600 transition duration-100 hover:text-pink-600 active:text-gray-600">
                            <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        <a href="#" target="_blank"
                            class="text-gray-600 transition duration-100 hover:text-pink-600 active:text-gray-600">
                            <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>

                        <a href="#" target="_blank"
                            class="text-gray-600 transition duration-100 hover:text-pink-600 active:text-gray-600">
                            <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <!-- social - end -->
            </section>
        </div>
    </div>
</template>