import type { TangPeriodMeta, ChangAnLandmark, InstitutionalSystem } from '@/types/museum'

export const TANG_PERIODS: TangPeriodMeta[] = [
  {
    id: 'early',
    name: '初唐时期',
    enName: 'Early Tang (618–712)',
    yearRange: '公元 618年 — 712年（高祖武德元年至睿宗先天元年）',
    durationYears: 94,
    emperors: '唐高祖李渊、唐太宗李世民、唐高宗李治、武则天（武周）、唐中宗、唐睿宗',
    eraKeywords: ['晋阳起兵', '贞观之治', '三省六部', '天可汗体系', '永徽之治', '武周科举'],
    colorAccent: '#A82424',
    badgeClass: 'bg-cinnabar/15 text-cinnabar border-cinnabar/30',
    householdsPeak: '约 615 万户（神龙元年·705年）',
    populationPeak: '约 3714 万人',
    silkRoadStatus: '平定东、西突厥与高昌，设安西四镇与北庭都护府，丝路全线贯通',
    politicalFeature: '确立三省六部制与《唐律疏议》，完善科举制与殿试、武举，打破关陇门阀垄断，奠定大唐两百年制度根基。',
    economicFeature: '推行均田制与租庸调制，“轻徭薄赋，与民休息”，贞观年间社会经济迅速从隋末战乱中复苏。',
    culturalFeature: '兼收并蓄，“三教并重”；初唐四杰与陈子昂革新诗风；玄奘西行译经，阎立本绘《步辇图》，欧、虞、褚楷书法度森严。',
    overview: '初唐并非一蹴而就的极盛，而是从隋末群雄割据的废墟上重建秩序的奠基时代。唐太宗汲取亡隋教训，以“水能载舟，亦能覆舟”的政治清醒开启贞观之治；经高宗永徽之治与武则天执政时期的科举扩招，关陇贵族集团逐步向寒门文官集团转型，西域都护府体系的确立更使丝绸之路重归中央王朝护卫之下。',
    historicalWarningOrInsight: '史学界严格区分“初唐”与“盛唐”：初唐的核心历史使命是制度创制、边疆开拓与社会休养生息（贞观年间户数尚不足300万，远低于隋盛时），为开元盛世积蓄了长达百年的制度与国力势能。',
    metrics: {
      nationalPower: 86,
      silkRoadTrade: 88,
      institutionalMaturity: 96,
      culturalFlourishing: 84,
      socialStability: 88
    }
  },
  {
    id: 'high',
    name: '盛唐时期',
    enName: 'High Tang (712–755)',
    yearRange: '公元 712年 — 755年（玄宗先天元年至天宝十四载）',
    durationYears: 43,
    emperors: '唐玄宗李隆基（开元、天宝年间）',
    eraKeywords: ['开元盛世', '百万人长安', '诗仙诗圣', '丝路黄金时代', '募兵制与节度使', '盛极隐忧'],
    colorAccent: '#C89B40',
    badgeClass: 'bg-gilt/20 text-gilt-dark border-gilt/40',
    householdsPeak: '906.9 万户（天宝十三载·754年《通典》）',
    populationPeak: '约 5291.9 万人（实际估算逾 6000 万）',
    silkRoadStatus: '陆上与海上丝路贸易达至顶峰，长安西市胡商云集，十节度使拱卫万里边疆',
    politicalFeature: '开元前期姚崇、宋璟、张九龄相继为相，励精图治；天宝后期李林甫、杨国忠专权，外重内轻（边镇节度使掌握近50万常备军）。',
    economicFeature: '“稻米流脂粟米白，公私仓廪俱丰实”，农业垦田逾800万顷，手工业（邢白越青、唐三彩、金银器）与商业都市空前繁荣。',
    culturalFeature: '盛唐气象的最高峰：李白、杜甫、王维、孟浩然辉映诗坛；张旭、怀素狂草与颜真卿楷书并立；吴道子画风与敦煌盛唐彩塑辉映。',
    overview: '盛唐特指唐玄宗开元至天宝年间的四十余年。这是中国古典文明最具外向张力与浪漫自信的黄金时代：长安成为当时世界上规模最大、国际化程度最高的百万人口大都会，丝绸之路商旅不绝。然而，土地兼并导致的均田制瓦解、府兵制向募兵制的转型，以及十大兵镇节度使集军政财权于一身，也在极盛华彩之下埋下了天宝危局的引信。',
    historicalWarningOrInsight: '“盛唐”在历史分期中有着严格的时间边界（712—755年），绝不能将整个唐朝289年简单等同于盛唐。正是开元之治的制度红利与天宝年间的结构失衡交织，才构成了盛唐最真实、最深刻的历史双面性。',
    metrics: {
      nationalPower: 98,
      silkRoadTrade: 99,
      institutionalMaturity: 85,
      culturalFlourishing: 100,
      socialStability: 90
    }
  },
  {
    id: 'middle',
    name: '中唐时期',
    enName: 'Middle Tang (755–820)',
    yearRange: '公元 755年 — 820年（天宝十四载安史之乱至宪宗元和十五年）',
    durationYears: 65,
    emperors: '唐肃宗、唐代宗、唐德宗、唐顺宗、唐宪宗',
    eraKeywords: ['安史之乱', '藩镇割据', '两税法改革', '元和中兴', '古文运动', '新乐府运动'],
    colorAccent: '#2B5B6C',
    badgeClass: 'bg-dunhuang-cyan/15 text-dunhuang-cyan border-dunhuang-cyan/30',
    householdsPeak: '约 380 万户（建中元年·780年核定两税户）',
    populationPeak: '约 2000 万—3000 万人（大量人口南迁或隐匿于藩镇）',
    silkRoadStatus: '吐蕃渐次占领陇右与河西走廊，陆路受阻；海上丝绸之路（广州、扬州、泉州）与江南运河经济强势崛起',
    politicalFeature: '安史之乱后形成河朔藩镇割据与宦官掌禁军（神策军）局面；唐宪宗年间锐意削藩，实现短暂的“元和中兴”。',
    economicFeature: '780年宰相杨炎推行“两税法”（惟以资产为宗，不以丁身为本），开启中国古代赋税由人丁税向财产土地税的千年转型；全国经济重心加速南移，“赋之所出，江淮居多”。',
    culturalFeature: '文化由浪漫豪放转向深沉思辨与社会写实：白居易、元稹倡导“文章合为时而著，歌诗合为事而作”的新乐府运动；韩愈、柳宗元掀起古文运动。',
    overview: '公元755年爆发的安史之乱，是唐代历史的根本分水岭。长达八年的战火摧毁了黄河流域的均田农业体系，西域与河西相继与中原隔绝。但中唐绝非单纯的衰败期，而是极其重要的制度重构与文化内省期：两税法重塑了帝国财政，江南经济全面崛起，海上丝路取代陆路成为对外贸易主干，士大夫阶层则在伤痛中孕育出深刻的经世致用精神。',
    historicalWarningOrInsight: '中唐时期的历史证明：政治军事实力的回落并不必然意味着制度与文化的停滞。两税法改革、江南开发与韩柳古文运动，实质上为宋代以后的近世中国社会形态开辟了道路。',
    metrics: {
      nationalPower: 64,
      silkRoadTrade: 68,
      institutionalMaturity: 78,
      culturalFlourishing: 92,
      socialStability: 58
    }
  },
  {
    id: 'late',
    name: '晚唐时期',
    enName: 'Late Tang (820–907)',
    yearRange: '公元 820年 — 907年（穆宗长庆元年至哀帝天祐四年）',
    durationYears: 87,
    emperors: '唐穆宗、敬宗、文宗、武宗、宣宗、懿宗、僖宗、昭宗、唐哀帝',
    eraKeywords: ['牛李党争', '甘露之变', '张议潮归义军', '大中之治', '咸通金刚经', '黄巢起义'],
    colorAccent: '#5E2338',
    badgeClass: 'bg-imperial/15 text-imperial border-imperial/30',
    householdsPeak: '约 495 万户（会昌年间·845年）',
    populationPeak: '约 2500 万人',
    silkRoadStatus: '大中二年（848年）敦煌张议潮率归义军收复河西十一州，丝路一度重通；晚唐雕版印刷与秘色瓷工艺登峰造极',
    politicalFeature: '朝堂深陷长达四十年的“牛李党争”，宦官废立君主（甘露之变后皇权旁落）；唐宣宗时期虽有“小太宗”大中之治，终难挽地方军阀化与财政枯竭。',
    economicFeature: '茶税、盐铁专卖成为晚唐财政命脉；江南市镇商业与柜坊、飞钱（早期汇票）继续发展，但土地兼并与苛捐杂税最终激化晚唐流民危机。',
    culturalFeature: '杜牧、李商隐（“小李杜”）以咏史与深情绵邈之诗映照时代夕阳；咸通九年（868年）雕版《金刚经》问世；五台山佛光寺东大殿（857年）与法门寺地宫秘色瓷（874年）见证晚唐工艺绝唱。',
    overview: '晚唐八十七年，是庞大帝国在藩镇、宦官与朋党三重困境中走向落幕的时代。大中二年（848年）张议潮收复瓜沙十一州、遣使归唐，上演了丝绸之路上的悲壮绝唱；唐宣宗“大中之治”亦曾展现制度余晖。乾符年间王仙芝、黄巢起义席卷南北，长安城毁于战火，公元907年朱温代唐，立国289年的大唐王朝正式落幕。',
    historicalWarningOrInsight: '即便在晚唐国势衰微之际，唐代工匠仍烧造出法门寺地宫的千峰翠色“秘色瓷”，敦煌工匠刻印出人类现存最早标有确切年代的雕版印刷品《金刚经》（868年）。器物与技术的生命力超越了王朝兴替。',
    metrics: {
      nationalPower: 42,
      silkRoadTrade: 52,
      institutionalMaturity: 50,
      culturalFlourishing: 82,
      socialStability: 35
    }
  }
]

