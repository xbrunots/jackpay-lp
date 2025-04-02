
import React, { useState } from 'react';
import { ArrowRight, BarChart3, TrendingUp, Wallet, PieChart } from 'lucide-react';
import { useIntersectionObserverAnimated } from '../hooks/useIntersectionObserverAnimated';

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
      className="py-32 md:py-40 bg-jockepay-dark relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-10 z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-jockepay-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-jockepay-neon/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="backdrop-blur-sm bg-jockepay-neon/10 dark:bg-jockepay-neon/15 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-neon border border-jockepay-neon/20">Simulador</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight text-white">Simule seu potencial de ganho</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Descubra quanto sua empresa pode economizar e aumentar em receita ao implementar nossa solução de orquestração.
            </p>
          </div>
          
          <div className={`backdrop-blur-md bg-black/30 rounded-2xl border border-white/20 shadow-xl overflow-hidden transition-all duration-700 delay-300 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 border-r border-white/20">
                <h3 className="text-xl font-medium mb-6 text-white">Dados da sua operação</h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="monthlyVolume" className="block mb-2 text-sm font-medium text-white/90">
                      Volume mensal de transações (R$)
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/60 mr-1">R$</span>
                      <input
                        type="text"
                        id="monthlyVolume"
                        name="monthlyVolume"
                        value={formData.monthlyVolume}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-lg text-white focus:border-jockepay-neon/50 focus:ring focus:ring-jockepay-neon/20 transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="currentApprovalRate" className="block mb-2 text-sm font-medium text-white/90 flex justify-between">
                      <span>Taxa de aprovação atual</span>
                      <span className="text-jockepay-neon font-medium">{formData.currentApprovalRate}%</span>
                    </label>
                    <input
                      type="range"
                      id="currentApprovalRate"
                      name="currentApprovalRate"
                      min="50"
                      max="98"
                      step="1"
                      value={formData.currentApprovalRate}
                      onChange={handleChange}
                      className="w-full h-2 appearance-none rounded-lg bg-jockepay-neon/30 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-jockepay-neon dark:[&::-webkit-slider-thumb]:bg-jockepay-neon cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-white/60 mt-2">
                      <span>50%</span>
                      <span>98%</span>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="pspCount" className="block mb-2 text-sm font-medium text-white/90">
                      Número de PSPs adicionais
                    </label>
                    <div className="relative">
                      <select
                        id="pspCount"
                        name="pspCount"
                        value={formData.pspCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-lg appearance-none text-white focus:border-jockepay-neon/50 focus:ring focus:ring-jockepay-neon/20 transition-all"
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
                  
                  <button 
                    type="submit" 
                    className="w-full py-4 px-6 bg-gradient-to-r from-jockepay-blue to-jockepay-neon text-white font-medium rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-jockepay-neon/20 group"
                  >
                    <span className="relative flex items-center gap-2">
                      Simular agora <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </form>
              </div>
              
              <div className="flex-1 p-8 bg-black/20">
                {!showResults ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <BarChart3 strokeWidth={1.5} size={64} className="mx-auto mb-4 opacity-40" />
                      <p className="text-lg">Aguardando informações</p>
                      <p className="text-sm mt-2">Preencha o formulário para simular os resultados</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-jockepay-success/30 text-jockepay-success text-sm border border-jockepay-success/30">
                        <span className="w-2 h-2 bg-jockepay-success rounded-full mr-2 animate-status-pulse"></span>
                        Simulação concluída
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-8 text-white">Resultados da simulação</h3>
                    
                    {/* Results Summary Box - New prominent box with key metrics */}
                    <div className="backdrop-blur-md bg-gradient-to-br from-jockepay-blue/20 to-jockepay-neon/10 rounded-xl p-6 border border-white/20 mb-8 animate-appear">
                      <div className="text-center">
                        <p className="text-sm text-white/70 mb-2">Resultado estimado com a Jockepay</p>
                        <div className="flex items-center justify-center gap-2 text-2xl font-semibold text-jockepay-neon mb-1">
                          <TrendingUp strokeWidth={1.5} size={24} />
                          +{simulationResults.additionalApproval.toFixed(1)}% de aprovação
                        </div>
                        <div className="text-lg font-medium text-white">
                          {formatCurrency(simulationResults.additionalRevenue)} adicionais por mês
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20 flex items-center hover:bg-white/15 transition-all">
                        <div className="p-2 rounded-lg bg-jockepay-blue/20 text-jockepay-blue dark:text-jockepay-neon mr-4">
                          <TrendingUp strokeWidth={1.5} size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white/70">Aumento na taxa de aprovação</div>
                          <div className="text-xl font-semibold text-jockepay-neon">+{simulationResults.additionalApproval.toFixed(1)}%</div>
                        </div>
                      </div>
                      
                      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20 flex items-center hover:bg-white/15 transition-all">
                        <div className="p-2 rounded-lg bg-jockepay-blue/20 text-jockepay-blue dark:text-jockepay-neon mr-4">
                          <Wallet strokeWidth={1.5} size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white/70">Receita adicional mensal</div>
                          <div className="text-xl font-semibold text-jockepay-neon">
                            {formatCurrency(simulationResults.additionalRevenue)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20 flex items-center hover:bg-white/15 transition-all">
                        <div className="p-2 rounded-lg bg-jockepay-blue/20 text-jockepay-blue dark:text-jockepay-neon mr-4">
                          <PieChart strokeWidth={1.5} size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white/70">Receita adicional anual</div>
                          <div className="text-xl font-semibold text-jockepay-neon">
                            {formatCurrency(simulationResults.annualRevenue)}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-8 mt-auto">
                      <a 
                        href="#contact" 
                        className="w-full py-4 px-6 backdrop-blur-sm bg-white/10 border border-white/20 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/15 group"
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
