<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  Compass,
  Landmark,
  Clock,
  Users,
  Sparkles,
  ScrollText,
  BookOpen,
  ArrowRight,
  Eye,
  ShieldCheck,
  TrendingUp
} from 'lucide-vue-next'
import { museumApi } from '@/services/museumApi'
import type { TangPeriodId, HeritageRelic } from '@/types/museum'
import TangSealBadge from '@/components/common/TangSealBadge.vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import ImageLightboxModal from '@/components/common/ImageLightboxModal.vue'

const router = useRouter()
const periods = museumApi.getPeriods()
const activePeriodId = ref<TangPeriodId>('high')

const activePeriod = computed(() => {
  return periods.find((p) => p.id === activePeriodId.value) || periods[1]
})

const spotlightRelics = computed<HeritageRelic[]>(() => {
  return museumApi.getHeritageRelics().slice(0, 8)
})

const lightbox = ref<{
  visible: boolean
  image: string
  title: string
  subtitle: string
  era: string
  source: string
  desc: string
}>({
  visible: false,
  image: '',
  title: '',
  subtitle: '',
  era: '',
  source: '',
  desc: ''
})

function openRelicLightbox(item: HeritageRelic) {
  lightbox.value = {
    visible: true,
    image: item.image,
    title: item.name,
    subtitle: item.subtitle,
    era: item.era,
    source: `${item.locationOrMuseum} (${item.imageSource})`,
    desc: item.historicalValue
  }
}

const museumHalls = [
  {
    num: '壹',
    title: '历史背景与盛世长安',
    en: 'HISTORICAL CONTEXT & CHANG-AN',
    desc: '梳理从隋末一统到初、盛、中、晚唐四期演进，交互探索百万人长安城108坊与三省六部律令制度。',
    route: '/chang-an',
    icon: Landmark,
    image: '/images/museum/daminggong_danfeng.jpg',
    tag: '历史背景 · 盛世长安'
  },
  {
    num: '贰',
    title: '历史时间轴与重大转折',
    en: 'CHRONOLOGY & TURNING POINTS',
    desc: '自618年晋阳起兵至907年帝国落幕，深入剖析玄武门之变、文成公主入藏、怛罗斯之战与安史之乱的因果链条。',
    route: '/timeline',
    icon: Clock,
    image: '/images/museum/buniantu.jpg',
    tag: '时间脉络 · 重大事件'
  },
  {
    num: '叁',
    title: '大唐风云人物图谱',
    en: 'PANTHEON OF TANG FIGURES',
    desc: '走近李世民、武则天、李隆基、玄奘、李白、杜甫、颜真卿、鉴真八位时代巨匠的真实生平与历史功过。',
    route: '/figures',
    icon: Users,
    image: '/images/museum/taizong.jpg',
    tag: '重要人物 · 关系图谱'
  },
  {
    num: '肆',
    title: '文明瑰宝与科技成就',
    en: 'CULTURAL & SCIENTIFIC GEMS',
    desc: '领略唐诗四期流变、颜筋柳骨与张颠素狂、南青北白秘色瓷、僧一行实测子午线、《新修本草》与868年雕版《金刚经》。',
    route: '/culture',
    icon: Sparkles,
    image: '/images/museum/wumahu.jpg',
    tag: '文化艺术 · 科学技术'
  },
  {
    num: '伍',
    title: '丝路万里与中外文明互鉴',
    en: 'THE SILK ROAD ODYSSEY',
    desc: '沿长安—河西走廊—敦煌—安西四镇—撒马尔罕—那烂陀—巴格达及海上丝路，见证东西方贸易、宗教与技术双向奔赴。',
    route: '/silk-road',
    icon: Compass,
    image: '/images/museum/sancaicamel.jpg',
    tag: '丝绸之路 · 文明交流'
  },
  {
    num: '陆',
    title: '历史遗址与传世国宝文物',
    en: 'ARCHAEOLOGICAL SITES & RELICS',
    desc: '巡礼大明宫、乾陵、法门寺地宫、敦煌莫高窟、五台山佛光寺东大殿及何家村窖藏、大秦景教碑等14项真实遗存。',
    route: '/heritage',
    icon: ScrollText,
    image: '/images/museum/manaobei.jpg',
    tag: '考古遗址 · 馆藏文物'
  },
  {
    num: '柒',
    title: '盛世回响与历史独立思考',
    en: 'ECHOES & CRITICAL REFLECTIONS',
    desc: '剖析唐代对中华法系、东亚唐风文化圈与世界文明的深远影响，围绕盛衰周期律与文化主体性展开深度思辨。',
    route: '/reflections',
    icon: BookOpen,
    image: '/images/museum/jingangjing.jpg',
    tag: '现实意义 · 历史思辨'
  }
]
</script>

