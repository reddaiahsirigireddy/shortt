<script setup>
import { AreaChart, Hourglass, Link, Paintbrush, ServerOff, Sparkles } from 'lucide-vue-next'

const features = [
  {
    title: 'URL Shortening',
    description: 'Compress your URLs to their minimal length',
    icon: Link,
    bgColor: 'bg-gradient-to-br from-orange-500 to-orange-600',
    textColor: 'text-orange-600 dark:text-orange-400'
  },
  {
    title: 'Analytics',
    description: 'Monitor link analytics and gather insightful statistics',
    icon: AreaChart,
    bgColor: 'bg-gradient-to-br from-pink-500 to-pink-600',
    textColor: 'text-pink-600 dark:text-pink-400'
  },
  {
    title: 'Serverless',
    description: 'Deploy without the need for traditional servers',
    icon: ServerOff,
    bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    textColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    title: 'Customizable Slug',
    description: 'Support for personalized slugs and case sensitivity',
    icon: Paintbrush,
    bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500',
    textColor: 'text-green-600 dark:text-green-400'
  },
  {
    title: 'AI Slug',
    description: 'Leverage AI to generate slugs',
    icon: Sparkles,
    bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    textColor: 'text-yellow-600 dark:text-yellow-400'
  },
  {
    title: 'Link Expiration',
    description: 'Set expiration dates for your links',
    icon: Hourglass,
    bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600',
    textColor: 'text-purple-600 dark:text-purple-400'
  },
]
</script>

<template>
  <main class="pt-20 md:py-16">
    <div class="md:pb-16 text-center">
      <h2 class="text-5xl font-extrabold gradient-text lg:text-6xl lg:tracking-tight mb-4">
        Powerful Features
      </h2>
      <p class="my-6 text-xl text-slate-600 dark:text-slate-300 md:mb-0 max-w-2xl mx-auto">
        Everything you need for professional link management
      </p>
    </div>

    <div class="grid gap-10 md:gap-12 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="item in features"
        :key="item.title"
        class="flex flex-col items-start gap-6 p-8 rounded-3xl glass-card feature-card-hover group"
      >
        <div :class="['w-16 h-16 p-3 rounded-2xl shrink-0 flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300', item.bgColor]">
          <component :is="item.icon" class="w-full h-full text-white" />
        </div>
        <div>
          <h3 :class="['text-2xl font-bold mb-3', item.textColor]">
            {{ item.title }}
          </h3>
          <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    
    <!-- Second Ad Script -->
    <div class="mt-16 flex justify-center">
      <div class="p-6 rounded-2xl glass-card">
        <script type='text/javascript' src='//preferablyending.com/b1/c5/45/b1c5454db9d9699cc2f9072a41d2f475.js'></script>
      </div>
    </div>
    
    <div class="h-1.5 mt-20 hero-gradient shadow-lg rounded-full"></div>
  </main>
</template>
