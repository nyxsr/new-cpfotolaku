import React from 'react'
import { motion } from 'framer-motion'

function ElevatePitch() {
  return (
    <motion.section className='h-[50vh] bg-[#1c1c1c] pt-3 z-10 relative'>
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
