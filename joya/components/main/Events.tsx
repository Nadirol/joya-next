// @ts-nocheck
import { TFunction } from "next-i18next"

const Events = ({ t }: { t: TFunction }) => {
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