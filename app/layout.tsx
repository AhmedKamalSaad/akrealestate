import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Email, Footer, NavBar } from "./components";
import { Oswald,Roboto } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AK",
  description: "AK realestate website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} ${geistSans.variable} ${geistMono.variable} ${roboto.variable}  antialiased`}
      >
        <NavBar />
        {children}
        <Email/>
        <Footer/>
        <Toaster />

      </body>
    </html>
  );
}
