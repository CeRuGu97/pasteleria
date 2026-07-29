<script setup>
defineProps({
  currentStep: { type: Number, required: true },
  totalSteps: { type: Number, default: 4 },
})
</script>

<template>
  <div class="step-progress">
    <div class="progress-bar">
      <div
        class="progress-fill"
        :style="{ width: `${(currentStep / (totalSteps + 1)) * 100}%` }"
      ></div>
    </div>
    <div class="progress-steps">
      <div
        v-for="step in totalSteps"
        :key="step"
        :class="[
          'progress-dot',
          {
            'progress-dot--active': step === currentStep,
            'progress-dot--completed': step < currentStep,
          },
        ]"
      >
        <span v-if="step < currentStep" class="dot-check">✓</span>
        <span v-else class="dot-number">{{ step }}</span>
      </div>
    </div>
    <p class="progress-label">Paso {{ currentStep > totalSteps ? totalSteps : currentStep }} de {{ totalSteps }}</p>
  </div>
</template>

<style scoped>
.step-progress {
  text-align: center;
  margin-bottom: 1.5rem;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.progress-fill {
  height: 100%;
  background: white;
  border-radius: 999px;
  transition: width 0.5s ease;
}

.progress-steps {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
}

.progress-dot {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.5);
}

.progress-dot--active {
  background: white;
  color: oklch(0.42 0.19 25);
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.progress-dot--completed {
  background: rgba(255, 255, 255, 0.3);
  color: white;
}

.dot-check {
  font-size: 0.75rem;
}

.progress-label {
  margin: 0;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Nunito', sans-serif;
}
</style>
