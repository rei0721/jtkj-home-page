import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Flag } from 'lucide-react';
import ScrollAnimation from '../UI/ScrollAnimation';

// Type definition for Party News
interface PartyNewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
}

// Mock Data Generator for Party Section
const generatePartyData = (): PartyNewsItem[] => {
  const data: PartyNewsItem[] = [
    {
      id: 1,
      title: '不忘初心，牢记使命 —— 公司党委组织参观红色教育基地',
      date: '2024-06-01',
      summary: '为庆祝中国共产党成立103周年，深入学习贯彻党的二十大精神，公司党委组织全体党员干部前往革命圣地开展主题党日活动。通过重温入党誓词、参观纪念馆，进一步坚定了理想信念...',
      image: 'https://images.unsplash.com/photo-1563804807490-b9a399f925be?q=80&w=1600&auto=format&fit=crop', // Red/Official looking image
    },
    {
      id: 2,
      title: '党建引领高质量发展：公司召开2024年党建工作部署会',
      date: '2024-05-15',
      summary: '会议强调，要坚持党对国有企业的领导不动摇，将党建工作深度融入公司生产经营全过程。充分发挥党支部的战斗堡垒作用和党员的先锋模范作用，以高质量党建引领企业高质量发展...',
      image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 3,
      title: '开展“红旗班组”评选活动，激发一线员工干事创业热情',
      date: '2024-04-20',
      summary: '为了进一步弘扬劳模精神、劳动精神和工匠精神，公司工会联合党委在全厂范围内开展“红旗班组”评选活动。本次活动旨在表彰在技术攻关、降本增效方面表现突出的基层集体...',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 4,
      title: '落实党风廉政建设责任制，营造风清气正的政治生态',
      date: '2024-03-10',
      summary: '公司纪委组织召开党风廉政建设专题会议，签署年度党风廉政建设责任书。会议要求全体管理人员要严于律己，筑牢思想防线，构建亲清政商关系，为公司健康发展提供坚强纪律保障...',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop',
    }
  ];

  // Fillers
  for (let i = 5; i <= 20; i++) {
    data.push({
      id: i,
      title: `深入学习贯彻习近平新时代中国特色社会主义思想专题讲座（第${i-4}期）`,
      date: `2024-02-${10 + (i % 15)}`,
      summary: '本期讲座特邀省委党校教授进行授课，围绕新发展理念、构建新发展格局等内容进行了深入浅出的讲解。全体党员认真听讲，并结合工作实际展开了热烈讨论...',
      image: `https://images.unsplash.com/photo-${1532375810709 + i}?q=80&w=1600&auto=format&fit=crop`,
    });
  }
  return data;
};

const partyNewsData = generatePartyData();

const Party: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination Logic
  const totalPages = Math.ceil(partyNewsData.length / itemsPerPage);
  const displayedItems = partyNewsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Red Theme, Matching 'About Us' Height */}
      <div className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Red-themed abstract background or relevant image */}
          <img 
            src="https://images.unsplash.com/photo-1555431189-064ad78456a6?q=80&w=2070&auto=format&fit=crop" 
            alt="Party Building" 
            className="w-full h-full object-cover"
          />
          {/* Strong Red Overlay */}
          <div className="absolute inset-0 bg-red-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center animate-fade-in-up px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-widest shadow-sm">
            党建工作
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full mb-8 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
          <p className="text-yellow-50 text-xl md:text-2xl font-light tracking-widest">
            不忘初心 牢记使命
          </p>
        </div>
      </div>

      {/* 2. Main Content List */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            
            {displayedItems.map((item, index) => (
                <ScrollAnimation key={item.id} delay={index * 100}>
                    <div className="group flex flex-col md:flex-row gap-8 lg:gap-16 py-12 border-b border-slate-200 last:border-0 hover:bg-slate-50/30 transition-colors duration-300">
                        
                        {/* Left: Image (Rectangular, sharp edges) - Adjusted width to 35% and height for coordination */}
                        <div className="w-full md:w-[35%] h-64 md:h-72 relative overflow-hidden bg-slate-100 flex-shrink-0">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Date Badge over Image - Keeping consistent design but simpler */}
                            <div className="absolute top-0 left-0 bg-red-700 text-white px-5 py-3 shadow-md z-10">
                                <div className="flex flex-col items-center leading-tight">
                                    <span className="text-2xl font-bold">{item.date.split('-')[2]}</span>
                                    <span className="text-xs opacity-90">{item.date.split('-')[0]}.{item.date.split('-')[1]}</span>
                                </div>
                            </div>
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-300"></div>
                        </div>

                        {/* Right: Content - Increased width to 65% to fill space */}
                        <div className="w-full md:w-[65%] flex flex-col justify-center py-2 md:py-4">
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-sm font-bold tracking-wide">
                                    党建动态
                                </span>
                            </div>
                            
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-red-700 transition-colors">
                                <a href="#" className="hover:underline decoration-red-700/30 underline-offset-4">
                                    {item.title}
                                </a>
                            </h2>
                            
                            <p className="text-lg text-slate-600 leading-relaxed mb-8 line-clamp-3">
                                {item.summary}
                            </p>

                            <div className="mt-auto pt-6 flex items-center justify-between">
                                <div className="flex items-center text-slate-400">
                                    <Calendar size={18} className="mr-2" />
                                    <span>发布时间：{item.date}</span>
                                </div>
                                <button className="flex items-center text-red-700 font-semibold group-hover:underline underline-offset-4 decoration-red-200 transition-all">
                                    阅读全文 <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            ))}

            {/* Pagination (Red Theme) */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-20">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${
                            currentPage === 1
                            ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                            : 'border-slate-300 text-slate-600 hover:bg-white hover:text-red-600 hover:border-red-600'
                        }`}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                            currentPage === page
                                ? 'bg-red-700 text-white shadow-lg shadow-red-700/30 scale-110'
                                : 'bg-transparent text-slate-600 hover:text-red-700 hover:bg-red-50'
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${
                            currentPage === totalPages
                            ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                            : 'border-slate-300 text-slate-600 hover:bg-white hover:text-red-600 hover:border-red-600'
                        }`}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            )}
      </div>
    </div>
  );
};

export default Party;