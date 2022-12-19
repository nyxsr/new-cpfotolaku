import React from "react";
import CardModel from "../../../components/Card/CardModel";
import { DataModel } from "../../../data/ListData";

function Model() {

  return (
    <section className="relative px-5 z-10">
      <h1 className="font-bold text-2xl">Complete Model Collection</h1>
      <p className="text-[#9d9d9d]">
        Fotolaku memiliki model yang sangat professional yang cocok untuk brand
        anda
      </p>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap py-6 gap-4 w-fit">
          {DataModel.map((v, i) => {
            return <CardModel key={i} foto={v.foto} text={v.text} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Model;
