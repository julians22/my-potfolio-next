import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main className='w-full'>{children}</main>
      <Footer />
    </>
  )
}