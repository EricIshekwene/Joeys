import React, { useState, useEffect } from "react";

function AboutCarousel({ slides, interval = 4000 }) {
  const [current, setCurrent] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative w-full ml-25  overflow-hidden rounded-xl shadow-lg">
      {/* Slides */}
      <div className="relative w-full h-64 md:h-96">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gray-200 text-center p-6 transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: slide.image ? `url(${slide.image})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
       
            
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 hidden">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutCarousel;
