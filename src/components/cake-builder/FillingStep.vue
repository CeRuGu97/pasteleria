<script setup>
defineProps({
  selected: { type: Object, default: null },
})

defineEmits(['select'])

const options = [
  { id: 'durazno-crema', label: 'Durazno con crema', icon: '🍑', description: 'Dulce y cremoso' },
  { id: 'fresas-crema', label: 'Fresas con crema', icon: '🍓', description: 'Clásico irresistible' },
  { id: 'durazno-nuez', label: 'Durazno con nuez', icon: '🥜', description: 'Textura crujiente' },
  { id: 'betun-oreo', label: 'Betún de oreo', icon: '🍪', description: 'Sabor a galleta' },
  { id: 'crema-pastelera', label: 'Crema pastelera', icon: '🍮', description: 'Tradicional y suave' },
  { id: 'nutela-fresas', label: 'Nutela con fresas', icon: '🍫', description: 'Chocolate y fruta' },
  { id: 'betun-frutos-rojos', label: 'Betún de frutos rojos', icon: '🫐', description: 'Frutos del bosque' },
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
        @click="$emit('select', opt)"
      >
        <span class="option-icon">{{ opt.icon }}</span>
        <span class="option-label">{{ opt.label }}</span>
        <span class="option-desc">{{ opt.description }}</span>
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
  font-size: 0.9rem;
  text-align: center;
}

.option-desc {
  font-size: 0.7rem;
  opacity: 0.7;
  font-family: 'Nunito', sans-serif;
}
</style>
