import React from "react"
import { motion } from "framer-motion"

import card1 from "../../assets/card-beach-1-1.webp"
import card2 from "../../assets/card-beach-2-1.webp"
import card3 from "../../assets/card-beach-3-1.webp"
import background from "../../assets/descida_background.png"

export default function Favorites() {
  return (
    <section
      className="relative pt-12 pb-32 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        boxShadow: "0 -20px 50px rgba(255, 255, 255, 0.214)"
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-white to-yellow-400/20" />

      <div className="relative z-10 flex flex-col items-center">

        <div className="flex flex-col text-center mb-10">
          <span className="font-montserrat-regular text-[32px] text-blue-primary max-sm:text-[20px]">
            Tenha acesso fácil às suas
          </span>

          <span className="text-blue-primary font-montserrat-black text-[72px] max-sm:text-[38px]">
            Praias Favoritas
          </span>
        </div>

        <div className="flex flex-col items-center gap-y-6 py-10 max-sm:py-2">
          <motion.img
            src={card1}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "tween" }}
            className="w-140 mr-6 max-md:w-80 max-sm:mr-2 hover:scale-105 transition-transform"
          />

          <motion.img
            src={card2}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4 },
            }}
            transition={{ type: "tween" }}
            className="w-140 mr-6 max-md:w-80 max-sm:mr-2 hover:scale-105 transition-transform"
          />

          <motion.img
            src={card3}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.6 },
            }}
            transition={{ type: "tween" }}
            className="w-140 mr-6 max-md:w-80 max-sm:mr-2 hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </section>
  )
}