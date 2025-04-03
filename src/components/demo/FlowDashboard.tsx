import React from 'react';
import FlowVisualization from './FlowVisualization';
import PerformanceMetrics from './PerformanceMetrics';

const FlowDashboard = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Container Principal */}
      <div className="bg-black/60 backdrop-blur-lg rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-hidden">
        {/* Header do Dashboard */}
        <div className="bg-gradient-to-r from-black/90 to-black/70 p-4 sm:p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-jockepay-danger"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-warning"></div>
              <div className="w-3 h-3 rounded-full bg-jockepay-success"></div>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-white">Jockepay Flow Dashboard</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-jockepay-success/20 text-jockepay-success border border-jockepay-success/30">
              <span className="w-1.5 h-1.5 bg-jockepay-success rounded-full mr-1.5 animate-pulse"></span>
              Ao vivo
            </span>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Fluxo de Pagamento */}
            <div className="lg:col-span-1">
              <FlowVisualization />
            </div>
            
            {/* Métricas de Performance */}
            <div className="lg:col-span-1">
              <PerformanceMetrics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDashboard;
