import React from "react";

function ProductCard({ image, title }) {
  return (
    <div className="display">
      <img src={image} alt="display" className="displayImage" />
      <h3 className="displayTitle">{title}</h3>
    </div>
  );
}

export default ProductCard;
