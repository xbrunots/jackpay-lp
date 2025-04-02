
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-jockepay-dark/80 backdrop-blur-xl shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom flex justify-between items-center py-4">
        <a href="/" className="group flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-jockepay-blue to-jockepay-neon mr-2 flex items-center justify-center text-white font-bold">
            J
          </div>
          <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-jockepay-blue to-jockepay-darkblue dark:from-jockepay-blue dark:to-jockepay-neon group-hover:bg-gradient-to-r group-hover:from-jockepay-darkblue group-hover:to-jockepay-neon transition-all duration-300">
            Jockepay
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-1">
          <NavLink href="#benefits">Benefícios</NavLink>
          <NavLink href="#solutions">Soluções</NavLink>
          <NavLink href="#integrations">Integrações</NavLink>
          <NavLink href="#sectors">Segmentos</NavLink>
          
          <div className="ml-6 flex items-center space-x-4">
            <a href="#simulator" className="relative px-5 py-2 overflow-hidden font-medium text-jockepay-blue bg-white/10 dark:bg-white/5 border border-jockepay-blue/20 dark:border-white/10 rounded-lg shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-jockepay-blue group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-jockepay-blue group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-jockepay-blue/10 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-jockepay-blue/10 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gradient-to-r from-transparent to-transparent group-hover:from-jockepay-blue/5 group-hover:to-transparent transition-all ease"></span>
              <span className="relative transition-colors duration-300 group-hover:text-jockepay-blue ease">Simule seu ganho</span>
            </a>
            
            <a href="#contact" className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-jockepay-blue rounded-lg group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-jockepay-darkblue rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-in-out bg-jockepay-blue rounded-lg group-hover:bg-jockepay-darkblue"></span>
              <span className="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Agende uma demonstração
              </span>
            </a>
          </div>
        </div>

        <button 
          className="md:hidden relative w-10 h-10 flex items-center justify-center bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-white/20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={20} className="text-foreground" />
          ) : (
            <Menu size={20} className="text-foreground" />
          )}
          {/* Button highlight effect */}
          <span className={`absolute inset-0 rounded-lg bg-jockepay-blue/10 transform scale-0 transition-transform duration-300 ${mobileMenuOpen ? 'scale-100' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu with smooth transition */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-jockepay-dark backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="container py-8 px-6 h-[calc(100vh-64px)] flex flex-col">
          <div className="flex-1 flex flex-col space-y-6">
            <MobileNavLink href="#benefits" onClick={() => setMobileMenuOpen(false)}>Benefícios</MobileNavLink>
            <MobileNavLink href="#solutions" onClick={() => setMobileMenuOpen(false)}>Soluções</MobileNavLink>
            <MobileNavLink href="#integrations" onClick={() => setMobileMenuOpen(false)}>Integrações</MobileNavLink>
            <MobileNavLink href="#sectors" onClick={() => setMobileMenuOpen(false)}>Segmentos</MobileNavLink>
          </div>
          
          <div className="mt-auto space-y-4 py-6">
            <a href="#simulator" className="block w-full py-3 text-center bg-jockepay-blue/10 text-jockepay-blue dark:text-jockepay-blue rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Simule seu ganho
            </a>
            <a href="#contact" className="block w-full py-3 text-center bg-jockepay-blue text-white rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Agende uma demonstração
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop navigation link with hover effect
const NavLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="relative px-4 py-2 text-foreground hover:text-jockepay-blue dark:hover:text-jockepay-neon transition-colors group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-jockepay-blue dark:bg-jockepay-neon transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
};

// Mobile navigation link with animated indicator
const MobileNavLink = ({ href, onClick, children }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="relative flex items-center py-4 border-b border-border/30 text-lg font-medium group"
    >
      <span className="w-1 h-8 bg-jockepay-blue rounded-r transform scale-y-0 origin-left absolute left-0 transition-transform duration-300 group-hover:scale-y-100" />
      <span className="ml-3 group-hover:ml-5 transition-all duration-300 group-hover:text-jockepay-blue dark:group-hover:text-jockepay-neon">{children}</span>
    </a>
  );
};

export default Navbar;
