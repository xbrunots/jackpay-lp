
import React from 'react';
import { CheckCircle } from 'lucide-react';

const IntegrationsSection = () => {
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

  return (
    <section id="integrations" className="py-32 md:py-36 lg:py-40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-jockepay-dark/30 z-0"></div>
      
      {/* Mesh pattern background */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-5 z-0"></div>
      
      {/* Floating blur elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-jockepay-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-jockepay-neon/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="inline-block mb-4">
              <span className="backdrop-blur-sm bg-jockepay-blue/10 dark:bg-jockepay-blue/10 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-blue dark:text-jockepay-neon border border-jockepay-blue/20">Integrações</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">Conecte múltiplos <span className="text-jockepay-blue">PSPs</span></h2>
            <p className="text-lg text-muted-foreground mb-8">
              A Jockepay se conecta com os principais provedores de pagamento, oferecendo a você liberdade para escolher as melhores opções para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <a href="#contact" className="py-3 px-6 backdrop-blur-sm bg-jockepay-blue/10 border border-jockepay-blue/20 text-jockepay-blue dark:text-jockepay-neon font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-jockepay-blue/20 group">
                Ver todas as integrações
                <CheckCircle size={16} className="transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="relative py-8">
              {/* Central node */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-24 h-24 backdrop-blur-sm bg-gradient-to-br from-jockepay-blue/30 to-jockepay-neon/30 rounded-full border border-white/20 flex items-center justify-center animate-glow">
                  <div className="w-20 h-20 backdrop-blur-sm bg-jockepay-dark/80 rounded-full flex items-center justify-center border border-white/10">
                    <div className="text-jockepay-neon font-bold text-sm">Jockepay</div>
                  </div>
                </div>
                
                {/* Connection lines radiating out */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-jockepay-blue/60 to-transparent z-10"
                    style={{
                      width: '120px',
                      transformOrigin: '0 0',
                      transform: `rotate(${i * 36}deg)`,
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 relative z-30">
                {integrations.map((integration, index) => {
                  // Calculate position in a circle
                  const angle = (index / integrations.length) * 2 * Math.PI;
                  const radius = 180; // Adjust based on your layout
                  
                  // Determine x and y coordinates on the circle
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  // Calculate grid positions
                  const col = index % 5;
                  const row = Math.floor(index / 5);
                  
                  return (
                    <div 
                      key={integration.id}
                      className="group flex flex-col items-center justify-center h-24 backdrop-blur-sm bg-white/5 dark:bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="h-12 w-12 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 mb-2 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <div className="text-lg font-bold" style={{ color: integration.color }}>{integration.name.substring(0, 1)}</div>
                      </div>
                      <span className="font-medium text-sm group-hover:text-jockepay-neon transition-colors">{integration.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
