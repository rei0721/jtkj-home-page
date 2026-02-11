import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ProductCategoryPage = lazy(() => import('@/pages/ProductCategoryPage'));
const InnovationPage = lazy(() => import('@/pages/InnovationPage'));
const NewsCenterPage = lazy(() => import('@/pages/NewsCenterPage'));
const NewsArticlePage = lazy(() => import('@/pages/NewsArticlePage'));
const PartyPage = lazy(() => import('@/pages/PartyPage'));
const PartyArticlePage = lazy(() => import('@/pages/PartyArticlePage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const JobsPage = lazy(() => import('@/pages/JobsPage'));
const SearchPage = lazy(() => import('@/pages/SearchPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export const routes = [
  { path: '/', element: HomePage },
  { path: '/about', element: AboutPage },
  { path: '/about/*', element: AboutPage },
  { path: '/products/:categoryId', element: ProductCategoryPage },
  { path: '/products', element: HomePage },
  { path: '/innovation', element: InnovationPage },
  { path: '/innovation/*', element: InnovationPage },
  { path: '/news', element: NewsCenterPage },
  { path: '/news/article/:id', element: NewsArticlePage },
  { path: '/news/:category', element: NewsCenterPage },
  { path: '/party', element: PartyPage },
  { path: '/party/:id', element: PartyArticlePage },
  { path: '/contact/jobs', element: JobsPage },
  { path: '/contact', element: ContactPage },
  { path: '/contact/*', element: ContactPage },
  { path: '/search', element: SearchPage },
  { path: '*', element: NotFoundPage },
];
