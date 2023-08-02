import { zaloLogo } from "@/public/assets";
import { TFunction } from "next-i18next";
import Image from "next/image";

const ZaloWidget = ({ t }: { t: TFunction }) => {

    return (
        <div className="fixed left-4 md:left-8 bottom-20 md:bottom-24">
            <a target="_blank" href="https://zalo.me/0985041369" className="rounded-[100%] overflow-hidden relative z-10">
                <Image src={zaloLogo} alt="zalo logo" className="w-12 rounded-[100%] aspect-square shadow-card-extrasemibold"/>                
            </a>
        </div>
    )
};

export default ZaloWidget;