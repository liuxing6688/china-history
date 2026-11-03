<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Landmark,
  Award,
  MapPin,
  Calendar,
  Eye,
  Ruler,
  BookOpen,
  Sparkles,
  CheckCircle2
} from 'lucide-vue-next'
import { museumApi } from '@/services/museumApi'
import type { HeritageRelic } from '@/types/museum'
import SectionHeader from '@/components/common/SectionHeader.vue'
import TangSealBadge from '@/components/common/TangSealBadge.vue'
import ImageLightboxModal from '@/components/common/ImageLightboxModal.vue'

const allRelics = museumApi.getHeritageRelics()
const filterType = ref<'all' | 'site' | 'artifact'>('all')
const activeRelicId = ref<string>(allRelics[0].id)

const filteredRelics = computed<HeritageRelic[]>(() => {
  return museumApi.getHeritageRelics(filterType.value)
})

const activeRelic = computed<HeritageRelic>(() => {
  return allRelics.find((r) => r.id === activeRelicId.value) || allRelics[0]
})

function selectType(t: 'all' | 'site' | 'artifact') {
  filterType.value = t
  const list = museumApi.getHeritageRelics(t)
  if (list.length > 0 && !list.some((r) => r.id === activeRelicId.value)) {
    activeRelicId.value = list[0].id
  }
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

function openRelicModal(r: HeritageRelic) {
  lightbox.value = {
    visible: true,
    image: r.image,
    title: r.name,
    subtitle: r.imageCaption,
    era: r.era,
    source: `${r.locationOrMuseum} ｜ ${r.imageSource}`,
    desc: r.historicalValue
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <SectionHeader
      seal="历史遗存"
      en-subtitle="DIMENSION VII · AUTHENTIC ARCHAEOLOGICAL SITES & NATIONAL TREASURES"
      title="吉金贞石证大唐：重大历史遗址与传世国宝文物档案"
      description="严选六处全国重点文物保护单位/世界文化遗产唐代遗址（大明宫、乾陵、法门寺地宫、敦煌莫高窟、五台山佛光寺东大殿、长安大小雁塔）与八件国宝级出土及传世文物，逐一标注真实馆藏地、发掘年份、规格尺寸与资料出处。"
    />

    <!-- Filter Controls -->
    <div class="flex flex-wrap items-center justify-between gap-4 tang-scroll-card rounded-xl p-4">
      <div class="flex flex-wrap items-center gap-2.5">
        <button
          v-for="tab in [
            { id: 'all', label: '全部历史遗存 (14)' },
            { id: 'site', label: '重大唐代考古与建筑遗址 (6)' },
            { id: 'artifact', label: '国宝级出土与传世文物 (8)' }
          ]"
          :key="tab.id"
          type="button"
          class="px-4 py-2 rounded-lg text-xs sm:text-sm font-serif font-bold border transition cursor-pointer"
          :class="
            filterType === tab.id
              ? 'bg-cinnabar text-white border-cinnabar shadow'
              : 'bg-xuan-paper text-ink-secondary border-gilt/30 hover:border-cinnabar'
          "
          @click="selectType(tab.id as 'all' | 'site' | 'artifact')"
        >
          {{ tab.label }}
        </button>
      </div>
      <span class="text-xs font-mono text-ink-muted">
        点击任意档案卡或右侧高清图可开启放大镜检视
      </span>
    </div>

    <!-- Active Relic Featured Dossier -->
    <div class="tang-scroll-card tang-corner-frame rounded-2xl overflow-hidden shadow-museum">
      <div class="grid grid-cols-1 lg:grid-cols-12">
        <!-- Left 5 Cols: High-Res Visual & Metadata Table -->
        <div class="lg:col-span-5 bg-xuan-paper border-r border-gilt/30 flex flex-col justify-between">
          <div
            class="relative h-72 sm:h-80 bg-[#14100E] cursor-pointer group overflow-hidden"
            @click="openRelicModal(activeRelic)"
          >
            <img
              :src="activeRelic.image"
              :alt="activeRelic.imageCaption"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div class="absolute top-3 left-3 flex items-center gap-2">
              <span
                class="px-2.5 py-1 rounded text-xs font-bold text-white shadow"
                :class="activeRelic.type === 'site' ? 'bg-dunhuang-cyan' : 'bg-cinnabar'"
              >
                {{ activeRelic.typeLabel }}
              </span>
              <span class="px-2.5 py-1 rounded bg-black/70 text-gilt-light text-xs font-medium border border-gilt/30">
                {{ activeRelic.category }}
              </span>
            </div>
            <div class="absolute bottom-3 right-3 px-3 py-1.5 rounded bg-cinnabar text-white text-xs font-serif font-bold flex items-center gap-1.5 shadow-lg">
              <Eye class="w-4 h-4" /> 点击放大检视细节
            </div>
          </div>

          <!-- Archive Metadata Specifications -->
          <div class="p-5 space-y-2.5 text-xs">
            <div class="font-serif font-bold text-ink text-sm border-b border-gilt/25 pb-2">
              典藏档案登记卡（Archival Record）
            </div>
            <div class="flex items-start gap-2">
              <Calendar class="w-4 h-4 text-cinnabar shrink-0 mt-0.5" />
              <div>
                <span class="font-semibold text-ink">历史年代：</span>
                <span class="text-ink-secondary">{{ activeRelic.era }}</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <MapPin class="w-4 h-4 text-cinnabar shrink-0 mt-0.5" />
              <div>
                <span class="font-semibold text-ink">所在地 / 典藏机构：</span>
                <span class="text-ink-secondary">{{ activeRelic.locationOrMuseum }}</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <Ruler class="w-4 h-4 text-gilt-dark shrink-0 mt-0.5" />
              <div>
                <span class="font-semibold text-ink">规制尺寸：</span>
                <span class="text-ink-secondary">{{ activeRelic.dimensionsOrScale }}</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <Award class="w-4 h-4 text-gilt-dark shrink-0 mt-0.5" />
              <div>
                <span class="font-semibold text-ink">保护级别：</span>
                <span class="text-cinnabar font-medium">{{ activeRelic.designation }}</span>
              </div>
            </div>
            <div class="pt-2 border-t border-gilt/20 text-[11px] font-mono text-ink-muted">
              图片来源与版权说明：{{ activeRelic.imageSource }}
            </div>
          </div>
        </div>

        <!-- Right 7 Cols: Deep Historical & Artistic Value -->
        <div class="lg:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
          <div class="space-y-4">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <TangSealBadge :text="activeRelic.category" size="sm" />
                <span class="text-xs text-ink-muted font-mono">
                  {{ activeRelic.excavatedOrBuiltInfo }}
                </span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-serif font-bold text-ink mt-1">
                {{ activeRelic.name }}
              </h3>
              <p class="text-sm text-gilt-dark font-medium mt-1">
                {{ activeRelic.subtitle }}
              </p>
            </div>

            <p class="text-sm text-ink-secondary leading-relaxed">
              {{ activeRelic.summary }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-xuan-paper border border-gilt/35 space-y-1.5">
                <h4 class="text-xs font-serif font-bold text-cinnabar flex items-center gap-1.5">
                  <BookOpen class="w-4 h-4" />
                  历史价值与证史意义
                </h4>
                <p class="text-xs text-ink-secondary leading-relaxed">
                  {{ activeRelic.historicalValue }}
                </p>
              </div>

              <div class="p-4 rounded-xl bg-xuan-paper border border-gilt/35 space-y-1.5">
                <h4 class="text-xs font-serif font-bold text-gilt-dark flex items-center gap-1.5">
                  <Sparkles class="w-4 h-4" />
                  工艺技术与艺术价值
                </h4>
                <p class="text-xs text-ink-secondary leading-relaxed">
                  {{ activeRelic.craftAndArtValue }}
                </p>
              </div>
            </div>

            <!-- Key Archaeological Details -->
            <div class="space-y-2">
              <h4 class="text-xs font-serif font-bold text-ink uppercase tracking-wider">
                关键考古发现与器物细节考证：
              </h4>
              <ul class="space-y-2">
                <li
                  v-for="det in activeRelic.details"
                  :key="det"
                  class="flex items-start gap-2 text-xs sm:text-sm text-ink-secondary bg-xuan-paper/70 p-3 rounded-lg border border-gilt/25"
                >
                  <CheckCircle2 class="w-4 h-4 text-cinnabar shrink-0 mt-0.5" />
                  <span>{{ det }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- All Relics Grid Catalog -->
    <div>
      <h3 class="text-lg font-serif font-bold text-ink mb-4 border-l-4 border-cinnabar pl-3">
        馆藏与遗址全目录（共 {{ filteredRelics.length }} 项，点击切换上方详档）
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div
          v-for="item in filteredRelics"
          :key="item.id"
          class="tang-scroll-card rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all"
          :class="activeRelic.id === item.id ? 'ring-2 ring-cinnabar shadow-lg' : ''"
          @click="activeRelicId = item.id"
        >
          <div class="relative h-44 bg-[#16120E] overflow-hidden">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            <div class="absolute top-2.5 left-2.5">
              <span
                class="px-2 py-0.5 rounded text-[10px] font-bold text-white"
                :class="item.type === 'site' ? 'bg-dunhuang-cyan' : 'bg-cinnabar'"
              >
                {{ item.typeLabel }}
              </span>
            </div>
          </div>

          <div class="p-4 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <h4 class="font-serif font-bold text-sm sm:text-base text-ink line-clamp-1">
                {{ item.name }}
              </h4>
              <p class="text-[11px] text-cinnabar font-medium truncate mt-0.5">
                {{ item.locationOrMuseum }}
              </p>
              <p class="text-xs text-ink-secondary line-clamp-2 mt-1.5 leading-relaxed">
                {{ item.summary }}
              </p>
            </div>
            <div class="pt-2 border-t border-gilt/20 flex items-center justify-between text-[11px]">
              <span class="text-ink-muted truncate max-w-[70%]">{{ item.category }}</span>
              <span class="text-cinnabar font-serif font-bold">查看详档 →</span>
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
