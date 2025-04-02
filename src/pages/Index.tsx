
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DemoSection from '../components/demo';
import IntegrationsSection from '../components/IntegrationsSection';
import BenefitsSection from '../components/BenefitsSection';
import SectorsSection from '../components/SectorsSection';
import SimulatorSection from '../components/SimulatorSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Problema: Hero Section apresenta o problema que a Jockepay resolve */}
      <HeroSection />
      
      {/* Solução: Demo Section mostra como a Jockepay resolve o problema */}
      <DemoSection />
      
      {/* Prova Social: Integrations Section mostra parceiros e credibilidade */}
      <IntegrationsSection />
      
      {/* Benefícios: Benefits Section detalha as vantagens */}
      <BenefitsSection />
      
      {/* Aplicação: Sectors Section mostra onde o produto se aplica */}
      <SectorsSection />
      
      {/* Simulação: Permite ao usuário ver resultados personalizados */}
      <SimulatorSection />
      
      {/* CTA final: Contact Section incentiva a ação */}
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
