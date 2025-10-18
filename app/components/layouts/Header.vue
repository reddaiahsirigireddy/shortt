<script setup>
import { Ellipsis, X } from 'lucide-vue-next'
import { GitHubIcon } from 'vue3-simple-icons'

const showMenu = ref(false)
const { github } = useAppConfig()
</script>

<template>
  <section class="pb-6">
    <nav class="container relative z-50 h-24 select-none">
      <div
        class="container relative flex flex-wrap items-center justify-between h-24 px-0 mx-auto overflow-hidden font-medium border-b-2 border-gradient-to-r from-orange-500 to-pink-500 md:overflow-visible lg:justify-center backdrop-blur-sm"
      >
        <div class="flex items-center justify-start w-1/4 h-full pr-4">
          <a
            href="/"
            title="urlsclickearn"
            class="flex items-center py-4 space-x-3 text-xl font-black md:py-0 group"
          >
            <span
              class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:rotate-12"
            >
              <img
                src="/sink.png"
                alt="urlsclickearn"
                class="w-8 h-8 rounded-lg"
              >
            </span>
            <span class="mx-2 gradient-text">urlsclickearn</span>
          </a>
        </div>

        <div
          class="top-0 left-0 items-start w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex"
          :class="{ 'flex fixed': showMenu, 'hidden': !showMenu }"
          @touchmove.prevent
        >
          <div
            class="flex-col w-full h-auto overflow-hidden rounded-2xl glass-card md:overflow-visible md:rounded-none md:relative md:flex md:flex-row"
          >
            <a
              href="/"
              title="urlsclickearn"
              class="inline-flex items-center w-auto h-16 px-4 text-xl font-black leading-none gradient-text md:hidden"
            >
              <span
                class="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl shadow-lg"
              >
                <img
                  src="/sink.png"
                  alt="urlsclickearn"
                  class="w-8 h-8 rounded-lg"
                >
              </span>
              <span class="mx-2">urlsclickearn</span>
            </a>
            <div class="w-auto mx-4" />
            <div
              class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:flex-row md:py-0 gap-2"
            >
              <a
                class="w-full px-6 py-3 mr-0 text-gray-700 dark:text-gray-300 md:px-4 md:mr-2 lg:mr-3 md:w-auto rounded-xl hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-pink-500/10 transition-all duration-300 font-semibold"
                href="/dashboard"
                title="Dashboard"
              >Dashboard</a>
              <a
                :href="github"
                target="_blank"
                title="Github"
                class="inline-flex items-center w-full px-6 py-3 text-sm font-bold leading-4 text-white btn-gradient-orange md:px-5 md:w-auto rounded-xl mr-2 shadow-lg"
              >
                <GitHubIcon
                  class="w-5 h-5 mr-2"
                />
                GitHub</a>

              <SwitchLanguage />

              <SwitchTheme />
            </div>
          </div>
        </div>

        <div
          class="absolute right-0 flex flex-col items-center justify-center w-12 h-12 rounded-full cursor-pointer md:hidden hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-pink-500/20 transition-all duration-300"
          :class="{ 'right-2': showMenu }"
          @click="showMenu = !showMenu"
        >
          <Ellipsis
            v-show="!showMenu"
            class="w-6 h-6"
          />
          <X
            v-show="showMenu"
            class="w-6 h-6"
          />
        </div>
      </div>
    </nav>
  </section>
</template>
