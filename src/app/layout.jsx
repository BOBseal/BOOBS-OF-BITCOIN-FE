//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import {AppProvider} from "../context/MinterContext.jsx"
import {ReactiveProvider} from "../context/ReactiveContext.jsx"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BOOBS OF BITCOIN",
  description: "10k Luscious 2d BOOBS for Everyone to Enjoy , On BITCOIN",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <ReactiveProvider>
        <AppProvider>
        <Header/>        
        {children}
        <Footer/>
        </AppProvider>
        </ReactiveProvider>
      </body>
    </html>
  );
}
