import { lazy } from 'react';

// Higher-order component for code splitting with loading states
export const loadable = (importFunc, fallback = null) => {
  const LazyComponent = lazy(importFunc);
  
  return (props) => (
    <React.Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
};

// Preload function for critical routes
export const preloadRoute = (routeImport) => {
  const componentImport = routeImport();
  return componentImport;
};