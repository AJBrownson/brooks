"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LockWhite from "../../public/lock-white.svg";
import BG from "../../public/presale-bg.svg"

const strokeStyle = {
  textShadow:
    "-1px -1px 0 #F5BF2D, 1px -1px 0 #F5BF2D, -1px 1px 0 #F5BF2D, 1px 1px 0 #F5BF2D",
};

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdownFinished, setCountdownFinished] = useState(false);

  const deadline = "30, March 2024";
  // const deadline = "11:00 AM";
  let interval: any;
  // const intervalRef = useRef(null);

  useEffect(() => {
  const getTime = () => {
    let interval: any;
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));

    if (time <= 0) {
      setCountdownFinished(true);
      clearInterval(interval);
      return;
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => getTime(deadline), 1000);

  //   return () => clearInterval(interval);
  // }, []);

// useEffect line was here
    getTime(); // Call getTime initially to set the state immediately
    const interval = setInterval(getTime, 1000); // Call getTime inside setInterval

    return () => clearInterval(interval);
  }, []);
  
  // const strokeStyle = {
  //   WebkitTextStroke: "1px #00D5E9",
  // };

  return (
    <>
      <section className="font-orbitron mt-80 md:mt-96 text-center text-[#EDEDED] bg-presale">

      {countdownFinished ? (
        <h1
          className="text-lg md:text-2xl tracking-widest font-medium"
          style={strokeStyle}
        >
          PRESALE IS LIVE
        </h1>
         ) : (
        <h1
          className="text-lg md:text-2xl tracking-widest font-medium"
          style={strokeStyle}
        >
          PRESALE COUNTDOWN
        </h1>
    )}
        <div className="text-xl md:text-4xl flex gap-2 justify-center mt-5">
          <div id="days" className=" flex flex-col mx-1 md:mx-2">
            <p className="font-bold">{days < 10 ? `0${days}` : days}</p>
            <p className="text-[#9C9C9C] font-orbitron text-xs md:text-sm mt-4">
              Days
            </p>
          </div>
          <div>:</div>
          <div id="hours" className=" flex flex-col mx-1 md:mx-2">
            <p className="font-bold">{hours < 10 ? `0${hours}` : hours}</p>
            <p className="text-[#9C9C9C] font-orbitron text-xs md:text-sm mt-4">
              Hours
            </p>
          </div>
          <div>:</div>
          <div id="minutes" className=" flex flex-col mx-1 md:mx-2">
            <p className="font-bold">{minutes < 10 ? `0${minutes}` : minutes}</p>
            <p className="text-[#9C9C9C] font-orbitron text-xs md:text-sm mt-4">
              Minutes
            </p>
          </div>
          <div>:</div>
          <div id="seconds" className=" flex flex-col mx-1 md:mx-2">
            <p className="text-[#00D5E9] font-bold">{seconds < 10 ? `0${seconds}` : seconds}</p>
            <p className="text-[#9C9C9C] font-orbitron text-xs md:text-sm mt-4">
              Seconds
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-12">
          {countdownFinished ? (
            <button className="font-space px-8 lg:px-20 py-2 lg:py-3 bg-[#0099FF] border border-gray-800 inline-flex items-center">
              Buy Presale
            </button>
          ) : (
            <button className="font-space px-8 lg:px-20 py-2 lg:py-3 border border-gray-800 inline-flex items-center">
              Get Ready! <Image src={LockWhite} alt="" className="ml-3" />
            </button>
          )}
        </div>
      </section>
    </>
  );
}
