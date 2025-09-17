import React from 'react';
import TypographyBackground from '../assets/srcimages/TypographyBackground.png';
export default function Hours() {
    return (
        <div 
    className="w-full h-100 bg-gray-100 relative flex items-center justify-center" 
 
>


  {/* content card */}
  <div className="relative z-10 max-w-2xl mx-auto text-center p-5 bg-gray-100 backdrop-blur-md rounded-2xl shadow-lg">
    <div className="flex flex-col border-2 border-black rounded-2xl justify-end items-end gap-4">
    <p className="text-4xl md:text-5xl font-extrabold text-black  border-b-2 tracking-wide">
      Hours
    </p>
      <p className="text-lg md:text-2xl text-black font-medium">
        Monday – Friday: <span className="font-semibold">10:00 AM – 10:00 PM</span>
      </p>
      <p className="text-lg md:text-2xl text-black font-medium">
        Saturday – Sunday: <span className="font-semibold">10:00 AM – 10:00 PM</span>
      </p>
      <p className="text-lg md:text-2xl text-black font-medium">
        Phone: <span className="font-semibold">(614)-429-3524</span>
      </p>
    </div>
  </div>
</div>

    )
}