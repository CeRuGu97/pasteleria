<script setup>
import { Star } from 'lucide-vue-next'

const reviews = [
  {
    user: "Sarah M.",
    avatar: "SM",
    rating: 5,
    comment:
      "¡Los mejores pasteles de la ciudad! La de chocolate y frambuesa estaba absolutamente deliciosa. Cada capa estaba perfectamente húmeda y la ganache, suave como la seda.",
    occasion: "Cumpleaños",
    color: "oklch(0.93 0.04 15)",
  },
  {
    user: "Emily R.",
    avatar: "ER",
    rating: 5,
    comment:
      "Delicioso y precioso. El pastel de limón y lavanda fue la sensación de mi fiesta en el jardín. ¡Todos me preguntaron dónde lo había comprado!",
    occasion: "Celebración de fiesta en el jardín",
    color: "oklch(0.95 0.04 80)",
  },
  {
    user: "Jessica T.",
    avatar: "JT",
    rating: 5,
    comment:
      "El proceso de personalización fue muy sencillo y el resultado superó todas mis expectativas. El pastel de cumpleaños de mi hija fue mágico.",
    occasion: "Cumpleaños",
    color: "oklch(0.95 0.04 15)",
  },
  {
    user: "Amanda K.",
    avatar: "AK",
    rating: 5,
    comment:
      "Pedimos el de caramelo salado para nuestro aniversario. Llegó perfectamente empaquetado y sabía incluso mejor de lo que parecía.",
    occasion: "Celebración de aniversario",
    color: "oklch(0.95 0.04 60)",
  },
]
</script>

<template>
  <section class="customer-reviews-section">
    <div class="customer-wave-top" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="wave-svg">
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="oklch(0.3 0.15 15)" />
      </svg>
    </div>

    <div class="container">
      <div class="section-header text-center mb-16">
        <span class="section-badge">Testimonios</span>
        <h2 class="section-title">Amor de clientes</h2>
        <p class="section-subtitle">
          Historias reales de nuestros clientes felices que hicieron sus momentos más dulces.
        </p>
      </div>

      <div class="reviews-grid">
        <article
          v-for="(review, i) in reviews"
          :key="review.user"
          class="review-card reveal reveal-delay-{{ i + 1 }}"
        >
          <div class="review-stars">
            <Star
              v-for="star in 5"
              :key="star"
              size="18"
              :fill="star <= review.rating ? 'oklch(0.75 0.18 60)' : 'transparent'"
              :stroke="star <= review.rating ? 'oklch(0.75 0.18 60)' : 'oklch(0.55 0.04 25)'"
            />
          </div>

          <p class="review-comment">"{{ review.comment }}"</p>

          <div class="review-user">
            <div class="review-avatar" :style="{ background: review.color }">{{ review.avatar }}</div>
            <div>
              <p class="review-name">{{ review.user }}</p>
              <p class="review-occasion">{{ review.occasion }}</p>
            </div>
          </div>
        </article>
      </div>

      <section class="review-summary">
        <p class="summary-score">4.9</p>
        <div class="summary-stars">
          <Star v-for="star in 5" :key="star" size="20" fill="oklch(0.75 0.18 60)" />
        </div>
        <p class="summary-text">Basado en 200 reseñas verificadas</p>
      </section>
    </div>
  </section>
</template>

<style scoped>
.customer-reviews-section {
  position: relative;
  padding: 7rem 0 6rem;
  background: oklch(1 0 0);
  color: oklch(0.55 0.06 25);
}

.customer-wave-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  overflow: hidden;
}

.wave-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.customer-reviews-section .section-header {
  margin-bottom: 2rem;
}

.reviews-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.review-card {
  background: white;
  border: 1px solid oklch(0.92 0.02 20);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  padding: 1.25rem;
}

.review-stars {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}

.review-comment {
  margin: 0 0 1rem;
  font-family: 'Nunito', sans-serif;
  color: oklch(0.35 0.07 25);
  line-height: 1.6;
}

.review-user {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.review-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  color: oklch(0.28 0.08 25);
}

.review-name {
  margin: 0;
  font-weight: 700;
}

.review-occasion {
  margin: 0;
  font-size: 0.75rem;
  color: oklch(0.55 0.06 25);
}

.review-summary {
  margin-top: 2rem;
  text-align: center;
  background: oklch(0.98 0.015 20);
  border-radius: 1rem;
  padding: 1.5rem;
}

.summary-score {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: oklch(0.42 0.19 25);
}

.summary-stars {
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  margin-bottom: 0.5rem;
}

.summary-text {
  margin: 0;
  color: oklch(0.55 0.06 25);
  font-family: 'Nunito', sans-serif;
}

@media (min-width: 768px) {
  .reviews-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
