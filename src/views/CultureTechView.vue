<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Sparkles,
  BookOpen,
  Compass,
  Award,
  Eye,
  Scroll,
  Layers
} from 'lucide-vue-next'
import { museumApi } from '@/services/museumApi'
import type { CulturalAchievement } from '@/types/museum'
import SectionHeader from '@/components/common/SectionHeader.vue'
import TangSealBadge from '@/components/common/TangSealBadge.vue'
import ImageLightboxModal from '@/components/common/ImageLightboxModal.vue'

const achievements = museumApi.getCulturalAchievements()
const selectedCat = ref<string>('all')
const activeId = ref<string>(achievements[0].id)

const filteredAchievements = computed<CulturalAchievement[]>(() => {
  return museumApi.getCulturalAchievements(selectedCat.value)
})

const activeAchievement = computed<CulturalAchievement>(() => {
  return achievements.find((a) => a.id === activeId.value) || achievements[0]
})

function selectCategory(cat: string) {
  selectedCat.value = cat
  const list = museumApi.getCulturalAchievements(cat)
  if (list.length > 0) {
    activeId.value = list[0].id
  }
}

// Curated Tang Dynasty Painting & Calligraphy Masterpiece Scroll
const tangArtScrolls = [
  {
    id: 'scroll-buniantu',
    title: '阎立本《步辇图》卷',
    era: '初唐（描绘贞观十四年·640年）',
    collection: '北京故宫博物院藏',
    desc: '铁线描勾勒唐太宗接见吐蕃大相禄东赞请婚盛况，开启汉藏和亲与唐蕃古道新纪元。',
    image: '/images/museum/buniantu.jpg',
    source: '北京故宫博物院藏 / Wikimedia Commons Public Domain'
  },
  {
    id: 'scroll-daoliantu',
    title: '张萱《捣练图》卷（宋徽宗摹本）',
    era: '盛唐时期（8世纪）',
    collection: '美国波士顿美术馆藏',
    desc: '生动描绘唐代长安妇女捣练、络线、熨平、缝制丝绸的完整劳作场景，熨帛下藏窥视幼童尤为传神。',
    image: '/images/museum/daoliantu.jpg',
    source: 'Museum of Fine Arts, Boston / Wikimedia Commons Public Domain'
  },
  {
    id: 'scroll-guoguofuren',
    title: '张萱《虢国夫人游春图》卷（宋摹本）',
    era: '盛唐天宝年间',
    collection: '辽宁省博物馆藏',
    desc: '表现杨贵妃三姊虢国夫人及其眷从盛装策马春游长安曲江的雍容气派，骏马肥硕轻快。',
    image: '/images/museum/guoguofuren.jpg',
    source: '辽宁省博物馆藏 / Wikimedia Commons Public Domain'
  },
  {
    id: 'scroll-zanhua',
    title: '周昉《簪花仕女图》卷',
    era: '中唐贞元时期',
    collection: '辽宁省博物馆藏',
    desc: '绘贵族女子头戴硕大牡丹、荷花、海棠步摇冠，身披薄如蝉翼的轻纱罗衫于庭院戏犬赏鹤。',
    image: '/images/museum/zanhuashinv.jpg',
    source: '辽宁省博物馆藏 / Wikimedia Commons Public Domain'
  },
  {
    id: 'scroll-zhaoyebai',
    title: '韩幹《照夜白图》卷',
    era: '盛唐天宝年间',
    collection: '美国大都会艺术博物馆藏',
    desc: '绘唐玄宗李隆基最钟爱的西域战马“照夜白”系于木桩之上昂首嘶鸣、四蹄腾骧的烈性神采。',
    image: '/images/museum/zhaoyebai.jpg',
    source: 'The Metropolitan Museum of Art / Wikimedia Commons Public Domain'
  },
  {
    id: 'scroll-jizhi',
    title: '颜真卿《祭姪文稿》卷',
    era: '中唐乾元元年（758年）',
    collection: '台北故宫博物院藏',
    desc: '“天下第二行书”，颜真卿追祭安史之乱常山殉国侄儿颜季明之血泪手稿，气吞山河。',
    image: '/images/museum/jizhiwengao.jpg',
    source: '台北故宫博物院藏 / Wikimedia Commons Public Domain'
  }
]

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
         SECTION 1: 历史文化与科技成就六大核心维度 (DIMENSION V)
         =================================================================== -->
    <section>
      <SectionHeader
        seal="文明瑰宝"
        en-subtitle="DIMENSION V · CULTURAL & SCIENTIFIC ACHIEVEMENTS"
        title="大唐文明瑰宝：唐诗、书画、陶瓷金银器与科学技术"
        description="唐代不仅是诗与美酒的浪漫国度，更在天文大地测量（僧一行实测子午线）、国家药典编纂（659年《新修本草》）、雕版印刷术（868年《金刚经》）与大木作营造上创造了引领世界的科技丰碑。"
      />

      <!-- Category Tabs -->
      <div class="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        <button
          v-for="cat in [
            { id: 'all', label: '全部瑰宝与科技 (6)' },
            { id: 'poetry', label: '唐诗巅峰（四期流变）' },
            { id: 'calligraphy_painting', label: '唐楷狂草与丹青画卷' },
            { id: 'ceramics_gold', label: '南青北白·三彩与金银器' },
            { id: 'astronomy_math', label: '子午线实测与《敦煌星图》' },
            { id: 'medicine_printing', label: '《新修本草》与雕版印刷' },
            { id: 'architecture_music', label: '大木作营造与盛唐燕乐' }
          ]"
          :key="cat.id"
          type="button"
          class="px-3.5 py-2 rounded-lg text-xs font-serif font-semibold border transition cursor-pointer"
          :class="
            selectedCat === cat.id
              ? 'bg-cinnabar text-white border-cinnabar shadow'
              : 'tang-scroll-card text-ink-secondary hover:border-cinnabar'
          "
          @click="selectCategory(cat.id)"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Selector Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <button
          v-for="item in filteredAchievements"
          :key="item.id"
          type="button"
          class="p-4 rounded-xl border text-left transition flex items-start gap-3.5 cursor-pointer"
          :class="
            activeAchievement.id === item.id
              ? 'bg-cinnabar text-white border-cinnabar shadow-lg ring-2 ring-gilt'
              : 'tang-scroll-card hover:border-cinnabar'
          "
          @click="activeId = item.id"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-16 h-16 rounded-lg object-cover border border-gilt/50 shrink-0"
          />
          <div class="min-w-0 flex-1">
            <span
              class="text-[10px] px-2 py-0.5 rounded font-semibold"
              :class="activeAchievement.id === item.id ? 'bg-white/20 text-white' : 'bg-gilt/20 text-gilt-dark'"
            >
              {{ item.categoryLabel }}
            </span>
            <h3 class="font-serif font-bold text-sm sm:text-base mt-1 line-clamp-1">
              {{ item.title }}
            </h3>
            <p
              class="text-xs line-clamp-2 mt-0.5 leading-snug"
              :class="activeAchievement.id === item.id ? 'text-white/90' : 'text-ink-secondary'"
            >
              {{ item.subtitle }}
            </p>
          </div>
        </button>
      </div>

      <!-- Active Achievement Deep Exhibition View -->
      <div class="tang-scroll-card tang-corner-frame rounded-2xl p-6 sm:p-8 shadow-museum">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Left 7 Cols: Deep Analysis -->
          <div class="lg:col-span-7 space-y-5">
            <div class="space-y-2 border-b border-gilt/30 pb-4">
              <div class="flex flex-wrap items-center gap-2">
                <TangSealBadge :text="activeAchievement.categoryLabel" size="sm" />
                <span class="text-xs font-mono text-cinnabar font-bold">
                  {{ activeAchievement.eraDisplay }}
                </span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-serif font-bold text-ink">
                {{ activeAchievement.title }}
              </h3>
              <p class="text-xs sm:text-sm text-gilt-dark font-medium">
                代表巨匠与匠师：{{ activeAchievement.representativeFigure }}
              </p>
            </div>

            <!-- Core Breakthrough Highlight -->
            <div class="p-4 rounded-xl bg-cinnabar/10 border-l-4 border-cinnabar">
              <div class="text-xs font-serif font-bold text-cinnabar mb-1">
                历史性突破与制度/技术创新：
              </div>
              <p class="text-xs sm:text-sm text-ink font-medium leading-relaxed">
                {{ activeAchievement.coreBreakthrough }}
              </p>
            </div>

            <!-- Detailed Paragraphs -->
            <div class="space-y-3">
              <h4 class="text-sm font-serif font-bold text-ink">深度学术解析：</h4>
              <div
                v-for="(para, index) in activeAchievement.detailedAnalysis"
                :key="index"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-ink-secondary leading-relaxed"
              >
                <span class="w-5 h-5 rounded-full bg-gilt/25 text-gilt-dark font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {{ index + 1 }}
                </span>
                <p>{{ para }}</p>
              </div>
            </div>

            <!-- Classic Literature Excerpt if available -->
            <div
              v-if="activeAchievement.classicExcerpt"
              class="p-4 rounded-xl bg-xuan-paper border border-gilt/40 space-y-2"
            >
              <div class="flex items-center justify-between text-xs border-b border-gilt/25 pb-2">
                <span class="font-serif font-bold text-cinnabar flex items-center gap-1.5">
                  <Scroll class="w-4 h-4" />
                  经典原典选读：{{ activeAchievement.classicExcerpt.title }}
                </span>
                <span class="text-ink-muted font-serif">{{ activeAchievement.classicExcerpt.author }}</span>
              </div>
              <div class="py-1 space-y-1 font-serif text-sm sm:text-base text-ink tracking-wide">
                <p v-for="line in activeAchievement.classicExcerpt.lines" :key="line">
                  {{ line }}
                </p>
              </div>
              <p class="text-xs text-ink-muted pt-1 border-t border-gilt/20">
                注疏：{{ activeAchievement.classicExcerpt.annotation }}
              </p>
            </div>

            <!-- World Significance -->
            <div class="p-4 rounded-xl bg-dunhuang-cyan/10 border border-dunhuang-cyan/30 space-y-1">
              <div class="text-xs font-serif font-bold text-dunhuang-cyan flex items-center gap-1.5">
                <Compass class="w-4 h-4" />
                对后世与世界文明的深远影响
              </div>
              <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {{ activeAchievement.worldSignificance }}
              </p>
            </div>
          </div>

          <!-- Right 5 Cols: Visual Relic & Technical Specs -->
          <div class="lg:col-span-5 space-y-5">
            <div
              class="rounded-xl overflow-hidden border-2 border-gilt/50 bg-black cursor-pointer group"
              @click="
                openLightbox(
                  activeAchievement.image,
                  activeAchievement.title,
                  activeAchievement.imageCaption,
                  activeAchievement.eraDisplay,
                  activeAchievement.imageSource,
                  activeAchievement.summary
                )
              "
            >
              <img
                :src="activeAchievement.image"
                :alt="activeAchievement.imageCaption"
                class="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition duration-500"
              />
              <div class="p-4 bg-xuan-paper border-t border-gilt/30 space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-serif font-bold text-ink">{{ activeAchievement.imageCaption }}</span>
                  <span class="text-xs text-cinnabar flex items-center gap-1 shrink-0 ml-2">
                    <Eye class="w-3.5 h-3.5" /> 放大
                  </span>
                </div>
                <p class="text-[11px] font-mono text-ink-muted">
                  图像来源：{{ activeAchievement.imageSource }}
                </p>
              </div>
            </div>

            <!-- Technical Specifications Table -->
            <div class="p-5 rounded-xl bg-xuan-paper border border-gilt/35 space-y-3">
              <h4 class="text-xs font-mono uppercase tracking-wider text-cinnabar font-bold flex items-center gap-1.5">
                <Layers class="w-4 h-4" />
                文物与学术关键参数档案
              </h4>
              <div class="divide-y divide-gilt/20 text-xs">
                <div
                  v-for="spec in activeAchievement.specs"
                  :key="spec.label"
                  class="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <span class="font-serif font-bold text-ink shrink-0">{{ spec.label }}</span>
                  <span class="text-ink-secondary sm:text-right">{{ spec.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         SECTION 2: 大唐传世丹青与法书名迹数字长卷画廊
         =================================================================== -->
    <section class="pt-6 border-t-2 border-gilt/35">
      <SectionHeader
        seal="丹青墨宝"
        en-subtitle="IMPERIAL SCROLL GALLERY · PAINTING & CALLIGRAPHY"
        title="大唐丹青与法书名迹数字画廊"
        description="甄选故宫博物院、台北故宫博物院、辽宁省博物馆、大都会艺术博物馆、波士顿美术馆典藏的六件唐代（及宋摹唐画）代表性书画真迹，点击即可开启高清细节鉴赏。"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="art in tangArtScrolls"
          :key="art.id"
          class="tang-scroll-card rounded-xl overflow-hidden flex flex-col group cursor-pointer"
          @click="openLightbox(art.image, art.title, art.collection, art.era, art.source, art.desc)"
        >
          <div class="relative h-52 bg-[#16120F] overflow-hidden">
            <img
              :src="art.image"
              :alt="art.title"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/75 text-gilt-light text-[11px] font-medium border border-gilt/30">
              {{ art.era }}
            </div>
            <div class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded bg-cinnabar text-white text-xs flex items-center gap-1 shadow">
              <Eye class="w-3.5 h-3.5" /> 展卷细览
            </div>
          </div>
          <div class="p-4 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <h4 class="font-serif font-bold text-base text-ink group-hover:text-cinnabar transition">
                {{ art.title }}
              </h4>
              <p class="text-xs text-cinnabar font-medium mt-0.5">{{ art.collection }}</p>
              <p class="text-xs text-ink-secondary leading-relaxed mt-2">
                {{ art.desc }}
              </p>
            </div>
            <div class="pt-2 border-t border-gilt/20 text-[11px] font-mono text-ink-muted truncate">
              {{ art.source }}
            </div>
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
