import React from "react";
import CardVideoClient from "../../../components/Card/CardVideoClient";
import { DataClient } from "../../../data/ListData";

function Client() {
  
  return (
    <section className="relative bg-[#1c1c1c] py-5 px-5 z-10">
      <h1 className="font-bold text-xl text-white">What our Client</h1>
      <h1 className="font-bold text-3xl text-[#D96902] uppercase">
        Tell about us
      </h1>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap gap-4 w-fit">
          {DataClient.map((v,i)=>{
            return <CardVideoClient rating={v.rating} key={i}/>
          })}
        </div>
      </div>
    </section>
  );
}

export default Client;
