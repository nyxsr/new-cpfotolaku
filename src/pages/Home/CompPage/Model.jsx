import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardModel from "../../../components/Card/CardModel";
import { DataModel } from "../../../data/ListData";


function Model() {

  const location = useLocation()

  const gotoElement = () =>{
    if (location !== null || location !== '') {
      let sectionID = location.hash.replace("#",'')
      const element = document.getElementById(sectionID)
      element?.scrollIntoView()
    }
  }

  useEffect(()=>{
    if (location !== '' || location !== null) {
      gotoElement();
    }
  },[location])

  return (
    <section id="model" className="relative px-5 z-10">
      <h1 className="font-bold text-2xl">1. Pilihan Model Berkualitas</h1>
      <p className="text-[#9d9d9d]">
        Fotolaku memiliki model yang sangat professional yang cocok untuk brand
        anda
      </p>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap py-6 gap-4 w-fit">
          {DataModel.map((v, i) => {
            return <CardModel key={i} id={i} foto={v.foto} text={v.text} />
          })}
        </div>
      </div>
    </section>
  );
}

export default Model;
