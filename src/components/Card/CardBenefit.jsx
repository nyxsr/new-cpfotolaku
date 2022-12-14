import React from 'react'
import { Benefit1 } from '../../assets/assets'

function CardBenefit(props) {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <div className='bg-[#FEF0CD] py-2 px-2 w-fit text-5xl rounded-full'>
        <img src={`${Benefit1}`}/>
      </div>
      <p className='text-white'>{props.text}</p>
    </div>
  )
}

export default CardBenefit
