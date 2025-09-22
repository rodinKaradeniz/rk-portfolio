import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { AudioProvider } from "@/context/AudioContext";
import { LenisProvider } from "@/context/LenisContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "RK",
  description: "RK - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f9eddd]`}
      >
        <LenisProvider>
          <AudioProvider>
            <Navbar />
            {children}
            <Footer />
          </AudioProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
