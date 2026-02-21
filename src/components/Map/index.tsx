import WaveSection from '../WaveSection'

import mapImage from '../../assets/mapa.webp'
import cellMock from '../../assets/celMock2-1.webp'
import { ButtonGlass } from '../ButtonGlass'
import StepsCard from '../StepsCard'

import { motion } from 'framer-motion'

export default function Map() {
  return (
    <section className=''>
      <WaveSection>
        <div className='flex flex-col justify-center items-center max-sm:py-24'>

          <div className='flex flex-col mb-12'>
            <span className='transition-all
        font-montserrat-regular text-[32px]
        text-white
        max-sm:text-[20px]
        max-md:text-[26px]
      '>Encontre o seu</span>
            <span className='transition-all
        text-white
        font-montserrat-black text-[72px]
        max-sm:text-[38px]
        max-md:text-[56px]
        '>Próximo destino!</span>
          </div>
          <div className='relative flex flex-col justify-center items-center
    w-full max-w-5xl'>

            <div className='transition-all
          absolute
          left-12
          max-sm:left-4
          '>
              <motion.img src={cellMock}
                className='
              w-140
              max-md:w-100
              max-sm:w-70
              
              '
                initial={{ x: -40, rotateX: 60 }}
                whileInView={{ x: 0, rotateX: 0 }}
                transition={{ duration: 1 }}

              />

            </div>

            <motion.img src={mapImage}
              className='
            w-200
            max-md:w-140
            max-sm:w-90
            '

            />
          </div>
          <div className='flex flex-col mt-24 px-2 items-center'>

            <div className='grid grid-cols-2 max-w-[900px] mb-24 gap-4
              max-sm:grid-cols-1
            '>

              <StepsCard
                stepText={'1'}
                stepContent={'Saiba já a distância do seu próximo destino'}
              />
              <StepsCard
                stepText={'2'}
                stepContent={'Veja o clima atualizado do local'}
              />
              <StepsCard
                stepText={'3'}
                stepContent={'Compartilhe a localização com os amigos'}
              />
              <StepsCard
                stepText={'4'}
                stepContent={'Aproveite o descanso!'}
              />
            </div>

            <span className='transition-all
              font-montserrat-black-italic text-[32px]
            text-white
              max-sm:text-[20px]
              max-md:text-[26px]
              mb-4
            '>" De malas prontas? "</span>



            <ButtonGlass>
              <span>
                <text className='
              font-montserrat-bold
              '>Baixar App</text>

              </span>
            </ButtonGlass>

          </div>
        </div>
      </WaveSection>
    </section>
  )
}