export const CHANGAN_LANDMARKS: ChangAnLandmark[] = [
  {
    id: 'daming-palace',
    name: '大明宫（东内）',
    category: 'palace',
    categoryLabel: '皇家宫阙',
    locationInCity: '长安城东北龙首原上（建于贞观八年·634年）',
    gridPos: { col: 3, row: 1, colSpan: 2, rowSpan: 1 },
    summary: '唐高宗以后大唐帝国的政治中枢，面积3.2平方公里，相当于北京紫禁城的4.5倍。',
    historicalDetail: '初名永安宫，唐太宗为太上皇李渊避暑而建，高宗龙朔二年（662年）大规模扩建后迁居于此。南端正门丹凤门设五个门道，正殿含元殿高踞龙首原阶基之上，每逢元旦、冬至大朝会，万国使节经长达600余米的御道拾级而上，王维曾赋诗：“九天阊阖开宫殿，万国衣冠拜冕旒。”',
    archaeologicalEvidence: '1957年起中国社会科学院考古研究所对含元殿、麟德殿、太液池及丹凤门遗址进行科学发掘，2014年作为“丝绸之路：长安—天山廊道的路网”起点申遗成功。',
    famousFiguresOrPoems: '唐高宗、武则天、唐玄宗、王维《和贾舍人早朝大明宫之作》、李白翰林待诏于金銮殿',
    image: '/images/museum/daminggong_danfeng.jpg',
    imageSource: 'Wikimedia Commons / 大明宫国家考古遗址公园丹凤门遗址实景'
  },
  {
    id: 'taiji-palace',
    name: '太极宫（西内·玄武门）',
    category: 'palace',
    categoryLabel: '皇家宫阙',
    locationInCity: '长安城北部中央（隋大兴宫旧址）',
    gridPos: { col: 2, row: 2, colSpan: 2, rowSpan: 1 },
    summary: '唐高祖李渊、唐太宗李世民时期的正宫，“贞观之治”的策源地。',
    historicalDetail: '沿用隋代宇文恺规划的大兴宫，南接皇城朱雀门，北临禁苑，其北门即为著名的“玄武门”。武德九年六月初四（626年），秦王李世民在此发动玄武门之变；贞观年间，太宗在两仪殿、甘露殿与房玄龄、杜如晦、魏征议政，接见西域与吐蕃使臣。',
    archaeologicalEvidence: '考古勘探确认太极宫东西宽2820米，南北长1492米，承天门遗址规制宏伟，奠定了都城中轴对称的礼制格局。',
    famousFiguresOrPoems: '李渊、李世民、魏征、房玄龄、阎立本《步辇图》历史发生地',
    image: '/images/museum/buniantu.jpg',
    imageSource: '故宫博物院藏 · 阎立本《步辇图》卷（描绘贞观十五年太极宫接见吐蕃使臣禄东赞）'
  },
  {
    id: 'imperial-city',
    name: '皇城 · 三省六部官署',
    category: 'government',
    categoryLabel: '中枢官署',
    locationInCity: '太极宫正南，朱雀门内东西两侧',
    gridPos: { col: 2, row: 3, colSpan: 2, rowSpan: 1 },
    summary: '首次将皇家居住区（宫城）与中央办公区（皇城）严格分离，汇聚尚书省、六部、鸿胪寺与国子监。',
    historicalDetail: '皇城内不设民居，专置中央衙署与宗庙社稷。尚书省居中，统辖吏、户、礼、兵、刑、工六部二十四司；鸿胪寺负责接待西域、新罗、日本、波斯、大食等七十余国使节；崇文馆、弘文馆与国子监更吸纳高句丽、新罗、日本遣唐留学生数千人。',
    archaeologicalEvidence: '含光门遗址保存有完整的唐代三门道夯土城门与过水涵洞遗址，现设西安唐皇城墙含光门遗址博物馆。',
    famousFiguresOrPoems: '韩愈、颜真卿、阿倍仲麻吕（晁衡）、崔致远',
    image: '/images/museum/daminggong_model.jpg',
    imageSource: 'Wikimedia Commons / 唐长安城宫城与皇城复原沙盘模型'
  },
  {
    id: 'west-market',
    name: '西市（大唐“金市”·丝路贸易中心）',
    category: 'market',
    categoryLabel: '国际商市',
    locationInCity: '长安城中西部（占两坊之地，内有二百二十行）',
    gridPos: { col: 1, row: 4, colSpan: 1, rowSpan: 2 },
    summary: '丝绸之路真正的东方商业终点与起点，胡商云集，诞生了世界最早的金融机构“柜坊”与汇票“飞钱”。',
    historicalDetail: '西市占地约1600亩，形成整齐的“井”字形街道与九宫格布局。这里聚集了大量粟特（昭武九姓）、波斯、大食、天竺胡商，经营珠宝玛瑙、香料药材、丝绸胡锦、胡姬酒肆。商人将金银寄存在西市“柜坊”，凭贴取钱，极大便利了跨地域大宗丝路贸易。',
    archaeologicalEvidence: '大唐西市遗址考古发掘出十字街路面车辙、排水暗渠、东北十字街遗址、波斯萨珊银币、玻璃器残片及骨器作坊遗址。',
    famousFiguresOrPoems: '李白《少年行》：“五陵年少金市东，银鞍白马度春风。落花踏尽游何处，笑入胡姬酒肆中。”',
    image: '/images/museum/sancairider.jpg',
    imageSource: 'Wikimedia Commons / 唐三彩骆驼载胡人俑（丝路粟特商队实证）'
  },
  {
    id: 'east-market',
    name: '东市（皇室勋贵与四方百货之市）',
    category: 'market',
    categoryLabel: '皇家商市',
    locationInCity: '长安城中东部（近兴庆宫与达官贵人住宅坊区）',
    gridPos: { col: 4, row: 4, colSpan: 1, rowSpan: 2 },
    summary: '“四方珍奇，皆所积集”，汇聚全国上贡佳品、邢白瓷、越青瓷、江南丝绸与金银器作坊。',
    historicalDetail: '东市靠近皇室勋贵聚居的东城各坊（如崇仁坊、永兴坊），市内设二百二十行、四面立邸。政府在东西两市设“市署”和“平准署”，每日正午击鼓三百声开市，日落前七刻击钲三百声闭市，严格监管度量衡与物价公道。',
    archaeologicalEvidence: '出土大量印有“东市”字样的度量衡器、银铤及何家村、东市周边窖藏金银器皿。',
    famousFiguresOrPoems: '白居易《卖炭翁》：“牛困人饥日已高，市南门外泥中歇。”',
    image: '/images/museum/jinwan.jpg',
    imageSource: '陕西历史博物馆藏 / 西安何家村唐代窖藏出土·鸳鸯莲瓣纹金碗'
  },
  {
    id: 'xingqing-palace',
    name: '兴庆宫（南内·沉香亭与花萼相辉楼）',
    category: 'palace',
    categoryLabel: '皇家宫苑',
    locationInCity: '长安城东南部隆庆坊旧址',
    gridPos: { col: 4, row: 3, colSpan: 1, rowSpan: 1 },
    summary: '唐玄宗李隆基藩邸改建的宫苑，开元、天宝年间处理朝政与皇家游宴的核心场所。',
    historicalDetail: '玄宗即位后将旧宅扩建为兴庆宫，宫内西南隅建有“花萼相辉楼”与“勤政务本楼”，直接临近春明门大街，每逢佳节玄宗登楼设宴，与长安百姓同乐，开创了中国古代宫廷与市民空间罕见的互动盛景；龙池东侧“沉香亭”则是李白醉草《清平调》三章之处。',
    archaeologicalEvidence: '兴庆宫遗址发掘出勤政务本楼夯土台基、龙池遗址及唐代莲花纹方砖。',
    famousFiguresOrPoems: '唐玄宗、杨贵妃、李白《清平调》：“解释春风无限恨，沉香亭北倚栏杆。”',
    image: '/images/museum/pipayong.jpg',
    imageSource: 'Wikimedia Commons / 唐代加彩琵琶伎乐女俑（盛唐宫廷燕乐写照）'
  },
  {
    id: 'cien-temple',
    name: '晋昌坊 · 大慈恩寺与大雁塔',
    category: 'temple',
    categoryLabel: '译经圣地',
    locationInCity: '长安城东南晋昌坊（外郭城曲江池北）',
    gridPos: { col: 3, row: 5, colSpan: 1, rowSpan: 1 },
    summary: '玄奘法师主持修建并在此领导国立译经院十九年，新科进士“雁塔题名”的文化圣地。',
    historicalDetail: '贞观二十二年（648年）太子李治为追念生母文德皇后而建。永徽三年（652年），玄奘法师为妥善保存由天竺经丝绸之路带回的657部梵文佛经与佛像舍利，奏请仿西域窣堵坡式样建造慈恩寺塔（今大雁塔），并口述成书《大唐西域记》十二卷。唐中宗神龙年间起，新科进士及第后皆于曲江赐宴、登大雁塔题名留念。',
    archaeologicalEvidence: '现存大雁塔为七层楼阁式砖塔，通高64.5米，底层门楣石刻线画唐代殿堂建筑与佛像，塔下碑林存唐太宗撰《大唐三藏圣教序》碑。',
    famousFiguresOrPoems: '玄奘、窥基、孟郊、白居易（“慈恩塔下题名处，十七人中最少年”）',
    image: '/images/museum/dayanta.jpg',
    imageSource: 'Wikimedia Commons / 西安大慈恩寺大雁塔实景'
  },
  {
    id: 'liquan-ward',
    name: '醴泉坊与义宁坊 · 丝路三夷教寺院群',
    category: 'temple',
    categoryLabel: '多元宗教',
    locationInCity: '长安城西市北侧（醴泉坊、义宁坊、布政坊）',
    gridPos: { col: 1, row: 3, colSpan: 1, rowSpan: 1 },
    summary: '汇聚波斯祆祠（拜火教）、大秦寺（基督教景教）与摩尼教寺院，见证长安海纳百川的信仰宽容。',
    historicalDetail: '贞观九年（635年），叙利亚景教传教士阿罗本抵达长安，唐太宗派宰相房玄龄出迎，于义宁坊敕建“波斯寺”（后改称大秦寺）；醴泉坊、布政坊则建有粟特胡人祭祀的火祆祠，设“萨宝府”专门管理胡人事务。不同肤色、不同语言的宗教徒在同一座城池内和平共处。',
    archaeologicalEvidence: '明末出土于西安西郊的唐建中二年（781年）《大秦景教流行中国碑》，以汉文与古叙利亚文双语详载景教在唐传播百余年的历史。',
    famousFiguresOrPoems: '阿罗本、伊斯、颜真卿题写碑额或吕秀岩书碑',
    image: '/images/museum/jingjiaobei.jpg',
    imageSource: 'Wikimedia Commons / 唐建中二年（781年）《大秦景教流行中国碑》拓片与碑石记录'
  },
  {
    id: 'chongren-ward',
    name: '兴化坊与崇仁坊 · 王公宅第与举子逆旅',
    category: 'residential',
    categoryLabel: '里坊生活',
    locationInCity: '皇城东南侧、朱雀大街以东核心里坊区',
    gridPos: { col: 2, row: 4, colSpan: 2, rowSpan: 1 },
    summary: '外郭城108坊实行“里坊制”与宵禁制度，兴化坊埋藏了震惊世界的“何家村大唐遗宝”。',
    historicalDetail: '长安外郭城由11条南北向大街与14条东西向大街划分为108个规整里坊（后期调整为106坊）。崇仁坊因紧邻皇城尚书省礼部（贡院），成为全国各地进京赶考举子的住宿中心与乐器制作名坊；兴化坊则是邠王李守礼旧宅所在，1970年在此出土了两个陶瓮和一个银罐，内含金银器、宝玉珍玩千余件。',
    archaeologicalEvidence: '1970年西安南郊何家村（唐长安城兴化坊）出土文物1000余件，包括镶金兽首玛瑙杯、鎏金舞马衔杯纹银壶及东罗马、波斯、日本钱币。',
    famousFiguresOrPoems: '白居易（曾居常乐坊、新昌坊）、颜真卿、各地应试举子',
    image: '/images/museum/manaobei.jpg',
    imageSource: '陕西历史博物馆藏 / 唐长安城兴化坊（何家村窖藏）出土·镶金兽首玛瑙杯'
  }
]

