
import React, { useState } from 'react';
import { ArrowRight, BarChart3 } from 'lucide-react';

const SimulatorSection = () => {
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
    <section id="simulator" className="section-padding bg-white dark:bg-jockepay-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-jockepay-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-jockepay-neon/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simule seu potencial de ganho</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubra quanto sua empresa pode economizar e aumentar em receita ao implementar nossa solução de orquestração de pagamentos.
            </p>
          </div>
          
          <div className="bg-secondary/50 dark:bg-jockepay-dark/50 rounded-2xl p-6 md:p-8 border border-border shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Preencha os dados da sua operação</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="monthlyVolume" className="block mb-2 text-sm font-medium">
                      Volume mensal de transações (R$)
                    </label>
                    <input
                      type="text"
                      id="monthlyVolume"
                      name="monthlyVolume"
                      value={formData.monthlyVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="currentApprovalRate" className="block mb-2 text-sm font-medium">
                      Taxa de aprovação atual (%)
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
                      className="w-full h-2 bg-jockepay-blue/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>50%</span>
                      <span className="font-medium">{formData.currentApprovalRate}%</span>
                      <span>98%</span>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="pspCount" className="block mb-2 text-sm font-medium">
                      Número de PSPs adicionais desejados
                    </label>
                    <select
                      id="pspCount"
                      name="pspCount"
                      value={formData.pspCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background"
                    >
                      <option value="1">1 PSP adicional</option>
                      <option value="2">2 PSPs adicionais</option>
                      <option value="3">3+ PSPs adicionais</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Simular agora
                  </button>
                </form>
              </div>
              
              <div className="flex-1">
                {!showResults ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <BarChart3 size={64} className="mx-auto mb-4 opacity-40" />
                      <p>Preencha o formulário e clique em "Simular agora" para ver os resultados</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col">
                    <h3 className="text-xl font-semibold mb-6">Resultados da simulação</h3>
                    <div className="flex-1 space-y-6">
                      <div className="bg-jockepay-blue/5 dark:bg-jockepay-blue/10 p-4 rounded-lg border border-jockepay-blue/20">
                        <div className="text-sm text-muted-foreground mb-1">Aumento na taxa de aprovação</div>
                        <div className="text-2xl font-bold text-jockepay-blue">+{simulationResults.additionalApproval.toFixed(1)}%</div>
                      </div>
                      
                      <div className="bg-jockepay-blue/5 dark:bg-jockepay-blue/10 p-4 rounded-lg border border-jockepay-blue/20">
                        <div className="text-sm text-muted-foreground mb-1">Receita adicional mensal estimada</div>
                        <div className="text-2xl font-bold text-jockepay-blue">
                          {formatCurrency(simulationResults.additionalRevenue)}
                        </div>
                      </div>
                      
                      <div className="bg-jockepay-blue/5 dark:bg-jockepay-blue/10 p-4 rounded-lg border border-jockepay-blue/20">
                        <div className="text-sm text-muted-foreground mb-1">Receita adicional anual estimada</div>
                        <div className="text-2xl font-bold text-jockepay-blue">
                          {formatCurrency(simulationResults.annualRevenue)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 mt-auto">
                      <a href="#contact" className="btn-primary w-full flex items-center justify-center gap-2">
                        Falar com um especialista <ArrowRight size={16} />
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
