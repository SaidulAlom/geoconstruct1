import React from "react";
import "./card.css"; // Ensure the card-specific CSS is imported

// Import your images
import demoImage1 from "../../../../assets/img1.jpg"; // Demographical image
import demoImage2 from "../../../../assets/img2.jpg"; // Environmental image
import demoImage3 from "../../../../assets/img3.jpg"; // Geographical image
import demoImage4 from "../../../../assets/img4.jpg"; // Public amenities image

const Card = (props) => {
  let image;

  // Choose an image based on the title
  switch (props.title) {
    case "Demographical":
      image = demoImage1;
      break;
    case "Environmental":
      image = demoImage2;
      break;
    case "Geographical":
      image = demoImage3;
      break;
    case "Public Amenities":
      image = demoImage4;
      break;
    default:
      image = demoImage1; // Default image if title doesn't match
  }

  return (
    <div className="card-container">
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <img src={image} alt={`${props.title} visual`} className="card-image" />
      </div>
    </div>
  );
};

export default Card;
