"use client"

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Resolution from "./pages/Resolution/Resolution"
import Servicess from "./pages/Servicess/Servicess"
import Contact from "./pages/Contact/Contact"
import CloudServices from "./pages/Services/CloudServices"
import AzureServices from "./pages/Services/AzureServices"
import AWSServices from "./pages/Services/AWSServices"
import GCPServices from "./pages/Services/GCPServices"
import Microsoft365Services from "./pages/Services/Microsoft365Services"
import Dynamics365Services from "./pages/Services/Dynamics365Services"
import DevelopmentServices from "./pages/Services/DevelopmentServices"
import InfrastructureServices from "./pages/Services/InfrastructureServices"
import SecurityServices from "./pages/Services/SecurityServices.jsx"
import Turbo360Services from "./pages/Services/Turbo360Services"
import ErosourceServices from "./pages/Services/ErosourceServices"
import { routes } from './routes.js'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
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
          
          {/* Other Individual Service Pages */}
          <Route path={routes.microsoft365.path} element={<Microsoft365Services />} />
          <Route path={routes.dynamics365.path} element={<Dynamics365Services />} />
          <Route path={routes.development.path} element={<DevelopmentServices />} />
          <Route path={routes.infrastructure.path} element={<InfrastructureServices />} />
          <Route path={routes.security.path} element={<SecurityServices />} />
          <Route path={routes.turbo360.path} element={<Turbo360Services />} />
          <Route path={routes.erosource.path} element={<ErosourceServices />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App