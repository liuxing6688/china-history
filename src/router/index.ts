import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ChangAnHistoryView from '@/views/ChangAnHistoryView.vue'
import TimelineEventsView from '@/views/TimelineEventsView.vue'
import FiguresView from '@/views/FiguresView.vue'
import CultureTechView from '@/views/CultureTechView.vue'
import SilkRoadView from '@/views/SilkRoadView.vue'
import HeritageRelicsView from '@/views/HeritageRelicsView.vue'
import EchoesReflectionsView from '@/views/EchoesReflectionsView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '盛世总览 | 盛唐文明与丝绸之路' }
    },
    {
      path: '/chang-an',
      name: 'chang-an',
      component: ChangAnHistoryView,
      meta: { title: '大唐与盛世长安 | 盛唐文明与丝绸之路' }
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: TimelineEventsView,
      meta: { title: '历史时间轴与重大转折 | 盛唐文明与丝绸之路' }
    },
    {
      path: '/figures',
      name: 'figures',
      component: FiguresView,
      meta: { title: '风云人物图谱 | 盛唐文明与丝绸之路' }
    },
    {
      path: '/culture',
      name: 'culture',
      component: CultureTechView,
      meta: { title: '文明瑰宝与科技成就 | 盛唐文明与丝绸之路' }
    },
    {
      path: '/silk-road',
      name: 'silk-road',
      component: SilkRoadView,
      meta: { title: '丝绸之路与中外文明交流 | 盛唐文明与丝绸之路' }
    },
    {
      path: '/heritage',
      name: 'heritage',
      component: HeritageRelicsView,
      meta: { title: '历史遗存与传世国宝 | 盛唐文明与丝绸之路' }
    },
    {
      path: '/reflections',
      name: 'reflections',
      component: EchoesReflectionsView,
      meta: { title: '盛世回响与历史思辨 | 盛唐文明与丝绸之路' }
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to) => {
  if (to.meta?.title) {
    document.title = String(to.meta.title)
  }
})

export default router
