import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ProductDetail } from '@/types';
import { DATA_STORE } from '@/data/products/productStore';
import HeroSlider from './HeroSlider';
import ScenarioDisplay from './ScenarioDisplay';
import ProductGrid from './ProductGrid';
import ProductModal from './ProductModal';

export default function ProductCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  useEffect(() => {
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  }, [categoryId]);

  const data = categoryId ? DATA_STORE[categoryId] : null;
  if (!data) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-white">
      <HeroSlider title={data.title} subtitle={data.subtitle} description={data.description} heroSlides={data.heroSlides} />
      <ScenarioDisplay scenarios={data.scenarios} />
      <ProductGrid products={data.products} onSelectProduct={setSelectedProduct} />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}
