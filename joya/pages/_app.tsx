import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { useTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common');

  return <>
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

