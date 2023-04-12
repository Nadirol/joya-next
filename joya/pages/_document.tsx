import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html className="scroll-smooth scroll-pt-[6rem] md:scroll-pt-[9rem] xl:scroll-pt-12">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
