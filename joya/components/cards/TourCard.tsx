import { clockIcon, locationIcon } from "@/public/assets"
import Image, { StaticImageData } from "next/image"
import Link from "next/link";

function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const TourCard = ({ id, image, title, destinations, duration, price }: 
{ id: string, image: string, title: string, destinations: string, duration: number, price: number}) => {

    return (
        <Link href={`/tours/${id}`} className="rounded-2xl shadow-card min-w-[282px] snap-start">
            <Image src={image} alt="tour preview image" width={282} height={300}/>
            <div className="flex flex-col justify-between h-[11rem] px-2 py-4">
                <div className="">
                    <h1 className="text-neutral-900 font-medium text-base">{title}</h1>
                    <div className="flex gap-2">
                        <Image src={locationIcon} alt="location icon" className="w-2 aspect-square"/>
                        <h1 className="truncate text-neutral-700 font-normal text-xs">{destinations}</h1>
                    </div>
                    <div className="flex gap-2">
                        <Image src={clockIcon} alt="clock icon" />
                        <h1 className=" text-neutral-700 font-normal text-xs">{duration} days</h1>
                    </div>
                </div>
                <div className="flex justify-between px-2">
                    <h1 className="text-neutral-900 font-medium text-base">{numberWithCommas(price)} đ</h1>
                    <button className="text-neutral-900 font-medium text-base">Book now</button>
                </div>
            </div>
        </Link>
    )
}

export default TourCard;