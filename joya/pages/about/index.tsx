import About from '@/components/about/About'
import Catalogue from '@/components/about/Catalogue'
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
import Head from 'next/head';

export default function AboutPage() {
  const { t } = useTranslation('common');

  return (
    <>
    <Head>
      <title>{t('about')}</title>
    </Head>
    <div className={plusJakartaSans.className}>
      <Header t={t}/>
      <main className="w-container mx-auto flex gap-8 md:gap-12 xl:gap-16 flex-col mb-8 relative mt-12">
        <About t={t}/>
        <Catalogue t={t}/>
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
