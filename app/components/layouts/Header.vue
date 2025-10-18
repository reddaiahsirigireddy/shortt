<script setup>
import { Ellipsis, X } from 'lucide-vue-next'
import { GitHubIcon } from 'vue3-simple-icons'

const showMenu = ref(false)
const { github } = useAppConfig()
</script>

<template>
  <section class="pb-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
    <nav class="container relative z-50 h-24 select-none">
      <div
        class="container relative flex flex-wrap items-center justify-between h-24 px-0 mx-auto overflow-hidden font-medium border-b border-purple-500/20 md:overflow-visible lg:justify-center"
      >
        <div class="flex items-center justify-start w-1/4 h-full pr-4">
          <a
            href="/"
            title="urlsclickearn"
            class="flex items-center py-4 space-x-2 text-xl font-black text-white md:py-0 hover:text-purple-400 transition-colors"
          >
            <span
              class="flex items-center justify-center w-8 h-8 rounded-full"
            >
              <img
                src="/sink.png"
                alt="urlsclickearn"
                class="w-full h-full rounded-full"
              >
            </span>
            <span class="mx-2">urlsclickearn</span>
          </a>
        </div>

        <div
          class="top-0 left-0 items-start w-full h-full p-4 text-sm bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex"
          :class="{ 'flex fixed': showMenu, 'hidden': !showMenu }"
          @touchmove.prevent
        >
          <div
            class="flex-col w-full h-auto overflow-hidden rounded-lg bg-gradient-to-br from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-xl border border-purple-500/20 md:overflow-visible md:rounded-none md:relative md:flex md:flex-row md:bg-transparent md:border-none"
          >
            <a
              href="/"
              title="urlsclickearn"
              class="inline-flex items-center w-auto h-16 px-4 text-xl font-black leading-none text-white md:hidden"
            >
              <span
                class="flex items-center justify-center w-8 h-8 rounded-full"
              >
                <img
                  src="/sink.png"
                  alt="urlsclickearn"
                  class="w-full h-full rounded-full"
                >
              </span>
              <span class="mx-2">urlsclickearn</span>
            </a>
            <div class="w-auto mx-4" />
            <div
              class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:flex-row md:py-0"
            >
              <a
                class="w-full px-6 py-2 mr-0 text-slate-300 cursor-pointer hover:text-purple-400 transition-colors md:px-3 md:mr-2 lg:mr-3 md:w-auto"
                href="/dashboard"
                title="Dashboard"
              >Dashboard</a>
              <a
                :href="github"
                target="_blank"
                title="Github"
                class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-gradient-to-r from-purple-600 to-pink-600 md:px-3 md:w-auto md:rounded-full hover:from-purple-500 hover:to-pink-500 transition-all focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-purple-500 mr-2 shadow-lg hover:shadow-purple-500/50"
              >
                <GitHubIcon
                  class="w-5 h-5 mr-1"
                />
                GitHub</a>

              <SwitchLanguage />

              <SwitchTheme />
            </div>
          </div>
        </div>

        <div
          class="absolute right-0 flex flex-col items-center justify-center w-10 h-10 rounded-full cursor-pointer md:hidden hover:bg-purple-500/20 transition-colors"
          :class="{ 'right-2': showMenu }"
          @click="showMenu = !showMenu"
        >
          <Ellipsis
            v-show="!showMenu"
            class="w-6 h-6 text-white"
          />
          <X
            v-show="showMenu"
            class="w-6 h-6 text-white"
          />
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped>
/* Add subtle glow effect on hover */
a:hover {
  text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
}
</style>
