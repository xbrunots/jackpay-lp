
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import DemoSection from '../components/DemoSection';
import IntegrationsSection from '../components/IntegrationsSection';
import SectorsSection from '../components/SectorsSection';
import SimulatorSection from '../components/SimulatorSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <DemoSection />
      <IntegrationsSection />
      <SectorsSection />
      <SimulatorSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
