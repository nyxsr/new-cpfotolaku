import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BGHero } from "../../../assets/assets";
import Navbar from "../../../components/Navbar/Navbar";

function Landing() {
  let { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], ["0%", "-20%"]);
  return (
    <motion.section
      style={{ backgroundImage: `url(${BGHero})` }}
      className="h-[70vh] bg-fill relative w-screen bg-no-repeat bg-fixed"
    >
      <Navbar />
      <motion.div
        style={{ y }}
        className="flex flex-col justify-between h-[50%] px-6 pt-3 fixed -z-0"
      >
        <motion.h1 className="text-white font-bold text-xl sm:text-3xl w-[90%]">
          Jasa Foto Yang Memahami Kebutuhan Bisnis Anda
        </motion.h1>
        <div className="flex flex-col gap-4">
          <div>
            <button className="bg-[#FD8703] font-semibold py-2 px-2 w-fit rounded-md">
              Let's Talk!
            </button>
            <p className="text-white text-sm">with our creative consultant</p>
          </div>
          <div className="flex gap-[0.8rem]">
            <div className="bg-[#FEF0CD] w-[3rem] h-[3rem] rounded-full flex justify-center items-center">
              <BsInstagram size={25} color={"#FD8703"} />
            </div>
            <div className="bg-[#FEF0CD] w-[3rem] h-[3rem] rounded-full flex justify-center items-center">
              <FaTiktok size={25} color={"#FD8703"} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Landing;
