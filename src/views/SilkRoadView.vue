<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Compass,
  MapPin,
  ArrowLeftRight,
  Scroll,
  Shield,
  Eye,
  Ship,
  Sparkles
} from 'lucide-vue-next'
import { museumApi } from '@/services/museumApi'
import type { SilkRoadNode, SilkRoadExchangeItem } from '@/types/museum'
import SectionHeader from '@/components/common/SectionHeader.vue'
import TangSealBadge from '@/components/common/TangSealBadge.vue'
import ImageLightboxModal from '@/components/common/ImageLightboxModal.vue'

const nodes = museumApi.getSilkRoadNodes()
const allExchanges = museumApi.getSilkRoadExchanges()

const activeNodeId = ref<string>(nodes[0].id)
const exchangeDirection = ref<'all' | 'westward' | 'eastward'>('all')

const activeNode = computed<SilkRoadNode>(() => {
  return nodes.find((n) => n.id === activeNodeId.value) || nodes[0]
})

const filteredExchanges = computed<SilkRoadExchangeItem[]>(() => {
  return museumApi.getSilkRoadExchanges(exchangeDirection.value)
})

const lightbox = ref({
  visible: false,
  image: '',
  title: '',
  subtitle: '',
  era: '',
  source: '',
  desc: ''
})

