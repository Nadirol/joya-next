import { TFunction } from "next-i18next"
import Image from "next/image"
import MoveSliderButton from "../buttons/MoveSliderButton"
import TourCard from "../cards/TourCard"
import { tourPreview1 } from "@/public/assets"
import { colRef } from "../../firebaseConfig";
import { getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react"
import { tour } from "@/interface/interface"

const exampleTour = {
    image: tourPreview1,
    title: "The Real Grand Tour",
    destinations: "Lào Cai, Hà Nội, Hạ Long, Hội An, Đà Lạt, Hà Nội, Hạ Long, Hội An, Đà Lạt",
    duration: "21 days",
    price: "30.000.000",
}

const DayTours = ({ t }: { t: TFunction }) => {
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
        left: -10,
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
                <h1 className="text-neutral-900 font-semibold text-[1.75rem]">A TOUR IN ONE DAY</h1>
                <div className="flex gap-2.5">
                    <MoveSliderButton direction="prev" handleClick={prevTour}/>
                    <MoveSliderButton direction="next" handleClick={nextTour}/>
                </div>
            </div>
            <div className="flex gap-12 overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain overflow-y-visible pb-1"
                ref={toursSliderRef}>
                {tours?.map(tour => 
                    <TourCard 
                        key={tour.id}
                        id={tour.id}
                        image={tour.image}
                        title={tour.title}
                        destinations={tour.destinations}
                        duration={tour.duration}
                        price={tour.price}
                    />
                )}
                {/* <TourCard
                    key={exampleTour.title}
                    image={exampleTour.image}
                    title={exampleTour.title}
                    destinations={exampleTour.destinations}
                    duration={exampleTour.duration}
                    price={exampleTour.price}
                />
                <TourCard
                    key={exampleTour.title}
                    image={exampleTour.image}
                    title={exampleTour.title}
                    destinations={exampleTour.destinations}
                    duration={exampleTour.duration}
                    price={exampleTour.price}
                />
                <TourCard
                    key={exampleTour.title}
                    image={exampleTour.image}
                    title={exampleTour.title}
                    destinations={exampleTour.destinations}
                    duration={exampleTour.duration}
                    price={exampleTour.price}
                /> */}
            </div>
        </div>
    )
}

export default DayTours;