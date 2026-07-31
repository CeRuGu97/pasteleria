<script setup>
import { ref } from 'vue'

const props = defineProps({
  selected: { type: Object, default: null },
  pisos: { type: Number, default: 1 },
})

const emit = defineEmits(['select'])

const subStep = ref('top')
const selectedTop = ref(props.selected?.top || null)
const selectedBottom = ref(props.selected?.bottom || null)

const options = [
  { id: 'vainilla', label: 'Vainilla', icon: '🌿', color: '#f5e6c8', description: 'Clásico y aromático' },
  { id: 'chocolate', label: 'Chocolate', icon: '🍫', color: '#6b3a2a', description: 'Intenso y esponjoso' },
  { id: 'moka', label: 'Moka', icon: '☕', color: '#8b5e3c', description: 'Café y chocolate' },
]

function selectFlavor(opt) {
  if (props.pisos === 2) {
    if (subStep.value === 'top') {
      selectedTop.value = opt
      subStep.value = 'bottom'
    } else {
      selectedBottom.value = opt
      emit('select', { top: selectedTop.value, bottom: opt })
    }
  } else {
    emit('select', opt)
  }
}

function backToTop() {
  subStep.value = 'top'
  selectedBottom.value = null
}
</script>

<template>
  <div class="step-content">
    <template v-if="pisos === 1 || subStep === 'top'">
      <h2 class="step-title">
        {{ pisos === 2 ? 'Sabor del piso de arriba' : 'Sabor del pan' }}
      </h2>
      <p class="step-subtitle">
        {{ pisos === 2 ? 'Elige el bizcocho del piso superior' : 'Elige el bizcocho de tu pastel' }}
      </p>
    </template>
    <template v-else>
      <h2 class="step-title">Sabor del piso de abajo</h2>
      <p class="step-subtitle">Elige el bizcocho del piso inferior</p>
    </template>

    <div class="options-grid">
      <button
        v-for="opt in options"
        :key="opt.id"
        :class="['option-card', {
          'option-card--selected': pisos === 2
            ? (subStep === 'top' ? selectedTop?.id === opt.id : selectedBottom?.id === opt.id)
            : selected?.id === opt.id
        }]"
        :style="{ '--accent': opt.color }"
        @click="selectFlavor(opt)"
      >
        <div class="option-color-preview" :style="{ background: opt.color }"></div>
        <span class="option-icon">{{ opt.icon }}</span>
        <span class="option-label">{{ opt.label }}</span>
        <span class="option-desc">{{ opt.description }}</span>
      </button>
    </div>

    <button
      v-if="pisos === 2 && subStep === 'bottom'"
      class="back-btn"
      @click="backToTop"
    >
      ◄ Cambiar sabor de arriba
    </button>
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

.back-btn {
  display: block;
  margin: 1.25rem auto 0;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Nunito', sans-serif;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}
</style>
