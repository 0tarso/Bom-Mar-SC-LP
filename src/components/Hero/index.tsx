import { CircleArrowDown } from 'lucide-react'
import logo from '../../assets/logo-bom-mar.webp'

import beachBackground from '../../assets/beach_background_scc.png'

export default function HeroSection() {
  return (
    <section

      className='
    sticky
    top-0
    min-h-screen
    flex flex-col justify-center items-center
    w-full
    -z-50
    overflow-hidden
    '>
      <img
        src={beachBackground}
        className='absolute inset-0 w-full h-full object-cover -z-10 opacity-15 animate-[soft-alert_5s_ease-in-out_infinite]'
      />
      <img
        src={logo}
        className='
        opacity-0
        max-lg:w-160
        max-md:w-130
        max-sm:w-80
        transition-all
         animate-[fadeUp_1s_linear_forwards]'

      />

      <div className='
      opacity-0
      flex flex-col
      mb-12
      animate-[fadeIn_1s_linear_forwards]

      '>
        <span
          className='
          font-montserrat-bold
          text-blue-primary
          text-[32px]
          max-sm:mt-12
          max-sm:text-[16px]
          max-md:text-[20px]
          transition-all
          '
        >Descubra praias perfeitas para banho em</span>
        <span className='
          font-montserrat-black
          text-blue-primary
          text-[46px]
          max-sm:text-[32px]
          transition-all
        '>Santa Catarina!</span>

      </div>

      <CircleArrowDown
        size={42}
        color='#4085cb'
        className='animate-[pulse_1.5s_ease-in-out_infinite]' />
    </section>
  )
}
