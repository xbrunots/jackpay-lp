
import React from 'react';
import { motion } from 'framer-motion';

type ConnectorType = 'wave' | 'arrow' | 'dots' | 'line';

interface SectionConnectorProps {
  type?: ConnectorType;
  color?: string;
  className?: string;
}

const SectionConnector = ({
  type = 'wave',
  color = 'currentColor',
  className = '',
}: SectionConnectorProps) => {
  const renderConnector = () => {
    switch (type) {
      case 'wave':
        return (
          <div className={`w-full h-24 overflow-hidden ${className}`}>
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
              fill={color}
            >
              <path 
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                className="opacity-20"
              />
            </svg>
          </div>
        );
      
      case 'arrow':
        return (
          <div className={`flex justify-center my-6 ${className}`}>
            <motion.div
              initial={{ y: -5, opacity: 0.5 }}
              animate={{ y: 5, opacity: 1 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke={color} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </motion.div>
          </div>
        );
      
      case 'dots':
        return (
          <div className={`flex justify-center space-x-2 my-4 ${className}`}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-current"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2
                }}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        );
        
      case 'line':
        return (
          <div className={`flex justify-center my-8 ${className}`}>
            <motion.div 
              className="w-16 h-0.5 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "5%" }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              style={{ backgroundColor: color }}
            />
          </div>
        );
        
      default:
        return null;
    }
  };

  return renderConnector();
};

export default SectionConnector;
