<script setup lang="ts">
defineProps<{
  text: string
  variant?: 'zhuwen' | 'baiwen' | 'gilt'
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <span
    class="inline-flex items-center justify-center font-serif select-none shrink-0"
    :class="[
      size === 'sm' ? 'px-2 py-0.5 text-xs tracking-widest' :
      size === 'lg' ? 'px-3.5 py-1.5 text-base tracking-[0.2em]' :
      'px-2.5 py-1 text-xs tracking-[0.15em]',
      variant === 'zhuwen'
        ? 'bg-cinnabar/10 text-cinnabar border-2 border-cinnabar font-bold rounded-sm shadow-sm'
        : variant === 'gilt'
        ? 'bg-gilt/15 text-gilt-dark border border-gilt font-semibold rounded-sm'
        : 'tang-seal'
    ]"
  >
    {{ text }}
  </span>
</template>
