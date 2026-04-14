import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { generateNewsData } from '@/data/news/newsData';
import { usePagination } from '@/hooks/usePagination';
import PageHero from '@/components/Layout/PageHero';
import Pagination from '@/components/UI/Pagination';

const allNews = generateNewsData();

const tabs = [
  { id: 'latest', label: '最新动态' },
  { id: 'company', label: '公司新闻' },
  { id: 'industry', label: '行业动态' },
  { id: 'tenders', label: '招标公告' },
];

// 获取分类标题
const getCategoryTitle = (category: string) => {
  switch (category) {
    case 'Tender':
      return '招标公告';
    case 'Industry':
      return '行业动态';
    default:
      return '公司新闻';
  }
};

// 新闻卡片组件
function NewsCard({ item }: { item: typeof allNews[0] }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      to={`/news/article/${item.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full hover:-translate-y-2"
    >
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        {!imageError ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-3xl font-bold text-slate-400">
              {getCategoryTitle(item.category)}
            </span>
          </div>
        )}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 shadow-md uppercase">
          {getCategoryTitle(item.category)}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center text-slate-400 text-sm mb-4">
          <Calendar size={16} className="mr-2 text-accent" />
          <span>{item.date}</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-accent transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-slate-600 text-base leading-relaxed mb-8 line-clamp-3 flex-grow">
          {item.summary}
        </p>
        <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
          <span className="text-accent text-base font-semibold group-hover:underline flex items-center">
            阅读详情 <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </span>
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-accent group-hover:text-white transition-colors">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function NewsCenter() {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  const activeTab = category || 'latest';

  const filteredNews = useMemo(() => {
    return allNews.filter((item) => {
      if (activeTab === 'latest') return true;
      if (activeTab === 'tenders') return item.category === 'Tender';
      return item.category.toLowerCase() === activeTab;
    });
  }, [activeTab]);

  const { currentPage, totalPages, displayedItems, goToPage, resetPage } = usePagination(filteredNews, 6);

  useEffect(() => {
    resetPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const handleTabClick = (tabId: string) => {
    navigate(`/news/${tabId}`);
  };

  const handlePageChange = (page: number) => {
    goToPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <PageHero
        title="新闻中心"
        subtitle="聚焦企业动态，洞察行业趋势，发布权威资讯"
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
        overlayClassName="bg-slate-900/70 bg-gradient-to-b from-transparent to-slate-900/90"
      />

      {/* Tab Navigation */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start overflow-x-auto no-scrollbar gap-12 md:gap-16">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative py-6 text-lg md:text-xl font-medium transition-all duration-300 outline-none whitespace-nowrap ${
                    isActive ? 'text-accent font-bold' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-t-full transition-all duration-300"></span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {displayedItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">暂无相关资讯</h3>
            <p className="text-slate-500">该分类下暂时没有发布内容，请稍后再试。</p>
          </div>
        )}

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}
