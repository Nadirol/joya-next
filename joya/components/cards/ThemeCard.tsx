import Image, { StaticImageData } from "next/image";

const ThemeCard = ({ image, title }: 
{ image: StaticImageData, title: string }) => {

    return (
        <div className="relative z-20 flex justify-center items-center bg-neutral-800 px-12 py-10 rounded-[1.125rem] overflow-hidden
        before:absolute before:top-0 before:left-0 before:z-10 before:bg-filter-dark before:w-full before:h-full">
            <h1 className="relative z-20 text-white font-semibold text-xl">{title}</h1>
            <Image src={image} alt="theme background" className="absolute z-0 top-0 left-0 w-full h-full"/>
        </div>

    )
}

export default ThemeCard;