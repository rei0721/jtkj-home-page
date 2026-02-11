import { useState } from 'react';
import { Activity } from 'lucide-react';
import { Scenario } from '@/types';
import ScrollAnimation from '@/components/UI/ScrollAnimation';

interface ScenarioDisplayProps {
  scenarios: Scenario[];
}

export default function ScenarioDisplay({ scenarios }: ScenarioDisplayProps) {
  const [activeScenario, setActiveScenario] = useState(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">应用场景</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
            <p className="text-slate-500 max-w-2xl mx-auto">针对不同行业痛点，提供深度定制化的场景解决方案</p>
          </div>
        </ScrollAnimation>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-3/4 relative overflow-hidden bg-slate-900 group">
            {scenarios.map((scenario, index) => (
              <div key={scenario.id} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activeScenario === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <img src={scenario.image} alt={scenario.title} className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${activeScenario === index ? 'scale-110' : 'scale-100'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl z-20">
                  <div className={`transform transition-all duration-700 delay-300 ${activeScenario === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <p className="text-slate-100 leading-relaxed text-lg md:text-xl font-light bg-black/20 backdrop-blur-md p-6 rounded-xl border-l-4 border-accent shadow-lg">{scenario.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/4 flex flex-row lg:flex-col bg-slate-50 border-l border-slate-100 overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
            {scenarios.map((scenario, index) => (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(index)}
                className={`flex-1 lg:flex-none flex items-center justify-between p-6 md:p-8 text-left transition-all duration-300 outline-none border-b lg:border-b-0 lg:border-l-4 border-slate-200 lg:border-transparent min-w-[160px] lg:min-w-0 ${
                  activeScenario === index ? 'bg-white text-accent lg:border-l-accent shadow-sm z-10' : 'text-slate-500 hover:bg-white hover:text-slate-700'
                }`}
              >
                <div>
                  <span className={`block font-bold text-lg md:text-xl transition-transform duration-300 ${activeScenario === index ? 'translate-x-1' : ''}`}>{scenario.label}</span>
                  <span className="text-xs font-mono uppercase opacity-50 mt-1 block tracking-wider">SCENARIO 0{index + 1}</span>
                </div>
                {activeScenario === index && <Activity size={20} className="hidden lg:block animate-pulse" />}
              </button>
            ))}
            <div className="hidden lg:block flex-grow bg-slate-50/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
