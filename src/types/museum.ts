export type TangPeriodId = 'early' | 'high' | 'middle' | 'late'

export interface TangPeriodMeta {
  id: TangPeriodId
  name: string
  enName: string
  yearRange: string
  durationYears: number
  emperors: string
  eraKeywords: string[]
  colorAccent: string
  badgeClass: string
  householdsPeak: string
  populationPeak: string
  silkRoadStatus: string
  politicalFeature: string
  economicFeature: string
  culturalFeature: string
  overview: string
  historicalWarningOrInsight: string
  metrics: {
    nationalPower: number
    silkRoadTrade: number
    institutionalMaturity: number
    culturalFlourishing: number
    socialStability: number
  }
}

export interface ChangAnLandmark {
  id: string
  name: string
  category: 'palace' | 'government' | 'market' | 'temple' | 'residential'
  categoryLabel: string
  locationInCity: string
  gridPos: { col: number; row: number; colSpan?: number; rowSpan?: number }
  summary: string
  historicalDetail: string
  archaeologicalEvidence: string
  famousFiguresOrPoems: string
  image: string
  imageSource: string
}

export interface InstitutionalSystem {
  id: string
  title: string
  subtitle: string
  periodEvolution: string
  coreMechanism: string
  departments: {
    name: string
    role: string
    detail: string
  }[]
  historicalSignificance: string
  primarySource: string
}

export interface TimelineItem {
  id: string
  year: number
  yearDisplay: string
  reignTitle: string
  period: TangPeriodId
  category: 'politics' | 'military' | 'silkroad' | 'culture'
  categoryLabel: string
  isMajorTurningPoint?: boolean
  title: string
  location: string
  summary: string
  detail: string
  historicalSignificance: string
  primarySource: string
  sourceQuote: string
  relatedFigures: string[]
  image: string
  imageCaption: string
  imageSource: string
  powerIndex: number
}

export interface HistoricalFigure {
  id: string
  name: string
  courtesyOrTempleName: string
  identity: string
  birthDeath: string
  period: TangPeriodId
  category: 'emperor' | 'monk_envoy' | 'poet_scholar' | 'artist_scientist'
  categoryLabel: string
  tags: string[]
  quote: string
  quoteSource: string
  summary: string
  biography: string[]
  majorActivities: {
    year: string
    title: string
    detail: string
  }[]
  contributions: string[]
  historicalImpact: string
  objectiveEvaluation: string
  relatedEvents: string[]
  image: string
  imageCaption: string
  imageSource: string
  relations: {
    targetName: string
    relation: string
  }[]
}

export interface MajorEvent {
  id: string
  title: string
  subtitle: string
  yearDisplay: string
  yearNum: number
  period: TangPeriodId
  location: string
  category: string
  summary: string
  background: string
  causes: string[]
  processSteps: {
    phase: string
    time: string
    description: string
  }[]
  result: string
  historicalSignificance: string[]
  causalChain: {
    precedes: string
    leadsTo: string
  }
  primarySource: string
  sourceExcerpt: string
  image: string
  imageCaption: string
  imageSource: string
}

export interface CulturalAchievement {
  id: string
  title: string
  subtitle: string
  category: 'poetry' | 'calligraphy_painting' | 'ceramics_gold' | 'astronomy_math' | 'medicine_printing' | 'architecture_music'
  categoryLabel: string
  period: TangPeriodId
  representativeFigure: string
  eraDisplay: string
  summary: string
  coreBreakthrough: string
  detailedAnalysis: string[]
  worldSignificance: string
  classicExcerpt?: {
    title: string
    author: string
    lines: string[]
    annotation: string
  }
  specs: {
    label: string
    value: string
  }[]
  image: string
  imageCaption: string
  imageSource: string
}

export interface SilkRoadNode {
  id: string
  name: string
  ancientName: string
  modernLocation: string
  routeGroup: 'chang_an' | 'hexi' | 'western_regions' | 'central_south_asia' | 'maritime_east_asia'
  routeGroupLabel: string
  coords: { x: number; y: number }
  tangJurisdiction: string
  distanceFromChangAn: string
  summary: string
  historicalRole: string
  tradeAndCulture: string
  archaeologicalEvidence: string
  tangPoem: {
    verse: string
    author: string
    title: string
  }
  image: string
  imageCaption: string
  imageSource: string
}

export interface SilkRoadExchangeItem {
  id: string
  direction: 'westward' | 'eastward'
  directionLabel: string
  name: string
  category: string
  originOrTarget: string
  peakPeriod: string
  description: string
  historicalRecordOrRelic: string
}

export interface HeritageRelic {
  id: string
  name: string
  subtitle: string
  type: 'site' | 'artifact'
  typeLabel: string
  category: string
  era: string
  period: TangPeriodId
  locationOrMuseum: string
  excavatedOrBuiltInfo: string
  dimensionsOrScale: string
  designation: string
  summary: string
  historicalValue: string
  craftAndArtValue: string
  details: string[]
  image: string
  imageCaption: string
  imageSource: string
}

export interface InfluenceDimension {
  id: string
  title: string
  subtitle: string
  enTitle: string
  coreThesis: string
  historicalFacts: {
    heading: string
    eraOrCountry: string
    detail: string
    evidence: string
  }[]
  contemporaryValue: string
  image: string
  imageCaption: string
  imageSource: string
}

export interface CriticalReflectionTopic {
  id: string
  numberLabel: string
  question: string
  subtitle: string
  relatedPeriods: TangPeriodId[]
  coreParadox: string
  historicalAnalysis: string[]
  perspectives: {
    viewpointTitle: string
    argument: string
    historicalCitation: string
  }[]
  contemporaryMirror: string
  interactivePrompt: {
    question: string
    options: {
      id: string
      label: string
      insightFeedback: string
    }[]
  }
}
