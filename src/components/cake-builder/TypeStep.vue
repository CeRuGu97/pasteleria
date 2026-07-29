<script setup>
defineProps({
  selected: { type: Object, default: null },
})

defineEmits(['select'])

const options = [
  { id: '3leches', label: 'Pastel de 3 Leches', icon: '🥛', description: 'Tradicional, extra húmedo y cremoso', price: 50 },
  { id: '2leches', label: 'Pastel de 2 Leches', icon: '🥛', description: 'Clásico, suave y delicioso', price: 0 },
]
</script>

<template>
  <div class="step-content">
    <h2 class="step-title">¿Qué tipo de pastel?</h2>
    <p class="step-subtitle">Elige la base de tu creación</p>

    <div class="options-grid">
      <button
        v-for="opt in options"
        :key="opt.id"
        :class="['option-card', { 'option-card--selected': selected?.id === opt.id }]"
        @click="$emit('select', opt)"
      >
        <span class="option-icon">{{ opt.icon }}</span>
        <span class="option-label">{{ opt.label }}</span>
        <span class="option-desc">{{ opt.description }}</span>
        <span v-if="opt.price > 0" class="option-price">+${{ opt.price }}</span>
        <span v-else class="option-price option-price--free">Incluido</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.step-title {
  color: white;
  font-size: 1.5rem;
  margin: 0 0 0.25rem;
  text-align: center;
}

.step-subtitle {
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 1.5rem;
  text-align: center;
  font-family: 'Nunito', sans-serif;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.option-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 1.25rem 0.75rem;
  border-radius: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
}

.option-card:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}

.option-card--selected {
  background: white;
  border-color: white;
  color: oklch(0.42 0.19 25);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transform: scale(1.03);
}

.option-icon {
  font-size: 2rem;
}

.option-label {
  font-weight: 700;
  font-size: 0.95rem;
}

.option-desc {
  font-size: 0.7rem;
  opacity: 0.7;
  font-family: 'Nunito', sans-serif;
}

.option-price {
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 0.25rem;
}

.option-price--free {
  color: oklch(0.85 0.08 150);
}

.option-card--selected .option-price--free {
  color: oklch(0.45 0.15 150);
}
</style>
