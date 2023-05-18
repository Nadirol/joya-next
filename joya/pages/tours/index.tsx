import Contact from '@/components/contact/Contact'
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400","500","600"],
  subsets: ["latin","vietnamese"]
});

import { useTranslation } from "next-i18next"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Grandtours from '@/components/main/Grandtours';
import Head from 'next/head';
import DayTours from '@/components/main/DayTours';
import AbroadTours from '@/components/main/AbroadTours';

export default function Tours() {
  const { t } = useTranslation('common');

  return (
    <>
    <Head>
      <title>{t('tours')}</title>
    </Head>
    <div className={plusJakartaSans.className}>
      <Header t={t}/>
      <main className="w-container mx-auto flex gap-8 md:gap-12 xl:gap-16 flex-col mb-8 relative mt-12">
        <Grandtours t={t}/>
        <DayTours t={t}/>
        <AbroadTours t={t}/>
        <Contact t={t}/>

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
