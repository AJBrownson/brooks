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
import Circle from "../../public/circle.png";
import Gradient from "../../public/gradient-bg.svg";
import { InfiniteSlider } from "@/components/Carousel";
import Telegram from "../../public/telegram.png";
import TelegramDark from "../../public/TelegramDark.png";
import TelegramLight from "../../public/TelegramLight.png";
import X from "../../public/X.png";
import XDark from "../../public/XDark.png";
import XLight from "../../public/XLight.png";
import Discord from "../../public/Discord.png";
import DiscordDark from "../../public/DiscordDark.png";
import DiscordLight from "../../public/DiscordLight.png";
import VectorUp from "../../public/Vector 56.svg";
import VectorDown from "../../public/vector-down.png";
import Gaming from "../../public/gaming.png";
import Logo from "../../public/logo.png";
import NavMenu from "@/components/NavMenu";
import Airdrop from "../../public/airdrop.png";

const strokeStyle = {
  textShadow:
    "-1px -1px 0 #F5BF2D, 1px -1px 0 #F5BF2D, -1px 1px 0 #F5BF2D, 1px 1px 0 #F5BF2D",
};

export default function Home() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

  return (
    <main className="font-space relative">
      {/* Hero images */}
      <Image
        src={Hero}
        alt=""
        className="hidden lg:block w-full object-cover"
        id="home"
      />
      <Image
        src={HeroMobile}
        alt=""
        className="w-full object-cover lg:hidden"
      />

      {/* Mobile menu navigation */}
      <section className="absolute top-5 right-16 lg:hidden">
        <NavMenu />
      </section>

      {/* Hero section */}
      <section className="z-10 absolute top-36 lg:top-56 text-center px-1 lg:px-0">
        <h1
          className="mb-[-1.5rem] text-center text-[72px] lg:text-[164px] font-orbitron font-extrabold"
          style={strokeStyle}
        >
          <span className="text-[#00D5E9]">R</span>oo
          <span className="text-[#00D5E9]">ks</span>
        </h1>
        <p className="text-sm lg:text-lg lg:px-72 font-orbitron">
          The most shareable meme coin out there. While the dogs and frogs have
          had their moment, now it's Rook's time to shine.
        </p>
        <div className="flex lg:items-center justify-center gap-3">
          <button
            onClick={openDialog}
            className="mt-4 lg:mt-8 px-8 lg:px-12 py-2 lg:py-3 border border-white text-white hover:border-white relative group hover:border-gradient inline-flex items-center"
          >
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute inset-0 flex items-center justify-center">
              Mint Rooks <Image src={LockWhite} alt="" className="ml-2" />
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Coming Soon
            </span>
          </button>

          <button className="font-light mt-4 lg:mt-8 px-8 lg:px-12 py-2 lg:py-3 bg-[#0099FF] hover:bg-transparent border border-transparent hover:border-white relative group inline-flex items-center">
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
          className="lg:h-[21.5rem] absolute top-[9.5rem] lg:top-[12rem]"
        />
      </section>

      {/* About section */}
      <section
        className="mt-32 lg:mt-96 px-1 lg:px-20 py-20 lg:pb-36 gap-10"
        id="about"
      >
        <Image src={VectorUp} alt="" className="mb-10" />
        <div className="flex flex-col lg:flex-row items-center">
          <div className="">
            <Image src={About} alt="" className="" />
          </div>

          <div className="flex flex-col text-center lg:text-left lg:w-[50%]">
            <h1 className="font-orbitron font-bold mt-3 lg:mt-0 mb-5 leading-snug text-3xl">
              ABOUT ROOKS
            </h1>
            <p className="mb-4 text-base lg:text-lg">
              Rooks Coin, the ultimate meme vibe! Just like rooks rock the
              chessboard, we're here to rule the meme world! Our coin is all
              about moving freely, spreading laughs in every direction, no
              blocks allowed. We own the meme space, one viral trend or
              hilarious post at a time, making sure the fun never ends. Rooks
              Coin is the backbone of meme culture, and with us, you'll be
              unstoppable in spreading the joy of memes!
            </p>

            <p className="font-medium text-base lg:text-xl">
              Together, we'll make the digital world a more meme-friendly place,
              one transaction at a time!
            </p>
          </div>
        </div>
        <Image src={VectorDown} alt="" className="mt-10" />
      </section>

      {/* Story section */}
      <section className="py-10 px-1 lg:px-60 bg-story-gradient">
        <h1 className="text-[#00D5E9] text-center font-extrabold text-lg lg:text-2xl mb-5">
          Rooks Revolution: Shaping the Future of Memes
        </h1>
        <p className="text-[#EDEDED] text-center text-base lg:text-lg mb-5">
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

      {/* Gaming section gap-10 w-50% w-28 h-28*/}
      <section className="mt-20 lg:mt-36 px-5 lg:px-20">
        <div className="py-6 px-5 lg:px-8 flex justify-between lg:gap-40 items-center bg-custom-gradient">
          <div className="w-1/2 lg:w-[45%] flex flex-col">
            <h1 className="font-orbitron font-bold text-base lg:text-4xl leading-snug mb-3">
              Building Rooks First Gaming System
            </h1>
            <p className="text-sm mb-4">Join us to be part of the movement.</p>
            <div>
              <button className="text-xs lg:text-base bg-black text-white px-3 lg:px-7 py-3">
                In Development
              </button>
            </div>
          </div>
          <Image src={Gaming} alt="" className="w-32 h-32 lg:w-80 lg:h-80" />
        </div>
      </section>

      {/* Tokenomics section */}
      {/* lg:justify-between justify-center rounded-sm  xl:max-w-lg lg:text-left */}
      <section className="px-4 lg:px-20 py-24" id="tokenomics">
        <div className="container flex flex-col mx-auto sm:py-12 lg:py-24 lg:flex-row justify-between">
          <div className="flex flex-col justify-center lg:p-4 text-center lg:max-w-xl">
            <h1 className="text-center leading-snug text-4xl lg:text-5xl font-orbitron font-semibold">
              Tokenomics
            </h1>

            <div className="mb-10 lg:mb-0 mt-5 flex gap-4 justify-center">
              <div className="p-1 bg-[#0099FF] h-4 w-4"></div>
              <div className="p-1 bg-[#00CCFF] h-4 w-4"></div>
              <div className="p-1 bg-[#1300FF] h-4 w-4"></div>
              <div className="p-1 bg-[#6600FF] h-4 w-4"></div>
              <div className="p-1 bg-[#9900FF] h-4 w-4"></div>
            </div>

            <p className="lg:hidden text-center mb-5 text-base">
              No taxes, no nonsense. It's as straightforward as that. LP tokens
              are destroyed, and contract ownership is relinquished.
            </p>

            <div className="mb-10 lg:mb-0 lg:hidden flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96">
              <Image src={Circle} alt="" className="w-[22rem] lg:w-full" />
            </div>

            <p className="hidden lg:block text-center mt-6 mb-2 text-lg">
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
      <section className="bg-footer-gradient text-center text-[#EDEDED] pb-5 px-3 lg:px-64">
        <Image src={VectorUp} alt="" className="mb-16" />
        <h1 className="text-4xl lg:text-5xl font-orbitron font-extrabold">
          Contact Rooks
        </h1>
        <div className="mt-5 mb-5 flex justify-center">
          <Image src={Logo} alt="" />
        </div>
        <div className="flex justify-center gap-5 mb-14">
          <Link href="#">
            <Image
              src={Discord}
              alt=""
              className="p-3 w-14 h-14 border border-white group hover:border-gradient"
            />
          </Link>
          <Link href="#">
            <Image
              src={Telegram}
              alt=""
              className="p-3 w-14 h-14 border border-white group hover:border-gradient"
            />
          </Link>
          <Link href="#">
            <Image
              src={X}
              alt=""
              className="p-3 w-14 h-14 border border-white group hover:border-gradient"
            />
          </Link>
        </div>
        <p className="font-orbitron font-semibold text-lg text-[#00D5E9] mb-5">
          $Rooks coin is a tribute to the meme we all adore.
        </p>
        <p className="text-lg">
          $ROOKS is a lighthearted meme coin created purely for entertainment.
          It's not designed for making money or any financial gain. There's no
          formal team or roadmap behind it, just a fun token in the world of
          memes.
        </p>
        <Image src={VectorDown} alt="" className="mt-10 lg:mt-16 lg:mb-3" />

        <div className="font-orbitron font-medium text-xs lg:text-md">
          <p>2024 Rooks. All rights reserved!</p>
        </div>
      </section>

      {/* Desktop navigation menu widgets */}
      <section className="z-50 hidden fixed lg:flex flex-col gap-3 bottom-72 right-0">
        <Link href="#home">
          <div className="font-medium p-3 pl-5 pr-5 bg-white text-black text-left border border-transparent hover:text-white hover:bg-black relative group hover:border-gradient items-center">
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
              Home
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Home
            </span>
          </div>
        </Link>
        <Link href="#about">
          <div className="font-medium p-3 pl-5 pr-5 bg-white text-black text-left border border-transparent hover:text-white hover:bg-black relative group items-center">
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
              About
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              About
            </span>
          </div>
        </Link>
        <Link href="#tokenomics">
          <div className="font-medium p-3 pl-5 pr-5 bg-white text-black text-left border border-transparent hover:text-white hover:bg-black relative group items-center">
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
              Tokenomics
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Tokenomics
            </span>
          </div>
        </Link>
        <Link href="#">
          <div className="font-medium p-3 pl-5 pr-5 bg-white text-black text-left border border-transparent hover:text-white hover:bg-black relative group items-center">
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
              Mint Rooks <Image src={LockBlack} alt="" className="ml-2" />
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Coming Soon
            </span>
          </div>
        </Link>

        <div className="flex justify-between gap-3">
          <Link href="discord.com">
            <div className="relative group w-12 h-12 group">
              <Image
                src={DiscordLight}
                alt=""
                className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={DiscordDark}
                alt=""
                className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
          <Link href="telegram.com">
            <div className="relative group w-12 h-12 group">
              <Image
                src={TelegramLight}
                alt=""
                className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={TelegramDark}
                alt=""
                className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
          <Link href="x.com">
            <div className="relative group w-12 h-12 group">
              <Image
                src={XLight}
                alt=""
                className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={XDark}
                alt=""
                className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* Dialog modal section */}
      <ModalDialog
        isDialogVisible={isDialogVisible}
        closeDialog={closeDialog}
        dialogClassName="lg:max-w-lg border border-gray-700 overflow-hidden relative backdrop:bg-black/60"
      >
        <div className="p-4 bg-[#0D0D0D] text-[#EDEDED]">
          <div className="py-6 px-8 lg:px-0 border-b border-solid border-gray-700">
            <h1 className="font-orbitron font-semibold lg:text-2xl text-center">
              COMMUNITY AIRDROP
            </h1>
            <button
              className="font-orbitron text-xl font-thin hover:font-semibold absolute top-10 right-10"
              onClick={closeDialog}
            >
              X
            </button>
          </div>

          <div className="mt-5 text-center">
            <p className="text-[#00CCFF] font-medium">
              We're distributing 9000 $ROOKS token to mint pass holders
            </p>
            <p className="font-medium">
              Hold onto your ROOKS mint pass and prepare for our upcoming
              community airdrops.
            </p>
          </div>

          {/* px-8 */}
          <div className="p-6 flex flex-col items-center justify-center w-full"> 
            <Image src={Airdrop} alt="" className="lg:w-64 lg:h-64" />
            <button
              onClick={openDialog}
              className="mt-4 lg:mt-8 px-32 lg:px-32 py-5 lg:py-6 text-center border border-transparent hover:border-white relative group hover:border-gradient inline-flex items-center"
            >
              <span className="bg-[#EDEDED] text-[#0D0D0D] transition-opacity opacity-100 group-hover:opacity-0 absolute inset-0 flex items-center justify-center">
                Mint Now!
              </span>

              <span className="transition-opacity opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center">
                Mint Now!
              </span>
            </button>
          </div>
        </div>
      </ModalDialog>
    </main>
  );
}
