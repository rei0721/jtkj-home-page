import React from 'react';
import CountUp from '../UI/CountUp';
import { StatItem } from '../../types';
import ScrollAnimation from '../UI/ScrollAnimation';

const stats: StatItem[] = [
  { id: 1, label: '项目总投资', value: 50, suffix: '亿+', prefix: '¥' },
  { id: 2, label: '公司占地面积', value: 800, suffix: '亩' },
  { id: 3, label: '年销售额', value: 100, suffix: '亿+', prefix: '¥' },
  { id: 4, label: '研发专利', value: 300, suffix: '项+' },
];

const Stats: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Scale Background"
            className="w-full h-full object-cover"
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-slate-900/90 bg-gradient-to-tr from-slate-900 via-slate-900/90 to-blue-900/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         {/* Updated Header with ScrollAnimation */}
         <ScrollAnimation>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">中国光电新材料产业</h2>
                <div className="w-20 h-1 bg-accent mx-auto rounded-full opacity-80 mb-8"></div>
                <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  为国家自主创新、自立自强、实现高质量发展增添助力。<br className="hidden md:block" />
                  面向未来，坚持“艰苦奋斗，创业创新”的精神。
                </p>
            </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollAnimation key={stat.id} delay={index * 150} className="h-full">
                <div 
                    className="h-full group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 text-center"
                >
                
                {/* Number Display with separated styling for prefix/suffix */}
                <div className="flex items-baseline justify-center mb-3 font-bold text-white">
                    {stat.prefix && (
                        <span className="text-xl md:text-3xl mr-1.5 text-accent/90 font-medium">
                            {stat.prefix}
                        </span>
                    )}
                    <span className="text-4xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                        <CountUp end={stat.value} duration={2500} />
                    </span>
                    <span className="text-lg md:text-xl ml-1.5 text-slate-400 font-medium">
                        {stat.suffix}
                    </span>
                </div>
                
                {/* Label */}
                <h3 className="text-slate-300 text-sm md:text-base font-medium uppercase tracking-wider group-hover:text-white transition-colors">
                    {stat.label}
                </h3>

                {/* Decorative accent line on hover */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-accent rounded-full transition-all duration-500 group-hover:w-1/2 opacity-0 group-hover:opacity-100 mb-0"></div>
                </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;