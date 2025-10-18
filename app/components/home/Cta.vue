<template>
  <div class="relative flex flex-col items-center max-w-4xl p-8 mx-auto my-12 text-center rounded-3xl md:px-20 md:py-20 overflow-hidden shadow-2xl">
    <!-- Animated gradient background -->
    <div class="absolute inset-0 hero-gradient opacity-90 -z-10"></div>
    
    <!-- Decorative blurred circles -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
    <div class="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
    
    <!-- Content -->
    <div class="relative z-10">
      <h2 class="text-4xl tracking-tight text-white md:text-6xl font-bold drop-shadow-lg">
        {{ $t('home.cta.title') }}
      </h2>
      <p class="mt-4 text-lg text-white/90 md:text-xl drop-shadow">
        {{ $t('home.cta.description') }}
      </p>
      <div class="flex mt-8 justify-center">
        <a
          href="https://github.com/ccbikai/sink?tab=readme-ov-file#%EF%B8%8F-deployment"
          class="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-purple-600 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {{ $t('home.cta.button') }}
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
