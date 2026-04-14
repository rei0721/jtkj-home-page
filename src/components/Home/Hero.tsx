import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/data/home/heroSlides';
import { useAutoPlaySlider } from '@/hooks/useAutoPlaySlider';

export default function Hero() {
  const { currentSlide, next, prev, pauseAutoPlay, resumeAutoPlay } = useAutoPlaySlider(heroSlides.length);

  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-slate-900 group"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>
      ))}

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pointer-events-none">
        <div className="max-w-4xl animate-fade-in-up pointer-events-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-wide drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">精密智造的无尘空间</span>
            <br />
            产业赋能
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
          精密智造的制造车间，恒温恒湿且高度无尘，每一台设备都在精准运行，提供稳定可靠的精密制造环境。
          </p>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100 focus:outline-none hover:scale-110"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100 focus:outline-none hover:scale-110"
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
