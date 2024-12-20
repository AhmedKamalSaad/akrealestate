"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Card, { card } from "./Card";
interface props {
  text: string;
  properties: card[];
}
const NewProperties = ({ properties, text }: props) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{once:true}}
      className="flex flex-col items-center md:px-10 pb-5 mt-10 max-w-screen-2xl mx-auto"
    >
      <p className="tracking-widest text-xl text-black font-thin lg:text-2xl mb-5  ">
        NEW PROPERTIES
      </p>
      <h1 className="lg:text-4xl md:text-3xl text-2xl text-gray-900 font-bold mb-7">
        For {text}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {properties
          .map((s) => (
            <Card
              baths={s.baths}
              beds={s.beds}
              city={s.city}
              img={s.img}
              imgText={s.imgText}
              levels={s.levels}
              location={s.location}
              price={s.price}
              sqft={s.sqft}
              key={s.location}
              id={s.id}
            />
          ))
          .slice(0, 6)}
      </div>
      <Button className=" transition-colors ease-in-out mt-16 bg-red-700 hover:bg-red-500 font-bold py-5  px-10 tracking-wide mx-auto text-lg rounded-none">
        <Link href={"/properties/buy"}>View More</Link>
      </Button>
    </motion.section>
  );
};

export default NewProperties;
