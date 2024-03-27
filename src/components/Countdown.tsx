"use client";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import LockWhite from "../../public/lock-white.svg";
import BG from "../../public/presale-bg.svg";

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

  const deadline = "2024-03-27T15:30";
  let interval: any;
  // const intervalRef = useRef(null);


  useEffect(() => {
    const storedDeadline = localStorage.getItem("deadline");
    let interval: any;

    const getTime = () => {
      const now = Date.now();
      const deadlineTime = new Date(deadline).getTime();

      if (now >= deadlineTime) {
        setCountdownFinished(true);
        clearInterval(interval);
        return;
      }

      const timeRemaining = deadlineTime - now;
      const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);
    };

    if (!storedDeadline) {
      localStorage.setItem("deadline", Date.parse(deadline).toString());
    } else {
      const storedDeadlineTime = parseInt(storedDeadline, 10);
      if (Date.now() >= storedDeadlineTime) {
        setCountdownFinished(true);
      }
    }

    getTime(); // Call getTime initially to set the state immediately
    interval = setInterval(getTime, 1000); // Call getTime inside setInterval

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <section className="font-orbitron text-center text-[#EDEDED] bg-presale">
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
            <p className="font-bold">
              {minutes < 10 ? `0${minutes}` : minutes}
            </p>
            <p className="text-[#9C9C9C] font-orbitron text-xs md:text-sm mt-4">
              Minutes
            </p>
          </div>
          <div>:</div>
          <div id="seconds" className=" flex flex-col mx-1 md:mx-2">
            <p className="text-[#00D5E9] font-bold">
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
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
