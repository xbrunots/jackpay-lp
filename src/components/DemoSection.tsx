
import React from 'react';
import { ArrowRight, CheckCircle, XCircle, RotateCw, ShoppingCart, CreditCard, AlertCircle } from 'lucide-react';
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
            <span className="backdrop-blur-sm bg-jockepay-neon/10 border border-jockepay-neon/20 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-neon">Inteligência</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight text-white">
            Orquestração <span className="text-jockepay-neon">inteligente</span> de pagamentos
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Visualize como nosso sistema gerencia todo o fluxo de pagamentos com rotas inteligentes e fallbacks automáticos para maximizar a taxa de aprovação.
          </p>
        </div>

        <div className={`relative mx-auto max-w-6xl backdrop-blur-sm bg-black/30 rounded-2xl overflow-hidden border border-white/20 shadow-xl transition-all duration-700 delay-300 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-black/60 p-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-jockepay-danger"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-warning"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-success"></div>
            </div>
            <div className="text-xs text-white/80 flex-1 text-center">Jockepay Flow Dashboard</div>
          </div>
          
          <div className="bg-jockepay-dark/90 p-6 md:p-8">
            <div className="flex flex-col gap-8">
              {/* Full payment flow visualization */}
              <div className="relative">
                {/* Flow timeline */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 -translate-y-1/2"></div>
                
                {/* Flow steps */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                  {/* Step 1: Checkout */}
                  <div className="flex flex-col items-center">
                    <div className="z-10 w-16 h-16 rounded-full flex items-center justify-center border border-white/40 backdrop-blur-sm bg-white/10 mb-3 animate-pulse-slow">
                      <ShoppingCart size={24} className="text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium mb-1">Checkout</div>
                      <p className="text-xs text-white/80">O cliente finaliza a compra</p>
                    </div>
                    
                    {/* Mobile only arrow */}
                    <div className="md:hidden flex justify-center my-3">
                      <ArrowRight size={20} className="text-white/60" />
                    </div>
                  </div>
                  
                  {/* Step 2: Jockepay Processing */}
                  <div className="flex flex-col items-center">
                    <div className="z-10 w-16 h-16 rounded-full flex items-center justify-center border border-jockepay-neon/60 backdrop-blur-sm bg-jockepay-neon/20 mb-3 animate-glow">
                      <div className="text-jockepay-neon font-bold text-sm">Jockepay</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium mb-1">Processamento</div>
                      <p className="text-xs text-white/80">Análise da transação e escolha da melhor rota</p>
                    </div>
                    
                    {/* Mobile only arrow */}
                    <div className="md:hidden flex justify-center my-3">
                      <ArrowRight size={20} className="text-white/60" />
                    </div>
                  </div>
                  
                  {/* Step 3: First Attempt - PagBank */}
                  <div className="flex flex-col items-center">
                    <div className="z-10 flex flex-col items-center mb-3">
                      <div className="w-16 h-16 rounded-full border border-jockepay-blue/60 backdrop-blur-sm bg-jockepay-blue/20 flex items-center justify-center animate-pulse-slow">
                        <span className="text-jockepay-blue font-medium">PagBank</span>
                      </div>
                      <div className="mt-2 px-3 py-1 rounded-full backdrop-blur-sm bg-jockepay-danger/30 border border-jockepay-danger/40 text-jockepay-danger text-xs flex items-center gap-1">
                        <XCircle size={12} /> Recusado
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium mb-1">Primeira tentativa</div>
                      <p className="text-xs text-white/80">Transação não aprovada</p>
                    </div>
                    
                    {/* Mobile only arrow */}
                    <div className="md:hidden flex justify-center my-3">
                      <ArrowRight size={20} className="text-white/60" />
                    </div>
                  </div>
                  
                  {/* Step 4: Fallback - Asaas */}
                  <div className="flex flex-col items-center">
                    <div className="z-10 flex flex-col items-center mb-3">
                      <div className="w-16 h-16 rounded-full border border-jockepay-warning/60 backdrop-blur-sm bg-jockepay-warning/20 flex items-center justify-center">
                        <RotateCw size={24} className="text-jockepay-warning animate-spin-slow" />
                      </div>
                      <div className="absolute top-20 -right-10 md:static mt-2 px-3 py-1 rounded-full backdrop-blur-sm bg-jockepay-warning/30 border border-jockepay-warning/40 text-jockepay-warning text-xs flex items-center gap-1">
                        <AlertCircle size={12} /> Fallback
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium mb-1">Roteamento</div>
                      <p className="text-xs text-white/80">Redirecionamento automático</p>
                    </div>
                    
                    {/* Mobile only arrow */}
                    <div className="md:hidden flex justify-center my-3">
                      <ArrowRight size={20} className="text-white/60" />
                    </div>
                  </div>
                  
                  {/* Step 5: Second Attempt - Stripe */}
                  <div className="flex flex-col items-center">
                    <div className="z-10 flex flex-col items-center mb-3">
                      <div className="w-16 h-16 rounded-full border border-jockepay-success/60 backdrop-blur-sm bg-jockepay-success/20 flex items-center justify-center">
                        <span className="text-jockepay-success font-medium">Stripe</span>
                      </div>
                      <div className="mt-2 px-3 py-1 rounded-full backdrop-blur-sm bg-jockepay-success/30 border border-jockepay-success/40 text-jockepay-success text-xs flex items-center gap-1">
                        <CheckCircle size={12} /> Aprovado
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium mb-1">Pagamento concluído</div>
                      <p className="text-xs text-white/80">Transação bem-sucedida</p>
                    </div>
                  </div>
                </div>
                
                {/* Animated arrows for desktop */}
                <div className="hidden md:block">
                  {/* Arrow 1 */}
                  <div className="absolute top-1/2 left-[15%] w-[12%] h-0.5 bg-gradient-to-r from-white/60 to-jockepay-neon/80 -translate-y-1/2 animate-grow"></div>
                  <div className="absolute top-1/2 left-[27%] -translate-y-1/2 text-jockepay-neon">
                    <ArrowRight size={16} />
                  </div>
                  
                  {/* Arrow 2 */}
                  <div className="absolute top-1/2 left-[35%] w-[12%] h-0.5 bg-gradient-to-r from-jockepay-neon/80 to-jockepay-danger/80 -translate-y-1/2 animate-grow" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute top-1/2 left-[47%] -translate-y-1/2 text-jockepay-danger">
                    <ArrowRight size={16} />
                  </div>
                  
                  {/* Arrow 3 */}
                  <div className="absolute top-1/2 left-[55%] w-[12%] h-0.5 bg-gradient-to-r from-jockepay-danger/80 to-jockepay-warning/80 -translate-y-1/2 animate-grow" style={{ animationDelay: '0.4s' }}></div>
                  <div className="absolute top-1/2 left-[67%] -translate-y-1/2 text-jockepay-warning">
                    <ArrowRight size={16} />
                  </div>
                  
                  {/* Arrow 4 */}
                  <div className="absolute top-1/2 left-[75%] w-[12%] h-0.5 bg-gradient-to-r from-jockepay-warning/80 to-jockepay-success/80 -translate-y-1/2 animate-grow" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute top-1/2 left-[87%] -translate-y-1/2 text-jockepay-success">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              
              {/* Transaction details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* Left side: Checkout details */}
                <div className="backdrop-blur-sm bg-black/30 rounded-2xl border border-white/20 p-6 hover:shadow-lg hover:shadow-jockepay-blue/10 transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/15 border border-white/30">
                        <ShoppingCart size={18} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Detalhes do Checkout</h4>
                        <span className="text-sm text-white/70">ID: #89721458</span>
                      </div>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full backdrop-blur-sm bg-jockepay-blue/30 text-jockepay-blue border border-jockepay-blue/40">R$ 327,90</span>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-white/60 text-xs block mb-1">Cliente:</span>
                        <span className="text-white font-medium">Maria Silva</span>
                      </div>
                      <div>
                        <span className="text-white/60 text-xs block mb-1">Email:</span>
                        <span className="text-white font-medium">m****@email.com</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-white/60 text-xs block mb-1">Cartão:</span>
                        <div className="flex items-center gap-2">
                          <CreditCard size={16} className="text-white/80" />
                          <span className="text-white font-medium">Visa</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-white/60 text-xs block mb-1">Final:</span>
                        <span className="text-white font-medium">**** 3485</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-white/60 text-xs block mb-1">Data:</span>
                          <span className="text-white font-medium">22/06/2023</span>
                        </div>
                        <div>
                          <span className="text-white/60 text-xs block mb-1">Horário:</span>
                          <span className="text-white font-medium">15:32:47</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side: Decision flow */}
                <div className="backdrop-blur-sm bg-black/30 rounded-2xl border border-white/20 p-6 hover:shadow-lg hover:shadow-jockepay-neon/10 transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm bg-jockepay-neon/20 border border-jockepay-neon/40">
                        <span className="text-jockepay-neon font-bold text-xs">JK</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Decisão Inteligente</h4>
                        <span className="text-sm text-white/70">Tempo de processamento: 1.2s</span>
                      </div>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full backdrop-blur-sm bg-jockepay-success/30 text-jockepay-success border border-jockepay-success/40">Concluído</span>
                  </div>
                  
                  <div className="space-y-5">
                    {/* PagBank - Failed attempt */}
                    <div className="flex items-center gap-4 p-3 backdrop-blur-sm bg-jockepay-danger/10 border border-jockepay-danger/30 rounded-xl">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-jockepay-danger/20 border border-jockepay-danger/40">
                        <span className="text-jockepay-danger text-xs font-medium">1</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-white">PagBank</span>
                          <span className="text-xs text-jockepay-danger flex items-center gap-1">
                            <XCircle size={12} /> Recusado
                          </span>
                        </div>
                        <span className="text-xs text-white/70">Código: insuficiência de fundos</span>
                      </div>
                    </div>
                    
                    {/* Connecting line */}
                    <div className="ml-4 h-6 w-0.5 bg-jockepay-warning/60"></div>
                    
                    {/* Stripe - Success attempt */}
                    <div className="flex items-center gap-4 p-3 backdrop-blur-sm bg-jockepay-success/10 border border-jockepay-success/30 rounded-xl">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-jockepay-success/20 border border-jockepay-success/40">
                        <span className="text-jockepay-success text-xs font-medium">2</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-white">Stripe</span>
                          <span className="text-xs text-jockepay-success flex items-center gap-1">
                            <CheckCircle size={12} /> Aprovado
                          </span>
                        </div>
                        <span className="text-xs text-white/70">Roteamento com fallback automático</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-sm">Taxa de aprovação geral</span>
                        <div className="flex items-center gap-1 text-jockepay-neon">
                          <span className="font-semibold">98.7%</span>
                          <span className="text-xs px-1.5 py-0.5 bg-jockepay-neon/20 rounded">+2.4%</span>
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
