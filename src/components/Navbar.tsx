
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import AccessibleIcon from './ui/AccessibleIcon';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollDirection = useScrollDirection(10);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply classes based on scroll direction
  const navbarVisibilityClass = scrollDirection === 'down' && scrolled ? '-translate-y-full' : 'translate-y-0';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl shadow-md' 
          : 'bg-transparent'
      } ${navbarVisibilityClass}`}
      aria-label="Navegação principal"
    >
      <div className="container-custom flex justify-between items-center py-4">
        <a 
          href="/" 
          className="group flex items-center"
          aria-label="Jockepay - Página inicial"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-jockepay-blue to-jockepay-neon mr-2 flex items-center justify-center text-white font-bold shadow-glow transition-all duration-300 group-hover:shadow-neon">
            J
          </div>
          <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-jockepay-blue to-jockepay-neon transition-all duration-300">
            Jockepay
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-1">
          <NavLink href="#benefits">Benefícios</NavLink>
          <NavLink href="#solutions">Soluções</NavLink>
          <NavLink href="#integrations">Integrações</NavLink>
          <NavLink href="#sectors">Segmentos</NavLink>
          
          <div className="ml-6 flex items-center space-x-4">
            <a 
              href="#simulator" 
              className="relative overflow-hidden px-5 py-2 font-medium text-white bg-jockepay-green/90 border border-jockepay-green/30 rounded-lg shadow-md hover:shadow-jockepay-green/20 transition-all duration-300 group hover:scale-105"
              aria-label="Simule seu ganho com a Jockepay"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-jockepay-green/0 via-white/20 to-jockepay-green/0 -translate-x-full group-hover:animate-shimmer"></span>
              <span className="relative">Simule seu ganho</span>
            </a>
            
            <a 
              href="#contact" 
              className="relative overflow-hidden px-5 py-2 font-medium text-white bg-jockepay-blue border border-jockepay-blue/40 rounded-lg shadow-md hover:shadow-jockepay-blue/30 transition-all duration-300 group hover:scale-105"
              aria-label="Agende uma demonstração da Jockepay"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-jockepay-blue/0 via-white/20 to-jockepay-blue/0 -translate-x-full group-hover:animate-shimmer"></span>
              <span className="relative">Agende uma demonstração</span>
            </a>
          </div>
        </div>

        <button 
          className="md:hidden relative w-10 h-10 flex items-center justify-center bg-jockepay-blue/20 backdrop-blur-sm rounded-lg border border-jockepay-blue/30 text-white transition-all duration-300 hover:bg-jockepay-blue/30"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <AccessibleIcon label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {mobileMenuOpen ? (
              <X size={20} className="transition-transform duration-300 rotate-90 animate-in" />
            ) : (
              <Menu size={20} className="transition-transform duration-300" />
            )}
          </AccessibleIcon>
          <span className={`absolute inset-0 rounded-lg bg-jockepay-blue/20 transform scale-0 transition-transform duration-300 ${mobileMenuOpen ? 'scale-100' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu with smooth transition */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-label="Menu de navegação móvel"
      >
        <div className="container py-8 px-6 h-[calc(100vh-64px)] flex flex-col">
          <div className="flex-1 flex flex-col space-y-2">
            <MobileNavLink href="#benefits" onClick={() => setMobileMenuOpen(false)}>Benefícios</MobileNavLink>
            <MobileNavLink href="#solutions" onClick={() => setMobileMenuOpen(false)}>Soluções</MobileNavLink>
            <MobileNavLink href="#integrations" onClick={() => setMobileMenuOpen(false)}>Integrações</MobileNavLink>
            <MobileNavLink href="#sectors" onClick={() => setMobileMenuOpen(false)}>Segmentos</MobileNavLink>
          </div>
          
          <div className="mt-auto space-y-4 py-6">
            <a 
              href="#simulator" 
              className="block w-full py-3 text-center bg-jockepay-green text-white rounded-lg font-medium transition-all duration-300 hover:bg-jockepay-green/90 shadow-md border border-jockepay-green/30" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Simule seu ganho com a Jockepay"
            >
              Simule seu ganho
            </a>
            <a 
              href="#contact" 
              className="block w-full py-3 text-center bg-jockepay-blue text-white rounded-lg font-medium transition-all duration-300 hover:bg-jockepay-blue/90 shadow-md border border-jockepay-blue/40" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Agende uma demonstração da Jockepay"
            >
              Agende uma demonstração
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop navigation link with enhanced hover effect
const NavLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="relative px-4 py-2 text-white hover:text-jockepay-neon transition-colors duration-300 group overflow-hidden"
      aria-label={`Ir para seção ${children}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-jockepay-blue to-jockepay-neon transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
    </a>
  );
};

// Mobile navigation link with enhanced animation
const MobileNavLink = ({ href, onClick, children }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="relative flex items-center py-4 border-b border-white/20 text-lg font-medium text-white group transition-all duration-300"
      aria-label={`Ir para seção ${children}`}
    >
      <span className="w-1 h-8 bg-gradient-to-b from-jockepay-blue to-jockepay-neon rounded-r transform scale-y-0 origin-left absolute left-0 transition-transform duration-300 group-hover:scale-y-100" />
      <span className="ml-3 group-hover:ml-5 transition-all duration-300 group-hover:text-jockepay-neon">{children}</span>
      <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
    </a>
  );
};

export default Navbar;
