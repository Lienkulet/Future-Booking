import type { Metadata } from "next";
import { Manrope, Cabin, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Datacore — Book your perfect stay",
  description:
    "Discover handpicked hotels, resorts, and stays across your favorite destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cabin.variable} ${instrumentSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#080612]">
        {/* Single stars video — fixed behind the entire page */}
        <video
          className="fixed inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
          style={{ zIndex: -1 }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/stars.mp4" type="video/mp4" />
        </video>
        {children}
      </body>
    </html>
  );
}
