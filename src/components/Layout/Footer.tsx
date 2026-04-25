import { Mail, MapPin, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContactInfo } from '@/hooks/useContactInfo';
import { COMPANY } from '@/constants/company';
import { DBSTORE } from '@/constants/config';



export default function Footer() {
  const { contact } = useContactInfo();

  const phone = contact?.phone || COMPANY.phone;
  const email = contact?.email || COMPANY.email;
  const address = contact?.address || COMPANY.addresses[0];

  // appUrl
  const appUrl = DBSTORE.appUrl;
  return (
    <footer className="pt-24 pb-12 font-light" style={{ backgroundColor: 'rgb(23, 23, 23)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="mb-10">
              <img src={COMPANY.logo} alt={COMPANY.name} className="h-14 w-auto object-contain" />
            </div>
            <p className="text-white/60 mb-10 leading-relaxed max-w-sm text-base">
              专注于光电新材料的研发与制造，致力于为全球客户提供高质量的触控显示解决方案，驱动产业技术革新，共创智能未来。
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                {/* <span className="flex-1 leading-relaxed text-white/60 group-hover:text-white transition-colors text-base">
                  {address}
                </span> */}
                <a href={`${appUrl}`} target="_blank" rel="noopener noreferrer" className="text-white/60 group-hover:text-white transition-colors text-base">
                  <span className="flex-1 leading-relaxed text-white/60 group-hover:text-white transition-colors text-base">
                  {address}
                </span>
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Phone size={18} />
                </div>
                <span className="font-mono text-xl tracking-wide text-white/90 group-hover:text-white transition-colors">
                  {phone}
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-white/60 group-hover:text-white transition-colors text-base">
                  {email}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-10">关于我们</h3>
            <ul className="space-y-5">
              {['公司简介', '发展历程', '组织架构', '企业文化', '基地展示'].map((text, i) => (
                <li key={i}>
                  <Link
                    to={`/about/${['intro', 'history', 'structure', 'culture', 'bases'][i]}`}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"
                  >
                    <ChevronRight
                      size={18}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"
                    />
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-10">产品中心</h3>
            <ul className="space-y-5">
              {[
                { text: '智能触控', path: '/products/smart-touch' },
                { text: '平板笔电', path: '/products/computing' },
                { text: '车载显示', path: '/products/automotive' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"
                  >
                    <ChevronRight
                      size={18}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"
                    />
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-10">科技创新</h3>
            <ul className="space-y-5">
              {[
                { text: '技术研发', path: '/innovation/rnd' },
                { text: '合作伙伴', path: '/innovation/partners' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"
                  >
                    <ChevronRight
                      size={18}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"
                    />
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-10">党建工作</h3>
            <ul className="space-y-5">
              <li>
                <Link
                  to="/party"
                  className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-base"
                >
                  <ChevronRight
                    size={18}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent"
                  />
                  党建动态
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-white/30">
          <p>
            © 2024 {COMPANY.name} 版权所有 <span className="mx-2 hidden md:inline">|</span> 备案号：
            {COMPANY.icp}
          </p>
        </div>
      </div>
    </footer>
  );
}
