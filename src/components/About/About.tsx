import PageHero from '@/components/Layout/PageHero';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import CompanyIntro from './CompanyIntro';
import History from './History';
import Culture from './Culture';
import Structure from './Structure';
import Bases from './Bases';

const NAV_LINKS = [
  { title: '公司简介', id: 'intro' },
  { title: '发展历程', id: 'history' },
  { title: '组织架构', id: 'structure' },
  { title: '企业文化', id: 'culture' },
  { title: '基地展示', id: 'bases' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function About() {
  const { scrollToSection } = useScrollToSection({ validSections: SECTION_IDS, basePath: '/about' });
  const { activeSection, setActiveSection } = useScrollSpy(SECTION_IDS);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        title="关于我们"
        subtitle="About OptoTech"
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
        overlayClassName="bg-slate-900/60"
      />

      {/* Sub-Navigation */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start overflow-x-auto no-scrollbar gap-12 md:gap-16">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-6 text-lg md:text-xl font-medium transition-all duration-300 outline-none whitespace-nowrap ${
                    isActive ? 'text-accent font-bold' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {link.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-t-full transition-all duration-300"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div>
        <section id="intro" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CompanyIntro />
          </div>
        </section>
        <section id="history" className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <History />
          </div>
        </section>
        <section id="structure" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Structure />
          </div>
        </section>
        <section id="culture" className="py-20 md:py-28 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Culture />
          </div>
        </section>
        <section id="bases" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Bases />
          </div>
        </section>
      </div>
    </div>
  );
}
