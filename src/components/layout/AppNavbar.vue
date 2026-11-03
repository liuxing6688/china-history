<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  Search,
  Sun,
  Moon,
  Menu,
  X,
  Compass,
  Clock,
  Users,
  Sparkles,
  Landmark,
  BookOpen,
  ScrollText,
  Home
} from 'lucide-vue-next'
import { museumApi, type GlobalSearchResult } from '@/services/museumApi'

const props = defineProps<{
  isDark: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleTheme'): void
}>()

const router = useRouter()
const route = useRoute()

const mobileMenuOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')

const navItems = [
  { path: '/', label: '盛世总览', sub: '长安序章', icon: Home },
  { path: '/chang-an', label: '大唐与长安', sub: '背景与四期', icon: Landmark },
  { path: '/timeline', label: '历史长卷', sub: '时间轴与转折', icon: Clock },
  { path: '/figures', label: '风云人物', sub: '帝王僧诗巨匠', icon: Users },
  { path: '/culture', label: '文明瑰宝', sub: '诗书瓷历医药', icon: Sparkles },
  { path: '/silk-road', label: '丝路万里', sub: '中西文明互鉴', icon: Compass },
  { path: '/heritage', label: '历史遗存', sub: '遗址与国宝', icon: ScrollText },
  { path: '/reflections', label: '盛世回响', sub: '影响与历史思辨', icon: BookOpen }
]

const searchResults = computed<GlobalSearchResult[]>(() => {
  if (!searchQuery.value.trim()) return []
  return museumApi.searchAll(searchQuery.value)
})

function navigateTo(path: string) {
  router.push(path)
  mobileMenuOpen.value = false
  searchOpen.value = false
  searchQuery.value = ''
}

