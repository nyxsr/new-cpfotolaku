import { AnimatePresence } from "framer-motion"
import { isMobile } from "react-device-detect";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import { ImageNotPhone } from "./assets/assets";
import Details from "./pages/Details/Details";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import ModelDetails from "./pages/Model/ModelDetails";

function App() {
  
  if (!isMobile) {
    return(
        <section className="flex flex-col justify-center items-center h-screen gap-5">
          <img src={ImageNotPhone} className='w-1/4' alt="" />
          <p className="text-3xl">Silahkan Buka Di Handphone anda ya</p>
        </section>
    )
}
  return (
    <BrowserRouter>
      <AnimatedRoutes/>
    </BrowserRouter>
  )
}

function AnimatedRoutes() {
  const location = useLocation();
  return(
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        //* Main Page Path
        <Route path='/' element={<Navigate to='/welcome'/>} />

        //* Registered Path
        <Route path="/welcome" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/model/:id" element={<ModelDetails/>}/>

        //! If Page Not Found
        <Route path="*" element={<Error/>}/>
      </Routes>
    </AnimatePresence>
  )
}
  export default App