// ImageSlider.js
import './testi.css'

import React, { useState } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Set the total number of slides

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative overflow-hidden dds">
      <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {/* Slide 1 */}
        <div className="w-full flex-shrink-0">
          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" className="w-full h-64 object-cover" />
        </div>
        {/* Slide 2 */}
        <div className="w-full flex-shrink-0">
          <img src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" className="w-full h-64 object-cover" />
        </div>
        {/* Slide 3 */}
        <div className="w-full flex-shrink-0">
          <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" alt="Slide 3" className="w-full h-64 object-cover" />
        </div>
        {/* Add more slides as needed */}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between">
        <button onClick={prevSlide} className="text-white text-2xl bg-gray-800 p-2 rounded-md">&lt;</button>
        <button onClick={nextSlide} className="text-white text-2xl bg-gray-800 p-2 rounded-md">&gt;</button>
      </div>
    </div>
  );
};

export default ImageSlider;
