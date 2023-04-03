import { categoriesImage1 } from "@/public/assets";
import { TFunction } from "next-i18next";
import Image from "next/image";

const Categories = ({ t }: { t: TFunction }) => {
    return (
        <div className="bg-primary-extra-light rounded-[30px] px-[6.375rem] py-7 grid grid-cols-categories gap-[8rem]">
            <div className="flex gap-10 flex-col my-auto">
                <h1 className="text-neutral-800 font-semibold text-4xl">FIND THE PERFECT TOUR FOR YOU</h1>
                <p className="text-neutral-800 font-normal text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="flex gap-4 flex-col">
                <div className="grid gap-9 grid-cols-category-row-1">
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="">
                            <Image src={categoriesImage1} alt="preview image" className="w-full h-[6.25rem]"/>
                            <h1 className="text-neutral-900 font-medium text-base">Grandtour</h1>
                            <p className="text-neutral-800 font-normal text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                        <button className="mb-1 ml-auto text-neutral-900 font-medium text-xl">Explore</button>
                    </div>
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="">
                            <Image src={categoriesImage1} alt="preview image" className="w-full h-[6.25rem]"/>
                            <h1 className="text-neutral-900 font-medium text-base">Grandtour</h1>
                            <p className="text-neutral-800 font-normal text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                        <button className="mb-1 ml-auto text-neutral-900 font-medium text-xl">Explore</button>
                    </div>
                </div>
                <div className="grid gap-9 grid-cols-category-row-2">
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="">
                            <Image src={categoriesImage1} alt="preview image" className="w-full h-[6.25rem]"/>
                            <h1 className="text-neutral-900 font-medium text-base">Grandtour</h1>
                            <p className="text-neutral-800 font-normal text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                        <button className="mb-1 ml-auto text-neutral-900 font-medium text-xl">Explore</button>
                    </div>
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="">
                            <Image src={categoriesImage1} alt="preview image" className="w-full h-[6.25rem]"/>
                            <h1 className="text-neutral-900 font-medium text-base">Grandtour</h1>
                            <p className="text-neutral-800 font-normal text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                        <button className="mb-1 ml-auto text-neutral-900 font-medium text-xl">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Categories;