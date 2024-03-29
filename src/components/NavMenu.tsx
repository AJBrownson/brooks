/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ModalDialog from "react-basic-modal-dialog";
import Open from "../../public/open.png";
import Close from "../../public/close.png";
import TelegramDark from "../../public/TelegramDark.png";
import Telegram from "../../public/Telegram.png";
import XDark from "../../public/XDark.png";
import X from "../../public/X.png";
import DiscordDark from "../../public/DiscordDark.png";
import Discord from "../../public/Discord.png";
import LockBlack from "../../public/lock-black.svg";
import Cancel from "../../public/cancel-01.png";
import Airdrop from "../../public/airdrop.png";


export default function NavMenu() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const mobileMenu = useRef(null);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

  const handleMenuClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenu.current &&
        !(mobileMenu.current as HTMLElement).contains(event.target as Node)
      ) {
        setOpenMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);

  return (
    <>
      <main className="fixed z-20">
        {/* mobile menu div  */}
        <div
          ref={mobileMenu}
          onClick={handleMenuClick}
          className="block lg:hidden"
        >
          {openMobileMenu ? (
            <Image src={Close} alt="" />
          ) : (
            <Image src={Open} alt="" />
          )}
        </div>
        <div
          className={
            openMobileMenu
              ? `lg:hidden flex flex-col gap-2 z-20 fixed right-0 top-16 ease-in-out duration-500 bg-navBlur pl-4 py-4`
              : `ease-in-out duration-500 flex flex-col gap-2 z-20 fixed top-16 bottom-0 right-[-100%] pl-4 py-4`
          }
        >
          {/* <div className="px-[5.5rem] py-[10.5rem] bg-navBlur fixed top-14 border border-red-500 right-0"></div> */}
          <Link href="#home">
            <div className="font-medium p-[10px] pl-5 pr-5 bg-white text-black text-left border border-black hover:text-white hover:bg-black relative group hover:border-gradient items-center">
              <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
                Home
              </span>

              <span className="transition-opacity opacity-0 group-hover:opacity-100">
                Home
              </span>
            </div>
          </Link>
          <Link href="#about">
            <div className="font-medium p-[10px] pl-5 pr-5 bg-white text-black text-left border border-black hover:text-white hover:bg-black relative group items-center">
              <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
                About
              </span>

              <span className="transition-opacity opacity-0 group-hover:opacity-100">
                About
              </span>
            </div>
          </Link>
          <Link href="#tokenomics">
            <div className="font-medium p-[10px] pl-5 pr-5 bg-white text-black text-left border border-black hover:text-white hover:bg-black relative group items-center">
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
            className="font-medium p-[10px] pl-5 pr-5 bg-white text-black text-left border border-black hover:text-white hover:bg-black relative group items-center"
          >
            <span className="transition-opacity opacity-100 group-hover:opacity-0 absolute flex items-center justify-center">
              Mint Rooks <Image src={LockBlack} alt="" className="ml-2" />
            </span>

            <span className="transition-opacity opacity-0 group-hover:opacity-100">
              Coming Soon
            </span>
          </div>

          <div className="flex justify-between gap-3">
            <Link href="https://discord.gg/3P6TmW5urD" rel="noopener noreferrer" target="_blank">
              <div className="bg-white hover:bg-black border border-black relative group p-5 group">
                <Image
                  src={DiscordDark}
                  alt=""
                  className="absolute inset-0 object-contain w-20 p-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <Image
                  src={Discord}
                  alt=""
                  className="absolute inset-0 object-contain w-20 p-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
            </Link>
            <Link href="telegram.com">
              <div className="bg-white hover:bg-black border border-black relative group p-5 group">
                <Image
                  src={TelegramDark}
                  alt=""
                  className="absolute inset-0 object-contain w-20 p-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <Image
                  src={Telegram}
                  alt=""
                  className="absolute inset-0 object-contain w-20 p-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
            </Link>
            <Link href="https://x.com/memerooks" rel="noopener noreferrer" target="_blank">
              <div className="bg-white hover:bg-black border border-black relative group p-5 group">
                <Image
                  src={XDark}
                  alt=""
                  className="absolute inset-0 object-contain w-20 p-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <Image
                  src={X}
                  alt=""
                  className="absolute inset-0 object-contain w-20 p-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
            </Link>
          </div>
        </div>

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
                <Image src={Cancel} alt="" />
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

            {/* px-8 */}
            <div className="p-6 pb-1 flex flex-col items-center justify-center w-full">
              <Image src={Airdrop} alt="" className="w-48 lg:w-52" />
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
    </>
  );
}
