/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import ModalDialog from "react-basic-modal-dialog";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../public/hero.svg";
import HeroMobile from "../../public/hero-mobile.png";
import About from "../../public/about-hero.png";
import LockWhite from "../../public/lock-white.svg";
import LockBlack from "../../public/lock-black.svg";
import Tokenomics from "../../public/tokenomics.png";
import Gradient from "../../public/gradient-bg.svg";
import { Carousel } from "@/components/Carousel";
import Telegram from "../../public/Telegram.png";
import TelegramDark from "../../public/TelegramDark.png";
import X from "../../public/X.png";
import XDark from "../../public/XDark.png";
import Discord from "../../public/Discord.png";
import DiscordDark from "../../public/DiscordDark.png";
import VectorUp from "../../public/Vector 56.svg";
import VectorDown from "../../public/vector-down.png";
import Gaming from "../../public/gaming.png";
import Logo from "../../public/logo.png";
import NavMenu from "@/components/NavMenu";
import Countdown from "@/components/Countdown";
import Cancel from "../../public/cancel-01.png";
import Roadmap from "../../public/roadmap-webb.png";
import RoadmapMobile from "../../public/roadmap.png";
import Drop from "../../public/drop.png";

const strokeStyle = {
  textShadow:
    "-1px -1px 0 #F5BF2D, 1px -1px 0 #F5BF2D, -1px 1px 0 #F5BF2D, 1px 1px 0 #F5BF2D",
};

