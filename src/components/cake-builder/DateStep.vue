<script setup>
import { ref } from 'vue'

const props = defineProps({
  selected: { type: String, default: '' },
})

const emit = defineEmits(['select'])

const date = ref(props.selected || '')

function submit() {
  if (date.value) {
    emit('select', date.value)
  }
}
</script>

<template>
  <div class="step-content">
    <h2 class="step-title">¿Cuándo quieres tu pastel?</h2>
    <p class="step-subtitle">Selecciona la fecha de entrega</p>

    <div class="date-form">
      <input
        v-model="date"
        type="date"
        class="date-input"
        :min="new Date().toISOString().split('T')[0]"
      />
      <button
        class="continue-btn"
        :disabled="!date"
        @click="submit()"
      >
        Continuar ✓
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

.date-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.date-input {
  width: 100%;
  max-width: 280px;
  padding: 0.85rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  text-align: center;
}

.date-input:focus {
  border-color: rgba(255, 255, 255, 0.5);
}

.date-input::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
}

.continue-btn {
  padding: 0.75rem 2rem;
  border-radius: 999px;
  border: none;
  background: white;
  color: oklch(0.42 0.19 25);
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.continue-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
}

.continue-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
