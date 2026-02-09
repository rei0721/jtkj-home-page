import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when the element is 10% visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after triggering to run animation only once
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Offset to ensure element is slightly inside viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  // Inline style for transition delay
  const style = { transitionDelay: `${delay}ms` };

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16' // Translate Y 16 (4rem) for a distinct "upward" motion
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;