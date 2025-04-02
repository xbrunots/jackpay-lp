
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-jockepay-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom flex justify-between items-center py-4">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-heading font-bold text-jockepay-blue">Jockepay</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className="text-foreground hover:text-jockepay-blue transition-colors">Benefícios</a>
          <a href="#solutions" className="text-foreground hover:text-jockepay-blue transition-colors">Soluções</a>
          <a href="#integrations" className="text-foreground hover:text-jockepay-blue transition-colors">Integrações</a>
          <a href="#sectors" className="text-foreground hover:text-jockepay-blue transition-colors">Segmentos</a>
          <a href="#simulator" className="btn-secondary">Simule seu ganho</a>
          <a href="#contact" className="btn-primary">Agende uma demonstração</a>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-jockepay-dark shadow-lg">
          <div className="container py-4 space-y-4 flex flex-col">
            <a href="#benefits" className="text-foreground hover:text-jockepay-blue py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Benefícios</a>
            <a href="#solutions" className="text-foreground hover:text-jockepay-blue py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Soluções</a>
            <a href="#integrations" className="text-foreground hover:text-jockepay-blue py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Integrações</a>
            <a href="#sectors" className="text-foreground hover:text-jockepay-blue py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Segmentos</a>
            <a href="#simulator" className="btn-secondary w-full text-center" onClick={() => setMobileMenuOpen(false)}>Simule seu ganho</a>
            <a href="#contact" className="btn-primary w-full text-center" onClick={() => setMobileMenuOpen(false)}>Agende uma demonstração</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
