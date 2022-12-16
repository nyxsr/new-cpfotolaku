import React from "react";
import { ProcessConsult, ProcessDelivery, ProcessEdit, ProcessIron, ProcessPhoto, ProcessReturn } from "../../../assets/assets";
import { PlaceConsult, PlaceDelivery, PlaceEdit, PlaceIron, PlacePhoto, PlaceReturn } from "../../../assets/placeholder/placeholder";
import CardProcess from "../../../components/Card/CardProcess";

function Process() {
    const DataProcess = [
        {
            foto:ProcessConsult,
            placeholder:PlaceConsult,
            context:'Konsultasi',
            desc:'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            foto:ProcessDelivery,
            placeholder:PlaceDelivery,
            context:'Pengiriman',
            desc:'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            foto:ProcessIron,
            placeholder:PlaceIron,
            context:'Steam / Setrika',
            desc:'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            foto:ProcessPhoto,
            placeholder:PlacePhoto,
            context:'Photoshoot',
            desc:'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            foto:ProcessEdit,
            placeholder:PlaceEdit,
            context:'Editing',
            desc:'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            foto:ProcessReturn,
            placeholder:PlaceReturn,
            context:'Pengembalian',
            desc:'Lorem ipsum dolor sit amet consectetur.'
        }
    ]
  return (
    <section className="relative bg-[#1c1c1c] py-5 px-5 z-10">
      <h1 className="text-center font-bold text-white text-3xl">
        Proses Fotolaku
      </h1>
      <div className="flex py-5 flex-wrap gap-5">
      {DataProcess.map((v,i)=>{
        return <CardProcess key={i} foto={v.foto} number={i + 1} placeholder={v.placeholder} context={v.context} desc={v.desc}/>
      })}
      </div>
    </section>
  );
}

export default Process;
