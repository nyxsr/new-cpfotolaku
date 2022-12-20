import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function ElevatePitch() {
  let ref = useRef(null)
  let {scrollYProgress} = useScroll({target:ref})

  const y = useTransform(scrollYProgress,[0,.1,.4,1],['0%','-5%','25%','40%'])
  return (
    <motion.section ref={ref} style={{ y }} className='pt-3 z-10 relative w-screen bg-transparent'>
      <div className='bg-[#F3B762]/90 mx-auto px-3 py-5 w-screen -mb-[0.425rem] '>
        <p className={`font-bold text-[1.3rem] before:content-quotes after:content-quotes`}>Punya Produk Bagus Tapi Visualisasinya Tidak Mendukung ?</p>
        <p className='text-right text-xl mt-5'>
            Fotolaku Hadir Menjadi Solusi
        </p>
      </div>
    </motion.section>
  )
}

export default ElevatePitch
