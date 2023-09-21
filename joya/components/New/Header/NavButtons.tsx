import { glassIcon, globeIcon, menuIcon } from "@/public/assets";
import { TFunction, i18n } from "next-i18next"
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import DarkFilter from "./DarkFilter";

const useClickDetector = (ref: React.MutableRefObject<HTMLDivElement | null>, func: () => void, secondRef: React.MutableRefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target) && !secondRef.current?.contains(event.target)) {
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

const NavButtons = ({ t }: { t: TFunction}) => {
    const [lngDropdownOpened, setLngDropdownOpened] = useState(false);
    const dropdownRef = useRef(null);
    const languageButtonRef = useRef(null);
    const hideDropdown = () => {
      setLngDropdownOpened(false)
    }

    useClickDetector(languageButtonRef, hideDropdown, dropdownRef);

    const [sidenavOpened, setSidenavOpened] = useState(false);

    const router = useRouter();
    
    const changeLanguage = (lng: string) => {
      i18n?.changeLanguage(lng); 
      setLngDropdownOpened(false);
      router.replace(`${router.pathname === '/' ? `/${lng}` : `/${lng}${router.asPath}`}`,undefined, { locale: lng })
    }

    const [searchBarVisible, setSearchBarVisible] = useState(false);

    const showSearchBar = () => {
        setSearchBarVisible(true);
    };

    return (
        <div className="flex items-center -xl:ml-auto">
            <div className="relative border-r pr-6">
                <div className="flex gap-4 items-center cursor-pointer" 
                onClick={() => setLngDropdownOpened(prevState => !prevState)} ref={languageButtonRef}>
                    <Image src={globeIcon} alt="globe icon" />
                    <h1 className="text-neutral-900 font-medium text-base leading-5">{lngs.get(i18n?.language || "vi")?.nativeLanguage}</h1>

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

            <button className="pl-6"onClick={showSearchBar}>
                <Image src={glassIcon} alt="magnifying glass icon" />
            </button>

            <button onClick={() => setSidenavOpened(true)} className="xl:hidden">
                <Image src={menuIcon} alt="menu icon" className="w-6 aspect-square"/>
            </button>

            <SearchBar 
                t={t} 
                searchBarVisible={searchBarVisible} 
                setSearchBarVisible={setSearchBarVisible}
                showSearchBar={showSearchBar}
            />

            <DarkFilter
                sidenavOpened={sidenavOpened}
                searchBarVisible={searchBarVisible}
            />
        </div>
    )
};

export default NavButtons;