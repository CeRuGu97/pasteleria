<script setup>
import { computed } from 'vue'

const props = defineProps({
  selections: { type: Object, required: true },
  totalPrice: { type: Number, required: true },
})

defineEmits(['reset'])

const whatsappMessage = computed(() => {
  const s = props.selections
  return encodeURIComponent(
    `🍰 ¡Hola! Quiero hacer un pedido:\n\n` +
    `📏 Tamaño: ${s.size?.label || '-'}\n` +
    `🎂 Tipo: ${s.type?.label || '-'}\n` +
    `🍯 Relleno: ${s.filling?.label || '-'}\n` +
    `🍞 Pan: ${s.flavor?.label || '-'}\n` +
    `💰 Precio total: $${props.totalPrice}\n\n` +
    `¿Podrían confirmarme disponibilidad y fecha de entrega? 🙏`
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
      <div class="summary-item">
        <span class="summary-icon">📏</span>
        <div class="summary-info">
          <span class="summary-label">Tamaño</span>
          <span class="summary-value">{{ selections.size?.label }}</span>
        </div>
        <span class="summary-price">${{ selections.size?.price }}</span>
      </div>

      <div class="summary-divider"></div>

      <div class="summary-item">
        <span class="summary-icon">🥛</span>
        <div class="summary-info">
          <span class="summary-label">Tipo</span>
          <span class="summary-value">{{ selections.type?.label }}</span>
        </div>
        <span class="summary-price">+${{ selections.type?.price }}</span>
      </div>

      <div class="summary-divider"></div>

      <div class="summary-item">
        <span class="summary-icon">{{ selections.filling?.icon }}</span>
        <div class="summary-info">
          <span class="summary-label">Relleno</span>
          <span class="summary-value">{{ selections.filling?.label }}</span>
        </div>
        <span class="summary-price">+${{ selections.filling?.price }}</span>
      </div>

      <div class="summary-divider"></div>

      <div class="summary-item">
        <span class="summary-icon">{{ selections.flavor?.icon }}</span>
        <div class="summary-info">
          <span class="summary-label">Sabor de pan</span>
          <span class="summary-value">{{ selections.flavor?.label }}</span>
        </div>
        <span class="summary-price">Incluido</span>
      </div>

      <div class="summary-total">
        <span>Total</span>
        <span class="summary-total-price">${{ totalPrice }}</span>
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
  font-size: 0.95rem;
}

.summary-price {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  font-family: 'Nunito', sans-serif;
}

.summary-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.25rem 0;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.75rem;
  margin-top: 0.5rem;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 700;
  font-size: 1rem;
}

.summary-total-price {
  font-size: 1.4rem;
  color: oklch(0.93 0.04 15);
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
