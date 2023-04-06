'use client';

// @ts-nocheck

import { heroPrivate } from "@/public/assets";
import { TFunction } from "i18next";
import Image from "next/image";

import { useState } from "react";

const CustomTours = ({ t }: { t: TFunction }) => {
    const [idealTourDurationValue, setIdealTourDurationValue] = useState('');
    const [yourBudgetValue, setYourBudgetValue] = useState('');
    const [phoneNumberValue, setPhoneNumberValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
  
    const handleIdealTourDurationChange = (e: any) => {
        setIdealTourDurationValue(e.target.value)
    };
  
    const handleYourBudgetChange = (e: any) => {
        setYourBudgetValue(e.target.value)
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
  
  
    const [popUpVisible, setPopUpVisible] = useState(false);
    const showPopUp = (e: any) => {
  
        setPopUpVisible(prevState => !prevState)
        setTimeout(() => {
            setPopUpVisible(prevState => !prevState)
        }, 2000)
  
        setTimeout(() => {
            setIdealTourDurationValue('');
            setYourBudgetValue('');
          setPhoneNumberValue('');
          setEmailValue('');
          setMessageValue('');
        }, 200)
    }

    return (
        <div id="contact" className="w-container mx-auto grid -xl:gap-16 grid-rows-1 xl:grid-cols-contact">
          <Image src={heroPrivate} alt="hero image" className="m-auto"/>

          {/* iframe to prevent reloading */}
          <iframe name="frame" className="hidden"></iframe>

          {/* send message to email using formsubmit.co */}
          <form className="mx-auto flex flex-col gap-6 shadow-card-bold rounded-[30px] px-4 md:px-8 xl:px-[3.75rem] py-7" 
            action="https://formsubmit.co/8015104ab30fce20360f57b9f6f6ee16" 
            method="POST" target="frame" onSubmit={e => showPopUp(e)}>
                <div className="flex gap-3 flex-col text-center">
                    <h1 className="text-neutral-900 font-semibold text-2xl md:text-[2rem] md:leading-10 ">{t('bookCustomTour')}</h1>
                    <h2 className="text-neutral-700 font-normal text-xs ">{t('customTourFormHeading2')}</h2>
                </div>

                <div className="flex gap-7 -md:flex-col">
                    <div className="flex gap-2 flex-col">
                        <label htmlFor="" className="text-neutral-800 font-medium text-base">{t('phoneNumber')}</label>
                        <input type="text" name="Phone Number" placeholder={t('phoneNumberPlaceholder')} value={phoneNumberValue} onChange={(e) => handlePhoneNumberChange(e)}
                        className="w-input-field px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <label htmlFor="" className="text-neutral-800 font-medium text-base">{t('email')}</label>
                        <input type="email" name="Email" placeholder={t('emailPlaceholder')} required value={emailValue} onChange={(e) => handleEmailChange(e)}
                        className="w-input-field px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                    </div>
                </div>
                <div className="flex gap-2 flex-col">
                    <h1 className="text-neutral-600 font-normal text-xs">{t('customTourFormNote')}</h1>
                    <label htmlFor="message" className="text-neutral-800 font-medium text-base">{t('message')}</label>
                    <textarea id="message" name="Message" placeholder={t('messagePlaceholder')} rows="4" value={messageValue} onChange={(e) => handleMessageChange(e)}
                        className="w-full px-6 py-3 border border-neutral-500 rounded-2xl placeholder:text-xs text-base">
                    </textarea>
                </div>
                <div className="flex gap-7 -md:flex-col">
                    <div className="flex gap-2 flex-col">
                        <label htmlFor="" className="text-neutral-800 font-medium text-base">{t('idealTourDuration')}</label>
                        <input type="text" name="Phone Number" placeholder={t('idealTourDurationPlaceholder')} value={idealTourDurationValue} onChange={(e) => handleIdealTourDurationChange(e)}
                        className="w-input-field px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <label htmlFor="" className="text-neutral-800 font-medium text-base">{t('yourBudget')}</label>
                        <input type="email" name="Email" placeholder={t('yourBudgetPlaceholder')} required value={yourBudgetValue} onChange={(e) => handleYourBudgetChange(e)}
                        className="w-input-field px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                    </div>
                </div>
                <input type="submit" value={t('send')}
                className="bg-primary-extra-light hover:bg-primary-light w-fit cursor-pointer text-neutral-900 
                font-medium text-xl px-12 py-2.5 rounded-[1.125rem] mx-auto"/>
                {/* prevent capcha */}
                <input type="hidden" name="_captcha" value="false"/>
                {/* add multiple email address that the form can send to */}
                <input type="hidden" name="_cc" value="khanhduycb1510@gmail.com,kristalz248@gmail.com,kristalz931@gmail.com"/>
            </form>

            {/* pop up appears when successfully submit form */}
            <div className={`fixed right-1/2 translate-x-1/2 px-8 py-4 rounded-2xl z-30
                bg-white dark:bg-semi-black transition-all duration-300 pointer-events-none 
                    ${ popUpVisible ? 'bottom-12 opacity-100' : 'opacity-0 bottom-0'} shadow-card-bold`}>
                <h1 className="text-neutral-800 font-semibold text-base leading-none z-30">
                Your Message is sent. Thanks For contacting with us! 
                </h1>
            </div>
        </div>
    )
};

export default CustomTours;