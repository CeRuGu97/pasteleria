<script setup>
import FeaturedFlavors from '../components/FeaturedFlavors.vue'
import SeasonalSpecials from '../components/SeasonalSpecials.vue'
</script>

<template>
  <section class="menu-view">
    <div class="menu-hero">
      <div class="container">
        <h1 class="menu-title">Nuestro Menú</h1>
        <p class="menu-subtitle">Descubre nuestras creaciones artesanales</p>
      </div>
    </div>
    <FeaturedFlavors />
    <SeasonalSpecials />
  </section>
</template>

<style scoped>
.menu-hero {
  padding: 8rem 0 4rem;
  background: oklch(0.98 0.015 20);
  text-align: center;
}

.menu-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: oklch(0.28 0.08 25);
  margin: 0 0 0.5rem;
}

.menu-subtitle {
  font-size: 1.1rem;
  color: oklch(0.55 0.06 25);
  font-family: 'Nunito', sans-serif;
  margin: 0;
}
</style>
