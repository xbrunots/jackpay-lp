
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ContextualLinkProps {
  children: ReactNode;
  href: string;
  icon?: ReactNode;
  className?: string;
  showArrow?: boolean;
}

const ContextualLink: React.FC<ContextualLinkProps> = ({
  children,
  href,
  icon,
  className = '',
  showArrow = true
}) => {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 text-jockepay-blue dark:text-jockepay-neon font-medium transition-all duration-300 focus-visible ${className}`}
    >
      {icon && <span className="transition-transform group-hover:scale-110">{icon}</span>}
      <span className="border-b border-transparent group-hover:border-current transition-all">
        {children}
      </span>
      {showArrow && (
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </motion.span>
      )}
    </a>
  );
};

export default ContextualLink;
