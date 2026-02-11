import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import AppRouter from '@/router';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans bg-white text-slate-900">
        <Header />
        <main className="flex-grow">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
