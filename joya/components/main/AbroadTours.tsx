// @ts-nocheck

import { TFunction } from "next-i18next"
import MoveSliderButton from "../buttons/MoveSliderButton"
import { colRef } from "../../firebaseConfig";
import { getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react"
import { partnerTour } from "@/interface/interface"
import PartnerTourCard from "../cards/PartnerTourCard";


const AbroadTours = ({ t }: { t: TFunction }) => {
    const [tours, setTours] = useState<partnerTour[] | []>([]);

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

    const toursSliderRef = useRef(null);

    const prevTour = () =>
        toursSliderRef.current.scrollBy({
        top: 0,
        left: -10,
        behavior: "smooth",
        });

    const nextTour = () => {
        toursSliderRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: "smooth",
        });
    };

    return (
        <div className="ml-4 md:ml-[2rem] xl:ml-[120px] flex gap-4 md:gap-10 flex-col" id="day-tours">
            <div className="flex justify-between w-container xl:w-[80vw]">
                <h1 className="text-neutral-900 font-semibold text-xl md:text-[1.75rem]">{t('partnerTourHeading')}</h1>
                <div className="flex gap-2.5 items-center -md:hidden">
                    <MoveSliderButton direction="prev" handleClick={prevTour}/>
                    <MoveSliderButton direction="next" handleClick={nextTour}/>
                </div>
            </div>
            <div className="flex gap-8 md:gap-12 overflow-x-scroll scrollbar-hide snap-x 
            snap-mandatory overscroll-x-contain overflow-y-visible pb-1"
                ref={toursSliderRef}>
                {tours?.filter(tour => tour.tourType === "partner").map(tour => 
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
        </div>
    )
}

export default AbroadTours;