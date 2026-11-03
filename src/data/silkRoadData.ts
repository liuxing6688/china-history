import type { SilkRoadNode, SilkRoadExchangeItem } from '@/types/museum'

export const SILK_ROAD_NODES: SilkRoadNode[] = [
  {
    id: 'sr-changan',
    name: '长安（京兆府）',
    ancientName: '大唐西京长安城 · 丝绸之路东方总起点',
    modernLocation: '中国陕西省西安市',
    routeGroup: 'chang_an',
    routeGroupLabel: '帝国都城起点',
    coords: { x: 820, y: 295 },
    tangJurisdiction: '关内道 · 京兆府（皇都）',
    distanceFromChangAn: '丝路起点（里程零点：开远门与西市）',
    summary: '盛唐时期人口逾百万的世界第一大都会。驼队自长安城西门“开远门”或国际商贸中心“西市”启程，开启横跨欧亚大陆的万里征途。',
    historicalRole: '大唐政治、经济、外交与文化中枢。鸿胪寺接待70余国使节，国子监接纳数千外国留学生，西市汇聚中亚粟特、波斯、大食胡商，义宁坊与醴泉坊林立景教、祆教、摩尼教寺院。',
    tradeAndCulture: '向西输出丝绸（锦、绫、罗、绮）、越窑青瓷、邢窑白瓷、茶叶、铜镜与纸张；吸纳西域良马、宝石、香料、玻璃器、胡乐与天文历算。',
    archaeologicalEvidence: '大明宫遗址、大唐西市遗址、开远门外唐代骆驼蹄印路面遗址、何家村唐代窖藏（含东罗马金币、波斯萨珊银币、日本和同开珎银币）、《大秦景教流行中国碑》。',
    tangPoem: {
      verse: '九天阊阖开宫殿，万国衣冠拜冕旒。',
      author: '〔盛唐〕王维',
      title: '《和贾舍人早朝大明宫之作》'
    },
    image: '/images/museum/daminggong_danfeng.jpg',
    imageCaption: '长安大明宫丹凤门遗址（万国使节朝觐大唐的迎宾正门）',
    imageSource: 'Wikimedia Commons / 西安大明宫国家考古遗址公园'
  },
  {
    id: 'sr-liangzhou',
    name: '河西走廊 · 凉州（武威）',
    ancientName: '陇右道 · 河西节度使治所（武威、张掖、酒泉）',
    modernLocation: '中国甘肃省武威市、张掖市、酒泉市一带',
    routeGroup: 'hexi',
    routeGroupLabel: '河西走廊咽喉',
    coords: { x: 675, y: 235 },
    tangJurisdiction: '陇右道 · 凉州都督府 / 河西节度使（景云二年·711年置）',
    distanceFromChangAn: '距长安约二千里',
    summary: '南依祁连山冰雪融水、北邻腾格里与巴丹吉林沙漠的狭长绿洲走廊，是大唐通往西域唯一畅通的战略大动脉，凉州更是当时中国北方仅次于长安、洛阳的繁华国际商埠。',
    historicalRole: '唐朝于景云二年（711年）设河西节度使驻凉州，统兵7.3万人，断匈奴突厥与吐蕃联手之臂，护卫河西四郡（武威、张掖、酒泉、敦煌）粮道与驿站。',
    tradeAndCulture: '粟特商胡在凉州形成庞大的聚落（安姓、康姓、史姓），酿造著名的葡萄美酒，融合西域音乐形成享誉盛唐宫廷的《凉州词》《西凉乐》。',
    archaeologicalEvidence: '武威唐代吐谷浑王族墓群、大云寺唐代铜钟、河西走廊唐代烽燧遗址与吐鲁番文书所载河西“过所”（通行护照）。',
    tangPoem: {
      verse: '葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？',
      author: '〔盛唐〕王翰',
      title: '《凉州词二首·其一》'
    },
    image: '/images/museum/wumahu.jpg',
    imageCaption: '唐·鎏金舞马衔杯纹银壶（见证丝路葡萄美酒与宫廷马政文化的交融）',
    imageSource: '陕西历史博物馆藏 / Wikimedia Commons'
  },
  {
    id: 'sr-dunhuang',
    name: '敦煌 · 玉门关与阳关（沙州）',
    ancientName: '沙州 · 丝路南北三道总枢纽 · 莫高窟千佛圣地',
    modernLocation: '中国甘肃省敦煌市',
    routeGroup: 'hexi',
    routeGroupLabel: '河西走廊咽喉',
    coords: { x: 560, y: 205 },
    tangJurisdiction: '陇右道 · 沙州敦煌郡 / 晚唐归义军节度使治所',
    distanceFromChangAn: '距长安三千六百里',
    summary: '“华戎所交一都会”，丝绸之路走出河西走廊后，在此分道为西域北道（天山北麓）、中道（天山南麓）与南道（昆仑山北麓）。城西玉门关与阳关更是唐人离别故土、西出塞外的精神坐标。',
    historicalRole: '初盛唐为经略西域的前进基地；中唐陷于吐蕃六十余年；大中二年（848年）张议潮率沙州民众举义收复河西十一州，建立归义军政权，重开丝路贡道。',
    tradeAndCulture: '莫高窟现存唐代洞窟逾200个（占莫高窟总量近半），藏经洞（第17窟）出土5万余件公元4至11世纪的汉文、藏文、回鹘文、粟特文、梵文、于阗文写卷与咸通九年雕版《金刚经》。',
    archaeologicalEvidence: '敦煌莫高窟（第220窟、第45窟、第159窟、第156窟《张议潮统军出行图》）、玉门关遗址（小方盘城）、悬泉置与唐代河西烽燧群。',
    tangPoem: {
      verse: '劝君更尽一杯酒，西出阳关无故人。',
      author: '〔盛唐〕王维',
      title: '《送元二使安西》'
    },
    image: '/images/museum/mogao_220.jpg',
    imageCaption: '敦煌莫高窟第220窟（初唐贞观十六年·642年营建）壁画实景',
    imageSource: 'Wikimedia Commons / 敦煌莫高窟唐代壁画档案'
  },
  {
    id: 'sr-gaochang',
    name: '高昌 · 交河故城（西州与北庭）',
    ancientName: '西州高昌县 · 交河城（安西都护府初设地）· 北庭都护府',
    modernLocation: '中国新疆维吾尔自治区吐鲁番市（交河故城、高昌故城）及吉木萨尔县（北庭故城）',
    routeGroup: 'western_regions',
    routeGroupLabel: '西域都护重镇',
    coords: { x: 465, y: 150 },
    tangJurisdiction: '贞观十四年（640年）置西州及安西都护府；长安二年（702年）于天山北麓置北庭都护府',
    distanceFromChangAn: '距长安约四千九百里',
    summary: '玄奘西行曾在此与高昌王曲文泰结为异姓兄弟、讲经一月；贞观十四年唐平高昌，直接施行中原州县制（均田制、租庸调制、折冲府），并在此初设“安西都护府”。',
    historicalRole: '唐朝治理西域的行政样板：阿斯塔那古墓群出土的数千件唐代文书证明，远在长安五千里外的西州完整执行着与长安一致的户籍、授田、科举教育与“过所”管理制度。',
    tradeAndCulture: '高昌葡萄、葡萄酒与棉布（白叠布）名扬长安；阿斯塔那墓出土了706年唐代小学生卜天寿抄写的《论语郑氏注》与唐代绢画《伏羲女娲图》《弈棋仕女图》。',
    archaeologicalEvidence: '交河故城遗址（世界最大、最古老的生土建筑城市）、高昌故城、阿斯塔那唐代墓群文书、吉木萨尔北庭故城遗址。',
    tangPoem: {
      verse: '交河城边飞鸟绝，轮台路上马蹄滑。',
      author: '〔盛唐〕岑参',
      title: '《天山雪歌送萧治归京》'
    },
    image: '/images/museum/jiaohe.jpg',
    imageCaption: '新疆吐鲁番交河故城遗址（唐贞观十四年·640年安西都护府初设治所，世界文化遗产）',
    imageSource: 'Wikimedia Commons / 吐鲁番交河故城实景'
  },
  {
    id: 'sr-kucha-suyab',
    name: '龟兹与碎叶（安西四镇）',
    ancientName: '安西大都护府治所（龟兹）· 龟兹、于阗、疏勒、碎叶“安西四镇”',
    modernLocation: '中国新疆库车市（龟兹）、和田（于阗）、喀什（疏勒）及吉尔吉斯斯坦托克马克附近（碎叶城）',
    routeGroup: 'western_regions',
    routeGroupLabel: '西域都护重镇',
    coords: { x: 345, y: 165 },
    tangJurisdiction: '安西大都护府（显庆三年·658年移治龟兹，统辖安西四镇与西域十六都督府）',
    distanceFromChangAn: '龟兹距长安约六千七百里，碎叶距长安约八千里',
    summary: '唐代经营西域的最高军事与行政中枢。龟兹乐舞风靡长安，于阗盛产和田美玉与尉迟乙僧凹凸画法，而楚河流域的碎叶城则是安西四镇最西端重镇，亦是诗仙李白的出生地。',
    historicalRole: '安西大都护府统兵二万四千人，在天山南麓与葱岭东西维持了逾百年的丝路安全。安史之乱爆发后，安西、北庭孤悬塞外数十载，满城白发老兵仍坚守大唐正朔。',
    tradeAndCulture: '龟兹（库车）克孜尔石窟壁画与苏巴什佛寺遗址见证了佛教东传；龟兹筚篥、曲项琵琶、羯鼓成为盛唐十部乐的核心乐器。',
    archaeologicalEvidence: '新疆库车苏巴什佛寺遗址、克孜尔石窟、和田丹丹乌里克遗址、吉尔吉斯斯坦阿克·贝希姆遗址（唐代碎叶城，出土唐武周大云寺碑铭）。',
    tangPoem: {
      verse: '北风卷地白草折，胡天八月即飞雪。忽如一夜春风来，千树万树梨花开。',
      author: '〔盛唐〕岑参',
      title: '《白雪歌送武判官归京》'
    },
    image: '/images/museum/pipayong.jpg',
    imageCaption: '唐·加彩琵琶女伎俑（龟兹曲项琵琶与西域乐舞传入长安的艺术结晶）',
    imageSource: 'Wikimedia Commons / 唐代乐舞陶俑馆藏'
  },
  {
    id: 'sr-samarkand',
    name: '康国 · 撒马尔罕（昭武九姓粟特城邦）',
    ancientName: '飒秣建（康国）· 安国（布哈拉）· 石国（塔什干）',
    modernLocation: '乌兹别克斯坦撒马尔罕、布哈拉及哈萨克斯坦塔拉兹一带',
    routeGroup: 'central_south_asia',
    routeGroupLabel: '中亚与南亚枢纽',
    coords: { x: 215, y: 195 },
    tangJurisdiction: '唐高宗显庆年间置康居都督府（羁縻府州），天宝十载（751年）怛罗斯之战发生于其东北',
    distanceFromChangAn: '距长安约一万一千里',
    summary: '中亚阿姆河与锡尔河之间的“河中地区”，是被称为“丝路贸易民族”的粟特人（昭武九姓：康、安、曹、石、米、何、史等）故乡，也是唐代造纸术西传的第一站。',
    historicalRole: '粟特人生来善商，足迹遍布长安西市、洛阳、凉州与敦煌；撒马尔罕阿夫拉西卜遗址（Afrasiab）7世纪大使厅壁画中，清晰绘制了唐高宗猎豹与武则天、唐宫仕女乘龙舟的壮丽场景。',
    tradeAndCulture: '向大唐进献“金桃”（撒马尔罕黄桃）、胡旋女、银器、锁子甲与汗血宝马；公元751年怛罗斯之战后，唐代造纸匠在撒马尔罕建成中亚第一座造纸工坊，“撒马尔罕纸”名震伊斯兰世界。',
    archaeologicalEvidence: '撒马尔罕阿夫拉西卜大使厅唐代壁画、西安北周至唐代安伽墓/史君墓/康业墓粟特石棺床浮雕、何家村粟特风格金银器。',
    tangPoem: {
      verse: '胡旋女，胡旋女，心应弦，手应鼓。弦鼓一声双袖举，回雪飘飖转蓬舞。',
      author: '〔中唐〕白居易',
      title: '《胡旋女》（咏康国所献胡旋舞）'
    },
    image: '/images/museum/huxuanwu.jpg',
    imageCaption: '胡旋舞石刻浮雕图案（见证中亚粟特胡旋舞在唐代的盛行）',
    imageSource: 'Wikimedia Commons / 粟特胡旋舞文物图像'
  },
  {
    id: 'sr-nalanda',
    name: '天竺 · 那烂陀寺与曲女城',
    ancientName: '摩揭陀国 · 那烂陀寺 · 戒日王曲女城（搭配唐蕃古道与葱岭南道）',
    modernLocation: '印度比哈尔邦那烂陀遗址、北方邦卡瑙杰（曲女城）及中国西藏拉萨（唐蕃古道枢纽）',
    routeGroup: 'central_south_asia',
    routeGroupLabel: '中亚与南亚枢纽',
    coords: { x: 310, y: 375 },
    tangJurisdiction: '友好邦交国（戒日王朝、摩揭陀国），玄奘求法与王玄策四使天竺之地',
    distanceFromChangAn: '经西域葱岭或经拉萨“唐蕃古道”距长安约一万四千里',
    summary: '玄奘法师留学五年的南亚最高佛教学府。贞观年间玄奘归国后，戒日王与唐太宗互派使节，王玄策更四次出使天竺，将印度熬糖法、天文历算与眼科医术引入长安。',
    historicalRole: '不仅通过葱岭西域道相连，更在贞观十五年（641年）文成公主入藏后，开辟了自长安经青海、拉萨（逻些）、吉隆沟直达尼婆罗（尼泊尔）与印度的“唐蕃古道”捷径。',
    tradeAndCulture: '佛教唯识学、因明学、密宗艺术东传长安与敦煌；唐太宗派使臣赴摩揭陀国学习熬制蔗糖技术，扬州遂造出远胜印度的洁白石蜜；天竺天文家瞿昙悉达在唐任太史监，编译《开元占经》（引入印度数字“0”符号）。',
    archaeologicalEvidence: '印度那烂陀寺考古遗址（依据玄奘《大唐西域记》发掘）、西藏吉隆县唐显庆三年（658年）《大唐天竺使出铭》摩崖石刻（王玄策刻石）。',
    tangPoem: {
      verse: '天竺沙门到帝乡，译经台畔柏森行。一函梵夹来西极，万里孤云向大唐。',
      author: '〔唐〕送天竺僧诗意',
      title: '《大慈恩寺译经纪事》'
    },
    image: '/images/museum/xuanzang.jpg',
    imageCaption: '玄奘法师自天竺那烂陀寺携657部梵本佛经归唐画像',
    imageSource: '东京国立博物馆藏 / Wikimedia Commons Public Domain'
  },
  {
    id: 'sr-baghdad-damascus',
    name: '波斯与大食 · 巴格达与大秦（东罗马）',
    ancientName: '波斯萨珊王朝 · 大食（阿拔斯王朝巴格达）· 拂菻（拜占庭帝国）',
    modernLocation: '伊朗、伊拉克巴格达、叙利亚大马士革及东地中海沿岸',
    routeGroup: 'central_south_asia',
    routeGroupLabel: '西亚与地中海终端',
    coords: { x: 85, y: 265 },
    tangJurisdiction: '丝绸之路西端国际贸易与外交伙伴（《旧唐书》载大食遣使来唐达37次，波斯逾30次，拂菻7次）',
    distanceFromChangAn: '陆路及海路距长安约一万五千至二万里',
    summary: '丝绸之路西端的三大文明体：波斯萨珊王室贵族（俾路斯、泥涅师）曾避难长安任唐左威卫将军；阿拔斯王朝首都巴格达专设售卖唐瓷与丝绸的“中国市场”；拜占庭（拂菻）与长安互派使臣。',
    historicalRole: '大唐与大食、波斯、东罗马通过陆上丝路及波斯湾—广州海上丝路紧密相连。公元794年，阿拔斯王朝宰相巴尔马克在巴格达建立第一座造纸工坊，使用中国技术生产的纸张支撑了巴格达“智慧宫”的百年翻译运动。',
    tradeAndCulture: '波斯与大食的乳香、没药、苏合香、波斯钴蓝、吹制玻璃器、瑟瑟（青金石）、波斯锦、景教与摩尼教传入长安；大唐的丝绸、越窑青瓷、长沙窑彩瓷、白瓷与造纸术传遍西亚与地中海。',
    archaeologicalEvidence: '法门寺地宫出土的20件伊斯兰早期东罗马与大食刻花、贴塑、釉彩玻璃器；西安唐墓出土的东罗马希拉克略金币与波斯库思老二世银币；伊拉克萨马拉遗址出土的大量唐代白瓷与三彩器。',
    tangPoem: {
      verse: '波斯老贾度流沙，夜听驼铃识路赊。采得明珠归金市，长安春色满胡家。',
      author: '〔唐〕长安西市咏胡商诗',
      title: '《西市胡贾行》'
    },
    image: '/images/museum/manaobei.jpg',
    imageCaption: '西安何家村窖藏出土·唐代镶金兽首玛瑙杯（融合中亚/波斯来通杯Rhyton造型与长安金匠绝技）',
    imageSource: '陕西历史博物馆藏 / Wikimedia Commons'
  },
  {
    id: 'sr-yangzhou-nara',
    name: '扬州 · 广州与日本奈良（海上丝绸之路与东亚唐风圈）',
    ancientName: '淮南道扬州 · 岭南道广州（市舶使）· 日本平城京（奈良）与新罗庆州',
    modernLocation: '中国江苏扬州、广东广州 — 韩国庆州 — 日本奈良、京都',
    routeGroup: 'maritime_east_asia',
    routeGroupLabel: '海上丝路与东亚航线',
    coords: { x: 935, y: 315 },
    tangJurisdiction: '唐玄宗开元二年（714年）于广州首设“市舶使”管理海外贸易；扬州为江淮运河与东海航线总枢纽',
    distanceFromChangAn: '扬州距长安二千七百里，由此东渡日本平城京约三千海里；广州出南海通波斯湾（“广州通海夷道”全长一万四千公里）',
    summary: '安史之乱后陆路受阻，海上丝绸之路全面繁荣。“扬一益二”的扬州与设立“市舶使”的广州聚居波斯、大食、昆仑商胡十余万人；向东则有日本十九次任命遣唐使、鉴真六次东渡与新罗学人往来不绝。',
    historicalRole: '唐代地理学家贾耽在《皇华四达记》中详细记载了“广州通海夷道”：自广州启航，经南海、马六甲海峡、斯里兰卡、印度西海岸直抵波斯湾巴士拉与巴格达，成为当时世界最长的远洋航线。',
    tradeAndCulture: '鉴真自扬州东渡日本奈良；日本平城京（奈良）与平安京（京都）完全仿照唐长安城棋盘里坊制建造；奈良东大寺正仓院至今完好保存着螺钿紫檀五弦琵琶、唐代尺八、鸟毛立女屏风等数千件盛唐传世稀世珍宝。',
    archaeologicalEvidence: '印尼海域“黑石号”唐代沉船（出水6.7万件唐瓷及扬州“江心镜”）、日本奈良唐招提寺与正仓院御物、扬州唐城遗址出土波斯绿釉陶。',
    tangPoem: {
      verse: '日本晁卿辞帝都，征帆一片绕蓬壶。明月不归沉碧海，白云愁色满苍梧。',
      author: '〔盛唐〕李白',
      title: '《哭晁卿衡》（赠日本遣唐留学生阿倍仲麻吕）'
    },
    image: '/images/museum/jianzhen.jpg',
    imageCaption: '日本奈良唐招提寺藏·唐代干漆夹苎《鉴真大和尚坐像》（见证扬州至奈良的海上丝路传奇）',
    imageSource: '奈良唐招提寺 / Wikimedia Commons Public Domain'
  }
]

