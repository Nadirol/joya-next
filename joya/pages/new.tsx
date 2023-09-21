import Banner from '@/components/main/Banner'

import { Jaldi } from 'next/font/google';

const jaldi = Jaldi({
  weight: ["400","700"],
  subsets: ["latin"]
});

import { useTranslation } from "next-i18next"
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@/components/New/Header'
import Footer from '@/components/Footer'
import DayTours from '@/components/main/DayTours';
import CustomTours from '@/components/main/CustomTours';
import ThemeTour from '@/components/main/ThemeTours';
import ContactBanner from '@/components/main/ContactBanner';
import AbroadTours from '@/components/main/AbroadTours';
import Values from '@/components/main/Values';
import { NextSeo } from 'next-seo';
import ScrollToTopButton from '@/components/buttons/ScrollToTopButton';
import Events from '@/components/main/Events';
import CallWidget from '@/components/buttons/CallWidget';
import ZaloWidget from '@/components/buttons/ZaloWidget';
import Script from 'next/script';
import NavBar from '@/components/New/NavBar';
import Specials from '@/components/New/Tours/Specials';
import Categories from '@/components/New/Tours/Categories';
import Service from '@/components/New/Service';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
    <NextSeo
      title='Joya Traveling'
      description='Joya is a traveling agency that specializes in providing high-quality travel services to companies and corporates, as well as to high-end profiles.'
      canonical="https://www.joyatravel.vn/vi"
    />
    <Script
      strategy="lazyOnload"
      src="https://embed.tawk.to/64c9d2bf94cf5d49dc67e2ea/1h6q5ufsc"
    />

    <div className={jaldi.className}>

      <Header t={t}/>
      <NavBar t={t}/>
      <main className="flex flex-col mb-8 relative z-10">
        <Banner t={t}/>
        <Specials t={t}/>
        <Categories t={t}/>
        <Service t={t}/>
        <Values t={t}/>

        <ContactBanner t={t}/>
        <Events t={t}/>
        <ScrollToTopButton/>
        <CallWidget t={t}/>
        <ZaloWidget t={t}/>

      </main>
      <Footer/>
    </div>
    </>
  )
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
}
