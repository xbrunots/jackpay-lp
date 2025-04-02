
import React from 'react';
import { ArrowRight, ShoppingBag, Code, Banknote, Truck, GraduationCap, Building } from 'lucide-react';

const SectorsSection = () => {
  const sectors = [
    {
      icon: <ShoppingBag className="text-jockepay-blue group-hover:text-jockepay-neon transition-colors duration-300" />,
      title: "E-Commerce",
      description: "Melhore as taxas de conversão e reduza custos transacionais com roteamento inteligente entre PSPs."
    },
    {
      icon: <Code className="text-jockepay-blue group-hover:text-jockepay-neon transition-colors duration-300" />,
      title: "SaaS",
      description: "Otimize cobranças recorrentes e reduza taxas de churn oferecendo alternativas de pagamento."
    },
    {
      icon: <Banknote className="text-jockepay-blue group-hover:text-jockepay-neon transition-colors duration-300" />,
      title: "Fintech",
      description: "Ganhe flexibilidade com múltiplas integrações e melhore o desempenho de pagamentos."
    },
    {
      icon: <Truck className="text-jockepay-blue group-hover:text-jockepay-neon transition-colors duration-300" />,
      title: "Logística",
      description: "Gerencie pagamentos de fretes e entregas com maior eficiência e menores custos."
    },
    {
      icon: <GraduationCap className="text-jockepay-blue group-hover:text-jockepay-neon transition-colors duration-300" />,
      title: "Educação",
      description: "Simplifique o recebimento de mensalidades e reduza inadimplência com rotas alternativas."
    },
    {
      icon: <Building className="text-jockepay-blue group-hover:text-jockepay-neon transition-colors duration-300" />,
      title: "Marketplace",
      description: "Gerencie pagamentos entre múltiplos vendedores com flexibilidade e controle total."
    }
  ];

  return (
    <section id="sectors" className="section-padding relative overflow-hidden">
      {/* Background with accent color */}
      <div className="absolute inset-0 bg-jockepay-blue/5 dark:bg-jockepay-dark/70 z-0"></div>
      
      {/* Wavy patterns */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                className="fill-background dark:fill-jockepay-dark opacity-20"></path>
        </svg>
      </div>
      
      {/* Floating elements */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-jockepay-neon/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-jockepay-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-jockepay-blue/10 dark:bg-jockepay-blue/20 px-4 py-1 rounded-full text-sm font-medium text-jockepay-blue dark:text-jockepay-blue">Segmentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções para cada <span className="text-jockepay-blue">segmento</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Independentemente do seu setor, a Jockepay oferece ferramentas adaptadas às suas necessidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl p-1 bg-gradient-to-br from-jockepay-blue/20 to-jockepay-neon/5"
            >
              <div className="bg-white dark:bg-jockepay-dark/50 rounded-xl p-8 h-full relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 sector-pattern"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 flex items-center justify-center">
                      {sector.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 relative z-10 group-hover:text-jockepay-blue dark:group-hover:text-jockepay-neon transition-colors">{sector.title}</h3>
                <p className="text-muted-foreground mb-6 relative z-10">{sector.description}</p>
                
                <a href="#contact" className="inline-flex items-center text-jockepay-blue dark:text-jockepay-neon font-medium gap-1 group-hover:gap-2 transition-all relative z-10">
                  Ver solução <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                
                {/* Accent corner */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-jockepay-blue to-jockepay-neon opacity-20 rounded-tl-2xl transform rotate-90 group-hover:opacity-30 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
