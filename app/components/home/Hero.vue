<script setup>
import { AreaChart } from 'lucide-vue-next'
import { GitHubIcon } from 'vue3-simple-icons'

const { github } = useAppConfig()
</script>

<template>
  <main class="relative grid pt-8 pb-8 lg:place-items-center md:py-12 hero-section">
    <div class="hero-content">
      <!-- Main Title -->
      <h1 class="hero-title">
        Urlsclickearn
      </h1>
      
      <!-- Subtitle -->
      <p class="hero-subtitle">
        A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col gap-3 mt-6 sm:flex-row cta-buttons">
        <a
          href="/dashboard"
          target="_blank"
          class="btn-dashboard"
          rel="noopener"
        >
          <AreaChart class="w-5 h-5" />
          Dashboard
        </a>
        <a
          :href="github"
          target="_blank"
          rel="noopener"
          class="btn-github"
        >
          <GitHubIcon class="w-5 h-5" />
          GitHub Repo
        </a>
      </div>
      
      <!-- First Ad Script -->
      <div class="mt-8 ad-container">
        <script type="text/javascript">
          atOptions = {
            'key' : '8b24d51ee53647b7adbb2cf21ec88c9a',
            'format' : 'iframe',
            'height' : 600,
            'width' : 160,
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="//preferablyending.com/8b24d51ee53647b7adbb2cf21ec88c9a/invoke.js"></script>
      </div>
    </div>
    
    <!-- Decorative Background Elements -->
    <div class="hero-bg-decoration"></div>
  </main>
  <div class="section-divider"></div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #FF6B35 0%, #F72B7E 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  min-height: 500px;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: -1px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255,255,255,0.95);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-buttons {
  justify-content: center;
  align-items: center;
}

.btn-dashboard,
.btn-github {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 40px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.btn-dashboard {
  background: rgba(255,255,255,0.95);
  color: #FF6B35;
  border: 2px solid rgba(255,255,255,0.3);
}

.btn-dashboard:hover {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

.btn-github {
  background: rgba(255,255,255,0.15);
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
}

.btn-github:hover {
  background: rgba(255,255,255,0.25);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

.ad-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
}

.hero-bg-decoration::before,
.hero-bg-decoration::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  filter: blur(60px);
}

.hero-bg-decoration::before {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
}

.hero-bg-decoration::after {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -50px;
}

.section-divider {
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255,107,53,0.5) 50%, 
    transparent 100%
  );
  opacity: 0.75;
}

/* Dark mode adjustments */
.dark .hero-section {
  background: linear-gradient(135deg, #c54d26 0%, #c91f5e 100%);
}

.dark .btn-dashboard {
  background: rgba(255,255,255,0.9);
  color: #FF6B35;
}

.dark .btn-dashboard:hover {
  background: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .btn-dashboard,
  .btn-github {
    padding: 12px 30px;
    font-size: 0.9375rem;
  }
  
  .hero-section {
    padding: 60px 0;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .btn-dashboard,
  .btn-github {
    width: 100%;
    max-width: 300px;
  }
}
</style>
