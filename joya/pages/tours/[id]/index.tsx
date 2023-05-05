// @ts-nocheck

import { getDoc, doc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { colRef, db } from "@/firebaseConfig";
import { useEffect, useRef, useState } from "react";
import { partnerTour, tour } from "@/interface/interface";
import Image from "next/image";

import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400","500","600"],
  subsets: ["latin","vietnamese"]
});

import { i18n, useTranslation } from "next-i18next"
import type { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Grandtours from "@/components/main/Grandtours";
import DayTours from "@/components/main/DayTours";
import Head from "next/head";
import PartnerTourDetails from "@/components/tour/PartnerTourDetails";

const contactEmails = 'quynhnt88@gmail.com,floris.panico@yahoo.co.uk,Nguyenthuy1095@gmail.com';

// run function when clicking outside of ref
const useClickDetector = (ref: React.MutableRefObject<HTMLDivElement | null>, func: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                func()
            }
        }
  
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    },[ref])    
};

export default function Tour() {
    const { t } = useTranslation('common');

    const router =  useRouter();
    const { id } =  router.query;

    const [tour, setTour] = useState<tour | partnerTour | any>({});

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
    },[id]);

    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [phoneNumberValue, setPhoneNumberValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
  
    const handleFirstNameChange = (e: any) => {
      setFirstNameValue(e.target.value)
    };
  
    const handleLastNameChange = (e: any) => {
      setLastNameValue(e.target.value)
    };
  
    const handlePhoneNumberChange = (e: any) => {
      setPhoneNumberValue(e.target.value)
    };
  
    const handleEmailChange = (e: any) => {
      setEmailValue(e.target.value)
    };
    
    const handleMessageChange = (e: any) => {
      setMessageValue(e.target.value)
    };

    const hideBookForm = () => {
        setBookFormVisible(false)
    }

    const [bookFormVisible, setBookFormVisible] = useState(false);
    const bookFormRef = useRef(null);

    useClickDetector(bookFormRef, hideBookForm);
  
    const [popUpVisible, setPopUpVisible] = useState(false);
    const showPopUp = (e: any) => {
        if (emailValid) {
            setPopUpVisible(prevState => !prevState)
            setTimeout(() => {
                setPopUpVisible(prevState => !prevState)
            }, 2000)
      
            setTimeout(() => {
              setFirstNameValue('');
              setLastNameValue('');
              setPhoneNumberValue('');
              setEmailValue('');
              setMessageValue('');
              setIdealTourDurationValue('');
              setYourBudgetValue('');
              setEmailWarning('');
            }, 200)
          }
  
          return emailValid;
    }

    const durationFormatDay = (num: number) => {
        if (num === 1) { return num + " " + t('day')}
        else { return num + " " + t('days')}
    }

    const durationFormatNight = (num: number) => {
        if (num === 1) { return num + " " + t('night')}
        else { return num + " " + t('nights')}
    }

    const emailInputRef = useRef<string | any>(null);

    const [emailWarning, setEmailWarning] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const validateEmail = (email: string) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validate = () => {
      if (validateEmail(emailInputRef.current?.value)) {
        setEmailValid(true);
        setEmailWarning(`${emailInputRef.current?.value} is valid`)
      } else if (emailInputRef.current?.value) {
        setEmailValid(false);
        setEmailWarning(`${emailInputRef.current?.value} is not valid`)
      } else {
        setEmailWarning('')

      }
      return false
    }

    if (tour.tourType != "partner") return (
        <>
            <Head>
                <title>{tour.title}</title>
            </Head>
            <div className={plusJakartaSans.className}>
                <Header t={t}/>
                <main className="w-container mx-auto mb-8 flex gap-12 flex-col relative">
                    <div className="grid gap-8 xl:gap-[4rem] md:grid-cols-details pt-1 md:min-h-[500px] xl:min-h-[400px]">
                        <div className="mx-auto my-auto">
                            <Image src={tour.image} width={600} height={400} alt="tour image" className="shadow-card-bold"/>
                        </div>
                        <div className="shadow-card-bold rounded-[18px] p-6 flex -md:gap-6 flex-col justify-between">
                            <div className="flex gap-4 flex-col">
                                <h1 className="text-neutral-900 font-semibold text-xl xl:text-3xl">{tour.title}</h1>
                                <ul className="list-disc list-inside flex gap-3 flex-col">
                                    <li>
                                        <span className="relative left--6 text-neutral-700 font-semibold text-xs xl:text-base">{t('fullPackage')}: 
                                            <span className={`ml-1 text-neutral-900 ${tour.price ? "" : "text-sm text-neutral-600"}`}>
                                                {tour.price ? tour.price : t('flexible')}
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="relative left--6 text-neutral-700 font-semibold text-xs xl:text-base">{t('destinations')}: 
                                            <span className={`ml-1 text-neutral-900 ${tour.destinations ? "" : "text-sm text-neutral-600"}`}>
                                                {tour.destinations ? tour.destinations : t('flexible')}
                                            </span>
                                        </span>
                                        
                                    </li>
                                    <li>
                                        <span className="relative left--6 text-neutral-700 font-semibold text-xs xl:text-base">{t('duration')}: 
                                            <span className={`ml-1 text-neutral-900 ${tour.duration ? "" : "text-sm text-neutral-600"}`}>
                                                {tour.duration ? durationFormatDay(tour.duration) : t('flexible')}
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex gap-3 flex-col items-center">
                                <button className="bg-neutral-800 hover:bg-black rounded-[30px] w-full py-3 
                                text-neutral-300 font-semibold text-base" onClick={() => setBookFormVisible(true)}>{t('book')}</button>
                                <Link href='/contact' target="_blank" className="bg-neutral-300 hover:bg-black rounded-[30px] w-full py-3 text-center
                                text-neutral-800 hover:text-neutral-300 font-semibold text-base">
                                    {t('contactUs')}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Grandtours t={t}/>
                    <DayTours t={t}/>
                    <div className={`z-40 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-white rounded-[30px] p-4 md:p-12 shadow-card-bold
                    ${bookFormVisible ? "fixed" : "hidden"} w-form`} ref={bookFormRef}>
                        {/* iframe to prevent reloading */}
                        <iframe name="frame" className="hidden"></iframe>

                        {/* send message to email using formsubmit.co */}
                        <form className="mx-auto flex flex-col gap-6" action="https://formsubmit.co/f014aa1b902d62b9fceb94b24be012c5 " 
                        method="POST" target="frame" onSubmit={e => showPopUp(e)}>
                            <h1 className="text-neutral-900 font-semibold text-2xl md:text-[2rem] md:leading-10 text-center">{`${t('bookTour')} - ${tour.title}`}</h1>
                            <div className="flex gap-3 md:justify-between">
                                <div className="flex gap-2 flex-col">
                                    <label className="text-neutral-800 font-medium text-base">{t('firstName')}</label>
                                    <input type="text" name="First Name" placeholder={`${t('firstNamePlaceholder')}`} required 
                                    value={firstNameValue} onChange={(e) => handleFirstNameChange(e)}
                                    className="-md:w-full px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                                </div>
                                <div className="flex gap-2 flex-col">
                                    <label htmlFor="" className="text-neutral-800 font-medium text-base">{t('lastName')}</label>
                                    <input type="text" name="Last Name" placeholder={`${t('lastNamePlaceholder')}`} 
                                    value={lastNameValue} onChange={(e) => handleLastNameChange(e)}
                                    className="-md:w-full px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                                </div>
                            </div>
                            <div className="flex gap-3 md:justify-between -md:flex-col">
                                <div className="flex gap-2 flex-col">
                                    <label htmlFor="" className="text-neutral-800 font-medium text-base">{t('phoneNumber')}</label>
                                    <input type="number" name="Phone Number" placeholder={`${t('phoneNumberPlaceholder')}`} 
                                    value={phoneNumberValue} onChange={(e) => handlePhoneNumberChange(e)}
                                    className="px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                                </div>
                                <div className="flex gap-2 flex-col">
                                    <label htmlFor="" className="text-neutral-800 font-medium text-base">{t('email')}</label>
                                    <input type="email" name="Email" placeholder={`${t('emailPlaceholder')}`} 
                                    required value={emailValue} onChange={(e) => handleEmailChange(e)} onInput={validate} ref={emailInputRef}
                                    className="px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                                    <p className={`${emailValid ? 'text-green-600' : 'text-red-500'} font-normal text-[8px] md:text-xs`}>
                                        {emailWarning}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-col">
                                <label htmlFor="message" className="text-neutral-800 font-medium text-base">{t('yourPreference')}</label>
                                <textarea id="message" name="Message" placeholder={`${t('yourPreferencePlaceholder')}`} 
                                rows={4} value={messageValue} onChange={(e) => handleMessageChange(e)} required
                                    className="w-full px-6 py-3 border border-neutral-500 rounded-2xl placeholder:text-xs text-base -md:max-h-[70px]">
                                </textarea>
                            </div>
                            <div className="flex gap-2 flex-col">
                                <h1 className="text-neutral-800 font-medium text-base">{t('tourType')}</h1>
                                <div className="flex gap-6">
                                    <div className="flex gap-2">
                                        <input type="radio" id="privateType" name="type" value={`${t('private')}`} />
                                        <label htmlFor="privateType">{t('private')}</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <input type="radio" id="privateType" name="type" value={`${t('public')}`} />
                                        <label htmlFor="privateType">{t('public')}</label>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="Tour Name" value={tour.title} />
                            <input type="submit" value={`${t('send')}`}
                            className="bg-primary-extra-light hover:bg-primary-light w-fit cursor-pointer text-neutral-900 
                            font-medium text-xl px-12 py-2.5 rounded-[1.125rem] mx-auto"/>
                            {/* prevent capcha */}
                            <input type="hidden" name="_captcha" value="false"/>
                            {/* add multiple email address that the form can send to */}
                            <input type="hidden" name="_cc" value={contactEmails}/>
                        </form>
                    </div>
                </main>
                {/* pop up appears when successfully submit form */}
                <div className={`fixed right-1/2 translate-x-1/2 px-8 py-4 rounded-2xl z-30
                    bg-white dark:bg-semi-black transition-all duration-300 pointer-events-none 
                        ${ popUpVisible ? 'bottom-12 opacity-100' : 'opacity-0 bottom-0'} shadow-card-bold`}>
                    <h1 className="text-neutral-800 font-semibold text-base leading-none z-30">
                        {t('formThanks')} 
                    </h1>
                </div>
                <Footer/>
            </div>
        </>

    )

    if (tour.tourType === "partner") return (
        <>
            <PartnerTourDetails 
                key="partnerTourDetails"
                t={t}
                tour={tour}
                plusJakartaSans={plusJakartaSans}
                popUpVisible={popUpVisible}
                durationFormatDay={durationFormatDay}
                durationFormatNight={durationFormatNight}
                setBookFormVisible={setBookFormVisible}
                bookFormRef={bookFormRef}
                showPopUp={showPopUp}
                bookFormVisible={bookFormVisible}
                firstNameValue={firstNameValue}
                handleFirstNameChange={handleFirstNameChange}
                lastNameValue={lastNameValue}
                handleLastNameChange={handleLastNameChange}
                phoneNumberValue={phoneNumberValue}
                handlePhoneNumberChange={handlePhoneNumberChange}
                emailValue={emailValue}
                handleEmailChange={handleEmailChange}
                messageValue={messageValue}
                handleMessageChange={handleMessageChange}
                validate={validate}
                emailInputRef={emailInputRef}
                emailValid={emailValid}
                emailWarning={emailWarning}
            />
        </>

    )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    const querySnapshot = await getDocs(colRef)

    const paths = [];
    querySnapshot.forEach(doc => paths.push({
        params: { id: doc.id }
    }))
    
    return {
        paths: paths, //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({ locale }: { locale: string}) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
        ])),
        // Will be passed to the page component as props
      },    
    }
};