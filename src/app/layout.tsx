import "~/styles/globals.css";

import { Inter } from "next/font/google";

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
      <body className={`font-sans flex flex-col ${inter.variable} overflow-hidden`}>
        <nav className="sticky flex h-[60px] w-full items-center justify-center text-center z-[100] top-0 bg-secondary-lighter">
          <div className="flex h-full w-fit items-center md:pr-6"> <div className="p-6">Kick</div></div>
          <div className="relative flex w-full items-center justify-end gap-3 px-2 md:justify-center lg:px-3"></div>
          <div className="flex w-full items-center justify-end px-2 md:w-fit lg:px-3"></div>
        </nav>
        <main className="flex flex-row">
          <div className="relative bg-secondary w-64 px-3.5 py-5">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className="relative h-full w-full grow border-l border-secondary-lighter bg-gray-900 overflow-y-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
