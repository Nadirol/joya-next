import { tourContent } from "@/interface/interface";
import { clockIcon, locationIcon } from "@/public/assets"
import { TFunction, i18n } from "next-i18next";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";

function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const PartnerTourCard = ({ id, image, vi, en, duration, price, t }: 
{ id: string, image: string | string[], duration: { days: number, nights: number }, 
    price: number, vi: tourContent, en: tourContent , t: TFunction }) => {

    return (
        <Link href={`/tours/${id}`} className="rounded-2xl shadow-card-semibold hover:shadow-card-extrasemibold min-w-[181px] md:min-w-[282px] snap-start overflow-hidden">
            <div className="w-[181px] md:w-[282px] h-[98px] md:h-[192px] overflow-hidden flex items-center justify-center">
                <Image src={typeof image === 'string' ? image : image[0]} alt="tour preview image" width={282} height={192} 
                className="hover:scale-[1.1] transition-all duration-300 object-cover h-[192px]"/>
            </div>
            <div className="flex flex-col justify-between min-h-[15rem] px-2 py-4">
                <div className="flex gap-2.5 flex-col">
                    <h1 className="text-neutral-900 font-medium text-sm md:text-base">{i18n?.language === "vi" ? vi.title : en.title}</h1>
                    {vi.destinations && 
                        <div className="flex gap-2">
                            <Image src={locationIcon} alt="location icon" className="w-2 aspect-square"/>

                            <h1 className="truncate text-neutral-700 font-normal text-xs">
                                {i18n?.language === "vi" ? vi.destinations.join(', ') : en.destinations.join(', ')}
                            </h1>
                        </div>
                    }
                    {duration && 
                        <div className="flex gap-2">
                            <Image src={clockIcon} alt="clock icon" />
                            { duration.days &&
                                <h1 className=" text-neutral-700 font-normal text-xs">
                                    {duration.days === 1 ? duration.days + " " +  t('day') : duration.days + " " +  t('days')} &nbsp;
                                    {duration.nights === 1 ? duration.nights + " " +  t('night') : duration.nights + " " +  t('nights')}
                                </h1>
                            }
                        </div>
                    }
                </div>
                <div className="flex -md:gap-4 justify-between -md:flex-col px-2">
                    {price && <h1 className="text-neutral-900 font-medium text-xs md:text-base">{numberWithCommas(price)} đ</h1>}
                    
                    <button className={`text-neutral-900 font-medium text-xs md:text-base ${price ? "" : "ml-auto"}`}>{t('bookNow')}</button>
                </div>
            </div>
        </Link>
    )
}

export default PartnerTourCard;