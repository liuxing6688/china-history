<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Landmark,
  Scale,
  BookOpen,
  Users,
  MapPin,
  Scroll,
  Eye,
  CheckCircle2,
  ArrowRight
} from 'lucide-vue-next'
import { museumApi } from '@/services/museumApi'
import type { ChangAnLandmark, TangPeriodId } from '@/types/museum'
import SectionHeader from '@/components/common/SectionHeader.vue'
import TangSealBadge from '@/components/common/TangSealBadge.vue'
import ImageLightboxModal from '@/components/common/ImageLightboxModal.vue'

const periods = museumApi.getPeriods()
const landmarks = museumApi.getChangAnLandmarks()
const institutions = museumApi.getInstitutions()

const selectedPeriodId = ref<TangPeriodId>('early')
const selectedLandmarkId = ref<string>(landmarks[0].id)
const selectedCategory = ref<string>('all')

const activeLandmark = computed<ChangAnLandmark>(() => {
  return landmarks.find((l) => l.id === selectedLandmarkId.value) || landmarks[0]
})

const filteredLandmarks = computed(() => {
  if (selectedCategory.value === 'all') return landmarks
  return landmarks.filter((l) => l.category === selectedCategory.value)
})

// Authentic historical household statistics recorded in《通典》《旧唐书》《新唐书》
const householdRecords = [
  { year: '武德年间 (620s)', reign: '初唐·唐高祖', households: 219, note: '隋末战乱初定，户不满三百万', period: 'early' },
  { year: '贞观十三年 (639)', reign: '初唐·唐太宗', households: 304, note: '贞观之治休养生息，流民归业', period: 'early' },
  { year: '永徽三年 (652)', reign: '初唐·唐高宗', households: 380, note: '永徽之治，均田租庸调稳步推进', period: 'early' },
  { year: '神龙元年 (705)', reign: '初唐·武周至中宗', households: 615, note: '武则天执政期间户口倍增', period: 'early' },
  { year: '开元十四年 (726)', reign: '盛唐·唐玄宗', households: 706, note: '宇文融括户，开元全盛来临', period: 'high' },
  { year: '天宝十三载 (754)', reign: '盛唐·唐玄宗', households: 906.9, note: '《通典》载9,069,154户，唐代峰值', period: 'high' },
  { year: '广德二年 (764)', reign: '中唐·唐代宗', households: 293, note: '安史之乱后藩镇割据、籍帐散失', period: 'middle' },
  { year: '建中元年 (780)', reign: '中唐·唐德宗', households: 380, note: '杨炎推行两税法，重核主客户380万', period: 'middle' },
  { year: '会昌五年 (845)', reign: '晚唐·唐武宗', households: 495, note: '会昌至宣宗大中之治短暂恢复', period: 'late' }
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

function openLandmarkImage(lm: ChangAnLandmark) {
  lightbox.value = {
    visible: true,
    image: lm.image,
    title: lm.name,
    subtitle: lm.locationInCity,
    era: '唐代长安城（618—904年）',
    source: lm.imageSource,
    desc: lm.historicalDetail
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
    <!-- ===================================================================
         SECTION 1: 历史背景与大唐四期宏观演进
         =================================================================== -->
    <section>
      <SectionHeader
        seal="历史背景"
        en-subtitle="DIMENSION I · HISTORICAL BACKGROUND & FOUR STAGES"
        title="大唐的建立与四期演进：从隋末一统到盛世长安"
        description="唐朝为何能崛起于隋末废墟之上？本板块系统梳理唐代所处的历史背景、时代特征、政治制度、社会经济与思想环境，并以《通典》权威户籍数据还原初唐、盛唐、中唐、晚唐的真实历史轨迹。"
      />

      <!-- Five Historical Formation Pillars -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="tang-scroll-card rounded-xl p-6 space-y-3">
          <div class="flex items-center gap-2.5 text-cinnabar font-serif font-bold text-lg">
            <Landmark class="w-5 h-5" />
            <span>隋唐制度渊源与大一统遗产</span>
          </div>
          <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
            陈寅恪先生于《隋唐制度渊源略论稿》指出，唐代制度承袭北魏、北齐、北周及南朝梁陈之精华，更直接继承了隋文帝开创的<strong>三省六部制</strong>、<strong>科举制</strong>与贯通南北的<strong>大运河</strong>（通济渠、永济渠、江南河），使政治重心关中长安得以与经济富庶的江淮平原紧密相连。
          </p>
        </div>

        <div class="tang-scroll-card rounded-xl p-6 space-y-3">
          <div class="flex items-center gap-2.5 text-gilt-dark font-serif font-bold text-lg">
            <Scale class="w-5 h-5" />
            <span>亡隋之鉴与民本政治理性</span>
          </div>
          <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
            亲历隋炀帝盛极而亡的初唐君臣，将“水能载舟，亦能覆舟”奉为治国铁律。唐太宗与房玄龄、杜如晦、魏征确立了<strong>门下封驳</strong>、<strong>谏官随宰相入阁议政</strong>、<strong>死刑三复奏</strong>与“轻徭薄赋、输庸代役”的理性政策，为盛世奠定了深厚的制度容错能力。
          </p>
        </div>

        <div class="tang-scroll-card rounded-xl p-6 space-y-3">
          <div class="flex items-center gap-2.5 text-dunhuang-cyan font-serif font-bold text-lg">
            <Users class="w-5 h-5" />
            <span>三教并重与华夷一家的时代精神</span>
          </div>
          <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
            唐代奉行儒、释、道<strong>“三教并重”</strong>，同时允许景教、祆教、摩尼教在长安建寺传播。打破“贵中华、贱夷狄”藩篱，以开放的羁縻府州与都护府体系吸纳突厥、回纥、粟特、新罗与日本人才，形成了刚健豪迈、兼容并蓄的时代风貌。
          </p>
        </div>
      </div>

      <!-- Historical Household Data Chart (《通典》唐代在籍户数演变可视化) -->
      <div class="tang-scroll-card tang-corner-frame rounded-2xl p-6 sm:p-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-gilt/25 pb-4">
          <div>
            <span class="text-xs font-mono text-cinnabar uppercase tracking-widest">
              HISTORICAL DEMOGRAPHIC DATA · 杜佑《通典·食货典》
            </span>
            <h3 class="text-xl font-serif font-bold text-ink mt-0.5">
              唐代四期在籍户数变迁图谱（单位：万户）
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 text-xs">
            <span class="px-2.5 py-1 rounded bg-cinnabar/15 text-cinnabar font-medium">初唐复苏 (219→615万户)</span>
            <span class="px-2.5 py-1 rounded bg-gilt/20 text-gilt-dark font-medium">盛唐极盛 (906.9万户)</span>
            <span class="px-2.5 py-1 rounded bg-dunhuang-cyan/15 text-dunhuang-cyan font-medium">中晚唐两税户</span>
          </div>
        </div>

        <div class="space-y-3.5">
          <div
            v-for="rec in householdRecords"
            :key="rec.year"
            class="grid grid-cols-12 items-center gap-3 text-xs"
          >
            <div class="col-span-4 sm:col-span-3 font-serif font-semibold text-ink">
              <div>{{ rec.year }}</div>
              <div class="text-[11px] text-ink-muted font-normal">{{ rec.reign }}</div>
            </div>
            <div class="col-span-8 sm:col-span-5">
              <div class="h-6 rounded bg-xuan-paper overflow-hidden flex items-center p-0.5 border border-gilt/20">
                <div
                  class="h-full rounded flex items-center justify-end pr-2 text-[11px] font-mono font-bold text-white transition-all duration-700"
                  :class="
                    rec.period === 'high'
                      ? 'bg-gradient-to-r from-cinnabar to-gilt'
                      : rec.period === 'early'
                      ? 'bg-cinnabar/85'
                      : rec.period === 'middle'
                      ? 'bg-dunhuang-cyan'
                      : 'bg-imperial'
                  "
                  :style="{ width: `${Math.max((rec.households / 920) * 100, 18)}%` }"
                >
                  {{ rec.households }}万
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-4 text-ink-secondary pl-1 sm:pl-2">
              {{ rec.note }}
            </div>
          </div>
        </div>

        <p class="mt-5 pt-4 border-t border-gilt/20 text-xs text-ink-muted">
          史料注记：数据引自唐代宰相杜佑《通典·食货七·历代盛衰户口》及《旧唐书·地理志》。中晚唐在籍户数下降主要因安史之乱后河北藩镇不报户籍及人口南迁隐漏，实际总人口仍保持在3000万以上。
        </p>
      </div>
    </section>

    <!-- ===================================================================
         SECTION 2: 盛世长安 —— 百万人国际都城交互式坊市沙盘
         =================================================================== -->
    <section>
      <SectionHeader
        seal="盛世长安"
        en-subtitle="IMPERIAL METROPOLIS · INTERACTIVE CHANG-AN SANDBOX"
        title="盛世长安：百万人国际都城与九宫坊市交互沙盘"
        description="唐长安城周长36.7公里，面积达84平方公里（约为明清西安城的9.7倍、古罗马城的7倍）。全城以宽达150米的朱雀大街为中轴，严整划分为宫城、皇城与外郭城108座里坊及东、西两市。请点击下方长安城重要地标查看考古实证与历史图景。"
      />

      <!-- Category Filter -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-8">
        <button
          v-for="cat in [
            { id: 'all', label: '全部长安地标 (9)' },
            { id: 'palace', label: '皇家三大内（太极·大明·兴庆）' },
            { id: 'government', label: '皇城三省六部' },
            { id: 'market', label: '东西两市（金市与商市）' },
            { id: 'temple', label: '译经佛寺与丝路三夷教' },
            { id: 'residential', label: '王公与举子里坊' }
          ]"
          :key="cat.id"
          type="button"
          class="px-3.5 py-1.5 rounded-full text-xs font-serif font-semibold border transition cursor-pointer"
          :class="
            selectedCategory === cat.id
              ? 'bg-cinnabar text-white border-cinnabar shadow-sm'
              : 'bg-xuan-card border-gilt/40 text-ink-secondary hover:border-cinnabar'
          "
          @click="selectedCategory = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left 7 Cols: Architectural Grid Sandbox of Chang'an City -->
        <div class="lg:col-span-7 tang-scroll-card tang-corner-frame rounded-2xl p-5 sm:p-6 bg-xuan-paper">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <TangSealBadge text="长安城制" size="sm" />
              <span class="text-sm font-serif font-bold text-ink">
                唐西京长安城空间布局示意（北上南下 · 朱雀大街中轴对称）
              </span>
            </div>
            <span class="text-[11px] font-mono text-ink-muted">点击区块切换详情</span>
          </div>

          <!-- Architectural Schematic Map -->
          <div class="relative border-2 border-cinnabar/60 rounded-xl p-4 bg-xuan-card shadow-inner space-y-3">
            <!-- North Compass & Forbidden Park Indicator -->
            <div class="text-center text-[11px] font-mono text-ink-muted py-1 bg-gilt/10 rounded border border-gilt/30">
              ▲ 北：禁苑 · 渭水 · 龙首原（大明宫高踞东北原上）
            </div>

            <!-- Landmarks Interactive Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                v-for="lm in filteredLandmarks"
                :key="lm.id"
                type="button"
                class="p-3.5 rounded-lg border text-left transition-all cursor-pointer flex items-start gap-3"
                :class="[
                  lm.id === 'daming-palace' ? 'sm:col-span-2' : '',
                  selectedLandmarkId === lm.id
                    ? 'bg-cinnabar text-white border-cinnabar shadow-md ring-2 ring-gilt'
                    : 'bg-xuan-paper/90 border-gilt/35 text-ink hover:border-cinnabar'
                ]"
                @click="selectedLandmarkId = lm.id"
              >
                <img
                  :src="lm.image"
                  :alt="lm.name"
                  class="w-14 h-14 rounded object-cover border border-gilt/50 shrink-0 mt-0.5"
                />
                <div class="min-w-0 flex-1">
                  <div class="flex items-center justify-between gap-2">
                    <span
                      class="text-[10px] px-2 py-0.5 rounded font-semibold"
                      :class="selectedLandmarkId === lm.id ? 'bg-white/20 text-white' : 'bg-cinnabar/15 text-cinnabar'"
                    >
                      {{ lm.categoryLabel }}
                    </span>
                    <span
                      class="text-[10px] font-mono truncate"
                      :class="selectedLandmarkId === lm.id ? 'text-gilt-light' : 'text-ink-muted'"
                    >
                      {{ lm.locationInCity.split('（')[0] }}
                    </span>
                  </div>
                  <h4 class="font-serif font-bold text-sm sm:text-base mt-1 truncate">
                    {{ lm.name }}
                  </h4>
                  <p
                    class="text-xs line-clamp-2 mt-0.5 leading-snug"
                    :class="selectedLandmarkId === lm.id ? 'text-white/90' : 'text-ink-secondary'"
                  >
                    {{ lm.summary }}
                  </p>
                </div>
              </button>
            </div>

            <!-- Central Axis Label -->
            <div class="text-center text-[11px] font-serif text-cinnabar py-1.5 bg-cinnabar/10 rounded border border-cinnabar/25">
              ┃ 中轴线：承天门 → 朱雀门 → 朱雀大街（宽150米）→ 明德门（南正门） ┃
            </div>
          </div>
        </div>

        <!-- Right 5 Cols: Active Landmark Deep Dive Card -->
        <div class="lg:col-span-5 tang-scroll-card tang-corner-frame rounded-2xl overflow-hidden shadow-museum">
          <div
            class="relative h-56 bg-black cursor-pointer group"
            @click="openLandmarkImage(activeLandmark)"
          >
            <img
              :src="activeLandmark.image"
              :alt="activeLandmark.name"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded bg-cinnabar text-white text-xs font-medium">
                  {{ activeLandmark.categoryLabel }}
                </span>
                <span class="text-xs text-gilt-light flex items-center gap-1">
                  <Eye class="w-3.5 h-3.5" /> 点击放大检视
                </span>
              </div>
              <h3 class="text-xl font-serif font-bold text-white mt-1.5">
                {{ activeLandmark.name }}
              </h3>
              <p class="text-xs text-[#DFD2BE] flex items-center gap-1 mt-0.5">
                <MapPin class="w-3.5 h-3.5 text-gilt-light shrink-0" />
                {{ activeLandmark.locationInCity }}
              </p>
            </div>
          </div>

          <div class="p-6 space-y-4">
            <div>
              <h4 class="text-xs font-mono uppercase tracking-wider text-cinnabar font-bold mb-1">
                历史规制与社会生活实景
              </h4>
              <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {{ activeLandmark.historicalDetail }}
              </p>
            </div>

            <div class="p-3.5 rounded-lg bg-xuan-paper border border-gilt/30 space-y-1">
              <div class="text-xs font-serif font-bold text-gilt-dark flex items-center gap-1.5">
                <CheckCircle2 class="w-4 h-4 text-cinnabar" />
                考古发掘与文物实证
              </div>
              <p class="text-xs text-ink-secondary leading-relaxed">
                {{ activeLandmark.archaeologicalEvidence }}
              </p>
            </div>

            <div class="p-3.5 rounded-lg bg-cinnabar/5 border-l-4 border-cinnabar space-y-1">
              <div class="text-xs font-serif font-bold text-cinnabar flex items-center gap-1.5">
                <Scroll class="w-4 h-4" />
                关联历史人物与唐诗吟咏
              </div>
              <p class="text-xs text-ink leading-relaxed font-serif">
                {{ activeLandmark.famousFiguresOrPoems }}
              </p>
            </div>

            <div class="pt-2 border-t border-gilt/20 text-[11px] text-ink-muted font-mono">
              图像来源：{{ activeLandmark.imageSource }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         SECTION 3: 大唐三大核心制度创新（三省六部 · 科举取士 · 赋税律法）
         =================================================================== -->
    <section>
      <SectionHeader
        seal="典章制度"
        en-subtitle="INSTITUTIONAL INNOVATION & GOVERNANCE"
        title="盛世背后的制度密码：三省六部、科举与《唐律疏议》"
        description="盛唐气象绝非偶然，而是建立在中国古代最成熟的文官行政、公开选贤与礼法合一体制之上。"
      />

      <div class="space-y-8">
        <div
          v-for="inst in institutions"
          :key="inst.id"
          class="tang-scroll-card rounded-2xl p-6 sm:p-8 space-y-5"
        >
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-gilt/30 pb-4">
            <div>
              <span class="text-xs font-mono text-cinnabar font-semibold">
                {{ inst.subtitle }}
              </span>
              <h3 class="text-xl sm:text-2xl font-serif font-bold text-ink mt-0.5">
                {{ inst.title }}
              </h3>
            </div>
            <span class="px-3 py-1 rounded bg-gilt/15 text-gilt-dark text-xs font-medium border border-gilt/35 self-start md:self-auto">
              {{ inst.periodEvolution }}
            </span>
          </div>

          <p class="text-sm text-ink-secondary leading-relaxed">
            {{ inst.coreMechanism }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              v-for="(dept, index) in inst.departments"
              :key="dept.name"
              class="p-4 rounded-xl bg-xuan-paper border border-gilt/30 relative"
            >
              <div class="flex items-center gap-2 mb-2">
                <span class="w-6 h-6 rounded-full bg-cinnabar text-white text-xs font-bold flex items-center justify-center">
                  {{ index + 1 }}
                </span>
                <h4 class="font-serif font-bold text-base text-ink">{{ dept.name }}</h4>
              </div>
              <p class="text-xs font-semibold text-cinnabar mb-1.5">{{ dept.role }}</p>
              <p class="text-xs text-ink-secondary leading-relaxed">{{ dept.detail }}</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-gilt/20 text-xs">
            <p class="text-ink-secondary">
              <strong class="text-ink font-serif">深远历史意义：</strong>{{ inst.historicalSignificance }}
            </p>
            <span class="text-gilt-dark font-mono shrink-0">
              文献依据：{{ inst.primarySource }}
            </span>
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
