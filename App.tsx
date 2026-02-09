import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import Products from './components/Home/Products';
import Values from './components/Home/Values';
import Stats from './components/Home/Stats';
import News from './components/Home/News';
import About from './components/About/About';
import NewsCenter from './components/News/NewsCenter';
import Party from './components/Party/Party';
import Innovation from './components/Innovation/Innovation';
import Contact from './components/Contact/Contact';
import Jobs from './components/Contact/Jobs';
import ProductCategory from './components/Products/ProductCategory';

// Simple placeholder page for routes that aren't fully built
const PlaceholderPage: React.FC = () => {
    const location = useLocation();
    const pageName = location.pathname.split('/').filter(Boolean).join(' - ').toUpperCase() || 'HOME';

    return (
        <div className="pt-32 pb-20 container mx-auto text-center min-h-[50vh]">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">{pageName}</h1>
            <p className="text-slate-500">页面正在建设中...</p>
        </div>
    );
};

const HomePage: React.FC = () => (
    <>
        <Hero />
        <Products />
        <Values />
        <Stats />
        <News />
    </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-white text-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/*" element={<About />} />
            
            {/* Product Routes - Dynamic Category Template */}
            <Route path="/products/:categoryId" element={<ProductCategory />} />
            {/* Redirect root /products to first category or home if clicked directly (though header prevents this usually) */}
            <Route path="/products" element={<HomePage />} />

            {/* Innovation Route */}
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/innovation/*" element={<Innovation />} />

            {/* News Routes */}
            <Route path="/news" element={<NewsCenter />} />
            <Route path="/news/:category" element={<NewsCenter />} />

            {/* Party Route */}
            <Route path="/party" element={<Party />} />

            {/* Contact Route */}
            <Route path="/contact/jobs" element={<Jobs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/*" element={<Contact />} />
            
            {/* Catch all other routes to show a nice placeholder instead of 404 for the demo */}
            <Route path="*" element={<PlaceholderPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;