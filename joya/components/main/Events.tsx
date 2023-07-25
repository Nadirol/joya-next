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

    const videoRefs = useRef([]);

      useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, videos.length);
      }, [videos.length]);

      const handleMouseEnter = (index: number) => {
        videoRefs.current[index].play();
        setIsVideoPlaying(true)
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
        <div className="flex gap-4 md:gap-12 flex-col text-center" id="events">
            <h1 className="text-neutral-800 font-semibold text-xl md:text-[3rem] tracking-wide">{t("events")}</h1>
            <div className="w-3/4 mx-auto flex gap-10 relative z-10">

                {videos.map((vid, index) => (
                        <video 
                            key={index}
                            preload="auto" 
                            width="100%" 
                            height="100%"       
                            onClick={() => handleMouseClick(index)}
                            ref={(el) => (videoRefs.current[index] = el)}
                            className={`rounded-xl shadow-card-semibold ${index === activeVideo ? '' : 'hidden'} 
                            ${isVideoPlaying ? "" : "brightness-50	"} transition-[filter]`}
                        >
                            <source src={`/assets/${vid}`} type={`video/${vid.substring(vid.length - 3)}`}/>
                        </video>
                ))}

                <div className="absolute left-0 translate-x-[-55%] bottom-1/2 z-20 rounded-[100%] bg-white">
                    <MoveSliderButton
                        direction="prev"
                        handleClick={() => handleVideoChange("prev")}
                    />
                </div>

                <div className="absolute right-0 translate-x-1/2 bottom-1/2 z-20 rounded-[100%] bg-white">
                    <MoveSliderButton
                        direction="next"
                        handleClick={() => handleVideoChange("next")}
                    />
                </div>

                <Image src={playIcon} alt="play icon" 
                className={`absolute z-20 translate-x--1/2 translate-y--1/2 left-1/2 bottom-1/2 w-[4rem] 
                ${isVideoPlaying ? " scale-0" : "scale-100"} transition-all duration-100`}/>

            </div>
        </div>
    )
}

export default Events;