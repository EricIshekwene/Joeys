import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/srcimages/Joey_White_Logo.png'
import logo_with_name from './assets/srcimages/Joeys_White_Logo_With_Name (1).png'
import background from './assets/srcimages/Gemini_Table.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Navbar from './components/Navbar'
import EventCard from './components/subcomponents/EventCard'
import Events from './components/Events'
import TypographyBackground from './assets/srcimages/TypographyBackground.png'
import Hours from './components/Hours'
import Map from './components/subcomponents/Map'
//import { AuroraBackground } from './components/ui/shadcn-io/aurora-background';
import FlowingMenu from './components/subcomponents/FlowingMenu'
import AboutSection from './components/AboutSection'

function App() {

  const menuItems = [
    {
      link: "/menu/food",
      text: "Food Menu",
      image: TypographyBackground
    },
    {
      link: "/menu/drinks",
      text: "Drinks Menu",
      image: TypographyBackground
    }
  ];

  return (
    <>
      <div className=" bg-gray-100">
        <Navbar />
       
        <Events />
        <div>
          <div className="animate-[marquee_15s_linear_infinite] w-full hidden justify-center items-center" style={{ height: '100px', position: 'relative' }}>
            <FlowingMenu items={menuItems.slice(0, 1)} />
          </div>
          <div className="w-full h-140 border-4 hidden bg-gray-100">

          </div>


          <div className=" hidden animate-[marquee_15s_linear_infinite] w-full  justify-center items-center" style={{ height: '100px', position: 'relative' }}>
            <FlowingMenu items={menuItems.slice(1)} />
          </div>
        </div>
        <AboutSection />
        <Map />
        <div className="w-full bg-black text-gray-400">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12">

            {/* Logo & Info */}
            <div>
              <img src={logo} alt="Restaurant Logo" className="h-12 mb-4" />
              <p className="text-sm">2333 N High St, Columbus, OH</p>
              <p className="text-sm">Call: (614) 429-3524</p>
              <p className="text-sm">info@joeysplace.com</p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-white font-semibold mb-2">Hours</h4>
              <p className="text-sm">Mon–Fri: 10:00 AM – 10:00 PM</p>
              <p className="text-sm">Sat–Sun: 10:00 AM – 10:00 PM</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/amenities" className="hover:text-white transition-colors">Amenities</a></li>
                <li><a href="/events" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="/hours" className="hover:text-white transition-colors">Hours</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className='flex flex-col gap-2 items-start justify-start'>
              <h4 className="text-white font-semibold mb-2">Follow Us</h4>
              <FaInstagram onClick={() => window.open('https://www.instagram.com/joeysplace/')} className=" text-xl hover:scale-150  transition-transform duration-300 ease-in-out" />
              <FaFacebook onClick={() => window.open('https://www.facebook.com/joeysplace/')} className="text-xl hover:scale-150 transition-transform duration-300 ease-in-out" />
              <FaTiktok onClick={() => window.open('https://www.tiktok.com/@joeysplace/')} className="text-xl hover:scale-150 transition-transform duration-300 ease-in-out" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">
            © 2025 Joey's Place. All Rights Reserved.
          </div>
        </div>



      </div>
    </>
  )
}

export default App
