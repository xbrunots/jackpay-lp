
import React from 'react';
import { ArrowRight, CheckCircle, XCircle, RotateCw, ShoppingCart, CreditCard, AlertCircle, Clock, Wallet, ArrowUpRight } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';

const DemoSection = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });
  
  return (
    <section 
      id="solutions" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-28 md:py-36 relative overflow-hidden bg-jockepay-dark"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-jockepay-dark to-black z-0"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-5 z-0"></div>
      
      {/* Floating blur elements */}
      <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-jockepay-blue/15 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-jockepay-neon/15 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="backdrop-blur-sm bg-jockepay-neon/20 border border-jockepay-neon/30 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-neon">Inteligência</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight text-white" style={{lineHeight: "1.3", fontWeight: 600}}>
            Orquestração <span className="text-jockepay-neon">inteligente</span> de pagamentos
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto" style={{fontSize: "18px", color: "rgba(255,255,255,0.8)"}}>
            Visualize como nosso sistema gerencia todo o fluxo de pagamentos com rotas inteligentes e fallbacks automáticos para maximizar a taxa de aprovação.
          </p>
        </div>

        <div className={`relative mx-auto max-w-6xl backdrop-blur-sm bg-black/40 rounded-2xl overflow-hidden border border-white/20 shadow-xl transition-all duration-700 delay-300 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-black/80 p-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-jockepay-danger"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-warning"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-success"></div>
            </div>
            <div className="text-xs text-white/80 flex-1 text-center flex items-center justify-center">
              <span>Jockepay Flow Dashboard</span>
              <span className="ml-2 flex items-center text-jockepay-success text-xs">
                <span className="w-2 h-2 rounded-full bg-jockepay-success mr-1 animate-pulse"></span>
                Ao vivo
              </span>
            </div>
          </div>
          
          <div className="bg-jockepay-dark/90 p-5 md:p-8">
            <div className="flex flex-col gap-8">
              {/* New Improved Flow Timeline */}
              <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-[7%] right-[7%] h-1 bg-white/10 -translate-y-1/2 rounded-full"></div>
                
                {/* Flow Steps - Restructured for better visibility */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
                  {/* Step 1: Checkout */}
                  <div className="flex flex-col items-center transition-all hover:scale-105 duration-300">
                    <div className="z-10 w-20 h-20 rounded-full flex flex-col items-center justify-center border-2 border-white/30 backdrop-blur-md bg-white/10 mb-3 shadow-lg">
                      <ShoppingCart size={28} className="text-white mb-1" />
                      <span className="text-xs text-white/80">Checkout</span>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-white font-medium mb-1">O cliente finaliza a compra</div>
                      <div className="text-xs flex items-center justify-center gap-1 text-jockepay-blue">
                        <Clock size={12} />
                        <span>00:00:00s</span>
                      </div>
                    </div>
                    
                    {/* Mobile only arrow */}
                    <div className="md:hidden flex justify-center my-4 text-jockepay-blue">
                      <ArrowUpRight size={24} className="animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Step 2: Jockepay Processing */}
                  <div className="flex flex-col items-center transition-all hover:scale-105 duration-300">
                    <div className="z-20 w-20 h-20 rounded-full flex flex-col items-center justify-center border-2 border-jockepay-neon backdrop-blur-md bg-jockepay-neon/20 mb-3 animate-pulse-slow shadow-[0_0_15px_rgba(0,242,234,0.3)]">
                      <div className="text-jockepay-neon font-bold mb-1">Jockepay</div>
                      <span className="text-xs text-white/80">Analisa</span>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-white font-medium mb-1">Análise e escolha da rota</div>
                      <div className="text-xs flex items-center justify-center gap-1 text-jockepay-neon">
                        <Clock size={12} />
                        <span>00:00:02s</span>
                      </div>
                    </div>
                    
                    {/* Mobile only arrow */}
                    <div className="md:hidden flex justify-center my-4 text-jockepay-neon">
                      <ArrowUpRight size={24} className="animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Step 3: First Attempt - PagBank */}
                  <div className="flex flex-col items-center transition-all hover:scale-105 duration-300">
                    <div className="z-10 flex flex-col items-center mb-3">
                      <div className="w-20 h-20 rounded-full border-2 border-jockepay-blue/60 backdrop-blur-md bg-jockepay-blue/10 flex flex-col items-center justify-center">
                        <span className="text-jockepay-blue font-medium mb-1">PagBank</span>
                        <span className="text-xs text-white/70">Tentativa 1</span>
                      </div>
                      <div className="mt-2 px-3 py-1 rounded-full backdrop-blur-md bg-jockepay-danger/20 border border-jockepay-danger/40 text-jockepay-danger text-xs flex items-center gap-1 animate-pulse">
                        <XCircle size={12} /> Recusado
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-white font-medium mb-1">Transação não aprovada</div>
                      <div className="text-xs flex items-center justify-center gap-1 text-jockepay-danger">
                        <Clock size={12} />
                        <span>00:00:12s</span>
                      </div>
                    </div>
                    
                    {/* Mobile only arrow */}
                    <div className="md:hidden flex justify-center my-4 text-jockepay-warning">
                      <ArrowUpRight size={24} className="animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Step 4: Fallback - Route Change */}
                  <div className="flex flex-col items-center transition-all hover:scale-105 duration-300">
                    <div className="z-10 flex flex-col items-center mb-3">
                      <div className="w-20 h-20 rounded-full border-2 border-jockepay-warning/60 backdrop-blur-md bg-jockepay-warning/10 flex flex-col items-center justify-center shadow-lg">
                        <RotateCw size={24} className="text-jockepay-warning animate-spin-slow mb-1" />
                        <span className="text-xs text-white/80">Roteamento</span>
                      </div>
                      <div className="mt-2 px-3 py-1 rounded-full backdrop-blur-md bg-jockepay-warning/20 border border-jockepay-warning/40 text-jockepay-warning text-xs flex items-center gap-1">
                        <AlertCircle size={12} /> Fallback automático
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-white font-medium mb-1">Redirecionamento</div>
                      <div className="text-xs flex items-center justify-center gap-1 text-jockepay-warning">
                        <Clock size={12} />
                        <span>00:00:13s</span>
                      </div>
                    </div>
                    
                    {/* Mobile only arrow */}
                    <div className="md:hidden flex justify-center my-4 text-jockepay-success">
                      <ArrowUpRight size={24} className="animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Step 5: Second Attempt - Stripe */}
                  <div className="flex flex-col items-center transition-all hover:scale-105 duration-300">
                    <div className="z-10 flex flex-col items-center mb-3">
                      <div className="w-20 h-20 rounded-full border-2 border-jockepay-success/60 backdrop-blur-md bg-jockepay-success/10 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        <span className="text-jockepay-success font-medium mb-1">Stripe</span>
                        <span className="text-xs text-white/70">Tentativa 2</span>
                      </div>
                      <div className="mt-2 px-3 py-1 rounded-full backdrop-blur-md bg-jockepay-success/20 border border-jockepay-success/40 text-jockepay-success text-xs flex items-center gap-1">
                        <CheckCircle size={12} /> Aprovado
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-white font-medium mb-1">Pagamento concluído</div>
                      <div className="text-xs flex items-center justify-center gap-1 text-jockepay-success">
                        <Clock size={12} />
                        <span>00:00:25s</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Animated connection lines for desktop - Improved */}
                <div className="hidden md:block">
                  {/* Connection 1: Checkout to Jockepay */}
                  <div className="absolute top-1/2 left-[15%] w-[13%] h-1 z-5 overflow-hidden -translate-y-1/2">
                    <div className="h-full w-full bg-gradient-to-r from-white/40 to-jockepay-neon/80 animate-grow rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 left-[28%] transform -translate-y-1/2 -translate-x-1/2 z-5">
                    <div className="w-3 h-3 bg-jockepay-neon rounded-full"></div>
                  </div>
                  
                  {/* Connection 2: Jockepay to PagBank */}
                  <div className="absolute top-1/2 left-[35%] w-[13%] h-1 z-5 overflow-hidden -translate-y-1/2">
                    <div className="h-full w-full bg-gradient-to-r from-jockepay-neon/80 to-jockepay-blue/80 animate-grow rounded-full" style={{animationDelay: '0.3s'}}></div>
                  </div>
                  <div className="absolute top-1/2 left-[48%] transform -translate-y-1/2 -translate-x-1/2 z-5">
                    <div className="w-3 h-3 bg-jockepay-blue rounded-full"></div>
                  </div>
                  
                  {/* Connection 3: PagBank to Fallback */}
                  <div className="absolute top-1/2 left-[55%] w-[13%] h-1 z-5 overflow-hidden -translate-y-1/2">
                    <div className="h-full w-full bg-gradient-to-r from-jockepay-danger/80 to-jockepay-warning/80 animate-grow rounded-full" style={{animationDelay: '0.6s'}}></div>
                  </div>
                  <div className="absolute top-1/2 left-[68%] transform -translate-y-1/2 -translate-x-1/2 z-5">
                    <div className="w-3 h-3 bg-jockepay-warning rounded-full"></div>
                  </div>
                  
                  {/* Connection 4: Fallback to Stripe */}
                  <div className="absolute top-1/2 left-[75%] w-[13%] h-1 z-5 overflow-hidden -translate-y-1/2">
                    <div className="h-full w-full bg-gradient-to-r from-jockepay-warning/80 to-jockepay-success/80 animate-grow rounded-full" style={{animationDelay: '0.9s'}}></div>
                  </div>
                  <div className="absolute top-1/2 left-[88%] transform -translate-y-1/2 -translate-x-1/2 z-5">
                    <div className="w-3 h-3 bg-jockepay-success rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Transaction details - Improved contrast and layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* Left side: Checkout details */}
                <div className="backdrop-blur-md bg-black/40 rounded-xl border border-white/30 p-6 hover:shadow-lg hover:shadow-jockepay-blue/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md bg-white/20 border border-white/40">
                        <Wallet size={18} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Detalhes do Checkout</h4>
                        <span className="text-sm text-white/80">ID: #89721458</span>
                      </div>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full backdrop-blur-md bg-jockepay-blue/30 text-jockepay-blue border border-jockepay-blue/50">R$ 327,90</span>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-white/70 text-xs block mb-1">Cliente:</span>
                        <span className="text-white font-medium">Maria Silva</span>
                      </div>
                      <div>
                        <span className="text-white/70 text-xs block mb-1">Email:</span>
                        <span className="text-white font-medium">m****@email.com</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-white/70 text-xs block mb-1">Cartão:</span>
                        <div className="flex items-center gap-2">
                          <CreditCard size={16} className="text-white" />
                          <span className="text-white font-medium">Visa</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-white/70 text-xs block mb-1">Final:</span>
                        <span className="text-white font-medium">**** 3485</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/30">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-white/70 text-xs block mb-1">Data:</span>
                          <span className="text-white font-medium">22/06/2023</span>
                        </div>
                        <div>
                          <span className="text-white/70 text-xs block mb-1">Horário:</span>
                          <span className="text-white font-medium">15:32:47</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side: Decision flow */}
                <div className="backdrop-blur-md bg-black/40 rounded-xl border border-white/30 p-6 hover:shadow-lg hover:shadow-jockepay-neon/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md bg-jockepay-neon/20 border border-jockepay-neon/50">
                        <span className="text-jockepay-neon font-bold text-xs">JK</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Decisão Inteligente</h4>
                        <span className="text-sm text-white/80">Tempo de processamento: 1.2s</span>
                      </div>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full backdrop-blur-md bg-jockepay-success/30 text-jockepay-success border border-jockepay-success/50">Concluído</span>
                  </div>
                  
                  <div className="space-y-5">
                    {/* PagBank - Failed attempt - Improved contrast */}
                    <div className="flex items-center gap-4 p-4 backdrop-blur-md bg-jockepay-danger/15 border border-jockepay-danger/40 rounded-xl">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-jockepay-danger/30 border border-jockepay-danger/50">
                        <span className="text-white text-xs font-medium">1</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-white">PagBank</span>
                          <span className="text-xs text-jockepay-danger flex items-center gap-1">
                            <XCircle size={12} /> Recusado
                          </span>
                        </div>
                        <span className="text-xs text-white/80">Código: insuficiência de fundos</span>
                      </div>
                    </div>
                    
                    {/* Connecting line */}
                    <div className="ml-4 h-6 w-0.5 bg-gradient-to-b from-jockepay-danger to-jockepay-warning"></div>
                    
                    {/* Stripe - Success attempt - Improved contrast */}
                    <div className="flex items-center gap-4 p-4 backdrop-blur-md bg-jockepay-success/15 border border-jockepay-success/40 rounded-xl">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-jockepay-success/30 border border-jockepay-success/50">
                        <span className="text-white text-xs font-medium">2</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-white">Stripe</span>
                          <span className="text-xs text-jockepay-success flex items-center gap-1">
                            <CheckCircle size={12} /> Aprovado
                          </span>
                        </div>
                        <span className="text-xs text-white/80">Roteamento com fallback automático</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/30">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">Taxa de aprovação geral</span>
                        <div className="flex items-center gap-1 text-jockepay-neon">
                          <span className="font-semibold">98.7%</span>
                          <span className="text-xs px-1.5 py-0.5 bg-jockepay-neon/20 rounded border border-jockepay-neon/40">+2.4%</span>
                        </div>
                      </div>
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
