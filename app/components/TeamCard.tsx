import Image from "next/image";
import React from "react";

const TeamCard = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className="shadow-lg text-black/85  text-left flex  justify-center items-center  min-w-[300px] h-[550px] py-4">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-2xl font-bold">{name}</h1>
        <Image
          src={img}
          alt="realtor"
          height={250}
          width={250}
        />
        <div>
          <h1 className="text-xl font-bold">Email</h1>
          <p className="text-slate-800 text-lg font-light">info@mysite.com</p>
        </div>
        <div>
          <h1 className="text-xl font-bold">Phone</h1>
          <p className="text-slate-800 text-lg font-light">123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
