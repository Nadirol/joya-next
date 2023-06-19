import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { rollingAnimation } from '@/public/assets';
import Image from "next/image";
import { useTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common');

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  console.log("🚀 ~ file: _app.tsx:12 ~ App ~ loading:", loading)

  useEffect(() => {
    const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url: string) => (url !== router.asPath) && setTimeout(() => setLoading(false), 2000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    }
  });

  

  return loading 
  ? (
    <div className="w-screen h-screen flex gap-4 flex-col items-center justify-center">
      <Image src={rollingAnimation} alt="" />
      <h1 className='text-neutral-800 font-semibold text-xl md:text-3xl'>{t('loading')}</h1>
    </div>
  )
  : <>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8453D5JJEK"
        strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8453D5JJEK');
        `}
    </Script>
    <Component {...pageProps} />
    <Analytics />
  </>
}

export default appWithTranslation(App);

