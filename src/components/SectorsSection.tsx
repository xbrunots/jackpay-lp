
import React from 'react';
import { ArrowRight, ShoppingBag, Code, Banknote, Truck, GraduationCap, Building } from 'lucide-react';

const SectorsSection = () => {
  const sectors = [
    {
      icon: <ShoppingBag strokeWidth={1.5} className="text-jockepay-neon transition-colors duration-300" />,
      title: "E-Commerce",
      description: "Melhore as taxas de conversão e reduza custos transacionais com roteamento inteligente entre PSPs."
    },
    {
      icon: <Code strokeWidth={1.5} className="text-jockepay-neon transition-colors duration-300" />,
      title: "SaaS",
      description: "Otimize cobranças recorrentes e reduza taxas de churn oferecendo alternativas de pagamento."
    },
    {
      icon: <Banknote strokeWidth={1.5} className="text-jockepay-neon transition-colors duration-300" />,
      title: "Fintech",
      description: "Ganhe flexibilidade com múltiplas integrações e melhore o desempenho de pagamentos."
    },
    {
      icon: <Truck strokeWidth={1.5} className="text-jockepay-neon transition-colors duration-300" />,
      title: "Logística",
      description: "Gerencie pagamentos de fretes e entregas com maior eficiência e menores custos."
    },
    {
      icon: <GraduationCap strokeWidth={1.5} className="text-jockepay-neon transition-colors duration-300" />,
      title: "Educação",
      description: "Simplifique o recebimento de mensalidades e reduza inadimplência com rotas alternativas."
    },
    {
      icon: <Building strokeWidth={1.5} className="text-jockepay-neon transition-colors duration-300" />,
      title: "Marketplace",
      description: "Gerencie pagamentos entre múltiplos vendedores com flexibilidade e controle total."
    }
  ];

  return (
    <section id="sectors" className="py-32 md:py-40 relative overflow-hidden">
      {/* Background with accent color */}
      <div className="absolute inset-0 bg-jockepay-blue/5 dark:bg-jockepay-dark/70 z-0"></div>
      
      {/* Subtle mesh pattern */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-10 z-0"></div>
      
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
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="backdrop-blur-sm bg-jockepay-blue/10 dark:bg-jockepay-blue/10 border border-jockepay-blue/20 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-blue dark:text-jockepay-neon">Segmentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">Soluções para cada <span className="text-jockepay-blue">segmento</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada setor possui necessidades específicas para suas operações de pagamentos. Conheça nossas soluções.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="group h-full"
            >
              {/* Semi-transparent card with glass effect */}
              <div className="h-full backdrop-blur-sm bg-white/5 dark:bg-white/5 rounded-2xl p-8 relative overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-jockepay-neon/20">
                {/* Icon */}
                <div className="relative z-10 mb-5">
                  <div className="w-12 h-12 rounded-xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 flex items-center justify-center">
                      {sector.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium mb-3 relative z-10 group-hover:text-jockepay-neon transition-colors">{sector.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 relative z-10">{sector.description}</p>
                
                <div className="pt-2 border-t border-white/5">
                  <a href="#contact" className="inline-flex items-center text-jockepay-neon text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                    Ver solução <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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

export default SectorsSection;
