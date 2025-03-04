import React from 'react';
import './harboLogo.css';

type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface HarboLogoProps {
  size?: LogoSize;
}

const sizeStyles = {
  sm: {
    container: 'text-xs gap-0.5',
    text: 'text-xs',
    logoHeight: 'h-2',
  },
  md: {
    container: 'text-sm gap-1',
    text: 'text-sm',
    logoHeight: 'h-5',
  },
  lg: {
    container: 'text-base gap-1.5',
    text: 'text-base',
    logoHeight: 'h-6',
  },
  xl: {
    container: 'text-lg gap-2',
    text: 'text-lg',
    logoHeight: 'h-7',
  },
};

const HarboLogo: React.FC<HarboLogoProps> = ({ size = 'sm' }) => {
  const styles = sizeStyles[size];

  return (
    <div className={`flex ${styles}`}>
      <div className={`text-primary ${styles.text}`}>
        HARBORFRONT        
      </div>

      <div className={`logo-container ${styles.logoHeight} mt-1`}>
        <div className="logo-part part1" />
        <div className="logo-part part2" />
        <div className="logo-part part3">
          <div className="gold-square" />
        </div>
      </div>
    </div>
  );
};

export default HarboLogo;
