import { partnerLogos } from '@/data/innovation/partnerLogos';
import ScrollAnimation from '@/components/UI/ScrollAnimation';

export default function PartnersMarquee() {
  return (
    <section id="partners" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" alt="Global Network" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">合作伙伴</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              携手全球顶尖企业，共建产业生态圈。我们的产品已广泛应用于全球知名品牌终端。
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative w-full overflow-hidden mask-linear-fade py-10">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              display: flex;
              width: max-content;
              animation: scroll 40s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
            .mask-linear-fade {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
          `}</style>
          <div className="animate-scroll gap-16 md:gap-24 px-4">
            {partnerLogos.map((partner, index) => (
              <div key={`p1-${index}`} className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer">
                <div className="h-16 w-auto flex items-center justify-center bg-slate-100 px-8 rounded-lg border border-slate-200 shadow-sm min-w-[180px]">
                  <span className={`text-2xl font-black ${partner.color}`}>{partner.name}</span>
                </div>
              </div>
            ))}
            {partnerLogos.map((partner, index) => (
              <div key={`p2-${index}`} className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer">
                <div className="h-16 w-auto flex items-center justify-center bg-slate-100 px-8 rounded-lg border border-slate-200 shadow-sm min-w-[180px]">
                  <span className={`text-2xl font-black ${partner.color}`}>{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
