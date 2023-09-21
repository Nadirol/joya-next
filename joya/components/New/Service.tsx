import { serviceBanner } from "@/public/assets"
import { TFunction } from "next-i18next"
import { Just_Me_Again_Down_Here } from "next/font/google";
import Image from "next/image";

const justMe = Just_Me_Again_Down_Here({
    weight: "400",
    subsets: ["latin","latin-ext"]
});

const Service = ({ t }: { t: TFunction }) => {
    return (
        <div className="h-[350px] relative flex justify-center items-center overflow-hidden">
            <Image src={serviceBanner} alt="banner" className="w-full object-cover absolute z-0 inset-0"/>
            <div className="w-container mx-auto flex justify-between items-center relative z-10">
                <div className="">
                    <h4 className={`${justMe.className} text-primary-light text-[2rem] leading-tight text-center`}>
                        {t('serviceTitle')}
                    </h4>
                    <h2 className="text-neutral-900 font-bold text-[2rem] leading-tight text-center tracking-wider">
                        {t('serviceHeading').toUpperCase()}
                    </h2>
                    <p className="max-w-[500px] text-neutral-900 text-center">
                        {t('serviceParagraph')}
                    </p>
                </div>
                <button className="text-white font-bold text-2xl px-12 py-4 bg-primary-light">
                    {t('quickSignUpNow')}
                </button>
            </div>
        </div>
    )
};

export default Service;