<template>
  <div class="mt-16 md:mt-0 md:py-12">
    <h2 class="font-bold text-center gradient-text text-xl">
      {{ $t('home.logos.title') }}
    </h2>
    <div class="flex flex-wrap items-center justify-center gap-8 mt-10 md:gap-20">
      <img
        class="w-64 aspect-[1256/632] transition-transform hover:scale-110 duration-300"
        alt="Cloudflare"
        src="@/assets/images/cloudflare.png"
      >
      <img
        class="w-64 aspect-[1256/632] transition-transform hover:scale-110 duration-300"
        alt="Nuxt.js"
        src="@/assets/images/nuxtjs.png"
      >
    </div>
  </div>
</template>
