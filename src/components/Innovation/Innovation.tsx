import PageHero from '@/components/Layout/PageHero';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import RndSection from './RndSection';
import PartnersMarquee from './PartnersMarquee';

const SECTIONS = ['rnd', 'partners'];

export default function Innovation() {
  useScrollToSection({ validSections: SECTIONS, basePath: '/innovation' });

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        title="科技创新"
        subtitle="以技术为引擎，驱动光电产业未来"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
        overlayClassName="bg-slate-900/70 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"
        accentBarClassName="bg-accent shadow-[0_0_15px_rgba(2,132,199,0.5)]"
      />
      <RndSection />
      <PartnersMarquee />
    </div>
  );
}
