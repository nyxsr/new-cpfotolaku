import { AnimatePresence } from "framer-motion"
import { isMobile } from "react-device-detect";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

function App() {
  
  if (!isMobile) {
    return(
        <section>Silahkan Buka di hape awokawok</section>
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

        //! If Page Not Found
        <Route path="*" element={<Error/>}/>
      </Routes>
    </AnimatePresence>
  )
}
  export default App