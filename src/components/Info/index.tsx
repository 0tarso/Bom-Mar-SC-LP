import React, { useRef } from 'react'
import WaveSection from '../WaveSection'
import { motion, useScroll, useTransform } from 'framer-motion'
import phoneMock from "../../assets/celMock-1.webp"
import Marquee from '../Marquee'

export default function InfoSection() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.3], [90, 0])
  const y = useTransform(scrollYProgress, [0, 0.4], [80, 0])
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1])

  return (
    <section className='' id="start">
      <WaveSection>
        <div className='
        flex flex-row
        max-md:flex-col
        max-md:items-center
        px-24
        max-xl:px-6
        max-sm:px-0
        '>

          {/* mockup com rotação no scroll */}
          <div ref={ref} className='flex-1 perspective-[1200px]'>
            <motion.img
              src={phoneMock}
              style={{
                rotateX,
                y,
                scale,
                transformStyle: "preserve-3d"
              }}
              className='
                w-120
                max-lg:w-100
                max-sm:w-80
                max-md:pl-4
                drop-shadow-[0_10px_50px_rgba(0,0,0,0.25)]
              '
            />
          </div>

          <div className='relative flex-1
            max-lg:ml-4
            max-sm:flex flex-col
            max-sm:gap-y-5
          '>

            <motion.text
              className='absolute flex flex-col text-left -left-20
              max-md:relative
              max-md:left-0'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className='font-montserrat-medium text-gray text-[32px] -mb-4 max-lg:text-[18px]'>
                Clima atualizado
              </span>
              <span className='ml-3 font-montserrat-black text-white text-[72px] max-lg:text-[46px] max-md:ml-0'>
                24 horas
              </span>
            </motion.text>

            <motion.text
              className='absolute flex flex-col text-left -left-16 top-40
              max-md:relative
              max-md:left-0
              max-md:top-0'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className='font-montserrat-medium text-gray text-[32px] -mb-4 max-lg:text-[18px]'>
                Relatório de balneabilidade
              </span>
              <span className='ml-3 font-montserrat-black text-white text-[72px] max-lg:text-[46px] max-md:ml-0'>
                Semanal
              </span>
            </motion.text>

            <motion.text
              className='absolute flex flex-col text-left -left-12 top-80
              max-md:relative
              max-md:left-0
              max-md:top-0'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className='font-montserrat-medium text-gray text-[32px] -mb-4 max-lg:text-[18px]'>
                Explore
              </span>
              <span className='ml-3 font-montserrat-black text-white text-[72px] max-lg:text-[46px] max-md:ml-0'>
                +250 praias
              </span>
            </motion.text>
          </div>
        </div>

        <div className='mt-12'>
          <Marquee />
        </div>
      </WaveSection>
    </section>
  )
}