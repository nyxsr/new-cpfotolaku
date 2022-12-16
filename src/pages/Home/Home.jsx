import React, { useEffect } from "react";
import Behind from "./CompPage/Behind";
import Benefit from "./CompPage/Benefit";
import Client from "./CompPage/Client";
import Landing from "./CompPage/Landing";
import Model from "./CompPage/Model";
import Process from "./CompPage/Process";
import Services from "./CompPage/Services";

function Home() {
  useEffect(() => {
    document.title = "Welcome to Fotolaku";
  }, []);

  return (
    <div className="w-screen overflow-hidden">
      <Landing />
      <Process/>
      <Benefit />
      <Services/>
      <Model/>
      <Client/>
    </div>
  );
}

export default Home;
