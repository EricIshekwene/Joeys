import React, { useState, useEffect } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import EventCard from './subcomponents/EventCard'
import SmallEventCard from './subcomponents/SmallEventCard'

export default function Events() {
    const isLarge = useIsLarge();
    function useIsLarge() {
        const [isLarge, setIsLarge] = useState(window.innerWidth >= 820);

        useEffect(() => {
            const handleResize = () => setIsLarge(window.innerWidth >= 820);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return isLarge;
    }

    return (
        <>
            {isLarge ? <div className={`h-200  bg-gray-100 p-6 flex flex-col items-center justify-center`}>
                <div className={`flex flex-row p-6 w-full h-160 items-center justify-between`}>
                    <div className={`flex flex-col flex-wrap ml-12 w-2/5 h-full items-start justify`}>
                        <h2 className={`text-5xl xl:text-7xl ml-6 mt-30 font-bold`}>Events</h2>
                        <p className={`text-xl xl:text-2xl ml-6 w-2/3 xl:w-1/2 mt-6`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        <p className={`text-md xl:text-lg ml-6 w-2/3 xl:w-1/2  mt-6`}>Follow Our Socials to stay updated</p>
                        <div className={`flex flex-row ml-6 gap-6 mt-6`}>
                            <FaInstagram onClick={() => window.open('https://www.instagram.com/joeysplace/')} className="text-2xl xl:text-4xl hover:scale-150  transition-transform duration-300 ease-in-out" />
                            <FaFacebook onClick={() => window.open('https://www.facebook.com/joeysplace/')} className="text-2xl xl:text-4xl hover:scale-150 transition-transform duration-300 ease-in-out" />
                            <FaTiktok onClick={() => window.open('https://www.tiktok.com/@joeysplace/')} className="text-2xl xl:text-4xl hover:scale-150 transition-transform duration-300 ease-in-out" /></div>

                    </div>
                    <div className="relative w-3/5 h-120 mr-12">
                        <div className=" h-full p-4 overflow-x-auto overflow-y-hidden">
                            <div className="flex flex-row gap-4 items-center justify-start snap-x snap-mandatory scroll-smooth">
                                <EventCard className="shrink-0 snap-start hover:scale-105 transition-transform duration-300 ease-in-out" />
                                <EventCard className="shrink-0 snap-start hover:scale-105 transition-transform duration-300 ease-in-out" />
                                <EventCard className="shrink-0 snap-start hover:scale-105 transition-transform duration-300 ease-in-out" />
                                <EventCard className="shrink-0 snap-start hover:scale-105 transition-transform duration-300 ease-in-out" />
                            </div>
                        </div>


                        {/* right-edge blur */}
                        <div className="pointer-events-none absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-100 to-transparent" />
                    </div>


                </div>
            </div> : <div className={` bg-gray-100 flex flex-col items-center justify-center`}>
                <p className={`text-5xl  mt-10`}>Events</p>
                <p className={`text-xl mt-2`}>Take a look at our Upcoming events</p>
                <div className="relative w-full p-2">
                    <div className="h-full p-4 overflow-x-auto overflow-y-hidden">
                        <div className="flex flex-row gap-4 items-center justify-center snap-x snap-mandatory scroll-smooth">
                            <SmallEventCard className="shrink-0 snap-start hover:scale-105 transition-transform duration-300 ease-in-out" />
                            <SmallEventCard className="shrink-0 snap-start hover:scale-105 transition-transform duration-300 ease-in-out" />
                            <SmallEventCard className="shrink-0 snap-start hover:scale-105 transition-transform duration-300 ease-in-out" />
                        </div>
                    </div>

                    {/* right-edge blur */}
                    <div className="pointer-events-none absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-100 to-transparent" />
                </div>
                <div className={`flex flex-row gap-8 p-2 h-20 items-center justify-center`}>
                    <FaInstagram onClick={() => window.open('https://www.instagram.com/joeysplace/')} className="text-4xl hover:scale-150  transition-transform duration-300 ease-in-out" />
                    <FaFacebook onClick={() => window.open('https://www.facebook.com/joeysplace/')} className="text-4xl hover:scale-150 transition-transform duration-300 ease-in-out" />
                    <FaTiktok onClick={() => window.open('https://www.tiktok.com/@joeysplace/')} className="text-4xl hover:scale-150 transition-transform duration-300 ease-in-out" /></div>




            </div>}
            {/* iphone */}





        </>
    )
}
