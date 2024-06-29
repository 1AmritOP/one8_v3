import { useState, useEffect } from 'react';


const AutoSlider = () => {
    const images = [
        'https://via.placeholder.com/600x400?text=Image+1',
        'https://via.placeholder.com/600x400?text=Image+2',
        'https://via.placeholder.com/600x400?text=Image+3',
        'https://via.placeholder.com/600x400?text=Image+4',
      ];
      
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);
    });
  
    const goToPreviousImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  return (
    <>
        <div className="slider">
            <img src={images[currentImageIndex]} alt="Slide" className="slide-image" />
            <button onClick={goToPreviousImage} className="nav-button prev-button">Previous</button>
            <button onClick={goToNextImage} className="nav-button next-button">Next</button>
        </div>
    </>
  )
}

export default AutoSlider
