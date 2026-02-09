export interface SubMenuItem {
  title: string;
  path: string;
  image?: string;
}

export interface MenuItem {
  title: string;
  path: string;
  submenu?: SubMenuItem[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: 'Latest' | 'Company' | 'Industry' | 'Tender';
  summary: string;
  image: string;
}

export interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}