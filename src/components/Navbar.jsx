import React, { useState, useEffect } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import logo from '../assets/srcimages/Joey_White_Logo.png'
import background from '../assets/srcimages/Gemini_Table.png'
const Navbar = () => {
  const [showBorders, setShowBorders] = useState(true);
  
  // Map color names to full Tailwind border color classes
  const borderColorMap = {
    green: 'border-green-500',
    blue: 'border-blue-500',
    red: 'border-red-500',
  };

  // Helper to toggle border classes
  const borderClass = (color) =>
    showBorders && borderColorMap[color]
      ? `border-4 ${borderColorMap[color]}`
      : '';

  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-800 text-white rounded"
        onClick={() => setShowBorders((prev) => !prev)}
      >
        {showBorders ? 'Hide Borders' : 'Show Borders'}
      </button>
      <div className={`w-full h-220 bg-black ${borderClass('green')} flex items-start   bg-cover bg-center`} style={{ backgroundImage: `url(${background})` }}>
        <div className="w-full h-full bg-black/50 p-6 flex items-start justify-center">
          <div className={`flex flex-col ${borderClass('blue')} gap-4 items-start justify-center w-full`}>
            <div className={`flex ${borderClass('red')} justify-between w-full items-center p-3`}>
              <div className={`flex ${borderClass('blue')} gap-4 flex-row items-start justify-start w-1/3`}>
                <button className="text-white text-lg font-bold hover:scale-110 transition-transform duration-300 ease-in-out">About Us</button>
                <button className="text-white text-lg font-bold hover:scale-110 transition-transform duration-300 ease-in-out">Amenities</button>
                <button className="text-white text-lg font-bold hover:scale-110 transition-transform duration-300 ease-in-out">Reservations</button>
              </div>
              <div className={`flex ${borderClass('blue')} flex-col items-center justify-center w-1/3  hover:scale-110 transition-transform duration-300 ease-in-out`}>
                <p className="text-white text-5xl font-bold">Joey's</p>
                <p className="text-white text-xl font-bold">Place</p>
              </div>
              <div className={`flex ${borderClass('green')} gap-4 flex-row items-end justify-end w-1/3`}>
                <FaInstagram onClick={() => window.open('https://www.instagram.com/joeysplace614/', '_blank')} className="text-white text-2xl font-bold  hover:scale-110 transition-transform duration-300 ease-in-out" />
                <FaTiktok onClick={() => window.open('https://www.tiktok.com/@meetatjoeys', '_blank')} className="text-white text-2xl font-bold  hover:scale-110 transition-transform duration-300 ease-in-out" />
                <FaFacebook onClick={() => window.open('https://www.facebook.com/joeysplace614', '_blank')} className="text-white text-2xl font-bold  hover:scale-110 transition-transform duration-300 ease-in-out" />
              </div>
            </div>

            <div className={`flex ${borderClass('red')} flex-col mt-20 items-center justify-center w-full items-center p-3 gap-33`}>
              <div
                className={` ${borderClass('blue')} flex flex-shrink gap-4 flex-row items-start justify-start aspect-[11/10] h-100`}
                style={{ width: 'auto' }}
              >
                <img src={logo} alt="logo" className="w-full  hover:scale-110 transition-transform duration-300 ease-in-out h-full" />
              </div>
              <div className={`flex ${borderClass('blue')} flex-col items-center justify-center w-full items-center p-3  hover:scale-110 transition-transform duration-300 ease-in-out `}>
                <p onClick={() => window.open('https://www.google.com/maps/place/Joey\'s+Place/@40.0098344,-83.0130828,17z/data=!3m2!4b1!5s0x88388ea39423c41b:0xd2908a5f09dcc12b!4m6!3m5!1s0x88388f1726285a71:0x205a3209310a2d8!8m2!3d40.0098344!4d-83.0105025!16s%2Fg%2F11yh6f1wr2?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D  ')} className="text-white text-sm font-bold">2333 N High St, Columbus, OH 43202</p>
                <p onClick={() => window.open('tel:6144293524')} className="text-white text-sm font-bold">(614)-429-3524</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar