<script setup>
import { onMounted, ref } from 'vue'
const url = ref('')
const slug = ref('')
const short = ref('')
const message = ref('')
const messageType = ref('success')
const recentList = ref([])
const copied = ref(false)
const showAdModal = ref(false)
const adTimer = ref(5)
const showExpiryNotification = ref(false)

// Animated stats
const animatedStats = ref({
  links: 0,
  clicks: 0,
  users: 0,
})

function formatTime(timestamp) {
  if (!timestamp)
    return 'Just now'
  const date = new Date(timestamp)
  const now = new Date()
  const diff = Math.floor((now - date) / 1000)

  if (diff < 60)
    return 'Just now'
  if (diff < 3600)
    return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400)
    return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}

function shortLinkText(item) {
  if (!item)
    return ''
  if (item?.link?.slug)
    return item.link.slug
  if (item?.slug)
    return item.slug
  if (item?.name?.startsWith('link:'))
    return item.name.replace(/^link:/, '')
  if (item?.key)
    return item.key
  return ''
}

function formatShortLink(item) {
  if (!item)
    return '#'
  const slug = shortLinkText(item)
  return slug ? `/${slug}` : '#'
}

function originalLinkText(item) {
  if (!item)
    return ''
  if (item?.link?.url)
    return item.link.url
  if (item?.metadata?.url)
    return item.metadata.url
  if (item?.original)
    return item.original
  return item?.url ?? ''
}

function formatClicks(item) {
  const c = item?.link?.clicks ?? item?.metadata?.clicks ?? item?.clicks ?? 0
  if (c > 1000)
    return `${(c / 1000).toFixed(1)}k`
  return c.toString()
}

async function createShort() {
  message.value = ''
  short.value = ''

  if (!url.value) {
    message.value = 'Please enter a valid URL'
    messageType.value = 'error'
    return
  }

  try {
    const body = { url: url.value }
    if (slug.value)
      body.slug = slug.value

    const res = await fetch('/api/link/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const error = await res.json()
      message.value = error?.message || 'Failed to create short link'
      messageType.value = 'error'
      return
    }

    const data = await res.json()
    short.value = data?.shortLink || `${location.origin}/${data?.link?.slug || data?.slug}`
    message.value = 'Short URL created successfully!'
    messageType.value = 'success'
    url.value = ''
    slug.value = ''

    // Show expiry notification
    showExpiryNotification.value = true
    setTimeout(() => {
      showExpiryNotification.value = false
    }, 5000)

    await loadRecent()
  }
  catch (err) {
    message.value = err?.message || 'Something went wrong'
    messageType.value = 'error'
  }
}

async function loadRecent() {
  try {
    const res = await fetch('/api/link/list?limit=6')
    if (!res.ok)
      return

    const data = await res.json()
    if (Array.isArray(data))
      recentList.value = data
    else if (data?.keys)
      recentList.value = data.keys
    else if (data?.list)
      recentList.value = data.list
    else recentList.value = []
  }
  catch (_e) {
    recentList.value = []
  }
}

