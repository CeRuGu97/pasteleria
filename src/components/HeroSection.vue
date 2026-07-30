<script setup>
import { Sparkles, ArrowRight } from 'lucide-vue-next'

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-hero-cake-TVgPdNFYCxmmfmgZuFFebD.webp"
</script>

<template>
  <section class="hero-section">
    <div class="hero-bg blob-1"></div>
    <div class="hero-bg blob-2"></div>

    <div class="hero-dot dot-1"></div>
    <div class="hero-dot dot-2"></div>
    <div class="hero-dot dot-3"></div>

    <div class="container relative z-10">
      <div class="hero-grid">
        <div class="hero-left">
          <div class="hero-badge">
            <span class="hero-badge-pill">
              <Sparkles size="12" />
              Pasteles Artesanales
            </span>
          </div>

          <h1 class="hero-heading">
            Deléitate con los Exquisitos Pasteles de
            <span class="hero-highlight">Fabisweet</span><br />
          </h1>

          <p class="hero-subtitle">
            Pasteles personalizadas elaborados con los mejores ingredientes para tus momentos de
            celebración. Cada rebanada cuenta una historia.
          </p>

          <div class="hero-actions">
            <a href="#" class="btn-primary">
              Ordene Ahora
              <ArrowRight size="16" />
            </a>
            <a href="#" class="btn-outline">Explora los sabores</a>
          </div>

          <div class="hero-stats">
            <div class="stat">
              <span class="stat-value">50+</span>
              <span class="stat-label">Pasteles Entregados</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">4.9★</span>
              <span class="stat-label">Puntuación Promedio</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">20+</span>
              <span class="stat-label">Variedades de Sabores</span>
            </div>
          </div>
        </div>

        <div class="hero-right">
          <div class="hero-blob-bg"></div>
          <div class="hero-blob-secondary"></div>

          <div class="hero-image-wrap">
            <img :src="HERO_IMG" alt="Dakingo Chocolate Raspberry Cake" class="hero-image" />

            <div class="hero-image-badge">
              <span class="hero-image-emoji">🍫</span>
              <div>
                <p class="hero-image-label">Pastel de autor</p>
                <p class="hero-image-subtitle">Chocolate Raspberry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 6rem;
  padding-bottom: 4rem;
  background: oklch(0.98 0.015 20);
}

.hero-bg {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
}

.hero-bg.blob-1 {
  top: -8rem;
  right: -8rem;
  width: 37.5rem;
  height: 37.5rem;
  opacity: 0.3;
  background: radial-gradient(circle, oklch(0.9 0.05 10) 0%, transparent 70%);
}

.hero-bg.blob-2 {
  bottom: -6rem;
  left: -6rem;
  width: 25rem;
  height: 25rem;
  opacity: 0.2;
  background: radial-gradient(circle, oklch(0.93 0.04 15) 0%, transparent 70%);
}

.hero-dot {
  position: absolute;
  border-radius: 50%;
  animation: hero-bounce 3s infinite ease-in-out;
}

.hero-dot.dot-1 {
  top: 33%;
  left: 8%;
  width: 0.75rem;
  height: 0.75rem;
  opacity: 0.6;
  background: oklch(0.42 0.19 25);
  animation-duration: 3s;
  animation-delay: 0s;
}

.hero-dot.dot-2 {
  top: 25%;
  left: 15%;
  width: 0.5rem;
  height: 0.5rem;
  opacity: 0.4;
  background: oklch(0.9 0.05 10);
  animation-duration: 4s;
  animation-delay: 1s;
}

.hero-dot.dot-3 {
  bottom: 33%;
  right: 12%;
  width: 1rem;
  height: 1rem;
  opacity: 0.5;
  background: oklch(0.93 0.04 15);
  animation-duration: 3.5s;
  animation-delay: 0.5s;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  background: oklch(0.93 0.04 15);
  color: oklch(0.42 0.19 25);
}

.hero-heading {
  font-size: clamp(2.8rem, 5.5vw, 4.5rem);
  line-height: 1.08;
  color: oklch(0.28 0.08 25);
}

.hero-highlight {
  color: oklch(0.42 0.19 25);
  font-style: italic;
}

.hero-subtitle {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  max-width: 42rem;
  color: oklch(0.45 0.07 25);
  font-family: 'Nunito', sans-serif;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
  margin-top: 0.5rem;
  border-top: 1px solid oklch(0.88 0.04 20);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: oklch(0.42 0.19 25);
  font-family: 'Cormorant Garamond', serif;
}

.stat-label {
  font-size: 0.75rem;
  color: oklch(0.55 0.06 25);
  font-family: 'Nunito', sans-serif;
}

.stat-divider {
  width: 1px;
  height: 2.5rem;
  background: oklch(0.9 0.03 20);
}

.hero-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.hero-blob-bg,
.hero-blob-secondary {
  position: absolute;
  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
}

.hero-blob-bg {
  inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%, oklch(0.93 0.04 15 / 0.7) 0%, oklch(0.9 0.05 10 / 0.4) 50%, transparent 80%);
  filter: blur(2px);
}

.hero-blob-secondary {
  top: 0;
  right: 0;
  width: 7rem;
  height: 7rem;
  background: oklch(0.9 0.05 10);
  border-radius: 70% 30% 60% 40% / 40% 70% 30% 60%;
  opacity: 0.5;
}

.hero-image-wrap {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 28.75rem;
  filter: drop-shadow(0 24px 48px rgba(196, 30, 30, 0.18));
}

.hero-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.5rem;
  aspect-ratio: 1/1;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(196, 30, 30, 0.1);
}

.hero-image-badge {
  position: absolute;
  left: 1rem;
  bottom: -1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.hero-image-emoji {
  font-size: 1.25rem;
}

.hero-image-label {
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.2;
  font-family: 'Nunito', sans-serif;
  color: oklch(0.28 0.08 25);
}

.hero-image-subtitle {
  font-size: 0.75rem;
  color: oklch(0.55 0.06 25);
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 55% 45%;
    gap: 2rem;
  }
}
</style>