<template>
  <div>
    <!-- ===================================================================
         1. GRAND IMPERIAL HERO SECTION (恢弘盛唐主视觉：大明宫与万里丝路)
         =================================================================== -->
    <section
      data-navbar-contrast="dark"
      class="relative overflow-hidden bg-[#17110E] text-[#F7F1E5] border-b-2 border-gilt/50"
    >
      <!-- Background Layered Imagery & Subtle Vignette -->
      <div class="absolute inset-0 opacity-35">
        <img
          src="/images/museum/daminggong_danfeng.jpg"
          alt="唐长安城大明宫丹凤门遗址"
          class="w-full h-full object-cover object-center scale-105"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#140E0C]/95 via-[#1B1310]/85 to-[#2A151B]/80"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(200,155,64,0.22),transparent_55%)]"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <!-- Left Column: Narrative Manifesto -->
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex flex-wrap items-center gap-3">
              <TangSealBadge text="盛唐气象" size="md" />
              <span class="px-3 py-1 rounded-full text-xs font-mono tracking-[0.2em] bg-gilt/20 text-gilt-light border border-gilt/40">
                THE GLORY OF TANG DYNASTY · 618—907 AD
              </span>
            </div>

            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-wider leading-[1.16] text-[#FFFDF9]">
              盛唐文明与丝绸之路
              <span class="block text-xl sm:text-2xl lg:text-3xl font-normal text-gilt-light mt-3">
                九天阊阖开宫殿 · 万里驼铃连海岳
              </span>
            </h1>

            <p class="text-sm sm:text-base lg:text-lg text-[#E2D6C3] leading-relaxed max-w-2xl">
              以<strong class="text-gilt-light font-semibold">「长安」</strong>作为故事起点，以<strong class="text-gilt-light font-semibold">「盛唐文明」</strong>作为核心内容，以<strong class="text-gilt-light font-semibold">「丝绸之路」</strong>作为中外文明互鉴的叙事脉络。严谨区分初唐奠基、盛唐极盛、中唐变革与晚唐余响四个历史时期，全景还原真实可考的大唐气象。
            </p>

            <!-- Primary CTA Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                class="px-6 py-3.5 rounded-md bg-cinnabar hover:bg-cinnabar-light text-white font-serif font-bold text-sm sm:text-base tracking-wider shadow-lg flex items-center gap-2 transition cursor-pointer"
                @click="router.push('/chang-an')"
              >
                <span>步入长安 · 开启历史长卷</span>
                <ArrowRight class="w-4 h-4" />
              </button>
              <button
                type="button"
                class="px-5 py-3.5 rounded-md bg-white/10 hover:bg-gilt/25 text-[#F7F1E5] border border-gilt/50 font-serif font-semibold text-sm sm:text-base tracking-wider flex items-center gap-2 transition cursor-pointer"
                @click="router.push('/silk-road')"
              >
                <Compass class="w-4 h-4 text-gilt-light" />
                <span>探索丝绸之路交互舆图</span>
              </button>
            </div>

            <!-- Historical Rigor Notice Strip -->
            <div class="p-3.5 rounded-lg bg-black/40 border border-gilt/30 flex items-start gap-3 text-xs text-[#D4C5B0]">
              <ShieldCheck class="w-4 h-4 text-gilt-light shrink-0 mt-0.5" />
              <p>
                <strong class="text-gilt-light">史学分期说明：</strong>
                唐朝立国 289 年（618—907），史学界严格划分为<span class="underline decoration-gilt/60">初唐（618–712）</span>、<span class="underline decoration-gilt/60">盛唐（712–755）</span>、<span class="underline decoration-gilt/60">中唐（755–820）</span>与<span class="underline decoration-gilt/60">晚唐（820–907）</span>。本馆拒绝将整个唐朝笼统等同于盛唐，致力于呈现真实立体的历史演进逻辑。
              </p>
            </div>
          </div>

          <!-- Right Column: Featured Relic Showcase Card (阎立本步辇图 + 三彩载乐骆驼俑 + 镶金兽首玛瑙杯) -->
          <div class="lg:col-span-5">
            <div class="tang-corner-frame rounded-xl bg-[#221A16]/90 border border-gilt/45 p-5 shadow-2xl space-y-4">
              <div class="flex items-center justify-between border-b border-gilt/25 pb-3">
                <div>
                  <span class="text-[11px] font-mono uppercase tracking-widest text-gilt-light">
                    CORE NARRATIVE TRIAD
                  </span>
                  <h2 class="text-lg font-serif font-bold text-white">
                    长安起点 · 盛唐气象 · 丝路万里
                  </h2>
                </div>
                <TangSealBadge text="镇馆之宝" size="sm" />
              </div>

              <!-- Main Hero Artifact Visual -->
              <div
                class="relative rounded-lg overflow-hidden border border-gilt/35 group cursor-pointer bg-black"
                @click="openRelicLightbox(spotlightRelics[6])"
              >
                <img
                  src="/images/museum/manaobei.jpg"
                  alt="唐·镶金兽首玛瑙杯（陕西历史博物馆藏）"
                  class="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-cinnabar text-[11px] text-white font-medium">
                      盛唐丝路国宝 · 西安何家村唐代窖藏出土
                    </span>
                    <span class="inline-flex items-center gap-1 text-xs text-gilt-light">
                      <Eye class="w-3.5 h-3.5" /> 点击高清鉴赏
                    </span>
                  </div>
                  <h3 class="text-base sm:text-lg font-serif font-bold text-white mt-1">
                    唐 · 镶金兽首玛瑙杯
                  </h3>
                  <p class="text-xs text-[#D5C7B2] line-clamp-2 mt-0.5">
                    融合中亚波斯“来通杯（Rhyton）”角形酒器形制、西域进口缠丝玛瑙与长安皇家琢玉镶金技艺，陕西历史博物馆镇馆之宝。
                  </p>
                </div>
              </div>

              <!-- Secondary Mini Cards -->
              <div class="grid grid-cols-2 gap-3">
                <div
                  class="p-2.5 rounded-lg bg-black/40 border border-gilt/25 hover:border-gilt flex items-center gap-2.5 cursor-pointer transition"
                  @click="router.push('/chang-an')"
                >
                  <img
                    src="/images/museum/buniantu.jpg"
                    alt="阎立本步辇图"
                    class="w-12 h-12 rounded object-cover border border-gilt/40 shrink-0"
                  />
                  <div class="min-w-0">
                    <div class="text-xs font-serif font-bold text-white truncate">阎立本《步辇图》</div>
                    <div class="text-[11px] text-gilt-light truncate">贞观太极宫唐蕃和亲</div>
                  </div>
                </div>
                <div
                  class="p-2.5 rounded-lg bg-black/40 border border-gilt/25 hover:border-gilt flex items-center gap-2.5 cursor-pointer transition"
                  @click="router.push('/silk-road')"
                >
                  <img
                    src="/images/museum/sancaicamel.jpg"
                    alt="三彩载乐骆驼俑"
                    class="w-12 h-12 rounded object-cover border border-gilt/40 shrink-0"
                  />
                  <div class="min-w-0">
                    <div class="text-xs font-serif font-bold text-white truncate">三彩载乐骆驼俑</div>
                    <div class="text-[11px] text-gilt-light truncate">开元十一年胡汉合奏</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Five Key Historical Metrics Strip -->
        <div class="mt-12 pt-8 border-t border-gilt/30 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div class="p-4 rounded-lg bg-white/5 border border-gilt/25">
            <div class="text-2xl sm:text-3xl font-serif font-black text-gilt-light">618—907</div>
            <div class="text-xs font-semibold text-white mt-1">立国 289 载 · 历二十一帝</div>
            <div class="text-[11px] text-[#C2B29B] mt-0.5">初唐·盛唐·中唐·晚唐四期演进</div>
          </div>
          <div class="p-4 rounded-lg bg-white/5 border border-gilt/25">
            <div class="text-2xl sm:text-3xl font-serif font-black text-gilt-light">84 km² · 108坊</div>
            <div class="text-xs font-semibold text-white mt-1">百万人口世界之都长安</div>
            <div class="text-[11px] text-[#C2B29B] mt-0.5">中轴对称 · 东西两市 · 万国衣冠</div>
          </div>
          <div class="p-4 rounded-lg bg-white/5 border border-gilt/25">
            <div class="text-2xl sm:text-3xl font-serif font-black text-gilt-light">906.9 万户</div>
            <div class="text-xs font-semibold text-white mt-1">天宝十三载（754年）在籍峰值</div>
            <div class="text-[11px] text-[#C2B29B] mt-0.5">据杜佑《通典·食货七》精确记载</div>
          </div>
          <div class="p-4 rounded-lg bg-white/5 border border-gilt/25">
            <div class="text-2xl sm:text-3xl font-serif font-black text-gilt-light">70+ 邦国</div>
            <div class="text-xs font-semibold text-white mt-1">丝绸之路与鸿胪寺通使</div>
            <div class="text-[11px] text-[#C2B29B] mt-0.5">安西北庭护卫陆路 · 广州设市舶使</div>
          </div>
          <div class="p-4 rounded-lg bg-white/5 border border-gilt/25 col-span-2 sm:col-span-1">
            <div class="text-2xl sm:text-3xl font-serif font-black text-gilt-light">48,900+ 首</div>
            <div class="text-xs font-semibold text-white mt-1">《全唐诗》传世诗篇</div>
            <div class="text-[11px] text-[#C2B29B] mt-0.5">2200余位诗人铸就中华诗学巅峰</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         2. FOUR HISTORICAL PERIODS SPECTRUM (严格区分初唐、盛唐、中唐、晚唐)
         =================================================================== -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        seal="四期辨析"
        en-subtitle="FOUR HISTORICAL STAGES OF TANG DYNASTY"
        title="唐朝并非只有盛唐：初、盛、中、晚唐四期历史光谱"
        description="历史学与文学史严格将唐代289年划分为四个阶段。初唐九十四年是制度奠基与丝路开拓期，盛唐四十三年是开元天宝的辉煌巅峰与危机潜伏期，中唐六十五年是安史之乱后的财政重构与文化内省期，晚唐八十七年则是藩镇困局下的悲壮余响。"
      />

      <!-- Period Selector Tabs -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <button
          v-for="p in periods"
          :key="p.id"
          type="button"
          class="p-4 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden"
          :class="
            activePeriodId === p.id
              ? 'bg-cinnabar text-white border-cinnabar shadow-lg scale-[1.01]'
              : 'tang-scroll-card hover:border-cinnabar'
          "
          @click="activePeriodId = p.id"
        >
          <div class="flex items-center justify-between mb-1">
            <span class="font-serif font-bold text-lg">{{ p.name }}</span>
            <span
              class="text-xs font-mono px-2 py-0.5 rounded"
              :class="activePeriodId === p.id ? 'bg-white/20 text-white' : 'bg-gilt/15 text-gilt-dark'"
            >
              历时 {{ p.durationYears }} 年
            </span>
          </div>
          <p
            class="text-xs font-mono"
            :class="activePeriodId === p.id ? 'text-white/90' : 'text-ink-muted'"
          >
            {{ p.enName }}
          </p>
          <div class="mt-2.5 flex flex-wrap gap-1.5">
            <span
              v-for="kw in p.eraKeywords.slice(0, 3)"
              :key="kw"
              class="text-[11px] px-2 py-0.5 rounded"
              :class="activePeriodId === p.id ? 'bg-black/25 text-white' : 'bg-xuan-paper text-ink-secondary'"
            >
              {{ kw }}
            </span>
          </div>
        </button>
      </div>

      <!-- Active Period Detailed Dashboard -->
      <div class="tang-scroll-card tang-corner-frame rounded-2xl p-6 sm:p-8 shadow-museum">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div class="lg:col-span-7 space-y-4">
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-3 py-1 rounded text-xs font-bold border" :class="activePeriod.badgeClass">
                {{ activePeriod.name }} · {{ activePeriod.yearRange }}
              </span>
              <span class="text-xs text-ink-muted">
                代表帝王：{{ activePeriod.emperors }}
              </span>
            </div>

            <h3 class="text-xl sm:text-2xl font-serif font-bold text-ink">
              {{ activePeriod.name }}核心历史格局与时代特征
            </h3>

            <p class="text-sm sm:text-base text-ink-secondary leading-relaxed">
              {{ activePeriod.overview }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div class="p-3.5 rounded-lg bg-xuan-paper border border-gilt/30">
                <div class="text-xs font-bold text-cinnabar mb-1">政治与制度特征</div>
                <p class="text-xs text-ink-secondary leading-relaxed">{{ activePeriod.politicalFeature }}</p>
              </div>
              <div class="p-3.5 rounded-lg bg-xuan-paper border border-gilt/30">
                <div class="text-xs font-bold text-gilt-dark mb-1">经济与赋税演进</div>
                <p class="text-xs text-ink-secondary leading-relaxed">{{ activePeriod.economicFeature }}</p>
              </div>
              <div class="p-3.5 rounded-lg bg-xuan-paper border border-gilt/30">
                <div class="text-xs font-bold text-dunhuang-cyan mb-1">文化与学术气象</div>
                <p class="text-xs text-ink-secondary leading-relaxed">{{ activePeriod.culturalFeature }}</p>
              </div>
            </div>

            <div class="p-3.5 rounded-lg bg-cinnabar/10 border-l-4 border-cinnabar text-xs sm:text-sm text-ink">
              <strong class="text-cinnabar font-serif">史学辨析要旨：</strong>
              {{ activePeriod.historicalWarningOrInsight }}
            </div>
          </div>

          <!-- Right Column: Metrics & Silk Road Status -->
          <div class="lg:col-span-5 flex flex-col justify-between bg-xuan-paper rounded-xl p-5 border border-gilt/30 space-y-5">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-serif font-bold text-ink flex items-center gap-1.5">
                  <TrendingUp class="w-4 h-4 text-cinnabar" />
                  阶段历史指标评估
                </span>
                <span class="text-xs text-ink-muted">在籍峰值：{{ activePeriod.householdsPeak }}</span>
              </div>

              <div class="space-y-3 text-xs">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-ink-secondary">综合国力与军政辐射</span>
                    <span class="font-mono font-bold text-cinnabar">{{ activePeriod.metrics.nationalPower }} / 100</span>
                  </div>
                  <div class="h-2 rounded-full bg-xuan overflow-hidden">
                    <div class="h-full bg-cinnabar rounded-full transition-all duration-500" :style="{ width: `${activePeriod.metrics.nationalPower}%` }"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-ink-secondary">丝绸之路畅通与贸易热度</span>
                    <span class="font-mono font-bold text-gilt-dark">{{ activePeriod.metrics.silkRoadTrade }} / 100</span>
                  </div>
                  <div class="h-2 rounded-full bg-xuan overflow-hidden">
                    <div class="h-full bg-gilt rounded-full transition-all duration-500" :style="{ width: `${activePeriod.metrics.silkRoadTrade}%` }"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-ink-secondary">制度创新与治理严密度</span>
                    <span class="font-mono font-bold text-dunhuang-cyan">{{ activePeriod.metrics.institutionalMaturity }} / 100</span>
                  </div>
                  <div class="h-2 rounded-full bg-xuan overflow-hidden">
                    <div class="h-full bg-dunhuang-cyan rounded-full transition-all duration-500" :style="{ width: `${activePeriod.metrics.institutionalMaturity}%` }"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-ink-secondary">诗歌、艺术与科技创造力</span>
                    <span class="font-mono font-bold text-imperial">{{ activePeriod.metrics.culturalFlourishing }} / 100</span>
                  </div>
                  <div class="h-2 rounded-full bg-xuan overflow-hidden">
                    <div class="h-full bg-imperial rounded-full transition-all duration-500" :style="{ width: `${activePeriod.metrics.culturalFlourishing}%` }"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-3.5 rounded-lg bg-xuan-card border border-gilt/35 space-y-1.5">
              <div class="text-xs font-serif font-bold text-ink flex items-center gap-1.5">
                <Compass class="w-4 h-4 text-gilt-dark" />
                本时期丝绸之路态势：
              </div>
              <p class="text-xs text-ink-secondary leading-relaxed">
                {{ activePeriod.silkRoadStatus }}
              </p>
            </div>

            <div class="flex items-center justify-between pt-1">
              <button
                type="button"
                class="text-xs font-serif font-bold text-cinnabar hover:underline flex items-center gap-1 cursor-pointer"
                @click="router.push('/chang-an')"
              >
                深入探索长安城与四期制度对比 →
              </button>
              <button
                type="button"
                class="text-xs font-serif font-bold text-gilt-dark hover:underline flex items-center gap-1 cursor-pointer"
                @click="router.push('/timeline')"
              >
                查看此时期历史时间轴 →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         3. EIGHT DIGITAL EXHIBITION HALLS PORTAL (八大历史维度数字展厅导览)
         =================================================================== -->
    <section class="bg-xuan-paper/70 border-y border-gilt/30 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          seal="八维叙事"
          en-subtitle="EIGHT EXHIBITION DIMENSIONS"
          title="从长安城阙到万里丝路：全景数字展厅导览"
          description="围绕历史背景、交互时间轴、风云人物、重大转折、文明瑰宝、丝路交流、历史遗存与盛世回响八大核心维度，构建环环相扣的沉浸式数字历史体验。"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(hall, idx) in museumHalls"
            :key="hall.route"
            class="tang-scroll-card rounded-xl overflow-hidden flex flex-col justify-between group cursor-pointer"
            :class="idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''"
            @click="router.push(hall.route)"
          >
            <div class="relative h-48 sm:h-56 overflow-hidden bg-black">
              <img
                :src="hall.image"
                :alt="hall.title"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div class="absolute top-3 left-3 flex items-center gap-2">
                <span class="w-8 h-8 rounded bg-cinnabar text-white font-serif font-bold text-sm flex items-center justify-center border border-gilt/60 shadow">
                  {{ hall.num }}
                </span>
                <span class="px-2.5 py-0.5 rounded bg-black/65 text-gilt-light text-xs font-medium border border-gilt/30">
                  {{ hall.tag }}
                </span>
              </div>
              <div class="absolute bottom-3 left-4 right-4">
                <p class="text-[10px] font-mono tracking-[0.2em] text-gilt-light uppercase">
                  {{ hall.en }}
                </p>
                <h3 class="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-gilt-light transition">
                  {{ hall.title }}
                </h3>
              </div>
            </div>

            <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
              <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {{ hall.desc }}
              </p>
              <div class="flex items-center justify-between pt-2 border-t border-gilt/20 text-xs font-serif font-bold text-cinnabar">
                <span>进入专题数字展厅</span>
                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         4. AUTHENTIC RELICS & SITES GALLERY PREVIEW (真实出土与传世文物掠影)
         =================================================================== -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        seal="吉金贞石"
        en-subtitle="AUTHENTIC ARCHAEOLOGICAL RELICS & SITES"
        title="考古实证大唐：馆藏国宝与世界遗产掠影"
        description="所有展示文物与历史遗址均附有真实馆藏机构、出土年份与历史出处，点击任意文物卡片即可开启高清大图检视器。"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="item in spotlightRelics"
          :key="item.id"
          class="tang-scroll-card rounded-xl overflow-hidden flex flex-col group cursor-pointer"
          @click="openRelicLightbox(item)"
        >
          <div class="relative h-48 overflow-hidden bg-[#181310]">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div class="absolute top-2.5 left-2.5">
              <span
                class="px-2 py-0.5 rounded text-[11px] font-medium text-white shadow"
                :class="item.type === 'site' ? 'bg-dunhuang-cyan' : 'bg-cinnabar'"
              >
                {{ item.typeLabel }}
              </span>
            </div>
            <div class="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-[11px] text-gilt-light flex items-center gap-1 opacity-90 group-hover:opacity-100">
              <Eye class="w-3 h-3" /> 放大鉴赏
            </div>
          </div>

          <div class="p-4 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <h4 class="font-serif font-bold text-base text-ink group-hover:text-cinnabar transition line-clamp-1">
                {{ item.name }}
              </h4>
              <p class="text-xs text-ink-muted line-clamp-1 mt-0.5">
                {{ item.locationOrMuseum }}
              </p>
              <p class="text-xs text-ink-secondary line-clamp-2 mt-2 leading-relaxed">
                {{ item.summary }}
              </p>
            </div>
            <div class="pt-2 border-t border-gilt/20 text-[11px] text-gilt-dark font-mono truncate">
              出处：{{ item.imageSource }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <button
          type="button"
          class="px-6 py-3 rounded-md bg-xuan-paper hover:bg-cinnabar hover:text-white text-ink font-serif font-bold text-sm border border-gilt/50 transition inline-flex items-center gap-2 cursor-pointer"
          @click="router.push('/heritage')"
        >
          <span>查看全部 14 项唐代重大遗址与国宝文物档案</span>
          <ArrowRight class="w-4 h-4" />
        </button>
      </div>
    </section>

    <!-- Lightbox Modal -->
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
