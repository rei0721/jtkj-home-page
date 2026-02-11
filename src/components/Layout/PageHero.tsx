interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlayClassName?: string;
  accentBarClassName?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  overlayClassName = 'bg-slate-900/60',
  accentBarClassName = 'bg-accent',
}: PageHeroProps) {
  return (
    <div className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={backgroundImage} alt={title} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 ${overlayClassName}`}></div>
      </div>
      <div className="relative z-10 text-center animate-fade-in-up px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider">{title}</h1>
        <div className={`w-24 h-1.5 ${accentBarClassName} mx-auto rounded-full mb-8`}></div>
        {subtitle && <p className="mt-4 text-slate-100 text-xl md:text-2xl font-light tracking-widest max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
}
