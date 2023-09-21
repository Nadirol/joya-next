
import { TFunction, i18n } from "next-i18next";

const Header = ({ t }: { t: TFunction }) => {

    return (
        <header className="relative z-10">
          <div className="bg-primary-light py-2 flex items-center justify-center">
            <div className="w-container flex gap-24 items-center justify-center">
              <div className="flex gap-2 items-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.6 24C23 24 23.3333 23.8667 23.6 23.6C23.8667 23.3333 24 23 24 22.6V17.2C24 16.8889 23.9 16.6164 23.7 16.3827C23.5 16.1489 23.2444 15.9991 22.9333 15.9333L18.3333 15C18.0222 14.9556 17.7053 14.9836 17.3827 15.084C17.06 15.1844 16.7991 15.3342 16.6 15.5333L13.4667 18.6667C11.7778 17.6444 10.2333 16.4333 8.83333 15.0333C7.43333 13.6333 6.26667 12.1333 5.33333 10.5333L8.53333 7.26667C8.73333 7.06667 8.86133 6.83867 8.91733 6.58267C8.97333 6.32667 8.97867 6.04356 8.93333 5.73333L8.06667 1.06667C8.02222 0.755556 7.87778 0.5 7.63333 0.3C7.38889 0.0999999 7.11111 0 6.8 0H1.4C0.999998 0 0.666664 0.133333 0.399998 0.4C0.133331 0.666667 0 1 0 1.4C0 4.26667 0.639111 7.06133 1.91733 9.784C3.19555 12.5067 4.88444 14.9178 6.984 17.0173C9.08356 19.1169 11.4947 20.8058 14.2173 22.084C16.94 23.3622 19.7342 24.0009 22.6 24Z" 
                  className="fill-white"/>
                </svg>
                <a target="_blank" href="https://zalo.me/0985041369" className="text-sm font-bold text-white">
                  + (84) 985 041 369
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <svg width="12" height="10" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.8 39.2C3.48 39.2 2.3496 38.7296 1.4088 37.7888C0.468004 36.848 -0.00159593 35.7184 4.0747e-06 34.4V5.60005C4.0747e-06 4.28005 0.470404 3.14965 1.4112 2.20885C2.352 1.26805 3.4816 0.798453 4.8 0.800053H43.2C44.52 0.800053 45.6504 1.27045 46.5912 2.21125C47.532 3.15205 48.0016 4.28165 48 5.60005V34.4C48 35.72 47.5296 36.8504 46.5888 37.7912C45.648 38.732 44.5184 39.2016 43.2 39.2H4.8ZM24 22.4L43.2 10.4001V5.60005L24 17.6L4.8 5.60005V10.4001L24 22.4Z"
                  className="fill-white"/>
                </svg>

                <h6 className="font-bold text-sm text-white">
                  sales@joyatravel.vn
                </h6>
              </div>

              <a href={i18n?.language === 'en' ? "/assets/JOYA_Catalogue_EN.pdf" : "/assets/JOYA_Catalogue_VN.pdf" } 
              target="_blank" 
              className="bg-white py-1 rounded-[30px] text-primary-light hover:text-white
              font-bold text-sm relative before:absolute before:z-0 
              before:bg-primary-regular before:w-full before:h-full flex items-center
              [&:hover]:before:translate-x-0 before:translate-x-[-125%] overflow-hidden
              before:transition-transform transition-[color] duration-75">
                  <span className="relative z-10 px-10">
                    {t('downloadCatalogue')}
                  </span>
              </a>
            </div>
          </div>
        </header>
    )
};

export default Header;