<script setup lang="ts">
import { ref } from 'vue'
import {
  Globe,
  BookOpen,
  Scale,
  Lightbulb,
  CheckCircle2,
  Quote,
  Sparkles,
  MessageSquareQuote
} from 'lucide-vue-next'
import { museumApi } from '@/services/museumApi'
import SectionHeader from '@/components/common/SectionHeader.vue'
import TangSealBadge from '@/components/common/TangSealBadge.vue'

const influences = museumApi.getInfluenceDimensions()
const reflections = museumApi.getCriticalReflections()

// Track user selected option per reflection topic for interactive feedback
const selectedOptions = ref<Record<string, string>>({
  'ref-01-NotAllTangIsHighTang': 'opt-military',
  'ref-02-CosmopolitanConfidence': 'opt-synthesis',
  'ref-03-SilkRoadLifeline': 'opt-maritime'
})

function chooseOption(topicId: string, optionId: string) {
  selectedOptions.value[topicId] = optionId
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
    <!-- ===================================================================
         PART 1: 历史影响与现实意义 (DIMENSION VII)
         =================================================================== -->
    <section>
      <SectionHeader
        seal="盛世回响"
        en-subtitle="DIMENSION VII · HISTORICAL INFLUENCE & CONTEMPORARY SIGNIFICANCE"
        title="盛世回响：唐代文明对中华法统、东亚世界与全球互鉴的深远影响"
        description="结合具体历史事实与考古文献，深入剖析唐朝对中国近世政治经济社会演进、东亚“唐风文化圈”成型及世界文明交流的实质性贡献。"
      />

      <div class="space-y-10">
        <div
          v-for="dim in influences"
          :key="dim.id"
          class="tang-scroll-card tang-corner-frame rounded-2xl overflow-hidden shadow-museum"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12">
            <!-- Left 4 Cols: Theme Visual & Core Thesis -->
            <div class="lg:col-span-4 bg-xuan-paper border-r border-gilt/30 flex flex-col justify-between">
              <div class="relative h-56 bg-black overflow-hidden">
                <img
                  :src="dim.image"
                  :alt="dim.imageCaption"
                  class="w-full h-full object-cover opacity-90"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <span class="text-[10px] font-mono tracking-[0.2em] text-gilt-light uppercase">
                    {{ dim.enTitle }}
                  </span>
                  <h3 class="text-xl font-serif font-bold text-white mt-1">
                    {{ dim.title }}
                  </h3>
                </div>
              </div>

              <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div class="space-y-2">
                  <div class="text-xs font-serif font-bold text-cinnabar">核心史学论断：</div>
                  <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {{ dim.coreThesis }}
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-cinnabar/10 border-l-4 border-cinnabar space-y-1">
                  <div class="text-xs font-serif font-bold text-cinnabar flex items-center gap-1.5">
                    <Sparkles class="w-4 h-4" />
                    当代文化价值与现实启示
                  </div>
                  <p class="text-xs text-ink leading-relaxed">
                    {{ dim.contemporaryValue }}
                  </p>
                </div>

                <div class="text-[11px] font-mono text-ink-muted pt-2 border-t border-gilt/20">
                  配图：{{ dim.imageCaption }}（{{ dim.imageSource }}）
                </div>
              </div>
            </div>

            <!-- Right 8 Cols: Concrete Historical Facts & Evidence -->
            <div class="lg:col-span-8 p-6 sm:p-8 space-y-5">
              <div class="border-b border-gilt/30 pb-3">
                <span class="text-xs font-mono text-gilt-dark font-semibold">{{ dim.subtitle }}</span>
                <h4 class="text-lg font-serif font-bold text-ink mt-0.5">
                  具体历史事实与制度/考古证据链
                </h4>
              </div>

              <div class="space-y-4">
                <div
                  v-for="(fact, idx) in dim.historicalFacts"
                  :key="fact.heading"
                  class="p-4 sm:p-5 rounded-xl bg-xuan-paper border border-gilt/35 space-y-2"
                >
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <h5 class="font-serif font-bold text-base text-ink flex items-center gap-2">
                      <span class="w-6 h-6 rounded-full bg-cinnabar text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {{ idx + 1 }}
                      </span>
                      <span>{{ fact.heading }}</span>
                    </h5>
                    <span class="px-2.5 py-0.5 rounded bg-gilt/20 text-gilt-dark text-xs font-mono font-semibold">
                      {{ fact.eraOrCountry }}
                    </span>
                  </div>
                  <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed pl-8">
                    {{ fact.detail }}
                  </p>
                  <div class="pl-8 pt-1 text-xs font-mono text-cinnabar">
                    实证文献与遗存：{{ fact.evidence }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================
         PART 2: 历史感悟与独立思考板块 (DIMENSION VIII)
         =================================================================== -->
    <section class="pt-8 border-t-2 border-gilt/40">
      <SectionHeader
        seal="独立思考"
        en-subtitle="DIMENSION VIII · CRITICAL HISTORICAL REFLECTIONS"
        title="以古为镜：关于盛唐兴衰、丝路命脉与文化主体性的深度思辨"
        description="拒绝空洞口号与模板化总结。我们从唐朝289年的真实历史褶皱中提炼出三个最具思辨价值的核心问题，结合《新唐书》《资治通鉴》与现代史学研究，邀请您共同参详。"
      />

      <div class="space-y-12">
        <div
          v-for="topic in reflections"
          :key="topic.id"
          class="tang-scroll-card tang-corner-frame rounded-2xl p-6 sm:p-8 shadow-museum space-y-6"
        >
          <!-- Question Header -->
          <div class="border-b border-gilt/30 pb-5 space-y-2">
            <div class="flex items-center gap-3">
              <TangSealBadge :text="topic.numberLabel" size="md" />
              <span class="text-xs font-mono text-gilt-dark font-semibold">
                {{ topic.subtitle }}
              </span>
            </div>
            <h3 class="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-ink leading-snug pt-1">
              {{ topic.question }}
            </h3>
          </div>

          <!-- Core Historical Paradox -->
          <div class="p-4 rounded-xl bg-cinnabar/10 border-l-4 border-cinnabar space-y-1">
            <div class="text-xs font-serif font-bold text-cinnabar flex items-center gap-1.5">
              <Lightbulb class="w-4 h-4" />
              历史悖论与问题意识（Core Historical Paradox）
            </div>
            <p class="text-xs sm:text-sm text-ink leading-relaxed">
              {{ topic.coreParadox }}
            </p>
          </div>

          <!-- Three-Layer Historical Analysis -->
          <div class="space-y-3">
            <h4 class="text-sm font-serif font-bold text-ink border-l-4 border-gilt pl-3">
              深度历史剖析：
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                v-for="(para, idx) in topic.historicalAnalysis"
                :key="idx"
                class="p-4 rounded-xl bg-xuan-paper border border-gilt/30 space-y-2"
              >
                <span class="px-2 py-0.5 rounded bg-cinnabar text-white text-xs font-bold">
                  剖析维度 0{{ idx + 1 }}
                </span>
                <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {{ para }}
                </p>
              </div>
            </div>
          </div>

          <!-- Academic Viewpoints Comparison -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="vp in topic.perspectives"
              :key="vp.viewpointTitle"
              class="p-4 rounded-xl bg-xuan-card border border-gilt/40 space-y-2"
            >
              <div class="text-xs font-serif font-bold text-cinnabar flex items-center gap-1.5">
                <Scale class="w-4 h-4" />
                {{ vp.viewpointTitle }}
              </div>
              <p class="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {{ vp.argument }}
              </p>
              <blockquote class="text-xs font-serif text-gilt-dark border-t border-gilt/20 pt-2">
                史料与学术引证：{{ vp.historicalCitation }}
              </blockquote>
            </div>
          </div>

          <!-- Interactive Reflection Workbench -->
          <div class="p-5 rounded-xl bg-xuan-paper border-2 border-gilt/45 space-y-4">
            <div class="flex items-center gap-2 text-sm font-serif font-bold text-ink">
              <MessageSquareQuote class="w-4 h-4 text-cinnabar" />
              <span>互动史学研判：{{ topic.interactivePrompt.question }}</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <button
                v-for="opt in topic.interactivePrompt.options"
                :key="opt.id"
                type="button"
                class="p-3.5 rounded-lg border text-left text-xs transition cursor-pointer flex items-start gap-2"
                :class="
                  selectedOptions[topic.id] === opt.id
                    ? 'bg-cinnabar text-white border-cinnabar font-semibold shadow'
                    : 'bg-xuan-card text-ink-secondary border-gilt/35 hover:border-cinnabar'
                "
                @click="chooseOption(topic.id, opt.id)"
              >
                <CheckCircle2
                  class="w-4 h-4 shrink-0 mt-0.5"
                  :class="selectedOptions[topic.id] === opt.id ? 'text-gilt-light' : 'text-ink-muted'"
                />
                <span>{{ opt.label }}</span>
              </button>
            </div>

            <!-- Dynamic Scholarly Feedback -->
            <div
              v-for="opt in topic.interactivePrompt.options"
              :key="'fb-' + opt.id"
              v-show="selectedOptions[topic.id] === opt.id"
              class="p-3.5 rounded-lg bg-xuan-card border-l-4 border-gilt text-xs sm:text-sm text-ink leading-relaxed"
            >
              <strong class="text-cinnabar font-serif">史学研判共鸣：</strong>
              {{ opt.insightFeedback }}
            </div>
          </div>

          <!-- Contemporary Mirror -->
          <div class="pt-2 flex items-start gap-2.5 text-xs sm:text-sm text-ink-secondary">
            <Quote class="w-4 h-4 text-gilt-dark shrink-0 mt-0.5" />
            <p>
              <strong class="text-ink font-serif">时代镜鉴：</strong>{{ topic.contemporaryMirror }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
