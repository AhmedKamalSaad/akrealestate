import { Button } from "@/components/ui/button";
import Link from "next/link";

const OldHero = () => {
  return (
    <section className="flex justify-center items-center  mx-auto  bg-hero bg-cover  bg-center h-[70vh] ">
      <div className="grid justify-center items-center">
        <h1 className=" text-white/90 text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-nowrap">
          New Properties
        </h1>
        <p className="text-base md:text-lg lg:text-xl  text-slate-400/75 text-center mb-8 tracking-widest">
          EXCLUSIVELY BY AK
        </p>
        <Button className="rounded-none transition-colors ease-in-out bg-red-700 hover:bg-red-500 font-bold py-3 md:py-5  px-7 md:px-10  tracking-wide mx-auto text-base md:text-lg">
          <Link href={"/properties"}>Explore</Link>
        </Button>
      </div>
    </section>
  );
};

export default OldHero;
