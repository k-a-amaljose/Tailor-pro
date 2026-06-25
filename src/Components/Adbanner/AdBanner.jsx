import React, { useState, useEffect } from "react";
import "./AdBanner.css";

// Importing local images from your assets folder
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";
import banner6 from "../../assets/images/banner6.jpg";

function AdBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [banner1, banner2, banner3, banner4, banner5, banner6];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-slide effect: changes image every 6 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 6000);
    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [currentSlide]); // Resetting timer on slide change prevents skipping

  return (
    <div className="ad-banner-container">
      {/* Sliding Images Track */}
      <div 
        className="ad-banner-track" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((imgSrc, index) => (
          <div className="ad-banner-slide" key={index}>
            <img src={imgSrc} alt={`Promotional Banner ${index + 1}`} />
            
            <div className="ad-banner-overlay">
              <h2>New Custom Tailoring Drops</h2>
              <button className="ad-banner-btn">Shop Collection</button>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Navigation Arrows (Moved to bottom for proper z-index layering) */}
      <button className="ad-arrow left" onClick={prevSlide}>&#10094;</button>
      <button className="ad-arrow right" onClick={nextSlide}>&#10095;</button>

      {/* Navigation Dots */}
      <div className="ad-banner-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default AdBanner;