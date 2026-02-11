import { ProductDetail } from '@/types';
import { usePagination } from '@/hooks/usePagination';
import ScrollAnimation from '@/components/UI/ScrollAnimation';
import Pagination from '@/components/UI/Pagination';

interface ProductGridProps {
  products: ProductDetail[];
  onSelectProduct: (product: ProductDetail) => void;
}

export default function ProductGrid({ products, onSelectProduct }: ProductGridProps) {
  const { currentPage, totalPages, displayedItems, goToPage } = usePagination(products, 6);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">产品系列</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedItems.map((product) => (
            <ScrollAnimation key={product.id} className="h-full">
              <div
                onClick={() => onSelectProduct(product)}
                className="group h-full bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white/90 backdrop-blur text-slate-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">查看详情</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                  <div className="mt-auto pt-4 border-t border-slate-50">
                    <div className="flex flex-wrap gap-2">
                      {product.specs.slice(0, 2).map((spec, idx) => (
                        <span key={idx} className="text-xs bg-slate-50 text-slate-500 px-2 py-1 rounded">{spec.label}: {spec.value}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
      </div>
    </section>
  );
}
