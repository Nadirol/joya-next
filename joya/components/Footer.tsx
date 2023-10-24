'use client';

import { logoLight, planeIcon } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { i18n, useTranslation } from 'next-i18next';
import { useRef, useState } from "react";

const Footer = () => {
    const { t } = useTranslation();

    const [emailValue, setEmailValue] = useState('');

    const handleEmailChange = (e: any) => {
        setEmailValue(e.target.value);
    };

    const [popUpVisible, setPopUpVisible] = useState(false);
    const showPopUp = (e: any) => {
  
        if (emailValid) {
          setPopUpVisible(prevState => !prevState)
          setTimeout(() => {
              setPopUpVisible(prevState => !prevState)
          }, 2000)
    
          setTimeout(() => {

            setEmailValue('');
          }, 200)
        }

        return emailValid;
    };

    const emailInputRef = useRef(null);

    const [emailWarning, setEmailWarning] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    
    const validateEmail = (email: string) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validate = (e: React.FormEvent<HTMLInputElement>) => {
        const email = e?.currentTarget.value
      if (email && validateEmail(email)) {
        setEmailValid(true);
        setEmailWarning(`${email} is valid`)
      } else if (email) {
        setEmailValid(false);
        setEmailWarning(`${email} is not valid`)
      } else {
        setEmailWarning('')
      }

      return false
    };
    return (

        <div className="relative z-[1] text-neutral-900">
            <div className="w-container mx-auto py-12 xl:py-20 flex	items-start justify-between
                 -xl:gap-8 -xl:flex-col border-b border-neutral-300">
                <div className="flex gap-5 flex-col -xl:items-center">
                    <div className="flex gap-3 flex-col items-start">
                        <Link href="/" className="-xl:mx-auto w-fit">
                            <Image src={logoLight} alt="brand logo" className="w-[6rem]"/>
                        </Link>
                        <h1 className="font-bold text-xs text-primary-regular">JOYA JOINT STOCK COMPANY</h1>
                    </div>

                    <div className="flex gap-4 flex-col items-start">
                        <h4 className="text-xl">
                            {t('needHelp')}
                        </h4>

                        <a target="_blank" href="https://zalo.me/0985041369" 
                        className="text-primary-light font-bold text-3xl">
                            + (84) 985 041 369
                        </a>

                        <h3 className="text-xl w-[250px]">
                            {t('addressDetails')}
                        </h3>

                        <h3 className="text-xl">sales@joyatravel.vn</h3>
                    </div>

                    <div className="flex gap-6 [&>a>svg>path]:fill-primary-light -xl:mx-auto">
                        <Link href="https://www.facebook.com/JOYA.TravelAgency" target="_blank">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36 18.0451C36 8.08421 27.936 0 18 0C8.064 0 0 8.08421 0 18.0451C0 26.7789 6.192 34.0511 14.4 35.7293V23.4586H10.8V18.0451H14.4V13.5338C14.4 10.0511 17.226 7.21804 20.7 7.21804H25.2V12.6316H21.6C20.61 12.6316 19.8 13.4436 19.8 14.4361V18.0451H25.2V23.4586H19.8V36C28.89 35.0977 36 27.4105 36 18.0451Z" fill="#484747"/>
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com/joya.travelagency/" target="_blank">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.44 0H25.56C31.32 0 36 4.68 36 10.44V25.56C36 28.3289 34.9001 30.9843 32.9422 32.9422C30.9843 34.9001 28.3289 36 25.56 36H10.44C4.68 36 0 31.32 0 25.56V10.44C0 7.67114 1.09993 5.01569 3.05781 3.05781C5.01569 1.09993 7.67114 0 10.44 0ZM10.08 3.6C8.3614 3.6 6.71318 4.28271 5.49795 5.49795C4.28271 6.71318 3.6 8.3614 3.6 10.08V25.92C3.6 29.502 6.498 32.4 10.08 32.4H25.92C27.6386 32.4 29.2868 31.7173 30.5021 30.5021C31.7173 29.2868 32.4 27.6386 32.4 25.92V10.08C32.4 6.498 29.502 3.6 25.92 3.6H10.08ZM27.45 6.3C28.0467 6.3 28.619 6.53705 29.041 6.95901C29.4629 7.38097 29.7 7.95326 29.7 8.55C29.7 9.14674 29.4629 9.71903 29.041 10.141C28.619 10.5629 28.0467 10.8 27.45 10.8C26.8533 10.8 26.281 10.5629 25.859 10.141C25.437 9.71903 25.2 9.14674 25.2 8.55C25.2 7.95326 25.437 7.38097 25.859 6.95901C26.281 6.53705 26.8533 6.3 27.45 6.3ZM18 9C20.3869 9 22.6761 9.94821 24.364 11.636C26.0518 13.3239 27 15.6131 27 18C27 20.3869 26.0518 22.6761 24.364 24.364C22.6761 26.0518 20.3869 27 18 27C15.6131 27 13.3239 26.0518 11.636 24.364C9.94821 22.6761 9 20.3869 9 18C9 15.6131 9.94821 13.3239 11.636 11.636C13.3239 9.94821 15.6131 9 18 9ZM18 12.6C16.5678 12.6 15.1943 13.1689 14.1816 14.1816C13.1689 15.1943 12.6 16.5678 12.6 18C12.6 19.4322 13.1689 20.8057 14.1816 21.8184C15.1943 22.8311 16.5678 23.4 18 23.4C19.4322 23.4 20.8057 22.8311 21.8184 21.8184C22.8311 20.8057 23.4 19.4322 23.4 18C23.4 16.5678 22.8311 15.1943 21.8184 14.1816C20.8057 13.1689 19.4322 12.6 18 12.6Z" fill="#484747"/>
                            </svg>                   
                        </Link>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <h3 className="text-2xl tracking-[0.05rem]">
                        {t('ourAgency').toUpperCase()}
                    </h3>

                    <div className="text-neutral-700 flex gap-3 flex-col text-xl">
                        <h4>
                            {t('aboutUs')}
                        </h4>
                        <h4>
                            {t('visaService')}
                        </h4>
                        <h4>
                            {t('Policies')}
                        </h4>
                        <h4>
                            {t('Payment')}
                        </h4>
                    </div>
                </div>

                <div className="flex gap-5 flex-col">
                    <h3 className="text-2xl tracking-[0.05rem]">
                        {t('ourNewsletters').toUpperCase()}
                    </h3>

                    <p className="text-neutral-700 text-xl">
                        {t('newsletterParagraph')}
                    </p>

                    {/* iframe to prevent reloading */}
                    <iframe name="frame" className="hidden"></iframe>
                    {/* send message to email using formsubmit.co */}
                    <form className="w-full" action="https://formsubmit.co/f014aa1b902d62b9fceb94b24be012c5" 
                        method="POST" target="frame" onSubmit={e => showPopUp(e)}>
                            <div className="flex gap-2 flex-col">
                                <div className={`flex border-2 border-neutral-900 items-center pr-4
                                ${emailValue.length && (emailValid ? 'focus-within:border-green-600' : 'focus-within:border-red-500')}`}>
                                    <input type="email" name="Email" placeholder={t('emailPlaceholder') || "youremail@domain.com"} 
                                    required value={emailValue} 
                                    onChange={handleEmailChange} onInput={validate} ref={emailInputRef}
                                    className="w-full px-6 py-4 placeholder:text-xs text-base bg-transparent
                                    placeholder:text-neutral-700 text-neutral-900 outline-0" />
                                    <button type="submit">
                                        <Image src={planeIcon} alt="" />
                                    </button>
                                </div>
                            </div>

                            {/* prevent capcha */}
                            <input type="hidden" name="_captcha" value="false"/>
                            {/* add multiple email address that the form can send to */}
                            {/* <input type="hidden" name="_cc" value={contactEmails}/> */}
                    </form>

                    {/* pop up appears when successfully submit form */}
                    <div className={`fixed right-1/2 translate-x-1/2 px-8 py-4 z-30
                        bg-white dark:bg-semi-black transition-all duration-300 pointer-events-none 
                            ${ popUpVisible ? 'bottom-12 opacity-100' : 'opacity-0 bottom-0'} shadow-card-bold`}>
                        <h1 className="text-neutral-800 font-semibold text-base leading-none z-30">
                        {t('popUpText')} 
                        </h1>
                    </div>
                </div>
    
            </div>
            <div className="w-container mx-auto text-center py-4">
                <h1>JOYA © 2023 All Rights Reserved.</h1>
            </div>
        </div>
    )
};

export default Footer;