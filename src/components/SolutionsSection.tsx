import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../Badge';

const SolutionsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const solutions = [
    { id: 1, icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0L12 12.75l-2.25 2.25m7.5-3.75h-3.375c-1.091 0-2.018.074-2.884.225-1.48.15-3.3.421-4.72 1.284-6.24 1.05 1.56.84 3.042 1.26 4.56 1.02 3.36-1.26 4.8-3.6 7.2-6 9.6 1.2 1.2 3.6 1.2 4.8 0 2.4 2.4 2.4 6 0 8.4-2.4 2.4-2.4 2.4-6 0-8.4z" />
    </svg>, title: 'Solução 1', description: 'Descrição da Solução 1' },
    { id: 2, icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0L12 12.75l-2.25 2.25m7.5-3.75h-3.375c-1.091 0-2.018.074-2.884.225-1.48.15-3.3.421-4.72 1.284-6.24 1.05 1.56.84 3.042 1.26 4.56 1.02 3.36-1.26 4.8-3.6 7.2-6 9.6 1.2 1.2 3.6 1.2 4.8 0 2.4 2.4 2.4 6 0 8.4-2.4 2.4-2.4 2.4-6 0-8.4z" />
    </svg>, title: 'Solução 2', description: 'Descrição da Solução 2' },
    { id: 3, icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0L12 12.75l-2.25 2.25m7.5-3.75h-3.375c-1.091 0-2.018.074-2.884.225-1.48.15-3.3.421-4.72 1.284-6.24 1.05 1.56.84 3.042 1.26 4.56 1.02 3.36-1.26 4.8-3.6 7.2-6 9.6 1.2 1.2 3.6 1.2 4.8 0 2.4 2.4 2.4 6 0 8.4-2.4 2.4-2.4 2.4-6 0-8.4z" />
    </svg>, title: 'Solução 3', description: 'Descrição da Solução 3' },
  ];

  return (
    <section 
      id="solutions" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="relative min-h-screen py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-b from-black via-black/98 to-black/95"
      aria-label="Soluções"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.05)_0%,transparent_70%)] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,234,0.02)_0%,transparent_70%)] blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Text content */}
        <div className="relative z-10">
          <div className="text-center mb-32 sm:mb-40 md:mb-48 lg:mb-56 max-w-4xl mx-auto">
            <Badge color="green">Soluções</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-6 sm:mt-8 mb-6 sm:mb-8">
              Soluções completas para seu negócio
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Oferecemos um conjunto completo de soluções para otimizar seus pagamentos e impulsionar seu negócio.
            </p>
          </div>
        </div>

        {/* Solutions grid */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/10 hover:border-jockepay-green/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-jockepay-green/10 flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-400">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection; 