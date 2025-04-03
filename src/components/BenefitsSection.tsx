import React, { useMemo, Suspense } from 'react';
import { ArrowRight, Network, Shuffle, BarChart3, LayoutDashboard, RefreshCw, Shield, Zap } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';

// Animações reutilizáveis
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Componente de loading para lazy loading
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-32" role="status" aria-label="Carregando...">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-jockepay-neon"></div>
  </div>
);

interface Benefit {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tooltip?: string;
}

const BenefitsSection: React.FC = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ 
    threshold: 0.1,
    rootMargin: '50px'
  });
  
  const benefits = useMemo<Benefit[]>(() => [
    {
      id: " orquestração-inteligente",
      icon: <Network className="w-6 h-6 text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Orquestração inteligente",
      description: "Distribua transações entre múltiplos provedores de forma estratégica e otimizada.",
      tooltip: "Sistema inteligente que distribui automaticamente as transações entre diferentes provedores"
    },
    {
      id: "plugin-play",
      icon: <Shuffle className="w-6 h-6 text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Plugin Play",
      description: "Ative e desative provedores e adquirentes com rapidez e eficiência, a hora que quiser com poucos cliques.",
      tooltip: "Gerenciamento flexível de provedores de pagamento"
    },
    {
      id: "analytics-em-tempo-real",
      icon: <BarChart3 className="w-6 h-6 text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Analytics em tempo real",
      description: "Visualize métricas de desempenho e taxas de aprovação para tomar decisões baseadas em dados.",
      tooltip: "Dashboard com análises em tempo real de todas as transações"
    },
    {
      id: "dashboard-centralizado",
      icon: <LayoutDashboard className="w-6 h-6 text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Dashboard centralizado",
      description: "Gerencie todas as suas transações em uma única interface intuitiva e poderosa.",
      tooltip: "Interface unificada para gerenciamento de pagamentos"
    },
    {
      id: "lógica-de-fallback",
      icon: <RefreshCw className="w-6 h-6 text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Lógica de fallback",
      description: "Recupere transações recusadas automaticamente através de rotas alternativas.",
      tooltip: "Sistema automático de recuperação de transações recusadas"
    },
    {
      id: "segurança-avançada",
      icon: <Shield className="w-6 h-6 text-jockepay-neon group-hover:text-jockepay-blue transition-colors duration-300" />,
      title: "Segurança avançada",
      description: "Proteja seus dados e transações com os mais altos padrões de segurança do mercado.",
      tooltip: "Proteção de dados com criptografia avançada"
    },
  ], []);

  return (
    <section 
      id="benefits" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="relative min-h-screen py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-black via-black/98 to-black/95"
      aria-label="Benefícios"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.05)_0%,transparent_70%)] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.02)_0%,transparent_70%)] blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Text content */}
        <div className="relative z-10">
          <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 max-w-4xl mx-auto">
            <Badge color="green">Benefícios</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 sm:mt-6 mb-4 sm:mb-6">
              Por que escolher a JockPay?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Uma plataforma completa que simplifica e otimiza sua operação de pagamentos.
            </p>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={sectionIsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:border-jockepay-green/50 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(BenefitsSection);
