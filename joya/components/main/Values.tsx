import { checkIcon, holdingHandsIcon, victoryFingersIcon } from "@/public/assets"
import { TFunction } from "next-i18next";
import Image from "next/image"

const Values = ({ t }: { t: TFunction }) => {
    return (
        <div className="w-container mx-auto bg-white flex gap-2.5 md:absolute md:bottom-0 md:right-1/2 md:translate-x-1/2 md:translate-y-1/2 
        px-10 py-6 rounded-3xl md:shadow-card-semibold md:hidden flex-col">
        <div className="flex gap-2.5 flex-col items-center text-center">
            <Image src={holdingHandsIcon} alt="holding hands icon" className="w-[2.25rem] xl:w-[3.125rem] aspect-square" />
            <h1 className="text-neutral-900 font-medium text-sm xl:text-xl xl:leading-[25px] tracking-wide">{t('valueTitle1')}</h1>
            <p className="text-neutral-900 font-regular text-[0.625rem] w-[210px] xl:text-xs xl:w-[315px]">
            {t('valueParagraph1')}
            </p>
        </div>
        <div className="flex gap-2.5 flex-col items-center text-center">
            <Image src={victoryFingersIcon} alt="holding hands icon" className="w-[2.25rem] xl:w-[3.125rem] aspect-square" />
            <h1 className="text-neutral-900 font-medium text-sm xl:text-xl xl:leading-[25px] tracking-wide">{t('valueTitle2')}</h1>
            <p className="text-neutral-900 font-regular text-[0.625rem] w-[210px] xl:text-xs xl:w-[315px]">
            {t('valueParagraph2')}
            </p>
        </div>
        <div className="flex gap-2.5 flex-col items-center text-center">
            <Image src={checkIcon} alt="holding hands icon" className="w-[2.25rem] xl:w-[3.125rem] aspect-square" />
            <h1 className="text-neutral-900 font-medium text-sm xl:text-xl xl:leading-[25px] tracking-wide">{t('valueTitle3')}</h1>
            <p className="text-neutral-900 font-regular text-[0.625rem] w-[210px] xl:text-xs xl:w-[315px]">
            {t('valueParagraph3')}
            </p>
        </div>
        </div>
    )
};

export default Values;