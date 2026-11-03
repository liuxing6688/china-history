<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Users,
  Award,
  BookOpen,
  Scale,
  Compass,
  Eye,
  Quote,
  GitMerge,
  Calendar
} from 'lucide-vue-next'
import { museumApi } from '@/services/museumApi'
import type { HistoricalFigure, TangPeriodId } from '@/types/museum'
import SectionHeader from '@/components/common/SectionHeader.vue'
import TangSealBadge from '@/components/common/TangSealBadge.vue'
import ImageLightboxModal from '@/components/common/ImageLightboxModal.vue'

const allFigures = museumApi.getFigures()
const selectedCategory = ref<string>('all')
const selectedPeriod = ref<TangPeriodId | 'all'>('all')
const activeFigureId = ref<string>(allFigures[0].id)

const filteredFigures = computed<HistoricalFigure[]>(() => {
  return museumApi.getFigures(selectedPeriod.value, selectedCategory.value)
})

const activeFigure = computed<HistoricalFigure>(() => {
  return allFigures.find((f) => f.id === activeFigureId.value) || allFigures[0]
})

function selectCategory(cat: string) {
  selectedCategory.value = cat
  const list = museumApi.getFigures(selectedPeriod.value, cat)
  if (list.length > 0 && !list.some((f) => f.id === activeFigureId.value)) {
    activeFigureId.value = list[0].id
  }
}

function jumpToFigureByName(targetName: string) {
  const match = allFigures.find((f) => targetName.includes(f.name.split('（')[0]))
  if (match) {
    selectedCategory.value = 'all'
    selectedPeriod.value = 'all'
    activeFigureId.value = match.id
  }
}

