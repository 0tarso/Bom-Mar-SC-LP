import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'
import animation from '../../assets/animations/empty_favorites_animation.json'
import WaveSection from '../../components/WaveSection'
import { ButtonGlass } from '../../components/ButtonGlass'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import { getVersionGitHub } from '../../api/getVersion'

const downloadLink = 'https://github.com/0tarso/Bom-Mar-SC-APP/releases/download/v1.2.0/bom-mar-sc-v1.2.0.apk'

export default function DownloadScreen() {
  const navigate = useNavigate()
  const [versionResume, setVersionResume] = useState<{
    versao: string;
    notes: string;
    downloadUrl?: string;
    published_at?: string;
  } | null>(null)

  const handleNavigate = () => {
    navigate('/')
  }

  const handleDownloadLink = () => {
    window.open(downloadLink, '_blank')
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVersionGitHub()

      if (data) setVersionResume(data)
      console.log(data)
    }

    fetchData()
  }, [])

  return (
    <section
      className='
      min-h-screen
      relative
      overflow-hidden
      '
    >
      <WaveSection
      // bg='#fff'
      // height={waveHeight}
      >

        <div className='flex justify-center items-center'>


          <div className='flex-1 max-w-5xl relative px-6'>
            <div className='flex flex-row justify-between items-baseline mb-6'>

              <motion.h1 initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                className='
    font-montserrat-black text-white
    text-left text-7xl
    max-sm:text-5xl
  '
              >Vamos lá!</motion.h1>

              <motion.button onClick={() => handleNavigate()}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className=' hover:scale-[1.2]'>
                <span className='font-montserrat-bold text-white text-3xl cursor-pointer'>x</span>
              </motion.button>


            </div>
            <motion.p initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='pl-3 text-white max-sm:pl-2 text-left font-montserrat-medium mb-6'
            >Nosso app ainda está em fase de distribuição direta enquanto finalizamos os processos de publicação na Play Store.<br />Por enquanto, disponibilizamos nosso APK para instalação em dispositivos Android.</motion.p>
            <motion.p initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='pl-2 text-left font-montserrat-medium text-white'
            >✅ Arquivo assinado digitalmente</motion.p>
            <motion.p initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='pl-2 text-left font-montserrat-medium text-white'
            >✅ Verificado pelo Google Play Protect</motion.p>
            <motion.p initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='pl-2 text-left font-montserrat-medium text-white'
            >✅ Não coletamos dados sensíveis</motion.p>
            <motion.p initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className='pl-2 text-left font-montserrat-medium text-white'
            >✅ Código seguro e atualizado</motion.p>
            {versionResume !== null && (
              <>
                <motion.p initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className='mt-8 pl-2 text-left font-montserrat-bold text-white'
                >Notas da versão: {versionResume?.versao}</motion.p>
                <motion.div initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className='mt-2 pl-2 text-left font-montserrat-medium prose prose-invert text-white'
                >
                  <ReactMarkdown>
                    {versionResume?.notes}
                  </ReactMarkdown>
                </motion.div>
              </>
            )}


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='w-[400px] mt-6
              max-sm:w-full
            '>

              <ButtonGlass
                onClickFunc={() => handleDownloadLink()}
              >
                <p>Baixar</p>
              </ButtonGlass>
            </motion.div>

            <div className='absolute right-0 
            w-4xl -top-10 -z-10
            max-md:w-[700px] max-md:top-50 max-md:-right-20
            max-sm:w-[500px] max-sm:top-125
            '>
              <Lottie
                animationData={animation}
                loop
                autoPlay

              />

            </div>

          </div>
        </div>
      </WaveSection>


      <div className='mt-60
      max-sm:mt-20
      '>

        <Footer />
      </div>
    </section>
  )
}
