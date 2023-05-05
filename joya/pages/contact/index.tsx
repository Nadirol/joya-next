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
import Contact from '@/components/contact/Contact';
import Head from 'next/head';

export default function ContactPage() {
  const { t } = useTranslation('common');

  return (
    <>
    <Head>
      <title>{t('contact')}</title>
    </Head>
    <div className={plusJakartaSans.className}>
      <Header t={t}/>
      <main className="w-container mx-auto flex gap-8 md:gap-12 xl:gap-16 flex-col mb-8 relative mt-12">
        <Contact t={t}/>
        <div>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d36727.0272030705!2d105.89207338246815!3d21.04984060972605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a99767260733%3A0xae3333b685a10ece!2sJOYA%20TRAVEL!5e0!3m2!1sen!2s!4v1683259347337!5m2!1sen!2s" 
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
