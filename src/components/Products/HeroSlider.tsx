import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAutoPlaySlider } from '@/hooks/useAutoPlaySlider';

interface HeroSliderProps {
  title: string;
  subtitle: string;
  description: string;
  heroSlides: string[];
}

export default function HeroSlider({ title, subtitle, description, heroSlides }: HeroSliderProps) {
  const { currentSlide, next, prev, goTo, pauseAutoPlay, resumeAutoPlay } = useAutoPlaySlider(heroSlides.length);

  return (
    <div
      className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden bg-slate-900 group"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={slide} alt={`${title} slide ${index + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20"></div>
        </div>
      ))}

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-4xl text-left animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-lg md:text-xl">{subtitle}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 shadow-sm tracking-tight leading-tight">{title}</h1>
          <div className="border-l-4 border-accent pl-6 md:pl-8 py-2">
            <p className="text-xl md:text-2xl text-slate-100 font-light leading-relaxed drop-shadow-md whitespace-pre-line">{description}</p>
          </div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100 focus:outline-none hover:scale-110">
        <ChevronLeft size={32} />
      </button>
      <button onClick={next} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100 focus:outline-none hover:scale-110">
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-10 bg-accent' : 'w-2 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
