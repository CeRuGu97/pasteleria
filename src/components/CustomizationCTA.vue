<script setup>
import { Palette, ArrowRight } from 'lucide-vue-next'

const steps = [
  { emoji: "🎂", title: "Elegir base", desc: "Elige el tamaño de tu pastel y el bizcocho." },
  { emoji: "🍓", title: "Seleccionar sabores", desc: "Mezcla y combina rellenos" },
  { emoji: "🎨", title: "Diseñarlo", desc: "Decoraciones personalizadas y mensaje" },
  { emoji: "🚚", title: "Entregado fresco", desc: "Directamente a tu puerta" },
]
</script>

<template>
  <section class="customization-cta-section">
    <div class="customization-dot customization-dot--a"></div>
    <div class="customization-dot customization-dot--b"></div>
    <div class="customization-dot customization-dot--c"></div>
    <div class="customization-dot customization-dot--d"></div>

    <div class="container relative z-10">
      <div class="customization-header text-center mb-16">
        <div class="customization-type">
          <Palette size="20" class="customization-icon" />
          <span class="customization-label">PERSONALIZACIÓN</span>
        </div>
        <h2 class="customization-title">Crea tu propio pastel</h2>
        <p class="customization-subtitle">
          Cada celebración merece un pastel tan único como tú. Diseña el pastel de tus sueños desde cero;
          nosotros nos encargamos del resto.
        </p>
      </div>

      <div class="customization-steps">
        <div v-for="step in steps" :key="step.title" class="customization-step">
          <div class="customization-step-icon">{{ step.emoji }}</div>
          <h3 class="customization-step-title">{{ step.title }}</h3>
          <p class="customization-step-desc">{{ step.desc }}</p>
        </div>
      </div>

      <div class="customization-actions">
        <router-link to="/personalizar" class="button-primary">Crea tu propio pastel
          <ArrowRight size="16" />
        </router-link>
        <router-link to="/galeria" class="button-secondary">Ver galería</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.customization-cta-section {
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
  background: linear-gradient(135deg, oklch(0.42 0.19 25) 0%, oklch(0.35 0.18 20) 60%, oklch(0.3 0.15 15) 100%);
}

.customization-dot {
  position: absolute;
  border-radius: 50%;
  background: white;
  opacity: 0.1;
  pointer-events: none;
}

.customization-dot--a {
  top: 0;
  left: 0;
  width: 20rem;
  height: 20rem;
  transform: translate(-40%, -40%);
}

.customization-dot--b {
  bottom: 0;
  right: 0;
  width: 24rem;
  height: 24rem;
  transform: translate(40%, 40%);
}

.customization-dot--c {
  top: 20%;
  left: 10%;
  width: 0.5rem;
  height: 0.5rem;
  opacity: 0.3;
  animation: hero-bounce 3s infinite ease-in-out;
}

.customization-dot--d {
  top: 70%;
  left: 5%;
  width: 0.3125rem;
  height: 0.3125rem;
  opacity: 0.3;
  animation: hero-bounce 3s 1s infinite ease-in-out;
}

.customization-header {
  color: white;
}

.customization-type {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  justify-content: center;
}

.customization-label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  color: oklch(0.93 0.04 15);
}

.customization-title {
  margin: 0.25rem 0;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
}

.customization-subtitle {
  color: rgba(255, 255, 255, 0.75);
  max-width: 42rem;
  margin: 0 auto;
  font-family: 'Nunito', sans-serif;
}

.customization-steps {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.customization-step {
  text-align: center;
  color: white;
}

.customization-step-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  display: grid;
  place-items: center;
  margin: 0 auto 0.75rem;
  font-size: 1.25rem;
}

.customization-step-title {
  font-weight: 700;
  margin: 0 0 0.25rem;
  font-size: 0.9rem;
}

.customization-step-desc {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
}

.customization-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.button-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  background: white;
  color: oklch(0.42 0.19 25);
  font-weight: 700;
  text-decoration: none;
}

.button-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  font-weight: 700;
  text-decoration: none;
}
</style>
