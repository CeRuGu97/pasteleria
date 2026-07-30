<script setup>
import { computed } from 'vue'

const props = defineProps({
  selections: { type: Object, required: true },
})

const FLAVOR_COLORS = {
  vainilla: '#f5e6c8',
  chocolate: '#6b3a2a',
  moka: '#8b5e3c',
}

const scale = computed(() => {
  const count = props.selections.size?.persons?.id || 10
  if (count <= 10) return 0.72
  if (count <= 20) return 0.82
  if (count <= 40) return 0.92
  return 1
})

const cakeColor = computed(() => {
  return props.selections.flavor ? FLAVOR_COLORS[props.selections.flavor.id] : '#f5e6c8'
})

const hasTwoPisos = computed(() => props.selections.size?.pisos?.id === 2)
const hasFlavor = computed(() => !!props.selections.flavor)
const hasFilling = computed(() => !!props.selections.filling)

const flavorLabel = computed(() => {
  if (!props.selections.flavor) return '?'
  const labels = { vainilla: 'Vainilla', chocolate: 'Chocolate', moka: 'Moka' }
  return labels[props.selections.flavor.id] || '?'
})

const sizeLabel = computed(() => {
  return props.selections.size?.persons?.label || '?'
})
</script>

<template>
  <div class="cake-preview">
    <svg viewBox="0 0 300 380" class="cake-svg" :style="{ transform: `scale(${scale})` }">
      <!-- Cake stand / plate -->
      <ellipse cx="150" cy="345" rx="130" ry="14" fill="#e0d5c7" opacity="0.6" />
      <rect x="30" y="333" width="240" height="12" rx="6" fill="#d4c4b0" />
      <ellipse cx="150" cy="333" rx="120" ry="10" fill="#e8dccf" />
      <ellipse cx="150" cy="345" rx="130" ry="14" fill="none" stroke="#c4b4a0" stroke-width="1" opacity="0.5" />

      <!-- Cake shadow -->
      <ellipse cx="150" cy="335" rx="110" ry="8" fill="rgba(0,0,0,0.08)" />

      <!-- ===== SINGLE PISO CAKE ===== -->
      <template v-if="!hasTwoPisos">
        <!-- Bottom cake layer -->
        <rect x="45" y="215" width="210" height="118" rx="10" :fill="cakeColor" class="cake-body" />
        <rect x="45" y="215" width="210" height="118" rx="10" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
        <line x1="50" y1="240" x2="250" y2="240" stroke="rgba(0,0,0,0.03)" stroke-width="1" />
        <line x1="50" y1="280" x2="250" y2="280" stroke="rgba(0,0,0,0.03)" stroke-width="1" />
        <line x1="50" y1="310" x2="250" y2="310" stroke="rgba(0,0,0,0.03)" stroke-width="1" />

        <!-- Filling layer -->
        <rect
          v-if="hasFilling"
          x="48"
          y="265"
          width="204"
          height="18"
          rx="3"
          fill="rgba(255,255,255,0.25)"
          class="filling-layer"
        />

        <!-- Frosting top border -->
        <path
          d="M45,215 Q55,195 75,205 Q95,215 115,200 Q135,190 150,198 Q165,205 185,195 Q205,188 225,202 Q245,212 255,215"
          fill="#fff5f0"
          stroke="rgba(0,0,0,0.05)"
          stroke-width="0.5"
        />
        <path d="M65,205 Q70,225 75,210" fill="#fff5f0" stroke="none" />
        <path d="M230,203 Q235,228 240,208" fill="#fff5f0" stroke="none" />

        <!-- Frosting swirls on top -->
        <ellipse cx="150" cy="202" rx="95" ry="18" fill="#fef5f0" />
        <path
          d="M60,205 Q80,185 100,200 Q120,215 140,195 Q160,180 180,195 Q200,210 220,198 Q240,188 250,202"
          fill="none"
          stroke="rgba(180,120,100,0.2)"
          stroke-width="3"
          stroke-linecap="round"
        />

        <!-- Cherry on top -->
        <circle cx="150" cy="180" r="10" fill="#c0392b" class="cherry" />
        <ellipse cx="147" cy="177" rx="3" ry="2" fill="rgba(255,255,255,0.4)" />
        <path d="M150,170 Q155,158 162,155" fill="none" stroke="#2d5016" stroke-width="2" stroke-linecap="round" />

        <!-- Small decorative dots -->
        <circle cx="100" cy="190" r="3" fill="#f8c8d4" />
        <circle cx="200" cy="188" r="3" fill="#f8c8d4" />
        <circle cx="125" cy="183" r="2.5" fill="#c8e6c9" />
        <circle cx="175" cy="182" r="2.5" fill="#c8e6c9" />
      </template>

      <!-- ===== TWO PISO CAKE ===== -->
      <template v-else>
        <!-- Bottom tier -->
        <rect x="35" y="240" width="230" height="95" rx="10" :fill="cakeColor" class="cake-body" />
        <rect x="35" y="240" width="230" height="95" rx="10" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
        <line x1="40" y1="270" x2="260" y2="270" stroke="rgba(0,0,0,0.03)" stroke-width="1" />
        <line x1="40" y1="310" x2="260" y2="310" stroke="rgba(0,0,0,0.03)" stroke-width="1" />

        <!-- Filling layer bottom tier -->
        <rect
          v-if="hasFilling"
          x="38"
          y="292"
          width="224"
          height="16"
          rx="3"
          fill="rgba(255,255,255,0.25)"
          class="filling-layer"
        />

        <!-- Top tier -->
        <rect x="65" y="170" width="170" height="72" rx="8" :fill="cakeColor" class="cake-body" />
        <rect x="65" y="170" width="170" height="72" rx="8" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="1" />
        <line x1="70" y1="195" x2="230" y2="195" stroke="rgba(0,0,0,0.03)" stroke-width="1" />
        <line x1="70" y1="225" x2="230" y2="225" stroke="rgba(0,0,0,0.03)" stroke-width="1" />

        <!-- Filling layer top tier -->
        <rect
          v-if="hasFilling"
          x="68"
          y="212"
          width="164"
          height="14"
          rx="3"
          fill="rgba(255,255,255,0.25)"
          class="filling-layer"
        />

        <!-- Frosting top tier -->
        <path
          d="M65,170 Q75,155 90,162 Q110,172 130,158 Q145,148 150,155 Q160,162 175,152 Q195,145 210,158 Q225,168 235,170"
          fill="#fff5f0"
          stroke="rgba(0,0,0,0.05)"
          stroke-width="0.5"
        />
        <ellipse cx="150" cy="158" rx="78" ry="14" fill="#fef5f0" />
        <path
          d="M75,162 Q90,145 110,157 Q130,170 150,153 Q165,142 180,155 Q200,168 220,155 Q228,150 232,160"
          fill="none"
          stroke="rgba(180,120,100,0.2)"
          stroke-width="3"
          stroke-linecap="round"
        />

        <!-- Frosting bottom tier -->
        <path
          d="M35,240 Q45,225 60,230 Q80,240 100,228 Q120,220 140,228 Q155,233 160,225 Q180,218 200,230 Q220,240 235,228 Q250,220 265,240"
          fill="none"
          stroke="rgba(180,120,100,0.15)"
          stroke-width="3"
          stroke-linecap="round"
        />

        <!-- Cherry on top -->
        <circle cx="150" cy="140" r="10" fill="#c0392b" class="cherry" />
        <ellipse cx="147" cy="137" rx="3" ry="2" fill="rgba(255,255,255,0.4)" />
        <path d="M150,130 Q155,118 162,115" fill="none" stroke="#2d5016" stroke-width="2" stroke-linecap="round" />

        <!-- Decorative dots top tier -->
        <circle cx="110" cy="150" r="3" fill="#f8c8d4" />
        <circle cx="190" cy="148" r="3" fill="#f8c8d4" />
        <circle cx="135" cy="145" r="2.5" fill="#c8e6c9" />
        <circle cx="165" cy="144" r="2.5" fill="#c8e6c9" />
      </template>

      <!-- Labels -->
      <g class="cake-labels">
        <rect x="85" y="98" width="130" height="36" rx="18" fill="rgba(0,0,0,0.65)" />
        <text
          x="150"
          y="113"
          text-anchor="middle"
          fill="white"
          font-size="11"
          font-family="Nunito, sans-serif"
          font-weight="700"
        >
          {{ flavorLabel }}
        </text>
        <text
          x="150"
          y="126"
          text-anchor="middle"
          fill="rgba(255,255,255,0.8)"
          font-size="9"
          font-family="Nunito, sans-serif"
        >
          {{ sizeLabel }}
        </text>
      </g>

      <!-- Size indicator -->
      <g v-if="selections.size" class="size-indicator">
        <text
          x="150"
          y="375"
          text-anchor="middle"
          fill="#8b7355"
          font-size="12"
          font-family="Nunito, sans-serif"
          font-weight="600"
        >
          {{ selections.size.pisos.label }} · {{ selections.size.persons.label }}
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
