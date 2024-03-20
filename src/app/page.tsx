/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Hero from "../../public/hero.jpeg";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="text-center m-0 p-0">
        <Image src={Hero} alt="" className="w-full h-96 object-cover" />
        <h1 className="text-center text-6xl font-orbitron">Rooks</h1>
        <p>
          The most shareable meme coin out there. While the dogs and frogs have
          had their moment, now it's Rook's time to shine.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button className="mt-8 px-10 py-3 rounded-l-3xl border border-white text-white">
            Join Rooks Army
          </button>
          <button className="text-black mt-8 px-10 py-3 rounded-r-3xl bg-gradient-to-r from-[#F0B90B] via-[#EDEDED] to-[#878787]">
            Presale Loading
          </button>
        </div>
      </section>

      {/* About section */}
      <section>
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          {/* image div */}
          <div className="flex items-center justify-center p-0 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96">
            <Image
              src={Hero}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>

          <div className="flex flex-col justify-center p-6 lg:p-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className=" font-bold leading-snug text-xl lg:text-4xl">
              ABOUT
            </h1>
            <p className="mt-6 mb-2 text-lg">
              Say hello to Rooks Coin – the ultimate meme vibe! Just like rooks
              rock the chessboard, we're here to rule the meme world! Our coin
              is all about moving freely, spreading laughs in every direction,
              no blocks allowed. We own the meme space, one viral trend or
              hilarious post at a time, making sure the fun never ends. Rooks
              Coin is the backbone of meme culture, and with us, you'll be
              unstoppable in spreading the joy of memes!
            </p>

            <p className="text-[#F0B90B]">
              Together, we'll make the digital world a more meme-friendly place,
              one transaction at a time!
            </p>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-10 px-20 bg-gradient-to-r from-[#8A6A06] via-[#241D07] to-[#8A6A06]">
        <h1 className="text-[#F0B90B] text-center text-base mb-8">
          Rooks Revolution: Shaping the Future of Memes
        </h1>
        <p className="text-[#EDEDED] text-center text-lg mb-5">
          In the wild world of memecoins, a legendary meme war rages. On one
          side, there's "Frogs Coin," hopping in with promises of huge wins,
          symbolized by a lively frog. On the flip side, "Dogs Coin" barks with
          its dog logo, attracting those betting on market drops.
        </p>
        <p className="text-[#EDEDED] text-center text-lg mb-5">
          But in the midst of this meme madness, a new contender silently
          emerges: "Rooks." Its emblem? The mighty rook from chess. No flashy
          symbols here, just stability and a clear direction.
        </p>
        <p className="text-[#EDEDED] text-center text-lg mb-5">
          As "Frogs" and "Dogs" clash, chaos reigns, and investors seek shelter.
          "Rooks" becomes their safe haven, offering reliability amidst the
          storm. Its community flourishes as word spreads of its steady climb in
          value.
        </p>
        <p className="text-[#EDEDED] text-lg text-center">
          When the smoke clears and the dust settles, guess who stands
          victorious? Yep, you guessed it – "Rooks." While the "Frogs" and
          "Dogs" fight to a standstill, "Rooks" emerges as the hero of the
          memecoin realm. Its steadfast nature and strategic moves triumph,
          proving that sometimes, it's the quiet strength that reigns supreme in
          the world of memes.
        </p>
      </section>

      {/* Tokenomics section */}
      <section>
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 lg:p-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-center font-bold leading-snug text-xl lg:text-4xl">
              Tokenomics
            </h1>
            <p className="text-center mt-6 mb-2 text-lg">
              No taxes, no nonsense. It's as straightforward as that. LP tokens
              are destroyed, and contract ownership is relinquished.
            </p>
          </div>

          {/* image div */}
          <div className="flex items-center justify-center p-0 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96">
            <Image
              src={Hero}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      {/* Footer section */}
      <section className="text-center text-[#EDEDED] px-96">
        <h1 className="text-6xl font-extrabold mb-5">Contact Rookers</h1>
        <p className="text-[#F0B90B] mb-5">
          $Rooks coin is a tribute to the meme we all adore.
        </p>
        <p>
          $Rooks coin is a tribute to the meme we all adore. $ROOKS is a
          lighthearted meme coin created purely for entertainment. It's not
          designed for making money or any financial gain. There's no formal
          team or roadmap behind it, just a fun token in the world of memes.
        </p>

        <div className="mt-20 mb-3">
          <p>2024 Rooks. All rights reserved!</p>
        </div>
      </section>
    </>
  );
}
