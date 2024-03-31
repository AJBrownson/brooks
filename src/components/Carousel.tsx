/* eslint-disable react/jsx-key */
import Image from "next/image";
import NFT0 from "../../public/nft0.png";
import NFT1 from "../../public/nft1.png"
import NFT2 from "../../public/nft2.png";
import NFT3 from "../../public/nft3.png"
import NFT4 from "../../public/nft4.png";
import NFT5 from "../../public/nft5.png";



export const Carousel = () => {
  return (
    <>
      <div className="w-full inline-flex flex-nowrap overflow-hidden lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-1 lg:[&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image src={NFT0} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT1} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT2} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT3} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT4} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT5} alt="" className="w-40 lg:w-[20rem]" />
          </li>
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-1 lg:[&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image src={NFT0} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT1} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT2} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT3} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT4} alt="" className="w-40 lg:w-[20rem]" />
          </li>
          <li>
            <Image src={NFT5} alt="" className="w-40 lg:w-[20rem]" />
          </li>
        </ul>
      </div>
    </>
  );
};
