import { TFunction } from "next-i18next"
import Image from "next/image"
import MoveSliderButton from "../buttons/MoveSliderButton"
import TourCard from "../cards/TourCard"
import { tourPreview1 } from "@/public/assets"
import { colRef } from "../../firebaseConfig";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"

const exampleTour = {
    image: tourPreview1,
    title: "The Real Grand Tour",
    destinations: "Lào Cai, Hà Nội, Hạ Long, Hội An, Đà Lạt, Hà Nội, Hạ Long, Hội An, Đà Lạt",
    duration: "21 days",
    price: "30.000.000",
}

interface tour {
    destinations: string,
    image: string,
    title: string,
    duration: number,
    price: number,
    id: string
}


const Grandtours = ({ t }: { t: TFunction }) => {
    const [tours, setTours] = useState<tour[] | []>([]);

    const getTours = async () => {
        await getDocs(colRef)
        .then((snapshot) => {
            const newData = snapshot.docs
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

    return (
        <div className="">
            <div className="flex justify-between">
                <h1>EXPERIENCE THE GRAND TOURS</h1>
                <div className="flex">
                    <MoveSliderButton direction="prev"/>
                    <MoveSliderButton direction="next"/>
                </div>
            </div>
            <div className="flex">
                {tours?.map(tour => 
                    <TourCard 
                        key={tour.id}
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

export default Grandtours;