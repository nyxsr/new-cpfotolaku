import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CardService(props) {
  return (
    <div className="w-[12.375rem] h-[15.25rem] relative">
      <LazyLoadImage
        width={198}
        height={244}
        src={props.foto}
        placeholderSrc={props.placeholder}
        effect="blur"
        className="w-full h-full object-cover rounded-2xl"
        alt={props.text}
      />
       <div className="bg-black/20 absolute w-full h-full top-0 z-0" />
      <p className="absolute bottom-5 left-3 z-10 text-white font-bold text-xl">
        {props.text}
      </p>
    </div>
  );
}

export default CardService;
