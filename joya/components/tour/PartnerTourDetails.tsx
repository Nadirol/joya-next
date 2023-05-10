import Head from "next/head"
import Header from "../Header"
import { TFunction, i18n } from "next-i18next"
import Footer from "../Footer"
import { partnerTour } from "@/interface/interface"
import { NextFont } from "next/dist/compiled/@next/font"
import Image from "next/image"
import Link from "next/link"
import Grandtours from "../main/Grandtours"
import DayTours from "../main/DayTours"
import { Dispatch, MutableRefObject, SetStateAction, useState } from "react"
import { arrowDown, locationIcon } from "@/public/assets"

const contactEmails = 'quynhnt88@gmail.com,floris.panico@yahoo.co.uk,Nguyenthuy1095@gmail.com';

function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const PartnerTourDetails = 
({ t, tour, plusJakartaSans, popUpVisible, durationFormatDay, durationFormatNight, setBookFormVisible, bookFormRef, showPopUp, bookFormVisible,
firstNameValue, handleFirstNameChange, lastNameValue, handleLastNameChange, phoneNumberValue, handlePhoneNumberChange, emailValue, 
handleEmailChange, messageValue, handleMessageChange, validate, emailInputRef, emailValid, emailWarning }: 
{ t: TFunction, tour: partnerTour, plusJakartaSans: NextFont, popUpVisible: boolean, 
    durationFormatDay: (num: number) => string,
    durationFormatNight: (num: number) => string,
    setBookFormVisible: Dispatch<SetStateAction<boolean>>,
    bookFormRef: MutableRefObject<null>,
    showPopUp: (e: any) => void,
    bookFormVisible: boolean, firstNameValue: string, lastNameValue: string, phoneNumberValue: string, emailValue: string, messageValue: string,
    handleFirstNameChange: (e: any) => void,
    handleLastNameChange: (e: any) => void,
    handlePhoneNumberChange: (e: any) => void,
    handleEmailChange: (e: any) => void,
    handleMessageChange: (e: any) => void,
    validate: () => boolean,
    emailInputRef: MutableRefObject<any>,
    emailValid: boolean,
    emailWarning: string
}) => {
    const [priceIncludesVisible, setPriceIncludesVisible] = useState(false);
    const [priceExcludesVisible, setPriceExcludesVisible] = useState(false);
    const [notesVisible, setNotesVisible] = useState(false);
    const [forChildrenVisible, setForChildrenVisible] = useState(false);
    const [extrasVisible, setExtrasVisible] = useState(false);

    const [activeItineraryDay, setActiveItineraryDay] = useState(0)
    return (
        <>
            <Head>
                <title>{tour.vi.title}</title>
            </Head>
            <div className={plusJakartaSans.className}>
            <Header t={t}/>
            <main className="w-container mx-auto mb-8 flex gap-12 flex-col relative">
                <div className="grid gap-8 xl:gap-[4rem] md:grid-cols-details pt-1 md:min-h-[500px] xl:min-h-[400px]">
                    <div className="mx-auto my-auto ">
                        <Image src={tour.image} width={600} height={400} alt="tour image" className="shadow-card-bold"/>
                    </div>
                    <div className="shadow-card-bold rounded-[18px] p-6 flex -md:gap-6 gap-8 flex-col justify-between">
                        <div className="flex gap-4 flex-col">
                            <ul className="list-disc list-inside flex gap-3 flex-col">
                                <li>
                                    <span className="relative left--6 text-neutral-700 font-semibold text-xs xl:text-base">{t('fullPackage')}: 
                                        <span className={`ml-1 text-neutral-900 ${tour.price ? "" : "text-sm text-neutral-600"}`}>
                                            {tour.price ? numberWithCommas(tour.price) + " vnđ" : t('flexible')}
                                        </span>
                                    </span>
                                </li>
                                <li>
                                    <span className="relative left--6 text-neutral-700 font-semibold text-xs xl:text-base">{t('destinations')}: 
                                        <span className={`ml-1 text-neutral-900 ${tour.vi.destinations ? "" : "text-sm text-neutral-600"}`}>
                                            {i18n?.language === "vi" ? tour.vi.destinations.join(" - ") : tour.en.destinations.join(" - ")}
                                        </span>
                                    </span>
                                    
                                </li>
                                <li>
                                    <span className="relative left--6 text-neutral-700 font-semibold text-xs xl:text-base">{t('duration')}: 
                                        <span className={`ml-1 text-neutral-900 ${tour.duration.days ? "" : "text-sm text-neutral-600"}`}>
                                            {tour.duration.days 
                                            ? `${durationFormatDay(tour.duration.days)} ${durationFormatNight(tour.duration.nights)}` 
                                            : t('flexible')}
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
                <div className="grid gap-8 xl:gap-[4rem] md:grid-cols-details">
                    <div className="flex gap-5 flex-col">
                        <div className="flex gap-2 flex-col">
                            <h1 className="text-neutral-900 font-semibold text-xl xl:text-3xl">
                                {i18n?.language === "vi" ? tour.vi.title : tour.en.title}
                            </h1>
                            {(tour.vi.description && tour.en.description) &&
                            <div className="flex gap-4 flex-col">
                            {i18n?.language === "vi" 
                                ? tour.vi.description.map(desc => (
                                    <>
                                        <p className="text-neutral-800 font-normal text-base">{desc}</p>
                                    </>
                                ))
                                : tour.en.description.map(desc => (
                                    <>
                                        <p className="text-neutral-800 font-normal text-base">{desc}</p>
                                    </>
                                ))
                            }
                        </div>}

                        </div>
                        {(tour.vi.highlights && tour.en.highlights) &&
                        <div className="flex gap-2 flex-col">
                            <h1 className="text-neutral-900 font-semibold text-lg xl:text-2xl">{t('highlights')}</h1>
                            <ul className="flex gap-4 flex-col list-disc list-inside">
                                {i18n?.language === "vi"
                                    ? tour.vi.highlights.map(highlight => (
                                        <>
                                            <li className="text-neutral-800 font-normal text-base">{highlight}</li>
                                        </>
                                    ))
                                    : tour.en.highlights.map(highlight => (
                                        <>
                                            <li className="text-neutral-800 font-normal text-base">{highlight}</li>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>
                        }

                    </div>
                    <div className="">
                        {(tour.vi.priceIncludes && tour.en.priceIncludes) && 
                        <div className="w-full flex gap-2 flex-col">
                            <button className="flex justify-between items-center w-full" onClick={() => setPriceIncludesVisible(prevState => !prevState)}>
                                <h1 className="text-neutral-900 font-medium text-xl">{t('priceIncludes')}</h1>
                                <Image src={arrowDown} alt="arrow down" className={`${priceIncludesVisible ? 'rotate-180' : ''} transition-all`}/>
                            </button>
                            <div className={`grid ${priceIncludesVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-500`}>
                                <ul className={`flex gap-4 flex-col list-disc list-inside overflow-hidden mb-2`}>
                                    {i18n?.language === "vi"
                                        ? tour.vi.priceIncludes.map((item, index) =>
                                            typeof item === "string" 
                                            ? (<li key={index} className="text-neutral-800 font-normal text-sm">{item}</li>)
                                            : (
                                                <div key={index} className="flex gap-2 flex-col">
                                                    <h1 className="text-neutral-800 font-normal text-base">{item.heading}</h1>
                                                    <ul className="flex gap-1 flex-col list-inside list-disc">
                                                        {item.bulletPoints.map((point, index) => 
                                                            <li className="text-neutral-700 font-normal text-sm" key={index}>{point}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        )
                                        : tour.en.priceIncludes.map((item, index) =>
                                            typeof item === "string" 
                                            ? (<li key={index} className="text-neutral-800 font-normal text-sm">{item}</li>)
                                            : (
                                                <div key={index} className="flex gap-2 flex-col">
                                                    <h1 className="text-neutral-800 font-normal text-base">{item.heading}</h1>
                                                    <ul className="flex gap-1 flex-col list-inside list-disc">
                                                        {item.bulletPoints.map((point, index) => 
                                                            <li className="text-neutral-700 font-normal text-sm" key={index}>{point}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                            
                        </div>
                        }
                        
                        {(tour.vi.priceExcludes && tour.en.priceExcludes) &&
                        <div className="w-full flex gap-2 flex-col">
                            <button className="flex justify-between items-center w-full" onClick={() => setPriceExcludesVisible(prevState => !prevState)}>
                                <h1 className="text-neutral-900 font-medium text-xl">{t('priceExcludes')}</h1>
                                <Image src={arrowDown} alt="arrow down" className={`${priceExcludesVisible ? 'rotate-180' : ''} transition-all`}/>
                            </button>
                            <div className={`grid ${priceExcludesVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-500`}>
                                <ul className={`flex gap-4 flex-col list-disc list-inside overflow-hidden mb-2`}>
                                    {i18n?.language === "vi"
                                        ? tour.vi.priceExcludes.map(item => (
                                            <>
                                                <li className="text-neutral-800 font-normal text-sm">{item}</li>
                                            </>
                                        ))
                                        : tour.en.priceExcludes.map(item => (
                                            <>
                                                <li className="text-neutral-800 font-normal text-sm">{item}</li>
                                            </>
                                        ))
                                    }
                                </ul>
                            </div>
                            
                        </div> 
                        }

                        
                        {(tour.vi.notes && tour.en.notes) && 
                        <div className="w-full flex gap-2 flex-col">
                            <button className="flex justify-between items-center w-full" onClick={() => setNotesVisible(prevState => !prevState)}>
                                <h1 className="text-neutral-900 font-medium text-xl">{t('notes')}</h1>
                                <Image src={arrowDown} alt="arrow down" className={`${notesVisible ? 'rotate-180' : ''} transition-all`}/>
                            </button>
                            <div className={`grid ${notesVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-500`}>
                                <ul className={`flex gap-4 flex-col list-disc list-inside overflow-hidden mb-2`}>
                                    {i18n?.language === "vi"
                                        ? tour.vi.notes.map(item => (
                                            <>
                                                <li className="text-neutral-800 font-normal text-sm">{item}</li>
                                            </>
                                        ))
                                        : tour.en.notes.map(item => (
                                            <>
                                                <li className="text-neutral-800 font-normal text-sm">{item}</li>
                                            </>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        }

                        
                        {(tour.vi.forChildren && tour.en.forChildren) && 
                        <div className="w-full flex gap-2 flex-col">
                            <button className="flex justify-between items-center w-full" onClick={() => setForChildrenVisible(prevState => !prevState)}>
                                <h1 className="text-neutral-900 font-medium text-xl">{t('forChildren')}</h1>
                                <Image src={arrowDown} alt="arrow down" className={`${forChildrenVisible ? 'rotate-180' : ''} transition-all`}/>
                            </button>
                            <div className={`grid ${forChildrenVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-500`}>
                                <ul className={`flex gap-4 flex-col list-disc list-inside overflow-hidden mb-2`}>
                                    {i18n?.language === "vi"
                                        ? tour.vi.forChildren.map(item => (
                                            <>
                                                <li className="text-neutral-800 font-normal text-sm">{item}</li>
                                            </>
                                        ))
                                        : tour.en.forChildren.map(item => (
                                            <>
                                                <li className="text-neutral-800 font-normal text-sm">{item}</li>
                                            </>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        }

                        {(tour.vi.extras && tour.en.extras) && 
                        <div className="w-full flex gap-2 flex-col">
                            <button className="flex justify-between items-center w-full" onClick={() => setExtrasVisible(prevState => !prevState)}>
                                <h1 className="text-neutral-900 font-medium text-xl">{t('extras')}</h1>
                                <Image src={arrowDown} alt="arrow down" className={`${extrasVisible ? 'rotate-180' : ''} transition-all`}/>
                            </button>
                            <div className={`grid ${extrasVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-500`}>
                                <ul className={`flex gap-4 flex-col list-disc list-inside overflow-hidden duration-500 mb-2`}>
                                    {i18n?.language === "vi"
                                        ? 
                                        <>
                                            <h1 className="text-neutral-800 font-normal text-base">{tour.vi.extras.title}</h1>
                                            {tour.vi.extras.bulletPoints.map(point => (
                                                <>
                                                    <li className="text-neutral-800 font-normal text-sm">{point}</li>
                                                </>
                                            ))}
                                        </>
                                        
                                        : 
                                        <>
                                            <h1 className="text-neutral-800 font-normal text-base">{tour.en.extras.title}</h1>
                                            {tour.en.extras.bulletPoints.map(point => (
                                                <>
                                                    <li className="text-neutral-800 font-normal text-sm">{point}</li>
                                                </>
                                            ))}
                                        </>
                                    }
                                </ul>
                            </div>
                            
                        </div>
                        }
                    </div>
                </div>
                {(tour.vi.itinerary && tour.en.itinerary) && 
                    <div className="flex gap-8 flex-col">
                        <h1 className="text-neutral-900 font-semibold text-lg xl:text-2xl">{t('itinerary')}</h1>
                        <div className="">
                            <div className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain">
                                {i18n?.language === "vi" 
                                    ? tour.vi.itinerary.map((day, index) => (
                                        <>
                                            <button className={`flex gap-3 flex-col items-center justify-center text-center w-1/4 border border-neutral-200
                                            py-3 px-2 ${activeItineraryDay === index ? 'border-t-neutral-800 border-t-2' : ''}`} 
                                            onClick={() => setActiveItineraryDay(index)}>
                                                <h1 className="text-neutral-900 font-semibold text-base">{`${t('day').toUpperCase()} ${index + 1}`}</h1>
                                                <h2 className="text-neutral-700 font-normal text-[10px]">{day.title}</h2>
                                            </button>
                                        </>
                                    ))
                                    : tour.en.itinerary.map((day, index) => (
                                        <>
                                            <button className={`flex gap-3 flex-col items-center justify-center text-center w-1/4 border border-neutral-200
                                            py-3 px-2 ${activeItineraryDay === index ? 'border-t-neutral-800 border-t-2' : ''}`} 
                                            onClick={() => setActiveItineraryDay(index)}>
                                                <h1 className="text-neutral-900 font-semibold text-base">{`Day ${index + 1}`}</h1>
                                                <h2 className="text-neutral-700 font-normal text-[10px]">{day.title}</h2>
                                            </button>
                                        </>
                                    ))
                                }
                            </div>
                            <div className="p-6 flex gap-6 flex-col">
                                <h1 className="text-neutral-900 font-semibold text-xl">
                                    {i18n?.language === "vi" ? tour.vi.itinerary[activeItineraryDay].title : tour.en.itinerary[activeItineraryDay].title}
                                </h1>
                                <div className="flex gap-3 flex-col">
                                    {i18n?.language === "vi" 
                                        ? tour.vi.itinerary[activeItineraryDay].activities.map(activity => (
                                            <>
                                                <div className="flex gap-2 items-start">
                                                    <Image src={locationIcon} alt="" width={20} height={24} />
                                                    <div className="">
                                                        {activity.time && <h1 className="text-neutral-900 font-semibold text-base leading-none mb-1">{activity.time}</h1>}
                                                        {typeof activity.description === 'string' 
                                                        ? <p className={`text-neutral-700 font-normal ${activity.time ? 'text-base' : 'text-lg font-medium'} `}>
                                                        {activity.description}
                                                        </p>
                                                        : <div className="flex gap-2 flex-col">
                                                            <h1 className="text-neutral-700 font-normal text-base">{activity.description.heading}</h1>
                                                            <ul className="flex gap-1 flex-col list-inside list-disc">
                                                                {activity.description.bulletPoints.map((point, index) => 
                                                                    <li className="text-neutral-700 font-normal text-sm" key={index}>{point}</li>
                                                                )}
                                                            </ul>
                                                        </div>
                                                        }
                                                        
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                        : tour.en.itinerary[activeItineraryDay].activities.map(activity => (
                                            <>
                                                <div className="flex gap-2 items-start">
                                                    <Image src={locationIcon} alt="" width={20} height={24} />
                                                    <div className="">
                                                        {activity.time && <h1 className="text-neutral-900 font-semibold text-base leading-none mb-1">{activity.time}</h1>}
                                                        {typeof activity.description === 'string' 
                                                        ? <p className={`text-neutral-700 font-normal ${activity.time ? 'text-base' : 'text-lg font-medium'} `}>
                                                        {activity.description}
                                                        </p>
                                                        : <div className="flex gap-2 flex-col">
                                                            <h1 className="text-neutral-700 font-normal text-base">{activity.description.heading}</h1>
                                                            <ul className="flex gap-1 flex-col list-inside list-disc">
                                                                {activity.description.bulletPoints.map((point, index) => 
                                                                    <li className="text-neutral-700 font-normal text-sm" key={index}>{point}</li>
                                                                )}
                                                            </ul>
                                                        </div>
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
                
                <Grandtours t={t}/>
                <DayTours t={t}/>
                <div className={`z-40 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-white rounded-[30px] p-4 md:p-12 shadow-card-bold
                ${bookFormVisible ? "fixed" : "hidden"} w-form`} ref={bookFormRef}>
                    {/* iframe to prevent reloading */}
                    <iframe name="frame" className="hidden"></iframe>

                    {/* send message to email using formsubmit.co */}
                    <form className="mx-auto flex flex-col gap-6" action="https://formsubmit.co/f014aa1b902d62b9fceb94b24be012c5" 
                        method="POST" target="frame" onSubmit={e => showPopUp(e)}>
                            <h1 className="text-neutral-900 font-semibold text-2xl md:text-[2rem] md:leading-10 text-center">
                                {`${t('bookTour')} - ${tour.vi.title}`}
                            </h1>
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
                            <input type="hidden" name="Tour Name" value={i18n?.language === "vi" ? tour.vi.title : tour.en.title} />
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
}

export default PartnerTourDetails;