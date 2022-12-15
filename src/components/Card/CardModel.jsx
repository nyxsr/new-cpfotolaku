import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

function CardModel(props) {
  return (
    <div className="w-[12.375rem] h-[15.25rem] relative">
      <LazyLoadImage
        width={198} height={244}
        placeholderSrc={props.placeholder}
        effect="blur"
        src={props.foto}
        className="w-full h-full object-cover rounded-2xl z-0"
        alt={props.text}
      />
      <div className="bg-black/20 h-full w-full absolute top-0"/>
      <p className="absolute bottom-5 left-3 z-10 text-white font-bold text-xl">
        {props.text}
      </p>
    </div>
  );
}

export default CardModel;