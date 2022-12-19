import React from "react";
import CardService from "../../../components/Card/CardService";
import { DataService } from "../../../data/ListData";

function Services() {
  return (
    <section className="relative bg-[#1c1c1c] py-5 px-5 z-10">
      <h1 className="font-bold text-3xl text-white">Our Services</h1>
      <p className="text-[#9d9d9d]">Services yang Fotolaku sediakan untuk kamu yang memiliki brand </p>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap py-6 gap-4 w-fit">
          {DataService.map((v, i) => {
            return <CardService key={i} id={i} foto={v.foto} text={v.text} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
