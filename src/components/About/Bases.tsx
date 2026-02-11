import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { basesSlides } from '@/data/about/basesSlides';
import { useAutoPlaySlider } from '@/hooks/useAutoPlaySlider';

export default function Bases() {
  const { currentSlide, next, prev, goTo, pauseAutoPlay, resumeAutoPlay } = useAutoPlaySlider(basesSlides.length);

  return (
    <div className="animate-fade-in-up">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">基地展示</h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">全球化产能布局，智造赋能未来</p>
      </div>

      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl group"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        {/* Slides */}
        <div className="relative h-[400px] md:h-[600px]">
          {basesSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Slide Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-center gap-2 text-accent mb-3">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wider uppercase">设施展示</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">{slide.title}</h3>
                <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nav Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {basesSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-accent' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
