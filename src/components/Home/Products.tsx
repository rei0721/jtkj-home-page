import { ArrowRight, Smartphone, Laptop, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/types';
import { homeProducts } from '@/data/home/homeProducts';
import ScrollAnimation from '@/components/UI/ScrollAnimation';

const categoryRouteMap: Record<number, string> = {
  1: '/products/smart-touch',
  2: '/products/computing',
  3: '/products/automotive',
};

function ProductCard({ product, icon, onClick }: { product: Product; icon: React.ReactNode; onClick: () => void }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl h-96 cursor-pointer" onClick={onClick}>
      <img
        src={product.image}
        alt={product.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 transition-opacity duration-300"></div>
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
          <div className="mb-4 text-accent bg-white/10 backdrop-blur-md p-3 rounded-xl inline-block w-fit">{icon}</div>
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
}

export default function Products() {
  const navigate = useNavigate();
  const icons = [<Smartphone key={0} size={32} />, <Laptop key={1} size={32} />, <Car key={2} size={32} />];

  return (
    <section className="flex-1 flex flex-col justify-center py-24 bg-slate-50">
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
          {homeProducts.map((product, index) => (
            <ScrollAnimation key={product.id} delay={index * 150} className="h-full">
              <ProductCard product={product} icon={icons[index]} onClick={() => navigate(categoryRouteMap[product.id])} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
