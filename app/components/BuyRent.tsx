import Link from "next/link";
import React from "react";

const BuyRent = () => {
  return (
    <section className="flex flex-col items-center mx-auto  md:px-20">
      <p className="tracking-widest text-xl text-black font-thin lg:text-2xl mt-16 mb-5 ">
        WHAT ARE YOU LOOKING FOR?
      </p>
      <div className=" w-full h-[300px] md:h-[500px] mb-10 flex flex-col md:flex-row text-white">
        <BuyRentDiv
          bgImg="bg-buy"
          bgColor="bg-blue-800/55"
          href="buy"
          text="Buy"
        />
        <BuyRentDiv
          bgImg="bg-rent"
          bgColor="bg-red-400/55"
          href="rent"
          text="Rent"
        />
      </div>
    </section>
  );
};

export default BuyRent;
interface props {
  bgImg: string;
  bgColor: string;
  href: string;
  text: string;
}
export const BuyRentDiv = ({ bgColor, bgImg, href, text }: props) => {
  return (
    <div
      className={`md:basis-1/2 basis-full relative flex items-center justify-center ${bgImg} bg-cover bg-center`}
    >
      <div className={`absolute w-full h-full ${bgColor}`}></div>
      <Link
        href={`/projects/${href}`}
        className="z-10 text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide hover:text-red-700"
      >
        {text}
      </Link>
    </div>
  );
};
