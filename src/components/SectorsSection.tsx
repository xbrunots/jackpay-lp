import React from 'react';
import { ArrowRight, ShoppingBag, Code, Banknote, Truck, GraduationCap, Building } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
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

interface Sector {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: { bg: string; light: string };
  ariaLabel: string;
}

const SectorsSection = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });
  
  const sectors: Sector[] = [
    {
      id: "ecommerce",
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-commerce",
      description: "Aumente suas conversões com nossa solução de pagamentos otimizada para lojas virtuais.",
      color: sectorColors.ecommerce,
      ariaLabel: "E-commerce"
    },
    {
      id: "saas",
      icon: <Code className="w-6 h-6" />,
      title: "SaaS",
      description: "Integre pagamentos recorrentes e gestão de assinaturas de forma simples e eficiente.",
      color: sectorColors.saas,
      ariaLabel: "Software as a Service"
    },
    {
      id: "fintech",
      icon: <Banknote className="w-6 h-6" />,
      title: "Fintech",
      description: "Ofereça uma experiência de pagamento segura e moderna para seus usuários.",
      color: sectorColors.fintech,
      ariaLabel: "Fintech"
    },
    {
      id: "logistics",
      icon: <Truck className="w-6 h-6" />,
      title: "Logística",
      description: "Gerencie pagamentos e entregas em uma única plataforma integrada.",
      color: sectorColors.logistics,
      ariaLabel: "Logística"
    },
    {
      id: "education",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Educação",
      description: "Facilite o pagamento de mensalidades e cursos com nossa solução especializada.",
      color: sectorColors.education,
      ariaLabel: "Educação"
    },
    {
      id: "marketplace",
      icon: <Building className="w-6 h-6" />,
      title: "Marketplace",
      description: "Gerencie pagamentos entre múltiplos vendedores e compradores com segurança.",
      color: sectorColors.marketplace,
      ariaLabel: "Marketplace"
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
