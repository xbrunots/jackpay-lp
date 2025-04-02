
import React from 'react';
import { ArrowRight, CheckCircle, XCircle, RotateCw, ShoppingCart, CreditCard, AlertTriangle, ArrowDownRight, Clock } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Sample data for the area chart
const performanceData = [
  { name: 'Jan', stripe: 94.2, pagseguro: 87.7, pagbank: 85.1 },
  { name: 'Feb', stripe: 94.8, pagseguro: 88.3, pagbank: 83.5 },
  { name: 'Mar', stripe: 93.5, pagseguro: 89.1, pagbank: 84.2 },
  { name: 'Apr', stripe: 95.0, pagseguro: 88.2, pagbank: 86.0 },
  { name: 'May', stripe: 94.3, pagseguro: 89.0, pagbank: 85.7 },
  { name: 'Jun', stripe: 95.2, pagseguro: 89.7, pagbank: 86.3 }
];

// Sample data for comparison
const comparisonData = {
  withoutJockepay: 88.9,
  withJockepay: 97.4,
  improvement: 8.5
};

const DemoSection = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });
  
  return (
    <section 
      id="solutions" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-28 md:py-36 relative overflow-hidden bg-gradient-to-b from-jockepay-dark to-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 jockepay-pattern-grid opacity-10 z-0"></div>
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-jockepay-blue/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-jockepay-neon/20 rounded-full blur-[100px]"></div>
      
      <div className="container-custom relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="backdrop-blur-sm bg-jockepay-neon/20 border border-jockepay-neon/30 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-neon">Inteligência</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight text-white">
            Orquestração <span className="text-jockepay-neon">inteligente</span> de pagamentos
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Visualize como nosso sistema gerencia todo o fluxo de pagamentos com rotas inteligentes e fallbacks automáticos para maximizar a taxa de aprovação.
          </p>
        </div>

        {/* New Payment Flow Visualization */}
        <div className={`transition-all duration-700 delay-300 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative mx-auto max-w-6xl">
            {/* Flow Diagram */}
            <div className="bg-black/60 backdrop-blur-lg rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-black/90 to-black/70 p-4 flex items-center gap-3 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-jockepay-danger"></div>
                  <div className="w-3 h-3 rounded-full bg-jockepay-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-jockepay-success"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-medium text-white">Jockepay Flow Visualization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-jockepay-success/20 text-jockepay-success border border-jockepay-success/30">
                    <span className="w-1.5 h-1.5 bg-jockepay-success rounded-full mr-1.5 animate-pulse"></span>
                    Ao vivo
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                {/* Main Flow Diagram */}
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Flow Visualization */}
                  <div className="lg:w-3/5 space-y-6">
                    <h3 className="text-white text-xl font-medium mb-6">Fluxo de Pagamento</h3>
                    
                    {/* Flow Steps with Visual Connection */}
                    <div className="relative">
                      {/* Vertical Connection Line */}
                      <div className="absolute left-6 top-10 w-1 h-[calc(100%-40px)] bg-gradient-to-b from-jockepay-blue via-jockepay-neon to-jockepay-success"></div>
                      
                      {/* Flow Cards with status indicator */}
                      <div className="flow-steps space-y-10">
                        {/* Step 1: Checkout */}
                        <div className="relative pl-16">
                          <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-jockepay-blue border-4 border-black flex items-center justify-center z-10">
                            <ShoppingCart size={20} className="text-white" />
                          </div>
                          <div className="bg-black/40 backdrop-blur-md rounded-xl border border-jockepay-blue/30 p-5 hover:border-jockepay-blue/50 transition-all">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-white">Checkout</h4>
                              <span className="text-xs text-jockepay-blue">00:00s</span>
                            </div>
                            <p className="text-sm text-white/70">Cliente finaliza a compra de R$ 327,50</p>
                            
                            {/* Animation showing data flow */}
                            <div className="mt-3 h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
                              <div className="h-full w-12 bg-jockepay-blue rounded-full animate-flow-right"></div>
                            </div>
                          </div>
                        </div>

                        {/* Step 2: Jockepay Processing */}
                        <div className="relative pl-16">
                          <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-jockepay-neon border-4 border-black flex items-center justify-center z-10">
                            <span className="font-bold text-black text-sm">JK</span>
                          </div>
                          <div className="bg-black/40 backdrop-blur-md rounded-xl border border-jockepay-neon/30 p-5 hover:border-jockepay-neon/50 transition-all">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-white">Orquestração Jockepay</h4>
                              <span className="text-xs text-jockepay-neon">00:02s</span>
                            </div>
                            <p className="text-sm text-white/70">Análise de risco e histórico para selecionar a melhor rota</p>
                            
                            {/* Processing animation */}
                            <div className="mt-3 flex justify-between items-center gap-2">
                              <div className="bg-black/30 h-8 flex-1 rounded-lg border border-jockepay-neon/20 flex items-center px-3">
                                <span className="text-xs text-white/60">Analisando rotas...</span>
                              </div>
                              <div className="bg-black/30 w-8 h-8 flex items-center justify-center rounded-lg border border-jockepay-neon/20">
                                <RotateCw size={14} className="text-jockepay-neon animate-spin" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Step 3: First Attempt - Failed */}
                        <div className="relative pl-16">
                          <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-jockepay-danger border-4 border-black flex items-center justify-center z-10">
                            <XCircle size={20} className="text-white" />
                          </div>
                          <div className="bg-black/40 backdrop-blur-md rounded-xl border border-jockepay-danger/30 p-5 hover:border-jockepay-danger/50 transition-all">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-white">Rota 1: PagBank</h4>
                              <span className="text-xs text-jockepay-danger">Recusado</span>
                            </div>
                            <p className="text-sm text-white/70">Primeira tentativa de pagamento não aprovada</p>
                            
                            {/* Error detail */}
                            <div className="mt-3 bg-jockepay-danger/10 border border-jockepay-danger/20 rounded-lg p-3 flex items-center gap-2">
                              <AlertTriangle size={16} className="text-jockepay-danger" />
                              <span className="text-xs text-jockepay-danger/90">Erro: Fundos insuficientes</span>
                            </div>
                          </div>
                        </div>

                        {/* Step 4: Fallback System Activated */}
                        <div className="relative pl-16">
                          <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-jockepay-warning border-4 border-black flex items-center justify-center z-10">
                            <ArrowDownRight size={20} className="text-white" />
                          </div>
                          <div className="bg-black/40 backdrop-blur-md rounded-xl border border-jockepay-warning/30 p-5 hover:border-jockepay-warning/50 transition-all">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-white">Sistema de Fallback</h4>
                              <span className="text-xs text-jockepay-warning">00:13s</span>
                            </div>
                            <p className="text-sm text-white/70">Redirecionamento automático para rota alternativa</p>
                            
                            {/* Routing animation */}
                            <div className="mt-3 h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
                              <div className="h-full w-1/2 bg-gradient-to-r from-jockepay-warning to-jockepay-success animate-pulse-width"></div>
                            </div>
                          </div>
                        </div>

                        {/* Step 5: Success */}
                        <div className="relative pl-16">
                          <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-jockepay-success border-4 border-black flex items-center justify-center z-10">
                            <CheckCircle size={20} className="text-white" />
                          </div>
                          <div className="bg-black/40 backdrop-blur-md rounded-xl border border-jockepay-success/30 p-5 hover:border-jockepay-success/50 transition-all">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-white">Rota 2: Stripe</h4>
                              <span className="text-xs text-jockepay-success">Aprovado</span>
                            </div>
                            <p className="text-sm text-white/70">Pagamento processado com sucesso</p>
                            
                            {/* Success detail */}
                            <div className="mt-3 bg-jockepay-success/10 border border-jockepay-success/20 rounded-lg p-3 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-jockepay-success" />
                                <span className="text-xs text-jockepay-success/90">Transação bem-sucedida</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock size={14} className="text-white/60" />
                                <span className="text-xs text-white/60">Total: 00:25s</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Performance Metrics */}
                  <div className="lg:w-2/5 space-y-6">
                    <h3 className="text-white text-xl font-medium mb-6">Métricas de Performance</h3>
                    
                    {/* Key Metrics Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-jockepay-success/20 to-jockepay-success/5 backdrop-blur-md rounded-xl border border-jockepay-success/30 p-5 text-center">
                        <span className="text-3xl font-bold text-jockepay-success">97.4%</span>
                        <p className="text-xs text-white/70 mt-1">Taxa de Aprovação</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-jockepay-neon/20 to-jockepay-neon/5 backdrop-blur-md rounded-xl border border-jockepay-neon/30 p-5 text-center">
                        <span className="text-3xl font-bold text-jockepay-neon">8.5%</span>
                        <p className="text-xs text-white/70 mt-1">Recuperação via Fallback</p>
                      </div>
                    </div>
                    
                    {/* Performance Chart */}
                    <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-5">
                      <h4 className="text-white text-sm font-medium mb-4">Performance por PSP</h4>
                      
                      <div className="h-[200px]">
                        <ChartContainer
                          config={{
                            stripe: { 
                              theme: { light: "#10b981", dark: "#10b981" },
                              label: "Stripe"
                            },
                            pagseguro: {
                              theme: { light: "#3b82f6", dark: "#3b82f6" },
                              label: "PagSeguro"
                            },
                            pagbank: {
                              theme: { light: "#00f2ea", dark: "#00f2ea" },
                              label: "PagBank"
                            },
                          }}
                        >
                          <AreaChart
                            data={performanceData}
                            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                          >
                            <defs>
                              <linearGradient id="stripeGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                              </linearGradient>
                              <linearGradient id="pagseguroGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                              </linearGradient>
                              <linearGradient id="pagbankGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00f2ea" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#00f2ea" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <XAxis 
                              dataKey="name"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.5)' }}
                            />
                            <YAxis 
                              domain={[80, 100]}
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.5)' }}
                            />
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <ChartTooltip 
                              content={<ChartTooltipContent labelFormatter={(label) => `${label} 2023`} />}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="stripe" 
                              stroke="#10b981"
                              fillOpacity={1}
                              fill="url(#stripeGradient)"
                            />
                            <Area 
                              type="monotone" 
                              dataKey="pagseguro"
                              stroke="#3b82f6"
                              fillOpacity={1}
                              fill="url(#pagseguroGradient)"
                            />
                            <Area 
                              type="monotone" 
                              dataKey="pagbank"
                              stroke="#00f2ea"
                              fillOpacity={1}
                              fill="url(#pagbankGradient)"
                            />
                          </AreaChart>
                        </ChartContainer>
                      </div>
                    </div>
                    
                    {/* Improvement Card */}
                    <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-5">
                      <h4 className="text-white text-sm font-medium mb-3">Comparação de Desempenho</h4>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <XCircle size={16} className="text-white/70" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-white/70">Sem Jockepay</div>
                          <div className="text-base font-semibold text-white">{comparisonData.withoutJockepay}% aprovação</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-jockepay-neon/20 flex items-center justify-center">
                          <CheckCircle size={16} className="text-jockepay-neon" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-white/70">Com Jockepay</div>
                          <div className="text-base font-semibold text-white">{comparisonData.withJockepay}% aprovação</div>
                        </div>
                      </div>
                      
                      {/* Summary Card */}
                      <div className="bg-jockepay-success/10 border border-jockepay-success/30 rounded-lg p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-jockepay-success/30 flex items-center justify-center">
                          <ArrowRight size={18} className="text-jockepay-success" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">Aumento de {comparisonData.improvement}% na Taxa de Conversão</div>
                          <p className="text-white/60 text-xs">Economia estimada: R$ 12,37 por transação</p>
                        </div>
                      </div>
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
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-jockepay-blue/30 hover:shadow-lg hover:shadow-jockepay-blue/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-jockepay-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight size={20} className="text-jockepay-blue" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Processamento Rápido</h3>
            <p className="text-white/70 text-sm">Transações concluídas em milissegundos com decisões em tempo real.</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-jockepay-neon/30 hover:shadow-lg hover:shadow-jockepay-neon/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-jockepay-neon/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <RotateCw size={20} className="text-jockepay-neon" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Rotas Adaptativas</h3>
            <p className="text-white/70 text-sm">Sistema inteligente que aprende e otimiza rotas de pagamento.</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-jockepay-success/30 hover:shadow-lg hover:shadow-jockepay-success/10 transition-all duration-300 hover:-translate-y-1">
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
