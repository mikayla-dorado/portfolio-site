import React, { useState } from 'react';
import './PhotoCarousel.css'; 

export const PhotoCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="photo-carousel">
      <button onClick={prevImage}>&lt;</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <button onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default PhotoCarousel;