import About from '@/components/main/About'
import Banner from '@/components/main/Banner'
import Contact from '@/components/main/Contact'
import Tours from '@/components/main/Tours'
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

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
    <div className={plusJakartaSans.className}>
      <Header t={t}/>
      <main className="w-container mx-auto flex gap-8 md:gap-12 xl:gap-16 flex-col mb-8 relative">
        <Banner t={t}/>
        <About t={t}/>
        <Tours t={t}/>
        <Contact t={t}/>

        <div>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7665.577618145061!2d105.90124832248152!3d21.045612072524168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab053095a713%3A0x1a50ffd82de75303!2sVinhomes%20Riverside%20The%20Harmony!5e0!3m2!1sen!2s!4v1678784423787!5m2!1sen!2s" 
        height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        className="mx-auto w-container border border-neutral-500">
        </iframe>
        </div>
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
