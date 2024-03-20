import type { Metadata } from "next";
// import { Orbitron, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";


// const orbitron = Orbitron({ 
//   subsets: ["latin"],
//   variable: "--font-orbitron",
//   display: "swap",
//   adjustFontFallback: false,
// });

const orbitron = localFont({
  src: [
    {
      path: '../../public/fonts/Orbitron-Black.ttf',
      weight: '900',
    },
    {
      path: '../../public/fonts/Orbitron-Medium.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Orbitron-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/Orbitron-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-orbitron',
});

const space_grotesk = localFont({
  src: [
    {
      path: '../../public/fonts/SpaceGrotesk-Medium.ttf',
      weight: '500',
    },
  ],
  variable: '--font-space_grotesk',
});


export const metadata: Metadata = {
  title: "ROOKS | Meme",
  description: "Rooks Meme Coin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${space_grotesk.variable}`}>{children}</body>
    </html>
  );
}
