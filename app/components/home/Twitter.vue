<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { XIcon } from 'vue3-simple-icons'

const { twitter } = useAppConfig()
</script>

<template>
  <a
    :href="twitter"
    target="_blank"
    title="X(Twitter)"
    class="inline-flex items-center px-4 py-2 mx-auto my-4 space-x-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    <XIcon class="w-4 h-4" />
    <Separator orientation="vertical" class="h-4 bg-white/30" />
    <span>{{ $t('home.twitter.follow') }}</span>
    <ArrowRight class="w-4 h-4" />
  </a>
</template>
