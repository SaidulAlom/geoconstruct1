import React from 'react';
import './CTA.css'; // Import the external CSS file

const CTA = () => {
  return (
    <>
      <div className="cta-container">
        <div className="cta-text-container">
          <span className="cta-text">
            Know the details of your desired location in just a few clicks.
          </span>
        </div>
        <div className="cta-button-container">
          <button className="cta-button">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default CTA;
