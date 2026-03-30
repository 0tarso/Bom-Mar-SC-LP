import { Helmet } from "react-helmet-async"
import AboutApp from "../../components/AboutApp"
import Favorites from "../../components/Favorites"
import Footer from "../../components/Footer"
import HeroSection from "../../components/Hero"
import InfoSection from "../../components/Info"
import Map from "../../components/Map"


function HomeScreen() {

  return (
    <div className=''>
      <Helmet>
        <title>Bom Mar SC | Praias em Santa Catarina</title>
        <meta name="description" content="Praias limpas em Santa Catarina você encontra aqui" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, WhatsApp) */}
        <meta property="og:title" content="Bom Mar SC" />
        <meta property="og:description" content="Descubra praias limpas em Santa Catarina" />
        <meta property="og:image" content="https://bommarsc.vercel.app/icon.png" />
        <meta property="og:url" content="https://bommarsc.vercel.app" />

        <link rel="canonical" href="https://bommarsc.vercel.app" />
      </Helmet>
      <HeroSection />
      <InfoSection />
      <Favorites />
      <AboutApp />
      <Map />
      <Footer />
    </div>
  )
}

export default HomeScreen
