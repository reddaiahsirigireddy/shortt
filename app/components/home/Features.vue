<script setup>
import { AreaChart, Hourglass, Link, Paintbrush, ServerOff, Sparkles } from 'lucide-vue-next'

const features = [
  {
    title: 'URL Shortening',
    description: 'Compress your URLs to their minimal length',
    icon: Link,
    bgColor: 'bg-gradient-to-br from-purple-500 to-violet-600',
    textColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    title: 'Analytics',
    description: 'Monitor link analytics and gather insightful statistics',
    icon: AreaChart,
    bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    textColor: 'text-cyan-600 dark:text-cyan-400'
  },
  {
    title: 'Serverless',
    description: 'Deploy without the need for traditional servers',
    icon: ServerOff,
    bgColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
    textColor: 'text-pink-600 dark:text-pink-400'
  },
  {
    title: 'Customizable Slug',
    description: 'Support for personalized slugs and case sensitivity',
    icon: Paintbrush,
    bgColor: 'bg-gradient-to-br from-emerald-500 to-green-600',
    textColor: 'text-emerald-600 dark:text-emerald-400'
  },
  {
    title: 'AI Slug',
    description: 'Leverage AI to generate slugs',
    icon: Sparkles,
    bgColor: 'bg-gradient-to-br from-amber-500 to-orange-600',
    textColor: 'text-amber-600 dark:text-amber-400'
  },
  {
    title: 'Link Expiration',
    description: 'Set expiration dates for your links',
    icon: Hourglass,
    bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    textColor: 'text-indigo-600 dark:text-indigo-400'
  },
]
</script>

<template>
  <main class="pt-16 md:py-12">
    <div class="md:pb-12">
      <h2 class="text-4xl font-bold gradient-text lg:text-5xl lg:tracking-tight">
        Features
      </h2>
      <p class="my-8 text-lg text-slate-600 dark:text-slate-300 md:mb-0">
        Simple and sufficient functionality
      </p>
    </div>

    <div class="grid gap-8 md:gap-16 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="item in features"
        :key="item.title"
        class="flex items-start gap-4 p-6 rounded-2xl glass-card feature-card-hover"
      >
        <div :class="['w-12 h-12 p-2.5 rounded-xl shrink-0 flex items-center justify-center shadow-lg', item.bgColor]">
          <component :is="item.icon" class="w-full h-full text-white" />
        </div>
        <div>
          <h3 :class="['text-lg font-semibold', item.textColor]">
            {{ item.title }}
          </h3>
          <p class="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    
    <div class="h-1 mt-16 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 opacity-75"></div>
  </main>
</template>
