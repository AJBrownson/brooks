/* eslint-disable react/jsx-key */
import Image from "next/image";
import NFT from "../../public/nft0.png";
import NFT1 from "../../public/nft1.png"


export const InfiniteSlider = () => {
  return (
    <>
      <div className="w-full inline-flex flex-nowrap overflow-hidden lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-1 lg:[&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image src={NFT} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT1} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT1} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT1} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT1} alt="" className="w-40 lg:w-[20rem]" />
          </li>
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image src={NFT} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT1} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT1} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT1} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT1} alt="" className="w-40 lg:w-[20rem]" />
          </li>
        </ul>
      </div>
    </>
  );
};
