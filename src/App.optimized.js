import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// Import optimized styles
import './styles/optimized/variables.css';
import './styles/optimized/base.css';
import './styles/optimized/utilities.css';

// Critical components (loaded immediately)
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';

// Lazy load non-critical components
const Resolution = lazy(() => import('./pages/Resolution/Resolution'));
const Servicess = lazy(() => import('./pages/Servicess/Servicess'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const CloudServices = lazy(() => import('./pages/Services/CloudServices'));
const AzureServices = lazy(() => import('./pages/Services/AzureServices'));
const AWSServices = lazy(() => import('./pages/Services/AWSServices'));
const GCPServices = lazy(() => import('./pages/Services/GCPServices'));
const Microsoft365Services = lazy(() => import('./pages/Services/Microsoft365Services'));
const Dynamics365Services = lazy(() => import('./pages/Services/Dynamics365Services'));
const DevelopmentServices = lazy(() => import('./pages/Services/DevelopmentServices'));
const InfrastructureServices = lazy(() => import('./pages/Services/InfrastructureServices'));
const SecurityServices = lazy(() => import('./pages/Services/SecurityServices'));
const Turbo360Services = lazy(() => import('./pages/Services/Turbo360Services'));
const ErosourceServices = lazy(() => import('./pages/Services/ErosourceServices'));

import { routes } from './routes.js';

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center" style={{ minHeight: '50vh' }}>
    <LoadingSpinner size="large" color="primary" />
  </div>
);

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Header />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path={routes.home.path} element={<Resolution />} />
                <Route path={routes.servicess.path} element={<Servicess />} />
                <Route path={routes.contact.path} element={<Contact />} />
                <Route path={routes.company.path} element={<Resolution />} />
                <Route path={routes.elements.path} element={<Resolution />} />
                <Route path={routes.caseStudies.path} element={<Resolution />} />
                <Route path={routes.blog.path} element={<Resolution />} />
                
                {/* Cloud Services */}
                <Route path={routes.cloudServices.path} element={<CloudServices />} />
                <Route path={routes.azure.path} element={<AzureServices />} />
                <Route path={routes.aws.path} element={<AWSServices />} />
                <Route path={routes.gcp.path} element={<GCPServices />} />
                
                {/* Other Services */}
                <Route path={routes.microsoft365.path} element={<Microsoft365Services />} />
                <Route path={routes.dynamics365.path} element={<Dynamics365Services />} />
                <Route path={routes.development.path} element={<DevelopmentServices />} />
                <Route path={routes.infrastructure.path} element={<InfrastructureServices />} />
                <Route path={routes.security.path} element={<SecurityServices />} />
                <Route path={routes.turbo360.path} element={<Turbo360Services />} />
                <Route path={routes.erosource.path} element={<ErosourceServices />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;