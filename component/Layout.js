import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZYVB2KFQ5Q"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZYVB2KFQ5Q');
        </script>
      </Head>
      <Navbar />
        <main className='w-full p-3 md:p-0'>{children}</main>
      <Footer />
    </>
  )
}