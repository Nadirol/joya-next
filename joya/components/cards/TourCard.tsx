import { clockIcon, locationIcon } from "@/public/assets"
import Image, { StaticImageData } from "next/image"

const TourCard = ({ image, title, destinations, duration, price }: 
{ image: string, title: string, destinations: string, duration: number, price: number}) => {
    return (
        <div className="rounded-2xl shadow-card w-[282px] min-h-[366px]">
            <Image src={image} alt="tour preview image" width={282} height={300}/>
            <div className="">
                <div className="">
                    <h1>{title}</h1>
                    <div className="flex">
                        <Image src={locationIcon} alt="location icon" className="w-2.5 aspect-square"/>
                        <h1 className="truncate">{destinations}</h1>
                    </div>
                    <div className="flex">
                        <Image src={clockIcon} alt="clock icon" />
                        <h1 className="">{duration}</h1>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h1>{price}d</h1>
                    <button>Book now</button>
                </div>
            </div>
        </div>
    )
}

export default TourCard;