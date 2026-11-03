<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { X, ZoomIn, ZoomOut, RotateCcw, Landmark, Calendar, BookOpen } from 'lucide-vue-next'

const props = defineProps<{
  visible: boolean
  image: string
  title: string
  subtitle?: string
  era?: string
  locationOrSource?: string
  description?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const scale = ref(1)

watch(() => props.visible, (val) => {
  if (val) {
    scale.value = 1
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

function zoomIn() {
  if (scale.value < 2.4) scale.value = +(scale.value + 0.3).toFixed(1)
}

function zoomOut() {
  if (scale.value > 0.7) scale.value = +(scale.value - 0.3).toFixed(1)
}

function resetZoom() {
  scale.value = 1
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.visible) {
    emit('close')
  }
}

onMounted(() => window.addEventListener('keydown', onKeyDown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="visible"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        @click.self="emit('close')"
      >
        <div class="relative w-full max-w-5xl bg-xuan-card border border-gilt/50 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
          <!-- Top Bar -->
          <div class="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-xuan-paper border-b border-gilt/30">
            <div class="min-w-0 pr-4">
              <h3 class="text-base sm:text-lg font-serif font-bold text-ink truncate">
                {{ title }}
              </h3>
              <p v-if="subtitle" class="text-xs text-ink-muted truncate">
                {{ subtitle }}
              </p>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                class="p-2 rounded hover:bg-gilt/20 text-ink-secondary transition cursor-pointer"
                title="缩小视图"
                aria-label="缩小视图"
                @click="zoomOut"
              >
                <ZoomOut class="w-4 h-4" />
              </button>
              <span class="text-xs font-mono text-ink-muted w-12 text-center">{{ Math.round(scale * 100) }}%</span>
              <button
                type="button"
                class="p-2 rounded hover:bg-gilt/20 text-ink-secondary transition cursor-pointer"
                title="放大视图"
                aria-label="放大视图"
                @click="zoomIn"
              >
                <ZoomIn class="w-4 h-4" />
              </button>
              <button
                type="button"
                class="p-2 rounded hover:bg-gilt/20 text-ink-secondary transition cursor-pointer"
                title="重置比例"
                aria-label="重置比例"
                @click="resetZoom"
              >
                <RotateCcw class="w-4 h-4" />
              </button>
              <button
                type="button"
                class="ml-2 p-2 rounded bg-cinnabar text-white hover:bg-cinnabar-dark transition cursor-pointer"
                title="关闭窗口 (Esc)"
                aria-label="关闭窗口"
                @click="emit('close')"
              >
                <X class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Image Viewport -->
          <div class="flex-1 overflow-auto bg-[#120F0D] flex items-center justify-center p-4 sm:p-8 min-h-[300px]">
            <img
              :src="image"
              :alt="title"
              class="max-h-[58vh] w-auto object-contain rounded transition-transform duration-200 select-none shadow-lg"
              :style="{ transform: `scale(${scale})` }"
            />
          </div>

          <!-- Metadata Footer -->
          <div class="p-4 sm:p-5 bg-xuan-card border-t border-gilt/30 space-y-2">
            <div class="flex flex-wrap items-center gap-4 text-xs text-ink-secondary">
              <span v-if="era" class="inline-flex items-center gap-1.5 font-medium text-cinnabar">
                <Calendar class="w-3.5 h-3.5" />
                历史年代：{{ era }}
              </span>
              <span v-if="locationOrSource" class="inline-flex items-center gap-1.5 font-medium text-gilt-dark">
                <Landmark class="w-3.5 h-3.5" />
                馆藏与图像来源：{{ locationOrSource }}
              </span>
            </div>
            <p v-if="description" class="text-xs sm:text-sm text-ink-secondary leading-relaxed flex items-start gap-2">
              <BookOpen class="w-4 h-4 text-gilt shrink-0 mt-0.5" />
              <span>{{ description }}</span>
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
