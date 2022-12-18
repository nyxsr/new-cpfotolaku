import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

function CardProcess(props) {
  return (
    <div className="flex flex-col">
    <div className="relative w-[11.25rem]">
      <LazyLoadImage
        width={180}
        height={206}
        src={props.foto}
        placeholderSrc={props.placeholder}
        effect="blur"
      />
      <p className="absolute text-3xl font-bold text-white top-3 left-3">
        0{props.number}
      </p>
      <p className="text-center text-white font-bold text-xl">
        {props.context}
      </p>
      <p className="text-center text-[12px] text-white w-full">
        {props.desc}
      </p>
    </div>
  </div>
  )
}

export default CardProcess