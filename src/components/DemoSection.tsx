
import React from 'react';
import { ArrowRight, CheckCircle, XCircle, RotateCw, ShoppingCart, CreditCard, AlertCircle, Clock, Wallet } from 'lucide-react';
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

        {/* New Payment Flow Dashboard */}
        <div className={`relative mx-auto max-w-5xl backdrop-blur-md bg-black/50 rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-700 delay-300 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-black/90 to-black/70 p-4 flex items-center gap-3 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-jockepay-danger"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-warning"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-success"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm font-medium text-white">Jockepay Flow Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-jockepay-success/20 text-jockepay-success border border-jockepay-success/30">
                <span className="w-1.5 h-1.5 bg-jockepay-success rounded-full mr-1.5 animate-pulse"></span>
                Ao vivo
              </span>
            </div>
          </div>

          {/* Flow Chart Area */}
          <div className="p-8 relative min-h-[500px] bg-gradient-to-b from-jockepay-dark/50 to-black/80">
            {/* Main Transaction Path */}
            <div className="transaction-flow-path">
              {/* Status Timeline */}
              <div className="flex items-center justify-center mb-16 relative">
                <div className="w-full max-w-4xl h-1 bg-white/10 absolute"></div>
                
                {/* Step 1: Checkout - Start */}
                <div className="absolute left-0 transform -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-jockepay-blue border-4 border-jockepay-dark flex items-center justify-center z-10 mb-2">
                    <ShoppingCart size={14} className="text-white" />
                  </div>
                  <span className="text-white text-xs font-medium">Checkout</span>
                  <span className="text-white/60 text-xs mt-1">00:00s</span>
                </div>
                
                {/* Step 2: Processing - Jockepay */}
                <div className="absolute left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-jockepay-neon/30 border-4 border-jockepay-dark flex items-center justify-center z-10 mb-2 shadow-[0_0_20px_rgba(0,242,234,0.4)]">
                    <span className="font-bold text-jockepay-neon text-sm">JK</span>
                  </div>
                  <span className="text-white text-xs font-medium">Processamento</span>
                  <span className="text-jockepay-neon text-xs mt-1">00:02s</span>
                </div>
                
                {/* Step 3: First Attempt - Declined */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-jockepay-danger/70 border-4 border-jockepay-dark flex items-center justify-center z-10 mb-2">
                    <XCircle size={14} className="text-white" />
                  </div>
                  <span className="text-white text-xs font-medium">Recusado</span>
                  <span className="text-jockepay-danger text-xs mt-1">PagBank</span>
                </div>
                
                {/* Step 4: Fallback Process */}
                <div className="absolute left-3/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-jockepay-warning/70 border-4 border-jockepay-dark flex items-center justify-center z-10 mb-2 animate-pulse-slow">
                    <RotateCw size={14} className="text-white animate-spin-slow" />
                  </div>
                  <span className="text-white text-xs font-medium">Fallback</span>
                  <span className="text-jockepay-warning text-xs mt-1">00:13s</span>
                </div>
                
                {/* Step 5: Success - Final */}
                <div className="absolute right-0 transform -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-jockepay-success/70 border-4 border-jockepay-dark flex items-center justify-center z-10 mb-2">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-white text-xs font-medium">Aprovado</span>
                  <span className="text-jockepay-success text-xs mt-1">Stripe</span>
                </div>
              </div>

              {/* Animated Connection Lines */}
              <div className="relative w-full max-w-4xl mx-auto h-12">
                {/* Checkout to Jockepay */}
                <div className="absolute top-0 left-[5%] w-[20%] h-1 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-jockepay-blue to-jockepay-neon/70 animate-flow-right"></div>
                </div>
                
                {/* Jockepay to First Attempt (PagBank) */}
                <div className="absolute top-0 left-[25%] w-[25%] h-1 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-jockepay-neon/70 to-jockepay-danger/70 animate-flow-right" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* First Attempt to Fallback */}
                <div className="absolute top-0 left-[50%] w-[25%] h-1 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-jockepay-danger/70 to-jockepay-warning/70 animate-flow-right" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Fallback to Success (Stripe) */}
                <div className="absolute top-0 left-[75%] w-[20%] h-1 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-jockepay-warning/70 to-jockepay-success/70 animate-flow-right" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>

              {/* Detailed View of the Flow */}
              <div className="flow-details mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Panel: Transaction Details */}
                <div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:shadow-lg hover:shadow-jockepay-blue/10 transition-all duration-300">
                  <h3 className="text-white text-lg font-semibold mb-4">Detalhes da Transação</h3>
                  
                  <div className="space-y-6">
                    {/* Transaction Info */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-jockepay-blue/20 border border-jockepay-blue/30 flex items-center justify-center shrink-0">
                        <ShoppingCart size={18} className="text-jockepay-blue" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Checkout Iniciado</div>
                        <p className="text-white/70 text-sm mt-1">Cliente completa formulário de pagamento e confirma a transação de R$ 327,50</p>
                      </div>
                    </div>

                    {/* Processing Info */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-jockepay-neon/20 border border-jockepay-neon/30 flex items-center justify-center shrink-0">
                        <span className="font-bold text-jockepay-neon text-xs">JK</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">Orquestração Jockepay</div>
                        <p className="text-white/70 text-sm mt-1">Sistema analisa histórico, risco e performance dos PSPs para selecionar a rota ideal</p>
                      </div>
                    </div>

                    {/* Timeline Flow */}
                    <div className="pl-5 border-l border-white/20">
                      {/* First Attempt: PagBank - Failed */}
                      <div className="relative pb-6">
                        <div className="absolute -left-[21px] w-4 h-4 rounded-full bg-jockepay-danger border-2 border-jockepay-dark"></div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <span className="text-white/90 font-medium">Tentativa 1: PagBank</span>
                            <span className="ml-2 text-xs px-2 py-0.5 bg-jockepay-danger/20 text-jockepay-danger rounded-full border border-jockepay-danger/30">Recusado</span>
                          </div>
                          <p className="text-white/60 text-sm mt-1">Erro: Fundos insuficientes</p>
                        </div>
                      </div>

                      {/* Fallback Routing: Automatic */}
                      <div className="relative pb-6">
                        <div className="absolute -left-[21px] w-4 h-4 rounded-full bg-jockepay-warning border-2 border-jockepay-dark animate-pulse"></div>
                        <div className="ml-4">
                          <div className="text-white/90 font-medium">Sistema de Fallback Ativado</div>
                          <p className="text-white/60 text-sm mt-1">Redirecionamento automático para rota alternativa baseado em regras inteligentes</p>
                        </div>
                      </div>

                      {/* Second Attempt: Stripe - Success */}
                      <div className="relative">
                        <div className="absolute -left-[21px] w-4 h-4 rounded-full bg-jockepay-success border-2 border-jockepay-dark"></div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <span className="text-white/90 font-medium">Tentativa 2: Stripe</span>
                            <span className="ml-2 text-xs px-2 py-0.5 bg-jockepay-success/20 text-jockepay-success rounded-full border border-jockepay-success/30">Aprovado</span>
                          </div>
                          <p className="text-white/60 text-sm mt-1">Pagamento processado com sucesso</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Performance Metrics */}
                <div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:shadow-lg hover:shadow-jockepay-neon/10 transition-all duration-300">
                  <h3 className="text-white text-lg font-semibold mb-4">Métricas de Performance</h3>
                  
                  {/* Transaction Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 text-center">
                      <div className="text-jockepay-success text-2xl font-bold">97.4%</div>
                      <div className="text-white/70 text-xs mt-1">Taxa de Aprovação</div>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 text-center">
                      <div className="text-jockepay-neon text-2xl font-bold">8.5%</div>
                      <div className="text-white/70 text-xs mt-1">Recuperação via Fallback</div>
                    </div>
                  </div>
                  
                  {/* Provider Performance */}
                  <div className="space-y-5">
                    <h4 className="text-white/90 text-sm font-medium">Performance por PSP</h4>
                    
                    {/* Stripe */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Stripe</span>
                        <span className="text-jockepay-success">95.2%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-jockepay-success rounded-full" style={{width: '95.2%'}}></div>
                      </div>
                    </div>
                    
                    {/* PagSeguro */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">PagSeguro</span>
                        <span className="text-jockepay-neon">89.7%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-jockepay-neon rounded-full" style={{width: '89.7%'}}></div>
                      </div>
                    </div>
                    
                    {/* PagBank */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">PagBank</span>
                        <span className="text-jockepay-blue">86.3%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-jockepay-blue rounded-full" style={{width: '86.3%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Success Message */}
                  <div className="mt-8 p-4 bg-jockepay-success/20 border border-jockepay-success/30 rounded-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-jockepay-success/30 flex items-center justify-center">
                      <CheckCircle size={18} className="text-jockepay-success" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Transação Bem-sucedida</div>
                      <p className="text-white/70 text-xs">Tempo total: 00:25s | Economia estimada: R$ 12,37</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Benefit 1 */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-jockepay-blue/30 hover:shadow-lg hover:shadow-jockepay-blue/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-jockepay-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight size={20} className="text-jockepay-blue" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Processamento Rápido</h3>
            <p className="text-white/70 text-sm">Transações concluídas em milissegundos com decisões em tempo real.</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-jockepay-neon/30 hover:shadow-lg hover:shadow-jockepay-neon/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-jockepay-neon/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <RotateCw size={20} className="text-jockepay-neon" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Rotas Adaptativas</h3>
            <p className="text-white/70 text-sm">Sistema inteligente que aprende e otimiza rotas de pagamento.</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-jockepay-success/30 hover:shadow-lg hover:shadow-jockepay-success/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-jockepay-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={20} className="text-jockepay-success" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Maior Conversão</h3>
            <p className="text-white/70 text-sm">Aumento médio de 8.5% na taxa de aprovação com recuperação automática.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

