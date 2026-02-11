import { useState, useEffect } from 'react';
import Hero from '@/components/Home/Hero';
import Products from '@/components/Home/Products';
import Values from '@/components/Home/Values';
import Stats from '@/components/Home/Stats';
import News from '@/components/Home/News';

export default function HomePage() {
  const [headerHeight, setHeaderHeight] = useState(96); // 默认 header 高度 (h-24 = 96px)

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.clientHeight);
      }
    };

    // 初始设置
    updateHeaderHeight();

    // 监听滚动事件，因为 header 高度会随滚动变化
    const handleScroll = () => {
      // 延迟更新以确保 DOM 已更新
      setTimeout(updateHeaderHeight, 10);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const fullScreenWithOffset = `calc(100vh - ${headerHeight}px)`;

  return (
    <>
      <div style={{ minHeight: fullScreenWithOffset }} className="w-full">
        <Hero />
      </div>
      <div style={{ minHeight: fullScreenWithOffset }} className="w-full flex flex-col">
        <Products />
      </div>
      <div style={{ height: fullScreenWithOffset }} className="w-full">
        <Values />
      </div>
      <div style={{ height: fullScreenWithOffset }} className="w-full">
        <Stats />
      </div>
      <div style={{ minHeight: fullScreenWithOffset }} className="w-full">
        <News />
      </div>
    </>
  );
}