import Image from "next/image";
import React, { ReactNode } from "react";
interface props {
  bgImg: string;
  small: string;
  big: string;
  children: ReactNode;
}
const MainPages = ({ bgImg, big, children, small }: props) => {
  return (
    <div>
      <div className="relative h-[400px]">
        <Image
          src={bgImg}
          alt="Team"
          priority={true}
          fill
          className="w-full h-full object-cover object-center"
        />
        <div className="w-full h-full bg-indigo-800/55 absolute top-0 left-0 flex flex-col items-center justify-center gap-3 text-white tracking-widest">
          <p className=" text-2xl  font-thin  ">{small}</p>
          <h1 className="h1 font-bold text-6xl">{big}</h1>
        </div>
      </div>
      <section className="md:px-10 pb-5 mt-10 flex justify-center items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {children}
        </div>
      </section>
    </div>
  );
};

export default MainPages;
