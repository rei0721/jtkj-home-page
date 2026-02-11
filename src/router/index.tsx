import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import LoadingSpinner from '@/components/UI/LoadingSpinner';

export default function AppRouter() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </Suspense>
  );
}
