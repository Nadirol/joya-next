import { categoriesImage1, categoriesImage2, categoriesImage3, categoriesImage4 } from "@/public/assets";
import { TFunction } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const Categories = ({ t }: { t: TFunction }) => {
    return (
        <div id="categories" className="bg-primary-extra-light rounded-[30px] p-8 xl:px-[6.375rem] py-7 flex flex-col gap-[2rem]">
            <div className="flex gap-4 flex-col text-center items-center">
                <h1 className="text-neutral-800 font-semibold text-xl md:text-4xl">{t('categoryHeading1')}</h1>
                <p className="text-neutral-800 font-normal text-xs md:text-lg w-4/5">
                    {t('categoryHeading2')}
                </p>
            </div>
            <div className="flex gap-4 flex-col">
                <div className="grid gap-9 md:grid-cols-category-row-1">
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="mb-2">
                            <Image src={categoriesImage1} alt="preview image" className="mb-2 w-full mx-auto rounded-xl"/>
                            <h1 className="text-neutral-900 font-medium text-base">{t('grandTour')}</h1>
                            <p className="text-neutral-800 font-normal text-xs">	
                                {t('grandTourDescription')}
                            </p>
                        </div>
                        <Link scroll={false} href="#grand-tours" className="mb-1 ml-auto text-neutral-900 font-medium text-xl">{t('explore')}</Link>
                    </div>
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="mb-2">
                            <Image src={categoriesImage2} alt="preview image" className="mb-2 w-full mx-auto rounded-xl"/>
                            <h1 className="text-neutral-900 font-medium text-base">{t('dayTour')}</h1>
                            <p className="text-neutral-800 font-normal text-xs">	
                                {t('dayTourDescription')}
                            </p>
                        </div>
                        <Link scroll={false} href="#day-tours" className="mb-1 ml-auto text-neutral-900 font-medium text-xl">{t('explore')}</Link>
                    </div>
                </div>
                <div className="grid gap-9 md:grid-cols-category-row-2">
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="mb-2">
                            <Image src={categoriesImage3} alt="preview image" className="mb-2 w-full mx-auto rounded-xl"/>
                            <h1 className="text-neutral-900 font-medium text-base">{t('themeTour')}</h1>
                            <p className="text-neutral-800 font-normal text-xs">	
                                {t('themeTourDescription')}
                            </p>
                        </div>
                        <Link scroll={false} href="#theme-tours" className="mb-1 ml-auto text-neutral-900 font-medium text-xl">{t('explore')}</Link>
                    </div>
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="mb-2">
                            <Image src={categoriesImage4} alt="preview image" className="mb-2 w-full mx-auto rounded-xl"/>
                            <h1 className="text-neutral-900 font-medium text-base">{t('privateTour')}</h1>
                            <p className="text-neutral-800 font-normal text-xs">
                                {t('privateTourDescription')}
                            </p>
                        </div>
                        <Link scroll={false} href="#custom-tours" className="mb-1 ml-auto text-neutral-900 font-medium text-xl">{t('explore')}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Categories;