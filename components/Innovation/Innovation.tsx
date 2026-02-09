import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollAnimation from '../UI/ScrollAnimation';

// R&D Data Configuration
const rndTabs = [
  {
    id: 'materials',
    label: '微纳材料工程',
    title: '微纳材料工程',
    desc: '突破材料微观界限，我们自主研发了行业领先的纳米银线与柔性导电高分子材料。通过精确控制纳米粒子的排列与合成，实现了高透光率与低方阻的完美平衡，为下一代柔性可折叠显示屏提供了核心材料支撑，解决了传统ITO材料易脆裂的痛点。',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'manufacturing',
    label: '智能智造工艺',
    title: '智能智造工艺',
    desc: '全面引入工业4.0智能控制系统，建立了从原材料投入到成品产出的全自动化闭环生产线。利用视觉识别与AI算法实现微米级精度的组装与检测，大幅提升了生产效率与产品一致性，确保每一件产品都达到甚至超越行业标准。',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'lamination',
    label: '全贴合技术',
    title: '全贴合技术',
    desc: '独创真空全贴合工艺，有效解决了传统贴合工艺中容易产生的气泡与黄变问题。该技术大幅减少了显示面板与触控层之间的空气折射，提升了屏幕的通透率与对比度，同时让触控响应更加灵敏迅捷，带来如纸张般自然的视觉与触控体验。',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'testing',
    label: '极限环境测试',
    title: '极限环境测试',
    desc: '建立了符合国际标准的车规级可靠性实验室，能够模拟高温、高湿、强震动、盐雾腐蚀等极端工况。每一款新产品量产前都必须通过超过1000小时的极限环境测试，确保产品在车载、工控等严苛应用场景下的长期稳定性与可靠性。',
    image: 'https://images.unsplash.com/photo-1581093588402-4a1195681407?q=80&w=2000&auto=format&fit=crop'
  }
];

