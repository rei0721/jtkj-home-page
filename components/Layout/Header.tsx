import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Phone, ChevronDown } from 'lucide-react';
import { MenuItem } from '../../types';
import { Link, useLocation } from 'react-router-dom';

const navItems: MenuItem[] = [
  { title: '首页', path: '/' },
  {
    title: '关于我们',
    path: '/about',
    submenu: [
      { title: '公司简介', path: '/about/intro', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop' },
      { title: '发展历程', path: '/about/history', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=400&auto=format&fit=crop' },
      { title: '组织架构', path: '/about/structure', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=400&auto=format&fit=crop' },
      { title: '企业文化', path: '/about/culture', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop' },
      { title: '基地展示', path: '/about/bases', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  {
    title: '产品中心',
    path: '/products',
    submenu: [
      { title: '智能触控领域', path: '/products/smart-touch', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop' },
      { title: '平板-笔电-AIO', path: '/products/computing', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&auto=format&fit=crop' },
      { title: '车载领域', path: '/products/automotive', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  {
    title: '科技创新',
    path: '/innovation',
    submenu: [
      { title: '技术研发', path: '/innovation/rnd', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop' },
      { title: '合作伙伴', path: '/innovation/partners', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  { title: '党建工作', path: '/party' },
  {
    title: '新闻中心',
    path: '/news',
    submenu: [
      { title: '最新动态', path: '/news/latest', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400&auto=format&fit=crop' },
      { title: '公司新闻', path: '/news/company', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop' },
      { title: '行业动态', path: '/news/industry', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop' },
      { title: '招标公告', path: '/news/tenders', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&auto=format&fit=crop' },
    ],
  },
  {
    title: '联系我们',
    path: '/contact',
    submenu: [
      { title: '联系方式', path: '/contact/info', image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=400&auto=format&fit=crop' },
      { title: '加入我们', path: '/contact/jobs', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=400&auto=format&fit=crop' },
      { title: '在线留言', path: '/contact/message', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop' },
    ],
  },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveSubMenu(null);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white text-slate-800 shadow-lg h-20' : 'bg-transparent text-white h-24'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
             <img 
               src="http://www.scjtkj.com/template/jtkj/img/logo2.png" 
               alt="江天科技" 
               className="h-10 md:h-12 w-auto object-contain"
             />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-12 items-center h-full">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="group h-full flex items-center"
                onMouseEnter={() => setActiveSubMenu(item.title)}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 text-lg font-medium transition-colors relative z-10 tracking-wide ${
                    isScrolled ? 'hover:text-accent' : 'hover:text-sky-300'
                  }`}
                >
                  {item.title}
                  {item.submenu && <ChevronDown size={16} />}
                </Link>

                {/* Full Width Mega Menu Dropdown */}
                {item.submenu && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* Centered Grid Content */}
                        <div className="flex flex-wrap gap-8 justify-center">
                           {item.submenu.map((sub) => (
                             <Link
                               key={sub.title}
                               to={sub.path}
                               className="group/sub flex flex-col items-center w-40 text-center gap-3"
                             >
                               <div className="w-full h-28 rounded-lg overflow-hidden relative bg-slate-100 shadow-sm group-hover/sub:shadow-md transition-all ring-1 ring-slate-100">
                                   {sub.image ? (
                                        <img src={sub.image} alt={sub.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover/sub:scale-110" />
                                   ) : (
                                       <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                           <span className="text-xs">No Image</span>
                                       </div>
                                   )}
                                   <div className="absolute inset-0 bg-black/0 group-hover/sub:bg-black/5 transition-colors"></div>
                               </div>
                               <span className="text-sm font-medium text-slate-700 group-hover/sub:text-accent transition-colors">
                                   {sub.title}
                               </span>
                             </Link>
                           ))}
                        </div>
                     </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${isScrolled ? 'border-accent/20 bg-accent/5' : 'border-white/30 bg-white/10'}`}>
              <Phone size={18} className={isScrolled ? 'text-accent' : 'text-white'} />
              <span className={`font-bold text-lg font-mono ${isScrolled ? 'text-accent' : 'text-white'}`}>400-888-9999</span>
            </div>
            <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-slate-100' : 'hover:bg-white/20'}`}>
              <Search size={22} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.title} className="border-b border-slate-100 last:border-none">
                <div 
                  className="flex justify-between items-center py-3 px-2 text-lg font-medium text-slate-800"
                  onClick={() => item.submenu ? setActiveSubMenu(activeSubMenu === item.title ? null : item.title) : null}
                >
                  <Link to={item.path} className="flex-grow">{item.title}</Link>
                  {item.submenu && (
                     <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-200 ${activeSubMenu === item.title ? 'rotate-180' : ''}`} 
                     />
                  )}
                </div>
                
                {/* Mobile Submenu - Keep simple text list for mobile UX */}
                {item.submenu && activeSubMenu === item.title && (
                  <div className="bg-slate-50 px-4 py-2 space-y-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.title}
                        to={sub.path}
                        className="block py-2 text-base text-slate-600 hover:text-accent"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 px-2">
                <div className="flex items-center gap-2 text-accent font-bold text-2xl mb-4">
                    <Phone size={24} />
                    <span>400-888-9999</span>
                </div>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="搜索..." 
                        className="w-full pl-10 pr-4 py-3 border rounded-full focus:outline-none focus:border-accent text-lg"
                    />
                    <Search className="absolute left-3 top-3.5 text-slate-400" size={20} />
                </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;