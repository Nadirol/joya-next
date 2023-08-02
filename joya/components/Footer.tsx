'use client';

import { logoDark } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { i18n, useTranslation } from 'next-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-primary-dark relative z-[1]">
            <div className="w-container mx-auto py-12 xl:py-20 text-neutral-100 grid grid-footer xl:grid-cols-footer	
                 -xl:gap-8 -xl:flex-col border-b border-neutral-800">
                <div className="flex flex-col -xl:items-center">
                    <Link href="/" className="mb-4 -xl:mx-auto w-fit">
                        <Image src={logoDark} alt="brand logo" className="w-[6rem] aspect-square"/>
                    </Link>
                    <h1 className="font-semibold text-xs mb-8">JOYA JOINT STOCK COMPANY</h1>
                    <div className="flex gap-6 [&>a>svg>path]:fill-neutral-100 -xl:mx-auto">
                        <Link href="https://www.facebook.com/JOYA.TravelAgency" target="_blank">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36 18.0451C36 8.08421 27.936 0 18 0C8.064 0 0 8.08421 0 18.0451C0 26.7789 6.192 34.0511 14.4 35.7293V23.4586H10.8V18.0451H14.4V13.5338C14.4 10.0511 17.226 7.21804 20.7 7.21804H25.2V12.6316H21.6C20.61 12.6316 19.8 13.4436 19.8 14.4361V18.0451H25.2V23.4586H19.8V36C28.89 35.0977 36 27.4105 36 18.0451Z" fill="#484747"/>
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com/joya.travelagency/" target="_blank">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.44 0H25.56C31.32 0 36 4.68 36 10.44V25.56C36 28.3289 34.9001 30.9843 32.9422 32.9422C30.9843 34.9001 28.3289 36 25.56 36H10.44C4.68 36 0 31.32 0 25.56V10.44C0 7.67114 1.09993 5.01569 3.05781 3.05781C5.01569 1.09993 7.67114 0 10.44 0ZM10.08 3.6C8.3614 3.6 6.71318 4.28271 5.49795 5.49795C4.28271 6.71318 3.6 8.3614 3.6 10.08V25.92C3.6 29.502 6.498 32.4 10.08 32.4H25.92C27.6386 32.4 29.2868 31.7173 30.5021 30.5021C31.7173 29.2868 32.4 27.6386 32.4 25.92V10.08C32.4 6.498 29.502 3.6 25.92 3.6H10.08ZM27.45 6.3C28.0467 6.3 28.619 6.53705 29.041 6.95901C29.4629 7.38097 29.7 7.95326 29.7 8.55C29.7 9.14674 29.4629 9.71903 29.041 10.141C28.619 10.5629 28.0467 10.8 27.45 10.8C26.8533 10.8 26.281 10.5629 25.859 10.141C25.437 9.71903 25.2 9.14674 25.2 8.55C25.2 7.95326 25.437 7.38097 25.859 6.95901C26.281 6.53705 26.8533 6.3 27.45 6.3ZM18 9C20.3869 9 22.6761 9.94821 24.364 11.636C26.0518 13.3239 27 15.6131 27 18C27 20.3869 26.0518 22.6761 24.364 24.364C22.6761 26.0518 20.3869 27 18 27C15.6131 27 13.3239 26.0518 11.636 24.364C9.94821 22.6761 9 20.3869 9 18C9 15.6131 9.94821 13.3239 11.636 11.636C13.3239 9.94821 15.6131 9 18 9ZM18 12.6C16.5678 12.6 15.1943 13.1689 14.1816 14.1816C13.1689 15.1943 12.6 16.5678 12.6 18C12.6 19.4322 13.1689 20.8057 14.1816 21.8184C15.1943 22.8311 16.5678 23.4 18 23.4C19.4322 23.4 20.8057 22.8311 21.8184 21.8184C22.8311 20.8057 23.4 19.4322 23.4 18C23.4 16.5678 22.8311 15.1943 21.8184 14.1816C20.8057 13.1689 19.4322 12.6 18 12.6Z" fill="#484747"/>
                            </svg>                   
                        </Link>
                    </div>
                </div>
                <div className="grid -md:gap-8 grid-rows-1 md:grid-cols-2 -md:text-center">
                    <div className="flex gap-4 flex-col md:justify-between">
                        <h1 className="font-medium text-base">{t('address')}: &nbsp; <span className="font-normal text-neutral-200"> {t('addressDetails')}</span></h1>
                        <div className="flex gap-2 -md:mx-auto">
                            <h1 className="font-semibold text-base">{t('phoneNumber')}: 
                            </h1>

                            <h3 className="font-normal text-base text-neutral-200">0985041369</h3>
                        </div>
                        <h1 className="font-semibold text-base">Email: <span className="font-normal text-neutral-200">sales@joyatravel.vn</span></h1>
                        {/* <h1 className="font-semibold text-base">Website: &nbsp;
                            <Link href="https://www.joya.com.vn" className="font-normal text-neutral-200">www.joya.com.vn</Link>
                        </h1> */}
                    </div>
                    <div className="flex gap-4 flex-col mx-auto -md:text-center xl:ml-auto">
                        <h1 className="font-semibold text-lg">{t('links')}</h1>
                        <ul className="flex -xl:gap-3 flex-col xl:justify-between h-full text-neutral-200">
                            <li>
                                <Link href={`/${i18n?.language}`} className="font-medium text-base hover:text-neutral-100">{t('home')}</Link>
                            </li>
                            <li>
                                <Link href={`/${i18n?.language}/about`} className="font-medium text-base hover:text-neutral-100">{t('about')}</Link>
                            </li>
                            <li>
                                <Link href={`/${i18n?.language}/tours`} className="font-medium text-base hover:text-neutral-100">{t('tours')}</Link>
                            </li>
                            <li>
                                <Link href={`/${i18n?.language}/contact`} className="font-medium text-base hover:text-neutral-100">{t('contact')}</Link>
                            </li>
                            <li>
                                <Link href="/assets/JOYA_Catalogue_EN.pdf" target="_blank" 
                                className="font-medium text-base hover:text-neutral-100">{t('downloadCatalogue')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>     
            </div>
            <div className="w-container mx-auto text-center py-4">
                <h1 className="text-neutral-300">JOYA © 2023 All Rights Reserved.</h1>
            </div>
        </div>
    )
};

export default Footer;