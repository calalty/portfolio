import { sweetcaroline } from "@/assets";
import Circle from "@/icons/circle";

import Pause from "@/icons/pause";
import Play from "@/icons/play";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const musicPlayer = useRef();
  const progressBar = useRef();
  const animRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(musicPlayer?.current?.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;

    if (progressBar.current.max) {
      setIsPlaying();
    }
  }, [musicPlayer?.current?.loadmetadata, musicPlayer?.current?.readyState]);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
      musicPlayer.current.play();
      animRef.current = requestAnimationFrame(whilePlaying);
    } else {
      musicPlayer.current.pause();
      cancelAnimationFrame(animRef.current);
    }
  };

  const calcTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const returnMins = mins < 10 ? `0${mins}` : `${mins}`;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMins}:${returnSeconds}`;
  };

  const whilePlaying = () => {
    progressBar.current.value = musicPlayer.current.currentTime;
    changePlayerCurrentTime();
    animRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    musicPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  return (
    <div className="flex justify-center items-center text-[#eef1fb] ">
      <div className="relative flex items-center justify-center">
        <Circle />
        <div className="w-fit text-left p-2 z-10">
          <audio
            crossOrigin="anonymous"
            ref={musicPlayer}
            src="/sweet-caroline.mp3"
            preload="metadata"
          ></audio>

          <div className="flex">
            <Image
              alt=""
              className="lg:w-[4.25vw] lg:h-[4.25vw] sm:w-[60px] sm:h-[60px] w-[6vh] h-[6vh] rounded-md"
              src={sweetcaroline}
            />
            <div className="flex flex-col lg:text-[1.5vw] sm:text-[20px] text-[2vh] ml-4">
              <p>Sweet Caroline</p>
              <p className="font-thin">Neil Diamond</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-3">
            <button onClick={togglePlayPause}>
              {isPlaying ? <Pause /> : <Play />}
            </button>
            <input
              className="accent-[#eef1fb] mx-4"
              ref={progressBar}
              type="range"
              defaultValue="0"
              onChange={changeRange}
            />
            <div className="lg:text-[1vw] sm:text-[16px] text-[1.5vh]">
              {calcTime(currentTime)}
            </div>
          </div>
        </div>
      </div>

      <h1 className="maelstrom-font tracking-widest lg:text-[3.5vw] lg:leading-[3vw] sm:text-[3rem] sm:leading-[2.5rem] text-[4.5vh] ml-8 leading-[3.5vh]">
        TU <br /> NE
      </h1>
    </div>
  );
}

export default MusicPlayer;
