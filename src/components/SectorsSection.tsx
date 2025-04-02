
import React from 'react';
import { ArrowRight, ShoppingBag, Code, Banknote, Truck, GraduationCap, Building } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';

// Define sector colors for distinct visual identity
const sectorColors = {
  ecommerce: { bg: "#1a56db", light: "#3b82f6" },
  saas: { bg: "#9333ea", light: "#a855f7" },
  fintech: { bg: "#0891b2", light: "#06b6d4" },
  logistics: { bg: "#ca8a04", light: "#eab308" },
  education: { bg: "#15803d", light: "#22c55e" },
  marketplace: { bg: "#be123c", light: "#ec4899" },
};

const SectorsSection = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });
  
  const sectors = [
    {
      icon: <ShoppingBag strokeWidth={1.5} className="text-white transition-colors duration-300" />,
      title: "E-Commerce",
      description: "Melhore as taxas de conversão e reduza custos transacionais com roteamento inteligente entre PSPs.",
      color: sectorColors.ecommerce,
      ariaLabel: "E-Commerce - Melhore as taxas de conversão"
    },
    {
      icon: <Code strokeWidth={1.5} className="text-white transition-colors duration-300" />,
      title: "SaaS",
      description: "Otimize cobranças recorrentes e reduza taxas de churn oferecendo alternativas de pagamento.",
      color: sectorColors.saas,
      ariaLabel: "SaaS - Otimize cobranças recorrentes"
    },
    {
      icon: <Banknote strokeWidth={1.5} className="text-white transition-colors duration-300" />,
      title: "Fintech",
      description: "Ganhe flexibilidade com múltiplas integrações e melhore o desempenho de pagamentos.",
      color: sectorColors.fintech,
      ariaLabel: "Fintech - Ganhe flexibilidade com múltiplas integrações"
    },
    {
      icon: <Truck strokeWidth={1.5} className="text-white transition-colors duration-300" />,
      title: "Logística",
      description: "Gerencie pagamentos de fretes e entregas com maior eficiência e menores custos.",
      color: sectorColors.logistics,
      ariaLabel: "Logística - Gerencie pagamentos de fretes e entregas"
    },
    {
      icon: <GraduationCap strokeWidth={1.5} className="text-white transition-colors duration-300" />,
      title: "Educação",
      description: "Simplifique o recebimento de mensalidades e reduza inadimplência com rotas alternativas.",
      color: sectorColors.education,
      ariaLabel: "Educação - Simplifique o recebimento de mensalidades"
    },
    {
      icon: <Building strokeWidth={1.5} className="text-white transition-colors duration-300" />,
      title: "Marketplace",
      description: "Gerencie pagamentos entre múltiplos vendedores com flexibilidade e controle total.",
      color: sectorColors.marketplace,
      ariaLabel: "Marketplace - Gerencie pagamentos entre múltiplos vendedores"
    }
  ];

  return (
    <section 
      id="sectors" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-32 md:py-40 relative overflow-hidden bg-jockepay-dark/10"
    >
      {/* Background with accent color */}
      <div className="absolute inset-0 bg-jockepay-blue/5 dark:bg-jockepay-dark/40 z-0"></div>
      
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
        <div className={`text-center mb-20 transition-all duration-700 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="backdrop-blur-sm bg-jockepay-blue/15 dark:bg-jockepay-blue/15 border border-jockepay-blue/30 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-blue dark:text-jockepay-neon">Segmentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight" style={{ lineHeight: '1.3', fontWeight: 600 }}>
            Soluções para cada <span className="text-jockepay-blue">segmento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)' }}>
            Cada setor possui necessidades específicas para suas operações de pagamentos. Conheça nossas soluções.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className={`group h-full transition-all duration-500 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Semi-transparent card with glass effect */}
              <div 
                className="h-full backdrop-blur-sm bg-white/10 dark:bg-white/10 rounded-xl p-8 py-10 relative overflow-hidden border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:border-jockepay-neon/30 hover:shadow-lg hover:shadow-jockepay-blue/5 group hover:scale-[1.02]"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}
              >
                {/* Icon with sector-specific colors */}
                <div className="relative z-10 mb-5">
                  <div 
                    className="w-14 h-14 rounded-xl backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(to bottom right, ${sector.color.bg}, ${sector.color.light})`,
                      boxShadow: `0 4px 12px ${sector.color.bg}40`
                    }}
                    aria-hidden="true"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      {sector.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 relative z-10 group-hover:text-jockepay-neon transition-colors" style={{ fontWeight: 600 }}>{sector.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 relative z-10">{sector.description}</p>
                
                <div className="pt-3 border-t border-white/10">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-jockepay-neon text-sm font-medium gap-1 group-hover:gap-2 transition-all"
                    aria-label={sector.ariaLabel}
                  >
                    Ver solução <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                
                {/* Background gradient on hover with sector-specific color */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to bottom right, ${sector.color.bg}20, ${sector.color.light}20)`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
