import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.min.js"
import "./globals.css";
import whiteLogo from '@/app/images/logo-white.png';
import blueLogo from '@/app/images/logo-blue.png';

import eli from '@/app/images/Ellipse 4.svg';
import Image from "next/image";

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
  title: "SolyLabs",
  description: "SolyLabs operates in the Web3 space. It offers solutions in artificial intelligence, blockchain, distributed ledger technology, NFTs, cryptocurrencies and other blockchain-related technologies",
};

export default function RootLayout({ children }) {

  // window.addEventListener('sctoll', () => {
  //   let nav = document.querySelector('nav.navbar');
  //   if(window.screenY > 10){
  //     nav.classList.add('shadow')
  //   }
  // })

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Image src={eli} className="eli" />
        <Image src={eli} className="eli" />
        <Image src={eli} className="eli" />
        <header>
          <div className="container">
            <div className="logo">
              <Image src={whiteLogo} className="w-100 h-100" />
            </div>
            <nav className="links">
              <ul>
                <li>
                  link 1
                </li>
                <li>
                  link 1
                </li>
                <li>
                  link 1
                </li>
                <li>
                  link 1
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
