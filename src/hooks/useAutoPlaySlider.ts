import { useState, useEffect, useCallback } from 'react';

export function useAutoPlaySlider(totalSlides: number, interval: number = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goTo = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next, interval, totalSlides]);

  return {
    currentSlide,
    next,
    prev,
    goTo,
    pauseAutoPlay: () => setIsAutoPlaying(false),
    resumeAutoPlay: () => setIsAutoPlaying(true),
  };
}
