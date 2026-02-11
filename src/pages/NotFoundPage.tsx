import { useLocation } from 'react-router-dom';

export default function NotFoundPage() {
  const location = useLocation();
  const pageName = location.pathname.split('/').filter(Boolean).join(' - ').toUpperCase() || 'HOME';

  return (
    <div className="pt-32 pb-20 container mx-auto text-center min-h-[50vh]">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">{pageName}</h1>
      <p className="text-slate-500">页面正在建设中...</p>
    </div>
  );
}
