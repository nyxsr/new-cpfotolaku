import React, { useEffect } from "react";
import Benefit from "./CompPage/Benefit";
import ElevatePitch from "./CompPage/ElevatePitch";
import Landing from "./CompPage/Landing";

function Home() {
  useEffect(() => {
    document.title = "Welcome to Fotolaku";
  }, []);

  return (
    <div className="w-screen overflow-hidden">
      <Landing />
      <ElevatePitch/>
      <Benefit/>
    </div>
  );
}

export default Home;
