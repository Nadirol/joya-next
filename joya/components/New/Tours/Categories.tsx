import { colRef } from "@/firebaseConfig";
import { partnerTour } from "@/interface/interface";
import { getDocs } from "firebase/firestore";
import { TFunction } from "next-i18next"
import { Just_Me_Again_Down_Here } from "next/font/google"
import { useEffect, useRef, useState } from "react";
import PartnerTourCard from "../Card/TourCard";
import MoveSliderButton from "@/components/buttons/MoveSliderButton";

const justMe = Just_Me_Again_Down_Here({
    weight: "400",
    subsets: ["latin","latin-ext"]
});

const Categories = ({ t }: { t: TFunction }) => {
    const [tours, setTours] = useState<partnerTour[] | [] | any>([]);

    const getTours = async () => {
        await getDocs(colRef)
        .then((snapshot) => {
            const newData = snapshot.docs.reverse()
            .map(doc => ({...doc.data(), id:doc.id }));
            setTours(newData);                
        })
        .catch(err => {
            console.log(err.message)
        });
    }
    
    useEffect(() => {
        getTours()
    },[])
    
    const toursSliderRef = useRef<HTMLDivElement | null>(null);

    const prevSlide = () => {
      if (toursSliderRef.current) {
        toursSliderRef.current.scrollBy({
          top: 0,
          left: -10,
          behavior: "smooth",
        });
      }
    };
    
    const nextSlide = () => {
      if (toursSliderRef.current) {
        toursSliderRef.current.scrollBy({
          top: 0,
          left: 200,
          behavior: "smooth",
        });
      }
    };

    return (
        <div className="flex gap-8 flex-col items-center bg-stone-100 py-8">
            <div className="">
                <h4 className={`${justMe.className} text-primary-light text-[2rem] leading-tight text-center`}>
                    {t('categoriesTitle')}
                </h4>
                <h2 className="text-neutral-900 font-bold text-[2rem] leading-tight text-center tracking-wider">
                    {t('categoriesHeading').toUpperCase()}
                </h2>
            </div>

            <div className="flex gap-9 text-neutral-900 font-bold text-xl">
                <button className="px-9 py-2.5 rounded hover:text-white hover:bg-primary-regular bg-primary-light text-white">
                    {t('companyTours')}
                </button>
                <button className="px-9 py-2.5 rounded hover:text-white hover:bg-primary-regular bg-white">
                    {t('eventPackages')}
                </button>
                <button className="px-9 py-2.5 rounded hover:text-white hover:bg-primary-regular bg-white">
                    {t('privateTours')}
                </button>
                <button className="px-9 py-2.5 rounded hover:text-white hover:bg-primary-regular bg-white">
                    {t('familyTours')}
                </button>
            </div>

            <div className="w-container mx-auto relative">
                <div className="flex gap-8 md:gap-12 overflow-x-scroll scrollbar-hide snap-x 
                snap-mandatory overscroll-x-contain overflow-y-visible py-4"
                    ref={toursSliderRef}>
                    {tours?.filter((tour: partnerTour) => tour.tourType === "partner").map((tour: partnerTour) => 
                        <PartnerTourCard
                            key={tour.id}
                            id={tour.id}
                            image={tour.image}
                            duration={tour.duration}
                            price={tour.price}
                            vi={tour.vi}
                            en={tour.en}
                            t={t}
                        />
                    )}
                </div>
                <div className="absolute bottom-1/2 translate-y-1/2 left-0 translate-x-[-50%]">
                    <MoveSliderButton
                        direction="prev"
                        handleClick={prevSlide}
                    />
                </div>

                <div className="absolute bottom-1/2 translate-y-1/2 right-0 translate-x-[50%]">
                    <MoveSliderButton
                        direction="next"
                        handleClick={nextSlide}
                    />
                </div>
            </div>
        </div>
    )
};

export default Categories;