export default function Home() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

  return (
    <main className="font-space relative 2xl:max-w-7xl">
      {/* Mobile menu navigation
            <section className="fixed lg:hidden">
        <NavMenu />
      </section> */}
      {/* Hero images */}
      <Image
        src={Hero}
        alt=""
        className="hidden lg:block w-full object-contain"
        id="home"
      />
      <Image
        src={HeroMobile}
        alt=""
        className="w-full object-cover lg:hidden"
      />
      {/* Mobile menu navigation  */}
      <div className="p-8 bg-blur fixed right-0 top-0 lg:hidden"></div>
      <section className="absolute top-1 right-8 lg:hidden p-4">
        <NavMenu />
      </section>

      {/* Gradient section lg:h-[21.5rem] absolute top-[9.5rem] md:top-72 lg:top-[12rem] */}
      {/* <section>
        <Image
          src={Gradient}
          alt="A gradient picture"
          className="lg:h-[21.5rem] absolute top-32 md:top-72 lg:top-20 xl:top-[12rem] 2xl:top-32"
        />
      </section> */}
      <section className="gradientSection">
        <Image
          src={Gradient}
          alt="A gradient picture"
          // className="lg:h-[21.5rem] absolute top-32 md:top-72 lg:top-20 xl:top-[12rem] 2xl:top-32"
        />
      </section>

      {/* Hero section top-[9.7rem] md:top-80 lg:top-56 : section=> top-32 md:top-80 lg:top-56 */}
      <section className="top-32 md:top-80 lg:top-40 xl:top-56 2xl:top-48 absolute z-10 text-center px-[6px] lg:px-0">
        <h1
          className="mb-[-12px] text-center text-[72px] md:text-[120px] lg:text-[164px] 2xl:text-[200px] font-orbitron font-extrabold"
          style={strokeStyle}
        >
          <span className="text-[#00D5E9]">R</span>oo
          <span className="text-[#00D5E9]">ks</span>
        </h1>
        <p className="text-sm lg:text-lg lg:px-72 font-orbitron">
          The most shareable meme coin out there. While the dogs and frogs have
          had their moment, now it's Rook's time to shine.
        </p>

        <div className="mt-2 flex lg:items-center justify-center gap-3">
          <button
            // onClick={openDialog}
            className="mt-4 lg:mt-8 px-8 lg:px-12 py-2 lg:py-3 border border-[#3C3C3C] text-white relative group hover:border-gradient inline-flex items-center"
          >
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute inset-0 flex items-center justify-center">
              Mint Rooks <Image src={LockWhite} alt="" className="ml-2" />
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Coming Soon
            </span>
          </button>

          <button className="font-light mt-4 lg:mt-8 px-8 lg:px-12 py-2 lg:py-3 bg-[#0099FF] hover:bg-[#0182D8] group-hover:border-transparent border border-transparent group relative inline-flex items-center">
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute inset-0 flex items-center justify-center">
              Presale <Image src={LockWhite} alt="" className="ml-2" />
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Coming Soon
            </span>
          </button>

          {/* <button
            onClick={openDialog}
            className="mt-4 lg:mt-8 px-20 lg:px-24 py-2 lg:py-3 border border-[#3C3C3C] text-white hover:border-white relative group hover:border-gradient inline-flex items-center"
          >
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute inset-0 flex items-center justify-center">
              Mint Rooks
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
             Mint Rooks
            </span>
          </button>  */}
        </div>
      </section>

      {/* Countdown section py-20 mt-80 md:mt-96 */}
      {/* <section className="mt-60 md:mt-40 bg-presale bg-center bg-[length:60rem] md:bg-[length:120rem]">
        <Countdown />
      </section> */}

      {/* About section (countdown ? "mt-10 md:mt-0", mt-28 md:mt-80) : normal (mt-60 lg:mt-96 ) */}
      <section
        className="mt-60 lg:mt-96 px-2 lg:px-20 lg:pb-36 gap-10"
        id="about"
      >
        <Image src={VectorUp} alt="" className="mb-4 md:mb-16" />
        <div className="flex flex-col lg:flex-row items-center">
          <div className="">
            <Image src={About} alt="" className="" />
          </div>

          <div className="flex flex-col text-center lg:text-left lg:w-[50%]">
            <h1 className="font-orbitron font-bold mt-3 lg:mt-0 mb-5 leading-snug text-2xl">
              ABOUT ROOKS
            </h1>
            <p className="mb-4 text-sm lg:text-lg">
              Rooks Coin, the ultimate meme vibe! Just like rooks rock the
              chessboard, we're here to rule the meme world! Our coin is all
              about moving freely, spreading laughs in every direction, no
              blocks allowed. We own the meme space, one viral trend or
              hilarious post at a time, making sure the fun never ends. Rooks
              Coin is the backbone of meme culture, and with us, you'll be
              unstoppable in spreading the joy of memes!
            </p>

            <p className="font-medium text-sm lg:text-xl">
              Together, we'll make the digital world a more meme-friendly place,
              one transaction at a time!
            </p>
          </div>
        </div>
        <Image src={VectorDown} alt="" className="mt-4 md:mt-16" />
      </section>

      {/* Story section */}
      <section className="mt-16 lg:mt-4 pb-4 py-10 px-[8px] lg:px-60 bg-story-gradient">
        <h1 className="text-[#00D5E9] font-orbitron text-center font-extrabold text-lg lg:text-2xl mb-5">
          Rooks Revolution: Shaping the Future of Memes
        </h1>
        <p className="text-[#EDEDED] text-center text-sm lg:text-lg mb-5">
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
        <Carousel />
      </section>

      {/* Gaming section gap-10 w-50% w-28 h-28*/}
      <section className="mt-20 lg:mt-36 px-2 lg:px-20">
        <div className="py-6 px-4 lg:px-8 flex justify-between gap-2 lg:gap-40 items-center bg-custom-gradient">
          <div className="w-[70%] lg:w-[45%] flex flex-col">
            <h1 className="font-orbitron font-bold text-sm lg:text-4xl leading-snug mb-3">
              Building Rooks First Gaming System
            </h1>
            <p className="text-sm lg:text-base mb-4">
              Join us to be part of the movement.
            </p>
            <div>
              <button className="text-xs lg:text-base bg-black text-white px-3 lg:px-7 py-3">
                In Development
              </button>
            </div>
          </div>
          <Image src={Gaming} alt="" className="w-40 h-40 lg:w-80 lg:h-80" />
        </div>
      </section>

      {/* Tokenomics section */}
      <section className="mt-20 px-2 lg:px-20 mb-20" id="tokenomics">
        <div className="">
          <div className="flex flex-col justify-center lg:p-4 mb-8 md:mb-16 text-center">
            <h1 className="text-center leading-snug tracking-wide md:tracking-normal text-[28px] lg:text-5xl font-orbitron font-semibold">
              Tokenomics
            </h1>

            <div className="mb-5 lg:mb-0 mt-1 md:mt-3 flex gap-2 md:gap-3 justify-center">
              <div className="p-[2px] md:p-[3px] bg-gradient-to-r from-[#0D0D0D] via-[#996213] to-[#FFA41F] h-auto w-5 md:w-8"></div>
              <div className="p-[2px] md:p-[3px] bg-gradient-to-r from-[#0D0D0D] via-[#999902] to-[#FFFF04] h-auto w-5 md:w-8"></div>
              <div className="p-[2px] md:p-[3px] bg-gradient-to-r from-[#0D0D0D] via-[#2C9999] to-[#49FFFF] h-auto w-5 md:w-8"></div>
              <div className="p-[2px] md:p-[3px] bg-gradient-to-r from-[#0D0D0D] via-[#996468] to-[#FFA7AD] h-auto w-5 md:w-8"></div>
              <div className="p-[2px] md:p-[3px] bg-gradient-to-r from-[#0D0D0D] via-[#115A96] to-[#1D97FC] h-auto w-5 md:w-8"></div>
              <div className="p-[2px] md:p-[3px] bg-gradient-to-r from-[#0D0D0D] via-[#8AC45C] to-[#B3FF78] h-auto w-5 md:w-8"></div>
              <div className="p-[2px] md:p-[3px] bg-gradient-to-r from-[#0D0D0D] via-[#7700C6] to-[#9900FF] h-auto w-5 md:w-8"></div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-between">
            <div className="flex flex-col justify-center xl:-order-first">
              <Image
                src={Tokenomics}
                alt=""
                className="w-80 md:w-[35rem] h-auto"
              />
              <div className="text-center mt-5 flex items-center justify-center gap-4">
                <p className="text-xs md:text-lg text-[#EDEDED] font-orbitron">
                  Token supply:
                </p>
                <p className="text-[#F5F5F5] text-sm md:text-xl font-orbitron font-extrabold">
                  11,999,999,000
                </p>
              </div>
            </div>

            <div className="mt-12 xl:mt-0 flex flex-col gap-3">
              <div className="flex gap-5">
                <div className="w-40 md:w-80 flex border border-[#3C3C3C]">
                  <div className="w-20 md:w-44 bg-gradient-to-r from-[#996212] to-[#FFA41F]"></div>
                </div>
                <p className="text-xs md:text-lg text-[#F2E6E0]">55% Presale</p>
              </div>

              <div className="flex gap-5">
                <div className="w-40 md:w-80 flex border border-[#3C3C3C]">
                  <div className="w-10 md:w-20 bg-gradient-to-r from-[#999903] to-[#FFFF05]"></div>
                </div>
                <p className="text-xs md:text-lg text-[#F2E6E0]">20% Presale</p>
              </div>

              <div className="flex gap-5">
                <div className="w-40 md:w-80 flex border border-[#3C3C3C]">
                  <div className="w-1 md:w-2 bg-gradient-to-r from-[#2C9999] to-[#49FFFF]"></div>
                </div>
                <p className="text-xs md:text-lg text-[#F2E6E0]">2% Team</p>
              </div>

              <div className="flex gap-5">
                <div className="w-40 md:w-80 flex border border-[#3C3C3C]">
                  <div className="w-[6px] md:w-3 bg-gradient-to-r from-[#FFA7AD] to-[#996468]"></div>
                </div>
                <p className="text-xs md:text-lg text-[#F2E6E0]">3% Airdrop</p>
              </div>

              <div className="flex gap-5">
                <div className="w-40 md:w-80 flex border border-[#3C3C3C]">
                  <div className="w-5 md:w-10 bg-gradient-to-r from-[#1D96FF] to-[#115A99]"></div>
                </div>
                <p className="text-xs md:text-lg text-[#F2E6E0]">
                  10% CEX listing
                </p>
              </div>

              <div className="flex gap-5">
                <div className="w-40 md:w-80 flex border border-[#3C3C3C]">
                  <div className="w-[6px] md:w-3 bg-gradient-to-r from-[#B3FF78] to-[#6B9948]"></div>
                </div>
                <p className="text-xs md:text-lg text-[#F2E6E0]">
                  3% Marketing
                </p>
              </div>

              <div className="flex gap-5">
                <div className="w-40 md:w-80 flex border border-[#3C3C3C]">
                  <div className="w-[14px] md:w-7 bg-gradient-to-r from-[#9900FF] to-[#5C0099]"></div>
                </div>
                <p className="text-xs md:text-lg text-[#F2E6E0]">
                  7% Games Improvements
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image src={VectorDown} alt="" className="mt-5 lg:mt-10" />
      </section>

      {/* Roadmap section */}
      <section className="px-2 md:px-5" id="roadmap">
        <h1 className="text-center text-[28px] lg:text-5xl font-orbitron font-semibold">
          Roadmap
        </h1>
        {/* <div className="md:pl-16 mt-20 flex flex-col justify-between items-center md:items-baseline md:gap-10 md:flex-row">
          <Image src={Memes} alt="" className="w-48 lg:w-60" />
          <Image
            src={StagesWeb}
            alt=""
            className="hidden lg:block w-[62.8rem]"
          />
          <Image src={Stages} alt="" className="mt-8 lg:hidden" />
        </div> */}
        <div className="mt-8 md:mt-14 flex items-center justify-center">
          <Image
            src={Roadmap}
            alt=""
            className="hidden md:block md:w-[60rem] md:h-auto md:object-contain"
          />
          <Image src={RoadmapMobile} alt="" className="md:hidden" />
        </div>
      </section>

      {/* Footer section */}
      <section className="text-center text-[#EDEDED] pb-5 px-[8px] lg:px-64">
        <Image src={VectorUp} alt="" className="pt-5 mb-4 lg:mb-16" />
        <h1 className="text-[28px] lg:text-5xl font-orbitron font-semibold">
          Contact Rooks
        </h1>
        <div className="mt-5 mb-5 flex justify-center">
          <Image src={Logo} alt="" className="w-20 h-20 xl:h-28 xl:w-28" />
        </div>
        <div className="flex justify-center gap-5 mb-6 lg:mb-14">
          <Link
            href="https://discord.gg/3P6TmW5urD"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={Discord}
              alt=""
              className="p-3 w-10 h-10 xl:w-14 xl:h-14 xl:p-4 border border-[#3C3C3C] group hover:border-gradient"
            />
          </Link>
          <Link href="#">
            <Image
              src={Telegram}
              alt=""
              className="p-3 w-10 h-10 xl:w-14 xl:h-14 xl:p-4 border border-[#3C3C3C] group hover:border-gradient"
            />
          </Link>
          <Link
            href="https://x.com/memerooks"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={X}
              alt=""
              className="p-3 w-10 h-10 xl:w-14 xl:h-14 xl:p-4 border border-[#3C3C3C] group hover:border-gradient"
            />
          </Link>
        </div>
        <p className="font-orbitron font-semibold text-sm lg:text-lg text-[#00D5E9] mb-3">
          $Rooks coin is a tribute to the meme we all adore.
        </p>
        <p className="text-sm lg:text-lg">
          $ROOKS is a playful meme coin designed simply to join in on the fun of
          the memecoin world. Its main goal is to entertain while also growing
          as a token
        </p>
        <Image src={VectorDown} alt="" className="mt-5 lg:mt-16 lg:mb-3" />

        <div className="font-orbitron font-medium text-[10px] lg:text-md">
          <p className="text-[#999999] mt-4">
            2024 Rooks. All rights reserved!
          </p>
        </div>
      </section>

      {/* Desktop navigation menu widgets  xl:h-80 xl:pt-16 xl:top-0 */}
      <section className="bg-blur pl-4 pt-20 pb-3 z-50 hidden fixed lg:flex flex-col gap-1 bottom-[17rem] right-0 2xl:right-[80rem] xl:h-96 xl:pt-16 lg:top-0">
        <Link href="#home">
          <div className="font-medium p-3 pl-5 pr-5 bg-white text-black text-left border border-black hover:text-white hover:bg-black relative group hover:border-gradient items-center">
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
              Home
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Home
            </span>
          </div>
        </Link>
        <Link href="#about">
          <div className="font-medium p-3 pl-5 pr-5 bg-white text-black text-left border border-black hover:text-white hover:bg-black relative group items-center">
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
              About
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              About
            </span>
          </div>
        </Link>
        <Link href="#tokenomics">
          <div className="font-medium p-3 pl-5 pr-5 bg-white text-black text-left border border-black hover:text-white hover:bg-black relative group items-center">
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
              Tokenomics
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Tokenomics
            </span>
          </div>
        </Link>
        <Link href="#roadmap">
          <div className="font-medium p-[10px] pl-5 pr-5 bg-white text-black text-left border border-black hover:text-white hover:bg-black relative group items-center">
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
              Roadmap
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Roadmap
            </span>
          </div>
        </Link>
        <div
          // onClick={openDialog}
          className="font-medium p-3 pl-5 pr-5 bg-white text-black text-left border border-black hover:text-white hover:bg-black relative group items-center"
        >
          <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
            Mint Rooks <Image src={LockBlack} alt="" className="ml-2" />
          </span>

          <span className="transition-opacity opacity-0 group-hover:opacity-100">
            Coming Soon
          </span>
        </div>

        <div className="flex justify-between gap-3">
          <Link
            href="https://discord.gg/3P6TmW5urD"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="bg-white hover:bg-black border border-black relative group p-5 group">
              <Image
                src={DiscordDark}
                alt=""
                className="absolute inset-0 object-contain w-20 h-auto p-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={Discord}
                alt=""
                className="absolute inset-0 object-contain w-20 h-auto p-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
          <Link href="telegram.com">
            <div className="bg-white hover:bg-black border border-black relative group p-5 group">
              <Image
                src={TelegramDark}
                alt=""
                className="absolute inset-0 object-contain w-20 h-auto p-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={Telegram}
                alt=""
                className="absolute inset-0 object-contain w-20 h-auto p-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
          <Link
            href="https://x.com/memerooks"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="bg-white hover:bg-black border border-black relative group p-5 group">
              <Image
                src={XDark}
                alt=""
                className="absolute inset-0 object-contain w-20 h-auto p-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={X}
                alt=""
                className="absolute inset-0 object-contain w-20 h-auto p-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* Dialog modal section */}
      <ModalDialog
        isDialogVisible={isDialogVisible}
        closeDialog={closeDialog}
        openDialog={openDialog}
        dialogClassName="lg:max-w-lg border border-gray-700 overflow-hidden relative backdrop:bg-black/60"
      >
        <div className="p-3 bg-[#0D0D0D] text-[#EDEDED]">
          <div className="py-3 pb-4 px-8 lg:px-0 border-b border-solid border-gray-700">
            <h1 className="font-orbitron font-semibold lg:text-xl text-center">
              COMMUNITY AIRDROP
            </h1>
            <button
              className="font-orbitron text-xl font-thin hover:font-semibold absolute top-6 lg:top-6 right-2 lg:right-4"
              onClick={closeDialog}
            >
              <Image
                src={Cancel}
                alt=""
                className="hover:border border-gray-500 rounded-md"
              />
            </button>
          </div>

          <div className="mt-5 text-center">
            <p className="text-[#00CCFF] text-sm font-medium">
              We're distributing 9000 $ROOKS token to mint pass holders
            </p>
            <p className="text-sm font-medium">
              Hold onto your ROOKS mint pass and prepare for our upcoming
              community airdrops.
            </p>
          </div>

          {/* px-8 w-48 lg:w-52 */}
          <div className="p-6 pb-1 flex flex-col items-center justify-center w-full">
            <Image src={Drop} alt="" className="w-48 md:60" />
            <button
              onClick={openDialog}
              className="mt-4 lg:mt-8 px-24 lg:px-24 py-5 lg:py-6 text-center border border-transparent hover:border-white relative group hover:border-gradient inline-flex items-center"
            >
              <span className="font-medium bg-[#EDEDED] text-[#0D0D0D] transition-opacity opacity-100 group-hover:opacity-0 absolute inset-0 flex items-center justify-center">
                Mint Now!
              </span>

              <span className="font-medium transition-opacity opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center">
                Mint Now!
              </span>
            </button>
          </div>
        </div>
      </ModalDialog>
    </main>
  );
}
