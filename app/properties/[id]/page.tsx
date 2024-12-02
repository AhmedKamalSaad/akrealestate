import { Properties, TeamCard } from "@/app/components";
import Image from "next/image";
import React, { ReactNode } from "react";
import { FaStairs } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

import { IoLocationOutline } from "react-icons/io5";
import { LiaBathSolid, LiaBedSolid, LiaSquare } from "react-icons/lia";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const property = Properties.find((p) => p.id.toString() === id);

  if (!property) {
    return (
      <section className="max-w-screen-xl mx-auto flex items-center justify-center h-[500px] ">
        <h1 className="font-bold text-2xl">Ooops no property found...!</h1>
      </section>
    );
  }
  const propertyDetails = [
    {
      icon: <LiaBedSolid size={35} className="text-slate-400" />,
      text: "Beds",
      value: property.beds,
    },
    {
      icon: <LiaBathSolid size={35} className="text-slate-400" />,
      text: "Baths",
      value: property.baths,
    },
    {
      icon: <LiaSquare size={35} className="text-slate-400" />,
      text: "Sqft",
      value: property.sqft,
    },
    {
      icon: <FaStairs size={35} className="text-slate-400" />,
      text: "Levels",
      value: property.levels,
    },
    {
      icon: <SlCalender size={35} className="text-slate-400" />,
      text: "Built Year",
      value: property.baths,
    },
    {
      icon: <IoLocationOutline size={35} className="text-slate-400" />,
      text: "Main Location",
      value: property.city,
    },
  ];

  return (
    <section className="max-w-screen-lg mx-auto px-10 lg:px-2 pt-6 h-full ">
      <div>
        <h1 className="text-4xl font-semibold text-slate-900 mb-4">
          {property.location}
          <span className="text-base text-red-400 ml-3 align-middle">
            _{property.imgText}_
          </span>
        </h1>
        <h3 className="text-red-700 mb-4 ">{property.price}</h3>
        <Image
          src={property.img}
          alt="Property"
          width={1000}
          height={800}
          className="w-full h-full"
        />
      </div>
      <div className="flex mt-4 md:items-start items-stretch flex-col md:flex-row md:justify-between">
        <div className=" w-full md:w-3/4 md:pr-4 mb-10 md:mb-0">
          <h3 className="text-xl font-semibold mb-3">Property Details</h3>
          <p className="text-base mb-5 tracking-wide line-clamp-[10] text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            deleniti pariatur, quo dolores impedit adipisci dolorem odio hic?
            Adipisci aspernatur repellendus expedita. Quis, esse rem!
            Praesentium quod laboriosam fuga voluptatum? Placeat rerum obcaecati
            eaque molestiae voluptatem? Laborum dicta consequuntur placeat enim,
            totam repellendus possimus minima at rerum. Officia impedit odit
            maiores, cupiditate error maxime illo facere suscipit veritatis
            beatae provident? Veritatis non molestias ipsa aperiam iste,
            corporis ratione esse consequatur. Quasi eum distinctio laudantium
            molestiae a vero, blanditiis voluptatum repudiandae nihil quia
            quibusdam, aperiam animi aspernatur reiciendis rem! Qui, magni?
            Accusamus voluptates cumque, placeat consequuntur facere dicta
            ducimus perspiciatis minus sit impedit odio deserunt perferendis eos
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {propertyDetails.map((p, i) => (
              <PropertyDiv
                key={i}
                icon={p.icon}
                value={p.value}
                text={p.text}
              />
            ))}
          </div>
        </div>
        <TeamCard
          img={property.realtor.img}
          name={property.realtor.name}
          className="bg-slate-200"
        />
      </div>
    </section>
  );
};

export default page;

export const PropertyDiv = ({
  text,
  icon,
  value,
}: {
  text: string;
  icon: ReactNode;
  value: number | string;
}) => {
  return (
    <div className="flex flex-col text-xl gap-2">
      {icon}
      <p>{text}</p>
      <p className="font-bold text-lg text-rose-800">{value}</p>
    </div>
  );
};
