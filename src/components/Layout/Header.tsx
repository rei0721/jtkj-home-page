import { useState, useEffect } from 'react';
import { Menu, X, Search, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContactInfo } from '@/hooks/useContactInfo';
import { COMPANY } from '@/constants/company';
import { navItems } from '@/constants/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [mobileSearch, setMobileSearch] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { contact } = useContactInfo();

  const phone = contact?.phone || COMPANY.phone;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveSubMenu(null);
  }, [location]);

  const isLightBg = location.pathname.startsWith('/search');
  const useDarkText = isScrolled || mobileMenuOpen || isLightBg;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        useDarkText ? 'bg-white text-slate-800 shadow-lg h-20' : 'bg-transparent text-white h-24'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <img
              src={useDarkText ? COMPANY.logoBlue : COMPANY.logo}
              alt="江天科技"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

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
                    useDarkText ? 'hover:text-accent' : 'hover:text-sky-300'
                  }`}
                >
                  {item.title}
                  {item.submenu && <ChevronDown size={16} />}
                </Link>

                {item.submenu && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <div className="flex flex-wrap gap-8 justify-center">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.title}
                            to={sub.path}
                            className="group/sub flex flex-col items-center w-40 text-center gap-3"
                          >
                            <div className="w-full h-28 rounded-lg overflow-hidden relative bg-slate-100 shadow-sm group-hover/sub:shadow-md transition-all ring-1 ring-slate-100">
                              {sub.image ? (
                                <img
                                  src={sub.image}
                                  alt={sub.title}
                                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover/sub:scale-110"
                                />
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

          <div className="hidden lg:flex items-center space-x-6">
            <div
              className={`flex items-center gap-2 px-3 py-1 rounded-full border ${useDarkText ? 'border-accent/20 bg-accent/5' : 'border-white/30 bg-white/10'}`}
            >
              <Phone size={18} className={useDarkText ? 'text-accent' : 'text-white'} />
              <span
                className={`font-bold text-lg font-mono ${useDarkText ? 'text-accent' : 'text-white'}`}
              >
                {phone}
              </span>
            </div>
            <button
              onClick={() => navigate('/search')}
              className={`p-2 rounded-full transition-colors ${useDarkText ? 'hover:bg-slate-100' : 'hover:bg-white/20'}`}
            >
              <Search size={22} />
            </button>
          </div>

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

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.title} className="border-b border-slate-100 last:border-none">
                <div
                  className="flex justify-between items-center py-3 px-2 text-lg font-medium text-slate-800"
                  onClick={() =>
                    item.submenu
                      ? setActiveSubMenu(activeSubMenu === item.title ? null : item.title)
                      : null
                  }
                >
                  <Link to={item.path} className="flex-grow">
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${activeSubMenu === item.title ? 'rotate-180' : ''}`}
                    />
                  )}
                </div>

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
                <span>{phone}</span>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const q = mobileSearch.trim();
                  if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={mobileSearch}
                  onChange={(e) => setMobileSearch(e.target.value)}
                  placeholder="搜索..."
                  className="w-full pl-10 pr-4 py-3 border rounded-full focus:outline-none focus:border-accent text-lg"
                />
                <Search className="absolute left-3 top-3.5 text-slate-400" size={20} />
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
