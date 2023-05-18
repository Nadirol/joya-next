import { clockIcon, locationIcon } from "@/public/assets"
import { TFunction, i18n } from "next-i18next";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";

function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const TourCard = ({ id, image, title, destinations, duration, price, t }: 
{ id: string, image: string, title: string, destinations: string  | null, duration: number  | null, 
    price: number  | null, t: TFunction }) => {

    return (
        <Link href={ { pathname:`/tours/[id]`, query: { id: id } } } 
        className="rounded-2xl shadow-card hover:shadow-card-semibold min-w-[181px] md:min-w-[282px] snap-start overflow-hidden">
            <div className="w-[181px] md:w-[282px] h-[98px] md:h-[192px] overflow-hidden flex items-center justify-center">
                <Image src={image} alt="tour preview image" width={282} height={192} className="hover:scale-[1.1] transition-all duration-300 object-cover h-[192px]"/>
            </div>
            <div className="flex flex-col justify-between min-h-[11rem] px-2 py-4">
                <div className="flex gap-2.5 flex-col">
                    <h1 className="text-neutral-900 font-medium text-sm md:text-base">{title}</h1>
                    {destinations && 
                        <div className="flex gap-2">
                            <Image src={locationIcon} alt="location icon" className="w-2 aspect-square"/>
                            <h1 className="truncate text-neutral-700 font-normal text-xs">{destinations}</h1>
                        </div>
                    }
                    {duration && 
                        <div className="flex gap-2">
                            <Image src={clockIcon} alt="clock icon" />
                            <h1 className=" text-neutral-700 font-normal text-xs">
                                {duration === 1 ? duration + " " +  t('day') : duration + " " +  t('days')}
                            </h1>
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

export default TourCard;