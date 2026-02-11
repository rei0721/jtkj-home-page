export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Scenario {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDetail {
  id: number;
  name: string;
  image: string;
  specs: ProductSpec[];
  features: string[];
}

export interface CategoryData {
  title: string;
  subtitle: string;
  heroSlides: string[];
  description: string;
  scenarios: Scenario[];
  products: ProductDetail[];
}
