// @ts-nocheck
import { TFunction } from "next-i18next"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import MoveSliderButton from "../buttons/MoveSliderButton";
import { playIcon } from "@/public/assets";

const videos = [
    'joya-event-1.mp4',
    'joya-event-2.mp4',
    'joya-event-3.mp4',
    'joya-event-4.mp4',
    'joya-event-5.mp4',
    'joya-event-6.mp4',
]

const Events = ({ t }: { t: TFunction }) => {
    const [activeVideo, setActiveVideo] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const [controllerVisible, setControllerVisible] = useState(false);

    const videoRefs = useRef([]);

      useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, videos.length);
      }, [videos.length]);

      const handleMouseEnter = () => {
        setControllerVisible(true)
      };

      const handleMouseLeave = () => {
        setControllerVisible(false)
      };

      const handleMouseClick = (index: number) => {
        if ( videoRefs.current[index].paused) {
            videoRefs.current[index].play();
            setIsVideoPlaying(true)
        } else {
            videoRefs.current[index].pause();
            setIsVideoPlaying(false)
        }
      };

      const handleVideoChange = (direction: "prev" | "next") => {
        videoRefs.current[activeVideo].pause();
        videoRefs.current[activeVideo].currentTime = 0;
        setIsVideoPlaying(false)

        if (direction === "prev") {
            setActiveVideo(prevIndex => prevIndex !== 0 ? prevIndex - 1 : 5 );

        } else {
            setActiveVideo(prevIndex => prevIndex !== 5 ? prevIndex + 1 : 0 );
        
        }
        
      }

    return (
        <div 
            className="w-container h-[600px] mx-auto flex gap-4 md:gap-12 flex-col text-center my-16" 
            id="events"                             
        >
            <h1 className="text-neutral-800 font-semibold text-xl md:text-[3rem] tracking-wide">{t("events")}</h1>
            <div className="h-full w-2/3 mx-auto relative z-10">
                <iframe className="w-full h-full mx-auto"
                    src="https://www.youtube.com/embed/videoseries?si=ZRlPxSvlrWpX1dew&amp;list=PLiLifK5yi21Khn9ADtHOvTkynerq-zCOQ" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>                
                </iframe>
            </div>
        </div>
    )
}

export default Events;