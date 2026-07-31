<script setup>
import { computed } from 'vue'

const props = defineProps({
  selections: { type: Object, required: true },
})

defineEmits(['reset'])

const hasTwoFlavors = computed(() => props.selections.flavor?.top)
const flavorTopLabel = computed(() => props.selections.flavor?.top?.label || '')
const flavorBottomLabel = computed(() => props.selections.flavor?.bottom?.label || '')
const flavorLabel = computed(() => {
  if (!props.selections.flavor) return '-'
  if (hasTwoFlavors.value) return `Arriba: ${flavorTopLabel.value} · Abajo: ${flavorBottomLabel.value}`
  return props.selections.flavor.label
})

const designLabel = computed(() => {
  const d = props.selections.design
  if (!d) return '-'
  if (d.type === 'tematica') return `Con temática: ${d.details?.themeText || ''}`
  const fruits = d.details?.fruits || []
  const fruitLabels = { fresas: 'Fresas', durazno: 'Durazno', kiwi: 'Kiwi', 'frutos-rojos': 'Frutos rojos' }
  const names = fruits.map(f => fruitLabels[f] || f).join(', ')
  return `Frutos encima: ${names}`
})

const formattedDate = computed(() => {
  const d = props.selections.date
  if (!d) return '-'
  const [year, month, day] = d.split('-')
  return `${day}/${month}/${year}`
})

const whatsappMessage = computed(() => {
  const s = props.selections
  let designMsg = ''
  if (s.design) {
    if (s.design.type === 'tematica') {
      designMsg = `🎨 Diseño: Con temática - ${s.design.details?.themeText || ''}\n`
    } else {
      const fruits = s.design.details?.fruits || []
      const fruitLabels = { fresas: 'Fresas', durazno: 'Durazno', kiwi: 'Kiwi', 'frutos-rojos': 'Frutos rojos' }
      designMsg = `🍇 Diseño: Frutos encima - ${fruits.map(f => fruitLabels[f] || f).join(', ')}\n`
    }
  }

  return encodeURIComponent(
    `🍰 ¡Hola! Quiero hacer un pedido:\n\n` +
    (s.pastelName ? `🎂 Pastel de referencia: ${s.pastelName}\n\n` : '') +
    `📅 Fecha de entrega: ${formattedDate.value}\n` +
    `📏 Pisos: ${s.size?.pisos?.label || '-'}\n` +
    `👥 Personas: ${s.size?.persons?.label || '-'}\n` +
    (hasTwoFlavors.value
      ? `🍞 Sabor arriba: ${flavorTopLabel.value}\n🍞 Sabor abajo: ${flavorBottomLabel.value}\n`
      : `🍞 Sabor del pan: ${s.flavor?.label || '-'}\n`) +
    `🍯 Relleno: ${s.filling?.label || '-'}\n` +
    designMsg +
    `💝 Dedicatoria: ${s.dedication || '-'}\n\n` +
    `¿Podrían confirmarme disponibilidad? 🙏`
  )
})

const whatsappLink = computed(() => {
  return `https://wa.me/5212361025304?text=${whatsappMessage.value}`
})
</script>

<template>
  <div class="summary-content">
    <h2 class="summary-title">¡Tu pastel está listo!</h2>
    <p class="summary-subtitle">Revisa los detalles de tu creación</p>

    <div class="summary-card">
      <div v-if="selections.pastelName" class="summary-item">
        <span class="summary-icon">🎂</span>
        <div class="summary-info">
          <span class="summary-label">Pastel de referencia</span>
          <span class="summary-value">{{ selections.pastelName }}</span>
        </div>
      </div>

      <div v-if="selections.pastelName" class="summary-divider"></div>

      <div class="summary-item">
        <span class="summary-icon">📅</span>
        <div class="summary-info">
          <span class="summary-label">Fecha de entrega</span>
          <span class="summary-value">{{ formattedDate }}</span>
        </div>
      </div>

      <div class="summary-divider"></div>

      <div class="summary-item">
        <span class="summary-icon">🎂</span>
        <div class="summary-info">
          <span class="summary-label">Pisos</span>
          <span class="summary-value">{{ selections.size?.pisos?.label }}</span>
        </div>
      </div>

      <div class="summary-divider"></div>

      <div class="summary-item">
        <span class="summary-icon">👥</span>
        <div class="summary-info">
          <span class="summary-label">Personas</span>
          <span class="summary-value">{{ selections.size?.persons?.label }}</span>
        </div>
      </div>

      <div class="summary-divider"></div>

      <div class="summary-item">
        <span class="summary-icon">🍞</span>
        <div class="summary-info">
          <span class="summary-label">Sabor del pan</span>
          <span class="summary-value">{{ flavorLabel }}</span>
        </div>
      </div>

      <div class="summary-divider"></div>

      <div class="summary-item">
        <span class="summary-icon">🍯</span>
        <div class="summary-info">
          <span class="summary-label">Relleno</span>
          <span class="summary-value">{{ selections.filling?.label }}</span>
        </div>
      </div>

      <div class="summary-divider"></div>

      <div class="summary-item">
        <span class="summary-icon">✨</span>
        <div class="summary-info">
          <span class="summary-label">Diseño</span>
          <span class="summary-value">{{ designLabel }}</span>
        </div>
      </div>

      <div class="summary-divider"></div>

      <div class="summary-item">
        <span class="summary-icon">💝</span>
        <div class="summary-info">
          <span class="summary-label">Dedicatoria</span>
          <span class="summary-value">{{ selections.dedication || '-' }}</span>
        </div>
      </div>
    </div>

    <div class="summary-actions">
      <a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
        📱 Enviar pedido por WhatsApp
      </a>
      <button class="reset-btn" @click="$emit('reset')">
        🔄 Crear otro pastel
      </button>
    </div>
  </div>
</template>

<style scoped>
.summary-content {
  text-align: center;
}

.summary-title {
  color: white;
  font-size: 1.75rem;
  margin: 0 0 0.25rem;
}

.summary-subtitle {
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 1.5rem;
  font-family: 'Nunito', sans-serif;
}

.summary-card {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 1.25rem;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  text-align: left;
}

.summary-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
}

.summary-icon {
  font-size: 1.25rem;
  width: 2rem;
  text-align: center;
}

.summary-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.summary-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Nunito', sans-serif;
}

.summary-value {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.summary-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.25rem 0;
}

.summary-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  border-radius: 999px;
  background: #25d366;
  color: white;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;
  width: 100%;
  justify-content: center;
}

.whatsapp-btn:hover {
  background: #1ebe57;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
}

.reset-btn {
  padding: 0.75rem 2rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.reset-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
}
</style>
