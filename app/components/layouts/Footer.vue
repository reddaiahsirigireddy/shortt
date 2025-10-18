<script setup>
import { BloggerIcon, GitHubIcon, GmailIcon, MastodonIcon, TelegramIcon } from 'vue3-simple-icons'

const { email, telegram, blog, mastodon, github } = useAppConfig()
</script>

<template>
  <section class="md:pt-6 bg-gradient-to-t from-purple-900/20 to-transparent">
    <div class="container flex flex-col items-center py-8 mx-auto sm:flex-row border-t border-purple-500/20">
      <a
        href="/"
        class="text-xl font-black leading-none bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent select-none hover:scale-105 transition-transform"
        title="urlsclickearn"
      >urlsclickearn</a>
      <a
        class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-purple-500/30 sm:mt-0 hover:text-purple-400 transition-colors"
        href="https://urlsclickearn.xyz"
        target="_blank"
        title="urlsclickearn"
      >
        &copy; {{ new Date().getFullYear() }} urlsclickearn.xyz
      </a>
      <span
        class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"
      >
        <a
          v-if="email"
          :href="`mailto:${email}`"
          title="Email"
          class="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform"
        >
          <span class="sr-only">Email</span>
          <GmailIcon class="w-6 h-6" />
        </a>
        <a
          v-if="telegram"
          :href="telegram"
          target="_blank"
          title="Telegram"
          class="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
        >
          <span class="sr-only">Telegram</span>
          <TelegramIcon class="w-6 h-6" />
        </a>
        <a
          v-if="blog"
          :href="blog"
          target="_blank"
          title="Blog"
          class="text-gray-400 hover:text-pink-400 transition-colors hover:scale-110 transform"
        >
          <span class="sr-only">Blog</span>
          <BloggerIcon class="w-6 h-6" />
        </a>
        <a
          v-if="mastodon"
          :href="mastodon"
          target="_blank"
          title="Mastodon"
          class="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform"
        >
          <span class="sr-only">Mastodon</span>
          <MastodonIcon class="w-6 h-6" />
        </a>
        <a
          v-if="github"
          :href="github"
          target="_blank"
          title="GitHub"
          class="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
        >
          <span class="sr-only">GitHub</span>
          <GitHubIcon class="w-6 h-6" />
        </a>
      </span>
    </div>
  </section>
</template>
