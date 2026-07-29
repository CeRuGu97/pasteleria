<script setup>
defineProps({
  selected: { type: Object, default: null },
})

defineEmits(['select'])

const options = [
  { id: 'vainilla', label: 'Vainilla', icon: '🌿', color: '#f5e6c8', description: 'Clásico y aromático', price: 0 },
  { id: 'chocolate', label: 'Chocolate', icon: '🍫', color: '#6b3a2a', description: 'Intenso y esponjoso', price: 0 },
]
</script>

<template>
  <div class="step-content">
    <h2 class="step-title">Sabor del pan</h2>
    <p class="step-subtitle">Elige el bizcocho de tu pastel</p>

    <div class="options-grid">
      <button
        v-for="opt in options"
        :key="opt.id"
        :class="['option-card', { 'option-card--selected': selected?.id === opt.id }]"
        :style="{ '--accent': opt.color }"
        @click="$emit('select', opt)"
      >
        <div class="option-color-preview" :style="{ background: opt.color }"></div>
        <span class="option-icon">{{ opt.icon }}</span>
        <span class="option-label">{{ opt.label }}</span>
        <span class="option-desc">{{ opt.description }}</span>
        <span class="option-price option-price--free">Incluido</span>
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

.option-color-preview {
  width: 3rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.option-icon {
  font-size: 1.5rem;
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
