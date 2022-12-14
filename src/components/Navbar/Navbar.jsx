import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../../assets/assets";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { NavbarAnimate, NavbarItemAnimate } from "../../assets/animation";

function Navbar() {
  const [isToggle, setToggle] = useState(false);

  return (
    <nav className="flex px-6 justify-between items-center py-5 z-20 absolute w-screen">
      <img src={Logo} className="w-[6rem] self-start" alt="" />
      <AnimatePresence>
        <motion.div
          variants={NavbarAnimate}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={() => setToggle(isToggle === false ? true : false)}
        >
          <AnimatePresence>
            {isToggle === false ? (
              <RxHamburgerMenu size={25} color={"#181818"} />
            ) : (
              <motion.div
                variants={NavbarAnimate}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex gap-2 flex-col items-end"
              >
                <IoClose size={25} color={"#181818"} />
                <AnimatePresence>
                  <motion.a variants={NavbarItemAnimate} href="#landing">
                    Home
                  </motion.a>
                </AnimatePresence>
                <AnimatePresence>
                <motion.a variants={NavbarItemAnimate} href="#process">
                  Process
                </motion.a>
                </AnimatePresence>
                <AnimatePresence>
                <motion.a variants={NavbarItemAnimate} href="#services">
                  Services
                </motion.a>
                </AnimatePresence>
                <AnimatePresence>
                <motion.a variants={NavbarItemAnimate} href="#model">
                  Model
                </motion.a>
                </AnimatePresence>
                <AnimatePresence>
                <motion.a variants={NavbarItemAnimate} href="#benefit">
                  Benefit
                </motion.a>
                </AnimatePresence>
                <AnimatePresence>
                <motion.a variants={NavbarItemAnimate} href="#client">
                  Our Client
                </motion.a>
                </AnimatePresence>
                <AnimatePresence>
                <motion.a variants={NavbarItemAnimate} href="#footer">
                  Contact us
                </motion.a>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
