import React from 'react';
import './harboLogo.css';

const HarboLogo: React.FC = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <div className="logo-part part1" />
        <div className="logo-part part2" />
        <div className="logo-part part3">
          <div className="gold-square" />
        </div>
      </div>
      {/* <div className="bank-name">HARBORFRONT BANK</div> */}
    </div>
  );
};

export default HarboLogo;