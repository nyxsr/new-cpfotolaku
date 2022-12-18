import React from "react";
import { motion } from "framer-motion";
import { LoveUs } from "../../../assets/assets";

function LogoClient() {
  return (
    <div className="relative">
      <div className="flex justify-center pt-5 pb-2 relative z-20 bg-[#1c1c1c]">
    <img src={LoveUs} alt="" />
      </div>
    <motion.section
      animate={{ x: ["0%", "-68%",'0%'] }}
      transition={{ repeat: Infinity, repeatType:'mirror', type:'tween', ease:'linear', duration: 30, repeatDelay:.2 }}
      className="bg-[#282828] flex gap-5 text-2xl font-bold items-center px-5 w-fit text-white relative z-20"
      >
      <p className="w-fit px-2 text-center">Jiniso</p>
      <p className="w-fit px-2 text-center">Sanvanina</p>
      <p className="w-fit px-2 text-center">Guten Inc</p>
      <p className="w-fit px-2 text-center">eve skinpro</p>
      <p className="w-fit px-2 text-center">SWEATERPOLOS.ID</p>
      <p className="w-fit px-2 text-center">SK 69</p>
      <p className="w-fit px-2 text-center">ELVICTO</p>
      <p className="w-fit px-2 text-center">buttonscarves</p>
      <p className="w-fit px-2 text-center">ANTARESTAR</p>
    </motion.section>
      </div>
  );
}

export default LogoClient;
