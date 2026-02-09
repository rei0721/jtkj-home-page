import React from 'react';
import { Cpu, Settings, ShieldCheck, HeartHandshake } from 'lucide-react';
import ScrollAnimation from '../UI/ScrollAnimation';

const Values: React.FC = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 flex items-center bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
            alt="Technology Background" 
            className="w-full h-full object-cover"
         />
         {/* Strong dark overlay to ensure text readability against the complex background */}
         <div className="absolute inset-0 bg-slate-900/90 bg-gradient-to-b from-slate-900/95 via-slate-900/85 to-slate-900/95"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                核心价值主张
                </h2>
                <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    以自主创新为动力，以高端制造为基础，<br className="hidden md:block" />
                    致力于为客户提供卓越品质与完善服务。
                </p>
            </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Autonomous Innovation */}
          <ScrollAnimation delay={100} className="h-full">
            <div className="h-full group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 text-center">
                {/* Top highlight border on hover */}
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/20 group-hover:ring-accent/50">
                <Cpu className="text-blue-400 group-hover:text-accent transition-colors duration-300" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">自主创新</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                坚持核心技术自研，年研发投入超5亿元，构建深厚技术护城河。
                </p>
            </div>
          </ScrollAnimation>

          {/* Card 2: High-end Manufacturing */}
          <ScrollAnimation delay={200} className="h-full">
            <div className="h-full group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 text-center">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/20 group-hover:ring-accent/50">
                <Settings className="text-blue-400 group-hover:text-accent transition-colors duration-300" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">高端制造</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                引入工业4.0智能产线，全流程自动化控制，打造标杆级数字化工厂。
                </p>
            </div>
          </ScrollAnimation>

          {/* Card 3: Reliable Quality */}
          <ScrollAnimation delay={300} className="h-full">
            <div className="h-full group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 text-center">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/20 group-hover:ring-accent/50">
                <ShieldCheck className="text-blue-400 group-hover:text-accent transition-colors duration-300" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">可靠品质</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                通过IATF16949车规认证，建立全生命周期质量追溯体系，品质坚如磐石。
                </p>
            </div>
          </ScrollAnimation>

          {/* Card 4: Perfect Service */}
          <ScrollAnimation delay={400} className="h-full">
            <div className="h-full group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 text-center">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/20 group-hover:ring-accent/50">
                <HeartHandshake className="text-blue-400 group-hover:text-accent transition-colors duration-300" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">完善服务</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                构建全球化服务网络，24/7快速响应机制，做您最值得信赖的合作伙伴。
                </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Values;