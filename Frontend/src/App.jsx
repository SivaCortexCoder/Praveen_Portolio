import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import Experience from './components/Experience'
import { ToastContainer } from 'react-toastify'

export default function App() {
    return (
        <div className='font-Outfit'>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Services />
            <Work />
            <Experience/>
            <Contact />
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}