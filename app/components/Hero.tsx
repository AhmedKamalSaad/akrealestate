import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center items-center  mx-auto  bg-hero bg-cover h-[70vh] bg-center ">
      <div className="grid justify-center items-center">
        <h1 className=" text-white/90 text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-nowrap">
          New Properties
        </h1>
        <p className="text-base md:text-lg lg:text-xl  text-slate-400/75 text-center mb-8 tracking-widest">
          EXCLUSIVELY BY AK
        </p>
        <Button className="bg-red-700 hover:bg-red-500 font-bold py-1 md:py-3 lg:py-5  px-5 md:px-7 lg:px-10 tracking-wide mx-auto text-sm md:text-base lg:text-lg">
          <Link href={"/projects"}>Explore</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
