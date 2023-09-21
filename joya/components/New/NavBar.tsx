import { logoLight } from "@/public/assets"
import Image from "next/image";
import Link from "next/link";
import { TFunction, i18n } from "next-i18next";
import NavLinks from "./Header/NavLinks";
import NavButtons from "./Header/NavButtons";

const NavBar = ({ t }: { t: TFunction}) => {
    return (
        <nav className="sticky z-20 bg-white top-0  w-full">
            <div className="w-container flex justify-between items-center mx-auto py-2 xl:py-4 -xl:px-4">
                <Link href={`/${i18n?.language}`}>
                    <Image src={logoLight} alt="" className="w-12 md:w-16"/>
                </Link>

                <NavLinks t={t}/>

                <NavButtons t={t}/>
            </div>
        </nav>
    )
};

export default NavBar