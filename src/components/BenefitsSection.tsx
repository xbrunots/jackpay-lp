
import React from 'react';
import { ArrowRight, Network, Shuffle, BarChart3, LayoutDashboard, RefreshCw, Shield, Zap } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';

const BenefitsSection = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });
  
  const benefits = [
    {
      icon: <Network strokeWidth={1.5} className="text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Orquestração inteligente",
      description: "Distribua transações entre múltiplos provedores de forma estratégica e otimizada."
    },
    {
      icon: <Shuffle strokeWidth={1.5} className="text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Roteamento automático",
      description: "Direcione cada transação para o PSP com maior probabilidade de aprovação em tempo real."
    },
    {
      icon: <BarChart3 strokeWidth={1.5} className="text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Analytics em tempo real",
      description: "Visualize métricas de desempenho e taxas de aprovação para tomar decisões baseadas em dados."
    },
    {
      icon: <LayoutDashboard strokeWidth={1.5} className="text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Dashboard centralizado",
      description: "Gerencie todas as suas transações em uma única interface intuitiva e poderosa."
    },
    {
      icon: <RefreshCw strokeWidth={1.5} className="text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Lógica de fallback",
      description: "Recupere transações recusadas automaticamente através de rotas alternativas."
    },
    {
      icon: <Shield strokeWidth={1.5} className="text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Segurança avançada",
      description: "Proteja seus dados e transações com os mais altos padrões de segurança do mercado."
    },
  ];

  return (
    <section 
      id="benefits" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-32 md:py-40 relative bg-gradient-to-b from-background to-jockepay-dark/10"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-10 z-0"></div>
      
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-jockepay-dark to-transparent z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className={`text-center mb-24 transition-all duration-700 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="backdrop-blur-sm bg-jockepay-neon/10 dark:bg-jockepay-neon/10 border border-jockepay-neon/20 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-neon">Recursos poderosos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-foreground" style={{ lineHeight: '1.3', fontWeight: 600 }}>
            Infraestrutura de pagamentos para
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-jockepay-blue to-jockepay-neon ml-2 font-bold">empresas que querem crescer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)' }}>
            Otimize sua operação mantendo total autonomia e controle sobre sua infraestrutura de pagamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group relative backdrop-blur-sm bg-white/10 dark:bg-white/5 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-jockepay-blue/10 hover:scale-[1.02] ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                transitionDelay: `${index * 0.1}s`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
              }}
            >
              {/* Subtle border */}
              <div className="absolute inset-0 border border-white/20 dark:border-white/10 rounded-lg"></div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-jockepay-blue/10 to-jockepay-neon/10 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8 py-10">
                <div className="mb-6">
                  <div className="p-3 bg-white/10 dark:bg-white/10 backdrop-blur-sm w-12 h-12 flex items-center justify-center rounded-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-jockepay-neon transition-colors" style={{ fontWeight: 600, color: '#0f172a' }}>{benefit.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{benefit.description}</p>
                <div className="pt-2 border-t border-white/10">
                  <a href="#contact" className="inline-flex items-center text-jockepay-neon text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                    Saiba mais <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional feature highlight */}
        <div className={`mt-16 backdrop-blur-sm bg-jockepay-dark/30 rounded-xl border border-white/10 p-6 md:p-10 transition-all duration-700 delay-500 hover:shadow-lg hover:shadow-jockepay-blue/10 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-jockepay-blue to-jockepay-neon rounded-xl flex items-center justify-center animate-pulse-slow">
                <Zap size={32} className="text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-2 text-white">Aumente sua taxa de aprovação em até 15%</h3>
              <p className="text-white/80">Nossa tecnologia de orquestração inteligente analisa o perfil de cada transação e escolhe o melhor processador para maximizar as chances de aprovação, aumentando sua receita e satisfação dos clientes.</p>
            </div>
            <div className="flex-shrink-0">
              <a href="#simulator" className="inline-flex items-center justify-center py-3 px-6 bg-jockepay-neon text-jockepay-dark font-medium rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg group hover:scale-[1.02]">
                Ver demonstração <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
