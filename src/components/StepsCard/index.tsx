import { motion } from 'framer-motion'

export default function StepsCard(
  { stepText, stepContent,
    textColor = "#ffff",
    stepColor = "#ffffff17",
    borderColor = "#7bf1a82f" }: {
      stepText: string,
      stepContent: string,
      textColor?: string,
      stepColor?: string,
      borderColor?: string
    }
) {
  return (
    <motion.div
      className='relative p-8 rounded-2xl flex justify-start
      border-b-2'
      style={{ borderColor: borderColor }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <text className='
      absolute
      font-montserrat-black-italic
       text-8xl left-4
      top-0 
      ' style={{ color: stepColor }}>{stepText}</text>


      <text className='text-left -z-10
      font-montserrat-bold' style={{ color: textColor }}>{stepContent}</text>
    </motion.div>
  )
}
