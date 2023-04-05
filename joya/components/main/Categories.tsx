import { categoriesImage1 } from "@/public/assets";
import { TFunction } from "next-i18next";
import Image from "next/image";

const Categories = ({ t }: { t: TFunction }) => {
    return (
        <div className="bg-primary-extra-light rounded-[30px] px-[6.375rem] py-7 flex flex-col gap-[2rem]">
            <div className="flex gap-4 flex-col text-center items-center">
                <h1 className="text-neutral-800 font-semibold text-4xl">FIND THE PERFECT TOUR FOR YOU</h1>
                <p className="text-neutral-800 font-normal text-lg w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="flex gap-4 flex-col">
                <div className="grid gap-9 grid-cols-category-row-1">
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="">
                            <Image src={categoriesImage1} alt="preview image" className="mb-2 w-full mx-auto"/>
                            <h1 className="text-neutral-900 font-medium text-base">Grand Tour</h1>
                            <p className="text-neutral-800 font-normal text-xs">	
                                A Grand Tour is a long multi-destination journey that usually spans over several days or even weeks. 
                                This type of tour is perfect for travellers who want to experience different cultures, see various landscapes,
                                and explore different parts of the country. Grand Tours typically cover a lot of ground and visit many regions, 
                                offering a comprehensive and diverse travel experience. They can be either fully-guided or partially guided, 
                                depending on the preferences of the travellers.

                            </p>
                        </div>
                        <button className="mb-1 ml-auto text-neutral-900 font-medium text-xl">Explore</button>
                    </div>
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="">
                            <Image src={categoriesImage1} alt="preview image" className="mb-2 w-full mx-auto"/>
                            <h1 className="text-neutral-900 font-medium text-base">Day Tour</h1>
                            <p className="text-neutral-800 font-normal text-xs">	
                            A Day Tour is a single-day trip to a specific destination or attraction. 
                            These tours are perfect for travellers who have limited time or want to explore a specific 
                            place in-depth. Day tours usually include transportation, a knowledgeable guide, and entrance 
                            fees to the attraction or destination. They can be group tours or private tours, depending on the 
                            preference of the travellers.

                            </p>
                        </div>
                        <button className="mb-1 ml-auto text-neutral-900 font-medium text-xl">Explore</button>
                    </div>
                </div>
                <div className="grid gap-9 grid-cols-category-row-2">
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="">
                            <Image src={categoriesImage1} alt="preview image" className="mb-2 w-full mx-auto"/>
                            <h1 className="text-neutral-900 font-medium text-base">Themes Tour</h1>
                            <p className="text-neutral-800 font-normal text-xs">	
                            A Themed Tour is a tour that focuses on a specific theme or interest. 
                            Examples of themed tours include culinary tours, wine tours, adventure tours, 
                            cultural tours, or wildlife tours. These tours are perfect for travellers who 
                            have a particular interest and want to explore it in-depth. Themed tours can be 
                            either single or multi-day and can cover one or several locations, depending on the theme and itinerary.

                            </p>
                        </div>
                        <button className="mb-1 ml-auto text-neutral-900 font-medium text-xl">Explore</button>
                    </div>
                    <div className="flex flex-col justify-between p-[18px] rounded-2xl shadow-card bg-white min-h-[263px]">
                        <div className="">
                            <Image src={categoriesImage1} alt="preview image" className="mb-2 w-full mx-auto"/>
                            <h1 className="text-neutral-900 font-medium text-base">Private Tour</h1>
                            <p className="text-neutral-800 font-normal text-xs">
                                A Private or Custom Tour is a tour that is designed to meet the specific needs 
                                and interests of the traveller. These tours can be fully customized, allowing the 
                                traveller to choose the destination, duration, activities, and accommodations. Private 
                                tours offer a more personalized and flexible travel experience, allowing travellers to 
                                have more control over their itinerary and pace. They can be either fully-guided or partially-guided, 
                                depending on the preferences of the travellers.

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