watch(() => route.fullPath, () => {
  mobileMenuOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-xuan-card/95 backdrop-blur-md border-b border-gilt/35 shadow-scroll">
    <!-- Top Imperial Cinnabar & Gilt Ribbon -->
    <div class="h-1 w-full bg-gradient-to-r from-imperial via-cinnabar to-gilt"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20 gap-3">
        <!-- Brand Logo -->
        <router-link
          to="/"
          class="flex items-center gap-3 group focus:outline-none shrink-0"
          aria-label="盛唐文明与丝绸之路 数字博物馆首页"
        >
          <div class="w-10 h-10 sm:w-11 sm:h-11 rounded bg-gradient-to-br from-cinnabar to-imperial flex flex-col items-center justify-center text-white border border-gilt/60 shadow-md group-hover:scale-105 transition">
            <span class="font-serif font-black text-base sm:text-lg leading-none tracking-tighter">大唐</span>
            <span class="text-[9px] tracking-widest text-gilt-light font-mono mt-0.5">618-907</span>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-serif font-bold text-base sm:text-xl text-ink tracking-wider group-hover:text-cinnabar transition">
                盛唐文明与丝绸之路
              </span>
            </div>
            <p class="text-[10px] sm:text-xs font-mono tracking-[0.18em] text-gilt-dark uppercase">
              THE GLORY OF TANG DYNASTY
            </p>
          </div>
        </router-link>

        <!-- Desktop Navigation Links -->
        <nav class="hidden xl:flex items-center gap-1" aria-label="主导航">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="px-3 py-2 rounded-md text-sm font-medium transition-all flex flex-col items-center group relative"
            :class="
              route.path === item.path
                ? 'text-cinnabar bg-cinnabar/10 font-semibold'
                : 'text-ink-secondary hover:text-cinnabar hover:bg-gilt/10'
            "
          >
            <span class="font-serif tracking-wide">{{ item.label }}</span>
            <span class="text-[10px] text-ink-muted group-hover:text-gilt-dark leading-tight mt-0.5">
              {{ item.sub }}
            </span>
            <span
              v-if="route.path === item.path"
              class="absolute bottom-0 left-3 right-3 h-0.5 bg-cinnabar rounded-full"
            ></span>
          </router-link>
        </nav>

        <!-- Action Buttons: Search & Theme Toggle & Mobile Menu -->
        <div class="flex items-center gap-2">
          <!-- Global Search Button -->
          <button
            type="button"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm bg-xuan-paper border border-gilt/40 text-ink-secondary hover:border-cinnabar hover:text-cinnabar transition cursor-pointer"
            aria-label="检索典藏人物、事件与文物"
            @click="searchOpen = !searchOpen"
          >
            <Search class="w-4 h-4 text-cinnabar" />
            <span class="hidden sm:inline">典藏检索</span>
          </button>

          <!-- Theme Switcher -->
          <button
            type="button"
            class="p-2 rounded-full bg-xuan-paper border border-gilt/40 text-ink-secondary hover:text-cinnabar hover:border-cinnabar transition cursor-pointer"
            :title="props.isDark ? '切换至宣纸白昼模式' : '切换至大明宫夜览模式'"
            :aria-label="props.isDark ? '切换至宣纸白昼模式' : '切换至大明宫夜览模式'"
            @click="emit('toggleTheme')"
          >
            <Sun v-if="props.isDark" class="w-4 h-4 text-gilt" />
            <Moon v-else class="w-4 h-4 text-imperial" />
          </button>

          <!-- Mobile Hamburger -->
          <button
            type="button"
            class="xl:hidden p-2 rounded-md bg-xuan-paper border border-gilt/40 text-ink hover:text-cinnabar transition cursor-pointer"
            aria-label="展开导航菜单"
            :aria-expanded="mobileMenuOpen"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <X v-if="mobileMenuOpen" class="w-5 h-5" />
            <Menu v-else class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Global Museum Search Dropdown -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="searchOpen"
        class="border-t border-gilt/30 bg-xuan-card shadow-museum px-4 py-4"
      >
        <div class="max-w-3xl mx-auto">
          <div class="relative flex items-center">
            <Search class="w-4 h-4 text-cinnabar absolute left-3.5 pointer-events-none" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="输入关键词检索：如 李世民、玄奘、安史之乱、玛瑙杯、敦煌、法门寺、金刚经..."
              class="w-full pl-10 pr-20 py-2.5 rounded-md bg-xuan-paper border border-gilt/50 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-cinnabar"
              autofocus
            />
            <button
              type="button"
              class="absolute right-2.5 text-xs text-ink-muted hover:text-cinnabar px-2 py-1 cursor-pointer"
              @click="searchOpen = false"
            >
              关闭
            </button>
          </div>

          <!-- Quick Hot Tags -->
          <div v-if="!searchQuery.trim()" class="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span class="text-ink-muted">热门典藏词条：</span>
            <button
              v-for="tag in ['贞观之治', '开元盛世', '玄奘', '李白', '安史之乱', '镶金兽首玛瑙杯', '敦煌莫高窟', '金刚经']"
              :key="tag"
              type="button"
              class="px-2.5 py-1 rounded bg-xuan-paper hover:bg-cinnabar hover:text-white text-ink-secondary transition cursor-pointer"
              @click="searchQuery = tag"
            >
              {{ tag }}
            </button>
          </div>

          <!-- Search Results List -->
          <div v-else class="mt-3 max-h-80 overflow-y-auto divide-y divide-gilt/20">
            <div v-if="searchResults.length === 0" class="py-6 text-center text-sm text-ink-muted">
              未找到与「{{ searchQuery }}」匹配的史料或馆藏文物，请尝试“长安”、“丝绸之路”、“颜真卿”等关键词。
            </div>
            <button
              v-for="res in searchResults"
              :key="res.id"
              type="button"
              class="w-full flex items-center gap-3.5 py-2.5 px-3 hover:bg-gilt/15 text-left transition rounded cursor-pointer"
              @click="navigateTo(res.route)"
            >
              <img
                v-if="res.image"
                :src="res.image"
                :alt="res.title"
                class="w-11 h-11 rounded object-cover border border-gilt/40 shrink-0"
              />
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2">
                  <span class="text-xs px-2 py-0.5 rounded bg-cinnabar/15 text-cinnabar font-medium">
                    {{ res.category }}
                  </span>
                  <h4 class="text-sm font-serif font-bold text-ink truncate">{{ res.title }}</h4>
                </div>
                <p class="text-xs text-ink-muted truncate mt-0.5">{{ res.subtitle }}</p>
              </div>
              <span class="text-xs text-cinnabar font-medium shrink-0">前往展厅 →</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Tablet / Mobile Navigation Drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="mobileMenuOpen"
        class="xl:hidden border-t border-gilt/30 bg-xuan-card px-4 py-4 shadow-xl"
        aria-label="移动端导航"
      >
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-2.5 p-3 rounded-lg border transition"
            :class="
              route.path === item.path
                ? 'bg-cinnabar text-white border-cinnabar shadow-sm'
                : 'bg-xuan-paper border-gilt/30 text-ink hover:border-cinnabar'
            "
          >
            <component :is="item.icon" class="w-4 h-4 shrink-0" />
            <div class="min-w-0">
              <div class="text-sm font-serif font-bold truncate">{{ item.label }}</div>
              <div
                class="text-[10px] truncate"
                :class="route.path === item.path ? 'text-white/80' : 'text-ink-muted'"
              >
                {{ item.sub }}
              </div>
            </div>
          </router-link>
        </div>
      </nav>
    </Transition>
  </header>
</template>
