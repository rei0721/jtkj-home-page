import React from 'react';
import { Mail, MapPin, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 font-light" style={{ backgroundColor: 'rgb(23, 23, 23)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Brand & Contact Info (Occupies 2 columns on large screens) */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="mb-10">
              <img 
                 src="http://www.scjtkj.com/template/jtkj/img/logo2.png" 
                 alt="江天科技" 
                 className="h-14 w-auto object-contain bg-white px-4 py-2 rounded-lg opacity-95"
              />
            </div>
            <p className="text-white/60 mb-10 leading-relaxed max-w-sm text-base">
              专注于光电新材料的研发与制造，致力于为全球客户提供高质量的触控显示解决方案，驱动产业技术革新，共创智能未来。
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <MapPin size={18} />
                </div>
                <span className="flex-1 leading-relaxed text-white/60 group-hover:text-white transition-colors text-base">
                    中国·深圳高新技术产业园区科技南路88号<br/>
                    四川省达州市开江县普安镇经开大道
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Phone size={18} />
                </div>
                <span className="font-mono text-xl tracking-wide text-white/90 group-hover:text-white transition-colors">400-888-9999</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Mail size={18} />
                </div>
                <span className="text-white/60 group-hover:text-white transition-colors text-base">business@optotech.com</span>
              </li>
            </ul>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h3 className="text-white font-bold text-xl mb-10">
                关于我们
            </h3>
            <ul className="space-y-5">
              <li><Link to="/about/intro" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"><ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"/>公司简介</Link></li>
              <li><Link to="/about/history" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"><ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"/>发展历程</Link></li>
              <li><Link to="/about/structure" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"><ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"/>组织架构</Link></li>
              <li><Link to="/about/culture" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"><ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"/>企业文化</Link></li>
              <li><Link to="/about/bases" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"><ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"/>基地展示</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-white font-bold text-xl mb-10">
                产品中心
            </h3>
            <ul className="space-y-5">
              <li><Link to="/products/smart-touch" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"><ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"/>智能触控</Link></li>
              <li><Link to="/products/computing" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"><ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"/>平板笔电</Link></li>
              <li><Link to="/products/automotive" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"><ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"/>车载显示</Link></li>
            </ul>
          </div>

          {/* Column 4: Innovation */}
          <div>
             <h3 className="text-white font-bold text-xl mb-10">
                科技创新
             </h3>
             <ul className="space-y-5">
               <li><Link to="/innovation/rnd" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"><ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"/>技术研发</Link></li>
               <li><Link to="/innovation/partners" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"><ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"/>合作伙伴</Link></li>
             </ul>
          </div>
          
          {/* Column 5: Party */}
          <div>
             <h3 className="text-white font-bold text-xl mb-10">
                党建工作
             </h3>
              <ul className="space-y-5">
               <li><Link to="/party" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"><ChevronRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"/>党建动态</Link></li>
             </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-white/30">
          <p>© 2024 江天科技股份有限公司 版权所有 <span className="mx-2 hidden md:inline">|</span> 备案号：粤ICP备88888888号</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;