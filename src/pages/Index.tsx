import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Portfolio from '@/app/components/Portfolio'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}