<script setup lang="ts">
import TangEmblemIcon from '@/components/common/TangEmblemIcon.vue'
import TangSealBadge from '@/components/common/TangSealBadge.vue'
</script>

<template>
  <footer class="bg-xuan-paper border-t-2 border-gilt/40 text-ink-secondary mt-20">
    <!-- Decorative Top Pattern Bar -->
    <div class="h-1.5 w-full bg-gradient-to-r from-cinnabar via-gilt to-imperial opacity-80"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
        <!-- Brand & Narrative Positioning -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-3.5 group">
            <TangEmblemIcon size="md" />
            <div>
              <div class="flex items-center gap-2">
                <h3 class="font-serif font-bold text-xl text-ink tracking-wider">
                  盛唐文明与丝绸之路
                </h3>
                <TangSealBadge text="大唐典藏" size="sm" />
              </div>
              <p class="text-xs font-mono tracking-[0.2em] text-gilt-dark mt-0.5">
                THE GLORY OF TANG DYNASTY · DIGITAL MUSEUM
              </p>
            </div>
          </div>
          <p class="text-sm text-ink-secondary leading-relaxed">
            本平台定位于独立的中国唐代历史文化数字博物馆。以「长安」为故事起点，以「盛唐文明」为核心内容，以「丝绸之路」为文明互鉴脉络，严格区分初唐、盛唐、中唐、晚唐四个历史阶段，客观呈现公元 618 年至 907 年间的制度创举、人文气象与万里丝路遗珍。
          </p>
          <div class="pt-1 flex flex-wrap gap-2 text-xs text-ink-muted">
            <span class="px-2.5 py-1 rounded bg-xuan border border-gilt/30">初唐奠基 (618–712)</span>
            <span class="px-2.5 py-1 rounded bg-xuan border border-gilt/30">盛唐气象 (712–755)</span>
            <span class="px-2.5 py-1 rounded bg-xuan border border-gilt/30">中唐变革 (755–820)</span>
            <span class="px-2.5 py-1 rounded bg-xuan border border-gilt/30">晚唐余响 (820–907)</span>
          </div>
        </div>

        <!-- Eight Core Exhibition Halls -->
        <div class="md:col-span-4 space-y-3">
          <h4 class="font-serif font-bold text-base text-ink border-l-4 border-cinnabar pl-3">
            八大历史维度数字展厅
          </h4>
          <ul class="grid grid-cols-2 gap-2 text-xs sm:text-sm">
            <li>
              <router-link to="/chang-an" class="hover:text-cinnabar transition">
                壹 · 历史背景与盛世长安
              </router-link>
            </li>
            <li>
              <router-link to="/timeline" class="hover:text-cinnabar transition">
                贰 · 四期交互历史时间轴
              </router-link>
            </li>
            <li>
              <router-link to="/figures" class="hover:text-cinnabar transition">
                叁 · 大唐风云人物图谱
              </router-link>
            </li>
            <li>
              <router-link to="/timeline#major-events" class="hover:text-cinnabar transition">
                肆 · 重大历史转折事件
              </router-link>
            </li>
            <li>
              <router-link to="/culture" class="hover:text-cinnabar transition">
                伍 · 文明瑰宝与科技成就
              </router-link>
            </li>
            <li>
              <router-link to="/silk-road" class="hover:text-cinnabar transition">
                陆 · 丝绸之路与中外交流
              </router-link>
            </li>
            <li>
              <router-link to="/heritage" class="hover:text-cinnabar transition">
                柒 · 历史遗址与传世文物
              </router-link>
            </li>
            <li>
              <router-link to="/reflections" class="hover:text-cinnabar transition">
                捌 · 盛世回响与独立思考
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Authoritative Historical Sources & Museum References -->
        <div class="md:col-span-3 space-y-3">
          <h4 class="font-serif font-bold text-base text-ink border-l-4 border-gilt pl-3">
            权威史料与馆藏图像出处
          </h4>
          <ul class="space-y-1.5 text-xs text-ink-secondary leading-relaxed">
            <li>· 基本史籍：《旧唐书》《新唐书》《资治通鉴》《唐六典》《唐律疏议》《大唐西域记》</li>
            <li>· 馆藏文物图源：故宫博物院、陕西历史博物馆、中国国家博物馆、台北故宫博物院、法门寺博物馆、西安碑林博物馆</li>
            <li>· 世界遗产档案：大明宫国家考古遗址公园、敦煌研究院、奈良唐招提寺及 Wikimedia Commons 公共文化许可资源</li>
          </ul>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-gilt/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
        <p>
          盛唐文明与丝绸之路 · 中国唐代历史文化数字博物馆 (THE GLORY OF TANG DYNASTY)
        </p>
        <p>
          以真实历史文献与考古实证为基础 · 弘扬中华优秀传统历史文化
        </p>
      </div>
    </div>
  </footer>
</template>
