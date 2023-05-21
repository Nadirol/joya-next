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
import { Dispatch, MutableRefObject, SetStateAction, useRef, useState, useMemo, useEffect } from "react"
import { arrowDown, infoIcon, locationIcon } from "@/public/assets"
import { Column, useTable } from "react-table"

const contactEmails = 'quynhnt88@gmail.com,floris.panico@yahoo.co.uk,Nguyenthuy1095@gmail.com';

function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

type Cols = { dates: string, adultPrice: string, childrenPrice: string | null, surcharge: string | null }

const PartnerTourDetails = 
({ t, tour, plusJakartaSans, popUpVisible, durationFormatDay, durationFormatNight, setBookFormVisible, bookFormRef, showPopUp, bookFormVisible,
firstNameValue, handleFirstNameChange, lastNameValue, handleLastNameChange, phoneNumberValue, handlePhoneNumberChange, emailValue, 
handleEmailChange, messageValue, handleMessageChange, validate, emailInputRef, emailValid, emailWarning, useClickDetector,
darkFilterVisible, setDarkFilterVisible }: 
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
    emailWarning: string,
    useClickDetector: (ref: React.MutableRefObject<HTMLDivElement | null>, func: () => void) => void,
    darkFilterVisible: boolean,
    setDarkFilterVisible: Dispatch<SetStateAction<boolean>>
}) => {

    const [priceIncludesVisible, setPriceIncludesVisible] = useState(false);
    const [priceExcludesVisible, setPriceExcludesVisible] = useState(false);
    const [notesVisible, setNotesVisible] = useState(false);
    const [forChildrenVisible, setForChildrenVisible] = useState(false);
    const [extrasVisible, setExtrasVisible] = useState(false);
    const [discountConditionsVisible, setDiscountConditionsVisible] = useState(false);

    const [activeItineraryDay, setActiveItineraryDay] = useState(0)

    const sliderRef = useRef<any>(null);
    const [sliderScrollPos, setSliderScrollPos] = useState(0);
    const [atSliderEnd, setAtSliderEnd] = useState(false);

    const handleSliderScroll = () => {
        setSliderScrollPos(sliderRef.current?.scrollLeft);
        if (sliderRef.current.scrollWidth - sliderRef.current.scrollLeft - 2 <= sliderRef.current.clientWidth) {
            setAtSliderEnd(true)
        } else setAtSliderEnd(false);
    }

    const scrollSliderLeft = () =>
    {
        sliderRef.current.scrollBy({
            top: 0,
            left: -1,
            behavior: "smooth",
          });
        console.log(sliderRef.current.scrollLeft)
    }


    const scrollSliderRight = () => {
            sliderRef.current.scrollBy({
                top: 0,
                left: 250,
                behavior: "smooth",
              });
            console.log(sliderRef.current.scrollLeft)
    }

    const [priceChartVisible, setPriceChartVisible] = useState(false);
    const priceChartRef = useRef(null);

    const hidePriceChart = () => {
        setPriceChartVisible(false);
        setDarkFilterVisible(false);
    }

    useClickDetector(priceChartRef, hidePriceChart); 

    const columns: Column<Cols>[] = useMemo(
        () => [
            {
                Header: t('date'),
                accessor: "dates"
            },
            {
                Header: t('adultPrice'),
                accessor: "adultPrice"
            },
            {
                Header: t('childrenPrice'),
                accessor: "childrenPrice"
            },
            {
                Header: t('surcharge'),
                accessor: "surcharge"
            },
        ] as Column<Cols>[], [])

    const data = useMemo((): Cols[] => tour.prices ? tour.prices : [], [])

    let tableInstance = useTable({
        columns,
        data
    });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    const [descriptionMoreVisible, setDescriptionMoreVisible] = useState(false);
    const [highlightsMoreVisible, setHighlightsMoreVisible] = useState(false);

    return (
        <div>
            <Head>
                <title>{tour.vi.title}</title>
            </Head>
            <div className={plusJakartaSans.className}>
                <Header t={t}/>
                <main className="mb-8 flex gap-12 flex-col relative z-10 overflow-x-visible">
                    <div className="w-container mx-auto grid gap-8 xl:gap-[4rem] md:grid-cols-details pt-1 xl:min-h-[400px]">
                        <div className="rounded-[18px] overflow-hidden w-full xl:h-[400px] relative 
                        before:absolute before:inset-0 before:bg-filter-light before:w-full before:h-full before:z-20
                        [&:hover>img]:scale-[1.02] [&:hover]:before:block before:hidden before:transition-all before:duration-300">
                            <Image src={tour.image} width={600} height={400} alt="tour image" 
                            className="shadow-card-bold object-cover rounded-[18px] 
                            hover:scale-[1.02] transition-all duration-300 w-full relative"/>
                        </div>
                        <div className="shadow-even rounded-[18px] p-6 flex -md:gap-6 gap-8 flex-col justify-between">
                            <div className="flex gap-4 flex-col">
                                <ul className="list-disc list-inside flex gap-3 flex-col">
                                    <div className="flex gap-1 -xl:flex-col w-full">
                                        <li>
                                            <span className="relative left--6 text-neutral-900 font-semibold text-xs xl:text-lg">{t('fullPackage')}: 
                                                <span className={`ml-1 text-xs xl:text-base font-medium ${tour.price ? "" : "text-neutral-600"}`}>
                                                    {tour.price ? numberWithCommas(tour.price) + " vnđ" : t('flexible')}
                                                </span>
                                            </span>
                                        </li>
                                        {tour.prices && (
                                            <button className="text-neutral-900 font-normal text-xs underline w-fit mr-auto"
                                            onClick={() => { setPriceChartVisible(true); setDarkFilterVisible(true)}}>
                                                <div className="flex gap-1 items-center">
                                                    {t('viewPriceDetails')}
                                                    <Image src={infoIcon} alt="info icon" className="w-3 mt-[3px]"/>
                                                </div>
                                            </button>
                                        )}
                                    </div>

                                    <li>
                                        <span className="relative left--6 text-neutral-900 font-semibold text-xs xl:text-lg">{t('destinations')}: 
                                            <span className={`ml-1 text-xs xl:text-base font-medium ${tour.vi.destinations ? "" : "text-neutral-600"}`}>
                                                {i18n?.language === "vi" ? tour.vi.destinations.join(" - ") : tour.en.destinations.join(" - ")}
                                            </span>
                                        </span>                                    
                                    </li>
                                    <li>
                                        <span className="relative left--6 text-neutral-900 font-semibold text-xs xl:text-lg">{t('duration')}: 
                                            <span className={`ml-1 text-xs xl:text-base font-medium ${tour.duration.days ? "" : "text-neutral-600"}`}>
                                                {tour.duration.days 
                                                ? `${durationFormatDay(tour.duration.days)} ${durationFormatNight(tour.duration.nights)}` 
                                                : t('flexible')}
                                            </span>
                                        </span>
                                    </li>
                                    {(tour.vi.transports && tour.en.transports) &&
                                        <li>
                                            <span className="relative left--6 text-neutral-900 font-semibold text-xs xl:text-lg">{t('transports')}: 
                                                <span className={`ml-1 text-xs xl:text-base font-medium ${tour.duration.days ? "" : "text-neutral-600"}`}>
                                                    {i18n?.language === "vi" 
                                                    ? tour.vi.transports.join(", ")
                                                    : tour.en.transports.join(", ")
                                                    }
                                                </span>
                                            </span>
                                        </li>
                                    }

                                </ul>
                            </div>
                            <div className="flex gap-3 flex-col items-center">
                                <button className="bg-neutral-800 hover:bg-black rounded-[30px] w-full py-3 
                                text-neutral-300 font-semibold text-base" onClick={() => { setBookFormVisible(true); setDarkFilterVisible(true)}}>{t('book')}</button>
                                <Link href='/contact' target="_blank" className="bg-neutral-300 hover:bg-black rounded-[30px] w-full py-3 text-center
                                text-neutral-800 hover:text-neutral-300 font-semibold text-base">
                                    {t('contactUs')}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-container mx-auto grid gap-8 xl:gap-[4rem] md:grid-cols-details">
                        <div className="flex gap-5 flex-col">
                            <div className="flex gap-2 flex-col">
                                <h1 className="text-neutral-900 font-semibold text-xl md:text-3xl xl:w-3/4">
                                    {i18n?.language === "vi" ? tour.vi.title : tour.en.title}
                                </h1>
                                {(tour.vi.description && tour.en.description) &&
                                <div className="flex gap-2 flex-col">
                                {i18n?.language === "vi" 
                                    ? tour.vi.description.map((desc, index) => (
                                        <p key={index} className={`text-neutral-900 font-normal text-xs md:text-base
                                        ${(index >= 1 && !descriptionMoreVisible) ? 'hidden' : ''}`}>
                                            {desc}
                                        </p>
                                    ))
                                    : tour.en.description.map((desc, index) => (
                                        <p key={index} className={`text-neutral-900 font-normal text-xs md:text-base
                                        ${(index >= 1 && !descriptionMoreVisible) ? 'hidden' : ''}`}>
                                            {desc}
                                        </p>
                                    ))
                                }
                                <button onClick={() => setDescriptionMoreVisible(state => !state)} 
                                className={`text-neutral-900 font-normal text-xs md:text-base hover:underline w-fit mx-auto 
                                ${tour.vi.description.length > 1 ? '' : 'hidden'}`}>
                                    {descriptionMoreVisible ? t('showLess') : t('showMore')}
                                </button>
                            </div>}

                            </div>
                            {(tour.vi.highlights && tour.en.highlights) &&
                            <div className="flex gap-2 flex-col">
                                <h1 className="text-neutral-900 font-semibold text-xl md:text-2xl">{t('highlights')}</h1>
                                <ul className="flex gap-4 flex-col list-disc list-inside">
                                    {i18n?.language === "vi"
                                        ? tour.vi.highlights.map((highlight, index) => (
                                                <li key={index} className={`text-neutral-900 font-normal text-xs md:text-base
                                                ${(index >= 3 && !highlightsMoreVisible) ? 'hidden' : ''}`}>
                                                    {highlight}
                                                </li>
                                        ))
                                        : tour.en.highlights.map((highlight, index) => (
                                            <li key={index} className={`text-neutral-900 font-normal text-xs md:text-base
                                            ${(index >= 3 && !highlightsMoreVisible) ? 'hidden' : ''}`}>
                                                {highlight}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <button onClick={() => setHighlightsMoreVisible(state => !state)} 
                                className="text-neutral-900 font-normal text-xs md:text-base hover:underline w-fit mx-auto">
                                    {highlightsMoreVisible ? t('showLess') : t('showMore')}
                                </button>
                            </div>
                            }

                        </div>
                        <div className="">
                            {(tour.vi.priceIncludes && tour.en.priceIncludes) && 
                            <div className="w-full flex gap-2 flex-col">
                                <button className="flex justify-between items-center w-full" 
                                onClick={() => setPriceIncludesVisible(prevState => !prevState)}>
                                    <h1 className="text-neutral-900 font-medium text-xl">{t('priceIncludes')}</h1>
                                    <Image src={arrowDown} alt="arrow down" className={`${priceIncludesVisible ? 'rotate-180' : ''} transition-all`}/>
                                </button>
                                <div className={`grid ${priceIncludesVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} 
                                transition-[grid-template-rows] duration-500`}>
                                    <ul className={`flex gap-4 flex-col list-disc list-inside overflow-hidden mb-2`}>
                                        {i18n?.language === "vi"
                                            ? tour.vi.priceIncludes.map((item, index) =>
                                                typeof item === "string" 
                                                ? (<li key={index} className="text-neutral-900 font-normal text-sm">{item}</li>)
                                                : (
                                                    <li key={index} className=" text-neutral-900 font-normal text-sm">
                                                        {item.heading}
                                                        <ul className="flex gap-1 flex-col list-inside list-disc ml-4">
                                                            {item.bulletPoints.map((point, index) => 
                                                                <li className="text-neutral-900 font-normal text-xs" key={index}>{point}</li>
                                                            )}
                                                        </ul>
                                                    </li>
                                                )
                                            )
                                            : tour.en.priceIncludes.map((item, index) =>
                                                typeof item === "string" 
                                                ? (<li key={index} className="text-neutral-800 font-normal text-sm">{item}</li>)
                                                : (
                                                    <li key={index} className=" text-neutral-800 font-normal text-sm">
                                                        {item.heading}
                                                        <ul className="flex gap-1 flex-col list-inside list-disc ml-4">
                                                            {item.bulletPoints.map((point, index) => 
                                                                <li className="text-neutral-700 font-normal text-xs" key={index}>{point}</li>
                                                            )}
                                                        </ul>
                                                    </li>
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
                                                    <li className="text-neutral-900 font-normal text-sm">{item}</li>
                                                </>
                                            ))
                                            : tour.en.priceExcludes.map(item => (
                                                <>
                                                    <li className="text-neutral-900 font-normal text-sm">{item}</li>
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
                                                    <li className="text-neutral-900 font-normal text-sm">{item}</li>
                                                </>
                                            ))
                                            : tour.en.notes.map(item => (
                                                <>
                                                    <li className="text-neutral-900 font-normal text-sm">{item}</li>
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
                                                    <li className="text-neutral-900 font-normal text-sm">{item}</li>
                                                </>
                                            ))
                                            : tour.en.forChildren.map(item => (
                                                <>
                                                    <li className="text-neutral-900 font-normal text-sm">{item}</li>
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
                                                <h1 className="text-neutral-900 font-normal text-base">{tour.vi.extras.title}</h1>
                                                {tour.vi.extras.bulletPoints.map(point => (
                                                    <>
                                                        <li className="text-neutral-900 font-normal text-sm">{point}</li>
                                                    </>
                                                ))}
                                            </>
                                            
                                            : 
                                            <>
                                                <h1 className="text-neutral-900 font-normal text-base">{tour.en.extras.title}</h1>
                                                {tour.en.extras.bulletPoints.map(point => (
                                                    <>
                                                        <li className="text-neutral-900 font-normal text-sm">{point}</li>
                                                    </>
                                                ))}
                                            </>
                                        }
                                    </ul>
                                </div>
                                
                            </div>
                            }

                            {(tour.vi.discountConditions && tour.en.discountConditions) && 
                            <div className="w-full flex gap-2 flex-col">
                                <button className="flex justify-between items-center w-full" onClick={() => setDiscountConditionsVisible(prevState => !prevState)}>
                                    <h1 className="text-neutral-900 font-medium text-xl">{t('discountConditions')}</h1>
                                    <Image src={arrowDown} alt="arrow down" className={`${discountConditionsVisible ? 'rotate-180' : ''} transition-all`}/>
                                </button>
                                <div className={`grid ${discountConditionsVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-500`}>
                                    <ul className={`flex gap-4 flex-col list-disc list-inside overflow-hidden mb-2`}>
                                        {i18n?.language === "vi"
                                            ? tour.vi.discountConditions.map(item => (
                                                <>
                                                    <li className="text-neutral-900 font-normal text-sm">{item}</li>
                                                </>
                                            ))
                                            : tour.en.discountConditions.map(item => (
                                                <>
                                                    <li className="text-neutral-900 font-normal text-sm">{item}</li>
                                                </>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    {(tour.vi.itinerary && tour.en.itinerary) && 
                        <div className="w-container mx-auto flex gap-8 flex-col">
                            <h1 className="text-neutral-900 font-semibold text-2xl xl:text-3xl">{t('itinerary')}</h1>
                            <div className="">
                                <div className="relative z-10">
                                    <div className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain relative z-10 w-full"
                                    ref={sliderRef} onScroll={handleSliderScroll}>
                                        {i18n?.language === "vi" 
                                            ? tour.vi.itinerary.map((day, index) => (
                                                    <div key={index} className={`flex gap-2 flex-col items-center justify-center text-center snap-center cursor-pointer
                                                    border border-neutral-200 py-2 md:py-8 px-2 min-w-[150px] md:min-w-[250px] ${activeItineraryDay === index ? 'border-t-neutral-800 border-t-2' : ''}`} 
                                                    onClick={() => setActiveItineraryDay(index)}>
                                                        <h1 className="text-neutral-900 font-semibold text-base">{`${t('day').toUpperCase()} ${index + 1}`}</h1>
                                                        <h2 className="text-neutral-800 font-normal text-[10px]">{day.title}</h2>
                                                    </div>
                                            ))
                                            : tour.en.itinerary.map((day, index) => (
                                                <div key={index} className={`flex gap-2 flex-col items-center justify-center text-center snap-center cursor-pointer
                                                border border-neutral-200 py-2 md:py-8 px-2 min-w-[150px] md:min-w-[250px] ${activeItineraryDay === index ? 'border-t-neutral-800 border-t-2' : ''}`} 
                                                onClick={() => setActiveItineraryDay(index)}>
                                                    <h1 className="text-neutral-900 font-semibold text-base">{`Day ${index + 1}`}</h1>
                                                    <h2 className="text-neutral-800 font-normal text-[10px]">{day.title}</h2>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <button className={`absolute left-0 top-0 z-20 w-[15%] md:w-[6%] h-full bg-white flex items-center justify-center
                                    border border-neutral-200 hover:border-neutral-600 transition-all duration-200
                                    ${sliderScrollPos === 0 ? "hidden" : ""}`} onClick={scrollSliderLeft}>
                                            <Image src={arrowDown} alt="arrow icon" className="rotate-90"/>
                                    </button>
                                    <button className={`absolute inset-0 ml-auto z-20 w-[15%] md:w-[6%] h-full bg-white flex items-center justify-center
                                    border border-neutral-200 hover:border-neutral-600 transition-all duration-200
                                    ${atSliderEnd ? "hidden" : ""}`} onClick={scrollSliderRight}>
                                            <Image src={arrowDown} alt="arrow icon" className="rotate-[270deg]"/>
                                    </button>
                                </div>
                                <div className="p-6 flex gap-6 flex-col">
                                    <h1 className="text-neutral-900 font-semibold text-base md:text-xl">
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
                                                            ? <p className={`text-neutral-900 font-normal ${activity.time ? 'text-base' : 'text-lg font-medium'} `}>
                                                            {activity.description}
                                                            </p>
                                                            : <div className="flex gap-2 flex-col">
                                                                <h1 className="text-neutral-900 font-normal text-base">{activity.description.heading}</h1>
                                                                <ul className="flex gap-1 flex-col list-inside list-disc">
                                                                    {activity.description.bulletPoints.map((point, index) => 
                                                                        <li className="text-neutral-900 font-normal text-sm" key={index}>{point}</li>
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
                </main>
                
                {/* book form */}
                <div className={`z-40 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-white rounded-[30px] p-4 md:p-12 shadow-card-bold
                    ${bookFormVisible ? "fixed" : "hidden"} w-form`} ref={bookFormRef}>
                        {/* iframe to prevent reloading */}
                        <iframe name="frame" className="hidden"></iframe>

                        {/* send message to email using formsubmit.co */}
                        <form className="mx-auto flex flex-col gap-2 md:gap-6 px-2 md:px-8 md:py-4" action="https://formsubmit.co/f014aa1b902d62b9fceb94b24be012c5" 
                            method="POST" target="frame" onSubmit={e => showPopUp(e)}>
                                <h1 className="text-neutral-900 font-semibold text-xl md:text-[2rem] md:leading-10 text-center">
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

                {/* price chart */}
                <div className={`z-40 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-white rounded-xl md:rounded-[30px] p-4 md:p-12 shadow-card-bold
                    ${priceChartVisible ? "fixed" : "hidden"} w-price-chart overflow-scroll scrollbar-hide p-12`} ref={priceChartRef}>
                    <table {...getTableProps()} className="w-full text-center rounded-xl overflow-hidden shadow-even">
                        <thead className="bg-primary-dark border-b text-neutral-100">
                            {
                                headerGroups.map((headerGroup) => (
                                    <>
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {
                                                headerGroup.headers.map(column => (
                                                    <>
                                                        <th {...column.getHeaderProps()} className="py-4 px-10">
                                                            {column.render('Header')}
                                                        </th>
                                                    </>
                                                ))
                                            }
                                        </tr>
                                    </>
                                ))
                            }
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row);
                                return (
                                    <>
                                        <tr {...row.getRowProps()} className='border-b bg-white'>
                                            {
                                                row.cells.map(cell => (
                                                    <>
                                                        <td {...cell.getCellProps()} className="py-4 px-10">
                                                            {cell.render('Cell')}
                                                        </td>
                                                    </>
                                                ))
                                            }
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                {/* pop up appears when successfully submit form */}
                <div className={`fixed right-1/2 translate-x-1/2 px-8 py-4 rounded-2xl z-50
                    bg-white dark:bg-semi-black transition-all duration-300 pointer-events-none 
                        ${ popUpVisible ? 'bottom-12 opacity-100' : 'opacity-0 bottom-0'} shadow-card-bold`}>
                    <h1 className="text-neutral-800 font-semibold text-base leading-none z-30">
                        {t('formThanks')} 
                    </h1>
                </div>

                <div className={`fixed inset-0 bg-filter-dark w-screen h-screen z-30 ${darkFilterVisible ? '' : 'hidden'}`}></div>
                <Footer/>
            </div>
        </div>
    )
}

export default PartnerTourDetails;