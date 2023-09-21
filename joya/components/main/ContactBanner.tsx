import { facebookIcon, heroPrivate, instagramIcon, worldMap } from "@/public/assets";
import { phoneIcon, mailIcon } from "@/public/assets";
import { TFunction } from "i18next";
import Image from "next/image";
import Link from "next/link";

const ContactBanner = ({ t }: { t: TFunction }) => {

    return (
<<<<<<< Updated upstream
        <div id="contact-banner" className="w-container mx-auto flex -md:flex-col -md:items-center justify-between bg-primary-extra-light rounded-[30px] px-8 md:px-20 py-8">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-neutral-900 font-semibold text-4xl mb-3 -md:text-center">{t('contactWithUs')}</h1>
                <h2 className="text-neutral-800 font-normal text-xl mb-6 -md:text-center">{t('contactBannerHeading')}</h2>
                <div className="flex gap-8 -md:flex-col items-center mb-6">
                    <div className="flex gap-4 items-center">
                        <Image src={phoneIcon} alt="phone icon" />
                        <div className="flex  flex-col">
                            <h1 className="text-neutral-800 font-normal text-xl"><span className="font-medium">Tiếng Việt</span>: 0985080324</h1>
                            <h1 className="text-neutral-800 font-xs text-xl"> <span className="font-medium">English</span>: 0379748073</h1>
=======
        <div id="contact-banner" className="flex -md:flex-col -md:items-center">
            <div className="flex-1 bg-primary-extra-light relative">
                <Image src={worldMap} alt="background image" className="absolute z-[1] inset-0 h-full object-cover"/>
                <div className="flex justify-center items-center flex-col relative z-10 h-full">
                    <h1 className="text-neutral-900 font-semibold text-4xl mb-3 -md:text-center">{t('contactWithUs')}</h1>
                    <h2 className="text-neutral-800 font-normal text-xl mb-6 -md:text-center">{t('contactBannerHeading')}</h2>
                    <div className="flex gap-8 -md:flex-col items-center mb-6">
                        <div className="flex gap-4 items-center">
                            <Image src={phoneIcon} alt="phone icon" />
                            <a target="_blank" href="https://zalo.me/0985041369" 
                            className="text-primary-light font-bold text-xl">
                                + (84) 985 041 369
                            </a>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Image src={mailIcon} alt="phone icon" />
                            <h1 className="text-primary-light font-bold text-xl">sales@joyatravel.vn</h1>
>>>>>>> Stashed changes
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col items-center">
                        <h1 className="text-neutral-800 font-medium text-xl md:text-3xl">{t('followUs')}</h1>
                        <div className="flex gap-6 items-center flex-col">
                            <Link href="https://www.facebook.com/JOYA.TravelAgency" target="_blank" 
                            className="flex items-center gap-2.5 text-3xl font-bold text-neutral-800">
                                <Image src={facebookIcon} alt="facebook logo" />
                                JOYA Travel Agency
                            </Link>
                            <Link href="https://www.instagram.com/joya.travelagency/" target="_blank" 
                            className="flex items-center gap-2.5 text-3xl font-bold text-neutral-800">
                                <Image src={instagramIcon} alt="instagram logo" />
                                JOYA Travel Agency
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 aspect-square">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d36727.0272030705!2d105.89207338246815!3d21.04984060972605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a99767260733%3A0xae3333b685a10ece!2sJOYA%20TRAVEL!5e0!3m2!1sen!2s!4v1683259347337!5m2!1sen!2s" 
                height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border border-neutral-500">
                </iframe>
            </div>        
        </div>
    )
};

export default ContactBanner;