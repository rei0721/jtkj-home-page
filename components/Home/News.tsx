import React from 'react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { NewsItem } from '../../types';
import ScrollAnimation from '../UI/ScrollAnimation';

const newsData: NewsItem[] = [
  {
    id: 1,
    title: '我司荣获“国家级高新技术企业”与“专精特新”小巨人称号',
    date: '2023-10-24',
    category: 'Latest',
    summary: '近日，经过严格的评审与公示，我司凭借在光电新材料领域的持续创新与卓越贡献，成功入选国家级专精特新“小巨人”企业名单...',
    image: 'https://picsum.photos/seed/award_news/800/500',
  },
  {
    id: 2,
    title: '【招标公告】年产5000万片智能触控模组生产线设备采购项目',
    date: '2023-11-05',
    category: 'Tender',
    summary: '本项目已具备招标条件，现对该项目进行公开招标，欢迎符合资格条件的供应商投标。',
    image: '',
  },
  {
    id: 3,
    title: '行业观察：2024年全球车载显示市场趋势分析',
    date: '2023-11-02',
    category: 'Industry',
    summary: '随着智能座舱的普及，多屏化、大屏化成为趋势，预计2024年市场规模将突破...',
    image: '',
  },
  {
    id: 4,
    title: '公司召开2023年度第三季度经营分析会',
    date: '2023-10-15',
    category: 'Company',
    summary: '会议总结了三季度经营情况，部署了四季度重点工作，强调要保质保量完成年度目标...',
    image: '',
  },
];

const News: React.FC = () => {
  const featuredNews = newsData[0];
  const sideNews = newsData.slice(1);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
            <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">新闻中心</h2>
                <div className="w-20 h-1 bg-accent rounded-full"></div>
            </div>
            <a href="#" className="hidden md:flex items-center text-accent hover:text-sky-700 font-semibold transition-colors">
                查看更多 <ArrowRight size={18} className="ml-2" />
            </a>
            </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Featured News - Left Side */}
          <ScrollAnimation delay={200}>
            <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-6 relative h-64 md:h-80">
                <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded text-sm font-semibold shadow-lg">
                    {featuredNews.category === 'Latest' ? '最新动态' : featuredNews.category}
                </div>
                </div>
                <div>
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-3">
                    <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{featuredNews.date}</span>
                    </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                    {featuredNews.title}
                </h3>
                <p className="text-slate-600 leading-relaxed line-clamp-3">
                    {featuredNews.summary}
                </p>
                </div>
            </div>
          </ScrollAnimation>

          {/* Side List - Right Side */}
          <div className="flex flex-col gap-6 justify-between">
            {sideNews.map((news, index) => (
              <ScrollAnimation key={news.id} delay={300 + (index * 100)} className="w-full">
                <div className="flex flex-col sm:flex-row gap-4 group cursor-pointer border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                    <div className="bg-slate-50 w-full sm:w-24 h-24 flex-shrink-0 flex flex-col items-center justify-center rounded-lg text-slate-500 group-hover:bg-accent group-hover:text-white transition-colors">
                        <span className="text-2xl font-bold">{news.date.split('-')[2]}</span>
                        <span className="text-xs uppercase">{news.date.split('-')[1]}月</span>
                    </div>
                    <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                        <Tag size={12} className="text-accent" />
                        <span className="text-xs font-semibold text-accent uppercase bg-accent/10 px-2 py-0.5 rounded">
                            {news.category === 'Company' ? '公司新闻' : news.category === 'Industry' ? '行业动态' : '招标公告'}
                        </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-accent transition-colors line-clamp-1">
                        {news.title}
                    </h4>
                    <p className="text-slate-500 text-sm line-clamp-2">
                        {news.summary}
                    </p>
                    </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="px-6 py-3 border border-slate-300 rounded-full text-slate-600 w-full hover:bg-slate-50">查看更多新闻</button>
        </div>
      </div>
    </section>
  );
};

export default News;