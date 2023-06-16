import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html className="scroll-smooth scroll-pt-[6rem] md:scroll-pt-[9rem] xl:scroll-pt-12">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="description" content="Joya is a traveling agency that specializes in providing high-quality travel services to companies and corporates, as well as to high-end profiles."/>
        <meta name="keywords" content="joya, joya travel, joyatravel, travel, traveling, vietnam, travel agency, travel agency near me, best travel agency, aaa travel agency, best travel agency near me, online travel agency, luxury travel agency, luxury travel vietnam"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="google-site-verification" content="oHNRAy4WoLnVnvgtEujrt5arI7YHuYqjQc8OJfX7sGk" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
