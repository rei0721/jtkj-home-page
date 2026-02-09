import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, X, Check, Layers, Zap, Activity } from 'lucide-react';
import ScrollAnimation from '../UI/ScrollAnimation';

// --- Types ---
interface Scenario {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductDetail {
  id: number;
  name: string;
  image: string;
  specs: ProductSpec[];
  features: string[];
}

interface CategoryData {
  title: string;
  subtitle: string;
  heroSlides: string[]; // Changed to array for slider
  description: string;  // Detailed text description
  scenarios: Scenario[];
  products: ProductDetail[];
}

// --- Mock Data Store ---
const DATA_STORE: Record<string, CategoryData> = {
  'smart-touch': {
    title: '智能触控领域',
    subtitle: 'Smart Touch Solutions',
    heroSlides: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
    ],
    description: '设计开发：更小、可绕性→超窄边框/无边框设计；工艺制程：2.5D/3D 曲面贴合；应用场景：全柔概念、生活家居、奢侈品领域拓展。',
    scenarios: [
      {
        id: 'home',
        label: '智能家居',
        title: '全屋智能交互中心',
        description: '应用于智能冰箱、烤箱、中控屏等设备。我们的触控面板具备耐油污、耐高温特性，支持湿手触控，为现代厨房与客厅提供流畅的人机交互体验。',
        image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'industrial',
        label: '工控医疗',
        title: '高可靠性工控界面',
        description: '专为严苛环境设计，抗电磁干扰（EMC）能力强，支持戴手套操作。广泛应用于数控机床、医疗监护仪、手持终端等专业设备。',
        image: 'https://images.unsplash.com/photo-1581093588402-4a1195681407?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'retail',
        label: '智慧零售',
        title: '自助服务终端',
        description: '大尺寸触控解决方案，应用于自助点餐机、查询机。高透光率与耐磨损表面处理，确保在人流密集场景下的长期清晰度与耐用性。',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    products: Array.from({ length: 14 }).map((_, i) => ({
      id: i + 1,
      name: `G${i + 1} Series 智能触控模组`,
      image: `https://picsum.photos/seed/touch${i}/600/600`,
      specs: [
        { label: '尺寸范围', value: '7.0" - 32.0"' },
        { label: '触控点数', value: '10点 / 20点' },
        { label: '透光率', value: '≥ 90%' },
        { label: '表面硬度', value: '≥ 6H' },
        { label: '工作温度', value: '-20℃ ~ 70℃' }
      ],
      features: ['AG/AR/AF 表面处理', '支持主动笔', '防水抗噪']
    }))
  },
  'computing': {
    title: '平板-笔电-AIO',
    subtitle: 'IT & Computing Display',
    heroSlides: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531297461136-82lw9z0u8e3c?q=80&w=2070&auto=format&fit=crop'
    ],
    description: '设计开发：极致轻薄→模组厚度<2.0mm；工艺制程：COF封装/窄边框点胶工艺；应用场景：移动办公、在线教育、创意设计工作站。',
    scenarios: [
      {
        id: 'business',
        label: '商务办公',
        title: '超薄窄边框设计',
        description: '为高端商务笔记本提供轻薄化显示模组，极致窄边框带来沉浸式视觉体验，低功耗技术显著延长设备续航时间。',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'education',
        label: '在线教育',
        title: '护眼显示技术',
        description: '集成低蓝光与无频闪技术，专为学生平板设计。配合高精度触控笔，还原纸笔书写质感，呵护青少年视力健康。',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    products: Array.from({ length: 8 }).map((_, i) => ({
      id: i + 100,
      name: `NB-${i + 1} 高清显示总成`,
      image: `https://picsum.photos/seed/laptop${i}/600/600`,
      specs: [
        { label: '分辨率', value: '2K / 4K' },
        { label: '刷新率', value: '60Hz / 120Hz' },
        { label: '色域', value: '100% sRGB' },
        { label: '厚度', value: '< 2.0mm' }
      ],
      features: ['HDR400认证', '由内而外护眼', '超低功耗']
    }))
  },
  'automotive': {
    title: '车载显示领域',
    subtitle: 'Automotive Cockpit',
    heroSlides: [
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2070&auto=format&fit=crop'
    ],
    description: '设计开发：一体黑效果/异形切割设计；工艺制程：3D热弯/盖板防爆/减反射处理；应用场景：智能座舱仪表、中控娱乐、后排扶手屏。',
    scenarios: [
      {
        id: 'cockpit',
        label: '智能座舱',
        title: '多屏联动系统',
        description: '一体化联屏设计，贯穿仪表、中控与副驾娱乐屏。采用车规级全贴合工艺，抗震动、耐老化，满足IATF16949标准。',
        image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'rear',
        label: '后排娱乐',
        title: '影院级视觉享受',
        description: '为后排乘客提供高清娱乐显示系统，支持独立触控与多媒体播放，提升豪华商务车的乘坐体验。',
        image: 'https://images.unsplash.com/photo-1622379375836-96b63c780962?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    products: Array.from({ length: 5 }).map((_, i) => ({
      id: i + 200,
      name: `Auto-X${i + 1} 车规级大屏`,
      image: `https://picsum.photos/seed/auto${i}/600/600`,
      specs: [
        { label: '尺寸', value: '12.3" / 15.6" / 27"' },
        { label: '曲率', value: 'R2000 / R3000' },
        { label: '亮度', value: '1000 nits' },
        { label: '工作温度', value: '-40℃ ~ 85℃' }
      ],
      features: ['一体黑效果', '防眩光AG处理', '10年老化寿命']
    }))
  }
};

// --- Components ---

const ProductModal: React.FC<{ product: ProductDetail; onClose: () => void }> = ({ product, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in-up flex flex-col md:flex-row">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-20"
                >
                    <X size={24} className="text-slate-600" />
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-2/5 h-64 md:h-auto bg-slate-100 relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-3/5 p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{product.name}</h3>
                    <div className="w-16 h-1 bg-accent mb-6"></div>

                    <div className="mb-8">
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Layers size={16} /> 技术参数
                        </h4>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {product.specs.map((spec, idx) => (
                                <div key={idx} className="border-b border-slate-100 pb-2">
                                    <span className="text-slate-500 text-sm block mb-1">{spec.label}</span>
                                    <span className="text-slate-900 font-semibold">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Zap size={16} /> 产品特性
                        </h4>
                        <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-slate-700">
                                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <Check size={12} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductCategory: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [activeScenario, setActiveScenario] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Reset states when category changes
  useEffect(() => {
    setActiveScenario(0);
    setCurrentPage(1);
    setCurrentSlide(0);
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  }, [categoryId]);

  const data = categoryId ? DATA_STORE[categoryId] : null;

  // Auto-play Slider Effect
  useEffect(() => {
    if (!data || !isAutoPlaying) return;
    const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === data.heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [data, isAutoPlaying]);

  if (!data) {
    return <Navigate to="/" replace />; 
  }

  const { title, subtitle, heroSlides, description, scenarios, products } = data;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // Pagination Logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Module: Full Screen Slider with Pure Text Description */}
      <div 
        className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden bg-slate-900 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
            <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
                <img 
                    src={slide} 
                    alt={`${title} slide ${index + 1}`} 
                    className="w-full h-full object-cover"
                />
                {/* Enhanced Dark Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20"></div>
            </div>
        ))}

        {/* Content Container: Left Aligned, Vertically Centered */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl text-left animate-fade-in-up">
            
            {/* Subtitle/Category Tag */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-accent rounded-full"></div>
                <span className="text-accent font-bold tracking-[0.2em] uppercase text-lg md:text-xl">
                    {subtitle}
                </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 shadow-sm tracking-tight leading-tight">
              {title}
            </h1>

            {/* Pure Text Description: Design, Process, Scenarios */}
            {/* Removed Icons as requested, displaying pure text block */}
            <div className="border-l-4 border-accent pl-6 md:pl-8 py-2">
                <p className="text-xl md:text-2xl text-slate-100 font-light leading-relaxed drop-shadow-md whitespace-pre-line">
                    {description}
                </p>
            </div>

          </div>
        </div>

        {/* Slider Controls */}
        <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100 focus:outline-none hover:scale-110"
        >
            <ChevronLeft size={32} />
        </button>
        <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100 focus:outline-none hover:scale-110"
        >
            <ChevronRight size={32} />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {heroSlides.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'w-10 bg-accent' : 'w-2 bg-white/40 hover:bg-white/80'
                    }`}
                />
            ))}
        </div>
      </div>

      {/* 2. Application Scenarios (Re-designed Layout) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">应用场景</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        针对不同行业痛点，提供深度定制化的场景解决方案
                    </p>
                </div>
            </ScrollAnimation>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
                {/* Left: Image Display (Expanded Area - 75% width) */}
                <div className="lg:w-3/4 relative overflow-hidden bg-slate-900 group">
                    {scenarios.map((scenario, index) => (
                        <div 
                            key={scenario.id}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                activeScenario === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        >
                            <img 
                                src={scenario.image} 
                                alt={scenario.title} 
                                className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${
                                    activeScenario === index ? 'scale-110' : 'scale-100'
                                }`} 
                            />
                            {/* Dark Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            
                            {/* Text Content - Bottom Left Alignment */}
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl z-20">
                                <div className={`transform transition-all duration-700 delay-300 ${activeScenario === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    {/* Description Only - Removed Title and Button as requested */}
                                    <p className="text-slate-100 leading-relaxed text-lg md:text-xl font-light bg-black/20 backdrop-blur-md p-6 rounded-xl border-l-4 border-accent shadow-lg">
                                        {scenario.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right: Vertical Navigation Tabs (Narrower Area - 25% width) */}
                <div className="lg:w-1/4 flex flex-row lg:flex-col bg-slate-50 border-l border-slate-100 overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
                    {scenarios.map((scenario, index) => (
                        <button
                            key={scenario.id}
                            onClick={() => setActiveScenario(index)}
                            className={`flex-1 lg:flex-none flex items-center justify-between p-6 md:p-8 text-left transition-all duration-300 outline-none border-b lg:border-b-0 lg:border-l-4 border-slate-200 lg:border-transparent min-w-[160px] lg:min-w-0 ${
                                activeScenario === index 
                                ? 'bg-white text-accent lg:border-l-accent shadow-sm z-10' 
                                : 'text-slate-500 hover:bg-white hover:text-slate-700'
                            }`}
                        >
                            <div>
                                <span className={`block font-bold text-lg md:text-xl transition-transform duration-300 ${activeScenario === index ? 'translate-x-1' : ''}`}>
                                    {scenario.label}
                                </span>
                                <span className="text-xs font-mono uppercase opacity-50 mt-1 block tracking-wider">
                                    SCENARIO 0{index + 1}
                                </span>
                            </div>
                            {activeScenario === index && (
                                <Activity size={20} className="hidden lg:block animate-pulse" />
                            )}
                        </button>
                    ))}
                    
                    {/* Filler space for desktop vertical layout */}
                    <div className="hidden lg:block flex-grow bg-slate-50/50"></div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Product List Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">产品系列</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                </div>
            </ScrollAnimation>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {displayedProducts.map((product) => (
                    <ScrollAnimation key={product.id} className="h-full">
                        <div 
                            onClick={() => setSelectedProduct(product)}
                            className="group h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                        >
                            {/* Image Area */}
                            <div className="relative h-64 overflow-hidden bg-slate-100">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="bg-white/90 backdrop-blur text-slate-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        查看详情
                                    </span>
                                </div>
                            </div>
                            
                            {/* Info Area */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-accent transition-colors">
                                    {product.name}
                                </h3>
                                <div className="mt-auto pt-4 border-t border-slate-50">
                                    <div className="flex flex-wrap gap-2">
                                        {product.specs.slice(0, 2).map((spec, idx) => (
                                            <span key={idx} className="text-xs bg-slate-50 text-slate-500 px-2 py-1 rounded">
                                                {spec.label}: {spec.value}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                            currentPage === 1
                            ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                            : 'border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-accent'
                        }`}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                                currentPage === i + 1
                                ? 'bg-accent text-white shadow-lg shadow-accent/30'
                                : 'text-slate-600 hover:bg-slate-50'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                            currentPage === totalPages
                            ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                            : 'border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-accent'
                        }`}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default ProductCategory;