import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { imageData } from "../Data/Carousel";

function Carousal() {
  return (
    <div className="carousal_container">
      <div className="car">
        <Carousel infiniteLoop showThumbs={false}>
          {imageData.map((car) => (
            <div>
              <img src={car.src} alt={car.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Carousal;
