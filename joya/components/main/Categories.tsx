import { categoriesImage1, categoriesImage2, categoriesImage3, categoriesImage4 } from "@/public/assets";
import { TFunction } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Categories = ({ t }: { t: TFunction }) => {
    const [card1Visible, setCard1Visible] = useState(true);
    const [card2Visible, setCard2Visible] = useState(true);
    const [card3Visible, setCard3Visible] = useState(true);
    const [card4Visible, setCard4Visible] = useState(true);

    return (
        <div id="categories" className="w-container mx-auto bg-primary-extra-light rounded-[30px] p-8 xl:px-[6.375rem] py-7 flex flex-col gap-[2rem]">
            <div className="flex gap-4 flex-col text-center items-center">
                <h1 className="text-neutral-800 font-semibold text-xl md:text-4xl space-x-4 tracking-wide">{t('categoryHeading1')}</h1>
                <p className="text-neutral-800 font-normal text-xs md:text-lg w-4/5">
                    {t('categoryHeading2')}
                </p>
            </div>
            <div className="flex gap-4 flex-col">
                <div className="grid gap-9 md:grid-cols-category-row-1">
        
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="mb-3 min-h-[200px] md:min-h-[300px] cursor-pointer" onClick={() => setCard1Visible(prevState => !prevState)}>
                            <Image src={categoriesImage1} alt="preview image"
                            className={`mb-2 w-full mx-auto rounded-xl ${card1Visible ? '' : 'h-[0]'}`}/>
                            <h1 className="text-neutral-900 font-medium text-base mb-1">{t('grandTour')}</h1>
                            <p className={`text-neutral-800 font-normal text-xs ${card1Visible ? '-md:line-clamp-3' : ''}`}>	
                                {t('grandTourDescription')}
                            </p>
                            <p className={`text-neutral-800 font-normal text-xs ${card1Visible ? 'hidden md:line-clamp-1' : ''}`}>	
                                {t('grandTourDescription2')}
                            </p>
                        </div>
                        <Link scroll={false} href="#grand-tours" className="mb-1 ml-auto text-neutral-900 font-medium text-xl">{t('explore')}</Link>
                    </div>
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="mb-3 min-h-[200px] md:min-h-[300px] cursor-pointer" onClick={() => setCard2Visible(prevState => !prevState)}>
                            <Image src={categoriesImage2} alt="preview image" className={`mb-2 w-full mx-auto rounded-xl ${card2Visible ? '' : 'h-[0]'}`}/>
                            <h1 className="text-neutral-900 font-medium text-base mb-1">{t('dayTour')}</h1>
                            <p className={`text-neutral-800 font-normal text-xs ${card2Visible ? '-md:line-clamp-3' : ''}`}>	
                                {t('dayTourDescription')}
                            </p>
                            <p className={`text-neutral-800 font-normal text-xs ${card2Visible ? 'hidden md:line-clamp-1' : ''}`}>	
                                {t('dayTourDescription2')}
                            </p>
                        </div>
                        <Link scroll={false} href="#day-tours" className="mb-1 ml-auto text-neutral-900 font-medium text-xl">{t('explore')}</Link>
                    </div>
                </div>
                <div className="grid gap-9 md:grid-cols-2">
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="mb-3 min-h-[200px] md:min-h-[300px] cursor-pointer" onClick={() => setCard3Visible(prevState => !prevState)}>
                            <Image src={categoriesImage3} alt="preview image" className={`mb-2 w-full mx-auto rounded-xl ${card3Visible ? '' : 'h-[0]'}`}/>
                            <h1 className="text-neutral-900 font-medium text-base mb-1">{t('themeTour')}</h1>
                            <p className={`text-neutral-800 font-normal text-xs ${card3Visible ? '-md:line-clamp-3' : ''}`}>	
                                {t('themeTourDescription')}
                            </p>
                            <p className={`text-neutral-800 font-normal text-xs ${card3Visible ? 'hidden md:line-clamp-1' : ''}`}>	
                                {t('themeTourDescription2')}
                            </p>
                        </div>
                        <Link scroll={false} href="#theme-tours" className="mb-1 ml-auto text-neutral-900 font-medium text-xl">{t('explore')}</Link>
                    </div>
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="mb-3 min-h-[200px] md:min-h-[300px] cursor-pointer" onClick={() => setCard4Visible(prevState => !prevState)}>
                            <Image src={categoriesImage4} alt="preview image" className={`mb-2 w-full mx-auto rounded-xl ${card4Visible ? '' : 'h-[0]'}`}/>
                            <h1 className="text-neutral-900 font-medium text-base mb-1">{t('privateTour')}</h1>
                            <p className={`text-neutral-800 font-normal text-xs ${card4Visible ? '-md:line-clamp-3' : ''}`}>
                                {t('privateTourDescription')}
                            </p>
                            <p className={`text-neutral-800 font-normal text-xs ${card4Visible ? 'hidden md:line-clamp-1' : ''}`}>	
                                {t('privateTourDescription2')}
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