
import React from 'react';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
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

const PerformanceMetrics = () => {
  return (
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
  );
};

export default PerformanceMetrics;
