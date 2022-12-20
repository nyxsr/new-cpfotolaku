import React from "react";
import { AiFillCheckCircle, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { ProcessConsult } from "../../assets/assets";
import { DataService } from "../../data/ListData";
import { FaArrowLeft } from 'react-icons/fa'

function Details() {
    const {id} = useParams()
    const termsandCond = DataService[id].terms
    const navigate = useNavigate();

  return (
    <section className="relative">
      <div
        className="h-[60vh] w-screen bg-contain bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${DataService[id].foto})` }}
      />
      <div className="absolute top-4 left-4 bg-[#D7D7D7] text-2xl py-1 px-1 rounded-full" onClick={()=>navigate(-1)}>
        <FaArrowLeft/>
      </div>
      <p className="pt-6 pb-2 font-bold text-2xl px-6 text-white">
        {DataService[id].text}
      </p>
      <div className="px-6 flex items-center gap-2">
        <div className="flex relative text-[#FD8703] text-xl">
          {Array.from(Array(5), (e, i) => {
            return <AiOutlineStar />;
          })}
          <div className="flex text-xl text-[#FD8703] absolute">
            {Array.from(Array(DataService[id].rating), (e, i) => {
              return <AiFillStar />;
            })}
          </div>
        </div>
        <p className="font-semibold text-xl text-white">{DataService[id].rating}</p>
      </div>
      <p className="text-[#FD8703] font-semibold text-xl pt-11 px-6">About</p>
      <p className="pl-6 text-white">
        {DataService[id].desc}
      </p>
      <div className="pt-10 pl-6">
        <p className="text-[#9d9d9d] pb-2">Terms & Condition</p>
        {termsandCond.map((v,i)=>{
          return <Terms key={i} text={v}/>
        })}
      </div>
      <h2 className="px-6 py-6 text-[#FD8703] font-semibold text-xl">Portofolio</h2>
      <GridSection/>
    </section>
  );
}

function Terms(props) {
    return(
        <div className="flex items-center gap-2 py-1">
            <AiFillCheckCircle color="#fd8703" size={30}/>
            <p className="text-white">{props.text}</p>
        </div>
    )
}

function GridSection(){
    return(
        <section className="columns-2 gap-6 px-6">
           <img src={ProcessConsult} className='w-full py-3 object-cover rounded-lg' alt="" />
        </section>
    )
}

export default Details;
