import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { Benefit1 } from "../../../assets/assets";
import Model from './Model'
import CardBenefit from "../../../components/Card/CardBenefit";
import { SET_SHOW } from "../../../data/benefitSlice";

const ListBenefit = [
  {
    context: "Insightfull Sales Creative",
  },
  {
    context: "Fast, Cheap & Hight Quality",
  },
];

function Benefit() {
  const dispatch = useDispatch();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView === true) {
      dispatch(SET_SHOW(true));
    } else {
      dispatch(SET_SHOW(false));
    }
  }, [inView]);
  return (
    <section ref={ref} className="bg-[#efefef] relative py-10 z-10">
      <h1 className="text-center font-bold pb-10 text-3xl">
        Kenapa Fotolaku ?
      </h1>
      <Model/>
      <div className="flex flex-col gap-5 justify-evenly min-h-[80%]">
        {ListBenefit.map((v, i) => {
          return <CardBenefit key={i} context={v.context} />;
        })}
      </div>
    </section>
  );
}

export default Benefit;
