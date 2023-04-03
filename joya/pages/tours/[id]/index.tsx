import { getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import { tour } from "@/interface/interface";

const Tour = () => {
    const router =  useRouter();
    const { id } =  router.query;

    const [tour, setTour] = useState<tour | any>({});

    useEffect(() => {
        const docRef = doc(db, `tours/${id}`);
        const getTour = async () => {
            await getDoc(docRef)
            .then((doc) => {
                setTour({...doc.data(), id:doc.id })
            })
            .catch(err => {
                console.log(err.message)
            });
        }
        getTour()
    },[]);

    return (
        <div className="">
            <h1>Post ID: {id}</h1>
            <h2>{tour.title}</h2>
        </div>
    )
}

export default Tour;