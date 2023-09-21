import { checkIcon, holdingHandsIcon, victoryFingersIcon } from "@/public/assets"
import { TFunction } from "next-i18next";
import { Just_Me_Again_Down_Here } from "next/font/google";
import Image from "next/image"

const justMe = Just_Me_Again_Down_Here({
    weight: "400",
    subsets: ["latin","latin-ext"]
});

const Values = ({ t }: { t: TFunction }) => {
    return (
        <div className="flex gap-12 flex-col my-16">
            <div className="flex gap-6 flex-col">
                <h4 className={`${justMe.className} text-primary-light text-[2rem] leading-tight text-center`}>
                    {t('valuesTitle')}
                </h4>
                <h2 className="text-neutral-900 font-bold text-[2rem] leading-tight text-center tracking-wider">
                    {t('valuesHeading').toUpperCase()}
                </h2>
            </div>

            <div className="w-container mx-auto bg-white flex justify-between py-6 rounded">
                <div className="flex gap-2.5 flex-col items-center text-center">
                    <div className="bg-primary-light p-4 rounded-[100%]">
                        <Image src={holdingHandsIcon} alt="holding hands icon" 
                        className="w-[2.25rem] xl:w-[3.125rem] aspect-square " />
                    </div>

                    <h1 className="text-neutral-900 font-bold text-sm xl:text-[2rem] leading-tight tracking-wide">{t('valueTitle1')}</h1>
                    <p className="text-neutral-900 text-[0.625rem] w-[210px] xl:text-base xl:w-[315px]">
                    {t('valueParagraph1')}
                    </p>
                </div>

                <div className="flex gap-2.5 flex-col items-center text-center">
                    <div className="bg-secondary-light p-4 rounded-[100%]">
                        <Image src={victoryFingersIcon} alt="holding hands icon" className="w-[2.25rem] xl:w-[3.125rem] aspect-square" />
                    </div>

                    <h1 className="text-neutral-900 font-bold text-sm xl:text-[2rem] xl:leading-tight tracking-wide">{t('valueTitle2')}</h1>
                    <p className="text-neutral-900 text-[0.625rem] w-[210px] xl:text-base xl:w-[315px]">
                    {t('valueParagraph2')}
                    </p>
                </div>

                <div className="flex gap-2.5 flex-col items-center text-center">
                    <div className="bg-accent-light p-4 rounded-[100%]">
                        <Image src={checkIcon} alt="holding hands icon" className="w-[2.25rem] xl:w-[3.125rem] aspect-square" />
                    </div>

                    <h1 className="text-neutral-900 font-bold text-sm xl:text-[2rem] xl:leading-tight tracking-wide">{t('valueTitle3')}</h1>
                    <p className="text-neutral-900 text-[0.625rem] w-[210px] xl:text-base xl:w-[315px]">
                    {t('valueParagraph3')}
                    </p>
                </div>
            </div>
        </div>

    )
};

export default Values;