import { Target, Heart, Zap } from 'lucide-react';

const cultureCards = [
  {
    icon: Target,
    title: '理念',
    desc: '产业报国，服务社会',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Heart,
    title: '原则',
    desc: '市场是企业的方向，质量是企业的生命',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
  },
  {
    icon: Zap,
    title: '精神',
    desc: '艰苦奋斗，创业创新',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
  },
];

export default function Culture() {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">企业文化</h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">价值引领发展，文化凝聚力量</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cultureCards.map((card) => (
          <div
            key={card.title}
            className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${card.color}`}></div>
            <div
              className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
            >
              <card.icon className={`w-8 h-8 bg-gradient-to-r ${card.color} bg-clip-text`} style={{ color: 'transparent', stroke: 'currentColor' }} />
              <card.icon className={`w-8 h-8 absolute`} style={{ color: card.color.includes('blue') ? '#3b82f6' : card.color.includes('rose') ? '#f43f5e' : '#f59e0b' }} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
