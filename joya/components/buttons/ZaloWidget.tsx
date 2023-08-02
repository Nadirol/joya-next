import { zaloLogo } from "@/public/assets";
import { TFunction } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// run function when clicking outside of ref
const useClickDetector = (ref: React.MutableRefObject<HTMLDivElement | null>, func: () => void, secondRef: React.MutableRefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target) && !secondRef.current?.contains(event.target)) {
                func()
            }
        }
  
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    },[ref])    
  };

const ZaloWidget = ({ t }: { t: TFunction }) => {

    const [zaloLinksVisible, setZaloLinksVisible] = useState(false);
    const LinksRef = useRef(null);
    const buttonRef = useRef(null);

    const hidePopup = () => {
        setZaloLinksVisible(false);
    }

    useClickDetector(buttonRef, hidePopup, LinksRef);

    console.log(zaloLinksVisible)

    return (
        <div className="fixed left-4 md:left-8 bottom-12 md:bottom-24">
            <div className="relative flex gap-2 items-center">
                <button className="rounded-[100%] overflow-hidden relative z-10" 
                onClick={() => setZaloLinksVisible(prevState => !prevState)} ref={buttonRef}>
                    <div className="aspect-square m-auto">
                        <Image src={zaloLogo} alt="zalo logo" className="w-12"/>                
                    </div>
                </button>

                <div className="overflow-hidden px-4">
                    <div className={`flex items-center cursor-default transition-all ${zaloLinksVisible ? "translate-x-0" : "translate-x-[-120%]"}`} 
                    ref={LinksRef}>
                        <a className="text-neutral-100 font-semibold text-base px-4 py-2 
                        bg-blue-400 hover:bg-blue-500 rounded-l-2xl shadow-card-extrasemibold" 
                        target="_blank" href="https://zalo.me/0985080324">
                            Tiếng Việt
                        </a>
                        <a className="text-neutral-100 font-semibold text-base px-4 py-2 
                        bg-blue-400 hover:bg-blue-500 rounded-r-2xl shadow-card-extrasemibold" 
                        target="_blank" href="https://zalo.me/0379748073"> 
                            English
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ZaloWidget;