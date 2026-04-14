import { CategoryData } from '@/types';

export const DATA_STORE: Record<string, CategoryData> = {
  'smart-touch': {
    title: '智能触控领域',
    subtitle: 'Smart Touch Solutions',
    heroSlides: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    ],
    description: '设计开发：更小、可绕性→超窄边框/无边框设计；工艺制程：2.5D/3D 曲面贴合；应用场景：全柔概念、生活家居、奢侈品领域拓展。',
    scenarios: [
      {
        id: 'home',
        label: '智能家居',
        title: '全屋智能交互中心',
        description: '应用于智能冰箱、烤箱、中控屏等设备。我们的触控面板具备耐油污、耐高温特性，支持湿手触控，为现代厨房与客厅提供流畅的人机交互体验。',
        image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 'industrial',
        label: '工控医疗',
        title: '高可靠性工控界面',
        description: '专为严苛环境设计，抗电磁干扰（EMC）能力强，支持戴手套操作。广泛应用于数控机床、医疗监护仪、手持终端等专业设备。',
        image: 'https://images.unsplash.com/photo-1581093588402-4a1195681407?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 'retail',
        label: '智慧零售',
        title: '自助服务终端',
        description: '大尺寸触控解决方案，应用于自助点餐机、查询机。高透光率与耐磨损表面处理，确保在人流密集场景下的长期清晰度与耐用性。',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop',
      },
    ],
    products: Array.from({ length: 1 }).map((_, i) => ({
      id: i + 1,
      name: `G${i + 1} Series 智能触控模组`,
      image: `https://picsum.photos/seed/touch${i}/600/600`,
      specs: [
        { label: '尺寸范围', value: '7.0" - 32.0"' },
        { label: '触控点数', value: '10点 / 20点' },
        { label: '透光率', value: '≥ 90%' },
        { label: '表面硬度', value: '≥ 6H' },
        { label: '工作温度', value: '-20℃ ~ 70℃' },
      ],
      features: ['AG/AR/AF 表面处理', '支持主动笔', '防水抗噪'],
    })),
  },
  'computing': {
    title: '平板-笔电-AIO',
    subtitle: 'IT & Computing Display',
    heroSlides: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531297461136-82lw9z0u8e3c?q=80&w=2070&auto=format&fit=crop',
    ],
    description: '设计开发：极致轻薄→模组厚度<2.0mm；工艺制程：COF封装/窄边框点胶工艺；应用场景：移动办公、在线教育、创意设计工作站。',
    scenarios: [
      {
        id: 'business',
        label: '商务办公',
        title: '超薄窄边框设计',
        description: '为高端商务笔记本提供轻薄化显示模组，极致窄边框带来沉浸式视觉体验，低功耗技术显著延长设备续航时间。',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 'education',
        label: '在线教育',
        title: '护眼显示技术',
        description: '集成低蓝光与无频闪技术，专为学生平板设计。配合高精度触控笔，还原纸笔书写质感，呵护青少年视力健康。',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
      },
    ],
    products: Array.from({ length: 1 }).map((_, i) => ({
      id: i + 100,
      name: `NB-${i + 1} 高清显示总成`,
      image: `https://picsum.photos/seed/laptop${i}/600/600`,
      specs: [
        { label: '分辨率', value: '2K / 4K' },
        { label: '刷新率', value: '60Hz / 120Hz' },
        { label: '色域', value: '100% sRGB' },
        { label: '厚度', value: '< 2.0mm' },
      ],
      features: ['HDR400认证', '由内而外护眼', '超低功耗'],
    })),
  },
  'automotive': {
    title: '车载显示领域',
    subtitle: 'Automotive Cockpit',
    heroSlides: [
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2070&auto=format&fit=crop',
    ],
    description: '设计开发：一体黑效果/异形切割设计；工艺制程：3D热弯/盖板防爆/减反射处理；应用场景：智能座舱仪表、中控娱乐、后排扶手屏。',
    scenarios: [
      {
        id: 'cockpit',
        label: '智能座舱',
        title: '多屏联动系统',
        description: '一体化联屏设计，贯穿仪表、中控与副驾娱乐屏。采用车规级全贴合工艺，抗震动、耐老化，满足IATF16949标准。',
        image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 'rear',
        label: '后排娱乐',
        title: '影院级视觉享受',
        description: '为后排乘客提供高清娱乐显示系统，支持独立触控与多媒体播放，提升豪华商务车的乘坐体验。',
        image: 'https://images.unsplash.com/photo-1622379375836-96b63c780962?q=80&w=1000&auto=format&fit=crop',
      },
    ],
    products: Array.from({ length: 1 }).map((_, i) => ({
      id: i + 200,
      name: `Auto-X${i + 1} 车规级大屏`,
      image: `https://picsum.photos/seed/auto${i}/600/600`,
      specs: [
        { label: '尺寸', value: '12.3" / 15.6" / 27"' },
        { label: '曲率', value: 'R2000 / R3000' },
        { label: '亮度', value: '1000 nits' },
        { label: '工作温度', value: '-40℃ ~ 85℃' },
      ],
      features: ['一体黑效果', '防眩光AG处理', '10年老化寿命'],
    })),
  },
};
