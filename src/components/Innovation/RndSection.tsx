import { useState } from 'react';
import { rndTabs } from '@/data/innovation/rndTabs';
import ScrollAnimation from '@/components/UI/ScrollAnimation';

export default function RndSection() {
  const [activeTab, setActiveTab] = useState(0);

// TODO(components-Innovation-RndSection): 缺失
  return (
    <section id="rnd" className="relative py-24 md:py-32 overflow-hidden transition-all bg-white">
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Research & Development</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">核心技术研发</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
            拥有一批高级工程师和技术专家，在超薄车载盖板光学材料制备、高精度玻璃加工工艺、先进镀膜技术等方面开展持续研发。为公司的产品升级和技术突破提供了核心驱动力

            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-20">
          {rndTabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`relative group px-8 py-3 overflow-hidden font-bold tracking-wide transition-all duration-300 rounded-sm skew-x-[-10deg] ${
                activeTab === idx ? 'text-white shadow-[0_0_20px_rgba(2,132,199,0.4)]' : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
              }`}
            >
              {activeTab === idx && <div className="absolute inset-0 bg-accent w-full h-full skew-x-0"></div>}
              {activeTab !== idx && <div className="absolute inset-0 bg-slate-200 w-0 group-hover:w-full transition-all duration-300"></div>}
              <span className={`relative z-10 block skew-x-[10deg] ${activeTab === idx ? 'scale-105' : 'scale-100'}`}>{tab.label}</span>
            </button>
          ))}
        </div>

        <ScrollAnimation className="w-full">
          <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl h-[500px] md:h-[600px] border border-slate-800">
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/20 rounded-tl-xl z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/20 rounded-br-xl z-20 pointer-events-none"></div>
            {rndTabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <div key={tab.id} className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 z-10 visible' : 'opacity-0 z-0 invisible'}`}>
                  <div className="absolute inset-0 overflow-hidden bg-black">
                    <img src={tab.image} alt={tab.title} className={`w-full h-full object-cover transition-all duration-[1200ms] ease-out will-change-transform ${isActive ? 'scale-100 blur-0 opacity-100' : 'scale-110 blur-md opacity-40'}`} />
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E")' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl z-30">
                    <div className={`transition-all duration-700 delay-200 transform ${isActive ? 'translate-x-0 opacity-100 blur-0' : '-translate-x-12 opacity-0 blur-sm'}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-1.5 h-12 bg-accent shadow-[0_0_15px_rgba(14,165,233,0.8)] rounded-full animate-pulse"></div>
                        <div>
                          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-wide mb-1">{tab.title}</h3>
                          <div className="text-xs text-accent tracking-[0.2em] font-mono uppercase opacity-80">Core Technology _{idx + 1}</div>
                        </div>
                      </div>
                    </div>
                    <div className={`transition-all duration-700 delay-300 transform ${isActive ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm'}`}>
                      <div className="border-l border-slate-700/50 pl-6 ml-1">
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed text-justify max-w-2xl drop-shadow-sm font-light">{tab.desc}</p>
                      </div>
                    </div>
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
  );
}