export const TANG_INSTITUTIONS: InstitutionalSystem[] = [
  {
    id: 'sansheng-liubu',
    title: '三省六部制：皇权与相权的精密制衡',
    subtitle: '中书取旨 · 门下封驳 · 尚书奉行',
    periodEvolution: '确立于隋，完备于唐太宗贞观年间，政事堂合议奠定古代内阁与分权行政典范',
    coreMechanism: '唐代中央政府改变秦汉独相制，将相权一分为三：中书省负责草拟诏令（决策），门下省负责审查诏令、拥有“封还词头”的否决权（审议），尚书省则统领吏、户、礼、兵、刑、工六部负责贯彻执行（行政）。三省长官同于“政事堂”议政。',
    departments: [
      {
        name: '中书省（决策草拟）',
        role: '承受皇帝意旨，起草国家政令与诏敕',
        detail: '长官为中书令，中书舍人实行“五花判事”，对政令可行性各自签署意见，集思广益。'
      },
      {
        name: '门下省（封驳审议）',
        role: '审核中书省诏令，若认为不妥可予以驳回（涂归封驳）',
        detail: '长官为侍中，下设给事中。唐太宗曾对黄门侍郎王珪坦言：“国家本置中书、门下以相检察，中书诏敕或有差失，则门下当行驳正。”'
      },
      {
        name: '尚书省与六部（行政执行）',
        role: '全国最高行政机关，下辖吏、户、礼、兵、刑、工六部二十四司',
        detail: '吏部掌文官铨选，户部掌土地户口赋税，礼部掌科举祭祀与四夷宾客，兵部掌武官选授与军籍，刑部掌司法刑狱，工部掌营造水利。'
      }
    ],
    historicalSignificance: '三省六部制以制度化的权力分割与交叉审核，大幅减少了君主个人独断造成的决策失误，是“贞观之治”与“开元盛世”政治清明的核心制度保障，并被日本大化改新（太政官八省制）与高丽王朝直接效仿。',
    primarySource: '《新唐书·百官志》《贞观政要·论政体》'
  },
  {
    id: 'keju-system',
    title: '科举取士与社会流动：从门阀政治到文官帝国',
    subtitle: '常科（进士·明经） · 制科 · 殿试 · 武举',
    periodEvolution: '初唐扩招 → 武则天创殿试与武举 → 盛唐诗赋取士 → 中晚唐寒门士大夫主导朝堂',
    coreMechanism: '打破魏晋南北朝以来“上品无寒门，下品无势族”的九品中正制世袭垄断，允许普通士人“怀牒自列于州县”自由报考。以明经（重儒家经典记忆）与进士（重诗赋文采与时务策论）为最核心科目，“三十老明经，五十少进士”。',
    departments: [
      {
        name: '进士科与诗赋策问',
        role: '选拔具备文学才华与治国器识的宰辅储才',
        detail: '唐代宰相中逾三分之二出身进士，激发了全社会学习诗歌与经史的热潮，直接推动唐诗繁荣。'
      },
      {
        name: '殿试与武举（武周创制）',
        role: '载初元年（690年）武则天策问贡人于洛城殿，长安二年（702年）始置武举',
        detail: '大幅提拔关东与江南寒门俊杰（如狄仁杰、张九龄、姚崇），瓦解关陇贵族集团对高官的世袭垄断。'
      },
      {
        name: '宾贡科（国际科举）',
        role: '专为新罗、高昌、大食、波斯、日本等外国留学生设立的科举通道',
        detail: '如日本阿倍仲麻吕（晁衡）考中进士官至秘书监，新罗崔致远18岁登进士第，大食人李彦升亦登唐进士第，彰显盛唐天下胸怀。'
      }
    ],
    historicalSignificance: '科举制重塑了中国传统社会的阶层流动机制，将知识分子与国家治理深度绑定，形成了极具文化向心力的士大夫阶层。',
    primarySource: '《唐摭言》《通典·选举典》'
  },
  {
    id: 'tax-and-law',
    title: '均田租庸调与两税法、《唐律疏议》',
    subtitle: '礼法合一的中华法系典范 · 古代赋税制度的千年转型',
    periodEvolution: '初盛唐均田租庸调制 → 780年中唐杨炎两税法改革；653年《永徽律疏》颁行天下',
    coreMechanism: '在经济上，初唐按人口授田（均田制），实行“有田则有租，有家则有调，有身则有庸”，农民可“输庸代役”，保证农时；中唐安史之乱后籍帐散轶，德宗建中元年（780年）改行“两税法”，按资产田亩分夏秋两季征税。在法律上，《唐律疏议》十二篇五百条，确立“德礼为政教之本，刑罚为政教之用”。',
    departments: [
      {
        name: '租庸调制（初唐—盛唐前期）',
        role: '按丁征收粟米（租）、绢布（调），允许以绢代役（输庸代役）',
        detail: '保障了自耕农的生产时间，使贞观至开元年间户口从不足三百万户激增至九百万户。'
      },
      {
        name: '两税法（中唐建中元年·780年）',
        role: '“户无主客，以见居为簿；人无丁中，以贫富为差”',
        detail: '终结了自战国秦汉以来以人丁为本的赋税传统，开启了明代一条鞭法、清代摊丁入亩的先河。'
      },
      {
        name: '《唐律疏议》与涉外法权',
        role: '中华法系的巅峰代表作，兼顾涉外商旅司法保护',
        detail: '《名例律》专门规定“诸化外人，同类自相犯者，各依本俗法；异类相犯者，以法律论”，为丝绸之路跨国贸易提供了清晰的法治规则。'
      }
    ],
    historicalSignificance: '《唐律疏议》不仅影响了宋刑统、大明律，更直接成为日本《大宝律令》《养老律令》、朝鲜《高丽律》及安南《刑书》的立法蓝本。',
    primarySource: '长孙无忌等《唐律疏议》·《旧唐书·杨炎传》'
  }
]
