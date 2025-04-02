
import React from 'react';
import { ArrowRight, Shuffle, BarChart3, LayoutDashboard, RefreshCw, Network } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Network size={32} className="text-jockepay-blue" />,
      title: "Orquestração inteligente entre PSPs",
      description: "Distribua transações entre múltiplos provedores de pagamento de forma estratégica e otimizada."
    },
    {
      icon: <Shuffle size={32} className="text-jockepay-blue" />,
      title: "Roteamento automático",
      description: "Direcione cada transação para o PSP com maior probabilidade de aprovação em tempo real."
    },
    {
      icon: <BarChart3 size={32} className="text-jockepay-blue" />,
      title: "Analytics e insights em tempo real",
      description: "Visualize métricas de desempenho e taxas de aprovação para tomar decisões baseadas em dados."
    },
    {
      icon: <LayoutDashboard size={32} className="text-jockepay-blue" />,
      title: "Dashboard centralizado",
      description: "Gerencie todas as suas transações em uma única interface intuitiva e poderosa."
    },
    {
      icon: <RefreshCw size={32} className="text-jockepay-blue" />,
      title: "Lógica de fallback e reprocessamento",
      description: "Recupere transações recusadas automaticamente através de rotas alternativas pré-definidas."
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-white dark:bg-jockepay-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A infraestrutura de pagamentos para empresas que querem crescer.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Optimize sua operação de pagamentos com nossa plataforma de orquestração, mantendo total autonomia e controle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gradient-card rounded-xl p-6 border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-primary/5 w-fit rounded-lg mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground mb-4">{benefit.description}</p>
              <a href="#" className="text-jockepay-blue font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Saiba mais <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
