<script setup>
defineProps({
  selected: { type: Object, default: null },
})

defineEmits(['select'])

const options = [
  { id: 'mermelada', label: 'Mermelada', icon: '🍓', color: '#c0392b', description: 'Frutos rojos', price: 40 },
  { id: 'chocolate', label: 'Chocolate', icon: '🍫', color: '#5d3a1a', description: 'Ganache cremoso', price: 40 },
  { id: 'cacahuate', label: 'Cacahuate', icon: '🥜', color: '#d4a574', description: 'Crema de cacahuate', price: 30 },
]
</script>

<template>
  <div class="step-content">
    <h2 class="step-title">Elige el relleno</h2>
    <p class="step-subtitle">El corazón de tu pastel</p>

    <div class="options-grid">
      <button
        v-for="opt in options"
        :key="opt.id"
        :class="['option-card', { 'option-card--selected': selected?.id === opt.id }]"
        :style="{ '--accent': opt.color }"
        @click="$emit('select', opt)"
      >
        <div class="option-color-dot" :style="{ background: opt.color }"></div>
        <span class="option-icon">{{ opt.icon }}</span>
        <span class="option-label">{{ opt.label }}</span>
        <span class="option-desc">{{ opt.description }}</span>
        <span class="option-price">+${{ opt.price }}</span>
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.option-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 1.25rem 0.5rem;
  border-radius: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
  position: relative;
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

.option-color-dot {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.option-icon {
  font-size: 1.5rem;
}

.option-label {
  font-weight: 700;
  font-size: 0.85rem;
}

.option-desc {
  font-size: 0.65rem;
  opacity: 0.7;
  font-family: 'Nunito', sans-serif;
}

.option-price {
  font-weight: 700;
  font-size: 0.95rem;
  margin-top: 0.15rem;
}
</style>
