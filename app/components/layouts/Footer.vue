<script setup>
import { BloggerIcon, GitHubIcon, GmailIcon, MastodonIcon, TelegramIcon } from 'vue3-simple-icons'

const { email, telegram, blog, mastodon, github } = useAppConfig()
</script>

<template>
  <section class="md:pt-10 mt-auto">
    <div class="h-1.5 hero-gradient shadow-lg mb-8"></div>
    
    <div class="container flex flex-col items-center py-10 mx-auto sm:flex-row glass-card rounded-3xl">
      <a
        href="/"
        class="text-2xl font-black leading-none gradient-text select-none logo"
        title="urlsclickearn"
      >urlsclickearn</a>
      <a
        class="mt-4 text-sm text-slate-600 dark:text-slate-300 sm:ml-4 sm:pl-4 sm:border-l-2 border-orange-500/30 sm:mt-0 hover:text-gradient-orange transition-colors duration-300"
        href="https://urlsclickearn.xyz"
        target="_blank"
        title="urlsclickearn"
      >
        &copy; {{ new Date().getFullYear() }} urlsclickearn.xyz
      </a>
      <span
        class="inline-flex justify-center mt-6 space-x-6 sm:ml-auto sm:mt-0 sm:justify-start"
      >
        <a
          v-if="email"
          :href="`mailto:${email}`"
          title="Email"
          class="text-slate-500 hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
        >
          <span class="sr-only">Email</span>
          <GmailIcon class="w-7 h-7" />
        </a>
        <a
          v-if="telegram"
          :href="telegram"
          target="_blank"
          title="Telegram"
          class="text-slate-500 hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
        >
          <span class="sr-only">Telegram</span>
          <TelegramIcon class="w-7 h-7" />
        </a>
        <a
          v-if="blog"
          :href="blog"
          target="_blank"
          title="Blog"
          class="text-slate-500 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
        >
          <span class="sr-only">Blog</span>
          <BloggerIcon class="w-7 h-7" />
        </a>
        <a
          v-if="mastodon"
          :href="mastodon"
          target="_blank"
          title="Mastodon"
          class="text-slate-500 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
        >
          <span class="sr-only">Mastodon</span>
          <MastodonIcon class="w-7 h-7" />
        </a>
        <a
          v-if="github"
          :href="github"
          target="_blank"
          title="GitHub"
          class="text-slate-500 hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
        >
          <span class="sr-only">GitHub</span>
          <GitHubIcon class="w-7 h-7" />
        </a>
      </span>
    </div>
    
    <!-- Social Bar Ad Script - Before closing body tag -->
    <div class="mt-8 flex justify-center">
      <div class="p-4 rounded-2xl glass-card">
        <script type='text/javascript' src='//preferablyending.com/b1/c5/45/b1c5454db9d9699cc2f9072a41d2f475.js'></script>
      </div>
    </div>
  </section>
</template>
