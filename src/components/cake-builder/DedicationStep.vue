<script setup>
import { ref } from 'vue'

const props = defineProps({
  selected: { type: String, default: '' },
})

const emit = defineEmits(['select'])

const dedication = ref(props.selected || '')

function submit() {
  if (dedication.value.trim()) {
    emit('select', dedication.value.trim())
  }
}
</script>

<template>
  <div class="step-content">
    <h2 class="step-title">Personaliza tu dedicatoria</h2>
    <p class="step-subtitle">Agrega un mensaje especial para tu pastel</p>

    <div class="dedication-form">
      <textarea
        v-model="dedication"
        class="dedication-input"
        placeholder="Ej: ¡Feliz cumpleaños, te quiero mucho! ♥"
        rows="3"
        @keyup.enter.exact="submit()"
      ></textarea>
      <button
        class="continue-btn"
        :disabled="!dedication.trim()"
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

.dedication-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dedication-input {
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: 'Nunito', sans-serif;
  font-size: 0.95rem;
  outline: none;
  resize: vertical;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
}

.dedication-input::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.dedication-input:focus {
  border-color: rgba(255, 255, 255, 0.5);
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
  align-self: center;
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
