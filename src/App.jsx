import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/srcimages/Joey_White_Logo.png'
import logo_with_name from './assets/srcimages/Joeys_White_Logo_With_Name (1).png'
import background from './assets/srcimages/Gemini_Table.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Navbar from './components/Navbar'
function App() {
  
  
  return (
    <>
     <Navbar />
     
     
      <div className=" h-200 bg-gray-100 border-4 border-red-500">
        <p className="p-8">This is content below the nav to test scrolling</p>
      </div>
     
    </>
  )
}

export default App
