
import React from 'react';

const DemoSection = () => {
  return (
    <section id="solutions" className="section-padding bg-secondary dark:bg-jockepay-dark/70">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Inteligência na orquestração de pagamentos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Visualize como nossa plataforma gerencia múltiplos PSPs, roteando transações e garantindo a maior taxa de aprovação possível.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-border">
          <div className="bg-jockepay-darkblue/90 p-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-white/70">Jockepay Dashboard</div>
          </div>
          
          <div className="bg-white dark:bg-jockepay-dark p-4 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="mb-6">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Transação recebida</div>
                  <div className="p-4 bg-jockepay-blue/5 rounded-lg border border-jockepay-blue/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">ID: 89721356</span>
                      <span className="text-sm px-2.5 py-1 rounded-full bg-jockepay-blue/20 text-jockepay-blue">R$ 157,90</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Cartão:</span> MasterCard
                      </div>
                      <div>
                        <span className="text-muted-foreground">Final:</span> 4519
                      </div>
                      <div>
                        <span className="text-muted-foreground">Cliente:</span> João S.
                      </div>
                      <div>
                        <span className="text-muted-foreground">Email:</span> j****@email.com
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 text-sm font-medium text-muted-foreground">Roteamento inteligente</div>
                <div className="space-y-4">
                  {/* Routing flow visualization */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-green-500 bg-green-100 dark:bg-green-900/20">
                      <span className="text-green-600 dark:text-green-400 font-medium">1</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-green-500"></div>
                    <div className="text-sm font-medium px-3 py-1.5 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      Stripe
                    </div>
                    <div className="ml-3 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs text-green-700 dark:text-green-400">
                      APROVADO
                    </div>
                  </div>
                  
                  <div className="flex items-center opacity-60">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 bg-gray-100 dark:bg-gray-800">
                      <span className="text-gray-500 font-medium">2</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-300"></div>
                    <div className="text-sm font-medium px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
                      Asaas
                    </div>
                    <div className="ml-3 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-400">
                      STANDBY
                    </div>
                  </div>
                  
                  <div className="flex items-center opacity-60">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 bg-gray-100 dark:bg-gray-800">
                      <span className="text-gray-500 font-medium">3</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-300"></div>
                    <div className="text-sm font-medium px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
                      Pagar.me
                    </div>
                    <div className="ml-3 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-400">
                      STANDBY
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-6">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Transação recebida</div>
                  <div className="p-4 bg-jockepay-blue/5 rounded-lg border border-jockepay-blue/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">ID: 89721357</span>
                      <span className="text-sm px-2.5 py-1 rounded-full bg-jockepay-blue/20 text-jockepay-blue">R$ 349,00</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Cartão:</span> Visa
                      </div>
                      <div>
                        <span className="text-muted-foreground">Final:</span> 2781
                      </div>
                      <div>
                        <span className="text-muted-foreground">Cliente:</span> Maria T.
                      </div>
                      <div>
                        <span className="text-muted-foreground">Email:</span> m****@email.com
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 text-sm font-medium text-muted-foreground">Fallback automático</div>
                <div className="space-y-4">
                  {/* Fallback flow visualization */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-red-500 bg-red-100 dark:bg-red-900/20">
                      <span className="text-red-600 dark:text-red-400 font-medium">1</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-red-500"></div>
                    <div className="text-sm font-medium px-3 py-1.5 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                      Asaas
                    </div>
                    <div className="ml-3 px-2 py-0.5 bg-red-100 dark:bg-red-900/30 rounded text-xs text-red-700 dark:text-red-400">
                      RECUSADO
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-green-500 bg-green-100 dark:bg-green-900/20">
                      <span className="text-green-600 dark:text-green-400 font-medium">2</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-green-500"></div>
                    <div className="text-sm font-medium px-3 py-1.5 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      PagBank
                    </div>
                    <div className="ml-3 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 rounded text-xs text-green-700 dark:text-green-400">
                      APROVADO
                    </div>
                  </div>
                  
                  <div className="flex items-center opacity-60">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 bg-gray-100 dark:bg-gray-800">
                      <span className="text-gray-500 font-medium">3</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-300"></div>
                    <div className="text-sm font-medium px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
                      Adyen
                    </div>
                    <div className="ml-3 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-400">
                      STANDBY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
