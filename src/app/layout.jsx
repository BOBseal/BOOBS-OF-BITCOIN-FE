//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BOOBS OF BITCOIN",
  description: "10k Luscious 2d BOOBS for Everyone to Enjoy , On BITCOIN",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Header/>        
        {children}
      </body>
    </html>
  );
}
