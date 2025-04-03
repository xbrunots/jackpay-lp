import React, { useState } from 'react';
import { ArrowRight, BarChart3, TrendingUp, Wallet, PieChart } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';
import { Badge } from './ui/badge';
import { Button } from './ui/Button';

const SimulatorSection = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    monthlyVolume: '100000',
    currentApprovalRate: '85',
    pspCount: '1'
  });
  
  const [showResults, setShowResults] = useState(false);
  const [simulationResults, setSimulationResults] = useState({
    additionalApproval: 0,
    additionalRevenue: 0,
    annualRevenue: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple simulation calculation
    const volume = parseFloat(formData.monthlyVolume);
    const currentApproval = parseFloat(formData.currentApprovalRate) / 100;
    const pspCount = parseInt(formData.pspCount);
    
    // Estimated improvement based on PSP count (simplified model)
    let improvementRate = 0;
    if (pspCount === 1) {
      improvementRate = 0.03; // 3% improvement with one additional PSP
    } else if (pspCount === 2) {
      improvementRate = 0.05; // 5% with two additional PSPs
    } else {
      improvementRate = 0.07; // 7% with three or more PSPs
    }
    
    // Ensure we don't exceed 100% approval
    const newApprovalRate = Math.min(currentApproval + improvementRate, 0.99);
    const additionalApproval = newApprovalRate - currentApproval;
    
    // Calculate additional revenue
    const additionalRevenue = volume * additionalApproval;
    const annualRevenue = additionalRevenue * 12;
    
    setSimulationResults({
      additionalApproval: additionalApproval * 100, // Convert to percentage
      additionalRevenue,
      annualRevenue
    });
    
    setShowResults(true);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <section 
      id="simulator" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-32 md:py-40 bg-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.05)_0%,transparent_70%)]"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <Badge color="green">Simulador</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight text-white">
              Simule seu potencial de ganho
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Descubra quanto sua empresa pode economizar e aumentar em receita ao implementar nossa solução de orquestração.
            </p>
          </div>

          <div className={`backdrop-blur-md bg-black/40 rounded-2xl border border-white/10 shadow-xl overflow-hidden transition-all duration-700 delay-300 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 border-r border-white/10">
                <h3 className="text-xl font-medium mb-6 text-white">Dados da sua operação</h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="monthlyVolume" className="block mb-2 text-sm font-medium text-white">
                      Volume mensal de transações (R$)
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white">R$</span>
                      <input
                        type="text"
                        id="monthlyVolume"
                        name="monthlyVolume"
                        value={formData.monthlyVolume}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl text-lg text-white placeholder:text-white/50 focus:border-jockepay-green/50 focus:ring focus:ring-jockepay-green/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="currentApprovalRate" className="block mb-2 text-sm font-medium text-white flex justify-between">
                      <span>Taxa de aprovação atual</span>
                      <span className="text-jockepay-green font-medium">{formData.currentApprovalRate}%</span>
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        id="currentApprovalRate"
                        name="currentApprovalRate"
                        min="50"
                        max="98"
                        step="1"
                        value={formData.currentApprovalRate}
                        onChange={handleChange}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-jockepay-green [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-black/20 [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:active:scale-95"
                      />
                      <div className="absolute inset-0 pointer-events-none">
                        <div 
                          className="absolute h-2 bg-jockepay-green rounded-full"
                          style={{ width: `${((parseInt(formData.currentApprovalRate) - 50) / (98 - 50)) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-white/70 mt-2">
                      <span>50%</span>
                      <span>98%</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pspCount" className="block mb-2 text-sm font-medium text-white">
                      Número de PSPs adicionais
                    </label>
                    <div className="relative">
                      <select
                        id="pspCount"
                        name="pspCount"
                        value={formData.pspCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl text-lg appearance-none text-white focus:border-jockepay-green/50 focus:ring focus:ring-jockepay-green/20 transition-all"
                      >
                        <option value="1">1 PSP adicional</option>
                        <option value="2">2 PSPs adicionais</option>
                        <option value="3">3+ PSPs adicionais</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-white/70">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                    
                  <Button
                    onClick={handleSubmit}
                    color="green"
                    showArrow
                    className="w-full"
                  >
                    Simular
                  </Button>
                </form>
              </div>

              <div className="flex-1 p-8 bg-black/20">
                {!showResults ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 strokeWidth={1.5} size={64} className="mx-auto mb-4 text-white/40" />
                      <p className="text-lg text-white font-medium">Aguardando informações</p>
                      <p className="text-sm mt-2 text-white">Preencha o formulário para simular os resultados</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-jockepay-green/30 text-white text-sm border border-jockepay-green/50">
                        <span className="w-2 h-2 bg-jockepay-green rounded-full mr-2 animate-status-pulse"></span>
                        Simulação concluída
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-8 text-white">Resultados da simulação</h3>
                    
                    <div className="backdrop-blur-md bg-black/60 rounded-xl p-6 border border-white/20 mb-8 animate-appear">
                      <div className="text-center">
                        <p className="text-sm text-white mb-2">Resultado estimado com a JockPay</p>
                        <div className="flex items-center justify-center gap-2 text-2xl font-semibold text-white mb-1">
                          <TrendingUp strokeWidth={1.5} size={24} className="text-white" />
                          +{simulationResults.additionalApproval.toFixed(1)}% de aprovação
                        </div>
                        <div className="text-lg font-medium text-white">
                          {formatCurrency(simulationResults.additionalRevenue)} adicionais por mês
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <div className="backdrop-blur-sm bg-black/60 p-4 rounded-xl border border-white/20 flex items-center hover:bg-black/70 transition-all">
                        <div className="p-2 rounded-lg bg-jockepay-green/30 text-white mr-4">
                          <TrendingUp strokeWidth={1.5} size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white">Aumento na taxa de aprovação</div>
                          <div className="text-xl font-semibold text-white">+{simulationResults.additionalApproval.toFixed(1)}%</div>
                        </div>
                      </div>

                      <div className="backdrop-blur-sm bg-black/60 p-4 rounded-xl border border-white/20 flex items-center hover:bg-black/70 transition-all">
                        <div className="p-2 rounded-lg bg-jockepay-green/30 text-white mr-4">
                          <Wallet strokeWidth={1.5} size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white">Receita adicional mensal</div>
                          <div className="text-xl font-semibold text-white">
                            {formatCurrency(simulationResults.additionalRevenue)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="backdrop-blur-sm bg-black/60 p-4 rounded-xl border border-white/20 flex items-center hover:bg-black/70 transition-all">
                        <div className="p-2 rounded-lg bg-jockepay-green/30 text-white mr-4">
                          <PieChart strokeWidth={1.5} size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white">Receita adicional anual</div>
                          <div className="text-xl font-semibold text-white">
                            {formatCurrency(simulationResults.annualRevenue)}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-8 mt-auto">
                      <a 
                        href="#contact" 
                        className="w-full py-4 px-6 backdrop-blur-lg bg-black/50 rounded-xl border border-white/30 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-black/60 hover:border-white/40 group"
                      >
                        Falar com um especialista e receber plano personalizado <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
