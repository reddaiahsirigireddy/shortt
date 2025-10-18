<script setup>
import { BloggerIcon, GitHubIcon, GmailIcon, MastodonIcon, TelegramIcon } from 'vue3-simple-icons'

const { email, telegram, blog, mastodon, github } = useAppConfig()
</script>

<template>
  <section class="md:pt-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 border-t border-purple-500/20">
    <div class="container flex flex-col items-center py-8 mx-auto sm:flex-row">
      <a
        href="/"
        class="text-xl font-black leading-none text-white select-none hover:text-purple-400 transition-colors logo"
        title="urlsclickearn"
      >urlsclickearn</a>
      <a
        class="mt-4 text-sm text-slate-400 hover:text-purple-400 transition-colors sm:ml-4 sm:pl-4 sm:border-l sm:border-purple-500/30 sm:mt-0"
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
          class="text-slate-400 hover:text-purple-400 transition-all hover:scale-110 transform"
        >
          <span class="sr-only">Email</span>
          <GmailIcon class="w-6 h-6" />
        </a>
        <a
          v-if="telegram"
          :href="telegram"
          target="_blank"
          title="Telegram"
          class="text-slate-400 hover:text-purple-400 transition-all hover:scale-110 transform"
        >
          <span class="sr-only">Telegram</span>
          <TelegramIcon class="w-6 h-6" />
        </a>
        <a
          v-if="blog"
          :href="blog"
          target="_blank"
          title="Blog"
          class="text-slate-400 hover:text-purple-400 transition-all hover:scale-110 transform"
        >
          <span class="sr-only">Blog</span>
          <BloggerIcon class="w-6 h-6" />
        </a>
        <a
          v-if="mastodon"
          :href="mastodon"
          target="_blank"
          title="Mastodon"
          class="text-slate-400 hover:text-purple-400 transition-all hover:scale-110 transform"
        >
          <span class="sr-only">Mastodon</span>
          <MastodonIcon class="w-6 h-6" />
        </a>
        <a
          v-if="github"
          :href="github"
          target="_blank"
          title="GitHub"
          class="text-slate-400 hover:text-purple-400 transition-all hover:scale-110 transform"
        >
          <span class="sr-only">GitHub</span>
          <GitHubIcon class="w-6 h-6" />
        </a>
      </span>
    </div>
    
    <!-- Social Bar Ad Script - Before closing body tag -->
    <script type='text/javascript' src='//preferablyending.com/b1/c5/45/b1c5454db9d9699cc2f9072a41d2f475.js'></script>
  </section>
</template>

<style scoped>
/* Add glow effect on icon hover */
a:hover svg {
  filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.6));
}
</style>
