<template>
  <div class="relative flex flex-col items-center max-w-5xl p-10 mx-auto my-16 text-center rounded-3xl md:px-24 md:py-24 overflow-hidden shadow-2xl">
    <!-- Animated gradient background -->
    <div class="absolute inset-0 hero-gradient opacity-95 -z-10"></div>
    
    <!-- Decorative blurred circles -->
    <div class="absolute top-10 left-10 w-32 h-32 bg-white/30 rounded-full blur-2xl animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 0.5s;"></div>
    
    <!-- Content -->
    <div class="relative z-10">
      <div class="inline-block mb-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
        <span class="text-sm font-bold text-white">🎉 Join Thousands of Happy Users</span>
      </div>
      
      <h2 class="text-5xl tracking-tight text-white md:text-7xl font-extrabold drop-shadow-2xl mb-6 leading-tight">
        {{ $t('home.cta.title') }}
      </h2>
      <p class="mt-6 text-xl text-white/95 md:text-2xl drop-shadow-lg max-w-3xl mx-auto font-medium leading-relaxed">
        {{ $t('home.cta.description') }}
      </p>
      <div class="flex mt-10 justify-center gap-4 flex-wrap">
        <a
          href="https://github.com/ccbikai/sink?tab=readme-ov-file#%EF%B8%8F-deployment"
          class="inline-flex items-center px-10 py-5 text-xl font-bold bg-white text-orange-600 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-orange-50 group"
        >
          {{ $t('home.cta.button') }}
          <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
      
      <!-- Trust indicators -->
      <div class="flex items-center justify-center gap-8 mt-12 flex-wrap">
        <div class="text-white/90 flex items-center gap-2">
          <span class="text-2xl">⚡</span>
          <span class="font-semibold">99.9% Uptime</span>
        </div>
        <div class="text-white/90 flex items-center gap-2">
          <span class="text-2xl">🔒</span>
          <span class="font-semibold">Secure & Private</span>
        </div>
        <div class="text-white/90 flex items-center gap-2">
          <span class="text-2xl">🚀</span>
          <span class="font-semibold">Lightning Fast</span>
        </div>
      </div>
    </div>
  </div>
</template>
