import React from 'react'
import { motion } from 'framer-motion'

function ElevatePitch() {
  return (
    <motion.section className='pt-3 z-10 relative px-5 w-screen bg-transparent'>
      <div className='bg-[#D9D9D9]/90 px-5 mx-auto py-[5vh] w-[99%]'>
        <p className='font-bold text-[1.3rem]'>Punya Produk Bagus Tapi Visualisasinya Tidak Mendukung ?</p>
        <p className='mt-[8vh]'>
            Fotolaku Hadir Menjadi Solusi
        </p>
      </div>
    </motion.section>
  )
}

export default ElevatePitch
