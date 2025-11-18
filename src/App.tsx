import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustedCustomers from './components/TrustedCustomers';
import CostSavings from './components/CostSavings';
import ProductTour from './components/ProductTour';
import CostVisibility from './components/CostVisibility';
import CostOptimization from './components/CostOptimization';
import ConnectAzure from './components/ConnectAzure';
import UnifiedMonitoring from './components/UnifiedMonitoring';
import BusinessMonitoring from './components/BusinessMonitoring';
import CaseStudies from './components/CaseStudies';
import Awards from './components/Awards';
import CostCalculator from './components/CostCalculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustedCustomers />
      <CostSavings />
      <ProductTour />
      <CostVisibility />
      <CostOptimization />
      <ConnectAzure />
      <UnifiedMonitoring />
      <BusinessMonitoring />
      <CaseStudies />
      <Awards />
      <CostCalculator />
      <Footer />
    </div>
  );
}

export default App;
