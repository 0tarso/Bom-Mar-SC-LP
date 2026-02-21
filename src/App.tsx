import './App.css'
import AboutApp from './components/AboutApp'
import Favorites from './components/Favorites'
import Footer from './components/Footer'
import HeroSection from './components/Hero'
import InfoSection from './components/Info'
import Map from './components/Map'

function App() {

  return (
    <div className=''>
      <HeroSection />
      <InfoSection />
      <Favorites />
      <AboutApp />
      <Map />
      <Footer />
    </div>
  )
}

export default App