const Innovation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Extract the section ID from the URL path (e.g., /innovation/rnd)
    const pathParts = location.pathname.split('/');
    const sectionId = pathParts[pathParts.length - 1];

    if (sectionId === 'rnd' || sectionId === 'partners') {
        // Use a small timeout to ensure the DOM is fully rendered before scrolling
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                const headerOffset = 100; // Adjust for fixed header
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
          
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
            }
        }, 100);
    } else {
        // Scroll to top if no specific section is targeted
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Hero Section - Matches 'About Us' height and style */}
      <div className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            alt="Technology Innovation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider shadow-sm">
            科技创新
          </h1>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(2,132,199,0.5)]"></div>
          <p className="mt-4 text-slate-100 text-xl md:text-2xl font-light tracking-widest max-w-3xl mx-auto">
            以技术为引擎，驱动光电产业未来
          </p>
        </div>
      </div>

      {/* 2. R&D Section - Tabbed Interface with Tech Transitions */}
      <section id="rnd" className="relative py-24 md:py-32 overflow-hidden transition-all bg-white">
        {/* Subtle Tech Grid Background for the Section */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation>
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Research & Development</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                        核心技术研发
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mb-8"></div>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
                        我们拥有一支由行业专家领衔的顶尖研发团队，每年将营业收入的 8% 投入研发。
                        通过构建全流程数字化研发平台，我们在光电材料配方、微纳加工工艺及智能制造装备等领域
                        取得了多项突破性成果。
                    </p>
                </div>
            </ScrollAnimation>

            {/* Tech-Style Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-20">
                {rndTabs.map((tab, idx) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(idx)}
                        className={`relative group px-8 py-3 overflow-hidden font-bold tracking-wide transition-all duration-300 rounded-sm skew-x-[-10deg] ${
                            activeTab === idx 
                            ? 'text-white shadow-[0_0_20px_rgba(2,132,199,0.4)]' 
                            : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                        }`}
                    >
                        {/* Animated Background for Active Tab */}
                        {activeTab === idx && (
                            <div className="absolute inset-0 bg-accent w-full h-full skew-x-0"></div>
                        )}
                        {/* Hover Effect for Inactive Tabs */}
                        {activeTab !== idx && (
                            <div className="absolute inset-0 bg-slate-200 w-0 group-hover:w-full transition-all duration-300"></div>
                        )}
                        {/* Content (Un-skew text) */}
                        <span className={`relative z-10 block skew-x-[10deg] ${activeTab === idx ? 'scale-105' : 'scale-100'}`}>
                            {tab.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Immersive Tech Display Area */}
            <ScrollAnimation className="w-full">
                <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl h-[500px] md:h-[600px] border border-slate-800">
                    
                    {/* Decorative Tech Lines */}
                    <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/20 rounded-tl-xl z-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/20 rounded-br-xl z-20 pointer-events-none"></div>

                    {rndTabs.map((tab, idx) => {
                        const isActive = activeTab === idx;
                        return (
                            <div
                                key={tab.id}
                                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                                    isActive ? 'opacity-100 z-10 visible' : 'opacity-0 z-0 invisible'
                                }`}
                            >
                                {/* Background Image with Scale & Blur Transition */}
                                <div className="absolute inset-0 overflow-hidden bg-black">
                                    <img 
                                        src={tab.image} 
                                        alt={tab.title}
                                        className={`w-full h-full object-cover transition-all duration-[1200ms] ease-out will-change-transform ${
                                            isActive 
                                            ? 'scale-100 blur-0 opacity-100' 
                                            : 'scale-110 blur-md opacity-40'
                                        }`} 
                                    />
                                    
                                    {/* Tech Overlay: Mesh/Noise Texture */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E")' }}></div>
                                    
                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent"></div>
                                </div>

                                {/* Content Overlay with Staggered Slide In Animation */}
                                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl z-30">
                                    
                                    {/* Title Section - Slide Right */}
                                    <div className={`transition-all duration-700 delay-200 transform ${
                                        isActive ? 'translate-x-0 opacity-100 blur-0' : '-translate-x-12 opacity-0 blur-sm'
                                    }`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            {/* Glowing Bar Indicator */}
                                            <div className="w-1.5 h-12 bg-accent shadow-[0_0_15px_rgba(14,165,233,0.8)] rounded-full animate-pulse"></div>
                                            <div>
                                                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-wide mb-1">
                                                    {tab.title}
                                                </h3>
                                                <div className="text-xs text-accent tracking-[0.2em] font-mono uppercase opacity-80">
                                                    Core Technology _{idx + 1}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Description Section - Slide Up */}
                                    <div className={`transition-all duration-700 delay-300 transform ${
                                        isActive ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm'
                                    }`}>
                                        <div className="border-l border-slate-700/50 pl-6 ml-1">
                                            <p className="text-lg md:text-xl text-slate-200 leading-relaxed text-justify max-w-2xl drop-shadow-sm font-light">
                                                {tab.desc}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Optional Tech Stats or Decor */}
                                    <div className={`transition-all duration-1000 delay-500 mt-8 flex gap-4 opacity-50 ${isActive ? 'opacity-50' : 'opacity-0'}`}>
                                         <div className="h-1 w-12 bg-white/20 rounded-full"></div>
                                         <div className="h-1 w-8 bg-white/20 rounded-full"></div>
                                         <div className="h-1 w-4 bg-white/20 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* 3. Partners Section - Auto Scrolling */}
      <section id="partners" className="relative py-24 bg-white overflow-hidden">
        {/* Background Decoration */}
         <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
                alt="Global Network"
                className="w-full h-full object-cover grayscale"
            />
         </div>

         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">合作伙伴</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        携手全球顶尖企业，共建产业生态圈。我们的产品已广泛应用于全球知名品牌终端。
                    </p>
                </div>
            </ScrollAnimation>

            {/* Marquee Animation Container */}
            <div className="relative w-full overflow-hidden mask-linear-fade py-10">
                 {/* 
                    CSS Animation Setup:
                    We need two sets of logos to create a seamless infinite scroll loop.
                 */}
                 <style>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        display: flex;
                        width: max-content;
                        animation: scroll 40s linear infinite;
                    }
                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                    .mask-linear-fade {
                        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    }
                 `}</style>
                 
                 <div className="animate-scroll gap-16 md:gap-24 px-4">
                    {/* First Set */}
                    {partnerLogos.map((partner, index) => (
                        <div key={`p1-${index}`} className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer">
                            <div className="h-16 w-auto flex items-center justify-center bg-slate-100 px-8 rounded-lg border border-slate-200 shadow-sm min-w-[180px]">
                                <span className={`text-2xl font-black ${partner.color}`}>{partner.name}</span>
                            </div>
                        </div>
                    ))}
                    {/* Second Set (Duplicate for Loop) */}
                    {partnerLogos.map((partner, index) => (
                        <div key={`p2-${index}`} className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer">
                            <div className="h-16 w-auto flex items-center justify-center bg-slate-100 px-8 rounded-lg border border-slate-200 shadow-sm min-w-[180px]">
                                <span className={`text-2xl font-black ${partner.color}`}>{partner.name}</span>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
         </div>
      </section>
    </div>
  );
};

// Mock Data for Partners (Visual Representation)
const partnerLogos = [
    { name: 'HUAWEI', color: 'text-red-600' },
    { name: 'XIAOMI', color: 'text-orange-500' },
    { name: 'BYD', color: 'text-red-700' },
    { name: 'TESLA', color: 'text-red-600' },
    { name: 'SAMSUNG', color: 'text-blue-700' },
    { name: 'GE', color: 'text-blue-600' },
    { name: 'SIEMENS', color: 'text-cyan-700' },
    { name: 'BOE', color: 'text-blue-500' },
    { name: 'BOSCH', color: 'text-red-600' },
    { name: 'HONEYWELL', color: 'text-red-500' },
];

export default Innovation;