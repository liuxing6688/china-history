<script setup lang="ts">
import TangSealBadge from './TangSealBadge.vue'

defineProps<{
  seal: string
  enSubtitle: string
  title: string
  description?: string
  align?: 'center' | 'left'
}>()
</script>

<template>
  <div
    class="mb-10"
    :class="align === 'left' ? 'text-left' : 'text-center mx-auto max-w-4xl'"
  >
    <div
      class="inline-flex items-center gap-3 mb-3"
      :class="align === 'left' ? '' : 'justify-center'"
    >
      <TangSealBadge :text="seal" size="sm" />
      <span class="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-gilt-dark font-semibold">
        {{ enSubtitle }}
      </span>
    </div>

    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-ink tracking-wide leading-tight">
      {{ title }}
    </h2>

    <!-- 唐式宝相花鎏金分隔线 -->
    <div
      class="flex items-center gap-3 my-4"
      :class="align === 'left' ? 'justify-start' : 'justify-center'"
      aria-hidden="true"
    >
      <span class="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-gilt to-cinnabar"></span>
      <svg class="w-5 h-5 text-cinnabar shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.8 8.5L22 9.3L16.5 14L18.2 21L12 17.3L5.8 21L7.5 14L2 9.3L9.2 8.5L12 2Z" />
      </svg>
      <span class="h-[1px] w-14 sm:w-24 bg-gradient-to-l from-transparent via-gilt to-cinnabar"></span>
    </div>

    <p
      v-if="description"
      class="text-sm sm:text-base text-ink-secondary leading-relaxed mt-2"
    >
      {{ description }}
    </p>
  </div>
</template>
