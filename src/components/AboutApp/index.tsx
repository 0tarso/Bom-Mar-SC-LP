import WaveSection from '../WaveSection'

import celMockup from '../../assets/celMock3.png'
import StepsCard from '../StepsCard'

import { motion } from 'framer-motion'

export default function AboutApp() {
  return (
    <section className='pb-12'>
      <WaveSection
        bg='#ffff'

      >
        <div className="flex flex-col text-center mb-10 hidden max-sm:flex">
          <span className="font-montserrat-regular text-[32px] text-blue-primary max-sm:text-[20px]">
            Informações sobre o clima e mar
          </span>

          <span className="text-blue-primary font-montserrat-black text-[72px] max-sm:text-[38px]">
            Na sua mão
          </span>
        </div>

        <div className=' px-4 flex items-center justify-center'>

          <div className=' max-w-[1024px] grid grid-cols-2 max-sm:grid-cols-1'>
            <div className='flex justify-center'>

              <motion.img src={celMockup}
                className='
                w-[350px] max-md:w-[350px] max-sm:w-[300px] 
                border-r border-blue-primary rounded-4xl'
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}

              />
            </div>

            <div className='flex flex-col max-md:items-center justify-center'>
              <div className="flex flex-col text-center mb-10 hidden min-sm:flex">
                <span className="font-montserrat-regular text-[26px] text-blue-primary max-md:text-[20px]">
                  Informações sobre o clima e mar
                </span>

                <span className="text-blue-primary font-montserrat-black text-[72px] max-md:text-[38px]">
                  Na sua mão
                </span>
              </div>
              <StepsCard
                stepContent='Acompanhe a qualidade do banho e as condições da praia em tempo real para decidir o melhor momento de visitar.'
                stepText=''
                stepColor='#fff'
                textColor='#4085cb'
                borderColor='#fff'
              />

            </div>

          </div>
        </div>

      </WaveSection>
    </section>
  )
}
