import React, { useState } from 'react';
 // Import the CSS file for styling


const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="slider-button" onClick={prevSlide}>&lt;</button>
      <div className="slider-image-wrapper">
        <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="slider-image" />
      </div>
      <button className="slider-button" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default ImageSlider;
