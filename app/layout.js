import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Enterijer Centar Milovanovic",
  description: "Enterijer Centar Milovanovic - Porodicna kompanija, posvecena Vasem lepsem domu. Kompletno uredjenje enterijera, svi proizvodi i usluge na jednom mesto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
