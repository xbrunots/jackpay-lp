
import React from 'react';
import { ArrowRight, ShoppingBag, Code, Banknote, Truck, GraduationCap, Building } from 'lucide-react';

const SectorsSection = () => {
  const sectors = [
    {
      icon: <ShoppingBag size={32} className="text-jockepay-blue" />,
      title: "E-Commerce",
      description: "Melhore as taxas de conversão e reduza custos transacionais com roteamento inteligente entre PSPs."
    },
    {
      icon: <Code size={32} className="text-jockepay-blue" />,
      title: "SaaS",
      description: "Otimize cobranças recorrentes e reduza taxas de churn oferecendo alternativas de pagamento."
    },
    {
      icon: <Banknote size={32} className="text-jockepay-blue" />,
      title: "Fintech",
      description: "Ganhe flexibilidade com múltiplas integrações e melhore o desempenho de pagamentos."
    },
    {
      icon: <Truck size={32} className="text-jockepay-blue" />,
      title: "Logística",
      description: "Gerencie pagamentos de fretes e entregas com maior eficiência e menores custos."
    },
    {
      icon: <GraduationCap size={32} className="text-jockepay-blue" />,
      title: "Educação",
      description: "Simplifique o recebimento de mensalidades e reduza inadimplência com rotas alternativas."
    },
    {
      icon: <Building size={32} className="text-jockepay-blue" />,
      title: "Marketplace",
      description: "Gerencie pagamentos entre múltiplos vendedores com flexibilidade e controle total."
    }
  ];

  return (
    <section id="sectors" className="section-padding bg-secondary dark:bg-jockepay-dark/70">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções para cada segmento</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Independentemente do seu setor, a Jockepay oferece ferramentas adaptadas às suas necessidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-jockepay-dark/50 rounded-xl p-6 border border-border shadow-sm card-hover"
            >
              <div className="p-3 bg-primary/5 w-fit rounded-lg mb-4">
                {sector.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{sector.title}</h3>
              <p className="text-muted-foreground mb-4">{sector.description}</p>
              <a href="#contact" className="text-jockepay-blue font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Ver solução <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
