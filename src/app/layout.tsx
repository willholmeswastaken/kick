import "~/styles/globals.css";

import { Inter } from "next/font/google";
import StreamerCard from "./ui/streamer-card";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans flex flex-col ${inter.variable}`}>
        <nav className="sticky flex h-[60px] w-full items-center justify-center text-center z-[100] top-0 bg-secondary-lighter">
          <div className="flex h-full w-fit items-center md:pr-6">
            <div className="block w-[82px] px-4">
              <img src='/logo.png' alt='logo' className="" />
            </div>
            <span className="text-white font-semibold hover:cursor-pointer hover:text-primary">Browse</span>
          </div>
          <div className="relative flex w-full items-center justify-end gap-3 px-2 md:justify-center lg:px-3">
            <div className="relative">
              <div className="relative text-white text-sm">
                <div className="absolute left-2.5 top-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <input type='text' className="w-fit px-10 py-2 rounded-sm bg-secondary" placeholder="Search" />
              </div>
            </div>

          </div>
          <div className="flex w-full items-center justify-end md:w-fit px-2 lg:px-3 gap-4">
            <button type='button' className="bg-none hover:bg-secondary font-semibold rounded-md w-full whitespace-nowrap p-2 text-white">Log In</button>
            <button type='button' className="bg-primary hover:bg-green-600 font-semibold rounded-md w-full whitespace-nowrap p-[0.4rem]">Sign Up</button>
          </div>
        </nav>
        <main className="flex flex-row">
          <div className="flex flex-col gap-4 bg-secondary w-64 px-3.5 py-5">
            <span className="font-semibold text-white text-sm">Recommended</span>
            <ul className="flex flex-col gap-3">
              {
                new Array(9).fill(0).map((_, i) => (
                  <StreamerCard key={i} />
                ))
              }
              <li className="flex flex-row w-full justify-between">
                <button type='button' className="bg-none text-white hover:text-gray-400 cursor-pointer">
                  Show more
                </button>
                <button type='button' className="bg-none text-white hover:text-gray-400 cursor-pointer">
                  Show less
                </button>
              </li>
            </ul>
          </div>
          <div className="relative h-full w-full grow border-l border-secondary-lighter bg-black text-white">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
