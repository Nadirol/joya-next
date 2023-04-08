// @ts-nocheck

import { TFunction } from "next-i18next"
import MoveSliderButton from "../buttons/MoveSliderButton"
import TourCard from "../cards/TourCard"
import { colRef } from "../../firebaseConfig";
import { getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react"
import { tour } from "@/interface/interface"


const Grandtours = ({ t }: { t: TFunction }) => {
    const [tours, setTours] = useState<tour[] | []>([]);

    const getTours = async () => {
        await getDocs(colRef)
        .then((snapshot) => {
            const newData = snapshot.docs.reverse()
            .map(doc => ({...doc.data(), id:doc.id }));
            setTours(newData);                
            console.log(tours, newData);
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
        left: -1,
        behavior: "smooth",
        });

    const nextTour = () => {
        toursSliderRef.current.scrollBy({
        top: 0,
        left: 100,
        behavior: "smooth",
        });
    };

    return (
        <div className="flex gap-10 flex-col">
            <div className="flex justify-between">
                <h1 className="text-neutral-900 font-semibold text-xl md:text-[1.75rem]">{t('grandTourHeading')}</h1>
                <div className="flex gap-2.5 items-center -md:hidden">
                    <MoveSliderButton direction="prev" handleClick={prevTour}/>
                    <MoveSliderButton direction="next" handleClick={nextTour}/>
                </div>
            </div>
            <div className="flex gap-8 md:gap-12 overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain overflow-y-visible pb-1"
                ref={toursSliderRef}>
                {tours?.filter(tour => tour.tourType === "grand").map(tour => 
                    <TourCard 
                        key={tour.id}
                        id={tour.id}
                        image={tour.image}
                        title={tour.title}
                        destinations={tour.destinations}
                        duration={tour.duration}
                        price={tour.price}
                        t={t}
                    />
                )}
            </div>
        </div>
    )
}

export default Grandtours;