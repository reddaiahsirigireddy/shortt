<script setup>
import { Ellipsis, X } from 'lucide-vue-next'
import { GitHubIcon } from 'vue3-simple-icons'

const showMenu = ref(false)
const { github } = useAppConfig()
</script>

<template>
  <section class="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-lg">
    <nav class="container relative z-50 h-16 select-none">
      <div
        class="container relative flex flex-wrap items-center justify-between h-16 px-4 mx-auto overflow-hidden font-medium md:overflow-visible lg:justify-center"
      >
        <div class="flex items-center justify-start w-1/4 h-full pr-4">
          <a
            href="/"
            title="urlsclickearn"
            class="flex items-center space-x-2 text-xl font-black text-white hover:text-yellow-300 transition-colors"
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
          class="top-0 left-0 items-start w-full h-full p-4 text-sm bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-opacity-95 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex"
          :class="{ 'flex fixed': showMenu, 'hidden': !showMenu }"
          @touchmove.prevent
        >
          <div
            class="flex-col w-full h-auto overflow-hidden rounded-lg bg-gradient-to-r from-purple-700/95 via-pink-600/95 to-orange-600/95 backdrop-blur-xl border border-white/10 md:overflow-visible md:rounded-none md:relative md:flex md:flex-row md:bg-transparent md:border-none"
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
                class="w-full px-6 py-2 mr-0 text-white/90 cursor-pointer hover:text-yellow-300 transition-colors md:px-3 md:mr-2 lg:mr-3 md:w-auto"
                href="/dashboard"
                title="Dashboard"
              >Dashboard</a>
              <a
                :href="github"
                target="_blank"
                title="Github"
                class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-gradient-to-r from-yellow-400 to-orange-500 md:px-3 md:w-auto md:rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-yellow-400 mr-2 shadow-lg hover:shadow-yellow-500/50"
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
          class="absolute right-0 flex flex-col items-center justify-center w-10 h-10 rounded-full cursor-pointer md:hidden hover:bg-white/10 transition-colors"
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
  text-shadow: 0 0 20px rgba(255, 237, 78, 0.5);
}

/* Remove glow for icon links */
a:hover svg {
  filter: drop-shadow(0 0 10px rgba(255, 237, 78, 0.6));
}
</style>
