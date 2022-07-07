import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main className='w-full p-3 md:p-0'>{children}</main>
      <Footer />
    </>
  )
}