
import React from 'react';

interface SectionHeaderProps {
  isVisible: boolean;
}

const SectionHeader = ({ isVisible }: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="inline-block mb-4">
        <span className="backdrop-blur-sm bg-jockepay-neon/10 border border-jockepay-neon/30 px-4 py-1.5 rounded-full text-sm font-medium text-jockepay-neon">
          Inteligência
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 tracking-tight text-white">
        Orquestração <span className="text-jockepay-neon bg-clip-text text-transparent bg-gradient-to-r from-jockepay-blue to-jockepay-neon">inteligente</span> de pagamentos
      </h2>
      <p className="text-lg text-white/80 max-w-2xl mx-auto">
        Visualize como nosso sistema gerencia o fluxo de pagamentos com rotas inteligentes e fallbacks automáticos para maximizar sua taxa de aprovação.
      </p>
    </div>
  );
};

export default SectionHeader;
