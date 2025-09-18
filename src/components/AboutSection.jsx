import React, { useState, useEffect } from 'react'
import { AboutCarousel } from './subcomponents/AboutCarousel'
import { SimpleCarousel } from './subcomponents/AboutCarousel'
import TypographyBackground from '../assets/srcimages/TypographyBackground.png'
import background from '../assets/srcimages/Gemini_Table.png'
import logo from '../assets/srcimages/Joey_White_Logo.png'
import CircularText from './subcomponents/CircularText'
export default function AboutSection() {
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
    const aboutSlides = [
        {
            image: background,
            text: "Welcome to Joey's Place – a Columbus favorite since 1995.",
        },
        {
            image: logo,
            text: "We serve handcrafted dishes made from local ingredients.",
        },
        {
            image: background,
            text: "Our chefs bring passion and creativity to every plate.",
        },
        {
            image: TypographyBackground,
            text: "We’re more than a restaurant – we’re a community.",
        },
    ];

    return (
        <section className="w-full flex justify-start items-center border-2 border-red-500 bg-gray-100 flex justify-center mb-20 items-center gap-10">
            <div className="relative  w-full max-w-xl border-2 border-blue-500">
                 {isLarge && <AboutCarousel slides={aboutSlides} interval={5000} /> }
                 {!isLarge && <SimpleCarousel slides={aboutSlides} interval={5000} /> }
                {/* Overlay in top-left */}
              {isLarge && <div className={`absolute top-0 left-0 z-10`}>
                    <CircularText
                        text="Joey's Place*On High Street*#1*"
                        onHover="speedUp"
                        spinDuration={20}
                        className="custom-class "
                    />
                </div>
              }
            </div>
            <div className="w-full ml-10 h-96 mr-20 justify-center items-end flex flex-col">
                <h2 className={`text-lg sm:text-xl md:text-lg lg:text-2xl xl:text-7xl mr-6 font-bold text-right`}>About Joey's Place</h2>
                <p className={`text-xs md:text-sm lg:text-xl xl:text-2xl mr-6 w-2/3 xl:w-1/2 mt-6 text-right`}>Joey's Place is a restaurant that serves food and drinks. It is located on High Street in Columbus, Ohio. It has been in business since 1995. It is a family owned and operated business.</p>
                <div className="w-full mt-8 flex justify-end">
                    <div className="relative w-3/4">
                        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-black to-transparent" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 px-4">
                            <div className="w-3 h-3 bg-black rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
