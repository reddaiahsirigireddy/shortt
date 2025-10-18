<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const url = ref('')
const shortUrl = ref('')
const copied = ref(false)
const loading = ref(false)
const stats = ref({ links: 0, clicks: 0, users: 0 })

let statsInterval = null

onMounted(() => {
  // Animate stats on mount
  statsInterval = setInterval(() => {
    stats.value = {
      links: stats.value.links < 847 ? stats.value.links + 17 : 847,
      clicks: stats.value.clicks < 2.4 ? Math.min(stats.value.clicks + 0.05, 2.4) : 2.4,
      users: stats.value.users < 12.3 ? Math.min(stats.value.users + 0.25, 12.3) : 12.3
    }
  }, 50)
})

onUnmounted(() => {
  if (statsInterval) {
    clearInterval(statsInterval)
  }
})

const formatNumber = (num) => {
  return Math.floor(num)
}

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
  
  loading.value = true
  try {
    const slug = generateRandomSlug()
    const response = await $fetch('/api/link/create', {
      method: 'POST',
      body: {
        url: url.value,
        slug: slug
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    if (response && response.shortLink) {
      shortUrl.value = response.shortLink
    }
  } catch (error) {
    console.error('Error shortening URL:', error)
    alert('Failed to create short link. Please try again.')
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
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
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
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
            </svg>
            <span>Trusted by 50K+ users worldwide</span>
          </div>
        </div>

        <!-- Main Heading -->
        <div class="text-center mb-12 animate-slide-up">
          <h1 class="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            Transform Long URLs
            <br />
            Into <span class="text-gradient">Powerful</span> Links
          </h1>
          <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The most advanced link management platform with real-time analytics, 
            custom branding, and enterprise-grade security.
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
                  type="text"
                  placeholder="Paste your long URL here..."
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
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
                </button>
                <NuxtLink
                  to="/dashboard/analysis"
                  class="btn-secondary group"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>Analytics</span>
                </NuxtLink>
              </div>
            </div>

            <!-- Result Display -->
            <div v-if="shortUrl" class="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 animate-fade-in">
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-semibold text-purple-400 uppercase tracking-wider">Your Short Link</span>
                <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold animate-pulse">NEW</span>
              </div>
              <div class="flex items-center gap-3">
                <input
                  type="text"
                  :value="shortUrl"
                  readonly
                  class="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium"
                />
                <button
                  @click="handleCopy"
                  class="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <svg v-if="copied" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {{ copied ? 'Copied!' : 'Copy' }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Real-time Stats -->
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 animate-fade-in">
          <NuxtLink to="/dashboard/links" class="stat-card group cursor-pointer">
            <div class="stat-icon-wrapper">
              <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <div class="stat-number">{{ formatNumber(stats.links) }}K+</div>
            <div class="stat-label">Links Created Today</div>
            <div class="stat-trend">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
              </svg>
              <span>+23% from yesterday</span>
            </div>
          </NuxtLink>

          <NuxtLink to="/dashboard/analysis" class="stat-card group cursor-pointer">
            <div class="stat-icon-wrapper">
              <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="stat-number">{{ stats.clicks.toFixed(1) }}M+</div>
            <div class="stat-label">Clicks Tracked</div>
            <div class="stat-trend">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
              </svg>
              <span>+18% from last week</span>
            </div>
          </NuxtLink>

          <NuxtLink to="/dashboard/realtime" class="stat-card group cursor-pointer">
            <div class="stat-icon-wrapper">
              <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div class="stat-number">{{ stats.users.toFixed(1) }}K+</div>
            <div class="stat-label">Active Users</div>
            <div class="stat-trend">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
              </svg>
              <span>+31% this month</span>
            </div>
          </NuxtLink>
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

        <!-- Social Proof -->
        <div class="text-center animate-fade-in">
          <p class="text-slate-400 mb-6">Trusted by leading companies worldwide</p>
          <div class="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div class="text-2xl font-bold text-white">GOOGLE</div>
            <div class="text-2xl font-bold text-white">MICROSOFT</div>
            <div class="text-2xl font-bold text-white">AMAZON</div>
            <div class="text-2xl font-bold text-white">NETFLIX</div>
          </div>
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

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}

.animate-scale-in {
  animation: scale-in 0.6s ease-out forwards;
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
  background: radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%);
  top: -250px;
  right: -250px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%);
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

.text-gradient {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f59e0b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease infinite;
}

.btn-primary {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px rgba(168,85,247,0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 20px 60px rgba(168,85,247,0.5);
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

.stat-card {
  position: relative;
  padding: 2rem;
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  text-decoration: none;
  display: block;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #a855f7, #ec4899, #f59e0b);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.stat-card:hover::before {
  transform: translateX(0);
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: rgba(168,85,247,0.3);
  background: rgba(255,255,255,0.05);
}

.stat-icon-wrapper {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(168,85,247,0.1);
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #cbd5e1;
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.stat-trend {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #86efac;
  font-size: 0.875rem;
  font-weight: 600;
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
  border-color: rgba(168,85,247,0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
  filter: drop-shadow(0 0 20px rgba(168,85,247,0.5));
}

@media (max-width: 768px) {
  h1 {
    font-size: 3rem !important;
  }
  .stat-number {
    font-size: 2rem;
  }
}
</style>
