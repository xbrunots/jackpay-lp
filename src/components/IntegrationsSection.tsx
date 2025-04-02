
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
    <section id="integrations" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-jockepay-dark/30 z-0"></div>
      
      {/* Animated circuit lines in background */}
      <div className="absolute inset-0 circuit-pattern opacity-5 z-0"></div>
      
      {/* Floating blur elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-jockepay-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-jockepay-neon/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="inline-block mb-4">
              <span className="bg-jockepay-blue/10 dark:bg-jockepay-blue/20 px-4 py-1 rounded-full text-sm font-medium text-jockepay-blue dark:text-jockepay-blue">Integrações</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integre com os principais <span className="text-jockepay-blue">PSPs</span> do mercado</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A Jockepay se conecta com os principais provedores de pagamento, oferecendo a você liberdade para escolher as melhores opções para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                Ver todas as integrações
                <CheckCircle size={18} className="transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="relative">
              {/* Connection lines between icons */}
              <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                <path d="M400,200 C400,100 300,150 250,180" stroke="#1F6FEB" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5" />
                <path d="M400,200 C400,150 500,100 550,120" stroke="#1F6FEB" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5" />
                <path d="M400,200 C400,250 300,300 200,280" stroke="#1F6FEB" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5" />
                <path d="M400,200 C400,250 500,300 600,280" stroke="#1F6FEB" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5" />
                <path d="M400,200 C400,100 200,150 100,100" stroke="#1F6FEB" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5" />
                <path d="M400,200 C400,100 600,150 700,100" stroke="#1F6FEB" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5" />
                <path d="M400,200 C400,300 200,250 100,300" stroke="#1F6FEB" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5" />
                <path d="M400,200 C400,300 600,250 700,300" stroke="#1F6FEB" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5" />
              </svg>
              
              {/* Central node */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-jockepay-blue to-jockepay-neon rounded-full z-10 flex items-center justify-center">
                <div className="text-white font-bold text-xs">Jockepay</div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 relative z-10">
                {integrations.map((integration, index) => (
                  <div 
                    key={integration.id}
                    className="group flex flex-col items-center justify-center h-32 bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 dark:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-jockepay-blue/20 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 mb-3 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-jockepay-blue/0 to-jockepay-neon/0 group-hover:from-jockepay-blue/20 group-hover:to-jockepay-neon/20 transition-all duration-500"></div>
                      <div className="text-xl font-bold" style={{ color: integration.color }}>{integration.name.substring(0, 1)}</div>
                    </div>
                    <span className="font-medium text-sm group-hover:text-jockepay-neon transition-colors">{integration.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
