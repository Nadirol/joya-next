import { facebookIcon, heroPrivate, instagramIcon } from "@/public/assets";
import { phoneIcon, mailIcon } from "@/public/assets";
import { TFunction } from "i18next";
import Image from "next/image";
import Link from "next/link";

const ContactBanner = ({ t }: { t: TFunction }) => {

    return (
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
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Image src={mailIcon} alt="phone icon" />
                        <h1 className="text-neutral-800 font-medium text-xl">sales@joyatravel.vn</h1>
                    </div>
                </div>
                <div className="flex gap-4 flex-col items-center">
                    <h1 className="text-neutral-800 font-medium text-xl md:text-3xl">{t('followUs')}</h1>
                    <div className="flex gap-6 items-center">
                        <Link href="https://www.facebook.com/JOYA.TravelAgency" target="_blank">
                            <Image src={facebookIcon} alt="facebook logo" />
                        </Link>
                        <Link href="https://www.instagram.com/joya.travelagency/" target="_blank">
                        <Image src={instagramIcon} alt="instagram logo" />
                        </Link>
                    </div>
                </div>

            </div>
            <Image src={heroPrivate} alt="" />
        </div>
    )
};

export default ContactBanner;