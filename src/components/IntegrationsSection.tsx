import React, { useState, useMemo } from 'react';
import { ExternalLink, CheckCircle, Clock, AlertCircle, Zap, Shield, ArrowRight, X } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from './ui/Badge';
import { Button } from './ui/button';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

// Tipos TypeScript
interface PSP {
  name: string;
  id: string;
  color: string;
  status: 'active' | 'pending' | 'inactive';
  paymentMethods: string[];
  latency: string;
  successRate: string;
  logo: string;
  features: string[];
}

interface IntegrationSectionProps {
  className?: string;
}

// Dados das integrações com logos atualizados
const INTEGRATIONS_DATA: PSP[] = [
  { 
    name: "PicPay", 
    id: "picpay", 
    color: "#21C25E",
    status: "active",
    paymentMethods: ["Cartão", "Pix"],
    latency: "180ms",
    successRate: "98.5%",
    logo: "https://logospng.org/download/picpay/logo-picpay-1024.png",
    features: ["Pix Instantâneo", "Split de Pagamentos", "Antifraude Avançado"]
  },
  { 
    name: "Pagar.me", 
    id: "pagarme", 
    color: "#4CAF50",
    status: "active",
    paymentMethods: ["Cartão", "Boleto", "Pix"],
    latency: "220ms",
    successRate: "97.2%",
    logo: "https://www.pagar.me/static/logo_pagarme-68c8fd6201a5902cf1e143270fa22ddf.svg",
    features: ["Split de Pagamentos", "Antifraude", "Recorrência"]
  },
  { 
    name: "Vindi", 
    id: "vindi", 
    color: "#9C27B0",
    status: "active",
    paymentMethods: ["Cartão", "Boleto"],
    latency: "250ms",
    successRate: "96.8%",
    logo: "https://vindi.com.br/assets/images/novo-site/logo-vindi.svg",
    features: ["Recorrência", "Gestão de Assinaturas", "Antifraude"]
  },
  { 
    name: "PagBank", 
    id: "pagbank", 
    color: "#FF9800",
    status: "active",
    paymentMethods: ["Cartão", "Pix"],
    latency: "190ms",
    successRate: "98.1%",
    logo: "https://acq-static-pages.pagseguro.com.br/static-pages/website/website-home-pages/_next/static/media/logo-pagbank.11b4ead9.svg",
    features: ["Pix Instantâneo", "Split de Pagamentos", "Antifraude"]
  },
  { 
    name: "Stripe", 
    id: "stripe", 
    color: "#6772E5",
    status: "active",
    paymentMethods: ["Cartão"],
    latency: "210ms",
    successRate: "98.9%",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png",
    features: ["Pagamentos Internacionais", "Antifraude Avançado", "Recorrência"]
  },
  { 
    name: "Asaas", 
    id: "asaas", 
    color: "#00BFFF",
    status: "active",
    paymentMethods: ["Cartão", "Boleto", "Pix"],
    latency: "230ms",
    successRate: "97.5%",
    logo: "https://cdn-boto.asaas.com/_next/static/media/header-logo.d237bbad.svg",
    features: ["Recorrência", "Split de Pagamentos", "Antifraude"]
  },
  { 
    name: "Iugu", 
    id: "iugu", 
    color: "#03A9F4",
    status: "active",
    paymentMethods: ["Cartão", "Boleto"],
    latency: "240ms",
    successRate: "96.9%",
    logo: "https://www.portal.institutors.org/assets/images/iugu-logo.png",
    features: ["Recorrência", "Split de Pagamentos", "Antifraude"]
  },
  { 
    name: "Lastlink", 
    id: "lastlink", 
    color: "#2196F3",
    status: "active",
    paymentMethods: ["Cartão", "Pix"],
    latency: "200ms",
    successRate: "97.8%",
    logo: "https://cdn.prod.website-files.com/62717c428149ca2e5e5f6872/62717e4f89f1e811681649e7_logo-lastlink.svg",
    features: ["Pix Instantâneo", "Split de Pagamentos", "Antifraude"]
  },
  { 
    name: "Mercado Pago", 
    id: "mercadopago", 
    color: "#00B1EA",
    status: "active",
    paymentMethods: ["Cartão", "Pix"],
    latency: "190ms",
    successRate: "98.3%",
    logo: "https://http2.mlstatic.com/frontend-assets/mp-web-navigation/ui-navigation/6.7.63/mercadopago/logo__large.png",
    features: ["Pix Instantâneo", "Split de Pagamentos", "Antifraude"]
  },
  { 
    name: "Adyen", 
    id: "adyen", 
    color: "#0ABF53",
    status: "active",
    paymentMethods: ["Cartão"],
    latency: "210ms",
    successRate: "98.7%",
    logo: "https://companieslogo.com/img/orig/ADYEN.AS_BIG-e1c3fc94.png?t=1634039415",
    features: ["Pagamentos Internacionais", "Antifraude Avançado", "Recorrência"]
  },
];

// Componente de círculo concêntrico
const ConcentricCircle: React.FC<{ 
  radius: number; 
  strokeWidth: number;
  opacity: number;
}> = ({ radius, strokeWidth, opacity }) => {
  return (
    <circle
      cx="50%"
      cy="50%"
      r={radius}
      stroke="rgba(255,255,255,0.1)"
      strokeWidth={strokeWidth}
      fill="none"
      aria-hidden="true"
    />
  );
};

