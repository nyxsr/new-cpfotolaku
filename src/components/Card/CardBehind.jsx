import React, { useRef, useState } from 'react'
import { BsPlay } from 'react-icons/bs'
import { ClientTemporaryVideo } from '../../assets/assets'

function CardBehind() {
    const [isPlay, setPlay] = useState(false);

  const playPauseVideo = (e) => {
    if (isPlay === false) {
      setPlay(true);
      e.target.play();
    } else {
      setPlay(false);
      e.target.pause();
    }
  };
  return (
    <div className="relative w-[21.875rem] my-12 h-fit rounded-2xl">
      <div
        className={`${
          isPlay === false ? "bg-black/30" : ""
        } w-[21.875rem] h-[14.5rem] absolute`}
      >
        {isPlay === false && (
          <div className="w-full h-full flex items-center justify-center text-7xl text-white">
            <BsPlay />
          </div>
        )}
      </div>
      <video
        onClick={(e) => playPauseVideo(e)}
        className="w-[21.875rem] h-[14.5rem] object-cover rounded-2xl"
      >
        <source src={ClientTemporaryVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default CardBehind