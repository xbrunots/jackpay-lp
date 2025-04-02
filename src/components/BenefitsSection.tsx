
import React from 'react';
import { ArrowRight, Network, Shuffle, BarChart3, LayoutDashboard, RefreshCw } from 'lucide-react';

const BenefitsSection = () => {
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
    }
  ];

  return (
    <section id="benefits" className="py-32 md:py-40 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-jockepay-dark to-background z-0"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-10 z-0"></div>
      
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-jockepay-dark z-0">
        <svg className="absolute -bottom-px w-full h-24" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 96L60 85.3C120 74.7 240 53.3 360 42.7C480 32 600 32 720 37.3C840 42.7 960 53.3 1080 53.3C1200 53.3 1320 42.7 1380 37.3L1440 32V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z" fill="currentColor" className="text-background" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block mb-4">
            <span className="backdrop-blur-sm bg-white/5 dark:bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-neon">Recursos poderosos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
            Infraestrutura de pagamentos para
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-jockepay-blue to-jockepay-neon ml-2 font-bold">empresas que querem crescer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Otimize sua operação mantendo total autonomia e controle sobre sua infraestrutura de pagamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative backdrop-blur-sm bg-white/5 dark:bg-black/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle border */}
              <div className="absolute inset-0 border border-white/10 dark:border-white/5 rounded-2xl"></div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-jockepay-blue/5 to-jockepay-neon/5 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8">
                <div className="mb-6">
                  <div className="p-3 bg-white/5 dark:bg-white/5 backdrop-blur-sm w-12 h-12 flex items-center justify-center rounded-xl border border-white/10">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-jockepay-neon transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{benefit.description}</p>
                <div className="pt-2 border-t border-white/5">
                  <a href="#" className="inline-flex items-center text-jockepay-neon text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                    Saiba mais <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
