import React from 'react'
import { motion } from 'framer-motion'
import LogoClient from './LogoClient'

function ElevatePitch() {
  return (
    <motion.section className='h-fit bg-[#1c1c1c] py-3 z-10 relative'>
      <div className='bg-[#D9D9D9] px-6 py-[5vh]'>
        <p className='font-bold text-2xl'>Punya Produk Bagus Tapi Visualisasinya Tidak Mendukung ?</p>
        <p className='mt-[8vh]'>
            Fotolaku Hadir Menjadi Solusi
        </p>
      </div>
    </motion.section>
  )
}

export default ElevatePitch
