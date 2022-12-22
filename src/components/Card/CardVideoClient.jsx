import React, { forwardRef, useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { ClientTemporaryVideo } from "../../assets/assets";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function CardVideoClient(props,ref) {
  const [isPlay, setPlay] = useState(false);

  const playPauseVideo = (e) => {
    if (isPlay === false) {
      const videos = document.getElementsByClassName('video')
      Array.prototype.forEach.call(videos, video =>{
        video.pause();
      })
      setPlay(true);
      e.target.play();
    } else {
      setPlay(false);
      e.target.pause();
    }
  };
  return (
    <div className="relative w-[21.875rem] my-12 h-fit border-[#FD8703] rounded-xl border-2">
      <div
        className={`${
          isPlay === false ? "bg-black/30" : ""
        } w-[21.875rem] h-[14.5rem] absolute rounded-xl`}
      >
        {isPlay === false && (
          <div className="w-full h-full flex items-center justify-center text-7xl text-white">
            <BsPlayCircle />
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <p
            className={`text-white font-bold text-2xl`}
            style={{ WebkitTextStroke: isPlay && "1px black" }}
          >
            Client Name
          </p>
          <p
            className=" text-white font-semibold text-xl"
            style={{ WebkitTextStroke: isPlay && "1px black" }}
          >
            Client Brand
          </p>
        </div>
      </div>
      <video
        onClick={(e) => playPauseVideo(e)}
        id={props.id}
        ref={ref}
        className="video w-[21.875rem] h-[14.5rem] object-cover rounded-xl"
      >
        <source src={ClientTemporaryVideo} type="video/mp4" />
      </video>
      <div className="flex flex-col py-3 gap-5 px-2">
        <p className="text-white text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem
          veniam rem itaque, nisi fugit praesentium libero odio eaque rerum!
        </p>
        <div className="flex relative text-[#FD8703] text-3xl">
          {Array.from(Array(5), (e, i) => {
            return <AiOutlineStar />;
          })}
          <div className="flex text-3xl text-[#FD8703] absolute">
            {Array.from(Array(props.rating), (e, i) => {
              return <AiFillStar />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const WrappedCardVideoClient = forwardRef(CardVideoClient);

export default WrappedCardVideoClient;
