// cards/card.js

import React from "react";
import "./card.css"; // Make sure you import the card-specific CSS here

const Card = ({ logo }) => {
  return (
    <div className="card">
      <img src={logo} alt="Client Logo" />
    </div>
  );
};

export default Card;
