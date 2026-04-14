import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generatePartyData } from '@/data/party/partyData';
import { usePagination } from '@/hooks/usePagination';
import PageHero from '@/components/Layout/PageHero';
import Pagination from '@/components/UI/Pagination';
import ScrollAnimation from '@/components/UI/ScrollAnimation';

const partyNewsData = generatePartyData();

export default function Party() {
  const { currentPage, totalPages, displayedItems, goToPage } = usePagination(partyNewsData, 6);

  const handlePageChange = (page: number) => {
    goToPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="党建工作"
        subtitle="不忘初心 牢记使命"
        backgroundImage=""
        overlayClassName="bg-red-900/80 mix-blend-multiply"
        accentBarClassName="bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {displayedItems.map((item, index) => (
          <ScrollAnimation key={item.id} delay={index * 100}>
            <div className="group flex flex-col md:flex-row gap-8 lg:gap-16 py-12 border-b border-slate-200 last:border-0 hover:bg-slate-50/30 transition-colors duration-300">
              <div className="w-full md:w-[35%] h-64 md:h-72 relative overflow-hidden bg-slate-100 flex-shrink-0">
                <img src="" alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-0 left-0 bg-red-700 text-white px-5 py-3 shadow-md z-10">
                  <div className="flex flex-col items-center leading-tight">
                    <span className="text-2xl font-bold">{item.date.split('-')[2]}</span>
                    <span className="text-xs opacity-90">{item.date.split('-')[0]}.{item.date.split('-')[1]}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-300"></div>
              </div>
              <div className="w-full md:w-[65%] flex flex-col justify-center py-2 md:py-4">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-sm font-bold tracking-wide">党建动态</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-red-700 transition-colors">
                  <Link to={`/party/${item.id}`} className="hover:underline decoration-red-700/30 underline-offset-4">{item.title}</Link>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 line-clamp-3">{item.summary}</p>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex items-center text-slate-400">
                    <Calendar size={18} className="mr-2" />
                    <span>发布时间：{item.date}</span>
                  </div>
                  <Link to={`/party/${item.id}`} className="flex items-center text-red-700 font-semibold group-hover:underline underline-offset-4 decoration-red-200 transition-all">
                    阅读全文 <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}

        <div className="mt-20">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} accentColor="red-700" />
        </div>
      </div>
    </div>
  );
}
