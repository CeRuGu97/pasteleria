<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  selected: { type: Object, default: null },
})

const emit = defineEmits(['select'])

const subStep = ref(props.selected ? 'persons' : 'pisos')
const selectedPiso = ref(props.selected?.pisos || null)

const pisoOptions = [
  { id: 1, label: '1 Piso', icon: '🎂', description: 'Pastel de un solo nivel' },
  { id: 2, label: '2 Pisos', icon: '🎂🎂', description: 'Pastel de dos niveles' },
]

const persons1Piso = [5, 10, 15, 20, 30, 40, 50, 60]
const persons2Pisos = [60, 70, 80, 90, 100]

const personsIcons = {
  5: '👤', 10: '👥', 15: '👨‍👩‍👧‍👦', 20: '🎉',
  30: '🎊', 40: '🎈', 50: '🥳', 60: '🎇',
  70: '🎆', 80: '🏰', 90: '⭐', 100: '👑',
}

function selectPiso(piso) {
  selectedPiso.value = piso
  subStep.value = 'persons'
}

function selectPersons(count) {
  emit('select', {
    pisos: selectedPiso.value,
    persons: { id: count, label: `${count} personas`, icon: personsIcons[count] || '🎂' },
  })
}

function backToPisos() {
  subStep.value = 'pisos'
  selectedPiso.value = null
}
</script>

<template>
  <div class="step-content">
    <template v-if="subStep === 'pisos'">
      <h2 class="step-title">¿Cuántos pisos?</h2>
      <p class="step-subtitle">Elige el tamaño de tu pastel</p>

      <div class="options-grid">
        <button
          v-for="opt in pisoOptions"
          :key="opt.id"
          class="option-card"
          @click="selectPiso(opt)"
        >
          <span class="option-icon">{{ opt.icon }}</span>
          <span class="option-label">{{ opt.label }}</span>
          <span class="option-desc">{{ opt.description }}</span>
        </button>
      </div>
    </template>

    <template v-else>
      <h2 class="step-title">¿Para cuántas personas?</h2>
      <p class="step-subtitle">
        {{ selectedPiso.id === 1 ? 'Pastel de 1 piso' : 'Pastel de 2 pisos' }}
      </p>

      <div class="options-grid persons-grid">
        <button
          v-for="count in (selectedPiso.id === 1 ? persons1Piso : persons2Pisos)"
          :key="count"
          class="option-card option-card--person"
          @click="selectPersons(count)"
        >
          <span class="option-icon">{{ personsIcons[count] || '🎂' }}</span>
          <span class="option-label">{{ count }} personas</span>
        </button>
      </div>

      <button class="back-btn" @click="backToPisos">
        ◄ Cambiar número de pisos
      </button>
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

.persons-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
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

.option-card--person {
  padding: 1rem 0.5rem;
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
