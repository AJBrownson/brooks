import Image from "next/image"
import LockWhite from "../../public/lock-white.svg";



const strokeStyle = {
  textShadow:
    "-1px -1px 0 #F5BF2D, 1px -1px 0 #F5BF2D, -1px 1px 0 #F5BF2D, 1px 1px 0 #F5BF2D",
};



export default function Countdown() {
  return (
    <>
      <section className="font-orbitron mt-80 text-center text-[#EDEDED]">
        <h1 className="text-4xl leading-loose font-medium" style={strokeStyle}>
          PRESALE COUNTDOWN
        </h1>

        <div className="text-5xl flex gap-2 justify-center mt-5">
          <div id="days" className=" flex flex-col mx-2">
            <p>03</p>
            <p className="text-[#9C9C9C] font-orbitron text-sm mt-4">Days</p>
          </div>
          <div>:</div>
          <div id="hours" className=" flex flex-col mx-2">
            <p>24</p>
            <p className="text-[#9C9C9C] font-orbitron text-sm mt-4">Hours</p>
          </div>
          <div>:</div>
          <div id="minutes" className=" flex flex-col mx-2">
            <p>24</p>
            <p className="text-[#9C9C9C] font-orbitron text-sm mt-4">Minutes</p>
          </div>
          <div>:</div>
          <div id="seconds" className=" flex flex-col mx-2">
            <p className="text-[#00D5E9]">24</p>
            <p className="text-[#9C9C9C] font-orbitron text-sm mt-4">Seconds</p>
          </div>
        </div>

        <div>
        <button
            className="mt-4 lg:mt-8 px-8 lg:px-20 py-2 lg:py-3 border border-gray-800 inline-flex items-center"
          >Get Ready! <Image src={LockWhite} alt="" className="ml-3" /></button>
                  {/* <button
            className="mt-4 lg:mt-8 px-8 lg:px-20 py-2 lg:py-3 bg-[#0099FF] border border-gray-800 inline-flex items-center"
          >Buy Presale</button> */}
        </div>
      </section>
    </>
  );
}
