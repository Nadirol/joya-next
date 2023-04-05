import { logoLightLarge } from "@/public/assets";
import { TFunction } from "i18next";
import Image from "next/image";

const About = ({ t }: { t: TFunction }) => {
    return (
        <div id="about" className="flex gap-6 flex-col items-center text-center">
            <h1 className="text-neutral-900 font-semibold text-2xl xl:text-4xl">{t('aboutUs')}</h1>
            <Image src={logoLightLarge} alt="brand logo" className="w-20 xl:w-[7.5rem] aspect-square"/>
            <div className="">
            <p className="text-neutral-800 font-regular text-base xl:text-xl w-paragraph mx-auto">
                {t('aboutParagraph1')}
            </p>
            <br />
            <p className="text-neutral-800 font-regular text-base xl:text-xl w-paragraph mx-auto">
                {t('aboutParagraph2')}
            </p>
            <br />
            <p className="text-neutral-800 font-regular text-base xl:text-xl w-paragraph mx-auto">
                {t('aboutParagraph3')}
            </p>
            <br />
            <p className="text-neutral-800 font-regular text-base xl:text-xl w-paragraph mx-auto">
                {t('aboutParagraph4')}
            </p>
            <br />
            <p className="text-neutral-800 font-regular text-base xl:text-xl w-paragraph mx-auto">
                {t('aboutParagraph5')}
            </p>
            <br />
            <p className="text-neutral-800 font-regular text-base xl:text-xl w-paragraph mx-auto">
                {t('aboutParagraph6')}
            </p>
            </div>
        </div>
    )
};

export default About;