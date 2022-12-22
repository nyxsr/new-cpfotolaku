import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BGHero, TemporaryVideo } from "../../../assets/assets";
import Navbar from "../../../components/Navbar/Navbar";
import ElevatePitch from "./ElevatePitch";

function Landing() {
  const [hidePhoto, setHidePhoto] = useState(false);
  const [hideVideo, setHideVideo] = useState(true);
  const [smallDevices, setSmallDevices] = useState(false);

  let { scrollY } = useScroll();

  const VideoLoaded = () => {
    setHidePhoto(true);
    setHideVideo(false);
  };

  const y = useTransform(scrollY, [0, 300], ["0%", "-15%"]);
  const gap = useTransform(scrollY, [0, 300], ["80%", "0%"]);
  const ctaY = useTransform(scrollY, [0, 300], ["0%", "-80%"]);

  useEffect(() => {
    let width = window.screen.width;
    if (width <= 400) {
      setSmallDevices(true);
    }
  }, []);

  return (
    <motion.section id="landing" className="h-[90vh] relative w-screen">
      <AnimatePresence>
        {hidePhoto === false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundImage: `url(${BGHero})` }}
            className="w-full h-full absolute bg-no-repeat bg-fixed bg-fill z-0"
          />
        )}
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onLoadedData={VideoLoaded}
          style={{ visibility: hideVideo === true ? "hidden" : "visible" }}
          autoPlay
          muted
          loop
          className="fixed w-full h-full object-cover"
        >
          <source src={TemporaryVideo} type="video/mp4" />
        </motion.video>
      </AnimatePresence>
      <Navbar />
      <motion.div
        style={{ y, gap }}
        className="flex flex-col h-[60%] px-6 pt-20 fixed -z-0"
      >
        <motion.h1 className="text-white font-bold text-xl sm:text-3xl w-[90%]">
          Jasa Foto Yang Memahami Kebutuhan Bisnis Anda
        </motion.h1>
        <motion.div
          className={`flex flex-col gap-4 absolute ${
            smallDevices ? "-bottom-5" : "-bottom-24"
          } `}
          style={{ y: ctaY }}
        >
          <div className="flex flex-col">
            <a className="bg-[#FD8703] font-semibold py-2 px-2 w-fit rounded-md" href="https://wa.me/081394683395">
              Let's Talk!
            </a>
            <p className="text-white text-sm">with our creative consultant</p>
          </div>
          <div className="flex gap-[0.8rem]">
            <div
              className={`bg-[#FEF0CD] ${
                smallDevices ? "w-[1.5rem] h-[1.5rem]" : "w-[3rem] h-[3rem]"
              } rounded-full flex justify-center items-center`}
            >
              <BsInstagram size={smallDevices ? 15 : 25} color={"#FD8703"} />
            </div>
            <div
              className={`bg-[#FEF0CD] ${
                smallDevices ? "w-[1.5rem] h-[1.5rem]" : "w-[3rem] h-[3rem]"
              } rounded-full flex justify-center items-center`}
            >
              <FaTiktok size={smallDevices ? 15 : 25} color={"#FD8703"} />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className={`absolute bottom-0 z-10`}>
        <ElevatePitch />
      </motion.div>
    </motion.section>
  );
}

export default Landing;
