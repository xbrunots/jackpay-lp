import React from 'react';
import { ArrowRight, ShoppingBag, Code, Banknote, Truck, GraduationCap, Building } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

// Define sector colors for distinct visual identity with improved contrast
const sectorColors = {
  ecommerce: { bg: "#2563eb", light: "#60a5fa" }, // Brighter blue
  saas: { bg: "#9333ea", light: "#c084fc" }, // Brighter purple
  fintech: { bg: "#0891b2", light: "#22d3ee" }, // Brighter cyan
  logistics: { bg: "#ca8a04", light: "#fbbf24" }, // Brighter yellow
  education: { bg: "#15803d", light: "#4ade80" }, // Brighter green
  marketplace: { bg: "#be123c", light: "#fb7185" }, // Brighter rose
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
      className="relative min-h-screen py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-black via-black/98 to-black/95"
      aria-label="Segmentos"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.05)_0%,transparent_70%)] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.02)_0%,transparent_70%)] blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Text content */}
        <div className="relative z-10">
          <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 max-w-4xl mx-auto">
            <Badge color="green">Segmentos</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 sm:mt-6 mb-4 sm:mb-6">
              Soluções para todos os segmentos
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Oferecemos soluções personalizadas para diferentes tipos de negócios.
            </p>
          </div>
        </div>

        {/* Sectors grid */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {sectors.map((sector) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/10 hover:border-jockepay-green/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-jockepay-green/10 flex items-center justify-center">
                    {sector.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{sector.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-400">{sector.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
