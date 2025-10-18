<script setup>
import { AreaChart } from 'lucide-vue-next'
import { GitHubIcon } from 'vue3-simple-icons'
import heroImg from '@/assets/images/hero.svg?raw'

const { title, description, github } = useAppConfig()
</script>

<template>
  <main class="relative grid pt-8 pb-8 lg:grid-cols-2 place-items-center md:py-12">
    <div>
      <h1 class="text-5xl font-bold gradient-text lg:text-6xl xl:text-7xl lg:tracking-tight xl:tracking-tighter">
        {{ title }}
      </h1>
      <p class="max-w-xl mt-4 text-lg text-slate-600 dark:text-slate-300">
        {{ description }}
      </p>
      <div class="flex flex-col gap-3 mt-6 sm:flex-row">
        <a
          href="/dashboard"
          target="_blank"
          class="btn-gradient-purple flex items-center justify-center gap-1 px-6 py-3 text-white rounded-lg font-medium shadow-lg"
          rel="noopener"
        >
          <AreaChart class="w-5 h-5" />
          {{ $t('dashboard.title') }}
        </a>
        <a
          :href="github"
          target="_blank"
          rel="noopener"
          class="btn-gradient-pink flex items-center justify-center gap-1 px-6 py-3 text-white rounded-lg font-medium shadow-lg"
        >
          <GitHubIcon class="w-5 h-5" />
          GitHub Repo
        </a>
      </div>
    </div>
    <div class="hidden py-6 md:block">
      <div class="w-[512px] transition-transform hover:scale-105 duration-300" v-html="heroImg" />
    </div>
  </main>
  <div class="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75"></div>
</template>
