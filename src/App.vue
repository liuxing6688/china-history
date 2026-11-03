<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<template>
  <div class="min-h-screen flex flex-col tang-paper-bg text-ink transition-colors duration-300">
    <AppNavbar :is-dark="isDark" @toggle-theme="toggleTheme" />

    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>

    <AppFooter />
  </div>
</template>
