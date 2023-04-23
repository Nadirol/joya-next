'use client';

// @ts-nocheck
import { logoLight, menuIcon, closeIcon, homeIcon, aboutIcon, planeIcon, phoneIcon, logoLightLarge, } from "@/public/assets"

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { TFunction, i18n } from "next-i18next";

// run function when clicking outside of ref
const useClickDetector = (ref: React.MutableRefObject<HTMLDivElement | null>, func: () => void, enabled: boolean) => {
  useEffect(() => {
      const handleClickOutside = (event: any) => {
          if (ref.current && !ref.current.contains(event.target) && enabled) {
              func()
          }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
  },[ref])    
};

const lngs = new Map([
  ['en', { nativeLanguage: 'English' }],
  ['vi', { nativeLanguage: 'Tiếng Việt' }],
]);

const Header = ({ t }: { t: TFunction }) => {
    const [lngDropdownOpened, setLngDropdownOpened] = useState(false);
    const dropdownRef = useRef(null);
    const languageButtonRef = useRef(null);
    const hideDropdown = () => {
      setLngDropdownOpened(false)
    }

    useClickDetector(languageButtonRef, hideDropdown, lngDropdownOpened);

    const [sidenavOpened, setSidenavOpened] = useState(false);

    const router = useRouter();
    console.log(router.asPath)
    const changeLanguage = (lng: string) => {
      i18n?.changeLanguage(lng); 
      setLngDropdownOpened(false);
      router.replace(`${router.pathname === '/' ? `/${lng}` : `/${lng}${router.asPath}`}`,undefined, { locale: lng })
    }

    return (
      <header className="relative -xl:sticky top-0 left-0 z-30">
        <nav className="bg-white flex justify-between items-center w-header 
          mx-auto py-4 xl:py-6 -xl:px-4 relative">
          <Link href={`/${i18n?.language}`}>
            <Image src={logoLight} alt="" className="w-12 md:w-16 aspect-square"/>
          </Link>

          <ul className="hidden xl:flex gap-[5.25rem]">
            <li className="navlink-underline inline-block relative">
              <Link href={`/${i18n?.language}`} className="text-neutral-800 font-medium text-base leading-5 [&:last-child]:mr-0">{t('home')}</Link>
            </li>
            <li className="navlink-underline inline-block relative">
              <Link href={`/${i18n?.language}/about`} className="text-neutral-800 font-medium text-base leading-5">{t('about')}</Link>
            </li>
            <li className="navlink-underline inline-block relative">
              <Link href={`/${i18n?.language}/tours`} className="text-neutral-800 font-medium text-base leading-5">{t('tours')}</Link>
            </li>
            <li className="navlink-underline inline-block relative">
              <Link href={`/${i18n?.language}/contact`} className="text-neutral-800 font-medium text-base leading-5">{t('contact')}</Link>
            </li>
          </ul>

          <div className="flex gap-8 items-center -xl:ml-auto">
            <Link href="/assets/JOYA_Catalogue_EN.pdf" target="_blank" 
            className="hidden xl:block bg-primary-regular hover:bg-primary-dark px-6 py-4 rounded-[30px] text-neutral-100 
            font-semibold text-base leading-5">
              {t('downloadCatalogue')}
            </Link>
            <div className="relative">
              <div className="flex gap-4 items-center cursor-pointer [&:hover>svg>path]:fill-primary-dark" 
              onClick={() => setLngDropdownOpened(prevState => !prevState)} ref={languageButtonRef}>
                <h1 className="text-neutral-800 font-medium text-base leading-5">{i18n?.language.toUpperCase()}</h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.63C11.34 21.63 10.7748 21.39 10.3044 20.91C9.834 20.43 9.5992 19.86 9.6 19.2C9.6 18.54 9.8352 17.9748 10.3056 17.5044C10.776 17.034 11.3408 16.7992 12 16.8L12.72 16.11C12.88 15.95 13.0652 15.8248 13.2756 15.7344C13.486 15.644 13.7008 15.5992 13.92 15.6C14.38 15.6 14.7752 15.77 15.1056 16.11C15.436 16.45 15.6008 16.85 15.6 17.31V17.82C15.6 18.22 15.73 18.55 15.99 18.81C16.25 19.07 16.58 19.2 16.98 19.2C17.28 19.2 17.55 19.11 17.79 18.93C18.03 18.75 18.2 18.52 18.3 18.24L18.66 17.25C18.84 16.77 19.13 16.3748 19.53 16.0644C19.93 15.754 20.39 15.5992 20.91 15.6C21.13 15.04 21.3052 14.46 21.4356 13.86C21.566 13.26 21.6308 12.64 21.63 12C21.63 10.22 21.1852 8.5948 20.2956 7.1244C19.406 5.654 18.2408 4.4992 16.8 3.66V4.8C16.8 5.46 16.5648 6.0252 16.0944 6.4956C15.624 6.966 15.0592 7.2008 14.4 7.2H13.2V9.6C13.2 9.94 13.0848 10.2252 12.8544 10.4556C12.624 10.686 12.3392 10.8008 12 10.8H10.8V12.84C10.8 13.28 10.65 13.65 10.35 13.95C10.05 14.25 9.68 14.4 9.24 14.4C8.96 14.4 8.7048 14.34 8.4744 14.22C8.244 14.1 8.0592 13.93 7.92 13.71L6 10.8H4.8V12C4.8 12.62 4.59 13.15 4.17 13.59C3.75 14.03 3.25 14.29 2.67 14.37C3.19 16.45 4.3152 18.18 6.0456 19.56C7.776 20.94 9.7608 21.63 12 21.63ZM14.4 14.4C14.06 14.4 13.7748 14.2852 13.5444 14.0556C13.314 13.826 13.1992 13.5408 13.2 13.2C13.2 12.86 13.3152 12.5748 13.5456 12.3444C13.776 12.114 14.0608 11.9992 14.4 12H15.6C15.94 12 16.2252 12.1152 16.4556 12.3456C16.686 12.576 16.8008 12.8608 16.8 13.2C16.8 13.54 16.6848 13.8252 16.4544 14.0556C16.224 14.286 15.9392 14.4008 15.6 14.4H14.4ZM17.19 10.8C16.79 10.8 16.4748 10.6452 16.2444 10.3356C16.014 10.026 15.9592 9.6808 16.08 9.3L16.53 7.98C16.61 7.74 16.75 7.55 16.95 7.41C17.15 7.27 17.37 7.2 17.61 7.2C18.01 7.2 18.3252 7.3552 18.5556 7.6656C18.786 7.976 18.8408 8.3208 18.72 8.7L18.27 10.02C18.19 10.26 18.05 10.45 17.85 10.59C17.65 10.73 17.43 10.8 17.19 10.8ZM12 24C10.34 24 8.78 23.6848 7.32 23.0544C5.86 22.424 4.59 21.5692 3.51 20.49C2.43 19.41 1.5752 18.14 0.9456 16.68C0.316 15.22 0.0008 13.66 0 12C0 10.34 0.3152 8.78 0.9456 7.32C1.576 5.86 2.4308 4.59 3.51 3.51C4.59 2.43 5.86 1.5752 7.32 0.9456C8.78 0.316 10.34 0.0008 12 0C13.66 0 15.22 0.3152 16.68 0.9456C18.14 1.576 19.41 2.4308 20.49 3.51C21.57 4.59 22.4252 5.86 23.0556 7.32C23.686 8.78 24.0008 10.34 24 12C24 13.66 23.6848 15.22 23.0544 16.68C22.424 18.14 21.5692 19.41 20.49 20.49C19.41 21.57 18.14 22.4252 16.68 23.0556C15.22 23.686 13.66 24.0008 12 24Z" fill="#484747"/>
                </svg>
              </div>
              <div className={`flex-col ${lngDropdownOpened ? 'flex' : 'hidden' } gap-2 absolute z-20 bg-white shadow-card-bold rounded-xl
                bottom-0 right-1/2 translate-y-[110%] translate-x-1/2 w-fit p-2`} ref={dropdownRef}>
                {Array.from(lngs.keys()).map((lng) => (
                  <button type="submit" key={lng} onClick={() => changeLanguage(lng)} disabled={i18n?.resolvedLanguage === lng}
                    className={`w-[8rem] font-medium ${i18n?.language === lng ? 'text-neutral-700' : 'text-neutral-600'} hover:text-neutral-700`}>
                    
                    {lngs.get(lng)?.nativeLanguage}
    
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => setSidenavOpened(true)} className="xl:hidden">
              <Image src={menuIcon} alt="menu icon" className="w-6 aspect-square"/>
            </button>
          </div>
        </nav>

        <button onClick={() => setSidenavOpened(false)} 
          className={`${sidenavOpened ? 'fixed' : 'hidden'} xl:hidden top-8 md:top-12 right-4 z-30`}>
          <Image src={closeIcon} alt="close icon" className="md:w-6 aspect-square"/>
        </button>
        <div className={`w-sidenav h-screen min-h-full shadow-card-bold fixed right-0 top-0 bg-white z-20 
          ${sidenavOpened ? 'translate-x-0' : 'translate-x-[100%]'} transition-all duration-300
          flex gap-[1.875rem] flex-col items-center py-[3.75rem] mx-auto xl:hidden`}>
          <Link href="/">
            <Image src={logoLightLarge} alt="" className="w-20 aspect-square"/>
          </Link>
          
          <nav className="flex gap-6 flex-col">
            <Link href={`/${i18n?.language}`} className="text-neutral-800 font-medium text-base leading-5 flex gap-2.5" onClick={() => setSidenavOpened(false)}>
              <Image src={homeIcon} alt="home icon" />
              {t('home')}
            </Link>
            <Link href={`/${i18n?.language}/about`} className="text-neutral-800 font-medium text-base leading-5 flex gap-2.5" onClick={() => setSidenavOpened(false)}>
              <Image src={aboutIcon} alt="about icon" />
              {t('about')}
            </Link>
            <Link href={`/${i18n?.language}/tours`} className="text-neutral-800 font-medium text-base leading-5 flex gap-2.5" onClick={() => setSidenavOpened(false)}>
              <Image src={planeIcon} alt="airplane icon" />
              {t('tours')}
            </Link>
            <Link href={`/${i18n?.language}/contact`} className="text-neutral-800 font-medium text-base leading-5 flex gap-2.5 " onClick={() => setSidenavOpened(false)}>
              <Image src={phoneIcon} alt="phone icon" className="w-[1.125rem] aspect-square"/>
              {t('contact')}
            </Link>
          </nav>

          <Link href="/assets/JOYA_Catalogue_EN.pdf" target="_blank" className="bg-primary-dark px-6 py-4 rounded-[30px] text-neutral-100 font-semibold text-base leading-5">
              {t('downloadCatalogue')}
          </Link>
        </div>

      </header>

    )
};

export default Header;