import React, { useEffect, useState, useCallback } from 'react';
import { Target, Heart, Zap, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

// --- Sub-Components ---

const CompanyIntro: React.FC = () => (
  <div className="animate-fade-in-up">
    <div className="mb-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">致力成为全球领先的光电新材料服务商</h2>
      <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify md:text-center">
        光电新材料股份有限公司成立于2010年，是一家专注于光电显示领域核心材料研发、生产与销售的高新技术企业。
        公司坐落于深圳高新技术产业园，占地面积超800亩，拥有国际一流的千级无尘净化车间和全自动化生产线。
        我们始终秉承“技术驱动，品质为先”的经营理念，为全球消费电子、智能汽车、工控医疗等领域的客户提供
        具有竞争力的触控显示一体化解决方案。
      </p>
    </div>
    
    {/* Bottom Image/Video Area */}
    <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
        <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop" 
            alt="Company Office Environment" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
             <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-all">
                 <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
             </div>
        </div>
        <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-2">智能化办公环境</h3>
            <p className="opacity-90">激发创新灵感，汇聚行业精英</p>
        </div>
    </div>
  </div>
);

const History: React.FC = () => {
  const events = [
    { year: '2010', title: '公司成立', desc: '光电新材料股份有限公司在深圳正式注册成立，确立光电材料研发方向。', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000' },
    { year: '2015', title: '深交所上市', desc: '完成股份制改革，并在深圳证券交易所创业板成功上市，股票代码00XXXX。', image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000' },
    { year: '2018', title: '全球化布局', desc: '设立越南、印度生产基地，并成立美国、德国研发中心，开启全球化战略。', image: 'https://images.unsplash.com/photo-1526304640152-d4619684e884?q=80&w=1000' },
    { year: '2023', title: '技术突破', desc: '自主研发的柔性纳米银触控材料实现量产，打破国外技术垄断。', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((current) => (current === events.length - 1 ? 0 : current + 1));
  const prev = () => setActiveIndex((current) => (current === 0 ? events.length - 1 : current - 1));

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
         <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">发展历程</h2>
         <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
      </div>

      {/* Timeline Navigation (Desktop) */}
      <div className="relative mb-16 mx-auto max-w-4xl hidden md:block">
          {/* Progress Line Background */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full"></div>
          {/* Active Progress */}
          <div 
             className="absolute top-1/2 left-0 h-1 bg-accent -translate-y-1/2 rounded-full transition-all duration-500 ease-in-out"
             style={{ width: `${(activeIndex / (events.length - 1)) * 100}%` }}
          ></div>

          {/* Points */}
          <div className="relative flex justify-between w-full">
             {events.map((item, index) => (
                 <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="group relative focus:outline-none"
                 >
                    <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all duration-300 z-10 bg-white ${
                        index <= activeIndex ? 'border-accent scale-110' : 'border-slate-300'
                    }`}>
                        {index <= activeIndex && <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>}
                    </div>
                    <div className={`absolute top-10 left-1/2 transform -translate-x-1/2 font-bold text-sm transition-colors duration-300 ${
                        index === activeIndex ? 'text-accent' : 'text-slate-400 group-hover:text-slate-600'
                    }`}>
                        {item.year}
                    </div>
                 </button>
             ))}
          </div>
      </div>

      {/* Mobile Year Select (Row) */}
      <div className="flex md:hidden justify-between mb-8 overflow-x-auto pb-4 gap-2 px-1">
          {events.map((item, index) => (
              <button
                 key={index}
                 onClick={() => setActiveIndex(index)}
                 className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors border ${
                    index === activeIndex ? 'bg-accent text-white border-accent shadow-md' : 'bg-white text-slate-500 border-slate-200'
                 }`}
              >
                 {item.year}
              </button>
          ))}
      </div>

      {/* Main Content Area */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[500px] border border-slate-100">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-full -z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-full relative z-10">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div key={activeIndex} className="w-full h-full animate-fade-in-up">
                      <img 
                          src={events[activeIndex].image} 
                          alt={events[activeIndex].title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10"></div>
                  </div>
              </div>

              {/* Text Section */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                   <div className="flex items-center justify-between mb-6">
                       <span className="text-6xl md:text-8xl font-black text-slate-100 absolute top-4 right-4 lg:top-8 lg:right-8 select-none -z-10">
                           {events[activeIndex].year}
                       </span>
                       <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wider">
                           MILESTONE
                       </span>
                   </div>
                   
                   <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        <span key={`title-${activeIndex}`} className="animate-fade-in-up block">
                            {events[activeIndex].title}
                        </span>
                   </h3>
                   
                   <div className="w-12 h-1 bg-slate-200 mb-6"></div>
                   
                   <p key={`desc-${activeIndex}`} className="text-lg text-slate-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                       {events[activeIndex].desc}
                   </p>

                   {/* Controls inside Text Area for Desktop */}
                   <div className="flex gap-4 mt-10">
                       <button 
                           onClick={prev}
                           className="p-4 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-accent hover:border-accent transition-all duration-300 group"
                           aria-label="Previous Year"
                       >
                           <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                       </button>
                       <button 
                           onClick={next}
                           className="p-4 rounded-full bg-slate-900 text-white hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-accent/30 group"
                           aria-label="Next Year"
                       >
                           <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                   </div>
              </div>
          </div>
      </div>
    </div>
  );
};

const Culture: React.FC = () => {
    const cards = [
        {
            icon: <Target className="w-12 h-12 text-blue-500" />,
            title: "企业理念",
            subtitle: "Philosophy",
            content: "产业报国，服务社会",
            desc: "以高度的社会责任感，推动国家光电产业发展。",
            bg: "bg-blue-50"
        },
        {
            icon: <Heart className="w-12 h-12 text-red-500" />,
            title: "企业原则",
            subtitle: "Principle",
            content: "市场是方向，质量是生命",
            desc: "紧跟市场需求导向，视产品质量为企业生存之本。",
            bg: "bg-red-50"
        },
        {
            icon: <Zap className="w-12 h-12 text-yellow-500" />,
            title: "企业精神",
            subtitle: "Spirit",
            content: "艰苦奋斗，创业创新",
            desc: "保持创业初心，勇于突破舒适区，持续技术创新。",
            bg: "bg-yellow-50"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">企业文化</h2>
                <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group">
                        <div className={`w-20 h-20 rounded-full ${card.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            {card.icon}
                        </div>
                        <div className="mb-2 text-slate-400 text-sm font-semibold uppercase tracking-wider">{card.subtitle}</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                        <div className="text-xl font-bold text-accent mb-4 pb-4 border-b border-slate-100">
                            {card.content}
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            {card.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Structure: React.FC = () => (
    <div className="max-w-5xl mx-auto text-center">
        <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">组织架构</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="inline-block p-8 bg-white shadow-2xl rounded-2xl border border-slate-100">
            {/* Simple CSS Tree for Demo */}
            <div className="flex flex-col items-center">
                <div className="px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-xl shadow-lg mb-8 relative">
                    董事会
                    <div className="absolute bottom-[-32px] left-1/2 w-0.5 h-8 bg-slate-300"></div>
                </div>
                <div className="px-8 py-4 bg-slate-800 text-white rounded-lg font-bold text-lg shadow-lg mb-8 relative">
                    总经理
                    <div className="absolute top-[-32px] left-1/2 w-0.5 h-8 bg-slate-300"></div>
                    <div className="absolute bottom-[-32px] left-1/2 w-0.5 h-8 bg-slate-300"></div>
                </div>
                {/* Branches */}
                <div className="relative w-full max-w-3xl flex justify-between pt-8 border-t-2 border-slate-300">
                    {/* Vertical connectors for children */}
                    <div className="absolute top-[-32px] left-1/2 w-0.5 h-8 bg-slate-300"></div>
                    
                    {['研发中心', '制造中心', '营销中心', '财务中心', '行政人事'].map((dept, i) => (
                        <div key={i} className="flex flex-col items-center relative">
                            <div className="absolute top-[-34px] left-1/2 w-0.5 h-[34px] bg-slate-300"></div>
                            <div className="px-4 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-semibold shadow-sm hover:border-accent hover:text-accent transition-colors w-24 md:w-32 text-sm md:text-base">
                                {dept}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <p className="mt-12 text-slate-500 max-w-2xl mx-auto">
            公司建立了完善的现代企业治理结构，各部门协同高效运转，确保公司战略目标的达成。
        </p>
    </div>
);

const Bases: React.FC = () => {
    const slides = [
        { 
            url: "https://images.unsplash.com/photo-1565514020176-db7936a73866?q=80&w=1920&auto=format&fit=crop", 
            title: "自动化贴合产线",
            desc: "引入行业领先的全自动贴合设备，在千级无尘环境下作业，贴合精度达微米级，确保产品零气泡、零瑕疵交付。"
        },
        { 
            url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop", 
            title: "智能立体仓库",
            desc: "配备AGV自动导引车与WMS仓储管理系统，实现原材料入库到成品出库的全流程自动化管理，提升物流效率300%。"
        },
        { 
            url: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1920&auto=format&fit=crop", 
            title: "精密检测实验室",
            desc: "拥有CNAS认证实验室，配置扫描电镜、高低温湿热试验箱等尖端检测设备，为产品质量保驾护航。"
        },
        { 
            url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1920&auto=format&fit=crop", 
            title: "研发试制中心",
            desc: "独立的研发试制产线，快速响应客户定制化需求，从打样到量产周期缩短至行业平均水平的50%。"
        },
        { 
            url: "https://images.unsplash.com/photo-1537462713505-9e69146c9868?q=80&w=1920&auto=format&fit=crop", 
            title: "无尘净化车间",
            desc: "严格按照ISO 14644标准设计的Class 1000级净化车间，采用多重空气过滤系统，打造医疗级洁净生产环境。"
        },
        { 
            url: "https://images.unsplash.com/photo-1622675363311-ac6016d97d96?q=80&w=1920&auto=format&fit=crop", 
            title: "总装测试线",
            desc: "柔性化总装测试线，支持多品种、小批量混线生产，配备AOI自动光学检测，确保每一台出厂产品品质卓越。"
        }
    ];

    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">基地展示</h2>
                <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
            
            <div 
                className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl group"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                {/* Slides Container */}
                <div 
                    className="flex transition-transform duration-700 ease-out h-full" 
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                            <img 
                                src={slide.url} 
                                alt={slide.title} 
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                            
                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white transform transition-all duration-500">
                                <div className={`transition-all duration-700 delay-200 ${current === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    <div className="flex items-center gap-2 text-accent mb-3">
                                        <MapPin size={20} />
                                        <span className="text-sm font-bold uppercase tracking-wider">Manufacturing Base</span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h3>
                                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
                                        {slide.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button 
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/30 text-white p-3 md:p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
                >
                    <ChevronLeft size={32} />
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/30 text-white p-3 md:p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
                >
                    <ChevronRight size={32} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-6 right-8 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                current === index ? 'w-8 bg-accent' : 'w-4 bg-white/50 hover:bg-white'
                            }`}
                        />
                    ))}
                </div>
            </div>
            
            {/* Thumbnails (Optional visual aid below main slider) */}
            <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-4">
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`cursor-pointer rounded-lg overflow-hidden h-20 relative transition-all duration-300 ${current === index ? 'ring-2 ring-accent ring-offset-2' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Main Layout Component ---

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const location = useLocation();

  const navLinks = [
    { title: '公司简介', id: 'intro' },
    { title: '发展历程', id: 'history' },
    { title: '组织架构', id: 'structure' },
    { title: '企业文化', id: 'culture' },
    { title: '基地展示', id: 'bases' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        // Offset calculation: Main Header (80px) + SubNav (approx 60-70px)
        const headerOffset = 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        // We set active manually on click for immediate feedback, 
        // though scroll listener will also eventually set it.
        setActiveSection(id);
    }
  };

  // Scroll to section based on URL path change
  useEffect(() => {
    // Extract the section ID from the URL path (e.g., /about/history -> history)
    const pathParts = location.pathname.split('/');
    const sectionId = pathParts[pathParts.length - 1];
    
    // Check if the URL segment matches one of our defined section IDs
    const targetSection = navLinks.find(link => link.id === sectionId);

    if (targetSection) {
        // Use a small timeout to ensure the page has rendered/layout is settled
        setTimeout(() => {
            scrollToSection(targetSection.id);
        }, 100);
    } else if (location.pathname === '/about' || location.pathname === '/about/') {
        // If just /about, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      // Trigger point slightly down the page to capture sections entering viewport
      const scrollPosition = window.scrollY + 200; 

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
            const { offsetTop, offsetHeight } = element;
            // A section is active if our scroll trigger is within its bounds
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(link.id);
            }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Top Hero Section */}
      <div className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Headquarter" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider">
            关于我们
          </h1>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-200 text-lg">About OptoTech</p>
        </div>
      </div>

      {/* 2. Sub-Navigation (Sticky removed) */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start overflow-x-auto no-scrollbar gap-12 md:gap-16">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative py-6 text-lg md:text-xl font-medium transition-all duration-300 outline-none whitespace-nowrap ${
                    isActive 
                      ? 'text-accent font-bold' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {link.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-t-full transition-all duration-300"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Main Content Area - Stacked Layout */}
      <div>
         <section id="intro" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <CompanyIntro />
            </div>
         </section>

         <section id="history" className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <History />
            </div>
         </section>

         <section id="structure" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Structure />
            </div>
         </section>

         <section id="culture" className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Culture />
            </div>
         </section>

         <section id="bases" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Bases />
            </div>
         </section>
      </div>
    </div>
  );
};

export default About;