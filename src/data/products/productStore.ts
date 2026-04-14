import { CategoryData } from '@/types';

export const DATA_STORE: Record<string, CategoryData> = {
  'smart-touch': {
    title: '触摸屏领域',
    // subtitle: 'Smart Touch Solutions',
    heroSlides: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    ],
    description: '玻璃投射式电容触摸屏具有多点触控的功能，具有透光率高、反应速度快、寿命长等优点。',
    scenarios: [
      {
        id: 'home',
        label: '玻璃电容式触摸屏',
        title: '',
        description: '玻璃电容式触摸屏用于消费、平板、车载显示、自助终端设备、工业控制等领域。',
        image: '/images/home/bg_6.png',
      },
      // {
      //   id: 'industrial',
      //   label: '工控医疗',
      //   title: '高可靠性工控界面',
      //   description: '专为严苛环境设计，抗电磁干扰（EMC）能力强，支持戴手套操作。广泛应用于数控机床、医疗监护仪、手持终端等专业设备。',
      //   image: 'https://images.unsplash.com/photo-1581093588402-4a1195681407?q=80&w=1000&auto=format&fit=crop',
      // },
      // {
      //   id: 'retail',
      //   label: '智慧零售',
      //   title: '自助服务终端',
      //   description: '大尺寸触控解决方案，应用于自助点餐机、查询机。高透光率与耐磨损表面处理，确保在人流密集场景下的长期清晰度与耐用性。',
      //   image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop',
      // },
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
    title: '防眩盖板',
    // subtitle: 'IT & Computing Display',
    heroSlides: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531297461136-82lw9z0u8e3c?q=80&w=2070&auto=format&fit=crop',
    ],
    description: '防眩盖板产品，表面无阵列纹路，避免与像素的干涉,表面反光均匀，无灯管印,消除了反射彩虹现象，得到更好的效果。',
    scenarios: [
      {
        id: 'business',
        label: '黄光AG制程防眩盖板',
        title: '超薄窄边框设计',
        description: '防眩盖板产品，表面无阵列纹路，避免与像素的干涉,表面反光均匀，无灯管印,消除了反射彩虹现象，得到更好的效果。',
        image: '/images/home/bg_5.png',
      },
      // {
      //   id: 'education',
      //   label: '在线教育',
      //   title: '护眼显示技术',
      //   description: '集成低蓝光与无频闪技术，专为学生平板设计。配合高精度触控笔，还原纸笔书写质感，呵护青少年视力健康。',
      //   image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
      // },
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
    title: '车载盖板领域',
    // subtitle: 'Automotive Cockpit',
    heroSlides: [
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2070&auto=format&fit=crop',
    ],
    description: '晶盾2.5D流光一体成型技术：通过表面镀有金刚砂的CNC磨头对玻璃进行磨削加工，包括外形、打孔、倒角、2.5D弧面磨削。应用于手机/平板盖板玻璃、车载中控、工控医疗、滤光片与窗口片等。',
    scenarios: [
      // {
      //   id: 'cockpit',
      //   label: '智能座舱',
      //   title: '多屏联动系统',
      //   description: '一体化联屏设计，贯穿仪表、中控与副驾娱乐屏。采用车规级全贴合工艺，抗震动、耐老化，满足IATF16949标准。',
      //   image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1000&auto=format&fit=crop',
      // },
      {
        id: 'cockpit',
        label: '车载盖板',
        title: '全屋智能交互中心',
        description: '车载贴合3A膜手机/平板盖板玻璃车载中控工控医疗滤光片与窗口片等',
        image: '/images/home/bg_4.png',
      },
      // {
      //   id: 'rear',
      //   label: '后排娱乐',
      //   title: '影院级视觉享受',
      //   description: '为后排乘客提供高清娱乐显示系统，支持独立触控与多媒体播放，提升豪华商务车的乘坐体验。',
      //   image: 'https://images.unsplash.com/photo-1622379375836-96b63c780962?q=80&w=1000&auto=format&fit=crop',
      // },
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
