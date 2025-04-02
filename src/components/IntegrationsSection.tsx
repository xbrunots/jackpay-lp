import React, { useState, useMemo } from 'react';
import { ExternalLink, CheckCircle, Clock, AlertCircle, Zap, Shield, ArrowRight } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";

// Tipos TypeScript
interface PSP {
  name: string;
  id: string;
  color: string;
  status: 'active' | 'pending' | 'inactive';
  paymentMethods: string[];
  latency: string;
  successRate: string;
  logo?: string;
  features?: string[];
}

interface IntegrationSectionProps {
  className?: string;
}

// Dados das integrações
const INTEGRATIONS_DATA: PSP[] = [
  { 
    name: "PicPay", 
    id: "picpay", 
    color: "#21C25E",
    status: "active",
    paymentMethods: ["Cartão", "Pix"],
    latency: "180ms",
    successRate: "98.5%",
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
    features: ["Pagamentos Internacionais", "Antifraude Avançado", "Recorrência"]
  },
];

// Componente de tooltip personalizado
const PSPTooltip: React.FC<{ psp: PSP }> = ({ psp }) => (
  <div className="space-y-3 p-4">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${psp.color}20` }}>
        <span className="text-lg font-bold" style={{ color: psp.color }}>{psp.name.substring(0, 1)}</span>
      </div>
      <div>
        <h3 className="font-semibold text-white">{psp.name}</h3>
        <div className="flex items-center gap-1 text-xs text-white/70">
          <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-400">Ativo</span>
          <span>•</span>
          <span>{psp.paymentMethods.length} métodos</span>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-1">
        <div className="flex items-center gap-1.5 text-sm text-white/80">
          <Clock size={14} />
          <span>Latência</span>
        </div>
        <div className="text-sm font-medium text-white">{psp.latency}</div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-1.5 text-sm text-white/80">
          <AlertCircle size={14} />
          <span>Sucesso</span>
        </div>
        <div className="text-sm font-medium text-white">{psp.successRate}</div>
      </div>
    </div>

    <div className="space-y-2">
      <div className="text-sm text-white/80">Métodos de Pagamento</div>
      <div className="flex flex-wrap gap-1.5">
        {psp.paymentMethods.map((method, idx) => (
          <span key={idx} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/90">
            {method}
          </span>
        ))}
      </div>
    </div>

    <div className="space-y-2">
      <div className="text-sm text-white/80">Recursos</div>
      <div className="space-y-1.5">
        {psp.features?.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-white/90">
            <Zap size={14} className="text-yellow-400" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Componente de linha de conexão
const ConnectionLine: React.FC<{ 
  index: number; 
  total: number; 
  isVisible: boolean;
  delay: number;
  isHovered: boolean;
}> = ({ index, total, isVisible, delay, isHovered }) => {
  const angle = (index / total) * 2 * Math.PI;
  
  return (
    <motion.div 
      className={`absolute h-0.5 bg-gradient-to-r from-jockepay-blue/80 to-transparent z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        width: '180px',
        transformOrigin: '0% 50%',
        transform: `rotate(${angle}rad) translateX(20px)`,
        transitionDelay: `${delay}s`,
        left: '50%',
        top: '50%'
      }}
      animate={{
        background: isHovered 
          ? ['linear-gradient(to right, rgba(0, 242, 234, 0.8), transparent)']
          : [
              'linear-gradient(to right, rgba(0, 242, 234, 0.8), transparent)',
              'linear-gradient(to right, rgba(0, 242, 234, 0.4), transparent)',
              'linear-gradient(to right, rgba(0, 242, 234, 0.8), transparent)',
            ],
        opacity: isHovered ? 1 : [0.8, 0.4, 0.8],
      }}
      transition={{
        duration: isHovered ? 0.3 : 2,
        repeat: isHovered ? 0 : Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Componente de nó PSP
const PSPNode: React.FC<{ 
  psp: PSP; 
  index: number; 
  total: number;
  isVisible: boolean;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}> = ({ psp, index, total, isVisible, isHovered, onHover }) => {
  const angle = (index / total) * 2 * Math.PI;
  const x = Math.cos(angle) * 180;
  const y = Math.sin(angle) * 180;
  
  return (
    <Tooltip key={psp.id}>
      <TooltipTrigger asChild>
        <motion.div 
          className={`group absolute flex flex-col items-center justify-center h-24 w-24 backdrop-blur-lg bg-white/15 dark:bg-black/40 rounded-xl border border-white/30 transition-all duration-500 hover:-translate-y-2 hover:bg-white/20 hover:border-white/50 hover:shadow-lg hover:scale-110 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: 'translate(-50%, -50%)',
            transitionDelay: `${index * 0.05}s`,
            boxShadow: isHovered ? `0 0 20px ${psp.color}40` : '0 4px 20px rgba(0,0,0,0.2)'
          }}
          onMouseEnter={() => onHover(psp.id)}
          onMouseLeave={() => onHover(null)}
          whileHover={{ scale: 1.1 }}
          role="button"
          tabIndex={0}
          aria-label={`Informações do ${psp.name}`}
        >
          <div className="h-12 w-12 rounded-full backdrop-blur-lg bg-white/20 border border-white/40 mb-2 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
            <div 
              className="text-lg font-bold"
              style={{ 
                color: psp.color,
                textShadow: `0 0 8px ${psp.color}80`
              }}
            >
              {psp.name.substring(0, 1)}
            </div>
          </div>
          <span className="font-medium text-xs text-center group-hover:text-white transition-colors">
            {psp.name}
          </span>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent className="bg-black/90 backdrop-blur-lg border border-white/20 p-4 max-w-sm">
        <PSPTooltip psp={psp} />
      </TooltipContent>
    </Tooltip>
  );
};

const IntegrationsSection: React.FC<IntegrationSectionProps> = ({ className = '' }) => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });
  const [hoveredPSP, setHoveredPSP] = useState<string | null>(null);
  
  // Memoize os dados para melhor performance
  const integrations = useMemo(() => INTEGRATIONS_DATA, []);

  return (
    <section 
      id="integrations" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`py-32 md:py-36 lg:py-40 relative overflow-hidden bg-gradient-to-b from-jockepay-dark to-background ${className}`}
      aria-label="Seção de integrações com PSPs"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-jockepay-dark/90 z-0"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-10 z-0"></div>
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-jockepay-blue/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-jockepay-neon/20 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className={`flex flex-col md:flex-row gap-16 items-center transition-all duration-700 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="inline-block mb-4">
              <span className="backdrop-blur-sm bg-jockepay-blue/20 dark:bg-jockepay-blue/30 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-blue dark:text-jockepay-neon border border-jockepay-blue/40 flex items-center gap-2">
                <Shield size={16} />
                Integrações Seguras
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight text-white" style={{ lineHeight: '1.3', fontWeight: 600 }}>
              Conecte múltiplos <span className="text-jockepay-blue bg-clip-text text-transparent bg-gradient-to-r from-jockepay-blue to-jockepay-neon">PSPs</span>
            </h2>
            <p className="text-lg text-white/80 mb-8" style={{ fontSize: '18px' }}>
              Conecte sua operação aos principais PSPs do mercado. Com a Jockepay, você escolhe, combina e escala — com total liberdade e controle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <a 
                href="#contact" 
                className="py-3 px-6 backdrop-blur-sm bg-jockepay-blue/20 border border-jockepay-blue/40 text-jockepay-neon font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-jockepay-blue/30 group hover:scale-105 hover:shadow-lg hover:shadow-jockepay-blue/20"
                aria-label="Ver todas as integrações disponíveis"
              >
                Ver todas as integrações
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Connection lines */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                {integrations.map((psp, i) => (
                  <ConnectionLine 
                    key={`line-${i}`}
                    index={i}
                    total={integrations.length}
                    isVisible={sectionIsVisible}
                    delay={i * 0.1}
                    isHovered={hoveredPSP === psp.id}
                  />
                ))}
              </div>
              
              {/* PSP nodes */}
              <TooltipProvider>
                <AnimatePresence>
                  {integrations.map((psp, index) => (
                    <PSPNode
                      key={psp.id}
                      psp={psp}
                      index={index}
                      total={integrations.length}
                      isVisible={sectionIsVisible}
                      isHovered={hoveredPSP === psp.id}
                      onHover={setHoveredPSP}
                    />
                  ))}
                </AnimatePresence>
              </TooltipProvider>

              {/* Central Jockepay node */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div 
                  className="w-32 h-32 backdrop-blur-xl bg-gradient-to-br from-jockepay-blue/50 to-jockepay-neon/50 rounded-full border-2 border-white/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,242,234,0.6)] hover:shadow-[0_0_40px_rgba(0,242,234,0.8)] transition-all duration-300 group"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(0,242,234,0.6)",
                      "0 0 40px rgba(0,242,234,0.8)",
                      "0 0 30px rgba(0,242,234,0.6)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  role="img"
                  aria-label="Logo da Jockepay"
                >
                  <div className="w-24 h-24 backdrop-blur-xl bg-black/80 rounded-full flex items-center justify-center border border-white/30 group-hover:scale-105 transition-transform">
                    <div className="text-jockepay-neon font-bold text-sm bg-gradient-to-r from-jockepay-blue to-jockepay-neon bg-clip-text text-transparent px-3 py-2 rounded-lg">Jockepay</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
