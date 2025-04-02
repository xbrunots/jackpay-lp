
import React, { ReactNode } from 'react';

interface AccessibleIconProps {
  children: ReactNode;
  label: string;
}

const AccessibleIcon: React.FC<AccessibleIconProps> = ({ children, label }) => {
  return (
    <span role="img" aria-label={label} className="inline-flex">
      {children}
      <span className="sr-only">{label}</span>
    </span>
  );
};

export default AccessibleIcon;