function copyShort() {
  if (!short.value)
    return
  navigator.clipboard.writeText(short.value)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

function selectAll(event) {
  event.target.select()
}

function openQR() {
  window.open(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(short.value)}`, '_blank')
}

function shareLink(platform) {
  const encodedUrl = encodeURIComponent(short.value)
  const urls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=Check out this link!`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }
  window.open(urls[platform], '_blank', 'width=600,height=400')
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Animate stats on mount
function animateStats() {
  const targetStats = { links: 500, clicks: 10, users: 50 }
  const duration = 2000
  const steps = 60
  const interval = duration / steps

  let currentStep = 0
  const timer = setInterval(() => {
    currentStep++
    const progress = currentStep / steps

    animatedStats.value = {
      links: Math.floor(targetStats.links * progress),
      clicks: Math.floor(targetStats.clicks * progress),
      users: Math.floor(targetStats.users * progress),
    }

    if (currentStep >= steps)
      clearInterval(timer)
  }, interval)
}

onMounted(() => {
  loadRecent()
  animateStats()

  // Load Native Async Ad Banner script
  const nativeScript = document.createElement('script')
  nativeScript.async = true
  nativeScript.setAttribute('data-cfasync', 'false')
  nativeScript.src = '//preferablyending.com/baafe128a08c806c01cbd4b9d77ced82/invoke.js'
  document.getElementById('container-baafe128a08c806c01cbd4b9d77ced82')?.appendChild(nativeScript)

  // Load Popunder Ad script
  const popunderScript = document.createElement('script')
  popunderScript.type = 'text/javascript'
  popunderScript.src = '//preferablyending.com/84/38/22/84382233fb94a7cfb87278684808293a.js'
  document.getElementById('popunder-ad-container')?.appendChild(popunderScript)
})
</script>

<script>
export default {
  head() {
    return {
      meta: [
        {
          name: 'b9c95a72416a096e5d809fd55035ba8b1b0c2fa0',
          content: 'b9c95a72416a096e5d809fd55035ba8b1b0c2fa0',
        },
        {
          name: 'referrer',
          content: 'no-referrer-when-downgrade',
        },
      ],
      script: [
        {
          'src': 'https://richinfo.co/richpartners/pops/js/richads-pu-ob.js',
          'data-pubid': '987577',
          'data-siteid': '372546',
          'async': true,
          'data-cfasync': 'false',
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <Header />
    <main>
      <!-- HERO SECTION -->
      <section class="hero-gradient min-h-screen relative overflow-hidden">
        <!-- Animated Background -->
        <div class="absolute inset-0">
          <div class="floating-circle circle-1"></div>
          <div class="floating-circle circle-2"></div>
          <div class="floating-circle circle-3"></div>
        </div>

        <div class="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <div class="text-center mb-12 animate-fade-in">
            <h1 class="hero-title">
              <span class="gradient-text">Shorten</span> Your Links,
              <span class="gradient-text">Amplify</span> Your Reach
            </h1>
            <p class="hero-subtitle">
              Transform long URLs into powerful short links with real-time analytics
            </p>
          </div>

          <!-- URL SHORTENER CARD -->
          <div class="glass-card max-w-4xl mx-auto">
            <form class="space-y-6" @submit.prevent="createShort">
              <div class="grid md:grid-cols-3 gap-4">
                <div class="md:col-span-2">
                  <label class="form-label">
                    <span class="label-icon">🔗</span>
                    Paste your long URL here
                  </label>
                  <input
                    v-model="url"
                    type="url"
                    class="form-input"
                    placeholder="https://example.com/very-long-url-here"
                    required
                  >
                </div>
                <div>
                  <label class="form-label">
                    <span class="label-icon">✨</span>
                    Custom alias (optional)
                  </label>
                  <input
                    v-model="slug"
                    type="text"
                    class="form-input"
                    placeholder="my-link"
                  >
                </div>
              </div>

              <div class="flex flex-wrap gap-4 items-center">
                <button type="submit" class="btn-primary group">
                  <span>Shorten URL</span>
                  <svg class="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <NuxtLink to="/dashboard" class="btn-secondary">
                  <span class="btn-icon">📊</span>
                  Dashboard
                </NuxtLink>
              </div>
            </form>

            <!-- Success Message -->
            <transition name="slide-up">
              <div v-if="message" class="alert" :class="[messageType === 'success' ? 'alert-success' : 'alert-error']">
                <div class="alert-icon">
                  {{ messageType === 'success' ? '✅' : '⚠️' }}
                </div>
                <span>{{ message }}</span>
              </div>
            </transition>

            <!-- Shortened URL Result -->
            <transition name="scale-in">
              <div v-if="short" class="result-card">
                <div class="result-header">
                  <span class="result-badge">NEW</span>
                  <span class="result-title">Your short link is ready!</span>
                </div>
                <div class="result-content">
                  <input
                    :value="short"
                    readonly
                    class="result-input"
                    @click="selectAll"
                  >
                  <button class="btn-copy" @click="copyShort">
                    <span v-if="!copied">Copy</span>
                    <span v-else>Copied!</span>
                  </button>
                  <button class="btn-qr" @click="openQR">
                    <span>QR</span>
                  </button>
                </div>
                <div class="result-actions">
                  <button class="share-btn twitter" @click="shareLink('twitter')">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  </button>
                  <button class="share-btn facebook" @click="shareLink('facebook')">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </button>
                  <button class="share-btn linkedin" @click="shareLink('linkedin')">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </button>
                </div>
              </div>
            </transition>
          </div>

          <!-- Expiry Notification -->
          <transition name="notification-slide">
            <div v-if="showExpiryNotification" class="expiry-notification">
              <div class="notification-content">
                <div class="notification-icon">⏰</div>
                <div class="notification-text">
                  <p class="notification-title">This link expires in 4 hours</p>
                  <p class="notification-subtitle">Login to create permanent links</p>
                </div>
                <button class="notification-close" @click="showExpiryNotification = false">
                  ✕
                </button>
              </div>
            </div>
          </transition>

          <!-- Quick Stats -->
          <div class="quick-stats">
            <div class="stat-item">
              <span class="stat-number">{{ animatedStats.links }}K+</span>
              <span class="stat-label">Links Created</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ animatedStats.clicks }}M+</span>
              <span class="stat-label">Clicks Tracked</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ animatedStats.users }}K+</span>
              <span class="stat-label">Happy Users</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Native Async Ad Banner -->
      <section>
        <div id="container-baafe128a08c806c01cbd4b9d77ced82"></div>
      </section>

      <!-- FEATURES SECTION -->
      <section class="features-section">
        <div class="container mx-auto px-4">
          <div class="section-header">
            <span class="section-badge">FEATURES</span>
            <h2 class="section-title">
              Everything you need to manage links
            </h2>
            <p class="section-subtitle">
              Powerful tools to shorten, share, and track your URLs
            </p>
          </div>

          <div class="features-grid">
            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">⚡</div>
              </div>
              <h3 class="feature-title">Lightning Fast</h3>
              <p class="feature-desc">
                Create short links instantly with our optimized infrastructure
              </p>
              <div class="feature-hover-effect"></div>
            </div>

            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">📊</div>
              </div>
              <h3 class="feature-title">Real-time Analytics</h3>
              <p class="feature-desc">
                Track clicks, locations, devices, and more in real-time
              </p>
              <div class="feature-hover-effect"></div>
            </div>

            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">🎨</div>
              </div>
              <h3 class="feature-title">Custom Aliases</h3>
              <p class="feature-desc">
                Create memorable branded short links with custom aliases
              </p>
              <div class="feature-hover-effect"></div>
            </div>

            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">📱</div>
              </div>
              <h3 class="feature-title">QR Codes</h3>
              <p class="feature-desc">
                Generate QR codes for your links instantly
              </p>
              <div class="feature-hover-effect"></div>
            </div>

            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">🔒</div>
              </div>
              <h3 class="feature-title">Secure & Reliable</h3>
              <p class="feature-desc">
                Enterprise-grade security with 99.9% uptime guarantee
              </p>
              <div class="feature-hover-effect"></div>
            </div>

            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">🤖</div>
              </div>
              <h3 class="feature-title">AI-Powered</h3>
              <p class="feature-desc">
                Smart slug suggestions powered by artificial intelligence
              </p>
              <div class="feature-hover-effect"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Popunder Ad -->
      <section>
        <div id="popunder-ad-container"></div>
      </section>

      <!-- RECENT LINKS -->
      <section class="recent-section">
        <div class="container mx-auto px-4">
          <div class="section-header">
            <span class="section-badge">TRENDING</span>
            <h2 class="section-title">Recently Created Links</h2>
          </div>

          <div class="links-container">
            <div v-for="(link, idx) in recentList" :key="idx" class="link-card">
              <div class="link-header">
                <a :href="formatShortLink(link)" target="_blank" class="link-short">
                  <span class="link-icon">🔗</span>
                  {{ shortLinkText(link) }}
                </a>
                <span class="link-badge">{{ formatTime(link.createdAt) }}</span>
              </div>
              <div class="link-original">
                {{ originalLinkText(link) }}
              </div>
              <div class="link-stats">
                <span class="stat-item">
                  <span class="stat-icon">👁</span>
                  {{ formatClicks(link) }}
                </span>
                <span class="stat-item">
                  <span class="stat-icon">📍</span>
                  {{ link.country || 'Global' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA SECTION -->
      <section class="cta-section">
        <div class="container mx-auto px-4 text-center">
          <h2 class="cta-title">Start shortening links today</h2>
          <p class="cta-subtitle">
            Join thousands of users who trust us with their links
          </p>
          <div class="cta-buttons">
            <button class="btn-primary btn-large" @click="scrollToTop">
              Get Started Free
            </button>
            <NuxtLink to="/dashboard" class="btn-secondary btn-large">
              View Dashboard
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- FOOTER AD SPACE -->
      <div class="footer-ad">
        <div class="container mx-auto px-4">
          <div class="ad-wrapper">
            <div class="ad-placeholder-footer">
              Advertisement Space
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* (All the existing styles remain the same) */
</style>
