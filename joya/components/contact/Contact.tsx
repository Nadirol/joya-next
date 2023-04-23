'use client';

// @ts-nocheck

import { phoneIcon, mailIcon, locationIcon, facebookIcon, instagramIcon, logoLightLarge } from "@/public/assets";
import { TFunction } from "i18next";
import Image from "next/image";
import Link from "next/link";

import { useRef, useState } from "react";

const contactEmails = 'quynhnt88@gmail.com,floris.panico@yahoo.co.uk,Nguyenthuy1095@gmail.com';

const Contact = ({ t }: { t: TFunction }) => {
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

          setEmailWarning('');
        }, 200)
      }

      return emailValid;
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

    return (
        <div id="contact" className="w-container mx-auto grid -xl:gap-16 grid-rows-1 xl:grid-cols-contact place-items-center 
          px-4 md:px-8 xl:px-[3.75rem] py-7 shadow-card-bold rounded-[30px]">
          <div className="h-full flex -xl:gap-6 flex-col justify-between">
            <Image src={logoLightLarge} alt="brand logo" className="w-[7.5rem] aspect-square mx-auto"/>
            <div className="flex gap-6 flex-col -xl:items-center -xl:text-center">
              <div className="flex gap-4">
                <Image src={phoneIcon} alt="phone icon" />
                <div className="flex  flex-col">
                  <h1 className="text-neutral-800 font-regular text-base xl:text-lg">ENG: 0379748073</h1>
                  <h1 className="text-neutral-800 font-regular text-base xl:text-lg">VN: 0985080324</h1>
                </div>
              </div>
              <div className="flex gap-4">
                <Image src={mailIcon} alt="phone icon" />
                <h1 className="text-neutral-800 font-regular text-base xl:text-lg">sales@joyatravel.vn</h1>
              </div>
              <div className="flex gap-4">
                <Image src={locationIcon} alt="phone icon" />
                <h1 className="text-neutral-800 font-regular text-base xl:text-lg">
                  {t('addressDetails')}
                </h1>
              </div>
            </div>
            <div className="flex gap-[1.125rem] flex-col text-center items-center">
              <h1 className="text-neutral-900 font-medium text-2xl">Socials</h1>
              <div className="flex gap-6">
                <Link href="https://www.facebook.com/JOYA.TravelAgency" target="_blank">
                  <Image src={facebookIcon} alt="facebook logo" />
                </Link>
                <Link href="https://www.instagram.com/joya.travelagency/" target="_blank">
                  <Image src={instagramIcon} alt="instagram logo" />
                </Link>
              </div>
            </div>
          </div>

          {/* iframe to prevent reloading */}
          <iframe name="frame" className="hidden"></iframe>

          {/* send message to email using formsubmit.co */}
          <form className="mx-auto flex flex-col gap-6" action="https://formsubmit.co/f014aa1b902d62b9fceb94b24be012c5" 
            method="POST" target="frame" onSubmit={e => showPopUp(e)}>
                <h1 className="text-neutral-900 font-semibold text-2xl md:text-[2rem] md:leading-10 text-center">{t('sendAMessage')}</h1>
                <div className="flex gap-7 -md:flex-col w-full">
                <div className="flex gap-2 flex-col">
                    <label className="text-neutral-800 font-medium text-base">{t('firstName')}</label>
                    <input type="text" name="First Name" placeholder={`${t('firstNamePlaceholder')}`} required 
                    value={firstNameValue} onChange={(e) => handleFirstNameChange(e)}
                    className="w-input-field px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                </div>
                <div className="flex gap-2 flex-col">
                    <label htmlFor="" className="text-neutral-800 font-medium text-base">{t('lastName')}</label>
                    <input type="text" name="Last Name" placeholder={`${t('lastNamePlaceholder')}`} 
                    value={lastNameValue} onChange={(e) => handleLastNameChange(e)}
                    className="w-input-field px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                </div>
                </div>
                <div className="flex gap-7 -md:flex-col">
                <div className="flex gap-2 flex-col">
                    <label htmlFor="" className="text-neutral-800 font-medium text-base">{t('phoneNumber')}</label>
                    <input type="number" name="Phone Number" placeholder={`${t('phoneNumberPlaceholder')}`} 
                    value={phoneNumberValue} onChange={(e) => handlePhoneNumberChange(e)}
                    className="w-input-field px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                </div>
                <div className="flex gap-2 flex-col">
                    <label htmlFor="" className="text-neutral-800 font-medium text-base">{t('email')}</label>
                    <input type="email" name="Email" placeholder={`${t('emailPlaceholder')}`} required 
                    value={emailValue} onChange={(e) => handleEmailChange(e)} ref={emailInputRef} onInput={validate}
                    className="w-input-field px-6 py-2 border border-neutral-500 rounded-2xl placeholder:text-xs text-base"/>
                    <p className={`${emailValid ? 'text-green-600' : 'text-red-500'} font-normal text-[8px] md:text-xs`}>
                      {emailWarning}
                    </p>
                </div>
                </div>
                <div className="flex gap-2 flex-col">
                <label htmlFor="message" className="text-neutral-800 font-medium text-base">{t('message')}</label>
                <textarea id="message" name="Message" placeholder={`${t('messagePlaceholder')}`} rows={4} 
                value={messageValue} onChange={(e) => handleMessageChange(e)}
                    className="w-full px-6 py-3 border border-neutral-500 rounded-2xl placeholder:text-xs text-base">
                </textarea>
                </div>
                <input type="submit" value={`${t('send')}`}
                className="bg-primary-extra-light hover:bg-primary-light w-fit cursor-pointer text-neutral-900 
                font-medium text-xl px-12 py-2.5 rounded-[1.125rem] mx-auto"/>
                {/* prevent capcha */}
                <input type="hidden" name="_captcha" value="false"/>
                {/* add multiple email address that the form can send to */}
                <input type="hidden" name="_cc" value={contactEmails}/>
                </form>

            {/* pop up appears when successfully submit form */}
            <div className={`fixed right-1/2 translate-x-1/2 px-8 py-4 rounded-2xl z-30
                bg-white dark:bg-semi-black transition-all duration-300 pointer-events-none 
                    ${ popUpVisible ? 'bottom-12 opacity-100' : 'opacity-0 bottom-0'} shadow-card-bold`}>
                <h1 className="text-neutral-800 font-semibold text-base leading-none z-30">
                  {t('formThanks')} 
                </h1>
            </div>
        </div>
    )
};

export default Contact;