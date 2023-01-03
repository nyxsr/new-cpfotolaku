import React from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
import { Model, MUA } from '../../assets/assets'

function CardBenefit(props) {
  return (
    <div className='px-6'>
     <h3 className='pb-2 text-2xl font-bold'>{props.context}</h3>
     <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum.</p>
     {props.detail && (
     <div className="flex flex-col gap-4 items-center justify-center">
     {props.detail.map((v,i)=>{
       return <DetailBenefit key={i} id={i} text={v.text}/>
     })}
   </div>
     )}
    </div>
  )
}

function DetailBenefit(props) {
  return(
    <>
    <div className="bg-[#fd8703] w-[6rem] h-[6rem] flex justify-center items-center rounded-full py-4 px-4 text-4xl text-white">
           {props.id === 0 ? <img src={Model}/> : props.id === 1 ? <BsFillCameraFill /> : <img src={MUA}/>}
         </div>
         <p>{props.text}</p>
   </>
  )
}

export default CardBenefit
