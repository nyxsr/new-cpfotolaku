import React from 'react'

function CardService(props) {
  return (
    <div className='w-[12.375rem] h-[15.25rem] relative'>
    <div className='bg-black/20 absolute w-full h-full object-cover z-0'/>
    <img src={props.foto} className='w-full h-full object-cover rounded-2xl' alt="" />
    <p className='absolute bottom-5 left-3 z-10 text-white font-bold text-xl'>{props.text}</p>
  </div>
  )
}

export default CardService
