import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Smartphone, Send } from 'lucide-react';
import ScrollAnimation from '../UI/ScrollAnimation';

const Contact: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const sectionId = pathParts[pathParts.length - 1];

    if (sectionId === 'info' || sectionId === 'message') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Hero Section - Handshake/Cooperation Theme */}
      <div className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop" 
            alt="Cooperation & Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 bg-gradient-to-b from-slate-900/70 to-slate-900/40"></div>
        </div>
        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider shadow-sm">
            联系我们
          </h1>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(2,132,199,0.5)]"></div>
          <p className="mt-4 text-slate-100 text-xl md:text-2xl font-light tracking-widest max-w-3xl mx-auto">
            期待与您的合作，共创美好未来
          </p>
        </div>
      </div>

      {/* 2. Contact Info Section - With Map Background & Visual Marker */}
      <section id="info" className="relative py-24 bg-white overflow-hidden">
        {/* Decorative Map Background (Beautified) */}
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
                content="四川省达州市开江县普安镇经开大道光电产业园" 
                delay={100} 
              />
              <ContactCard 
                icon={<Phone size={32} />} 
                title="联系方式" 
                content="400-888-9999" 
                delay={200} 
              />
              <ContactCard 
                icon={<Mail size={32} />} 
                title="电子邮箱" 
                content="business@optotech.com" 
                delay={300} 
              />
              <ContactCard 
                icon={<Smartphone size={32} />} 
                title="手机号码" 
                content="+86 138-0000-8888" 
                delay={400} 
              />
           </div>

           {/* Location Map Display */}
           <ScrollAnimation delay={500}>
                <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border border-slate-200 relative bg-slate-100 group">
                    {/* Visual Label */}
                    <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur shadow-lg px-4 py-3 rounded-lg border-l-4 border-accent max-w-xs">
                        <h4 className="font-bold text-slate-800 text-sm">光电产业园</h4>
                        <p className="text-xs text-slate-500 mt-1">四川省达州市开江县普安镇经开大道</p>
                    </div>

                    {/* Baidu Map Static/Embed View */}
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        title="Location Map"
                        src="https://api.map.baidu.com/marker?location=31.085,107.868&title=光电产业园&content=四川省达州市开江县普安镇经开大道&output=html&src=webapp.baidu.openAPIdemo"
                        className="w-full h-full filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                    
                    {/* Loading/Fallback Placeholder */}
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

      {/* 3. Online Message Section */}
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

          <div className="w-full bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-slate-100">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {/* Inquiry Type */}
                 <div className="space-y-3 group">
                    <label className="text-lg font-bold text-slate-700 ml-1 group-focus-within:text-accent transition-colors">咨询类型</label>
                    <div className="relative">
                        <select className="w-full px-6 py-5 rounded-xl border border-slate-300 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-slate-50 hover:bg-white text-slate-700 text-lg appearance-none cursor-pointer">
                            <option>业务合作</option>
                            <option>产品咨询</option>
                            <option>技术支持</option>
                            <option>投资者关系</option>
                            <option>招贤纳士</option>
                            <option>其他</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                 </div>
                 
                 {/* Name */}
                 <div className="space-y-3 group">
                    <label className="text-lg font-bold text-slate-700 ml-1 group-focus-within:text-accent transition-colors">姓名</label>
                    <input type="text" placeholder="请输入您的姓名" className="w-full px-6 py-5 rounded-xl border border-slate-300 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-slate-50 hover:bg-white text-lg placeholder:text-slate-400" />
                 </div>
                 
                 {/* Phone */}
                 <div className="space-y-3 group">
                    <label className="text-lg font-bold text-slate-700 ml-1 group-focus-within:text-accent transition-colors">电话</label>
                    <input type="tel" placeholder="请输入您的联系电话" className="w-full px-6 py-5 rounded-xl border border-slate-300 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-slate-50 hover:bg-white text-lg placeholder:text-slate-400" />
                 </div>
                 
                 {/* Email */}
                 <div className="space-y-3 group">
                    <label className="text-lg font-bold text-slate-700 ml-1 group-focus-within:text-accent transition-colors">电子邮件</label>
                    <input type="email" placeholder="example@email.com" className="w-full px-6 py-5 rounded-xl border border-slate-300 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-slate-50 hover:bg-white text-lg placeholder:text-slate-400" />
                 </div>
              </div>
              
              {/* Message Content */}
              <div className="space-y-3 group">
                 <label className="text-lg font-bold text-slate-700 ml-1 group-focus-within:text-accent transition-colors">留言内容</label>
                 <textarea rows={6} placeholder="请详细描述您的需求..." className="w-full px-6 py-5 rounded-xl border border-slate-300 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all resize-none bg-slate-50 hover:bg-white text-lg placeholder:text-slate-400"></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                 <button type="submit" className="px-16 py-5 bg-accent text-white font-bold text-xl rounded-full shadow-lg shadow-accent/30 hover:bg-sky-600 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center mx-auto gap-3 w-full md:w-auto min-w-[300px]">
                    <Send size={24} />
                    提交留言
                 </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
    delay: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content, delay }) => (
    <ScrollAnimation delay={delay} className="h-full">
        <div className="bg-white p-8 rounded-xl shadow-[0_5px_25px_-5px_rgba(0,0,0,0.1)] border border-slate-100 h-full flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group hover:shadow-[0_20px_40px_-10px_rgba(2,132,199,0.2)]">
            <div className="w-16 h-16 bg-slate-50 text-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:scale-110">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-slate-600 leading-relaxed break-words w-full group-hover:text-slate-700">
                {content}
            </p>
        </div>
    </ScrollAnimation>
);

export default Contact;