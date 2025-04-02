
import React from 'react';

const DemoSection = () => {
  return (
    <section id="solutions" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-jockepay-dark/80 to-jockepay-dark z-0"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-5 z-0"></div>
      
      {/* Floating blur elements */}
      <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-jockepay-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-jockepay-neon/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="backdrop-blur-sm bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-neon">Inteligência</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight text-white">
            Orquestração <span className="text-jockepay-neon">inteligente</span> de pagamentos
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Visualize como nossa plataforma gerencia múltiplos PSPs, roteando transações para garantir a maior taxa de aprovação.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl backdrop-blur-sm bg-black/20 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <div className="bg-black/60 p-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-jockepay-danger"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-warning"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-success"></div>
            </div>
            <div className="text-xs text-white/70 flex-1 text-center">Jockepay Dashboard</div>
          </div>
          
          <div className="bg-jockepay-dark/90 p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <div className="mb-8">
                  <div className="text-sm font-medium text-white/60 mb-3">Transação recebida</div>
                  <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-white">ID: 89721356</span>
                      <span className="text-sm px-3 py-1 rounded-full backdrop-blur-sm bg-jockepay-blue/20 text-jockepay-blue border border-jockepay-blue/30">R$ 157,90</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-white/50 block mb-1">Cartão:</span>
                        <span className="text-white font-medium">MasterCard</span>
                      </div>
                      <div>
                        <span className="text-white/50 block mb-1">Final:</span>
                        <span className="text-white font-medium">4519</span>
                      </div>
                      <div>
                        <span className="text-white/50 block mb-1">Cliente:</span>
                        <span className="text-white font-medium">João S.</span>
                      </div>
                      <div>
                        <span className="text-white/50 block mb-1">Email:</span>
                        <span className="text-white font-medium">j****@email.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 text-sm font-medium text-white/60">Roteamento inteligente</div>
                <div className="space-y-5">
                  {/* Routing flow visualization with improved visuals */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-jockepay-success backdrop-blur-sm bg-jockepay-success/10 animate-glow">
                      <span className="text-jockepay-success font-medium">1</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-jockepay-success to-jockepay-success/30 animate-grow"></div>
                    <div className="text-sm font-medium px-3 py-2 rounded-lg backdrop-blur-sm bg-jockepay-success/10 border border-jockepay-success/30 text-jockepay-success flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-jockepay-success animate-status-pulse"></span>
                      Stripe
                      <span className="ml-2 px-2 py-0.5 backdrop-blur-sm bg-jockepay-success/20 rounded text-xs">
                        APROVADO
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center opacity-70">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-sm bg-white/5">
                      <span className="text-white/70 font-medium">2</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-white/30"></div>
                    <div className="text-sm font-medium px-3 py-2 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 text-white/70 flex items-center gap-2">
                      Asaas
                      <span className="ml-2 px-2 py-0.5 backdrop-blur-sm bg-white/10 rounded text-xs">
                        STANDBY
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center opacity-70">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-sm bg-white/5">
                      <span className="text-white/70 font-medium">3</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-white/30"></div>
                    <div className="text-sm font-medium px-3 py-2 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 text-white/70 flex items-center gap-2">
                      Pagar.me
                      <span className="ml-2 px-2 py-0.5 backdrop-blur-sm bg-white/10 rounded text-xs">
                        STANDBY
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-8">
                  <div className="text-sm font-medium text-white/60 mb-3">Transação recebida</div>
                  <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-white">ID: 89721357</span>
                      <span className="text-sm px-3 py-1 rounded-full backdrop-blur-sm bg-jockepay-blue/20 text-jockepay-blue border border-jockepay-blue/30">R$ 349,00</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-white/50 block mb-1">Cartão:</span>
                        <span className="text-white font-medium">Visa</span>
                      </div>
                      <div>
                        <span className="text-white/50 block mb-1">Final:</span>
                        <span className="text-white font-medium">2781</span>
                      </div>
                      <div>
                        <span className="text-white/50 block mb-1">Cliente:</span>
                        <span className="text-white font-medium">Maria T.</span>
                      </div>
                      <div>
                        <span className="text-white/50 block mb-1">Email:</span>
                        <span className="text-white font-medium">m****@email.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 text-sm font-medium text-white/60">Fallback automático</div>
                <div className="space-y-5">
                  {/* Fallback flow visualization with microanimations */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-jockepay-danger backdrop-blur-sm bg-jockepay-danger/10">
                      <span className="text-jockepay-danger font-medium">1</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-jockepay-danger to-jockepay-danger/30 animate-grow"></div>
                    <div className="text-sm font-medium px-3 py-2 rounded-lg backdrop-blur-sm bg-jockepay-danger/10 border border-jockepay-danger/30 text-jockepay-danger flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-jockepay-danger"></span>
                      Asaas
                      <span className="ml-2 px-2 py-0.5 backdrop-blur-sm bg-jockepay-danger/20 rounded text-xs">
                        RECUSADO
                      </span>
                    </div>
                  </div>
                  
                  {/* Connecting line showing fallback */}
                  <div className="ml-5 h-5 w-0.5 bg-gradient-to-b from-jockepay-danger to-jockepay-warning animate-grow" style={{ animationDelay: '0.5s' }}></div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-jockepay-success backdrop-blur-sm bg-jockepay-success/10 animate-glow" style={{ animationDelay: '0.7s' }}>
                      <span className="text-jockepay-success font-medium">2</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-jockepay-warning to-jockepay-success animate-grow" style={{ animationDelay: '0.7s' }}></div>
                    <div className="text-sm font-medium px-3 py-2 rounded-lg backdrop-blur-sm bg-jockepay-success/10 border border-jockepay-success/30 text-jockepay-success animate-appear" style={{ animationDelay: '1s', opacity: 0 }}>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-jockepay-success animate-status-pulse"></span>
                        PagBank
                        <span className="ml-2 px-2 py-0.5 backdrop-blur-sm bg-jockepay-success/20 rounded text-xs">
                          APROVADO
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center opacity-70">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-sm bg-white/5">
                      <span className="text-white/70 font-medium">3</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-white/30"></div>
                    <div className="text-sm font-medium px-3 py-2 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 text-white/70 flex items-center gap-2">
                      Adyen
                      <span className="ml-2 px-2 py-0.5 backdrop-blur-sm bg-white/10 rounded text-xs">
                        STANDBY
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
