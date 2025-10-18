<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const url = ref('')
const shortUrl = ref('')
const copied = ref(false)
const loading = ref(false)

const realStats = ref({ links: 0, clicks: 0, users: 0 })

onMounted(async () => {
  // Optionally fetch real stats from your API if available
})

const generateRandomSlug = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let slug = ''
  for (let i = 0; i < 6; i++) {
    slug += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return slug
}

const handleShorten = async () => {
  if (!url.value || loading.value) return
  
  try {
    new URL(url.value)
  } catch (e) {
    alert('Please enter a valid URL (include http:// or https://)')
    return
  }
  
  loading.value = true
  shortUrl.value = ''
  
  try {
    const slug = generateRandomSlug()
    
    const response = await $fetch('/api/link/create', {
      method: 'POST',
      body: {
        url: url.value,
        slug: slug
      }
    })
    
    if (response && response.shortLink) {
      shortUrl.value = response.shortLink
    } else {
      throw new Error('Failed to create short link')
    }
  } catch (error) {
    console.error('Error shortening URL:', error)
    
    if (error.status === 401) {
      alert('Please log in to the dashboard to create short links.')
    } else {
      alert('Failed to create short link. Please try again or log in to the dashboard.')
    }
  } finally {
    loading.value = false
  }
}

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(shortUrl.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
    const textArea = document.createElement('textarea')
    textArea.value = shortUrl.value
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-cyan-900 relative overflow-hidden">
    <!-- Animated Background Grid -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-grid-pattern opacity-20" />
      <div class="gradient-orb orb-1" />
      <div class="gradient-orb orb-2" />
      <div class="gradient-orb orb-3" />
    </div>

    <!-- Hero Section -->
    <div class="relative z-10">
      <div class="container mx-auto px-4 py-20">
        <!-- Badge -->
        <div class="flex justify-center mb-8 animate-fade-in">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-medium">
            <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
            </svg>
            <span>Trusted by thousands worldwide</span>
          </div>
        </div>

        <!-- Main Heading -->
        <div class="text-center mb-12 animate-slide-up">
          <h1 class="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Transform Long URLs
            <br />
            Into <span class="text-gradient-primary">Powerful</span> Links
          </h1>
          <p class="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A simple, speedy, and secure link shortener with analytics, 100% powered by Cloudflare.
          </p>
        </div>

        <!-- URL Shortener Card -->
        <div class="max-w-4xl mx-auto mb-16 animate-scale-in">
          <div class="glass-morphism p-8 rounded-3xl shadow-2xl border border-white/10">
            <div class="space-y-6">
              <!-- Input Section -->
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <input
                  v-model="url"
                  type="url"
                  placeholder="Paste your long URL here (e.g., https://example.com)..."
                  class="w-full pl-14 pr-4 py-5 bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-slate-400 text-lg focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300"
                  @keyup.enter="handleShorten"
                />
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <button
                  @click="handleShorten"
                  :disabled="!url || loading"
                  class="flex-1 btn-primary group"
                >
                  <svg v-if="!loading" class="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
                  </svg>
                  <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ loading ? 'Shortening...' : 'Shorten URL' }}</span>
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
                </button>
                <NuxtLink
                  to="/dashboard"
                  class="btn-secondary group"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>Dashboard</span>
                </NuxtLink>
              </div>
            </div>

            <!-- Result Display -->
            <div v-if="shortUrl" class="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl border border-purple-500/20 animate-fade-in">
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-semibold text-purple-400 uppercase tracking-wider">Your Short Link</span>
                <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold animate-pulse">NEW</span>
              </div>
              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="text"
                  :value="shortUrl"
                  readonly
                  class="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium"
                />
                <button
                  @click="handleCopy"
                  class="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <svg v-if="copied" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature Highlights -->
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in mb-20">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3 class="text-xl font-bold text-white mb-3">Lightning Fast</h3>
            <p class="text-slate-400">Generate short links in milliseconds with our optimized infrastructure</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3 class="text-xl font-bold text-white mb-3">Advanced Analytics</h3>
            <p class="text-slate-400">Track every click with detailed insights and real-time data</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3 class="text-xl font-bold text-white mb-3">Enterprise Security</h3>
            <p class="text-slate-400">Bank-level encryption and GDPR compliant data protection</p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center animate-fade-in">
          <p class="text-slate-400 mb-6">Ready to get started?</p>
          <NuxtLink
            to="/dashboard"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            <span>Access Dashboard</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradient-shift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  animation: gradient-shift 20s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%);
  top: -250px;
  right: -250px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%);
  bottom: -200px;
  left: -200px;
  animation-delay: 7s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  animation-delay: 14s;
}

.glass-morphism {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.btn-primary {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px rgba(139,92,246,0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 20px 60px rgba(139,92,246,0.5);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
  background: rgba(255,255,255,0.05);
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 1rem;
  border: 2px solid rgba(255,255,255,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}

.feature-card {
  padding: 2rem;
  background: rgba(255,255,255,0.02);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255,255,255,0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  background: rgba(255,255,255,0.05);
  border-color: rgba(139,92,246,0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
  filter: drop-shadow(0 0 20px rgba(139,92,246,0.5));
}
</style>
