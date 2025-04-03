import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { ref: navRef, isVisible: navIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
    <a
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
    >
      {children}
    </a>
  );

  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: navIsVisible ? 1 : 0,
        y: navIsVisible ? 0 : -20
      }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo completa para desktop */}
            <img 
              src="https://i.postimg.cc/L8zmSbJx/Sem-nome-500-x-200-px.png" 
              alt="JockPay Logo" 
              className="h-12 w-auto hidden md:block"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            {/* Ícone para mobile */}
            <img 
              src="https://i.postimg.cc/R044ZLf4/Blue-Modern-Technology-and-Software-Company-Logo-5.png" 
              alt="JockPay Icon" 
              className="h-8 w-auto md:hidden"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-white hover:text-jockepay-green transition-colors">Benefícios</a>
            <a href="#solutions" className="text-white hover:text-jockepay-green transition-colors">Soluções</a>
            <a href="#integrations" className="text-white hover:text-jockepay-green transition-colors">Integrações</a>
            <a href="#sectors" className="text-white hover:text-jockepay-green transition-colors">Segmentos</a>
            <Button 
              variant="primary"
              className="bg-jockepay-green hover:bg-jockepay-green/90 text-black font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black/90"></div>
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <img 
                  src="https://i.postimg.cc/R044ZLf4/Blue-Modern-Technology-and-Software-Company-Logo-5.png" 
                  alt="JockPay Logo" 
                  className="h-8 w-auto"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <nav className="flex-1 p-4 space-y-4">
                <MobileNavLink href="#benefits" onClick={() => setMobileMenuOpen(false)}>Benefícios</MobileNavLink>
                <MobileNavLink href="#solutions" onClick={() => setMobileMenuOpen(false)}>Soluções</MobileNavLink>
                <MobileNavLink href="#integrations" onClick={() => setMobileMenuOpen(false)}>Integrações</MobileNavLink>
                <MobileNavLink href="#sectors" onClick={() => setMobileMenuOpen(false)}>Segmentos</MobileNavLink>
                <div className="pt-4 border-t border-white/10">
                  <Button 
                    variant="primary"
                    className="w-full bg-jockepay-green hover:bg-jockepay-green/90 text-black font-semibold"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollToSection('contact');
                    }}
                  >
                    Fale Conosco
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
