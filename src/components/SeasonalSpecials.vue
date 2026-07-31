<script setup>
import { ArrowRight, Leaf, Droplets, Star } from 'lucide-vue-next'

const LAVENDER_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663491895325/2cGsL6BxarosBEUGGWnv8k/dakingo-lavender-cake-7PtWrBzDejL4sCmUD4tZeU.webp"

const features = [
  { icon: "Chocolate", label: "Chocolate premium", desc: "Para los amantes del cacao, este pastel es un sueño hecho realidad. Bizcochos de chocolate esponjosos y un relleno cremoso que es pura felicidad en cada bocado." },
  { icon: "Leaf", label: "Vainilla natural", desc: "Para una celebración dulce y ligera, elige nuestro sabor vainilla. Bizcocho suave y un relleno que sabe a infancia, perfecto para toda la familia." },
]
</script>

<template>
  <section class="seasonal-specials-section">
    <div class="seasonal-bg" aria-hidden="true"></div>
    <div class="container relative z-10">
      <div class="seasonal-grid">
        <div class="seasonal-image-column">
          <div class="seasonal-blob"></div>
          <div class="seasonal-ring"></div>
          <div class="seasonal-image-wrap">
            <img src="../assets/img/002.jpeg" alt="Spring Lemon Lavender Cake" class="seasonal-image" />
            <div class="seasonal-badge">
              <span class="seasonal-badge-title">Primavera</span>
              <span class="seasonal-badge-icon">🌸</span>
              <span class="seasonal-badge-subtitle">Especial</span>
            </div>
          </div>
        </div>

        <div class="seasonal-text-column">
          <span class="seasonal-tag">OFERTAS DE TEMPORADA</span>
          <h2 class="seasonal-title">Pastel de Cumpleaños "Pasión y Elegancia"</h2>
          <p class="seasonal-description">
            Celebra un día inolvidable con este pastel que combina un diseño clásico y atemporal con un sabor excepcional. Nuestro pastel "Pasión y Elegancia" está recubierto con una cobertura de crema blanca suave y sedosa.
              <br>
            Su diseño se distingue por un meticuloso festón lateral fruncido y un borde superior de conchas de crema perfectly formadas. El toque de distinción lo dan las delicadas rosas rojas de azúcar, con sus hojas verdes, que coronan el pastel y lo adornan en cascada. En el centro, un elegante "Happy Birthday" en letras doradas resalta la importancia de la ocasión.
          </p>

          <div class="seasonal-features">
            <div v-for="feature in features" :key="feature.label" class="seasonal-feature">
              <div class="seasonal-feature-icon">
                <component :is="feature.icon" size="16" class="seasonal-feature-svg" />
              </div>
              <div>
                <p class="seasonal-feature-label">{{ feature.label }}</p>
                <p class="seasonal-feature-desc">{{ feature.desc }}</p>
              </div>
            </div>
          </div>

          <div class="seasonal-cta">
            <a href="#" class="btn-primary">
              Descubrir
              <ArrowRight size="16" />
            </a>
            <!-- <span class="seasonal-note">Disponible hasta el 31 de mayo.</span> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.seasonal-specials-section {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  background: oklch(0.98 0.015 20);
}

.seasonal-bg {
  position: absolute;
  top: -4rem;
  right: -4rem;
  width: 30rem;
  height: 30rem;
  background: radial-gradient(circle, oklch(0.9 0.05 10) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(30%, -30%);
  opacity: 0.3;
  pointer-events: none;
}

.seasonal-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

.seasonal-image-column {
  position: relative;
  display: flex;
  justify-content: center;
}

.seasonal-blob {
  position: absolute;
  inset: 0;
  margin: -1.5rem;
  background: radial-gradient(ellipse 85% 85% at 50% 50%, oklch(0.93 0.04 15 / 0.6) 0%, transparent 75%);
  border-radius: 45% 55% 60% 40% / 55% 45% 55% 45%;
}

.seasonal-ring {
  position: absolute;
  width: 110%;
  height: 110%;
  border-radius: 50%;
  opacity: 0.2;
  border: 2px dashed oklch(0.42 0.19 25);
}

.seasonal-image-wrap {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 25rem;
  filter: drop-shadow(0 20px 40px rgba(196, 30, 30, 0.15));
}

.seasonal-image {
  width: 100%;
  height: auto;
  border-radius: 1.5rem;
  object-fit: cover;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
  aspect-ratio: 4 / 3;
}

.seasonal-badge {
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: oklch(0.42 0.19 25);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  font-family: 'Nunito', sans-serif;
}

.seasonal-badge-title,
.seasonal-badge-subtitle {
  font-size: 0.65rem;
  font-weight: 700;
  line-height: 1;
}

.seasonal-badge-icon {
  font-size: 1rem;
}

.seasonal-text-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.seasonal-tag {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: oklch(0.42 0.19 25);
  font-family: 'Nunito', sans-serif;
}

.seasonal-title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  color: oklch(0.28 0.08 25);
  margin: 0;
}

.seasonal-description {
  font-size: 1rem;
  color: oklch(0.45 0.07 25);
  font-family: 'Nunito', sans-serif;
  line-height: 1.6;
  max-width: 40rem;
}

.seasonal-features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.seasonal-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.seasonal-feature-icon {
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: oklch(0.93 0.04 15);
}

.seasonal-feature-label {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  color: oklch(0.28 0.08 25);
  margin: 0;
}

.seasonal-feature-desc {
  font-family: 'Nunito', sans-serif;
  color: oklch(0.55 0.06 25);
  margin: 0;
  font-size: 0.875rem;
}

.seasonal-cta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.seasonal-note {
  font-size: 0.875rem;
  color: oklch(0.55 0.06 25);
  font-family: 'Nunito', sans-serif;
}
</style>
