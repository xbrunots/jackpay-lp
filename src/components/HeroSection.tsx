
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Abstract tech background with animated elements */}
      <div className="absolute inset-0 z-0 bg-gradient-hero overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-jockepay-blue/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-jockepay-neon/10 rounded-full filter blur-3xl animate-float-delayed"></div>
        
        {/* Data flow animation */}
        <div className="absolute inset-0 z-0 opacity-20">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-gradient-to-r from-jockepay-blue/50 to-jockepay-neon/50 h-0.5 rounded-full animate-data-flow"
              style={{
                width: `${Math.random() * 150 + 100}px`,
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 30}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${Math.random() * 4 + 6}s`,
                transform: 'translateX(-100%)'
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center md:gap-16 lg:gap-24 py-12">
          <div className="w-full md:w-1/2 text-left">
            <div className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 text-jockepay-neon text-sm">
              <span className="w-2 h-2 bg-jockepay-neon rounded-full mr-2 animate-pulse"></span>
              Infraestrutura de pagamentos do futuro
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
              <span className="text-jockepay-neon font-bold">Orquestre</span> pagamentos com <span className="bg-clip-text text-transparent bg-gradient-to-r from-jockepay-blue to-jockepay-neon">autonomia</span> e escala.
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Integre múltiplos PSPs, aumente sua taxa de aprovação e otimize transações sem depender de checkout próprio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#simulator" className="relative overflow-hidden group py-4 px-6 bg-gradient-to-r from-jockepay-blue to-jockepay-blue/80 text-white font-medium rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-jockepay-blue/30">
                <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center gap-2">
                  Simule seu ganho <ArrowRight size={18} />
                </span>
              </a>
              
              <a href="#contact" className="py-4 px-6 backdrop-blur-sm bg-white/5 border border-white/10 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/10">
                Agende uma demonstração <ChevronRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative mt-16 md:mt-0">
            <div className="relative z-10 backdrop-blur-sm rounded-2xl bg-black/20 p-1 border border-white/10 shadow-xl">
              <div className="bg-jockepay-dark/60 backdrop-blur-sm rounded-xl overflow-hidden">
                {/* Header with dots */}
                <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
                  <div className="w-3 h-3 bg-jockepay-danger rounded-full"></div>
                  <div className="w-3 h-3 bg-jockepay-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-jockepay-success rounded-full"></div>
                  <div className="ml-4 text-sm text-white/70 flex-1 text-center">Jockepay Dashboard</div>
                </div>
                
                {/* Dashboard visualization */}
                <div className="p-6">
                  <div className="flex justify-between mb-6">
                    <div className="text-sm text-white/90 font-medium">Orquestração em tempo real</div>
                    <div className="text-xs px-2.5 py-0.5 rounded-full bg-jockepay-success/20 text-jockepay-success flex items-center">
                      <span className="w-1.5 h-1.5 bg-jockepay-success rounded-full mr-1.5 animate-status-pulse"></span>
                      Ao vivo
                    </div>
                  </div>
                  
                  {/* Payment Routes Visualization - Updated for better fallback visualization */}
                  <div className="relative h-72">
                    {/* Origin */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-jockepay-blue/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-jockepay-blue/30 animate-node-pulse">
                      <div className="w-10 h-10 bg-jockepay-blue rounded-full flex items-center justify-center text-white text-xs font-medium">TX</div>
                    </div>
                    
                    {/* Routes */}
                    <div className="absolute left-20 right-0 top-0 bottom-0">
                      {/* Route 1 - Success */}
                      <div className="absolute top-1/4 left-0 right-0 h-10 flex items-center">
                        <div className="h-0.5 bg-gradient-to-r from-jockepay-blue to-jockepay-success w-full origin-left animate-grow"></div>
                        <div className="shrink-0 ml-2 px-3 py-1.5 bg-jockepay-success/20 backdrop-blur-sm text-jockepay-success text-xs rounded-lg border border-jockepay-success/30 font-medium flex items-center">
                          <span className="w-2 h-2 bg-jockepay-success rounded-full mr-2"></span>
                          PSP 1 | Aprovado
                        </div>
                      </div>
                      
                      {/* Route 2 - Failed then success */}
                      <div className="absolute top-1/2 left-0 right-0 h-10 flex items-center">
                        <div className="h-0.5 bg-gradient-to-r from-jockepay-blue to-jockepay-danger w-3/5 origin-left animate-grow" style={{ animationDelay: '0.3s' }}></div>
                        <div className="shrink-0 ml-2 px-3 py-1.5 bg-jockepay-danger/20 backdrop-blur-sm text-jockepay-danger text-xs rounded-lg border border-jockepay-danger/30 font-medium flex items-center">
                          <span className="w-2 h-2 bg-jockepay-danger rounded-full mr-2"></span>
                          PSP 2 | Recusado
                        </div>
                      </div>
                      
                      {/* Route 2b - Fallback after fail */}
                      <div className="absolute top-1/2 translate-y-10 left-3/5 right-0 h-10 flex items-center">
                        <div className="h-8 w-0.5 bg-gradient-to-b from-jockepay-danger to-jockepay-neon origin-top animate-grow" style={{ animationDelay: '1.3s' }}></div>
                        <div className="absolute top-8 left-0 right-0 h-10 flex items-center">
                          <div className="h-0.5 bg-gradient-to-r from-jockepay-neon to-jockepay-success w-3/4 origin-left animate-grow" style={{ animationDelay: '1.5s' }}></div>
                          <div className="shrink-0 ml-2 px-3 py-1.5 bg-jockepay-success/20 backdrop-blur-sm text-jockepay-success text-xs rounded-lg border border-jockepay-success/30 font-medium flex items-center animate-appear" style={{ animationDelay: '1.8s', opacity: 0 }}>
                            <span className="w-2 h-2 bg-jockepay-success rounded-full mr-2"></span>
                            PSP 3 | Aprovado
                          </div>
                        </div>
                      </div>
                      
                      {/* Route 3 - Processing */}
                      <div className="absolute top-3/4 left-0 right-0 h-10 flex items-center">
                        <div className="h-0.5 bg-gradient-to-r from-jockepay-blue to-jockepay-warning w-4/5 origin-left animate-pulse-width"></div>
                        <div className="shrink-0 ml-2 px-3 py-1.5 bg-jockepay-warning/20 backdrop-blur-sm text-jockepay-warning text-xs rounded-lg border border-jockepay-warning/30 font-medium flex items-center">
                          <span className="w-2 h-2 bg-jockepay-warning rounded-full mr-2 animate-pulse"></span>
                          PSP 4 | Em processo
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="backdrop-blur-sm bg-white/5 rounded-xl p-3 text-center border border-white/10">
                      <div className="text-xs text-white/60 mb-1">Sucesso</div>
                      <div className="text-xl font-semibold text-jockepay-success">89.2%</div>
                    </div>
                    <div className="backdrop-blur-sm bg-white/5 rounded-xl p-3 text-center border border-white/10">
                      <div className="text-xs text-white/60 mb-1">Recuperados</div>
                      <div className="text-xl font-semibold text-jockepay-neon">7.5%</div>
                    </div>
                    <div className="backdrop-blur-sm bg-white/5 rounded-xl p-3 text-center border border-white/10">
                      <div className="text-xs text-white/60 mb-1">Economia</div>
                      <div className="text-xl font-semibold text-white">R$ 45K</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-jockepay-neon/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-jockepay-blue/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
