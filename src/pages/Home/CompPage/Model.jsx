import React from "react";
import {
  ModelConny,
  ModelDio,
  ModelEdward,
  ModelJennifer,
  ModelJessica,
  ModelJordan,
  ModelJose,
  ModelKevin,
  ModelNada,
  ModelSteven,
  ModelWardah,
} from "../../../assets/assets";
import { PlaceConny, PlaceDio, PlaceEdward, PlaceJennifer, PlaceJessica, PlaceJordan, PlaceJose, PlaceKevin, PlaceNada, PlaceSteven, PlaceWardah } from "../../../assets/placeholder/placeholder";
import CardModel from "../../../components/Card/CardModel";

function Model() {
  const DataModel = [
    {
      foto: ModelDio,
      placeholder:PlaceDio,
      text: "Dio",
    },
    {
      foto: ModelJose,
      placeholder:PlaceJose,
      text: "Jose",
    },
    {
      foto: ModelJessica,
      placeholder:PlaceJessica,
      text: "Jessica",
    },
    {
      foto: ModelEdward,
      placeholder: PlaceEdward,
      text: "Edward",
    },
    {
      foto: ModelConny,
      placeholder:PlaceConny,
      text: "Conny",
    },
    {
      foto: ModelJennifer,
      placeholder: PlaceJennifer,
      text: "Jennifer",
    },
    {
      foto: ModelJordan,
      placeholder: PlaceJordan,
      text: "Jordan",
    },
    {
      foto: ModelKevin,
      placeholder: PlaceKevin,
      text: "Kevin",
    },
    {
      foto: ModelNada,
      placeholder: PlaceNada,
      text: "Nada",
    },
    {
      foto: ModelSteven,
      placeholder: PlaceSteven,
      text: "Steven",
    },
    {
      foto: ModelWardah,
      placeholder: PlaceWardah,
      text: "Wardah",
    },
  ];
  return (
    <section className="relative bg-[#1c1c1c] py-5 px-5 z-10">
      <h1 className="font-bold text-3xl text-white">Model Collection</h1>
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
