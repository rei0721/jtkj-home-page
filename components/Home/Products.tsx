import React from 'react';
import { ArrowRight, Smartphone, Laptop, Car } from 'lucide-react';
import { Product } from '../../types';
import ScrollAnimation from '../UI/ScrollAnimation';

const products: Product[] = [
  {
    id: 1,
    title: '智能触控领域',
    category: 'Smart Touch',
    description: '高精度触控传感器与模组，广泛应用于智能家居与工控设备。',
    image: 'https://picsum.photos/seed/smart_touch/800/600',
  },
  {
    id: 2,
    title: '平板-笔电-AIO',
    category: 'IT Computing',
    description: '为高端平板电脑、笔记本及一体机提供超薄、高清显示总成。',
    image: 'https://picsum.photos/seed/laptop_screen/800/600',
  },
  {
    id: 3,
    title: '车载显示领域',
    category: 'Automotive',
    description: '车规级可靠性设计，涵盖中控大屏、仪表盘及后排娱乐系统。',
    image: 'https://picsum.photos/seed/car_dashboard/800/600',
  },
];

const ProductCard: React.FC<{ product: Product; icon: React.ReactNode }> = ({ product, icon }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-xl h-96 cursor-pointer">
    {/* Background Image with Zoom Effect */}
    <img 
      src={product.image} 
      alt={product.title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 transition-opacity duration-300"></div>

    {/* Content */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
        <div className="mb-4 text-accent bg-white/10 backdrop-blur-md p-3 rounded-xl inline-block w-fit">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
        <p className="text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
          {product.description}
        </p>
        <span className="inline-flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
          了解详情 <ArrowRight size={16} className="ml-2" />
        </span>
      </div>
    </div>
  </div>
);

const Products: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">核心业务领域</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              依托强大的研发制造能力，我们为多个前沿科技领域提供核心零部件与解决方案
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
             <ScrollAnimation key={product.id} delay={index * 150} className="h-full">
                <ProductCard product={product} icon={
                  index === 0 ? <Smartphone size={32} /> : 
                  index === 1 ? <Laptop size={32} /> : 
                  <Car size={32} />
                } />
             </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;