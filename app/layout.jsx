import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import { AudioProvider } from "@/context/AudioContext";
import { LenisProvider } from "@/context/LenisContext";
import { LocaleProvider } from "@/context/LocaleContext";
import IntroLoader, { INTRO_STORAGE_KEY } from "@/components/IntroLoader";

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

// Runs before paint so returning visitors in the same session never see the intro flash
const introSeenScript = `try{if(sessionStorage.getItem("${INTRO_STORAGE_KEY}")==="1")document.documentElement.classList.add("intro-seen")}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introSeenScript }} />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f9eddd]`}
      >
        <LocaleProvider>
          <LenisProvider>
            <AudioProvider>
              <IntroLoader />
              <Navbar />
              {children}
              <Footer />
            </AudioProvider>
          </LenisProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
