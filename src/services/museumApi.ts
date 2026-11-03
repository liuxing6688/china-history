import { TANG_PERIODS, CHANGAN_LANDMARKS, TANG_INSTITUTIONS } from '@/data/periodsAndChangAn'
import { TIMELINE_ITEMS } from '@/data/timelineData'
import { HISTORICAL_FIGURES } from '@/data/figuresData'
import { MAJOR_EVENTS } from '@/data/eventsData'
import { CULTURAL_ACHIEVEMENTS } from '@/data/cultureTechData'
import { SILK_ROAD_NODES, SILK_ROAD_EXCHANGES } from '@/data/silkRoadData'
import { HERITAGE_RELICS } from '@/data/heritageRelicsData'
import { INFLUENCE_DIMENSIONS, CRITICAL_REFLECTIONS } from '@/data/echoesReflectionsData'
import type { TangPeriodId } from '@/types/museum'

export interface GlobalSearchResult {
  id: string
  title: string
  subtitle: string
  category: string
  route: string
  period?: TangPeriodId
  image?: string
}

/**
 * 本站官方数字博物馆数据服务层（Local Official Museum Data Service）
 * 严格遵循零外部无关 API 规范，统一提供八大历史维度的数据检索、分期过滤与全局典藏检索。
 */
export const museumApi = {
  getPeriods() {
    return TANG_PERIODS
  },

  getPeriodById(id: TangPeriodId) {
    return TANG_PERIODS.find((p) => p.id === id) || TANG_PERIODS[0]
  },

  getChangAnLandmarks() {
    return CHANGAN_LANDMARKS
  },

  getInstitutions() {
    return TANG_INSTITUTIONS
  },

  getTimeline(period?: TangPeriodId | 'all', category?: string) {
    return TIMELINE_ITEMS.filter((item) => {
      const matchPeriod = !period || period === 'all' || item.period === period
      const matchCat = !category || category === 'all' || item.category === category
      return matchPeriod && matchCat
    })
  },

  getFigures(period?: TangPeriodId | 'all', category?: string) {
    return HISTORICAL_FIGURES.filter((fig) => {
      const matchPeriod = !period || period === 'all' || fig.period === period
      const matchCat = !category || category === 'all' || fig.category === category
      return matchPeriod && matchCat
    })
  },

  getMajorEvents(period?: TangPeriodId | 'all') {
    return MAJOR_EVENTS.filter((evt) => !period || period === 'all' || evt.period === period)
  },

  getCulturalAchievements(category?: string) {
    return CULTURAL_ACHIEVEMENTS.filter((item) => !category || category === 'all' || item.category === category)
  },

  getSilkRoadNodes(routeGroup?: string) {
    return SILK_ROAD_NODES.filter((node) => !routeGroup || routeGroup === 'all' || node.routeGroup === routeGroup)
  },

  getSilkRoadExchanges(direction?: 'westward' | 'eastward' | 'all') {
    return SILK_ROAD_EXCHANGES.filter((item) => !direction || direction === 'all' || item.direction === direction)
  },

  getHeritageRelics(type?: 'site' | 'artifact' | 'all') {
    return HERITAGE_RELICS.filter((item) => !type || type === 'all' || item.type === type)
  },

  getInfluenceDimensions() {
    return INFLUENCE_DIMENSIONS
  },

  getCriticalReflections() {
    return CRITICAL_REFLECTIONS
  },

  searchAll(query: string): GlobalSearchResult[] {
    const q = query.trim().toLowerCase()
    if (!q) return []

    const results: GlobalSearchResult[] = []

    HISTORICAL_FIGURES.forEach((f) => {
      if (
        f.name.toLowerCase().includes(q) ||
        f.courtesyOrTempleName.toLowerCase().includes(q) ||
        f.summary.toLowerCase().includes(q) ||
        f.tags.some((t) => t.toLowerCase().includes(q))
      ) {
        results.push({
          id: f.id,
          title: f.name,
          subtitle: f.identity,
          category: '风云人物',
          route: '/figures',
          period: f.period,
          image: f.image
        })
      }
    })

    MAJOR_EVENTS.forEach((e) => {
      if (
        e.title.toLowerCase().includes(q) ||
        e.subtitle.toLowerCase().includes(q) ||
        e.summary.toLowerCase().includes(q)
      ) {
        results.push({
          id: e.id,
          title: e.title,
          subtitle: e.yearDisplay,
          category: '重大转折',
          route: '/timeline',
          period: e.period,
          image: e.image
        })
      }
    })

    CULTURAL_ACHIEVEMENTS.forEach((c) => {
      if (
        c.title.toLowerCase().includes(q) ||
        c.representativeFigure.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q)
      ) {
        results.push({
          id: c.id,
          title: c.title,
          subtitle: c.categoryLabel,
          category: '文明瑰宝',
          route: '/culture',
          period: c.period,
          image: c.image
        })
      }
    })

    SILK_ROAD_NODES.forEach((s) => {
      if (
        s.name.toLowerCase().includes(q) ||
        s.ancientName.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q)
      ) {
        results.push({
          id: s.id,
          title: s.name,
          subtitle: s.ancientName,
          category: '丝路枢纽',
          route: '/silk-road',
          image: s.image
        })
      }
    })

    HERITAGE_RELICS.forEach((r) => {
      if (
        r.name.toLowerCase().includes(q) ||
        r.subtitle.toLowerCase().includes(q) ||
        r.locationOrMuseum.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q)
      ) {
        results.push({
          id: r.id,
          title: r.name,
          subtitle: r.locationOrMuseum,
          category: r.type === 'site' ? '历史遗址' : '传世文物',
          route: '/heritage',
          period: r.period,
          image: r.image
        })
      }
    })

    return results.slice(0, 12)
  }
}
