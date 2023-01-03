import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsArrowDownRight } from "react-icons/bs";

function CardService(props) {
  const navigate = useNavigate();
  const textDesc = props.desc
  return (
    <div className="relative bg-white flex flex-col rounded-2xl py-3 px-3" onClick={()=>navigate(`/details/${props.id}`)}>
      <div className="relative">
      <LazyLoadImage
        width={212}
        height={199}
        src={props.foto}
        placeholderSrc={props.placeholder}
        effect="blur"
        className="w-[13.25rem] h-[12.4375rem] object-cover rounded-2xl"
        alt={props.text}
        />
        <div className="bg-[#fd8703] absolute -bottom-2 right-2 text-white text-3xl py-2 px-2 rounded-full">
        <BsArrowDownRight/>
        </div>
        </div>
      <p className="text-lg font-bold pt-[14px]">{props.text}</p>
      <div className="flex justify-between">
        <p className="font-bold text-[#FD8703]">Rp.50.000 / pcs</p>
        <div className="flex items-center">
          <AiFillStar color="#fd8703" />
          <p className="font-semibold">{props.rating}</p>
        </div>
      </div>
      <p className="text-[#747474] text-[12px]">{textDesc.length > 10 ? textDesc.substring(0,30)+'...' : props.desc}</p>
    </div>
  );
}

export default CardService;
