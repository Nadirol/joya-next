import { arrowRightIcon } from "@/public/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    const [scrollPosition, setScrollPosition] = useState(0);
    console.log("🚀 ~ file: ScrollToTopButton.tsx:9 ~ ScrollToTopButton ~ scrollPosition:", scrollPosition)

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button className={`p-4 shadow-card-bold transition-all duration-1000 
        rounded-[50%] aspect-square fixed md:right-8 right-4 bg-white
        ${scrollPosition < 50 ? "bottom-[400px] md:bottom-[600px] opacity-0" : "opacity-100 bottom-4 md:bottom-8"}`} onClick={scrollToTop}>
                <Image src={arrowRightIcon} alt="arrow right icon" className="w-4 aspect-square m-auto rotate-[-90deg]"/>
        </button>
    )
};

export default ScrollToTopButton;