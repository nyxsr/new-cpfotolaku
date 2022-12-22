import React from "react";
import CardBehind from "../../../components/Card/CardBehind";

function Behind() {
  return (
    <section className="relative bg-[#1c1c1c] py-5 px-5 z-10">
      <h1 className="font-bold text-xl text-white">See how we work</h1>
      <h1 className="font-bold text-3xl text-[#D96902] uppercase">
        Behind The Scene
      </h1>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap gap-4 w-fit">
          <CardBehind />
          <CardBehind />
          <CardBehind />
        </div>
      </div>
    </section>
  );
}

export default Behind;
