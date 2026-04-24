import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "../components/Navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const montserratAlt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-montserrat-alt",
});

const japokki = localFont({
  src: "../public/fonts/jaapokki-regular.ttf", 
  variable: "--font-japokki",
});

export const metadata: Metadata = {
  title: "Own. Interior Design | Make it your Own.",
  description: "Bespoke Residential & Commercial Interior Design, Nottingham based.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserratAlt.variable} ${japokki.variable} antialiased bg-black text-white`} style={{ fontFamily: 'var(--font-montserrat)' }}>
        <style dangerouslySetInnerHTML={{__html: `
          @font-face {
            font-family: 'WindSong';
            src: url('/fonts/WindSong-Medium.ttf') format('truetype');
            font-weight: normal; font-style: normal;
          }
        `}} />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
