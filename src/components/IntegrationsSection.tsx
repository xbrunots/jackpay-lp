
import React from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';

const IntegrationsSection = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });
  
  const integrations = [
    { name: "PicPay", id: "picpay", color: "#21C25E" },
    { name: "Pagar.me", id: "pagarme", color: "#4CAF50" },
    { name: "Vindi", id: "vindi", color: "#9C27B0" },
    { name: "PagBank", id: "pagbank", color: "#FF9800" },
    { name: "Stripe", id: "stripe", color: "#6772E5" },
    { name: "Asaas", id: "asaas", color: "#00BFFF" },
    { name: "Iugu", id: "iugu", color: "#03A9F4" },
    { name: "Lastlink", id: "lastlink", color: "#2196F3" },
    { name: "Mercado Pago", id: "mercadopago", color: "#00B1EA" },
    { name: "Adyen", id: "adyen", color: "#0ABF53" },
  ];

  // Calculate positions for a radial arrangement
  const getRadialPosition = (index: number, total: number) => {
    // Convert from index to radians
    const angleRad = ((index / total) * 2 * Math.PI);
    
    // Calculate positions on a circle
    // We use 250 as the radius (adjust based on your layout needs)
    const x = Math.cos(angleRad) * 230;
    const y = Math.sin(angleRad) * 230;
    
    // Convert to percentage for responsive positioning
    return { x, y };
  };

  return (
    <section 
      id="integrations" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-32 md:py-36 lg:py-40 relative overflow-hidden bg-gradient-to-b from-jockepay-dark to-background"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-jockepay-dark/40 z-0"></div>
      
      {/* Mesh pattern background */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-5 z-0"></div>
      
      {/* Floating blur elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-jockepay-blue/15 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-jockepay-neon/15 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className={`flex flex-col md:flex-row gap-16 items-center transition-all duration-700 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="inline-block mb-4">
              <span className="backdrop-blur-sm bg-jockepay-blue/20 dark:bg-jockepay-blue/20 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-blue dark:text-jockepay-neon border border-jockepay-blue/30">Integrações</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight text-foreground" style={{ lineHeight: '1.3', fontWeight: 600 }}>
              Conecte múltiplos <span className="text-jockepay-blue">PSPs</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)' }}>
              A Jockepay se conecta com os principais provedores de pagamento, oferecendo a você liberdade para escolher as melhores opções para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <a 
                href="#contact" 
                className="py-3 px-6 backdrop-blur-sm bg-jockepay-blue/15 border border-jockepay-blue/30 text-jockepay-blue dark:text-jockepay-neon font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-jockepay-blue/25 group hover:scale-[1.02]"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
              >
                Ver todas as integrações
                <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Central node with enhanced glow */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="w-28 h-28 backdrop-blur-lg bg-gradient-to-br from-jockepay-blue/40 to-jockepay-neon/40 rounded-full border border-white/30 flex items-center justify-center animate-glow shadow-[0_0_20px_rgba(0,242,234,0.4)] hover:shadow-[0_0_30px_rgba(0,242,234,0.6)] transition-shadow duration-300 group">
                  <div className="w-24 h-24 backdrop-blur-sm bg-jockepay-dark/90 rounded-full flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform">
                    <div className="text-jockepay-neon font-bold text-sm bg-jockepay-dark/50 px-3 py-2 rounded-lg">Jockepay</div>
                  </div>
                </div>
                
                {/* Connection lines radiating out in a complete circle */}
                {integrations.map((_, i) => {
                  const position = getRadialPosition(i, integrations.length);
                  const angle = (i / integrations.length) * 360;
                  
                  return (
                    <div 
                      key={i} 
                      className={`absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-jockepay-blue/80 to-transparent z-10 transition-all duration-1000 ${sectionIsVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{
                        width: '180px',
                        transformOrigin: '0 0',
                        transform: `rotate(${angle}deg)`,
                        transitionDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  );
                })}
              </div>
              
              {/* PSP nodes in a radial arrangement */}
              {integrations.map((integration, index) => {
                const position = getRadialPosition(index, integrations.length);
                return (
                  <div 
                    key={integration.id}
                    className={`group absolute flex flex-col items-center justify-center h-24 w-24 backdrop-blur-sm bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 transition-all duration-500 hover:-translate-y-1 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:scale-[1.05] ${sectionIsVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      left: `calc(50% + ${position.x}px)`,
                      top: `calc(50% + ${position.y}px)`,
                      transform: 'translate(-50%, -50%)',
                      transitionDelay: `${index * 0.05}s`,
                    }}
                  >
                    <div className="h-12 w-12 rounded-full backdrop-blur-sm bg-white/15 border border-white/30 mb-2 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div 
                        className="text-lg font-bold"
                        style={{ 
                          color: integration.color,
                          textShadow: `0 0 8px ${integration.color}40`
                        }}
                      >
                        {integration.name.substring(0, 1)}
                      </div>
                    </div>
                    <span className="font-medium text-xs text-center group-hover:text-jockepay-neon transition-colors">
                      {integration.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
