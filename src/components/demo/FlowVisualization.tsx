
import React from 'react';
import { ShoppingCart, RotateCw, XCircle, ArrowDownRight, CheckCircle, Clock } from 'lucide-react';

const FlowVisualization = () => {
  return (
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
                <XCircle size={16} className="text-jockepay-danger" />
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
  );
};

export default FlowVisualization;
