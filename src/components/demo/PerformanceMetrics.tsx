import React, { memo } from 'react';
import { ArrowRight, CheckCircle, XCircle, TrendingUp, DollarSign, CheckCircle2, BarChart2 } from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Dados de performance
const performanceData = [
  { name: 'Jan', stripe: 94.2, pagseguro: 87.7, pagbank: 85.1 },
  { name: 'Feb', stripe: 94.8, pagseguro: 88.3, pagbank: 83.5 },
  { name: 'Mar', stripe: 93.5, pagseguro: 89.1, pagbank: 84.2 },
  { name: 'Apr', stripe: 95.0, pagseguro: 88.2, pagbank: 86.0 },
  { name: 'May', stripe: 94.3, pagseguro: 89.0, pagbank: 85.7 },
  { name: 'Jun', stripe: 95.2, pagseguro: 89.7, pagbank: 86.3 }
];

// Dados de comparação
const comparisonData = {
  withoutJockepay: 88.9,
  withJockepay: 97.4,
  improvement: 8.5
};

const PerformanceMetrics: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-white text-2xl font-semibold">Métricas de Performance</h3>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-jockepay-success/20 to-jockepay-success/5 backdrop-blur-md rounded-xl border border-jockepay-success/30 p-6 text-center hover:border-jockepay-success/50 transition-all">
          <span className="text-4xl font-bold text-jockepay-success">97.4%</span>
          <p className="text-sm text-white/70 mt-2">Taxa de Aprovação</p>
        </div>

        <div className="bg-gradient-to-br from-jockepay-neon/20 to-jockepay-neon/5 backdrop-blur-md rounded-xl border border-jockepay-neon/30 p-6 text-center hover:border-jockepay-neon/50 transition-all">
          <span className="text-4xl font-bold text-jockepay-neon">8.5%</span>
          <p className="text-sm text-white/70 mt-2">Recuperação via Fallback</p>
        </div>
      </div>

      {/* Gráfico de Performance */}
      <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6" style={{
          display: "block"
        }}>
          <div className="flex items-center gap-3">
            <BarChart2 size={20} className="text-jockepay-neon" />
            <h4 className="text-white text-lg font-medium">Performance por PSP</h4>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-jockepay-success"></div>
              <span className="text-sm text-white/70">Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-jockepay-blue"></div>
              <span className="text-sm text-white/70">PagSeguro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-jockepay-danger"></div>
              <span className="text-sm text-white/70">PagBank</span>
            </div>
          </div>
        </div>

        <div className="aspect-video">
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
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={performanceData}
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
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
                  tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.5)' }}
                />
                <YAxis
                  domain={[80, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.5)' }}
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
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        {/* Métricas Detalhadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {/* Stripe */}
          <div className="flex flex-col p-4 bg-black/20 rounded-lg border border-jockepay-success/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-jockepay-success/20 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-jockepay-success" />
              </div>
              <div>
                <div className="text-base font-medium text-white">Stripe</div>
                <div className="text-sm text-white/60">Média: 94.5%</div>
              </div>
            </div>
            <div className="mt-auto">
              <div className="text-2xl font-bold text-jockepay-success">92%</div>
              <div className="text-sm text-white/60">Conversão atual</div>
            </div>
          </div>

          {/* PagSeguro */}
          <div className="flex flex-col p-4 bg-black/20 rounded-lg border border-jockepay-blue/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-jockepay-blue/20 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-jockepay-blue" />
              </div>
              <div>
                <div className="text-base font-medium text-white">PagSeguro</div>
                <div className="text-sm text-white/60">Média: 88.3%</div>
              </div>
            </div>
            <div className="mt-auto">
              <div className="text-2xl font-bold text-jockepay-blue">87.7%</div>
              <div className="text-sm text-white/60">Conversão atual</div>
            </div>
          </div>

          {/* PagBank */}
          <div className="flex flex-col p-4 bg-black/20 rounded-lg border border-jockepay-danger/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-jockepay-danger/20 flex items-center justify-center">
                <XCircle size={20} className="text-jockepay-danger" />
              </div>
              <div>
                <div className="text-base font-medium text-white">PagBank</div>
                <div className="text-sm text-white/60">Média: 85.1%</div>
              </div>
            </div>
            <div className="mt-auto">
              <div className="text-2xl font-bold text-jockepay-danger">58%</div>
              <div className="text-sm text-white/60">Conversão atual</div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparação de Desempenho */}
      <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-6">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp size={20} className="text-jockepay-neon" />
          <h4 className="text-white text-lg font-medium">Comparação de Desempenho</h4>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <XCircle size={20} className="text-white/70" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-white/70">Sem Jockepay</div>
              <div className="text-xl font-semibold text-white">{comparisonData.withoutJockepay}% aprovação</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-jockepay-neon/20 flex items-center justify-center">
              <CheckCircle size={20} className="text-jockepay-neon" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-white/70">Com Jockepay</div>
              <div className="text-xl font-semibold text-white">{comparisonData.withJockepay}% aprovação</div>
            </div>
          </div>

          {/* Resumo */}
          <div className="bg-jockepay-success/10 border border-jockepay-success/30 rounded-lg p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-jockepay-success/30 flex items-center justify-center">
              <ArrowRight size={24} className="text-jockepay-success" />
            </div>
            <div>
              <div className="text-base font-medium text-white">Aumento de {comparisonData.improvement}% na Taxa de Conversão</div>
              <p className="text-sm text-white/60 mt-1">Economia estimada: R$ 12,37 por transação</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PerformanceMetrics);
