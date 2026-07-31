<script setup>
import { ArrowRight } from 'lucide-vue-next'
import VANILLA_IMG from '../assets/img/001.jpg'
const STRAWBERRY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-strawberry-cake-Z6KR22LeguVPFanfXwGejs.webp"
const CARAMEL_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-caramel-cake-VgNT9XNbVwKWqtwZt5udUv.webp"

const flavors = [
  {
    id: 1,
    label: "Stitch Vanilla",
    description: "Elegancia clásica con auténticas notas de vainilla.",
    img: VANILLA_IMG,
    accent: "oklch(0.97 0.02 80)",
    tag: "Mejor vendido",
  },
  {
    id: 2,
    label: "Strawberry",
    description: "Dulzura de bayas frescas en cada capa.",
    img: STRAWBERRY_IMG,
    accent: "oklch(0.95 0.04 15)",
    tag: "Favorito de los fans",
  },
  {
    id: 3,
    label: "Caramelo salado",
    description: "Caramelo dorado intenso con un toque de sal marina.",
    img: CARAMEL_IMG,
    accent: "oklch(0.95 0.04 60)",
    tag: "Estacional",
  },
]
</script>

<template>
  <section class="featured-flavors-section">
    <div class="top-wave">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="w-full h-full">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="oklch(0.98 0.015 20)" />
      </svg>
    </div>

    <div class="container relative z-10">
      <div class="section-header text-center mb-16">
        <span class="section-badge">Nuestro Menu</span>
        <h2 class="section-title">Sabores Destacados</h2>
        <p class="section-subtitle">
          Cada sabor se elabora con ingredientes de primera calidad y se hornea al momento de realizar el
          pedido.
        </p>
      </div>

      <div class="flavors-grid">
        <div
          v-for="(flavor, i) in flavors"
          :key="flavor.id"
          :class="['flavor-card', `reveal reveal-delay-${i + 1}`]"
          :style="{ background: flavor.accent }"
        >
          <div class="flavor-badge">
            <span class="flavor-tag">{{ flavor.tag }}</span>
          </div>

          <div class="flavor-image-frame">
            <img :src="flavor.img" :alt="flavor.label" class="flavor-image" />
          </div>

          <div class="flavor-text">
            <h3 class="flavor-title">{{ flavor.label }}</h3>
            <p class="flavor-description">{{ flavor.description }}</p>
            <router-link :to="{ path: '/personalizar', query: { pastel: flavor.label } }" class="flavor-link">
              Ordene este sabor
              <ArrowRight size="14" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-flavors-section {
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background: oklch(1 0 0);
}

.top-wave {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  overflow: hidden;
  z-index: 1;
}

.top-wave svg {
  width: 100%;
  height: 100%;
}

.flavors-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.flavor-card {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.flavor-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 48px rgba(196, 30, 30, 0.15);
}

.flavor-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
}

.flavor-tag {
  background: white;
  color: oklch(0.42 0.19 25);
  font-family: 'Nunito', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}

.flavor-image-frame {
  position: relative;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  justify-content: center;
}

.flavor-image {
  width: 12rem;
  height: 12rem;
  border-radius: 999px;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.flavor-card:hover .flavor-image {
  transform: scale(1.07);
}

.flavor-text {
  padding: 1.5rem 1.25rem 1.5rem;
  text-align: center;
}

.flavor-title {
  margin-bottom: 0.25rem;
  color: oklch(0.28 0.08 25);
  font-size: 1.125rem;
  font-weight: 700;
}

.flavor-description {
  color: oklch(0.45 0.07 25);
  font-family: 'Nunito', sans-serif;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.flavor-link {
  color: oklch(0.42 0.19 25);
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: gap 0.2s ease;
}

.flavor-card:hover .flavor-link {
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .flavors-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
