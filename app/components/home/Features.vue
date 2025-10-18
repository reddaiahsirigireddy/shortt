<script setup>
import { AreaChart, Hourglass, Link, Paintbrush, ServerOff, Sparkles } from 'lucide-vue-next'

const { t } = useI18n()
const features = computed(() => [
  {
    title: t('home.features.url_shortening.title'),
    description: t('home.features.url_shortening.description'),
    icon: Link,
    bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
    textColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    title: t('home.features.analytics.title'),
    description: t('home.features.analytics.description'),
    icon: AreaChart,
    bgColor: 'bg-gradient-to-br from-pink-500 to-rose-500',
    textColor: 'text-pink-600 dark:text-pink-400'
  },
  {
    title: t('home.features.serverless.title'),
    description: t('home.features.serverless.description'),
    icon: ServerOff,
    bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    textColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    title: t('home.features.customizable_slug.title'),
    description: t('home.features.customizable_slug.description'),
    icon: Paintbrush,
    bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500',
    textColor: 'text-green-600 dark:text-green-400'
  },
  {
    title: t('home.features.ai_slug.title'),
    description: t('home.features.ai_slug.description'),
    icon: Sparkles,
    bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    textColor: 'text-yellow-600 dark:text-yellow-400'
  },
  {
    title: t('home.features.link_expiration.title'),
    description: t('home.features.link_expiration.description'),
    icon: Hourglass,
    bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    textColor: 'text-indigo-600 dark:text-indigo-400'
  },
])
</script>

<template>
  <main class="pt-16 md:py-12">
    <div class="md:pb-12">
      <h2 class="text-4xl font-bold gradient-text lg:text-5xl lg:tracking-tight">
        {{ $t('home.features.title') }}
      </h2>
      <p class="my-8 text-lg text-slate-600 dark:text-slate-300 md:mb-0">
        {{ $t('home.features.subtitle') }}
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
    
    <div class="h-1 mt-16 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75"></div>
  </main>
</template>