export const SILK_ROAD_EXCHANGES: SilkRoadExchangeItem[] = [
  {
    id: 'ex-west-silk',
    direction: 'westward',
    directionLabel: '大唐西传世界（东学西渐）',
    name: '唐代丝织品（唐锦、绫、罗、缭绫）与桑蚕织造技术',
    category: '丝绸与纺织',
    originOrTarget: '长安、江南、蜀中 → 中亚、波斯、巴格达、拜占庭',
    peakPeriod: '初唐至盛唐（7—8世纪）',
    description: '唐代丝绸发明了吸收联珠纹的“陵阳公样”（窦师纶创制），织有对鸟、对鹿、团窠宝花纹。丝娟不仅是头等国际奢侈品，更在河西与西域直接作为硬通货流通。',
    historicalRecordOrRelic: '吐鲁番阿斯塔那与敦煌藏经洞出土大批唐代联珠团窠纹锦；杜环《经行记》载河东织络匠乐隈、吕礼在大食传授丝织技艺。'
  },
  {
    id: 'ex-west-paper',
    direction: 'westward',
    directionLabel: '大唐西传世界（东学西渐）',
    name: '造纸术（麻纸、楮皮纸）与雕版印刷先声',
    category: '核心科学发明',
    originOrTarget: '长安 → 碎叶/怛罗斯（751年）→ 撒马尔罕 → 巴格达（794年）→ 欧洲',
    peakPeriod: '盛唐天宝十载（751年）起',
    description: '怛罗斯之战后，唐代造纸工匠在撒马尔罕利用当地亚麻与桑皮建立造纸工坊，取代了昂贵的羊皮纸与脆弱的埃及莎草纸，引发伊斯兰世界与欧洲的知识革命。',
    historicalRecordOrRelic: '阿拉伯学者泰阿利比《纬书》专节记载“撒马尔罕纸”；巴格达794年创立皇家造纸厂。'
  },
  {
    id: 'ex-west-porcelain',
    direction: 'westward',
    directionLabel: '大唐西传世界（东学西渐）',
    name: '越窑青瓷、邢窑白瓷、长沙窑釉下彩瓷与唐三彩',
    category: '陶瓷造物',
    originOrTarget: '越州、邢州、长沙铜官窑 → 扬州/广州 → 东南亚、印度洋、波斯湾、埃及福斯塔特',
    peakPeriod: '盛唐至晚唐（8—9世纪）',
    description: '长沙窑工匠专门为阿拉伯与波斯客商烧造绘有阿拉伯文祝词（“真主伟大”）、椰枣纹与胡人图案的外销瓷，开启了中国瓷器作为全球大宗贸易品的时代。',
    historicalRecordOrRelic: '印尼勿里洞岛“黑石号”唐代沉船出水6.7万件唐瓷（含唐文宗宝历二年·826年铭文碗）；伊拉克萨马拉皇宫遗址出土大批唐白瓷。'
  },
  {
    id: 'ex-west-law-city',
    direction: 'westward',
    directionLabel: '大唐西传世界（东学西渐）',
    name: '《唐律疏议》、三省六部律令制、长安城里坊规划与汉字文化',
    category: '制度与都城文明',
    originOrTarget: '长安 → 新罗（庆州）、日本（难波京/藤原京/平城京/平安京）、渤海国（上京龙泉府）',
    peakPeriod: '贞观至开元、元和年间（7—9世纪）',
    description: '日本通过十九批遣唐使全面推行“大化改新”，颁布《大宝律令》，平城京（奈良）与平安京（京都）连朱雀大街、东西两市、坊市名称皆仿长安而建。',
    historicalRecordOrRelic: '日本《大宝律令》《养老律令》；黑龙江宁安渤海国上京龙泉府遗址；日本奈良平城宫遗址。'
  },
  {
    id: 'ex-east-horses-plants',
    direction: 'eastward',
    directionLabel: '丝路东传长安（西学东渐）',
    name: '西域良马（康国马、大宛马）与外来作物（菠菜、开心果、无花果、金桃）',
    category: '物种与马政',
    originOrTarget: '康国、大宛、泥婆罗（尼泊尔）、波斯 → 长安',
    peakPeriod: '贞观至开元年间（7—8世纪）',
    description: '贞观二十一年泥婆罗国献波棱菜（即菠菜，至今北方仍称波斯菜）；撒马尔罕进献黄桃（金桃）；波斯传入阿月浑子（开心果）、无花果、偏桃（巴旦木）与胡麻饼。',
    historicalRecordOrRelic: '《唐会要》卷一〇〇载泥婆罗献波棱菜；段成式《酉阳杂俎》详载波斯无花果、齐暾（油橄榄）与阿月浑子。'
  },
  {
    id: 'ex-east-gold-glass',
    direction: 'eastward',
    directionLabel: '丝路东传长安（西学东渐）',
    name: '萨珊与粟特金银锤揲工艺、伊斯兰刻花吹制玻璃器与波斯钴蓝',
    category: '工艺与材质',
    originOrTarget: '波斯萨珊、中亚粟特、大马士革/巴格达 → 长安西市与内廷作坊',
    peakPeriod: '7—9世纪',
    description: '高纯度波斯钴蓝料赋予唐三彩深邃迷人的蓝釉；来通杯（Rhyton，兽首角杯）与高足带把杯造型激发了唐代金银器创新；法门寺地宫更封存了20件绝世西域与伊斯兰玻璃器。',
    historicalRecordOrRelic: '西安何家村窖藏《镶金兽首玛瑙杯》《鎏金八棱银杯》；扶风法门寺地宫出土蓝琉璃盘与伊斯兰贴塑玻璃茶托。'
  },
  {
    id: 'ex-east-music-sport',
    direction: 'eastward',
    directionLabel: '丝路东传长安（西学东渐）',
    name: '龟兹乐、康国胡旋舞、胡腾舞、柘枝舞与波斯马球（击鞠）',
    category: '乐舞与体育时尚',
    originOrTarget: '龟兹、康国（撒马尔罕）、石国（塔什干）、波斯、吐蕃 → 长安宫廷与坊间',
    peakPeriod: '初唐至盛唐（7—8世纪）',
    description: '曲项琵琶、五弦琵琶、箜篌、筚篥与羯鼓重塑了唐代音乐；源自波斯的马球（打毬）成为从唐太宗、唐玄宗到新科进士、宫廷女子最痴迷的皇家运动，长安大明宫含光殿专设马球场。',
    historicalRecordOrRelic: '乾陵章怀太子李贤墓出土《马球图》壁画；大明宫含光殿唐代建球场石志铭；敦煌莫高窟第220窟、第112窟《反弹琵琶》乐舞壁画。'
  },
  {
    id: 'ex-east-religions-sci',
    direction: 'eastward',
    directionLabel: '丝路东传长安（西学东渐）',
    name: '佛教唯识与密宗、景教（基督教）、祆教、摩尼教及天竺历算医药',
    category: '宗教哲学与科技',
    originOrTarget: '天竺、波斯、叙利亚（大秦）、拂菻（东罗马）→ 长安与洛阳',
    peakPeriod: '贞观九年（635年）至会昌五年（845年）',
    description: '唐朝对多元信仰采取罕见的包容态度，“三夷教”（景教、祆教、摩尼教）皆在长安立寺传教；天竺瞿昙家族世代供职唐太史局，将印度《九执历》与正弦函数表译入中文；拂菻与天竺医僧带来眼科金针拨障术与“底野迦”解毒药。',
    historicalRecordOrRelic: '唐建中二年（781年）《大秦景教流行中国碑》；敦煌藏经洞出土景教《尊经》与摩尼教《下部赞》写本；《开元占经》卷一〇四《九执历》。'
  }
]
