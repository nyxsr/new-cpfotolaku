import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BGHero, TemporaryVideo } from "../../../assets/assets";
import Navbar from "../../../components/Navbar/Navbar";
import ElevatePitch from "./ElevatePitch";
import LogoClient from "./LogoClient";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

function Landing() {
  const [hidePhoto, setHidePhoto] = useState(false);
  const [hideVideo, setHideVideo] = useState(true);
  const [ref,inView] = useInView({threshold:0.1});
  const [isFixed,setFixed] = useState(false);
  const {isShow} = useSelector((state)=>state.benefitView)

  useEffect(()=>{
    if (inView === true) {
      setFixed(true)
    }
    if (isShow === false) {
      setFixed(false)
    }
  },[inView,isShow])
  
  let { scrollY } = useScroll();

  const VideoLoaded = () =>{
    setHidePhoto(true)
    setHideVideo(false)
  }

  const y = useTransform(scrollY, [0, 300], ["0%", "-15%"]);
  const gap = useTransform(scrollY, [0, 300], ["80%", "0%"]);
  const ctaY = useTransform(scrollY, [0, 300], ["0%", "-80%"]);
  return (
    <motion.section className="h-[150vh] relative w-screen">
        <AnimatePresence>
      {hidePhoto === false && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} style={{ backgroundImage: `url(${BGHero})` }} className='w-full h-full absolute bg-no-repeat bg-fixed bg-fill z-0'/>
          )}
    <motion.video initial={{ opacity:0 }} animate={{ opacity:1 }} onLoadedData={VideoLoaded} style={{ visibility:hideVideo === true ? 'hidden' : 'visible' }} autoPlay muted loop className="fixed w-full h-full object-cover">
        <source src={TemporaryVideo} type="video/mp4" />
      </motion.video>
          </AnimatePresence>
      <Navbar />
      <motion.div
        style={{ y, gap }}
        className="flex flex-col h-[50%] px-6 pt-10 fixed -z-0"
      >
        <motion.h1 className="text-white font-bold text-xl sm:text-3xl w-[90%]">
          Jasa Foto Yang Memahami Kebutuhan Bisnis Anda
        </motion.h1>
        <motion.div
          className="flex flex-col gap-4 absolute -bottom-24"
          style={{ y: ctaY }}
        >
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
        </motion.div>
      </motion.div>
      <div className={`${isFixed === true ? 'fixed' :'absolute'} bottom-0 z-10`}>
        <ElevatePitch />
        <LogoClient />
        <div ref={ref}/>
      </div>
    </motion.section>
  );
}

export default Landing;
