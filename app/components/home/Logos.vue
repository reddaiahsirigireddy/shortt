<template>
  <div class="mt-20 md:mt-0 md:py-16">
    <h2 class="font-extrabold text-center gradient-text text-3xl mb-6">
      Built with awesome technologies
    </h2>
    <div class="flex flex-wrap items-center justify-center gap-12 mt-12 md:gap-24">
      <div class="relative group">
        <div class="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <img
          class="relative w-72 aspect-[1256/632] transition-transform hover:scale-110 duration-300 p-4 rounded-2xl bg-white/50 backdrop-blur-sm"
          alt="Cloudflare"
          src="@/assets/images/cloudflare.png"
        >
      </div>
      <div class="relative group">
        <div class="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <img
          class="relative w-72 aspect-[1256/632] transition-transform hover:scale-110 duration-300 p-4 rounded-2xl bg-white/50 backdrop-blur-sm"
          alt="Nuxt.js"
          src="@/assets/images/nuxtjs.png"
        >
      </div>
    </div>
    
    <!-- Additional content about website -->
    <div class="max-w-5xl mx-auto mt-20 text-center">
      <div class="p-10 rounded-3xl glass-card">
        <h3 class="text-4xl font-extrabold gradient-text mb-6">
          Why Choose urlsclickearn?
        </h3>
        <p class="text-xl text-slate-700 dark:text-slate-200 mb-10 leading-relaxed">
          Experience the power of modern link management with our cutting-edge platform. 
          Track every click, analyze your audience, and optimize your marketing campaigns with real-time data.
        </p>
        
        <!-- Third Ad Script - Native Banner -->
        <div class="my-10 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-pink-500/10">
          <script async="async" data-cfasync="false" src="//preferablyending.com/baafe128a08c806c01cbd4b9d77ced82/invoke.js"></script>
          <div id="container-baafe128a08c806c01cbd4b9d77ced82"></div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-2 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
              <span class="text-3xl">⚡</span>
            </div>
            <h4 class="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3">Fast Performance</h4>
            <p class="text-slate-600 dark:text-slate-300 text-base">Lightning-fast redirects powered by Cloudflare's global network</p>
          </div>
          <div class="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border-2 border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg">
              <span class="text-3xl">🔒</span>
            </div>
            <h4 class="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-3">Secure & Private</h4>
            <p class="text-slate-600 dark:text-slate-300 text-base">Your data is encrypted and protected with enterprise-grade security</p>
          </div>
          <div class="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
              <span class="text-3xl">📊</span>
            </div>
            <h4 class="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">Real-time Analytics</h4>
            <p class="text-slate-600 dark:text-slate-300 text-base">Track clicks, locations, and devices in real-time with beautiful charts</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
