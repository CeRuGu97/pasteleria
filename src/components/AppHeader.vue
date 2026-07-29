<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const links = ['Home', 'Menu', 'Galeria', 'Contactanos']
const menuOpen = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > -1
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header :class="['app-header', { 'app-header--scrolled': scrolled }]">
    <div class="container">
      <nav class="nav-wrapper">
        <router-link to="/" class="logo">Fabisweet</router-link>

        <ul class="desktop-links">
          <li v-for="link in links" :key="link">
            <router-link
              :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
              class="nav-link"
            >
              {{ link }}
              <span class="nav-link-underline"></span>
            </router-link>
          </li>
        </ul>

        <div class="cta-desktop">
          <a href="#" class="btn-primary">Ordena Ahora</a>
        </div>

        <button class="mobile-toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
          <component :is="menuOpen ? X : Menu" :size="22" />
        </button>
      </nav>

      <div v-if="menuOpen" class="mobile-menu">
        <router-link
          v-for="link in links"
          :key="link"
          :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
          class="mobile-link"
          @click="menuOpen = false"
        >
          {{ link }}
        </router-link>
        <a href="#" class="btn-primary mobile-order">Ordena Ahora</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.5s;
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  box-shadow: none;
}

.app-header--scrolled {
  background: rgba(255, 240, 240, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 1px 24px rgba(196, 30, 30, 0.08);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  font-family: 'Cormorant Garamond', Georgia, serif;
  color: oklch(0.42 0.19 25);
  text-decoration: none;
}

.desktop-links {
  display: none;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.desktop-links li {
  list-style: none;
}

.nav-link {
  position: relative;
  font-size: 0.875rem;
  font-weight: 600;
  transition: color 0.2s;
  color: oklch(0.28 0.08 25);
  font-family: 'Nunito', sans-serif;
  text-decoration: none;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: oklch(0.42 0.19 25);
}

.nav-link-underline {
  position: absolute;
  bottom: -0.125rem;
  left: 50%;
  transform: translateX(-50%);
  height: 0.125rem;
  width: 0;
  border-radius: 999px;
  background: oklch(0.42 0.19 25);
  transition: all 0.3s;
}

.nav-link:hover .nav-link-underline,
.nav-link.router-link-exact-active .nav-link-underline {
  width: 100%;
}

.cta-desktop {
  display: none;
}

.mobile-toggle {
  display: block;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: none;
  color: oklch(0.42 0.19 25);
  cursor: pointer;
}

.mobile-menu {
  padding: 0.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid oklch(0.9 0.03 20);
}

.mobile-link {
  font-size: 1rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  color: oklch(0.28 0.08 25);
}

.mobile-order {
  width: fit-content;
  margin-top: 0.5rem;
}

@media (min-width: 768px) {
  .desktop-links {
    display: flex;
  }

  .cta-desktop {
    display: block;
  }

  .mobile-toggle,
  .mobile-menu {
    display: none;
  }
}
</style>
