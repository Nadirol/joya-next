import { TFunction } from "next-i18next"
import Image from "next/image"
import MoveSliderButton from "../buttons/MoveSliderButton"
import TourCard from "../cards/TourCard"
import { themeImage1 } from "@/public/assets"
import ThemeCard from "../cards/ThemeCard"


const themes = ['Romantic','Honeymoon','Relax','Relax Luxury','Hiking','Bike Riding',]
const ThemeTour = ({ t }: { t: TFunction }) => {

    return (
        <div className="flex gap-10 flex-col items-center">
            <h1 className="text-neutral-900 font-semibold text-[2rem]">CHOOSE THE THEME FOR YOUR TOUR</h1>
            <div className="flex gap-6 flex-wrap items-center justify-center w-4/5">
                {themes?.map(theme => 
                    <ThemeCard 
                        key={theme}
                        image={themeImage1}
                        title={theme}
                    />
                )}
            </div>
        </div>
    )
}

export default ThemeTour;