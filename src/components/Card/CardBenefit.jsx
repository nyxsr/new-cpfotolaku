import React from 'react'
import { Benefit1 } from '../../assets/assets'

function CardBenefit(props) {
  return (
    <div className='px-6'>
     <h3 className='pb-2 text-2xl font-bold'>{props.context}</h3>
     <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum.</p>
    <img src={props.image} alt="" />
    </div>
  )
}

export default CardBenefit
