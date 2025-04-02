
import React from 'react';
import { useIntersectionObserverAnimated } from '../../hooks/useIntersectionObserverAnimated';
import SectionHeader from './SectionHeader';
import FlowDashboard from './FlowDashboard';
import KeyBenefits from './KeyBenefits';

const DemoSection = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useIntersectionObserverAnimated({ threshold: 0.1 });
  
  return (
    <section 
      id="solutions" 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-28 md:py-36 relative overflow-hidden bg-gradient-to-b from-jockepay-dark to-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 jockepay-pattern-grid opacity-10 z-0"></div>
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-jockepay-blue/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-jockepay-neon/20 rounded-full blur-[100px]"></div>
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <SectionHeader isVisible={sectionIsVisible} />

        {/* Flow Dashboard */}
        <div className={`transition-all duration-700 delay-300 ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <FlowDashboard />
        </div>

        {/* Key Benefits */}
        <KeyBenefits />
      </div>
    </section>
  );
};

export default DemoSection;
