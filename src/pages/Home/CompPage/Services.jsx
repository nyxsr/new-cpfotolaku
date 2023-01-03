import React from "react";
import CardService from "../../../components/Card/CardService";
import { DataService } from "../../../data/ListData";

function Services() {
  const videoService = DataService.filter(v => v.category === 'Video')
  const photoService = DataService.filter(v => v.category !== 'Video')
return (
  <section id="services" className="relative bg-[#1c1c1c] py-10 px-5 z-10">
  <h1 className="font-bold text-3xl text-white">Our Services</h1>
  <p className="text-[#9d9d9d]">Services yang Fotolaku sediakan untuk kamu yang memiliki brand </p>
  <h1 className="font-bold text-2xl pt-5 text-white">Photo Services</h1>
  <div className="overflow-x-scroll">
    <div className="flex flex-nowrap py-6 gap-4 w-fit">
      {photoService.map((v,i)=>{
          return <CardService key={i} id={i} foto={v.foto} placeholder={v.placeholder} price={v.price} text={v.text} rating={v.rating} desc={v.desc} />
      })}
    </div>
  </div>
  <h1 className="font-bold text-2xl pt-5 text-white">Video Services</h1>
  <div className="overflow-x-scroll">
    <div className="flex flex-nowrap py-6 gap-4 w-fit">
      {videoService.map((v,i)=>{
          return <CardService key={i} id={i + 6} foto={v.foto} placeholder={v.placeholder} price={v.price} text={v.text} rating={v.rating} desc={v.desc} />
      })}
    </div>
  </div>
</section>
  );
}

export default Services;