function openNodeLightbox(node: SilkRoadNode) {
  lightbox.value = {
    visible: true,
    image: node.image,
    title: `${node.name}（${node.ancientName}）`,
    subtitle: node.imageCaption,
    era: node.tangJurisdiction,
    source: node.imageSource,
    desc: node.tradeAndCulture
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
    <!-- ===================================================================
         SECTION 1: 丝绸之路万里交互古舆图 (INTERACTIVE SILK ROAD ATLAS)
         =================================================================== -->
    <section>
      <SectionHeader
        seal="丝路万里"
        en-subtitle="DIMENSION VI · THE SILK ROAD & EURASIAN CIVILIZATION EXCHANGE"
        title="丝路交流：从长安西市、河西敦煌到撒马尔罕与海上丝路"
        description="丝绸之路绝非唐朝的边缘点缀，而是维系帝国国防、马政、金融与文化创新的战略大动脉。请点击下方交互式丝路古舆图上的九大枢纽节点，探访安西都护府、敦煌莫高窟、那烂陀寺、巴格达与奈良唐招提寺的历史现场。"
      />

      <!-- Interactive SVG Silk Road Map Canvas -->
      <div class="tang-scroll-card tang-corner-frame rounded-2xl p-4 sm:p-6 bg-[#1C1612] text-[#F5EFE6] border-2 border-gilt/50 shadow-2xl mb-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-gilt/30">
          <div class="flex items-center gap-2.5">
            <TangSealBadge text="丝路舆图" size="sm" />
            <h3 class="font-serif font-bold text-base sm:text-lg text-gilt-light">
              大唐陆上与海上丝绸之路九大核心枢纽交互图（点击地图节点切换下方详档）
            </h3>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-xs text-[#D5C6B0]">
            <span class="inline-flex items-center gap-1.5">
              <span class="w-3 h-0.5 bg-gilt inline-block"></span> 陆上丝路主干道
            </span>
            <span class="inline-flex items-center gap-1.5">
              <span class="w-3 h-0.5 bg-cinnabar-light inline-block"></span> 唐蕃古道
            </span>
            <span class="inline-flex items-center gap-1.5">
              <span class="w-3 h-0.5 bg-[#5293A8] inline-block"></span> 海上丝绸之路
            </span>
          </div>
        </div>

        <!-- SVG Map Viewport -->
        <div class="relative w-full overflow-x-auto">
          <svg
            viewBox="0 0 1020 440"
            class="w-full min-w-[760px] h-auto rounded-xl bg-gradient-to-br from-[#231B15] via-[#1B1410] to-[#14191F] border border-gilt/30 select-none"
            role="img"
            aria-label="唐代丝绸之路交互地图"
          >
            <!-- Subtle Grid Lines -->
            <g stroke="rgba(200,155,64,0.1)" stroke-width="1">
              <line x1="0" y1="110" x2="1020" y2="110" />
              <line x1="0" y1="220" x2="1020" y2="220" />
              <line x1="0" y1="330" x2="1020" y2="330" />
              <line x1="200" y1="0" x2="200" y2="440" />
              <line x1="400" y1="0" x2="400" y2="440" />
              <line x1="600" y1="0" x2="600" y2="440" />
              <line x1="800" y1="0" x2="800" y2="440" />
            </g>

            <!-- Geographic Labels -->
            <text x="480" y="95" fill="rgba(226,190,111,0.35)" font-size="13" font-family="serif" letter-spacing="4">
              天山山脉 · 漠北参天可汗道
            </text>
            <text x="590" y="275" fill="rgba(226,190,111,0.35)" font-size="12" font-family="serif" letter-spacing="3">
              祁连山 · 青藏高原（吐蕃）
            </text>
            <text x="140" y="135" fill="rgba(226,190,111,0.35)" font-size="12" font-family="serif" letter-spacing="2">
              中亚河中地区 · 帕米尔葱岭
            </text>
            <text x="720" y="405" fill="rgba(82,147,168,0.55)" font-size="12" font-family="serif" letter-spacing="3">
              海上丝绸之路（广州通海夷道 → 印度洋 → 波斯湾 / 扬州 → 奈良）
            </text>

            <!-- 1. Main Overland Silk Road Path: Chang'an -> Liangzhou -> Dunhuang -> Gaochang -> Kucha/Suyab -> Samarkand -> Baghdad -->
            <path
              d="M 820 295 Q 745 265 675 235 T 560 205 Q 515 170 465 150 Q 405 152 345 165 Q 280 175 215 195 Q 150 230 85 265"
              fill="none"
              stroke="#E2BE6F"
              stroke-width="3.5"
              stroke-dasharray="8 5"
            />

            <!-- 2. Southern Branch & Tang-Tibet Ancient Road: Chang'an / Dunhuang / Samarkand -> Nalanda (India) -->
            <path
              d="M 820 295 Q 580 355 310 375 M 215 195 Q 260 285 310 375"
              fill="none"
              stroke="#D43F3A"
              stroke-width="2.5"
              stroke-dasharray="5 5"
            />

            <!-- 3. Maritime Silk Road & East Asian Tang Route: Chang'an -> Yangzhou/Nara -> Ocean -> Baghdad -->
            <path
              d="M 820 295 L 935 315 Q 760 425 310 375 Q 180 360 85 265"
              fill="none"
              stroke="#5293A8"
              stroke-width="2.5"
              stroke-dasharray="6 4"
            />

            <!-- Interactive Node Markers -->
            <g
              v-for="node in nodes"
              :key="node.id"
              class="cursor-pointer"
              @click="activeNodeId = node.id"
            >
              <!-- Outer Pulse Ring for Active Node -->
              <circle
                v-if="activeNode.id === node.id"
                :cx="node.coords.x"
                :cy="node.coords.y"
                r="22"
                fill="rgba(212, 63, 58, 0.28)"
                stroke="#E2BE6F"
                stroke-width="2"
              />
              <circle
                :cx="node.coords.x"
                :cy="node.coords.y"
                :r="activeNode.id === node.id ? 11 : 8"
                :fill="activeNode.id === node.id ? '#D43F3A' : '#C89B40'"
                stroke="#FFFDF9"
                stroke-width="2.5"
              />
              <!-- Node Label Pill -->
              <rect
                :x="node.coords.x - 58"
                :y="node.coords.y + 15"
                width="116"
                height="24"
                rx="4"
                :fill="activeNode.id === node.id ? '#A82424' : 'rgba(20, 16, 14, 0.88)'"
                :stroke="activeNode.id === node.id ? '#E2BE6F' : 'rgba(200, 155, 64, 0.5)'"
                stroke-width="1"
              />
              <text
                :x="node.coords.x"
                :y="node.coords.y + 31"
                text-anchor="middle"
                fill="#FFFDF9"
                font-size="11.5"
                font-weight="bold"
                font-family="Noto Serif SC, serif"
              >
                {{ node.name.split('·')[0].split('（')[0].trim() }}
              </text>
            </g>
          </svg>
        </div>

        <!-- Quick Node Pills Bar -->
        <div class="mt-4 flex flex-wrap items-center gap-2">
          <button
            v-for="(node, idx) in nodes"
            :key="node.id"
            type="button"
            class="px-3 py-1.5 rounded-lg text-xs font-serif transition cursor-pointer flex items-center gap-1.5"
            :class="
              activeNode.id === node.id
                ? 'bg-cinnabar text-white font-bold shadow ring-1 ring-gilt'
                : 'bg-white/10 text-[#E5D8C5] hover:bg-white/20'
            "
            @click="activeNodeId = node.id"
          >
            <span class="font-mono text-[10px] opacity-80">0{{ idx + 1 }}</span>
            <span>{{ node.name }}</span>
          </button>
        </div>
      </div>

      <!-- Active Silk Road Node Detailed Panel -->
      <div class="tang-scroll-card tang-corner-frame rounded-2xl overflow-hidden shadow-museum">
        <div class="grid grid-cols-1 lg:grid-cols-12">
          <!-- Left 5 Cols: Authentic Site/Artifact Photo & Frontier Poem -->
          <div class="lg:col-span-5 flex flex-col justify-between bg-xuan-paper border-r border-gilt/30">
            <div
              class="relative h-64 bg-black cursor-pointer group overflow-hidden"
              @click="openNodeLightbox(activeNode)"
            >
              <img
                :src="activeNode.image"
                :alt="activeNode.imageCaption"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded bg-cinnabar text-white text-xs font-medium">
                    {{ activeNode.routeGroupLabel }}
                  </span>
                  <span class="text-xs text-gilt-light flex items-center gap-1">
                    <Eye class="w-3.5 h-3.5" /> 放大检视
                  </span>
                </div>
                <p class="text-xs font-serif font-bold text-white mt-1.5">
                  {{ activeNode.imageCaption }}
                </p>
                <p class="text-[11px] font-mono text-[#D2C3AE]">
                  {{ activeNode.imageSource }}
                </p>
              </div>
            </div>

            <!-- Frontier Tang Poem Card -->
            <div class="p-5 space-y-2">
              <div class="flex items-center justify-between text-xs text-cinnabar font-serif font-bold">
                <span class="flex items-center gap-1.5">
                  <Scroll class="w-4 h-4" />
                  唐人丝路诗篇纪实
                </span>
                <span>{{ activeNode.tangPoem.author }} {{ activeNode.tangPoem.title }}</span>
              </div>
              <p class="text-base font-serif font-bold text-ink tracking-wide py-1">
                “{{ activeNode.tangPoem.verse }}”
              </p>
              <div class="text-xs text-ink-muted font-mono pt-1 border-t border-gilt/25">
                长安里程坐标：{{ activeNode.distanceFromChangAn }}
              </div>
            </div>
          </div>

          <!-- Right 7 Cols: Historical Jurisdiction, Trade & Archaeological Evidence -->
          <div class="lg:col-span-7 p-6 sm:p-8 space-y-5">
            <div class="border-b border-gilt/30 pb-4">
              <div class="flex flex-wrap items-center gap-2 mb-1.5">
                <TangSealBadge :text="activeNode.routeGroupLabel" size="sm" />
                <span class="text-xs font-mono text-cinnabar font-bold">
                  唐代建制：{{ activeNode.tangJurisdiction }}
                </span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-serif font-bold text-ink">
                {{ activeNode.name }}
              </h3>
              <p class="text-xs text-ink-muted mt-1 flex items-center gap-1.5">
                <MapPin class="w-3.5 h-3.5 text-cinnabar shrink-0" />
                古称：{{ activeNode.ancientName }} ｜ 今址：{{ activeNode.modernLocation }}
              </p>
            </div>

            <p class="text-sm text-ink-secondary leading-relaxed">
              {{ activeNode.summary }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-xuan-paper border border-gilt/35 space-y-1.5">
                <h4 class="text-xs font-serif font-bold text-cinnabar flex items-center gap-1.5">
                  <Shield class="w-4 h-4" />
                  战略地位与制度管辖
                </h4>
                <p class="text-xs text-ink-secondary leading-relaxed">
                  {{ activeNode.historicalRole }}
                </p>
              </div>

              <div class="p-4 rounded-xl bg-xuan-paper border border-gilt/35 space-y-1.5">
                <h4 class="text-xs font-serif font-bold text-gilt-dark flex items-center gap-1.5">
                  <Sparkles class="w-4 h-4" />
                  商贸往来与文明互鉴
                </h4>
                <p class="text-xs text-ink-secondary leading-relaxed">
                  {{ activeNode.tradeAndCulture }}
                </p>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-cinnabar/5 border-l-4 border-cinnabar space-y-1">
              <div class="text-xs font-serif font-bold text-cinnabar">
                考古遗址与出土文献实证：
              </div>
              <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {{ activeNode.archaeologicalEvidence }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         SECTION 2: 东西方双向文明交流矩阵（东学西渐 vs 西学东渐）
         =================================================================== -->
    <section class="pt-6 border-t-2 border-gilt/35">
      <SectionHeader
        seal="文明互鉴"
        en-subtitle="BIDIRECTIONAL EXCHANGE · EASTWARD & WESTWARD"
        title="双向奔赴的文明：大唐西传与丝路东传物产技术谱系"
        description="丝绸之路不是单向的贸易输出，而是人类历史上规模空前的技术、器物、物种、艺术与宗教哲学的双向大交融。"
      />

      <!-- Direction Filter -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-8">
        <button
          v-for="tab in [
            { id: 'all', label: '双向互鉴全景 (8项)' },
            { id: 'westward', label: '大唐西传世界：丝绸·造纸·瓷器·唐律 (4项)' },
            { id: 'eastward', label: '丝路东传长安：天马良种·金银琉璃·胡旋马球·三夷教 (4项)' }
          ]"
          :key="tab.id"
          type="button"
          class="px-4 py-2 rounded-lg text-xs sm:text-sm font-serif font-bold border transition cursor-pointer"
          :class="
            exchangeDirection === tab.id
              ? 'bg-cinnabar text-white border-cinnabar shadow'
              : 'tang-scroll-card text-ink-secondary hover:border-cinnabar'
          "
          @click="exchangeDirection = tab.id as 'all' | 'westward' | 'eastward'"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="item in filteredExchanges"
          :key="item.id"
          class="tang-scroll-card rounded-xl p-6 space-y-3 border-l-4"
          :class="item.direction === 'westward' ? 'border-l-cinnabar' : 'border-l-dunhuang-cyan'"
        >
          <div class="flex items-center justify-between gap-2">
            <span
              class="px-2.5 py-0.5 rounded text-xs font-bold"
              :class="
                item.direction === 'westward'
                  ? 'bg-cinnabar/15 text-cinnabar'
                  : 'bg-dunhuang-cyan/15 text-dunhuang-cyan'
              "
            >
              {{ item.directionLabel }}
            </span>
            <span class="text-xs font-mono text-ink-muted">{{ item.peakPeriod }}</span>
          </div>

          <h3 class="text-lg font-serif font-bold text-ink">
            {{ item.name }}
          </h3>

          <p class="text-xs font-mono text-gilt-dark">
            传播路径：{{ item.originOrTarget }}
          </p>

          <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
            {{ item.description }}
          </p>

          <div class="pt-2 border-t border-gilt/20 text-xs text-ink-muted">
            <strong class="text-ink font-serif">考古与文献实证：</strong>{{ item.historicalRecordOrRelic }}
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         SECTION 3: 唐代丝绸之路三大治理制度保障（过所护照 · 萨宝府 · 市舶使）
         =================================================================== -->
    <section class="tang-scroll-card tang-corner-frame rounded-2xl p-6 sm:p-8 bg-xuan-paper">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="space-y-2">
          <div class="flex items-center gap-2 text-cinnabar font-serif font-bold text-base">
            <Scroll class="w-5 h-5" />
            <span>唐代“过所”：丝路通行护照制度</span>
          </div>
          <p class="text-xs text-ink-secondary leading-relaxed">
            吐鲁番阿斯塔那古墓出土的《唐开元二十年（732年）石染典过所》证实：任何中外商队行经潼关、蒲津关、玉门关、铁门关，均须向官府申领载明姓名、随行奴仆、驼马数量与货物清单的法定通行证<strong>“过所”</strong>，沿途驿站与烽燧据此提供保护与核验。
          </p>
        </div>

        <div class="space-y-2">
          <div class="flex items-center gap-2 text-gilt-dark font-serif font-bold text-base">
            <ArrowLeftRight class="w-5 h-5" />
            <span>“萨宝府”与《唐律》化外人条款</span>
          </div>
          <p class="text-xs text-ink-secondary leading-relaxed">
            唐廷专门在聚居胡商的州县设立<strong>“萨宝府”</strong>（源自梵语商主 Sarthavaha），任命粟特胡人首领协助管理胡商聚落与祆祠事务；同时《唐律疏议》规定同国籍胡商纠纷适用其本国法律，不同国籍纠纷适用唐律，开创了早期的国际私法准则。
          </p>
        </div>

        <div class="space-y-2">
          <div class="flex items-center gap-2 text-dunhuang-cyan font-serif font-bold text-base">
            <Ship class="w-5 h-5" />
            <span>广州“市舶使”与通海夷道</span>
          </div>
          <p class="text-xs text-ink-secondary leading-relaxed">
            开元二年（714年）唐朝于广州首设<strong>“市舶使”</strong>，负责登记外国海船、征收“下碇税”、收购珍异并保护大食与波斯海商合法财产，为中国宋元市舶司海关制度奠定了最初范式。
          </p>
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
