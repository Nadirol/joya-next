import { TFunction } from "next-i18next"
import { themeImage1, themeImage2, themeImage3, themeImage4, themeImage5, themeImage6 } from "@/public/assets"
import ThemeCard from "../cards/ThemeCard"


const themes = [
    { 
        title: 'Romantic',
        image: themeImage1 
    },
    { 
        title: 'Honeymoon',
        image: themeImage2 
    },
    { 
        title: 'Relax',
        image: themeImage3 
    },
    { 
        title: 'Relax Luxury',
        image: themeImage4 
    },
    { 
        title: 'Hiking',
        image: themeImage5 
    },
    { 
        title: 'Bike Riding',
        image: themeImage6 
    },
]

const ThemeTour = ({ t }: { t: TFunction }) => {

    return (
        <div className="flex gap-10 flex-col items-center" id="theme-tours">
            <h1 className="text-neutral-900 font-semibold text-2xl md:text-[2rem] -md:text-center">{t('themeTourHeading')}</h1>
            <div className="flex gap-2 md:gap-6 flex-wrap items-center justify-center md:w-4/5">
                {themes?.map(theme => 
                    <ThemeCard 
                        key={theme.title}
                        image={theme.image}
                        title={theme.title}
                    />
                )}
            </div>
        </div>
    )
}

export default ThemeTour;