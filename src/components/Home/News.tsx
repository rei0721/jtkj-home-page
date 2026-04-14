import { useState } from 'react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateNewsData } from '@/data/news/newsData';
import ScrollAnimation from '@/components/UI/ScrollAnimation';

// 获取分类标题
const getCategoryTitle = (category: string) => {
  switch (category) {
    case 'Company':
      return '公司新闻';
    case 'Industry':
      return '行业动态';
    case 'Tender':
      return '招标公告';
    default:
      return '最新动态';
  }
};

// 新闻大图卡片组件
function FeaturedNewsCard({ news }: { news: ReturnType<typeof generateNewsData>[0] }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link to={`/news/article/${news.id}`} className="group cursor-pointer block">
      <div className="overflow-hidden rounded-xl mb-6 relative h-64 md:h-80 bg-gradient-to-br from-slate-100 to-slate-200">
        {!imageError ? (
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-3xl font-bold text-slate-400">{getCategoryTitle(news.category)}</span>
          </div>
        )}
        <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded text-sm font-semibold shadow-lg">
          {getCategoryTitle(news.category)}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4 text-slate-400 text-sm mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{news.date}</span>
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
          {news.title}
        </h3>
        <p className="text-slate-600 leading-relaxed line-clamp-3">{news.summary}</p>
      </div>
    </Link>
  );
}

export default function News() {
  // 从新闻中心数据源获取并按日期降序排序，取前4条
  const sortedNews = generateNewsData()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
  const featuredNews = sortedNews[0];
  const sideNews = sortedNews.slice(1);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">新闻中心</h2>
              <div className="w-20 h-1 bg-accent rounded-full"></div>
            </div>
            <Link to="/news" className="hidden md:flex items-center text-accent hover:text-sky-700 font-semibold transition-colors">
              查看更多 <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {featuredNews && (
            <ScrollAnimation delay={200}>
              <FeaturedNewsCard news={featuredNews} />
            </ScrollAnimation>
          )}

          <div className="flex flex-col gap-6 justify-between">
            {sideNews.map((news, index) => (
              <ScrollAnimation key={news.id} delay={300 + index * 100} className="w-full">
                <Link to={`/news/article/${news.id}`} className="flex flex-col sm:flex-row gap-4 group cursor-pointer border-b border-slate-100 pb-6 last:border-0 last:pb-0">
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
                    <p className="text-slate-500 text-sm line-clamp-2">{news.summary}</p>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/news" className="inline-block px-6 py-3 border border-slate-300 rounded-full text-slate-600 w-full hover:bg-slate-50">
            查看更多新闻
          </Link>
        </div>
      </div>
    </section>
  );
}
