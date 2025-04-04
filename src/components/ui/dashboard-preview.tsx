import React from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

interface DashboardPreviewProps {
  className?: string;
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ className = '' }) => {
  return (
    <div className={`bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">JockPay Dashboard</h3>
          <div className="flex items-center gap-2" style={{width: "85px"}}>
            <div className="w-2 h-2 bg-jockepay-success rounded-full animate-pulse"></div>
            <span className="text-sm text-jockepay-success" >Ao vivo</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-sm text-white/60 mb-1">Transações</p>
            <p className="text-2xl font-semibold text-white">1,234</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-sm text-white/60 mb-1">Aprovação</p>
            <p className="text-2xl font-semibold text-jockepay-success">97.4%</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-sm text-white/60 mb-1">Performance</p>
            <p className="text-2xl font-semibold text-jockepay-warning">8.5%</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-sm text-white/60 mb-1">Segurança</p>
            <p className="text-2xl font-semibold text-jockepay-success">100%</p>
          </div>
        </div>

        {/* Transaction Flow */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-medium text-white">Fluxo de Transações</h4>
            <span className="text-sm text-white/60">Em tempo real</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-jockepay-blue" />
                <span className="text-sm text-white">TX</span>
              </div>
              <span className="text-sm text-white/60">Iniciando...</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-jockepay-success" />
                <span className="text-sm text-white">PSP 1</span>
              </div>
              <span className="text-sm text-jockepay-success">Aprovado</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-jockepay-danger" />
                <span className="text-sm text-white">PSP 2</span>
              </div>
              <span className="text-sm text-jockepay-danger">Recusado</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-jockepay-warning" />
                <span className="text-sm text-white">PSP 3</span>
              </div>
              <span className="text-sm text-jockepay-warning">Em análise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview; 