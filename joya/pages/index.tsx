import Banner from '@/components/main/Banner'

import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400","500","600"],
  subsets: ["latin","vietnamese"]
});

import { useTranslation } from "next-i18next"
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Categories from '@/components/main/Categories';
import Grandtours from '@/components/main/Grandtours';
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
import Head from 'next/head';
import ZaloWidget from '@/components/buttons/ZaloWidget';
import Script from 'next/script';

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

    <div className={plusJakartaSans.className}>

      <Header t={t}/>
      <main className="flex gap-8 md:gap-12 xl:gap-16 flex-col mb-8 relative md:mt-12">
        <Banner t={t}/>
        <Categories t={t}/>
        <Grandtours t={t}/>
        <DayTours t={t}/>
        <Values t={t}/>
        <AbroadTours t={t}/>
        <ThemeTour t={t}/>
        <CustomTours t={t}/>
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
