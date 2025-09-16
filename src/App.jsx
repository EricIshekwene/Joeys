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
function App() {
 

  return (
    <>
      
      <Navbar />

      <Events />
          

    </>
  )
}

export default App
