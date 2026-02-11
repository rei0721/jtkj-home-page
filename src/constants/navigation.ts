import { MenuItem } from '@/types';

export const navItems: MenuItem[] = [
  { title: '首页', path: '/' },
  {
    title: '关于我们',
    path: '/about',
    submenu: [
      { title: '公司简介', path: '/about/intro', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop' },
      { title: '发展历程', path: '/about/history', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=400&auto=format&fit=crop' },
      { title: '组织架构', path: '/about/structure', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=400&auto=format&fit=crop' },
      { title: '企业文化', path: '/about/culture', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop' },
      { title: '基地展示', path: '/about/bases', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  {
    title: '产品中心',
    path: '/products',
    submenu: [
      { title: '智能触控领域', path: '/products/smart-touch', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop' },
      { title: '平板-笔电-AIO', path: '/products/computing', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&auto=format&fit=crop' },
      { title: '车载领域', path: '/products/automotive', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  {
    title: '科技创新',
    path: '/innovation',
    submenu: [
      { title: '技术研发', path: '/innovation/rnd', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop' },
      { title: '合作伙伴', path: '/innovation/partners', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  { title: '党建工作', path: '/party' },
  {
    title: '新闻中心',
    path: '/news',
    submenu: [
      { title: '最新动态', path: '/news/latest', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400&auto=format&fit=crop' },
      { title: '公司新闻', path: '/news/company', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop' },
      { title: '行业动态', path: '/news/industry', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop' },
      { title: '招标公告', path: '/news/tenders', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  {
    title: '联系我们',
    path: '/contact',
    submenu: [
      { title: '联系方式', path: '/contact/info', image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=400&auto=format&fit=crop' },
      { title: '加入我们', path: '/contact/jobs', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=400&auto=format&fit=crop' },
      { title: '在线留言', path: '/contact/message', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop' },
    ],
  },
];
