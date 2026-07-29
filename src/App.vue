<script setup>
import AppHeader from './components/AppHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <AppHeader />
  <router-view />
  <SiteFooter />
</template>

<style>
@keyframes hero-bounce {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

body {
  margin: 0 !important;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.relative {
  position: relative;
}

.z-10 {
  z-index: 10;
}

.text-center {
  text-align: center;
}

.mb-16 {
  margin-bottom: 4rem;
}

.btn-primary {
  background-color: oklch(0.42 0.19 25);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.875rem;
}

.btn-outline {
  border: 1px solid oklch(0.42 0.19 25);
  color: oklch(0.42 0.19 25);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.875rem;
}

.section-header .section-badge {
  display: inline-block;
  padding: 0.25rem 1rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  background: oklch(0.93 0.04 15);
  color: oklch(0.42 0.19 25);
  font-family: 'Nunito', sans-serif;
  margin-bottom: 0.75rem;
}

.section-header .section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: oklch(0.28 0.08 25);
  margin: 0.5rem 0;
}

.section-header .section-subtitle {
  max-width: 42rem;
  margin: 0 auto;
  color: oklch(0.55 0.06 25);
  font-family: 'Nunito', sans-serif;
}
</style>
