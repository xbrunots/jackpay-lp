
import React from 'react';
import { ArrowRight, RotateCw, CheckCircle } from 'lucide-react';

const KeyBenefits = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
      {/* Benefit 1 */}
      <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-jockepay-blue/30 hover:shadow-lg hover:shadow-jockepay-blue/10 transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-jockepay-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <ArrowRight size={20} className="text-jockepay-blue" />
        </div>
        <h3 className="text-white font-medium text-lg mb-2">Processamento Rápido</h3>
        <p className="text-white/70 text-sm">Transações concluídas em milissegundos com decisões em tempo real.</p>
      </div>
      
      {/* Benefit 2 */}
      <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-jockepay-neon/30 hover:shadow-lg hover:shadow-jockepay-neon/10 transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-jockepay-neon/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <RotateCw size={20} className="text-jockepay-neon" />
        </div>
        <h3 className="text-white font-medium text-lg mb-2">Rotas Adaptativas</h3>
        <p className="text-white/70 text-sm">Sistema inteligente que aprende e otimiza rotas de pagamento.</p>
      </div>
      
      {/* Benefit 3 */}
      <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-jockepay-success/30 hover:shadow-lg hover:shadow-jockepay-success/10 transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-jockepay-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={20} className="text-jockepay-success" />
        </div>
        <h3 className="text-white font-medium text-lg mb-2">Maior Conversão</h3>
        <p className="text-white/70 text-sm">Aumento médio de 8.5% na taxa de aprovação com recuperação automática.</p>
      </div>
    </div>
  );
};

export default KeyBenefits;
