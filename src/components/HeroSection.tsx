
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-jockepay-blue/10 rounded-full filter blur-3xl animate-flow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-jockepay-neon/10 rounded-full filter blur-3xl animate-flow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Payment flow animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-jockepay-blue/30 h-1 rounded-full animate-flow"
            style={{
              width: `${Math.random() * 150 + 100}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: '5%',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 4 + 6}s`,
              opacity: Math.random() * 0.5 + 0.3,
              transform: 'translateX(0)',
              animation: `flow ${Math.random() * 4 + 6}s infinite alternate`
            }}
          ></div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up">
            Orquestre seus pagamentos com autonomia, controle e escala.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Integre múltiplos PSPs, aumente sua taxa de aprovação e otimize transações sem depender de checkout próprio.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#simulator" className="btn-primary flex items-center justify-center gap-2">
              Simule seu ganho <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white hover:text-jockepay-blue flex items-center justify-center gap-2">
              Agende uma demonstração <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
