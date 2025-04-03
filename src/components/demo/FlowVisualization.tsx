import React, { memo } from 'react';
import { ShoppingCart, RotateCw, XCircle, ArrowDownRight, CheckCircle2, BarChart2, TrendingUp, DollarSign, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const FlowVisualization: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header com título */}
      <div className="flex items-center justify-between">
        <h3 className="text-white text-2xl font-semibold">Fluxo de Pagamento</h3>
      </div>

      <div className="relative">
        {/* Vertical Connection Line */}
        <motion.div 
          className="absolute left-6 top-10 w-1 h-[calc(100%-40px)] bg-gradient-to-b from-jockepay-blue via-jockepay-neon to-jockepay-success"
          initial={{ height: 0 }}
          animate={{ height: 'calc(100% - 40px)' }}
          transition={{ duration: 1 }}
          aria-hidden="true"
        />
        
        {/* Flow Cards */}
        <div 
          className="flow-steps space-y-6"
          role="list"
          aria-label="Etapas do fluxo de pagamento"
        >
          {/* Step 1: Checkout */}
          <motion.div 
            className="relative pl-16 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            role="listitem"
          >
            <div 
              className="absolute left-0 top-0 w-12 h-12 rounded-full bg-jockepay-blue border-4 border-black flex items-center justify-center z-10 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <ShoppingCart size={20} className="text-white" />
            </div>
            <div className="bg-black/40 backdrop-blur-md rounded-xl border border-jockepay-blue/30 p-6 hover:border-jockepay-blue/50 transition-all group-hover:shadow-lg group-hover:shadow-jockepay-blue/20">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white text-lg">Checkout</h4>
                <span className="text-xs text-jockepay-blue bg-jockepay-blue/10 px-2 py-1 rounded-full">00:00s</span>
              </div>
              <p className="text-sm text-white/70 mb-4">Cliente finaliza a compra de R$ 327,50</p>
              <div className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full w-12 bg-jockepay-blue rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Step 2: JockPay Processing */}
          <motion.div 
            className="relative pl-16 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            role="listitem"
          >
            <div 
              className="absolute left-0 top-0 w-12 h-12 rounded-full bg-jockepay-neon border-4 border-black flex items-center justify-center z-10 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <span className="font-bold text-black text-sm">JK</span>
            </div>
            <div className="bg-black/40 backdrop-blur-md rounded-xl border border-jockepay-neon/30 p-6 hover:border-jockepay-neon/50 transition-all group-hover:shadow-lg group-hover:shadow-jockepay-neon/20">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white text-lg">Orquestração JockPay</h4>
                <span className="text-xs text-jockepay-neon bg-jockepay-neon/10 px-2 py-1 rounded-full">00:02s</span>
              </div>
              <p className="text-sm text-white/70 mb-4">Conecte-se a múltiplos provedores e serviços de pagamentos</p>
              <div className="flex justify-between items-center gap-3">
                <div className="bg-black/40 h-9 flex-1 rounded-lg border border-jockepay-neon/20 flex items-center px-3">
                  <span className="text-xs text-white/80">Analisando rotas...</span>
                </div>
                <div className="bg-black/40 w-9 h-9 flex items-center justify-center rounded-lg border border-jockepay-neon/20">
                  <RotateCw size={16} className="text-jockepay-neon animate-spin" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3: First Attempt - Failed */}
          <motion.div 
            className="relative pl-16 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            role="listitem"
          >
            <div 
              className="absolute left-0 top-0 w-12 h-12 rounded-full bg-jockepay-danger border-4 border-black flex items-center justify-center z-10 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <XCircle size={20} className="text-white" />
            </div>
            <div className="bg-black/40 backdrop-blur-md rounded-xl border border-jockepay-danger/30 p-6 hover:border-jockepay-danger/50 transition-all group-hover:shadow-lg group-hover:shadow-jockepay-danger/20">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white text-lg">Rota 1: PagBank</h4>
                <span className="text-xs text-jockepay-danger bg-jockepay-danger/10 px-2 py-1 rounded-full">Recusado</span>
              </div>
              <p className="text-sm text-white/70 mb-4">Primeira tentativa de pagamento não aprovada</p>
              <div className="bg-jockepay-danger/10 border border-jockepay-danger/20 rounded-lg p-3 flex items-center gap-2">
                <XCircle size={16} className="text-jockepay-danger" />
                <span className="text-xs text-jockepay-danger/90">Erro: Fundos insuficientes</span>
              </div>
            </div>
          </motion.div>

          {/* Step 4: Fallback System */}
          <motion.div 
            className="relative pl-16 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            role="listitem"
          >
            <div 
              className="absolute left-0 top-0 w-12 h-12 rounded-full bg-jockepay-warning border-4 border-black flex items-center justify-center z-10 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <ArrowDownRight size={20} className="text-white" />
            </div>
            <div className="bg-black/40 backdrop-blur-md rounded-xl border border-jockepay-warning/30 p-6 hover:border-jockepay-warning/50 transition-all group-hover:shadow-lg group-hover:shadow-jockepay-warning/20">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white text-lg">Sistema de Fallback</h4>
                <span className="text-xs text-jockepay-warning bg-jockepay-warning/10 px-2 py-1 rounded-full">00:13s</span>
              </div>
              <p className="text-sm text-white/70 mb-4">Redirecionamento automático para rota alternativa</p>
              <div className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-jockepay-warning to-jockepay-success animate-pulse-width"></div>
              </div>
            </div>
          </motion.div>

          {/* Step 5: Success */}
          <motion.div 
            className="relative pl-16 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            role="listitem"
          >
            <div 
              className="absolute left-0 top-0 w-12 h-12 rounded-full bg-jockepay-success border-4 border-black flex items-center justify-center z-10 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <CheckCircle2 size={20} className="text-white" />
            </div>
            <div className="bg-black/40 backdrop-blur-md rounded-xl border border-jockepay-success/30 p-6 hover:border-jockepay-success/50 transition-all group-hover:shadow-lg group-hover:shadow-jockepay-success/20">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white text-lg">Rota 2: Stripe</h4>
                <span className="text-xs text-jockepay-success bg-jockepay-success/10 px-2 py-1 rounded-full">Aprovado</span>
              </div>
              <p className="text-sm text-white/70 mb-4">Pagamento processado com sucesso</p>
              <div className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-jockepay-success rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default memo(FlowVisualization);
