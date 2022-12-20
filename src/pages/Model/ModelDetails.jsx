import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import {
  ModelAnimate1,
  ModelAnimate2,
  ModelAnimate3,
  ModelAnimate4,
} from "../../assets/animation";
import { useNavigate, useParams } from "react-router-dom";
import { DataModel } from "../../data/ListData";

function ModelDetails() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [slidePos, setSlidePos] = useState(1);
  const controlsImage1 = useAnimation();
  const controlsImage2 = useAnimation();
  const controlsImage3 = useAnimation();
  const controlsImage4 = useAnimation();

  const showSlide = () => {
    if (slidePos === 1) {
      controlsImage1.start("hidden");
      controlsImage2.start("hidden");
      controlsImage3.start("first");
      setSlidePos(2);
    } else if (slidePos === 2) {
      controlsImage1.start("fullyHidden");
      controlsImage2.start("fullyHidden");
      controlsImage3.start("hidden");
      controlsImage4.start("first");
      setSlidePos(3);
    }
  };

  const returnSlide = () => {
    if (slidePos === 2) {
      controlsImage1.start("first");
      controlsImage2.start("first");
      controlsImage3.start("initial");
      setSlidePos(1);
    } else if (slidePos === 3) {
      controlsImage1.start("hidden");
      controlsImage2.start("hidden");
      controlsImage3.start("first");
      controlsImage4.start("initial");
      setSlidePos(2);
    }
  };

  useEffect(() => {
    controlsImage1.start("first");
    controlsImage2.start("first");
  }, []);
  return (
    <section className="h-screen relative bg-white overflow-y-hidden overflow-x-hidden">
      <div>
        <button className="text-3xl py-2 px-2" onClick={()=>navigate(-1)}>
          <AiOutlineArrowLeft />
        </button>
      </div>
      <div className="text-3xl font-bold px-6">
        <p>Model</p>
        <div className="relative">
          <p className="relative z-10">Collection of {DataModel[id].text}</p>
          <div className="absolute bottom-0 bg-[#FD8703] h-[1rem] w-[4rem]" />
        </div>
      </div>
      <motion.div>
        <motion.img
          src={DataModel[id].bigPhoto[0]}
          variants={ModelAnimate1}
          initial="initial"
          animate={controlsImage1}
          className="absolute top-32 right-10 h-[60%] object-cover z-10"
          alt=""
        />
        <motion.img
          src={DataModel[id].bigPhoto[1]}
          variants={ModelAnimate2}
          initial="initial"
          animate={controlsImage2}
          className="absolute -bottom-20 -left-5 h-full object-cover z-20"
          alt=""
        />
        <motion.img
          src={DataModel[id].bigPhoto[2]}
          variants={ModelAnimate3}
          initial="initial"
          animate={controlsImage3}
          className="absolute bottom-0 h-[82%] z-10 object-cover"
        />
        <motion.img
          src={DataModel[id].bigPhoto[3]}
          className="absolute bottom-0 h-[92%] z-20 object-cover"
          variants={ModelAnimate4}
          initial="initial"
          animate={controlsImage4}
        />
      </motion.div>
      {slidePos !== 3 && (
        <div className="absolute top-0 right-5 z-20 flex h-screen justify-end w-fit items-center">
          <div
            className="w-fit bg-slate-200 text-3xl py-2 px-2 rounded-full"
            onClick={showSlide}
          >
            <BsCaretRightFill />
          </div>
        </div>
      )}
      {slidePos !== 1 && (
        <div className="absolute top-0 left-5 z-20 flex h-screen justify-start w-fit items-center">
          <div
            className="w-fit bg-slate-200 text-3xl py-2 px-2 rounded-full"
            onClick={returnSlide}
          >
            <BsCaretLeftFill />
          </div>
        </div>
      )}
    </section>
  );
}

export default ModelDetails;
