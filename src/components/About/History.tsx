import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { historyEvents } from '@/data/about/historyEvents';

export default function History() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((current) => (current === historyEvents.length - 1 ? 0 : current + 1));
  const prev = () => setActiveIndex((current) => (current === 0 ? historyEvents.length - 1 : current - 1));

  return (
    <div className="animate-fade-in-up">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">发展历程</h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">从初创到全球化，每一步都是跨越</p>
      </div>

      {/* Timeline Navigation */}
      <div className="relative mb-16">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2"></div>
        <div className="relative flex justify-between items-center max-w-4xl mx-auto px-8">
          {historyEvents.map((event, index) => (
            <button
              key={event.year}
              onClick={() => setActiveIndex(index)}
              className="relative z-10 flex flex-col items-center gap-3 group"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                  index === activeIndex
                    ? 'bg-accent text-white scale-110 shadow-lg shadow-accent/30'
                    : index < activeIndex
                      ? 'bg-accent/20 text-accent'
                      : 'bg-white text-slate-400 border-2 border-slate-200 group-hover:border-accent/50'
                }`}
              >
                <span className="text-sm font-bold">{event.year}</span>
              </div>
              <span
                className={`text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                  index === activeIndex ? 'text-accent' : 'text-slate-400'
                }`}
              >
                {event.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <img
              src={historyEvents[activeIndex].image}
              alt={historyEvents[activeIndex].title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span className="text-accent font-bold text-lg">{historyEvents[activeIndex].year}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{historyEvents[activeIndex].title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed">{historyEvents[activeIndex].desc}</p>
          </div>
        </div>

        {/* Nav Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-accent hover:shadow-xl transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-accent hover:shadow-xl transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
