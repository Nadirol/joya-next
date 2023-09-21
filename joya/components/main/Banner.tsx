import { banner } from "@/public/assets";
import { TFunction } from "i18next";
import Image from "next/image";
import { Just_Me_Again_Down_Here } from "next/font/google"

const justMe = Just_Me_Again_Down_Here({
    weight: "400",
    subsets: ["latin","latin-ext"]
});

const Banner = ({ t }: { t: TFunction }) => {

    return (
        <div className="w-full relative before:absolute before:top-0 before:left-0 before:z-10 
        before:bg-filter-dark before:w-full before:h-full">
            <Image src={banner} alt="banner" className="w-full object-cover"/>
            <div className="text-neutral-50 absolute right-1/2 bottom-1/2 translate-x-1/2 
            translate-y-1/2 z-10 flex gap-8 flex-col items-center text-center w-full md:w-3/4 
            xl:w-3/5 max-w-[900px]">
                <h4 className={justMe.className + "text-[2rem] leading-tight"}>
                    {t('bannerHeading1')}
                </h4>
                <h2 className="font-bold text-[4rem] leading-tight">
                    {t('bannerHeading2')}
                </h2>
                <p className="text-xl">
                    {t('bannerParagraph')}
                </p>
            </div>
        </div>
    )
};

export default Banner;