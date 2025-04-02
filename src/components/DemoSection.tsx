
import React from 'react';
import { ArrowRight, CheckCircle, XCircle, RotateCw, ShoppingCart, CreditCard, AlertCircle, Clock, Wallet, ArrowDownRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

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

        {/* Novo Fluxograma de Pagamento */}
        <div className={`relative mx-auto max-w-6xl backdrop-blur-sm bg-black/60 rounded-2xl overflow-hidden border border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-700 delay-300 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-black/80 p-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-jockepay-danger"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-warning"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-success"></div>
            </div>
            <div className="text-xs text-white/90 flex-1 text-center flex items-center justify-center">
              <span className="font-medium">Jockepay Flow Dashboard</span>
              <span className="ml-2 flex items-center text-jockepay-success text-xs">
                <span className="w-2 h-2 rounded-full bg-jockepay-success mr-1 animate-pulse"></span>
                Ao vivo
              </span>
            </div>
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs bg-transparent hover:bg-white/10 text-white/80 h-7 px-2">Visualizações</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-2 w-[180px] bg-black/90 border border-white/20 backdrop-blur-md rounded-md">
                      <li className="px-2 py-1.5 text-xs hover:bg-white/10 rounded cursor-pointer text-white flex items-center">
                        <span className="mr-1.5 w-2 h-2 bg-jockepay-neon rounded-full"></span> Fluxo de Transação
                      </li>
                      <li className="px-2 py-1.5 text-xs hover:bg-white/10 rounded cursor-pointer text-white/70 flex items-center">
                        <span className="mr-1.5 w-2 h-2 bg-white/30 rounded-full"></span> Análise de Fraude
                      </li>
                      <li className="px-2 py-1.5 text-xs hover:bg-white/10 rounded cursor-pointer text-white/70 flex items-center">
                        <span className="mr-1.5 w-2 h-2 bg-white/30 rounded-full"></span> Métricas de PSPs
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="p-6 md:p-10 bg-gradient-to-b from-jockepay-dark/70 to-black/80">
            {/* Novo Flowchart - Design Moderno com Conexões mais Claras */}
            <div className="relative">
              {/* Linhas de Conexão - Base */}
              <div className="absolute top-[50%] left-0 right-0 h-1 bg-white/5 -translate-y-1/2 hidden md:block"></div>
              
              {/* Flowchart Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-2 relative">
                {/* Node 1: Cliente Checkout */}
                <div className="flex flex-col items-center relative z-10 group">
                  <div className="flex flex-col items-center transition-all duration-300 group-hover:scale-[1.03]">
                    {/* Ícone de Nó */}
                    <div className="relative w-24 h-24 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
                      <ShoppingCart size={32} className="text-white" strokeWidth={1.25} />
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs text-white font-medium">
                        Checkout
                      </div>
                    </div>
                    
                    {/* Detalhes do Nó */}
                    <div className="text-center mt-5">
                      <h4 className="text-white font-semibold text-base mb-1">Cliente inicia pagamento</h4>
                      <div className="flex items-center justify-center gap-1 text-white/60 text-xs">
                        <Clock size={12} />
                        <span>00:00:00s</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Seta de conexão (mobile) */}
                  <div className="md:hidden flex justify-center my-6">
                    <ArrowDownRight size={24} className="text-white/40" />
                  </div>
                </div>
                
                {/* Node 2: Jockepay Processing */}
                <div className="flex flex-col items-center relative z-20 group">
                  <div className="flex flex-col items-center transition-all duration-300 group-hover:scale-[1.03]">
                    {/* Ícone de Nó - Destaque na Jockepay */}
                    <div className="relative w-24 h-24 rounded-xl flex flex-col items-center justify-center bg-gradient-to-r from-jockepay-neon/30 to-jockepay-blue/20 backdrop-blur-md border border-jockepay-neon/30 shadow-[0_0_25px_rgba(0,242,234,0.2)] mb-4 animate-pulse-slow">
                      <div className="text-jockepay-neon font-bold text-xl mb-1">Jockepay</div>
                      <div className="text-white/80 text-xs">Orquestrador</div>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-jockepay-neon/20 backdrop-blur-md rounded-full border border-jockepay-neon/30 text-xs text-jockepay-neon font-medium">
                        Análise
                      </div>
                    </div>
                    
                    {/* Detalhes do Nó */}
                    <div className="text-center mt-5">
                      <h4 className="text-white font-semibold text-base mb-1">Seleção de rota ideal</h4>
                      <div className="flex items-center justify-center gap-1 text-jockepay-neon text-xs">
                        <Clock size={12} />
                        <span>00:00:02s</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Elemento de decisão - Representa o algoritmo da Jockepay */}
                  <div className="hidden md:block absolute top-[40%] left-[95%] transform -translate-y-1/2 w-14 h-10 bg-jockepay-neon/20 backdrop-blur-md border border-jockepay-neon/30 rounded-lg rotate-45 z-[-1] animate-pulse"></div>
                  
                  {/* Seta de conexão (mobile) */}
                  <div className="md:hidden flex justify-center my-6">
                    <div className="relative">
                      <ArrowDownRight size={24} className="text-jockepay-danger" />
                      <div className="absolute top-8 left-0">
                        <span className="text-xs text-jockepay-danger">Rota 1</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Node 3: First Attempt - PagBank */}
                <div className="flex flex-col items-center relative z-10 group">
                  <div className="flex flex-col items-center transition-all duration-300 group-hover:scale-[1.03]">
                    {/* Ícone de Nó */}
                    <div className="relative w-24 h-24 rounded-xl flex flex-col items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
                      <div className="text-white font-semibold text-lg mb-1">PagBank</div>
                      <div className="text-white/60 text-xs">Tentativa 1</div>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-jockepay-danger/30 backdrop-blur-md rounded-full border border-jockepay-danger/40 text-xs text-jockepay-danger font-medium flex items-center gap-1">
                        <XCircle size={10} />
                        Recusado
                      </div>
                    </div>
                    
                    {/* Detalhes do Nó */}
                    <div className="text-center mt-5">
                      <h4 className="text-white font-semibold text-base mb-1">Transação não aprovada</h4>
                      <div className="inline-flex px-2 py-0.5 bg-jockepay-danger/20 text-jockepay-danger text-xs rounded-full">
                        Fundos insuficientes
                      </div>
                    </div>
                  </div>
                  
                  {/* Seta de conexão (mobile) */}
                  <div className="md:hidden flex justify-center my-6">
                    <ArrowDownRight size={24} className="text-white/40" />
                  </div>
                </div>
                
                {/* Node 4: Fallback - Route Change */}
                <div className="flex flex-col items-center relative z-10 group">
                  <div className="flex flex-col items-center transition-all duration-300 group-hover:scale-[1.03]">
                    {/* Ícone de Nó */}
                    <div className="relative w-24 h-24 rounded-xl flex flex-col items-center justify-center bg-gradient-to-br from-jockepay-warning/30 to-jockepay-warning/10 backdrop-blur-md border border-jockepay-warning/30 shadow-[0_0_15px_rgba(245,191,79,0.1)] mb-4">
                      <RotateCw size={32} className="text-jockepay-warning animate-spin-slow mb-1" strokeWidth={1.25} />
                      <div className="text-white/80 text-xs">Sistema</div>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-jockepay-warning/20 backdrop-blur-md rounded-full border border-jockepay-warning/30 text-xs text-jockepay-warning font-medium flex items-center gap-1">
                        <AlertCircle size={10} />
                        Fallback
                      </div>
                    </div>
                    
                    {/* Detalhes do Nó */}
                    <div className="text-center mt-5">
                      <h4 className="text-white font-semibold text-base mb-1">Redirecionamento</h4>
                      <div className="flex items-center justify-center gap-1 text-jockepay-warning text-xs">
                        <Clock size={12} />
                        <span>00:00:13s</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Seta de conexão (mobile) */}
                  <div className="md:hidden flex justify-center my-6">
                    <div className="relative">
                      <ArrowDownRight size={24} className="text-jockepay-success" />
                      <div className="absolute top-8 left-0">
                        <span className="text-xs text-jockepay-success">Rota 2</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Node 5: Second Attempt - Stripe */}
                <div className="flex flex-col items-center relative z-10 group">
                  <div className="flex flex-col items-center transition-all duration-300 group-hover:scale-[1.03]">
                    {/* Ícone de Nó */}
                    <div className="relative w-24 h-24 rounded-xl flex flex-col items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-jockepay-success/30 shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-4">
                      <div className="text-white font-semibold text-lg mb-1">Stripe</div>
                      <div className="text-white/60 text-xs">Tentativa 2</div>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-jockepay-success/20 backdrop-blur-md rounded-full border border-jockepay-success/30 text-xs text-jockepay-success font-medium flex items-center gap-1">
                        <CheckCircle size={10} />
                        Aprovado
                      </div>
                    </div>
                    
                    {/* Detalhes do Nó */}
                    <div className="text-center mt-5">
                      <h4 className="text-white font-semibold text-base mb-1">Pagamento concluído</h4>
                      <div className="flex items-center justify-center gap-1 text-jockepay-success text-xs">
                        <Clock size={12} />
                        <span>00:00:25s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Conexões do fluxo (apenas desktop) */}
              <div className="hidden md:block">
                {/* Conexão 1: Checkout -> Jockepay */}
                <div className="absolute top-1/2 left-[10%] w-[20%] h-1 z-5 overflow-hidden -translate-y-1/2 flex items-center justify-center">
                  <div className="h-full w-full bg-gradient-to-r from-white/20 to-jockepay-neon/70 rounded-full animate-flow-right"></div>
                </div>
                
                {/* Conexão 2: Rota 1 - Jockepay -> PagBank (recusado) */}
                <div className="absolute top-[30%] left-[30%] w-[20%] h-1 z-5 overflow-hidden rotate-12 flex items-center justify-center">
                  <div className="h-full w-full bg-gradient-to-r from-jockepay-neon/70 to-jockepay-danger/70 rounded-full animate-flow-right" style={{animationDelay: '0.5s'}}></div>
                </div>
                <div className="absolute top-[27%] left-[38%] text-xs text-jockepay-danger">Rota 1</div>
                
                {/* Conexão 3: PagBank -> Fallback */}
                <div className="absolute top-1/2 left-[50%] w-[20%] h-1 z-5 overflow-hidden -translate-y-1/2 flex items-center justify-center">
                  <div className="h-full w-full bg-gradient-to-r from-jockepay-danger/70 to-jockepay-warning/70 rounded-full animate-flow-right" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Conexão 4: Rota 2 - Jockepay -> Fallback -> Stripe (aprovado) */}
                <div className="absolute top-[70%] left-[30%] w-[20%] h-1 z-5 overflow-hidden -rotate-12 flex items-center justify-center">
                  <div className="h-full w-full bg-gradient-to-r from-jockepay-neon/70 to-jockepay-warning/70 rounded-full animate-flow-right" style={{animationDelay: '1.5s'}}></div>
                </div>
                <div className="absolute top-[73%] left-[38%] text-xs text-jockepay-warning">Rota 2</div>
                
                {/* Conexão 5: Fallback -> Stripe */}
                <div className="absolute top-[70%] left-[70%] w-[20%] h-1 z-5 overflow-hidden -translate-y-1/2 flex items-center justify-center">
                  <div className="h-full w-full bg-gradient-to-r from-jockepay-warning/70 to-jockepay-success/70 rounded-full animate-flow-right" style={{animationDelay: '2s'}}></div>
                </div>
                
                {/* Pontos de conexão */}
                <div className="absolute top-1/2 left-[10%] w-3 h-3 rounded-full bg-white/50 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-[30%] w-3 h-3 rounded-full bg-jockepay-neon/70 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-[50%] w-3 h-3 rounded-full bg-jockepay-danger/70 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-[70%] w-3 h-3 rounded-full bg-jockepay-warning/70 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-[90%] w-4 h-4 rounded-full bg-jockepay-success/70 -translate-y-1/2 animate-pulse"></div>
              </div>
            </div>
            
            {/* Painéis de Transação - Melhorados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {/* Painel da Esquerda: Detalhes de Checkout */}
              <div className="backdrop-blur-lg bg-black/50 rounded-xl border border-white/20 p-6 hover:shadow-lg hover:shadow-jockepay-blue/20 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-jockepay-blue/30 to-jockepay-neon/20 border border-white/30">
                      <Wallet size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Detalhes do Checkout</h4>
                      <span className="text-sm text-white/80">ID: #89721458</span>
                    </div>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full backdrop-blur-md bg-jockepay-blue/30 text-jockepay-blue border border-jockepay-blue/50 group-hover:bg-jockepay-blue/40 transition-colors">R$ 327,90</span>
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
                  
                  <div className="pt-4 border-t border-white/20">
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
              
              {/* Painel da Direita: Decisão Inteligente */}
              <div className="backdrop-blur-lg bg-black/50 rounded-xl border border-white/20 p-6 hover:shadow-lg hover:shadow-jockepay-neon/20 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-jockepay-neon/30 to-jockepay-blue/20 border border-jockepay-neon/30 group-hover:shadow-[0_0_15px_rgba(0,242,234,0.15)] transition-all">
                      <span className="text-jockepay-neon font-bold text-xs">JK</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Decisão Inteligente</h4>
                      <span className="text-sm text-white/80">Tempo de processamento: 1.2s</span>
                    </div>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full backdrop-blur-md bg-jockepay-success/20 text-jockepay-success border border-jockepay-success/40 group-hover:bg-jockepay-success/30 transition-colors">Concluído</span>
                </div>
                
                <div className="space-y-5">
                  {/* PagBank - Tentativa Falha */}
                  <div className="flex items-center gap-4 p-4 backdrop-blur-md bg-gradient-to-r from-jockepay-danger/20 to-jockepay-danger/5 border border-jockepay-danger/30 rounded-xl">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-jockepay-danger/20 border border-jockepay-danger/40">
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
                  
                  {/* Linha de Conexão Animada */}
                  <div className="relative h-10 mx-4">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-jockepay-danger to-jockepay-success"></div>
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 overflow-hidden">
                      <div className="w-full h-full bg-white animate-flow-down"></div>
                    </div>
                    <div className="absolute left-4 top-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-jockepay-warning bg-black/50 flex items-center justify-center">
                      <RotateCw size={10} className="text-jockepay-warning animate-spin" />
                    </div>
                  </div>
                  
                  {/* Stripe - Tentativa Bem-Sucedida */}
                  <div className="flex items-center gap-4 p-4 backdrop-blur-md bg-gradient-to-r from-jockepay-success/20 to-jockepay-success/5 border border-jockepay-success/30 rounded-xl">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-jockepay-success/20 border border-jockepay-success/40">
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
                  
                  {/* Estatísticas de Performance */}
                  <div className="pt-4 border-t border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">Taxa de aprovação geral</span>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-jockepay-neon">98.7%</span>
                        <span className="text-xs px-1.5 py-0.5 bg-jockepay-neon/20 rounded border border-jockepay-neon/40 text-jockepay-neon">+2.4%</span>
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
