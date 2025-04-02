
import React from 'react';
import { ArrowRight, Shuffle, BarChart3, LayoutDashboard, RefreshCw, Network } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Network className="text-jockepay-blue group-hover:text-jockepay-neon transition-colors duration-300" />,
      title: "Orquestração inteligente entre PSPs",
      description: "Distribua transações entre múltiplos provedores de pagamento de forma estratégica e otimizada."
    },
    {
      icon: <Shuffle className="text-jockepay-blue group-hover:text-jockepay-neon transition-colors duration-300" />,
      title: "Roteamento automático",
      description: "Direcione cada transação para o PSP com maior probabilidade de aprovação em tempo real."
    },
    {
      icon: <BarChart3 className="text-jockepay-blue group-hover:text-jockepay-neon transition-colors duration-300" />,
      title: "Analytics e insights em tempo real",
      description: "Visualize métricas de desempenho e taxas de aprovação para tomar decisões baseadas em dados."
    },
    {
      icon: <LayoutDashboard className="text-jockepay-blue group-hover:text-jockepay-neon transition-colors duration-300" />,
      title: "Dashboard centralizado",
      description: "Gerencie todas as suas transações em uma única interface intuitiva e poderosa."
    },
    {
      icon: <RefreshCw className="text-jockepay-blue group-hover:text-jockepay-neon transition-colors duration-300" />,
      title: "Lógica de fallback e reprocessamento",
      description: "Recupere transações recusadas automaticamente através de rotas alternativas pré-definidas."
    }
  ];

  return (
    <section id="benefits" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-jockepay-dark to-background z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-jockepay-dark z-0">
        <svg className="absolute -bottom-px w-full h-24" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 96L60 85.3C120 74.7 240 53.3 360 42.7C480 32 600 32 720 37.3C840 42.7 960 53.3 1080 53.3C1200 53.3 1320 42.7 1380 37.3L1440 32V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z" fill="currentColor" className="text-background" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-jockepay-blue/20 to-jockepay-neon/20 px-4 py-1 rounded-full text-sm font-medium text-jockepay-blue dark:text-jockepay-neon">Recursos poderosos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            A infraestrutura de pagamentos para 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-jockepay-blue to-jockepay-neon ml-2">empresas que querem crescer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Otimize sua operação de pagamentos com nossa plataforma de orquestração, 
            mantendo total autonomia e controle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 dark:border-white/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-jockepay-blue/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing background effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-jockepay-blue/0 to-jockepay-neon/0 rounded-xl blur opacity-0 group-hover:opacity-30 group-hover:duration-500 duration-300 transition"></div>
              
              {/* Icon with glass effect */}
              <div className="relative">
                <div className="p-3 mb-6 bg-white/10 dark:bg-white/5 backdrop-blur-sm w-14 h-14 flex items-center justify-center rounded-xl border border-white/20">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-jockepay-neon transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground mb-6">{benefit.description}</p>
                <a href="#" className="inline-flex items-center text-jockepay-blue dark:text-jockepay-neon font-medium gap-1 group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
