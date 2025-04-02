
import React from 'react';
import FlowVisualization from './FlowVisualization';
import PerformanceMetrics from './PerformanceMetrics';

const FlowDashboard = () => {
  return (
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
            <FlowVisualization />
            
            {/* Right: Performance Metrics */}
            <PerformanceMetrics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDashboard;
