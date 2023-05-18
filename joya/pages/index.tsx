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
import Head from 'next/head';
import AbroadTours from '@/components/main/AbroadTours';
import Values from '@/components/main/Values';
import Script from 'next/script';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
    <Head>
      <title>Joya Traveling</title>
    </Head>
    <div className={plusJakartaSans.className}>

      <Header t={t}/>
      <main className="w-container mx-auto flex gap-8 md:gap-12 xl:gap-16 flex-col mb-8 relative md:mt-12">
        <Banner t={t}/>
        <Categories t={t}/>
        <Grandtours t={t}/>
        <DayTours t={t}/>
        <Values t={t}/>
        <AbroadTours t={t}/>
        <ThemeTour t={t}/>
        <CustomTours t={t}/>
        <ContactBanner t={t}/>
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
