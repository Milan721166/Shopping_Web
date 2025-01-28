import React, { useState } from "react";
import "./OfferSlide.css";

const images = [
  "/images/offer1.png",
  "/images/offer2.png",
  "/images/offer3.png",
];

const OfferSlide = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="offer-slide-container">
      <button className="prev" onClick={prevSlide}>‹</button>
      <div className="slider" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${current === index ? "active" : ""}`}
          >
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>›</button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default OfferSlide;
