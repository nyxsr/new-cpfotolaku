import React, { useEffect } from "react";
import Benefit from "./CompPage/Benefit";
import Client from "./CompPage/Client";
import Landing from "./CompPage/Landing";
import LogoClient from "./CompPage/LogoClient";
import Process from "./CompPage/Process";
import Services from "./CompPage/Services";
import Behind from './CompPage/Behind'
import CTA from "./CompPage/CTA";
import Footer from "./CompPage/Footer";

function Home() {
  useEffect(() => {
    document.title = "Welcome to Fotolaku";
  }, []);

  return (
    <div className="w-screen overflow-hidden">
      <Landing />
      <LogoClient/>
      <Process/>
      <Services/>
      <Benefit />
      <Client/>
      <Behind/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default Home;
