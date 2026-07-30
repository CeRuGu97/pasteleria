<script setup>
import { ref } from 'vue'

const props = defineProps({
  selected: { type: Object, default: null },
})

const emit = defineEmits(['select'])

const hasSelection = props.selected

const designType = ref(props.selected?.type || null)
const themeText = ref(props.selected?.details?.themeText || '')
const selectedFruits = ref(props.selected?.details?.fruits || [])

const fruitsList = [
  { id: 'fresas', label: 'Fresas', icon: '🍓' },
  { id: 'durazno', label: 'Durazno', icon: '🍑' },
  { id: 'kiwi', label: 'Kiwi', icon: '🥝' },
  { id: 'frutos-rojos', label: 'Frutos rojos', icon: '🫐' },
]

function selectDesign(type) {
  designType.value = type
  themeText.value = ''
  selectedFruits.value = []
}

function toggleFruit(fruitId) {
  const idx = selectedFruits.value.indexOf(fruitId)
  if (idx >= 0) {
    selectedFruits.value.splice(idx, 1)
  } else {
    selectedFruits.value.push(fruitId)
  }
}

function emitSelection() {
  const details = designType.value === 'tematica'
    ? { themeText: themeText.value }
    : { fruits: [...selectedFruits.value] }

  emit('select', {
    type: designType.value,
    details,
  })
}

function canContinue() {
  if (!designType.value) return false
  if (designType.value === 'tematica') return themeText.value.trim().length > 0
  return selectedFruits.value.length > 0
}
</script>

<template>
  <div class="step-content">
    <h2 class="step-title">¿Qué diseño prefieres?</h2>
    <p class="step-subtitle">Personaliza la decoración de tu pastel</p>

    <template v-if="!designType">
      <div class="options-grid">
        <button
          class="option-card"
          @click="selectDesign('tematica')"
        >
          <span class="option-icon">🎨</span>
          <span class="option-label">Con temática</span>
          <span class="option-desc">Personaliza con un tema o evento</span>
        </button>
        <button
          class="option-card"
          @click="selectDesign('frutos')"
        >
          <span class="option-icon">🍇</span>
          <span class="option-label">Frutos encima</span>
          <span class="option-desc">Decora con frutas frescas</span>
        </button>
      </div>
    </template>

    <template v-else-if="designType === 'tematica'">
      <div class="design-detail">
        <p class="detail-label">¿Qué temática o evento?</p>
        <input
          v-model="themeText"
          type="text"
          class="theme-input"
          placeholder="Ej: Cumpleaños de Mario Bros, Boda, Baby Shower..."
          @keyup.enter="canContinue() && emitSelection()"
        />
        <div class="detail-actions">
          <button class="action-btn action-btn--back" @click="designType = null">
            ◄ Cambiar diseño
          </button>
          <button
            class="action-btn action-btn--continue"
            :disabled="!canContinue()"
            @click="emitSelection()"
          >
            Continuar ✓
          </button>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="design-detail">
        <p class="detail-label">Selecciona las frutas</p>
        <div class="fruits-grid">
          <button
            v-for="fruit in fruitsList"
            :key="fruit.id"
            :class="['fruit-chip', { 'fruit-chip--active': selectedFruits.includes(fruit.id) }]"
            @click="toggleFruit(fruit.id)"
          >
            <span class="fruit-icon">{{ fruit.icon }}</span>
            <span class="fruit-label">{{ fruit.label }}</span>
            <span v-if="selectedFruits.includes(fruit.id)" class="fruit-check">✓</span>
          </button>
        </div>
        <div class="detail-actions">
          <button class="action-btn action-btn--back" @click="designType = null">
            ◄ Cambiar diseño
          </button>
          <button
            class="action-btn action-btn--continue"
            :disabled="!canContinue()"
            @click="emitSelection()"
          >
            Continuar ✓
          </button>
        </div>
      </div>
    </template>
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

.design-detail {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-label {
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Nunito', sans-serif;
  font-size: 0.9rem;
  margin: 0;
  text-align: center;
}

.theme-input {
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: 'Nunito', sans-serif;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
}

.theme-input::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.theme-input:focus {
  border-color: rgba(255, 255, 255, 0.5);
}

.fruits-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem;
}

.fruit-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  font-size: 0.9rem;
}

.fruit-chip:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
}

.fruit-chip--active {
  background: white;
  border-color: white;
  color: oklch(0.42 0.19 25);
  font-weight: 700;
}

.fruit-icon {
  font-size: 1.25rem;
}

.fruit-label {
  flex: 1;
}

.fruit-check {
  font-weight: 700;
  font-size: 0.85rem;
}

.detail-actions {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 0.25rem;
}

.action-btn {
  padding: 0.65rem 1.25rem;
  border-radius: 999px;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.action-btn--back {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.action-btn--back:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.action-btn--continue {
  background: white;
  color: oklch(0.42 0.19 25);
}

.action-btn--continue:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
}

.action-btn--continue:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
