import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AiFillStar } from "react-icons/ai";

function CardService(props) {
  return (
    <div className="relative bg-white flex flex-col rounded-2xl py-3 px-3">
      <LazyLoadImage
        width={212}
        height={199}
        src={props.foto}
        placeholderSrc={props.placeholder}
        effect="blur"
        className="w-[13.25rem] h-[12.4375rem] object-cover rounded-2xl"
        alt={props.text}
      />
      <p className="text-lg font-bold pt-[14px]">{props.text}</p>
      <div className="flex justify-between">
        <p className="font-bold text-[#FD8703]">Rp.50.000 / pcs</p>
        <div className="flex items-center">
          <AiFillStar color="#fd8703" />
          <p className="font-semibold">4.5</p>
        </div>
      </div>
      <p className="text-[#747474] text-[12px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci placeat autem eveniet. Amet necessitatibus repellendus eligendi minus, culpa enim eum?</p>
    </div>
  );
}

export default CardService;
