import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Oswald, Roboto } from "next/font/google";
import { Email, Footer, NavBar } from "./components";
import "./globals.css";
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
});
export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
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
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${oswald.className} ${roboto.variable} antialiased m-0 p-0 `}
        >
          <NavBar />
          {children}
          <Email />
          <Footer />
          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  );
}
