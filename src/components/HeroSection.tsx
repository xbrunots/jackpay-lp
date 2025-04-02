
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Abstract tech background with animated elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-jockepay-dark to-jockepay-darkblue overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid-pattern"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-jockepay-blue/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-jockepay-neon/20 rounded-full filter blur-3xl animate-float-delayed"></div>
        
        {/* Data flow animation */}
        <div className="absolute inset-0 z-0 opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
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
        <div className="flex flex-col md:flex-row items-center gap-12 py-24">
          <div className="w-full md:w-1/2 text-left">
            <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-jockepay-neon text-sm">
              <span className="w-2 h-2 bg-jockepay-neon rounded-full mr-2 animate-pulse"></span>
              Infraestrutura de pagamentos do futuro
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up">
              <span className="text-jockepay-neon">Orquestre</span> seus pagamentos com <span className="bg-clip-text text-transparent bg-gradient-to-r from-jockepay-blue to-jockepay-neon">autonomia</span>, controle e escala.
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-up max-w-xl" style={{ animationDelay: '0.2s' }}>
              Integre múltiplos PSPs, aumente sua taxa de aprovação e otimize transações sem depender de checkout próprio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a href="#simulator" className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-jockepay-blue to-jockepay-blue/80 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-jockepay-blue/30">
                <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center gap-2">
                  Simule seu ganho <ArrowRight size={18} />
                </span>
              </a>
              
              <a href="#contact" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/10">
                Agende uma demonstração <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur p-1 border border-white/20 shadow-xl">
              <div className="bg-jockepay-dark/60 backdrop-blur rounded-xl overflow-hidden">
                {/* Header with dots */}
                <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-sm text-white/70">Jockepay Dashboard</div>
                </div>
                
                {/* Dashboard visualization */}
                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div className="text-sm text-white/90 font-medium">Roteamento de transações</div>
                    <div className="text-xs text-jockepay-neon">Ao vivo</div>
                  </div>
                  
                  {/* Payment Routes Visualization */}
                  <div className="relative h-60">
                    {/* Origin */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-jockepay-blue/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-jockepay-blue rounded-full flex items-center justify-center text-white text-xs">TX</div>
                    </div>
                    
                    {/* Routes */}
                    <div className="absolute left-16 right-0 top-0 bottom-0">
                      {/* Route 1 - Success */}
                      <div className="absolute top-1/6 left-0 right-0 h-8 flex items-center">
                        <div className="h-0.5 bg-gradient-to-r from-jockepay-blue to-green-500 w-full origin-left animate-grow"></div>
                        <div className="shrink-0 w-8 h-8 bg-green-500 rounded-full ml-2 flex items-center justify-center text-white text-xs">S</div>
                      </div>
                      
                      {/* Route 2 - Failed then success */}
                      <div className="absolute top-1/2 left-0 right-0 h-8 flex items-center">
                        <div className="h-0.5 bg-gradient-to-r from-jockepay-blue to-red-500 w-1/2 origin-left animate-grow" style={{ animationDelay: '0.3s' }}></div>
                        <div className="shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">F</div>
                        <div className="h-0.5 bg-gradient-to-r from-red-500 to-green-500 w-1/3 ml-2 origin-left animate-grow" style={{ animationDelay: '1.3s' }}></div>
                        <div className="shrink-0 w-6 h-6 bg-green-500 rounded-full ml-1 flex items-center justify-center text-white text-xs">S</div>
                      </div>
                      
                      {/* Route 3 - Processing */}
                      <div className="absolute top-5/6 left-0 right-0 h-8 flex items-center">
                        <div className="h-0.5 bg-gradient-to-r from-jockepay-blue to-yellow-500 w-3/4 origin-left animate-pulse-width"></div>
                        <div className="shrink-0 w-6 h-6 bg-yellow-500 rounded-full ml-2 flex items-center justify-center text-white text-xs">P</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="bg-white/5 rounded p-2 text-center">
                      <div className="text-xs text-white/60">Sucesso</div>
                      <div className="text-lg text-green-400">89.2%</div>
                    </div>
                    <div className="bg-white/5 rounded p-2 text-center">
                      <div className="text-xs text-white/60">Recuperados</div>
                      <div className="text-lg text-jockepay-neon">7.5%</div>
                    </div>
                    <div className="bg-white/5 rounded p-2 text-center">
                      <div className="text-xs text-white/60">Economia</div>
                      <div className="text-lg text-white">R$ 45K</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-jockepay-neon/30 rounded-full blur-xl"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-jockepay-blue/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
