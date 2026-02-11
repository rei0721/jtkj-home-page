import { X, Layers, Zap, Check } from 'lucide-react';
import { ProductDetail } from '@/types';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

interface ProductModalProps {
  product: ProductDetail;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useBodyScrollLock(true);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in-up flex flex-col md:flex-row">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-20">
          <X size={24} className="text-slate-600" />
        </button>
        <div className="w-full md:w-2/5 h-64 md:h-auto bg-slate-100 relative">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
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
}
