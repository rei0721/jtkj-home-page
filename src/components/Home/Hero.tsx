import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { heroSlides } from '@/data/home/heroSlides';
import { useAutoPlaySlider } from '@/hooks/useAutoPlaySlider';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const { currentSlide, next, prev, pauseAutoPlay, resumeAutoPlay } = useAutoPlaySlider(heroSlides.length);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    pauseAutoPlay(); // Pause carousel autoplay when modal opens
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resumeAutoPlay(); // Resume carousel autoplay when modal closes
  };

  // Effect to control video playback when modal opens/closes
  useEffect(() => {
    const videoElement = videoRef.current;
    if (isModalOpen && videoElement) {
      videoElement.play().catch(error => console.error("Error attempting to play video:", error));
      // Attempt to go fullscreen with user interaction
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable full-screen video:", err);
        });
      }
    } else if (!isModalOpen && videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0; // Optional: reset video to start when closed
      // Exit fullscreen if currently in fullscreen mode
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }, [isModalOpen]);

  const currentHeroSlide = heroSlides[currentSlide];
  const isVideoSlide = currentHeroSlide && currentHeroSlide.video;

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
          {slide.video ? (
            <video
              src={slide.video}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        </div>
      ))}

      {isVideoSlide && currentSlide === 0 && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <button
            onClick={handleOpenModal}
            className="pointer-events-auto p-4 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-300 focus:outline-none transform hover:scale-110"
            aria-label="Play Video"
          >
            <Play size={48} fill="white" />
          </button>
        </div>
      )}

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pointer-events-none">
        <div className="max-w-4xl animate-fade-in-up pointer-events-auto">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute inset-0'
              }`}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-wide drop-shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">{slide.title}</span>
                <br />
                {slide.subtitle}
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
                {slide.description}
              </p>
            </div>
          ))}
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

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-lg z-[9999] flex items-center justify-center p-4 cursor-pointer"
          onClick={handleCloseModal}
        >
          <div className="relative w-full max-w-4xl h-auto aspect-video cursor-default" onClick={(e) => e.stopPropagation()}>
            <video
              ref={videoRef}
              src={currentHeroSlide.video}
              controls
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
