import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const orbitron = localFont({
  src: [
    {
      path: "../../public/fonts/Orbitron-Black.ttf",
      weight: "900",
    },
    {
      path: "../../public/fonts/Orbitron-Medium.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Orbitron-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Orbitron-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-orbitron",
});

const space_grotesk = localFont({
  src: [
    {
      path: "../../public/fonts/SpaceGrotesk-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/SpaceGrotesk-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-space_grotesk",
});

export const metadata: Metadata = {
  title: "Rooks | The most shareable meme coin of the future",
  description:
    "Discover Rooks Coin, the meme-inspired cryptocurrency set to redefine the meme economy. Embodying the spirit of memes, Rooks Coin unleashes memetic joy without bounds, dominating the meme sphere with every viral trend and hilarious post. Join the Rooks Coin community today and be part of the unstoppable force driving meme culture forward!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${space_grotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
