/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link"
import Hero from "../../public/hero.svg";
import About from "../../public/about-hero.png"
import LockWhite from "../../public/lock-white.svg"
// import LockBlack from "../../public/lock-black.svg"
import Circle from "../../public/circle.png";
import Gradient from "../../public/gradient-bg.svg";
import { InfiniteSlider } from "@/components/Carousel";
import Telegram from "../../public/telegram.png";
import X from "../../public/X.png";
import Discord from "../../public/Discord.png";
import VectorUp from "../../public/Vector 56.svg";
import VectorDown from "../../public/vector-down.png";
import "./custom.css"


const strokeStyle = {
  textShadow: "-1px -1px 0 #F5BF2D, 1px -1px 0 #F5BF2D, -1px 1px 0 #F5BF2D, 1px 1px 0 #F5BF2D"
};



export default function Home() {
  return (
    <main className="font-space relative">
      {/* Hero section */}
      <Image src={Hero} alt="" className="w-full object-cover" />
      <section className="z-50 absolute top-56 text-center px-8 lg:px-0" id="home">
        <h1 className="text-center text-[90px] lg:text-[164px] font-orbitron font-extrabold" style={strokeStyle}>
          <span className="text-[#00D5E9]">R</span>oo
          <span className="text-[#00D5E9]">ks</span>
        </h1>
        <p className="text-lg lg:px-72 font-orbitron">
          The most shareable meme coin out there. While the dogs and frogs have
          had their moment, now it's Rook's time to shine.
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-3">
          <button className="mt-4 lg:mt-8 px-3 lg:px-12 py-3 border border-white text-white hover:border-white relative group inline-flex items-center">
          <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute inset-0 flex items-center justify-center">
              Mint Rooks <Image src={LockWhite} alt="" className="ml-2" />
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Coming Soon
            </span>
          </button>

          <button className="font-light mt-4 lg:mt-8 px-3 lg:px-12 py-3 bg-[#0099FF] hover:bg-transparent border border-transparent hover:border-white relative group inline-flex items-center">
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute inset-0 flex items-center justify-center">
              Presale <Image src={LockWhite} alt="" className="ml-2" />
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Coming Soon
            </span>
          </button>

        </div>
      </section>

      {/* Gradient section */}
      <section>
        <Image
          src={Gradient}
          alt="A gradient picture"
          className="h-[21.5rem] absolute top-[12rem]"
        />
      </section>

      {/* About section */}
      {/* h-72 sm:h-80 lg:h-96    h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128*/}
      {/* <section className="mt-28 lg:mt-96 px-8 lg:px-40" id="about">

      container flex justify-center mx-auto sm:py-12 lg:py-24 lg:justify-between
        <div className="flex justify-between items-center">
          <div className="">
            <Image
              src={About}
              alt=""
              className=""
            />
          </div>

          <div className="flex flex-col w-[50%]">
          <h1 className="font-orbitron font-bold lg:mb-10 leading-snug text-4xl">
            ABOUT ROOKS
          </h1>
            <p className="mb-2 text-base">
              Rooks Coin, the ultimate meme vibe! Just like rooks rock the
              chessboard, we're here to rule the meme world! Our coin is all
              about moving freely, spreading laughs in every direction, no
              blocks allowed. We own the meme space, one viral trend or
              hilarious post at a time, making sure the fun never ends. Rooks
              Coin is the backbone of meme culture, and with us, you'll be
              unstoppable in spreading the joy of memes!
            </p>

            <p className="font-medium text-lg">
              Together, we'll make the digital world a more meme-friendly place,
              one transaction at a time!
            </p>
          </div>
        </div>
      </section> */}

      <section className="mt-28 lg:mt-96 px-8 lg:px-20 py-20 gap-10" id="about">
      <Image src={VectorUp} alt="" />
      <div className="flex">
      <div className="">
            <Image
              src={About}
              alt=""
              className=""
            />
          </div>

          <div className="flex flex-col w-[50%]">
          <h1 className="font-orbitron font-bold lg:mb-5 leading-snug text-3xl">
            ABOUT ROOKS
          </h1>
            <p className="mb-4 text-lg">
              Rooks Coin, the ultimate meme vibe! Just like rooks rock the
              chessboard, we're here to rule the meme world! Our coin is all
              about moving freely, spreading laughs in every direction, no
              blocks allowed. We own the meme space, one viral trend or
              hilarious post at a time, making sure the fun never ends. Rooks
              Coin is the backbone of meme culture, and with us, you'll be
              unstoppable in spreading the joy of memes!
            </p>

            <p className="font-medium text-xl">
              Together, we'll make the digital world a more meme-friendly place,
              one transaction at a time!
            </p>
          </div>
          </div>
      </section>

      {/* Story section */}
      <section className="py-10 px-8 lg:px-60 bg-small mt-20 lg:mt-0">
        <h1 className="text-[#00D5E9] text-center font-extrabold text-2xl mb-5">
          Rooks Revolution: Shaping the Future of Memes
        </h1>
        <p className="text-[#EDEDED] text-center text-lg mb-5">
          In the tumultuous world of memecoins, a fierce battle ensues between
          "Frogs Coin" and "Dogs Coin," each touting their own symbols and
          promises. However, amidst the chaos, a new player quietly emerges:
          "Rooks." Represented by the steadfast rook from chess, it offers
          stability and reliability amid the storm. As "Frogs" and "Dogs" clash,
          investors flock to "Rooks" for refuge, propelling its value steadily
          upward. When the dust settles, "Rooks" emerges victorious, proving
          that in the volatile realm of memes, quiet strength can reign supreme.
        </p>
      </section>

      {/* Carousel section */}
      <section>
        <InfiniteSlider />
      </section>

      {/* Tokenomics section */}
      {/* lg:justify-between justify-center rounded-sm  xl:max-w-lg lg:text-left */}
      <section className="px-8 lg:px-20 py-24">
        <div className="container flex flex-col mx-auto sm:py-12 lg:py-24 lg:flex-row justify-between">
          <div className="flex flex-col justify-center lg:p-4 text-center lg:max-w-xl">
            <h1 className="text-center leading-snug text-4xl lg:text-5xl font-orbitron">
              Tokenomics
            </h1>

            <div className="mb-10 lg:mb-0 mt-5 flex gap-4 justify-center">
              <div className="p-1 bg-[#0099FF] h-4 w-4"></div>
              <div className="p-1 bg-[#00CCFF] h-4 w-4"></div>
              <div className="p-1 bg-[#1300FF] h-4 w-4"></div>
              <div className="p-1 bg-[#6600FF] h-4 w-4"></div>
              <div className="p-1 bg-[#9900FF] h-4 w-4"></div>
            </div>

            <div className="mb-10 lg:mb-0 lg:hidden flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96">
              <Image src={Circle} alt="" />
            </div>

            <p className="text-center mt-6 mb-2 text-lg">
              No taxes, no nonsense. It's as straightforward as that. LP tokens
              are destroyed, and contract ownership is relinquished.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96">
            <Image src={Circle} alt="" />
          </div>
        </div>
      </section>

      {/* Footer section */}
      <section className="bg-small text-center text-[#EDEDED] py-5 px-8 lg:px-64">
        <Image src={VectorUp} alt="" className="mb-16" />
        <h1 className="text-4xl lg:text-5xl font-orbitron mb-5">
          Contact Rooks
        </h1>
        <div className="flex justify-center gap-5 mb-14">
          <Image src={X} alt="" />
          <Image src={Discord} alt="" />
          <Image src={Telegram} alt="" />
        </div>
        <p className="font-orbitron font-semibold text-lg text-[#00D5E9] mb-5">
          $Rooks coin is a tribute to the meme we all adore.
        </p>
        <p className="text-lg">
          $Rooks coin is a tribute to the meme we all adore. $ROOKS is a
          lighthearted meme coin created purely for entertainment. It's not
          designed for making money or any financial gain. There's no formal
          team or roadmap behind it, just a fun token in the world of memes.
        </p>
        <Image src={VectorDown} alt="" className="mt-10 lg:mt-16 lg:mb-3" />

        <div className="font-orbitron font-medium text-xs lg:text-md">
          <p>2024 Rooks. All rights reserved!</p>
        </div>
      </section>


      {/* Mobile navigation menu widgets */}
      <section className="fixed flex flex-col gap-3 bottom-56 right-0">
        <Link href="#home">
        <div className="p-3 pl-5 pr-20 bg-white text-black text-left">
          Home
        </div>
        </Link>
        <Link href="#about">
        <div className="p-3 pl-5 pr-20 bg-white text-black text-left">
          About
        </div>
        </Link>
        <div className="p-3 pl-5 pr-20 bg-white text-black text-left">
          Twitter
        </div>
        <div className="p-3 pl-5 pr-20 bg-white text-black text-left">
          Discord
        </div>
        <div className="p-3 pl-5 pr-20 bg-white text-black text-left">
          Telegram
        </div>
      </section>
    </main>
  );
}
