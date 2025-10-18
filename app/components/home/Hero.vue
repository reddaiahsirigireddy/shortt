<script setup>
import { AreaChart } from 'lucide-vue-next'
import { GitHubIcon } from 'vue3-simple-icons'
import heroImg from '@/assets/images/hero.svg?raw'

const { github } = useAppConfig()
</script>

<template>
  <main class="relative grid pt-12 pb-12 lg:grid-cols-2 place-items-center md:py-16 overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <div class="relative z-10">
      <div class="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20">
        <span class="text-sm font-semibold text-gradient-orange">🚀 Fast & Secure URL Shortening</span>
      </div>
      
      <h1 class="text-6xl font-extrabold gradient-text lg:text-7xl xl:text-8xl lg:tracking-tight xl:tracking-tighter mb-6 leading-tight">
        urlsclickearn
      </h1>
      
      <p class="max-w-xl mt-6 text-xl text-slate-700 dark:text-slate-200 leading-relaxed">
        A <span class="font-bold text-gradient-orange">Simple</span> / <span class="font-bold text-gradient-orange">Speedy</span> / <span class="font-bold text-gradient-orange">Secure</span> Link Shortener with Advanced Analytics, 100% powered by Cloudflare.
      </p>
      
      <div class="flex flex-col gap-4 mt-8 sm:flex-row">
        <a
          href="/dashboard"
          target="_blank"
          class="btn-gradient-orange flex items-center justify-center gap-2 px-8 py-4 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
          rel="noopener"
        >
          <AreaChart class="w-6 h-6" />
          Dashboard
        </a>
        <a
          :href="github"
          target="_blank"
          rel="noopener"
          class="btn-gradient-pink flex items-center justify-center gap-2 px-8 py-4 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
        >
          <GitHubIcon class="w-6 h-6" />
          GitHub Repo
        </a>
      </div>
      
      <!-- First Ad Script -->
      <div class="mt-10 p-4 rounded-xl glass-card">
        <script type="text/javascript">
          atOptions = {
            'key' : '8b24d51ee53647b7adbb2cf21ec88c9a',
            'format' : 'iframe',
            'height' : 600,
            'width' : 160,
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="//preferablyending.com/8b24d51ee53647b7adbb2cf21ec88c9a/invoke.js"></script>
      </div>
    </div>
    
    <div class="hidden py-6 md:block relative">
      <div class="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
      <div class="relative w-[512px] transition-transform hover:scale-105 duration-500 hover:rotate-2" v-html="heroImg" />
    </div>
  </main>
  <div class="h-1.5 hero-gradient shadow-lg"></div>
</template>
