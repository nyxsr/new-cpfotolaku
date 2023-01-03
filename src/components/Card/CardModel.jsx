import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

function CardModel(props) {

  return (
    <Link className="w-[12.375rem] h-[15.25rem] relative" to={`/model/${props.id}`}>
      <LazyLoadImage
        width={198} height={244}
        placeholderSrc={props.placeholder}
        effect="blur"
        src={props.foto}
        className="w-full h-full object-cover rounded-2xl z-0 shadow-lg"
        alt={props.text}
      />
      <div className="bg-black/20 h-full w-full absolute top-0 rounded-2xl shadow-lg"/>
      <p className="absolute bottom-5 left-3 z-10 text-white font-bold text-xl">
        {props.text}
      </p>
      <div className="absolute bottom-5 bg-[#fd8703] text-2xl text-white py-2 px-2 rounded-full right-5">
        <BsArrowDownRight />
      </div>
    </Link>
  );
}

export default CardModel;
