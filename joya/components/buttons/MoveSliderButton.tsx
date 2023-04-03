import { arrowRightIcon } from "@/public/assets";
import Image from "next/image";

const MoveSliderButton = ({ direction, handleClick }: { direction: "prev" | "next", handleClick: () => void}) => {
    return (
        <button className="p-3 shadow-card hover:shadow-card-semibold transition-shadow duration-300 rounded-[50%] aspect-square" onClick={handleClick}>
                <Image src={arrowRightIcon} alt="arrow right icon" className={`${direction === "prev" ? "rotate-180" : ""} w-3 aspect-square m-auto`}/>
        </button>
    )
};

export default MoveSliderButton;