/* eslint-disable react/jsx-key */
// import { FaFigma, FaDiscord, FaTwitter, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import NFT from "../../public/nft0.svg";
import NFT1 from "../../public/nft1.svg";

//   const LOGOS = [
//     <FaFigma width={24} height={24} className="text-slate-800" />,
//     <FaDiscord width={24} height={24} className="text-slate-800" />,
//     <FaTwitter width={24} height={24} className=" text-slate-800" />,
//     <FaFacebook width={24} height={24} className="text-slate-800" />,
//   ];

//   export const InfiniteSlider = () => {
//     const LOGOS = [
//         <>
//         <Image src={NFT} alt='' />
//         <Image src={NFT1} alt='' />
//         <Image src={NFT} alt='' />
//         <Image src={NFT1} alt='' />
//         <Image src={NFT} alt='' />
//         <Image src={NFT1} alt='' />
//         <Image src={NFT} alt='' />
//         <Image src={NFT1} alt='' />
//         <Image src={NFT} alt='' />
//         <Image src={NFT1} alt='' />
//         </>
//       ]
//     return (
//       <div className="relative m-auto overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
//         <div className="animate-infinite-slider flex w-[calc(250px*10)]">
//           {LOGOS.map((logo, index) => (
//             <div
//               className="slide flex w-full items-center justify-center"
//               key={index}
//             >
//               {logo}
//             </div>
//           ))}
//           {LOGOS.map((logo, index) => (
//             <div
//               className="slide flex w-full items-center justify-center"
//               key={index}
//             >
//               {logo}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

export const InfiniteSlider = () => {
  return (
    <>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image src={NFT} alt="" />
          </li>
          <li>
            <Image src={NFT1} alt="" />
          </li>
          <li>
            <Image src={NFT} alt="" />
          </li>
          <li>
            <Image src={NFT1} alt="" />
          </li>
          <li>
            <Image src={NFT} alt="" />
          </li>
          <li>
            <Image src={NFT1} alt="" />
          </li>
          <li>
            <Image src={NFT} alt="" />
          </li>
          <li>
            <Image src={NFT1} alt="" />
          </li>
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image src={NFT} alt="" />
          </li>
          <li>
            <Image src={NFT1} alt="" />
          </li>
          <li>
            <Image src={NFT} alt="" />
          </li>
          <li>
            <Image src={NFT1} alt="" />
          </li>
          <li>
            <Image src={NFT} alt="" />
          </li>
          <li>
            <Image src={NFT1} alt="" />
          </li>
          <li>
            <Image src={NFT} alt="" />
          </li>
          <li>
            <Image src={NFT1} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
};
