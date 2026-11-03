<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Clock,
  MapPin,
  BookOpen,
  Users,
  Sparkles,
  Flame,
  ArrowRight,
  Eye,
  GitBranch,
  CheckCircle2
} from 'lucide-vue-next'
import { museumApi } from '@/services/museumApi'
import type { TangPeriodId, TimelineItem, MajorEvent } from '@/types/museum'
import SectionHeader from '@/components/common/SectionHeader.vue'
import TangSealBadge from '@/components/common/TangSealBadge.vue'
import ImageLightboxModal from '@/components/common/ImageLightboxModal.vue'

const allTimeline = museumApi.getTimeline()
const majorEvents = museumApi.getMajorEvents()

const selectedPeriod = ref<TangPeriodId | 'all'>('all')
const selectedCategory = ref<string>('all')
const activeTimelineId = ref<string>(allTimeline[0].id)
const activeMajorEventId = ref<string>(majorEvents[1].id) // 默认展示玄武门之变或文成公主入藏

const filteredTimeline = computed<TimelineItem[]>(() => {
  return museumApi.getTimeline(selectedPeriod.value, selectedCategory.value)
})

const activeTimelineItem = computed<TimelineItem>(() => {
  const found = filteredTimeline.value.find((i) => i.id === activeTimelineId.value)
  return found || filteredTimeline.value[0] || allTimeline[0]
})

const activeMajorEvent = computed<MajorEvent>(() => {
  return majorEvents.find((e) => e.id === activeMajorEventId.value) || majorEvents[0]
})

function selectPeriodFilter(p: TangPeriodId | 'all') {
  selectedPeriod.value = p
  const list = museumApi.getTimeline(p, selectedCategory.value)
  if (list.length > 0) {
    activeTimelineId.value = list[0].id
  }
}

const periodLabelMap: Record<TangPeriodId, { name: string; color: string }> = {
  early: { name: '初唐 (618–712)', color: 'bg-cinnabar text-white' },
  high: { name: '盛唐 (712–755)', color: 'bg-gilt text-ink font-bold' },
  middle: { name: '中唐 (755–820)', color: 'bg-dunhuang-cyan text-white' },
  late: { name: '晚唐 (820–907)', color: 'bg-imperial text-white' }
}

const lightbox = ref({
  visible: false,
  image: '',
  title: '',
  subtitle: '',
  era: '',
  source: '',
  desc: ''
})

