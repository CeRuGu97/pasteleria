<script setup>
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import CakePreview from '../components/cake-builder/CakePreview.vue'
import StepProgress from '../components/cake-builder/StepProgress.vue'
import DateStep from '../components/cake-builder/DateStep.vue'
import SizeStep from '../components/cake-builder/SizeStep.vue'
import FillingStep from '../components/cake-builder/FillingStep.vue'
import FlavorStep from '../components/cake-builder/FlavorStep.vue'
import DesignStep from '../components/cake-builder/DesignStep.vue'
import DedicationStep from '../components/cake-builder/DedicationStep.vue'
import OrderSummary from '../components/cake-builder/OrderSummary.vue'

const totalSteps = 6
const currentStep = ref(1)
const route = useRoute()

const selections = reactive({
  date: '',
  size: null,
  flavor: null,
  filling: null,
  design: null,
  dedication: '',
  pastelName: route.query.pastel || null,
})

function handleSelect(step, option) {
  const keys = ['date', 'size', 'flavor', 'filling', 'design', 'dedication']
  selections[keys[step - 1]] = option
  if (currentStep.value < totalSteps) {
    currentStep.value++
  } else {
    currentStep.value = totalSteps + 1
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    if (currentStep.value > totalSteps) {
      currentStep.value = totalSteps
    } else {
      currentStep.value--
    }
  }
}

function reset() {
  currentStep.value = 1
  selections.date = ''
  selections.size = null
  selections.flavor = null
  selections.filling = null
  selections.design = null
  selections.dedication = ''
  selections.pastelName = null
}
</script>

<template>
  <div class="builder-view">
    <div class="builder-bg-dot builder-bg-dot--a"></div>
    <div class="builder-bg-dot builder-bg-dot--b"></div>

    <div class="container">
      <div class="builder-header">
        <h1 class="builder-logo">🎂 Arma tu pastel</h1>
        <p class="builder-tagline">Personaliza paso a paso tu creación ideal</p>
        <p v-if="selections.pastelName" class="builder-badge">✨ Basado en: "{{ selections.pastelName }}"</p>
      </div>

      <div class="preview-area">
        <CakePreview :selections="selections" />
      </div>

      <StepProgress :current-step="currentStep" :total-steps="totalSteps" />

      <div class="step-area">
        <Transition name="step-fade" mode="out-in">
          <DateStep
            v-if="currentStep === 1"
            :key="1"
            :selected="selections.date"
            @select="(opt) => handleSelect(1, opt)"
          />
          <SizeStep
            v-else-if="currentStep === 2"
            :key="2"
            :selected="selections.size"
            @select="(opt) => handleSelect(2, opt)"
          />
          <FlavorStep
            v-else-if="currentStep === 3"
            :key="3"
            :selected="selections.flavor"
            :pisos="selections.size?.pisos?.id || 1"
            @select="(opt) => handleSelect(3, opt)"
          />
          <FillingStep
            v-else-if="currentStep === 4"
            :key="4"
            :selected="selections.filling"
            @select="(opt) => handleSelect(4, opt)"
          />
          <DesignStep
            v-else-if="currentStep === 5"
            :key="5"
            :selected="selections.design"
            @select="(opt) => handleSelect(5, opt)"
          />
          <DedicationStep
            v-else-if="currentStep === 6"
            :key="6"
            :selected="selections.dedication"
            @select="(opt) => handleSelect(6, opt)"
          />
          <OrderSummary
            v-else
            :key="7"
            :selections="selections"
            @reset="reset"
          />
        </Transition>
      </div>

      <div v-if="currentStep <= totalSteps" class="builder-nav">
        <button
          class="nav-btn nav-btn--back"
          :disabled="currentStep === 1"
          @click="prevStep"
        >
          ◄ Atrás
        </button>
        <span class="nav-empty"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.builder-view {
  min-height: 100vh;
  padding: 7rem 0 3rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, oklch(0.42 0.19 25) 0%, oklch(0.35 0.18 20) 50%, oklch(0.28 0.15 15) 100%);
}

.builder-bg-dot {
  position: absolute;
  border-radius: 50%;
  background: white;
  opacity: 0.05;
  pointer-events: none;
}

.builder-bg-dot--a {
  top: -5rem;
  right: -5rem;
  width: 20rem;
  height: 20rem;
}

.builder-bg-dot--b {
  bottom: -3rem;
  left: -3rem;
  width: 15rem;
  height: 15rem;
}

.builder-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.builder-logo {
  color: white;
  font-size: 1.75rem;
  margin: 0 0 0.25rem;
}

.builder-tagline {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin: 0;
  font-family: 'Nunito', sans-serif;
}

.builder-badge {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.8rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.preview-area {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 1.5rem;
  padding: 1.5rem 1rem;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.step-area {
  min-height: 260px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.builder-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.nav-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.nav-btn--back {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.nav-btn--back:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-empty {
  flex: 1;
}

.step-fade-enter-active,
.step-fade-leave-active {
  transition: all 0.35s ease;
}

.step-fade-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.step-fade-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

@media (min-width: 768px) {
  .preview-area {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .step-area {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
