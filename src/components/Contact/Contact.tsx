import { MapPin, Phone, Mail, Smartphone } from 'lucide-react';
import PageHero from '@/components/Layout/PageHero';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { useContactInfo } from '@/hooks/useContactInfo';
import { COMPANY } from '@/constants/company';
import ScrollAnimation from '@/components/UI/ScrollAnimation';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const SECTIONS = ['info', 'message'];

export default function Contact() {
  const { contact, loading } = useContactInfo();
  useScrollToSection({ validSections: SECTIONS, basePath: '/contact' });

  // Fallback to static data if API not loaded
  const address = contact?.address || COMPANY.addresses[0];
  const phone = contact?.phone || COMPANY.phone;
  const email = contact?.email || COMPANY.email;
  const mobile = COMPANY.mobile;

  // Build map URL with API coordinates or fallback
  const lat = 31.085;
  const lng = 107.868;
  const mapUrl = `https://api.map.baidu.com/marker?location=${lat},${lng}&title=光电产业园&content=${encodeURIComponent(address)}&output=html&src=webapp.baidu.openAPIdemo`;

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero
        title="联系我们"
        subtitle="期待与您的合作，共创美好未来"
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
        overlayClassName="bg-slate-900/60 bg-gradient-to-b from-slate-900/70 to-slate-900/40"
        accentBarClassName="bg-accent shadow-[0_0_15px_rgba(2,132,199,0.5)]"
      />

      <section id="info" className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2000&auto=format&fit=crop"
            alt="Map Background"
            className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/90"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">联系方式</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <ContactCard
              icon={<MapPin size={32} />}
              title="公司地址"
              content={address}
              delay={100}
              loading={loading}
            />
            <ContactCard
              icon={<Phone size={32} />}
              title="联系方式"
              content={phone}
              delay={200}
              loading={loading}
            />
            <ContactCard
              icon={<Mail size={32} />}
              title="电子邮箱"
              content={email}
              delay={300}
              loading={loading}
            />
            <ContactCard
              icon={<Smartphone size={32} />}
              title="手机号码"
              content={mobile}
              delay={400}
              loading={loading}
            />
          </div>
          <ScrollAnimation delay={500}>
            <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border border-slate-200 relative bg-slate-100 group">
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur shadow-lg px-4 py-3 rounded-lg border-l-4 border-accent max-w-xs">
                <h4 className="font-bold text-slate-800 text-sm">光电产业园</h4>
                <p className="text-xs text-slate-500 mt-1">{address}</p>
              </div>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                title="Location Map"
                src={mapUrl}
                className="w-full h-full filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center">
                  <MapPin size={48} className="text-slate-300 mb-2" />
                  <span className="text-slate-400 text-sm">加载地图中...</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section id="message" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">在线留言</h2>
              <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8"></div>
              <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                如果您有任何疑问、建议或合作意向，请填写以下表单，我们的专业团队将在24小时内与您联系。
              </p>
            </div>
          </ScrollAnimation>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