function openLightbox(img: string, title: string, sub: string, era: string, src: string, desc: string) {
  lightbox.value = {
    visible: true,
    image: img,
    title,
    subtitle: sub,
    era,
    source: src,
    desc
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
    <!-- ===================================================================
         SECTION 1: 交互式大唐四期历史时间轴 (DIMENSION II)
         =================================================================== -->
    <section>
      <SectionHeader
        seal="历史长卷"
        en-subtitle="DIMENSION II · INTERACTIVE CHRONOLOGICAL TIMELINE (618–907 AD)"
        title="大唐二百八十九年交互式历史时间轴"
        description="按真实历史年代严格排列初唐、盛唐、中唐、晚唐十五个关键历史坐标。点击曲线节点或下方时间卡片，即可检视事件背景、发生地点、正史原典引文与历史因果脉络。"
      />

      <!-- Period & Category Filter Bar -->
      <div class="tang-scroll-card rounded-xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs font-serif font-bold text-ink-muted mr-1">历史分期筛选：</span>
          <button
            v-for="p in [
              { id: 'all', label: '全唐总览 (618–907)' },
              { id: 'early', label: '初唐奠基 (618–712)' },
              { id: 'high', label: '盛唐极盛 (712–755)' },
              { id: 'middle', label: '中唐转折 (755–820)' },
              { id: 'late', label: '晚唐余响 (820–907)' }
            ]"
            :key="p.id"
            type="button"
            class="px-3 py-1.5 rounded-md text-xs font-serif font-semibold transition cursor-pointer"
            :class="
              selectedPeriod === p.id
                ? 'bg-cinnabar text-white shadow-sm'
                : 'bg-xuan-paper text-ink-secondary hover:border-cinnabar border border-gilt/30'
            "
            @click="selectPeriodFilter(p.id as TangPeriodId | 'all')"
          >
            {{ p.label }}
          </button>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs font-serif font-bold text-ink-muted mr-1">领域类别：</span>
          <button
            v-for="c in [
              { id: 'all', label: '全部类别' },
              { id: 'politics', label: '政制与变局' },
              { id: 'silkroad', label: '丝绸之路与外交' },
              { id: 'military', label: '军事与转折' },
              { id: 'culture', label: '科技与文化' }
            ]"
            :key="c.id"
            type="button"
            class="px-2.5 py-1 rounded text-xs transition cursor-pointer"
            :class="
              selectedCategory === c.id
                ? 'bg-gilt text-ink font-bold'
                : 'bg-xuan-paper text-ink-secondary hover:bg-gilt/20'
            "
            @click="selectedCategory = c.id"
          >
            {{ c.label }}
          </button>
        </div>
      </div>

      <!-- Horizontal Interactive Node Track -->
      <div class="tang-scroll-card rounded-2xl p-5 sm:p-6 mb-8 overflow-x-auto">
        <div class="flex items-center justify-between mb-3 min-w-[760px]">
          <span class="text-xs font-mono text-ink-muted">
            ▼ 点击任意年代节点（带 ★ 标记为重大历史转折点）切换下方深度档案
          </span>
          <div class="flex items-center gap-4 text-[11px]">
            <span class="inline-flex items-center gap-1"><i class="w-2.5 h-2.5 rounded-full bg-cinnabar inline-block"></i> 初唐</span>
            <span class="inline-flex items-center gap-1"><i class="w-2.5 h-2.5 rounded-full bg-gilt inline-block"></i> 盛唐</span>
            <span class="inline-flex items-center gap-1"><i class="w-2.5 h-2.5 rounded-full bg-dunhuang-cyan inline-block"></i> 中唐</span>
            <span class="inline-flex items-center gap-1"><i class="w-2.5 h-2.5 rounded-full bg-imperial inline-block"></i> 晚唐</span>
          </div>
        </div>

        <div class="relative flex items-end justify-between gap-2 min-w-[820px] pt-6 pb-2 px-2 border-b-2 border-gilt/40">
          <button
            v-for="item in filteredTimeline"
            :key="item.id"
            type="button"
            class="group flex flex-col items-center text-center flex-1 cursor-pointer focus:outline-none"
            @click="activeTimelineId = item.id"
          >
            <!-- Power Index Bar -->
            <div class="w-full flex flex-col items-center justify-end h-28 mb-2">
              <span
                class="text-[10px] font-mono mb-1 transition"
                :class="activeTimelineItem.id === item.id ? 'text-cinnabar font-bold scale-110' : 'text-ink-muted'"
              >
                {{ item.year }}年
              </span>
              <div
                class="w-3 sm:w-4 rounded-t transition-all duration-300 relative"
                :class="[
                  item.period === 'early' ? 'bg-cinnabar' :
                  item.period === 'high' ? 'bg-gilt' :
                  item.period === 'middle' ? 'bg-dunhuang-cyan' : 'bg-imperial',
                  activeTimelineItem.id === item.id ? 'ring-2 ring-offset-2 ring-cinnabar opacity-100 scale-x-125' : 'opacity-65 group-hover:opacity-100'
                ]"
                :style="{ height: `${Math.max(item.powerIndex * 0.85, 22)}px` }"
              >
                <span
                  v-if="item.isMajorTurningPoint"
                  class="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-cinnabar font-bold"
                  title="重大历史转折节点"
                >
                  ★
                </span>
              </div>
            </div>

            <!-- Node Dot -->
            <div
              class="w-3.5 h-3.5 rounded-full border-2 transition"
              :class="
                activeTimelineItem.id === item.id
                  ? 'bg-cinnabar border-gilt scale-125'
                  : 'bg-xuan-card border-ink-muted group-hover:border-cinnabar'
              "
            ></div>

            <!-- Short Label -->
            <span
              class="mt-2 text-xs font-serif line-clamp-1 max-w-[92px]"
              :class="activeTimelineItem.id === item.id ? 'font-bold text-cinnabar' : 'text-ink-secondary'"
            >
              {{ item.title.slice(0, 6) }}
            </span>
          </button>
        </div>
      </div>

      <!-- Active Timeline Node Spotlight Panel -->
      <div class="tang-scroll-card tang-corner-frame rounded-2xl overflow-hidden shadow-museum mb-10">
        <div class="grid grid-cols-1 lg:grid-cols-12">
          <!-- Image Column -->
          <div
            class="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] bg-black cursor-pointer group"
            @click="
              openLightbox(
                activeTimelineItem.image,
                activeTimelineItem.title,
                activeTimelineItem.imageCaption,
                activeTimelineItem.yearDisplay,
                activeTimelineItem.imageSource,
                activeTimelineItem.detail
              )
            "
          >
            <img
              :src="activeTimelineItem.image"
              :alt="activeTimelineItem.imageCaption"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
              <div class="flex items-center justify-between mb-1">
                <span class="px-2.5 py-0.5 rounded text-xs font-medium" :class="periodLabelMap[activeTimelineItem.period].color">
                  {{ periodLabelMap[activeTimelineItem.period].name }}
                </span>
                <span class="text-xs text-gilt-light flex items-center gap-1">
                  <Eye class="w-3.5 h-3.5" /> 放大检视
                </span>
              </div>
              <p class="text-xs text-white font-serif font-semibold">
                {{ activeTimelineItem.imageCaption }}
              </p>
              <p class="text-[11px] text-[#D0C2AE] font-mono mt-0.5">
                来源：{{ activeTimelineItem.imageSource }}
              </p>
            </div>
          </div>

          <!-- Content Column -->
          <div class="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div class="space-y-3">
              <div class="flex flex-wrap items-center gap-2.5">
                <span class="px-3 py-1 rounded bg-cinnabar text-white text-xs font-mono font-bold">
                  {{ activeTimelineItem.yearDisplay }}
                </span>
                <span class="px-2.5 py-1 rounded bg-gilt/20 text-gilt-dark text-xs font-serif font-semibold">
                  {{ activeTimelineItem.reignTitle }} · {{ activeTimelineItem.categoryLabel }}
                </span>
                <span
                  v-if="activeTimelineItem.isMajorTurningPoint"
                  class="px-2.5 py-0.5 rounded bg-imperial/15 text-imperial text-xs font-bold border border-imperial/30"
                >
                  ★ 关键历史转折点
                </span>
              </div>

              <h3 class="text-xl sm:text-2xl font-serif font-bold text-ink">
                {{ activeTimelineItem.title }}
              </h3>

              <p class="text-xs text-ink-muted flex items-center gap-1.5">
                <MapPin class="w-3.5 h-3.5 text-cinnabar shrink-0" />
                <span>历史发生地与路线：{{ activeTimelineItem.location }}</span>
              </p>

              <p class="text-sm text-ink-secondary leading-relaxed">
                {{ activeTimelineItem.detail }}
              </p>

              <div class="p-3.5 rounded-lg bg-xuan-paper border border-gilt/35 space-y-1">
                <div class="text-xs font-serif font-bold text-cinnabar">历史意义与深远影响：</div>
                <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {{ activeTimelineItem.historicalSignificance }}
                </p>
              </div>

              <!-- Primary Historical Source Citation -->
              <blockquote class="p-3.5 rounded-lg bg-cinnabar/5 border-l-4 border-cinnabar text-xs sm:text-sm font-serif text-ink">
                <p>{{ activeTimelineItem.sourceQuote }}</p>
                <footer class="text-xs text-gilt-dark font-mono mt-1">
                  —— 史料出处：{{ activeTimelineItem.primarySource }}
                </footer>
              </blockquote>
            </div>

            <div class="pt-3 border-t border-gilt/20 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div class="flex flex-wrap items-center gap-1.5">
                <span class="text-ink-muted font-semibold">关联历史人物：</span>
                <span
                  v-for="fig in activeTimelineItem.relatedFigures"
                  :key="fig"
                  class="px-2 py-0.5 rounded bg-xuan-paper border border-gilt/30 text-ink-secondary"
                >
                  {{ fig }}
                </span>
              </div>
              <span class="text-ink-muted font-mono">
                当前筛选共 {{ filteredTimeline.length }} 个节点
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Vertical Chronological Cards List for Quick Scanning -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="node in filteredTimeline"
          :key="node.id"
          class="p-4 rounded-xl border transition cursor-pointer flex flex-col justify-between"
          :class="
            activeTimelineItem.id === node.id
              ? 'bg-cinnabar/10 border-cinnabar shadow-md'
              : 'tang-scroll-card hover:border-cinnabar'
          "
          @click="activeTimelineId = node.id"
        >
          <div>
            <div class="flex items-center justify-between text-xs mb-1.5">
              <span class="font-mono font-bold text-cinnabar">{{ node.year }}年</span>
              <span class="px-2 py-0.5 rounded text-[10px]" :class="periodLabelMap[node.period].color">
                {{ periodLabelMap[node.period].name.split(' ')[0] }}
              </span>
            </div>
            <h4 class="font-serif font-bold text-sm text-ink line-clamp-1">
              {{ node.title }}
            </h4>
            <p class="text-xs text-ink-secondary line-clamp-2 mt-1 leading-relaxed">
              {{ node.summary }}
            </p>
          </div>
          <div class="mt-3 pt-2 border-t border-gilt/20 flex items-center justify-between text-[11px] text-gilt-dark">
            <span>{{ node.categoryLabel }}</span>
            <span>点击查看详档 →</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         SECTION 2: 重大历史转折事件深度因果剖析 (DIMENSION IV)
         =================================================================== -->
    <section id="major-events" class="pt-6 border-t-2 border-gilt/35">
      <SectionHeader
        seal="重大转折"
        en-subtitle="DIMENSION IV · MAJOR HISTORICAL EVENTS & CAUSAL CHAINS"
        title="历史转折：影响大唐国运与世界格局的六大关键事件"
        description="历史绝非孤立事件的偶然叠加。本板块围绕晋阳起兵、玄武门之变、文成公主入藏、武周科举革新、怛罗斯之战与安史之乱六大事件，完整还原其发生背景、深层原因、三阶段过程、最终结果及前后因果链条。"
      />

      <!-- Event Selector Tabs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        <button
          v-for="evt in majorEvents"
          :key="evt.id"
          type="button"
          class="p-4 rounded-xl border text-left transition cursor-pointer"
          :class="
            activeMajorEventId === evt.id
              ? 'bg-cinnabar text-white border-cinnabar shadow-lg'
              : 'tang-scroll-card hover:border-cinnabar'
          "
          @click="activeMajorEventId = evt.id"
        >
          <div class="flex items-center justify-between text-xs mb-1">
            <span
              class="font-mono font-bold"
              :class="activeMajorEventId === evt.id ? 'text-gilt-light' : 'text-cinnabar'"
            >
              {{ evt.yearDisplay.split('（')[0] }}
            </span>
            <span
              class="px-2 py-0.5 rounded text-[11px]"
              :class="activeMajorEventId === evt.id ? 'bg-white/20 text-white' : 'bg-gilt/15 text-gilt-dark'"
            >
              {{ evt.category }}
            </span>
          </div>
          <h3 class="font-serif font-bold text-base">{{ evt.title }}</h3>
          <p
            class="text-xs line-clamp-1 mt-1"
            :class="activeMajorEventId === evt.id ? 'text-white/85' : 'text-ink-muted'"
          >
            {{ evt.subtitle }}
          </p>
        </button>
      </div>

      <!-- Active Event Comprehensive Dossier -->
      <div class="tang-scroll-card tang-corner-frame rounded-2xl p-6 sm:p-8 shadow-museum space-y-8">
        <!-- Header & Causal Chain Ribbon -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-gilt/30 pb-5">
          <div>
            <div class="flex flex-wrap items-center gap-2.5 mb-2">
              <TangSealBadge :text="activeMajorEvent.category" size="sm" />
              <span class="text-xs font-mono text-cinnabar font-bold">
                {{ activeMajorEvent.yearDisplay }}
              </span>
              <span class="text-xs text-ink-muted flex items-center gap-1">
                <MapPin class="w-3.5 h-3.5 text-gilt-dark" />
                {{ activeMajorEvent.location }}
              </span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-serif font-bold text-ink">
              {{ activeMajorEvent.title }}
            </h3>
            <p class="text-sm text-ink-secondary mt-1">{{ activeMajorEvent.subtitle }}</p>
          </div>

          <!-- Causal Chain Box -->
          <div class="p-3.5 rounded-xl bg-xuan-paper border border-gilt/40 text-xs space-y-1.5 lg:max-w-md shrink-0">
            <div class="font-serif font-bold text-cinnabar flex items-center gap-1.5">
              <GitBranch class="w-4 h-4" />
              历史因果传导链条
            </div>
            <p class="text-ink-secondary">
              <strong class="text-ink">前序渊源：</strong>{{ activeMajorEvent.causalChain.precedes }}
            </p>
            <p class="text-ink-secondary">
              <strong class="text-ink">后续影响：</strong>{{ activeMajorEvent.causalChain.leadsTo }}
            </p>
          </div>
        </div>

        <!-- Background, Causes & Image -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 space-y-5">
            <div>
              <h4 class="text-sm font-serif font-bold text-cinnabar uppercase tracking-wider mb-2">
                一、历史背景（Historical Background）
              </h4>
              <p class="text-sm text-ink-secondary leading-relaxed">
                {{ activeMajorEvent.background }}
              </p>
            </div>

            <div>
              <h4 class="text-sm font-serif font-bold text-cinnabar uppercase tracking-wider mb-2">
                二、事件发生的主要原因（Core Causes）
              </h4>
              <ul class="space-y-2">
                <li
                  v-for="(cause, idx) in activeMajorEvent.causes"
                  :key="idx"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-ink-secondary"
                >
                  <span class="w-5 h-5 rounded-full bg-cinnabar/15 text-cinnabar font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {{ idx + 1 }}
                  </span>
                  <span>{{ cause }}</span>
                </li>
              </ul>
            </div>

            <blockquote class="p-4 rounded-xl bg-cinnabar/5 border-l-4 border-cinnabar text-xs sm:text-sm font-serif text-ink">
              <p>{{ activeMajorEvent.sourceExcerpt }}</p>
              <footer class="text-xs text-gilt-dark font-mono mt-1.5">
                —— 原始史籍出处：{{ activeMajorEvent.primarySource }}
              </footer>
            </blockquote>
          </div>

          <div class="lg:col-span-5">
            <div
              class="rounded-xl overflow-hidden border border-gilt/40 bg-black cursor-pointer group"
              @click="
                openLightbox(
                  activeMajorEvent.image,
                  activeMajorEvent.title,
                  activeMajorEvent.imageCaption,
                  activeMajorEvent.yearDisplay,
                  activeMajorEvent.imageSource,
                  activeMajorEvent.summary
                )
              "
            >
              <img
                :src="activeMajorEvent.image"
                :alt="activeMajorEvent.imageCaption"
                class="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
              <div class="p-3.5 bg-xuan-paper border-t border-gilt/30">
                <div class="flex items-center justify-between text-xs font-serif font-bold text-ink">
                  <span>{{ activeMajorEvent.imageCaption }}</span>
                  <span class="text-cinnabar shrink-0 ml-2">点击放大</span>
                </div>
                <p class="text-[11px] text-ink-muted font-mono mt-1">
                  出处：{{ activeMajorEvent.imageSource }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step-by-Step Process Timeline -->
        <div>
          <h4 class="text-sm font-serif font-bold text-cinnabar uppercase tracking-wider mb-4">
            三、事件发展的关键经过（Key Process Stages）
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              v-for="(step, idx) in activeMajorEvent.processSteps"
              :key="step.phase"
              class="p-4 rounded-xl bg-xuan-paper border border-gilt/35 space-y-2"
            >
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded bg-cinnabar text-white text-xs font-bold">
                  阶段 {{ idx + 1 }}
                </span>
                <span class="text-xs font-mono text-gilt-dark">{{ step.time }}</span>
              </div>
              <h5 class="font-serif font-bold text-sm sm:text-base text-ink">
                {{ step.phase }}
              </h5>
              <p class="text-xs text-ink-secondary leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Result & Historical Significance -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-gilt/25">
          <div class="md:col-span-5 p-4 rounded-xl bg-gilt/10 border border-gilt/40 space-y-2">
            <h4 class="text-sm font-serif font-bold text-ink flex items-center gap-1.5">
              <Flame class="w-4 h-4 text-cinnabar" />
              四、事件最终结果
            </h4>
            <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              {{ activeMajorEvent.result }}
            </p>
          </div>

          <div class="md:col-span-7 p-4 rounded-xl bg-xuan-paper border border-gilt/35 space-y-2">
            <h4 class="text-sm font-serif font-bold text-ink flex items-center gap-1.5">
              <CheckCircle2 class="w-4 h-4 text-cinnabar" />
              五、历史意义及深远影响
            </h4>
            <ul class="space-y-1.5">
              <li
                v-for="sig in activeMajorEvent.historicalSignificance"
                :key="sig"
                class="text-xs sm:text-sm text-ink-secondary flex items-start gap-2"
              >
                <span class="text-cinnabar font-bold">·</span>
                <span>{{ sig }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <ImageLightboxModal
      :visible="lightbox.visible"
      :image="lightbox.image"
      :title="lightbox.title"
      :subtitle="lightbox.subtitle"
      :era="lightbox.era"
      :location-or-source="lightbox.source"
      :description="lightbox.desc"
      @close="lightbox.visible = false"
    />
  </div>
</template>
