import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { NewsItem } from '../../types';

// Mock Data Generator
const generateNewsData = (): NewsItem[] => {
  const categories = ['Company', 'Industry', 'Tender'];
  const data: NewsItem[] = [];
  
  // Create specific featured items
  data.push({
    id: 1,
    title: '我司荣获“国家级高新技术企业”与“专精特新”小巨人称号',
    date: '2024-05-20',
    category: 'Company',
    summary: '近日，经过严格的评审与公示，我司凭借在光电新材料领域的持续创新与卓越贡献，成功入选国家级专精特新“小巨人”企业名单。这是对公司技术实力和市场表现的高度认可...',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
  });
  
  data.push({
    id: 2,
    title: '2024全球光电产业高峰论坛：探索新材料的无限可能',
    date: '2024-05-18',
    category: 'Industry',
    summary: '随着智能座舱的普及，多屏化、大屏化成为趋势。本次论坛汇聚了全球顶尖专家，共同探讨光电新材料在未来的应用前景...',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop',
  });

  data.push({
    id: 3,
    title: '【招标公告】年产5000万片智能触控模组生产线设备采购项目',
    date: '2024-05-15',
    category: 'Tender',
    summary: '本项目已具备招标条件，现对该项目进行公开招标，欢迎符合资格条件的供应商投标。项目涵盖自动化贴合机、AOI检测设备等...',
    image: 'https://images.unsplash.com/photo-1581094794320-c914654c8200?q=80&w=800&auto=format&fit=crop',
  });

  // Generate fillers
  for (let i = 4; i <= 20; i++) {
    const cat = categories[i % 3];
    data.push({
      id: i,
      title: cat === 'Company' 
        ? `光电新材料召开2024年第${Math.ceil(i/3)}季度经营分析会议` 
        : cat === 'Industry' 
        ? `行业洞察：光电显示材料技术路线演进分析报告（第${i}期）`
        : `【招标公示】第${i}期原材料及精密仪器采购项目中标结果公示`,
      date: `2024-0${Math.ceil(Math.random() * 4)}-${10 + i}`,
      category: cat as 'Company' | 'Industry' | 'Tender',
      summary: '本报讯，为了进一步提升公司核心竞争力，加强技术研发投入，公司决定启动新一轮的技术攻关计划，预计投入资金...',
      image: `https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=800&auto=format&fit=crop`,
    });
  }
  return data;
};

const allNews = generateNewsData();

const NewsCenter: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  
  // Mapping URL params to internal category filters
  // 'latest' implies no filter (show all)
  const activeTab = category || 'latest';
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Tabs Configuration
  const tabs = [
    { id: 'latest', label: '最新动态' },
    { id: 'company', label: '公司新闻' },
    { id: 'industry', label: '行业动态' },
    { id: 'tenders', label: '招标公告' }, // Mapping 'tenders' from URL to 'Tender' category
  ];

  // Filtering Logic
  const filteredNews = allNews.filter(item => {
    if (activeTab === 'latest') return true;
    if (activeTab === 'tenders') return item.category === 'Tender';
    return item.category.toLowerCase() === activeTab;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const displayedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const handleTabClick = (tabId: string) => {
    navigate(`/news/${tabId}`);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 1. Top Hero Section */}
      <div className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop" 
            alt="News Center Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 bg-gradient-to-b from-transparent to-slate-900/90"></div>
        </div>
        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider">
            新闻中心
          </h1>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="mt-4 text-slate-200 text-lg md:text-xl max-w-2xl mx-auto px-4">
            聚焦企业动态，洞察行业趋势，发布权威资讯
          </p>
        </div>
      </div>

      {/* 2. Tab Navigation */}
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
                    isActive 
                      ? 'text-accent font-bold' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-t-full transition-all duration-300"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. News Grid Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Results Info Removed */}

        {displayedNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {displayedNews.map((item) => (
                <div 
                    key={item.id} 
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full hover:-translate-y-2"
                >
                    {/* Cover Image */}
                    <div className="relative h-72 overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 shadow-md uppercase">
                            {item.category === 'Tender' ? '招标公告' : item.category === 'Industry' ? '行业动态' : '公司新闻'}
                        </div>
                    </div>

                    {/* Content */}
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
                </div>
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

        {/* 4. Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                currentPage === 1
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-600 hover:bg-white hover:text-accent hover:border-accent'
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                  currentPage === page
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'bg-transparent text-slate-600 hover:bg-white hover:text-accent'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                currentPage === totalPages
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-600 hover:bg-white hover:text-accent hover:border-accent'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCenter;