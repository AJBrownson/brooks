"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Open from "../../public/open.png";
import Close from "../../public/close.png";
import Telegram from "../../public/telegram.png";
import TelegramDark from "../../public/TelegramDark.png";
import TelegramLight from "../../public/TelegramLight.png";
import X from "../../public/X.png";
import XDark from "../../public/XDark.png";
import XLight from "../../public/XLight.png";
import Discord from "../../public/Discord.png";
import DiscordDark from "../../public/DiscordDark.png";
import DiscordLight from "../../public/DiscordLight.png";
import LockWhite from "../../public/lock-white.svg";
import LockBlack from "../../public/lock-black.svg";




export default function NavMenu() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <main className="fixed z-20">
      {/* mobile menu div */}
      <div onClick={handleMenuClick} className="block lg:hidden">
        {openMobileMenu ? <Image src={Close} alt="" className="" /> : <Image src={Open} alt="" className="" />}
      </div>
      <div
        className={
          openMobileMenu
            ? `lg:hidden flex flex-col gap-2 z-20 fixed right-0 top-16 ease-in-out duration-500`
            : `ease-in-out duration-500 flex flex-col gap-2 z-20 fixed top-16 bottom-0 right-[-100%]`
        }
      >
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
      </div>
    </main>
  );
}
