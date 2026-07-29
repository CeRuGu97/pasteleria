<script setup>
import { computed } from 'vue'

const props = defineProps({
  selections: { type: Object, required: true },
})

const FLAVOR_COLORS = {
  vainilla: '#f5e6c8',
  chocolate: '#6b3a2a',
}

const FILLING_COLORS = {
  mermelada: '#c0392b',
  chocolate: '#5d3a1a',
  cacahuate: '#d4a574',
}

const SIZE_SCALES = { 5: 0.7, 10: 0.85, 15: 1, 20: 1.15 }

const scale = computed(() => SIZE_SCALES[props.selections.size?.id] || 0.85)

const cakeColor = computed(() => {
  return props.selections.flavor ? FLAVOR_COLORS[props.selections.flavor.id] : '#f5e6c8'
})

const fillingColor = computed(() => {
  return props.selections.filling ? FILLING_COLORS[props.selections.filling.id] : '#e8d5c4'
})

const hasFilling = computed(() => !!props.selections.filling)
const hasFlavor = computed(() => !!props.selections.flavor)
const hasType = computed(() => !!props.selections.type)
const hasSize = computed(() => !!props.selections.size)

const flavorLabel = computed(() => {
  if (!props.selections.flavor) return '?'
  return props.selections.flavor.id === 'vainilla' ? 'Vainilla' : 'Chocolate'
})

const typeLabel = computed(() => {
  if (!props.selections.type) return '?'
  return props.selections.type.id === '3leches' ? '3 Leches' : '2 Leches'
})
</script>

<template>
  <div class="cake-preview">
    <svg viewBox="0 0 300 340" class="cake-svg" :style="{ transform: `scale(${scale})` }">
      <!-- Cake stand / plate -->
      <ellipse cx="150" cy="305" rx="130" ry="14" fill="#e0d5c7" opacity="0.6" />
      <rect x="30" y="293" width="240" height="12" rx="6" fill="#d4c4b0" />
      <ellipse cx="150" cy="293" rx="120" ry="10" fill="#e8dccf" />
      <ellipse cx="150" cy="305" rx="130" ry="14" fill="none" stroke="#c4b4a0" stroke-width="1" opacity="0.5" />

      <!-- Cake shadow -->
      <ellipse cx="150" cy="295" rx="110" ry="8" fill="rgba(0,0,0,0.08)" />

      <!-- Bottom cake layer (flavor colored) -->
      <rect x="45" y="175" width="210" height="118" rx="10" :fill="cakeColor" class="cake-body" />
      <!-- Inner shadow/detail on cake -->
      <rect x="45" y="175" width="210" height="118" rx="10" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
      <!-- Subtle texture lines -->
      <line x1="50" y1="200" x2="250" y2="200" stroke="rgba(0,0,0,0.03)" stroke-width="1" />
      <line x1="50" y1="240" x2="250" y2="240" stroke="rgba(0,0,0,0.03)" stroke-width="1" />
      <line x1="50" y1="270" x2="250" y2="270" stroke="rgba(0,0,0,0.03)" stroke-width="1" />

      <!-- Filling layer -->
      <rect
        v-if="hasFilling"
        x="48"
        y="225"
        width="204"
        height="22"
        rx="3"
        :fill="fillingColor"
        class="filling-layer"
      />
      <!-- Filling texture dots -->
      <g v-if="hasFilling" class="filling-dots">
        <circle cx="80" cy="236" r="2" fill="rgba(255,255,255,0.3)" />
        <circle cx="120" cy="233" r="1.5" fill="rgba(255,255,255,0.3)" />
        <circle cx="160" cy="238" r="2" fill="rgba(255,255,255,0.3)" />
        <circle cx="200" cy="234" r="1.5" fill="rgba(255,255,255,0.3)" />
        <circle cx="230" cy="236" r="2" fill="rgba(255,255,255,0.3)" />
      </g>

      <!-- Frosting top border -->
      <path
        d="M45,175 Q55,155 75,165 Q95,175 115,160 Q135,150 150,158 Q165,165 185,155 Q205,148 225,162 Q245,172 255,175"
        fill="#fff5f0"
        stroke="rgba(0,0,0,0.05)"
        stroke-width="0.5"
      />
      <!-- Extra frosting drip -->
      <path
        d="M65,165 Q70,185 75,170"
        fill="#fff5f0"
        stroke="none"
      />
      <path
        d="M230,163 Q235,188 240,168"
        fill="#fff5f0"
        stroke="none"
      />

      <!-- Frosting swirls on top -->
      <ellipse cx="150" cy="162" rx="95" ry="18" fill="#fef5f0" />
      <path
        d="M60,165 Q80,145 100,160 Q120,175 140,155 Q160,140 180,155 Q200,170 220,158 Q240,148 250,162"
        fill="none"
        stroke="rgba(180,120,100,0.2)"
        stroke-width="3"
        stroke-linecap="round"
      />

      <!-- Cherry on top -->
      <circle cx="150" cy="140" r="10" fill="#c0392b" class="cherry" />
      <ellipse cx="147" cy="137" rx="3" ry="2" fill="rgba(255,255,255,0.4)" />
      <!-- Cherry stem -->
      <path d="M150,130 Q155,118 162,115" fill="none" stroke="#2d5016" stroke-width="2" stroke-linecap="round" />

      <!-- Small decorative dots on top -->
      <circle cx="100" cy="150" r="3" fill="#f8c8d4" />
      <circle cx="200" cy="148" r="3" fill="#f8c8d4" />
      <circle cx="125" cy="143" r="2.5" fill="#c8e6c9" />
      <circle cx="175" cy="142" r="2.5" fill="#c8e6c9" />

      <!-- Labels -->
      <g class="cake-labels">
        <rect x="85" y="78" width="130" height="36" rx="18" fill="rgba(0,0,0,0.65)" />
        <text
          x="150"
          y="93"
          text-anchor="middle"
          fill="white"
          font-size="11"
          font-family="Nunito, sans-serif"
          font-weight="700"
        >
          {{ typeLabel }}
        </text>
        <text
          x="150"
          y="106"
          text-anchor="middle"
          fill="rgba(255,255,255,0.8)"
          font-size="9"
          font-family="Nunito, sans-serif"
        >
          {{ flavorLabel }}
        </text>
      </g>

      <!-- Size indicator -->
      <g v-if="hasSize" class="size-indicator">
        <text
          x="150"
          y="335"
          text-anchor="middle"
          fill="#8b7355"
          font-size="12"
          font-family="Nunito, sans-serif"
          font-weight="600"
        >
          {{ selections.size.id }} personas
        </text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.cake-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
}

.cake-svg {
  width: 100%;
  max-width: 300px;
  height: auto;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cake-body,
.filling-layer,
.filling-dots,
.cake-labels,
.size-indicator,
.cherry {
  transition: all 0.5s ease;
}

@keyframes appear {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.cake-svg {
  animation: appear 0.6s ease;
}
</style>