// Componente de conexão entre PSPs
const ConnectionLine: React.FC<{ 
  startX: number; 
  startY: number; 
  endX: number; 
  endY: number; 
  color: string;
  isActive: boolean;
}> = ({ startX, startY, endX, endY, color, isActive }) => {
  return (
    <line
      x1={startX}
      y1={startY}
      x2={endX}
      y2={endY}
      stroke={color}
      strokeWidth={isActive ? 2 : 1}
      strokeOpacity={isActive ? 0.4 : 0.15}
      aria-hidden="true"
    />
  );
};

// Componente de card de PSP
const PSPCard: React.FC<{ 
  psp: PSP; 
  angle: number; 
  radius: number; 
  isSelected: boolean;
  onSelect: () => void;
}> = ({ psp, angle, radius, isSelected, onSelect }) => {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        zIndex: isSelected ? 10 : 1,
      }}
      className="group"
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      aria-label={`Selecionar ${psp.name}`}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div 
              className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-black border ${
                isSelected ? 'border-white shadow-lg shadow-jockepay-blue/50' : 'border-white/40'
              } p-2 sm:p-3 cursor-pointer transition-all duration-300 hover:scale-110 hover:border-white/60 focus:outline-none focus:ring-2 focus:ring-jockepay-blue focus:ring-opacity-50`}
            >
              <div className="relative w-full h-full">
                <img 
                  src={psp.logo} 
                  alt={`Logo ${psp.name}`} 
                  className="w-full h-full object-contain filter brightness-0 invert"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                {isSelected && (
                  <div className="absolute inset-0 rounded-full bg-jockepay-blue/20 backdrop-blur-sm flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-jockepay-blue" />
                  </div>
                )}
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent 
            className="bg-black/95 backdrop-blur-lg border border-white/20 p-4 max-w-xs"
            side="top"
            sideOffset={10}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">{psp.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  psp.status === 'active' ? 'bg-green-500/30 text-green-400' : 
                  psp.status === 'pending' ? 'bg-yellow-500/30 text-yellow-400' : 
                  'bg-red-500/30 text-red-400'
                }`}>
                  {psp.status === 'active' ? 'Ativo' : psp.status === 'pending' ? 'Pendente' : 'Inativo'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <span className="text-white/60">Métodos:</span>
                <span>{psp.paymentMethods.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <span className="text-white/60">Latência:</span>
                <span>{psp.latency}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <span className="text-white/60">Taxa de Sucesso:</span>
                <span>{psp.successRate}</span>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

const IntegrationsSection: React.FC<IntegrationSectionProps> = ({ className = '' }) => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });
  const [selectedPSP, setSelectedPSP] = useState<PSP | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const springConfig = {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  };

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 50]), springConfig);
  const integrations = useMemo(() => INTEGRATIONS_DATA, []);

  // Calcula o ângulo para cada PSP em um único círculo
  const getPSPPositions = (psps: PSP[], isMobile = false) => {
    const baseRadius = isMobile ? 140 : 220;
    return psps.map((psp, index) => {
      const angle = (index * 2 * Math.PI) / psps.length - Math.PI / 2;
      return { psp, angle, radius: baseRadius };
    });
  };

  return (
    <section 
      id="integrations" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="relative min-h-screen py-24 sm:py-28 md:py-32 lg:py-36 bg-gradient-to-b from-black via-black/98 to-black/95"
      aria-label="Integrações"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.05)_0%,transparent_70%)] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.02)_0%,transparent_70%)] blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Text content */}
        <div className="relative z-10">
          <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 max-w-4xl mx-auto">
            <Badge color="green">Integrações</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-4 sm:mt-6 mb-4 sm:mb-6">
              Conecte-se com os principais PSPs do mercado
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Integre-se facilmente com os principais provedores de pagamento e ofereça a melhor experiência para seus clientes.
            </p>
          </div>
              </div>
              
        {/* Mandala */}
        <div className="relative z-0">
          <motion.div 
            className="relative h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-full flex items-center justify-center"
            style={{ y }}
          >
            <motion.div 
              className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] flex items-center justify-center"
            >
              {/* Centro da mandala - Logo JockPay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-full bg-black/80 backdrop-blur-md border-2 border-jockepay-green/50 flex items-center justify-center shadow-lg shadow-jockepay-green/20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.2)_0%,transparent_70%)] blur-[20px]"></div>
                  <img 
                    src="https://i.postimg.cc/R044ZLf4/Blue-Modern-Technology-and-Software-Company-Logo-5.png" 
                    alt="JockPay Logo" 
                    className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 object-contain relative z-10"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                      </div>
                    </div>

              {/* Círculo único de PSPs */}
              <div className="absolute inset-0 flex items-center justify-center">
                {getPSPPositions(integrations, window.innerWidth < 768).map(({ psp, angle, radius }) => (
                  <div key={psp.id}>
                    <PSPCard 
                      psp={psp} 
                      angle={angle} 
                      radius={radius}
                      isSelected={selectedPSP?.id === psp.id}
                      onSelect={() => setSelectedPSP(selectedPSP?.id === psp.id ? null : psp)}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
            </div>

        {/* Bottom text */}
        <div className="relative z-10">
          <div className="text-center mt-24 sm:mt-28 md:mt-32 lg:mt-36">
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              E muito mais integrações disponíveis para sua operação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
