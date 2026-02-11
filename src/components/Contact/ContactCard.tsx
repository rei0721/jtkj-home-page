import ScrollAnimation from '@/components/UI/ScrollAnimation';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  delay: number;
  loading?: boolean;
}

export default function ContactCard({ icon, title, content, delay, loading }: ContactCardProps) {
  return (
    <ScrollAnimation delay={delay} className="h-full">
      <div className="bg-white p-8 rounded-xl shadow-[0_5px_25px_-5px_rgba(0,0,0,0.1)] border border-slate-100 h-full flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group hover:shadow-[0_20px_40px_-10px_rgba(2,132,199,0.2)]">
        <div className="w-16 h-16 bg-slate-50 text-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">
          {title}
        </h3>
        {loading ? (
          <div className="h-6 w-24 bg-slate-200 rounded animate-pulse mx-auto"></div>
        ) : (
          <p className="text-slate-600 leading-relaxed break-words w-full group-hover:text-slate-700">
            {content}
          </p>
        )}
      </div>
    </ScrollAnimation>
  );
}
