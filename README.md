# 盛唐文明与丝绸之路 | THE GLORY OF TANG DYNASTY

> **中国唐代历史文化数字博物馆**  
> 以长安为故事起点，以盛唐文明为核心内容，以丝绸之路为文明交流脉络，全景式呈现唐朝（618—907）二百八十九年的历史演进、制度气象、风云人物、科技艺术、丝路互鉴与传世国宝。

---

## 项目简介

**《盛唐文明与丝绸之路》（The Glory of Tang Dynasty）** 是一座基于 Vue 3 + TypeScript + Tailwind CSS 构建的交互式中国唐代历史文化数字博物馆。项目融合中国传统宣纸、朱砂、鎏金与敦煌色彩美学，结合经过严谨考据的文献史料与馆藏文物影像，通过八大核心展区带领访问者沉浸式探索大唐盛世的兴衰脉络与文明光辉。

---

## 核心展区与功能特性

### 1. 八大数字策展维度

| 展区路由 | 展区名称 | 核心内容与交互设计 |
| :--- | :--- | :--- |
| `/` | **盛世总览** | 盛唐气象导览、唐代四期（初唐/盛唐/中唐/晚唐）核心指标对比、数字展厅快速入口 |
| `/chang-an` | **大唐与盛世长安** | 唐朝四期历史演进、长安城百坊棋盘空间复原交互沙盘、三省六部等核心典章制度解析 |
| `/timeline` | **历史时间轴与重大转折** | 618—907 编年史大事记、国力指数曲线、玄武门之变/贞观之治/安史之乱等重大历史转折因果链 |
| `/figures` | **风云人物图谱** | 帝王将相、高僧使节、诗仙文豪、艺术与科学巨匠的人物档案、生平轨迹与人物关系网 |
| `/culture` | **文明瑰宝与科技成就** | 唐诗名篇赏析、书画艺术、唐三彩与金银器、天文历法、医药雕版印刷、建筑与燕乐六大领域 |
| `/silk-road` | **丝绸之路与中外文明交流** | 陆海丝路枢纽交互星图（长安、河西走廊、西域、中南亚、海上丝路）及东西方双向物质文化交流 |
| `/heritage` | **历史遗存与传世国宝** | 传世馆藏国宝与重要考古遗址图鉴，支持高清大图检视（Lightbox）、出土信息与工艺价值解读 |
| `/reflections` | **盛世回响与历史思辨** | 唐文明对东亚文化圈与世界的影响维度、盛极而衰的深层历史叩问与多视角交互式思辨 |

### 2. 特色体验

- **全局典藏检索**：支持跨人物、事件、文明成就、丝路节点、传世文物的实时关键词检索与直达跳转。
- **东方博物馆美学设计**：定制宣纸白（`xuan`）、朱砂红（`cinnabar`）、鎏金黄（`gilt`）、敦煌青绿（`dunhuang`）等语义化色彩系统，支持**日间宣纸卷轴 / 夜间琉璃灯影**双主题切换。
- **本地化数字馆藏数据服务**：内置结构化史料与文物图集清单（`public/images/museum/manifest.json`），零外部冗余 API 依赖，开箱即用。

---

## 技术栈

- **前端框架**：[Vue 3](https://vuejs.org/) (`<script setup>` Composition API)
- **开发语言**：[TypeScript](https://www.typescriptlang.org/) (~5.7)
- **路由管理**：[Vue Router 4](https://router.vuejs.org/)
- **样式引擎**：[Tailwind CSS 3](https://tailwindcss.com/) + CSS Variables 主题系统
- **图标库**：[Lucide Vue Next](https://lucide.dev/) + 定制唐纹徽章组件
- **构建工具**：[Vite 6](https://vite.dev/)

---

## 目录结构

```text
china-history/
├── public/
│   ├── images/museum/           # 馆藏文物、遗址与历史插画资源及 manifest.json
│   ├── favicon.svg              # 唐章主题站点图标
│   └── ...
├── src/
│   ├── components/
│   │   ├── common/              # 通用组件（唐印徽章、纹章图标、章节标题、高清看图弹窗）
│   │   └── layout/              # 全局导航栏（含全局搜索与主题切换）与页脚
│   ├── data/                    # 八大历史维度的结构化史料与文物数据集
│   │   ├── periodsAndChangAn.ts # 唐朝四期分期、长安城地标与典章制度数据
│   │   ├── timelineData.ts      # 编年史时间轴数据
│   │   ├── eventsData.ts        # 重大历史转折事件数据
│   │   ├── figuresData.ts       # 历史风云人物数据
│   │   ├── cultureTechData.ts   # 文化与科技成就数据
│   │   ├── silkRoadData.ts      # 丝绸之路节点与双向交流数据
│   │   ├── heritageRelicsData.ts# 历史遗址与传世文物数据
│   │   └── echoesReflectionsData.ts # 盛世回响与历史思辨数据
│   ├── router/                  # 路由配置与页面标题守卫
│   ├── services/
│   │   └── museumApi.ts         # 统一数据查询、分期过滤与全局搜索服务层
│   ├── types/
│   │   └── museum.ts            # 全局 TypeScript 数据模型定义
│   ├── views/                   # 八大数字展厅视图页面
│   ├── App.vue                  # 根组件
│   ├── main.ts                  # 应用入口
│   └── style.css                # 全局样式与东方色彩 CSS 变量定义
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 快速开始

### 环境要求

- **Node.js**：`>= 18.0.0`
- **npm**：`>= 9.0.0`（或 `pnpm` / `yarn`）

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

启动后在浏览器访问终端提示的本地地址（默认 `http://localhost:5173`）。

### 生产环境构建与预览

```bash
# 编译生产版本（输出至 dist/ 目录）
npm run build

# 本地预览生产构建产物
npm run preview
```

---

## 许可证与说明

本项目仅用于中国历史文化数字化展示、学习与研究交流。项目中引用的文献史料均标明典籍出处，馆藏文物及历史图像均于数据模型中附带来源说明。
