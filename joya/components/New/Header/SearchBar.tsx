import { TFunction } from "next-i18next"
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from "react";

type Props = {
    t: TFunction,
    searchBarVisible: boolean,
    setSearchBarVisible: Dispatch<SetStateAction<boolean>>,
    showSearchBar: () => void
}

const useClickDetector = (refs: React.MutableRefObject<HTMLDivElement | null>[], func: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (!refs.some(ref => ref.current?.contains(event.target))) {
                func()
            }
        }
  
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    },[refs[0]])
};

const SearchBar = ({ t, searchBarVisible, setSearchBarVisible, showSearchBar }: Props) => {

    const hideSearchBar = () => {
      setSearchBarVisible(false);
    };

    const submitSearch = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    }

    const searchBarRef = useRef(null);

    useClickDetector([searchBarRef], hideSearchBar);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };

    return (
        <div className={`bg-neutral-100 w-screen py-4 md:py-12 flex justify-center items-center fixed 
        ${searchBarVisible ? "top-0" : "top-[-220px]" } transition-[top] duration-500 left-0 z-40`} ref={searchBarRef}>
            <form method="GET" className="flex gap-3 flex-col w-search-section" onSubmit={e => submitSearch(e)}>
                <label htmlFor="#search" className="text-neutral-800 font-semibold text-xl xl:text-2xl">
                {t('search').toUpperCase()}
                </label>
                <div className="flex gap-8 w-full pr-4 md:pr-8">
                <div className="border-b border-neutral-500 focus-within:border-neutral-800 focus-within:border-b-2 
                flex gap-3 items-center py-2 pr-1 w-full relative">
                    <input type="text" id="search" name="Search" value={searchTerm} onChange={e => handleSearchTermChange(e)}
                    className="text-neutral-800 font-normal text-base md:text-2xl outline-none w-full bg-transparent"/>
                    <button onClick={showSearchBar} className="outline-none">
                    <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.5947 33.6376L26.9381 24.9827C29.4471 21.9705 30.6982 18.1069 30.4312 14.1957C30.1642 10.2845 28.3995 6.62678 25.5044 3.9835C22.6092 1.34022 18.8065 -0.0851357 14.8872 0.00393672C10.9679 0.0930092 7.23381 1.68966 4.46173 4.46173C1.68966 7.23381 0.0930092 10.9679 0.00393672 14.8872C-0.0851357 18.8065 1.34022 22.6092 3.9835 25.5044C6.62678 28.3995 10.2845 30.1642 14.1957 30.4312C18.1069 30.6982 21.9705 29.4471 24.9827 26.9381L33.6376 35.5947C33.7661 35.7232 33.9186 35.8251 34.0865 35.8947C34.2544 35.9642 34.4344 36 34.6161 36C34.7978 36 34.9778 35.9642 35.1457 35.8947C35.3136 35.8251 35.4662 35.7232 35.5947 35.5947C35.7232 35.4662 35.8251 35.3136 35.8947 35.1457C35.9642 34.9778 36 34.7978 36 34.6161C36 34.4344 35.9642 34.2544 35.8947 34.0865C35.8251 33.9186 35.7232 33.7661 35.5947 33.6376ZM2.80445 15.2525C2.80445 12.7905 3.53451 10.3838 4.90232 8.33673C6.27013 6.28966 8.21425 4.69416 10.4888 3.752C12.7634 2.80983 15.2663 2.56332 17.681 3.04363C20.0957 3.52394 22.3137 4.7095 24.0546 6.45039C25.7955 8.19128 26.981 10.4093 27.4613 12.824C27.9417 15.2387 27.6951 17.7416 26.753 20.0161C25.8108 22.2907 24.2153 24.2349 22.1683 25.6027C20.1212 26.9705 17.7145 27.7005 15.2525 27.7005C11.9522 27.6969 8.7881 26.3842 6.45444 24.0505C4.12077 21.7169 2.80811 18.5528 2.80445 15.2525Z" fill="#262626"/>
                    </svg>              
                    </button>
                    {(searchTerm.length > 0 && searchBarVisible ) && (
                    <div className="absolute bottom-[-2px] left-0 w-full translate-y-[100%] bg-neutral-100
                    border border-t-0 border-neutral-300 pt-4">
                        <h1 className="text-neutral-500 font-normal text-xs border-b border-neutral-300 mx-4 pb-2">
                        {t('products').toUpperCase()}
                        </h1>
                        {/* <div className={`${searchFilter(products, searchTerm).length > 0 ? "border-b" : "" } border-neutral-300`}>
                        {searchFilter(products, searchTerm).length > 0
                        ? (
                            sliceArray(searchFilter(products, searchTerm), 4).map((p, index) => (
                                <ProductResultCard
                                    key={index}
                                    id={p.id}
                                    image={p.image}
                                    title={p.title}
                                />
                            ))
                            ) 
                        : <></>
                        }
                        </div> */}
                        <button onClick={() => setSearchTerm(searchTerm)}
                        className="flex items-center justify-between px-4 py-6 w-full hover:bg-neutral-200">
                        <h3 className="text-neutral-500 font-normal text-base">
                            {`${t('searchFor')} "${searchTerm}"`}
                        </h3>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" fill="#525252"/>
                        </svg>                    
                        </button>

                    </div>
                    )}

                </div>

                <button onClick={hideSearchBar} type="button" className="outline-none">
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 20L0 18L8 10L0 2L2 0L10 8L18 0L20 2L12 10L20 18L18 20L10 12L2 20Z" fill="#262626"/>
                    </svg>              
                </button>
                </div>

            </form>
        </div>
    )
};

export default SearchBar;