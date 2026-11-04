<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    size: 'md'
  }
)
</script>

<template>
  <div
    class="relative inline-flex items-center justify-center shrink-0 select-none transition-transform duration-300 group-hover:scale-105"
    :class="[
      size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11 sm:w-12 sm:h-12'
    ]"
  >
    <!-- Subtle Imperial Golden Aura on Hover -->
    <div
      class="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-gilt-light via-cinnabar to-gilt opacity-35 blur-[3px] group-hover:opacity-75 transition-opacity duration-300 pointer-events-none"
    ></div>

    <!-- Custom Vector Emblem: Daming Palace Flying Eaves & Imperial Tang Seal -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      class="relative w-full h-full drop-shadow-[0_3px_8px_rgba(24,18,15,0.45)]"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tangEmblemCinnabar" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#D13832" />
          <stop offset="48%" stop-color="#9E1E1E" />
          <stop offset="100%" stop-color="#58121E" />
        </linearGradient>

        <radialGradient id="tangEmblemGlow" cx="32" cy="28" r="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#E64B40" stop-opacity="0.45" />
          <stop offset="70%" stop-color="#9E1E1E" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#3E0C16" stop-opacity="0.38" />
        </radialGradient>

        <linearGradient id="tangEmblemGilt" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFF3C8" />
          <stop offset="28%" stop-color="#E7C475" />
          <stop offset="62%" stop-color="#C89B40" />
          <stop offset="100%" stop-color="#8B631B" />
        </linearGradient>

        <linearGradient id="tangEmblemIvory" x1="32" y1="18" x2="32" y2="53" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFFDF9" />
          <stop offset="48%" stop-color="#FDF4DF" />
          <stop offset="85%" stop-color="#F2D28B" />
          <stop offset="100%" stop-color="#D9AC4E" />
        </linearGradient>

        <filter id="tangEmblemDrop" x="-15%" y="-15%" width="130%" height="135%" filterUnits="objectBoundingBox">
          <feDropShadow dx="0" dy="1.4" stdDeviation="1.1" flood-color="#2B070B" flood-opacity="0.58" />
        </filter>
      </defs>

      <!-- Outer Cinnabar Seal Plaque -->
      <rect x="2" y="2" width="60" height="60" rx="13.5" fill="url(#tangEmblemCinnabar)" stroke="url(#tangEmblemGilt)" stroke-width="2.4" />
      <rect x="3.2" y="3.2" width="57.6" height="57.6" rx="12.3" fill="url(#tangEmblemGlow)" />

      <!-- Inner Gilt Frame & Four-Corner Fretwork -->
      <rect x="6.2" y="6.2" width="51.6" height="51.6" rx="8.5" stroke="url(#tangEmblemGilt)" stroke-width="1" stroke-opacity="0.68" />
      <g stroke="url(#tangEmblemGilt)" stroke-width="1.3" stroke-linecap="square" opacity="0.9">
        <path d="M6.2 14.5 H10.5 V10.2 H14.5 V6.2" />
        <path d="M57.8 14.5 H53.5 V10.2 H49.5 V6.2" />
        <path d="M6.2 49.5 H10.5 V53.8 H14.5 V57.8" />
        <path d="M57.8 49.5 H53.5 V53.8 H49.5 V57.8" />
      </g>

      <!-- Baoxiang Lotus Medallion Aura -->
      <g opacity="0.15" stroke="url(#tangEmblemGilt)" stroke-width="0.9">
        <circle cx="32" cy="35" r="18.5" />
        <circle cx="32" cy="35" r="15" stroke-dasharray="2.2 1.8" />
      </g>

      <!-- Daming Palace Flying Eaves & Chiwei Finials -->
      <g filter="url(#tangEmblemDrop)">
        <path d="M32 7.5 L34.2 10.4 L32 12.1 L29.8 10.4 Z" fill="url(#tangEmblemGilt)" />
        <path
          d="M11.2 17.5
             C15.0 17.1, 18.8 15.4, 21.6 12.4
             L20.4 10.4
             L23.2 10.6
             L24.2 12.0
             H39.8
             L40.8 10.6
             L43.6 10.4
             L42.4 12.4
             C45.2 15.4, 49.0 17.1, 52.8 17.5
             C50.4 19.2, 46.8 19.5, 43.2 18.1
             C40.5 17.1, 37.8 15.5, 36.2 14.5
             H27.8
             C26.2 15.5, 23.5 17.1, 20.8 18.1
             C17.2 19.5, 13.6 19.2, 11.2 17.5 Z"
          fill="url(#tangEmblemGilt)"
        />
        <rect x="21" y="17.6" width="22" height="1.5" rx="0.75" fill="url(#tangEmblemGilt)" opacity="0.92" />
      </g>

      <!-- Central Imperial Character TANG -->
      <g filter="url(#tangEmblemDrop)" fill="url(#tangEmblemIvory)">
        <path d="M30.4 19.5 L34.8 20.4 L33.9 24.2 L29.6 23.4 Z" />
        <path d="M16.8 23.6 H46.2 L48.4 25.4 L46.8 27.1 H16.8 Z" />
        <path d="M18.0 25.2 H22.2 C21.9 34.8, 19.6 44.2, 14.2 51.6 L11.1 49.3 C15.7 42.9, 17.7 34.4, 18.0 25.2 Z" />
        <path d="M24.2 30.2 H44.2 L45.4 31.4 V41.6 H41.6 V33.2 H24.2 Z" />
        <path d="M22.4 34.6 H47.8 L49.0 36.1 L47.6 37.6 H22.4 Z" />
        <path d="M24.2 39.2 H43.8 V42.0 H24.2 Z" />
        <path d="M32.2 27.4 H36.0 V41.6 H32.2 Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.6 43.8 H44.2 L45.2 44.8 V52.8 H24.6 V43.8 Z
             M28.4 46.6 V50.0 H41.4 V46.6 H28.4 Z"
        />
      </g>

      <!-- Silk Road Auspicious Wave Ribbon -->
      <path
        d="M17.5 55.4 Q24.8 53.4 32 55.4 T46.5 55.4"
        stroke="url(#tangEmblemGilt)"
        stroke-width="1.5"
        stroke-linecap="round"
        opacity="0.9"
      />
      <circle cx="32" cy="55.4" r="1.2" fill="url(#tangEmblemGilt)" />
    </svg>
  </div>
</template>