const periodBadge: Record<TangPeriodId, string> = {
  early: '初唐时期 (618–712)',
  high: '盛唐时期 (712–755)',
  middle: '中唐时期 (755–820)',
  late: '晚唐时期 (820–907)'
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

function openPortrait(fig: HistoricalFigure) {
  lightbox.value = {
    visible: true,
    image: fig.image,
    title: `${fig.name}（${fig.courtesyOrTempleName}）`,
    subtitle: fig.imageCaption,
    era: fig.birthDeath,
    source: fig.imageSource,
    desc: fig.summary
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <SectionHeader
      seal="风云人物"
      en-subtitle="DIMENSION III · HISTORICAL FIGURES & BIOGRAPHICAL ARCHIVES"
      title="大唐群星闪耀时：重要历史人物传略与关系图谱"
      description="客观还原李世民、武则天、李隆基三位千古帝王，玄奘、鉴真两位丝路高僧，以及李白、杜甫、颜真卿等艺文巨匠的生平经历、主要历史活动、贡献、历史影响及学术界客观评价。"
    />

    <!-- Filter Controls -->
    <div class="tang-scroll-card rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-xs font-serif font-bold text-ink-muted">人物身份类别：</span>
        <button
          v-for="cat in [
            { id: 'all', label: '全部人物 (8)' },
            { id: 'emperor', label: '千古帝王（太宗·武后·玄宗）' },
            { id: 'monk_envoy', label: '丝路行者（玄奘·鉴真）' },
            { id: 'poet_scholar', label: '诗坛双子星（李白·杜甫）' },
            { id: 'artist_scientist', label: '书艺忠魂（颜真卿）' }
          ]"
          :key="cat.id"
          type="button"
          class="px-3 py-1.5 rounded-md text-xs font-serif font-semibold transition cursor-pointer"
          :class="
            selectedCategory === cat.id
              ? 'bg-cinnabar text-white shadow-sm'
              : 'bg-xuan-paper text-ink-secondary border border-gilt/30 hover:border-cinnabar'
          "
          @click="selectCategory(cat.id)"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="text-xs text-ink-muted font-mono">
        点击人物头像卡片切换右侧完整人物志档案
      </div>
    </div>

    <!-- Main Layout: Left Figure Roster + Right Detailed Biographical Scroll -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left 4 Cols: Figure Cards List -->
      <div class="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
        <button
          v-for="fig in filteredFigures"
          :key="fig.id"
          type="button"
          class="p-3.5 rounded-xl border text-left transition-all flex items-center gap-3.5 cursor-pointer"
          :class="
            activeFigure.id === fig.id
              ? 'bg-cinnabar text-white border-cinnabar shadow-lg ring-2 ring-gilt'
              : 'tang-scroll-card hover:border-cinnabar'
          "
          @click="activeFigureId = fig.id"
        >
          <img
            :src="fig.image"
            :alt="fig.name"
            class="w-16 h-20 rounded-lg object-cover object-top border border-gilt/50 shrink-0"
          />
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-2">
              <span
                class="text-[10px] px-2 py-0.5 rounded font-semibold"
                :class="activeFigure.id === fig.id ? 'bg-white/20 text-white' : 'bg-cinnabar/15 text-cinnabar'"
              >
                {{ fig.categoryLabel }}
              </span>
              <span
                class="text-[10px] font-mono"
                :class="activeFigure.id === fig.id ? 'text-gilt-light' : 'text-ink-muted'"
              >
                {{ periodBadge[fig.period].split(' ')[0] }}
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-serif font-bold mt-1 truncate">
              {{ fig.name }}
            </h3>
            <p
              class="text-xs truncate"
              :class="activeFigure.id === fig.id ? 'text-white/90' : 'text-ink-secondary'"
            >
              {{ fig.courtesyOrTempleName }}
            </p>
            <div class="mt-1.5 flex flex-wrap gap-1">
              <span
                v-for="t in fig.tags.slice(0, 2)"
                :key="t"
                class="text-[10px] px-1.5 py-0.5 rounded"
                :class="activeFigure.id === fig.id ? 'bg-black/25 text-white' : 'bg-xuan-paper text-ink-muted'"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </button>
      </div>

      <!-- Right 8 Cols: Full Historical Biography & Objective Assessment -->
      <div class="lg:col-span-8 tang-scroll-card tang-corner-frame rounded-2xl p-6 sm:p-8 shadow-museum space-y-7">
        <!-- Top Portrait & Identity Header -->
        <div class="flex flex-col sm:flex-row gap-6 items-start border-b border-gilt/30 pb-6">
          <div
            class="relative w-full sm:w-44 h-56 rounded-xl overflow-hidden border-2 border-gilt/60 bg-black shrink-0 cursor-pointer group"
            @click="openPortrait(activeFigure)"
          >
            <img
              :src="activeFigure.image"
              :alt="activeFigure.imageCaption"
              class="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
            />
            <div class="absolute inset-x-0 bottom-0 bg-black/75 p-2 text-center text-[11px] text-gilt-light flex items-center justify-center gap-1">
              <Eye class="w-3 h-3" /> 高清画像与出处
            </div>
          </div>

          <div class="flex-1 space-y-3">
            <div class="flex flex-wrap items-center gap-2">
              <TangSealBadge :text="activeFigure.categoryLabel" size="sm" />
              <span class="px-2.5 py-0.5 rounded bg-gilt/20 text-gilt-dark text-xs font-semibold">
                {{ periodBadge[activeFigure.period] }}
              </span>
            </div>

            <div>
              <h3 class="text-2xl sm:text-3xl font-serif font-bold text-ink">
                {{ activeFigure.name }}
                <span class="text-base sm:text-lg font-normal text-ink-muted ml-2">
                  {{ activeFigure.courtesyOrTempleName }}
                </span>
              </h3>
              <p class="text-xs sm:text-sm font-semibold text-cinnabar mt-1">
                历史身份：{{ activeFigure.identity }}
              </p>
              <p class="text-xs text-ink-muted font-mono mt-0.5 flex items-center gap-1.5">
                <Calendar class="w-3.5 h-3.5 text-gilt-dark" />
                生卒与在世年代：{{ activeFigure.birthDeath }}
              </p>
            </div>

            <!-- Representative Historical Quote -->
            <blockquote class="p-3.5 rounded-lg bg-xuan-paper border-l-4 border-cinnabar text-xs sm:text-sm font-serif text-ink">
              <p class="flex items-start gap-2">
                <Quote class="w-4 h-4 text-cinnabar shrink-0 mt-0.5" />
                <span>“{{ activeFigure.quote }}”</span>
              </p>
              <footer class="text-[11px] text-gilt-dark font-mono mt-1 text-right">
                —— {{ activeFigure.quoteSource }}
              </footer>
            </blockquote>

            <p class="text-[11px] text-ink-muted font-mono">
              画像馆藏信息：{{ activeFigure.imageCaption }}（{{ activeFigure.imageSource }}）
            </p>
          </div>
        </div>

        <!-- 1. 生平经历 -->
        <div class="space-y-2.5">
          <h4 class="text-base font-serif font-bold text-ink border-l-4 border-cinnabar pl-3">
            一、生平经历（Biographical Narrative）
          </h4>
          <p
            v-for="(para, idx) in activeFigure.biography"
            :key="idx"
            class="text-xs sm:text-sm text-ink-secondary leading-relaxed"
          >
            {{ para }}
          </p>
        </div>

        <!-- 2. 主要历史活动编年 -->
        <div class="space-y-3">
          <h4 class="text-base font-serif font-bold text-ink border-l-4 border-gilt pl-3">
            二、主要历史活动（Chronological Activities）
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="act in activeFigure.majorActivities"
              :key="act.year"
              class="p-3.5 rounded-xl bg-xuan-paper border border-gilt/30 space-y-1"
            >
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-cinnabar">{{ act.year }}</span>
                <span class="text-xs font-serif font-bold text-ink">{{ act.title }}</span>
              </div>
              <p class="text-xs text-ink-secondary leading-relaxed">
                {{ act.detail }}
              </p>
            </div>
          </div>
        </div>

        <!-- 3. 重要贡献与历史影响 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="p-4 rounded-xl bg-xuan-paper border border-gilt/35 space-y-2">
            <h4 class="text-sm font-serif font-bold text-cinnabar flex items-center gap-1.5">
              <Award class="w-4 h-4" />
              三、重要历史贡献
            </h4>
            <ul class="space-y-1.5 text-xs text-ink-secondary">
              <li v-for="c in activeFigure.contributions" :key="c" class="flex items-start gap-1.5">
                <span class="text-cinnabar font-bold">·</span>
                <span>{{ c }}</span>
              </li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-xuan-paper border border-gilt/35 space-y-2">
            <h4 class="text-sm font-serif font-bold text-gilt-dark flex items-center gap-1.5">
              <BookOpen class="w-4 h-4" />
              四、深远历史影响
            </h4>
            <p class="text-xs text-ink-secondary leading-relaxed">
              {{ activeFigure.historicalImpact }}
            </p>
          </div>
        </div>

        <!-- 4. 唯物客观史学评价 (拒绝拔高或贬低) -->
        <div class="p-4 rounded-xl bg-cinnabar/5 border border-cinnabar/30 space-y-1.5">
          <h4 class="text-sm font-serif font-bold text-cinnabar flex items-center gap-1.5">
            <Scale class="w-4 h-4" />
            五、史学界客观评价（功过辩证审视）
          </h4>
          <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
            {{ activeFigure.objectiveEvaluation }}
          </p>
        </div>

        <!-- 5. 人物关系图谱联动 -->
        <div class="pt-3 border-t border-gilt/25 space-y-2.5">
          <div class="text-xs font-serif font-bold text-ink flex items-center gap-1.5">
            <GitMerge class="w-4 h-4 text-cinnabar" />
            人物交游与历史关系网络（点击右侧关联人物可直接跳转档案）：
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div
              v-for="rel in activeFigure.relations"
              :key="rel.targetName"
              class="p-2.5 rounded-lg bg-xuan-paper border border-gilt/30 hover:border-cinnabar cursor-pointer transition"
              @click="jumpToFigureByName(rel.targetName)"
            >
              <div class="text-xs font-serif font-bold text-cinnabar">{{ rel.targetName }}</div>
              <div class="text-[11px] text-ink-secondary mt-0.5">{{ rel.relation }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
