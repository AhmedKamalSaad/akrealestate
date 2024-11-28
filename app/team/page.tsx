import React from "react";
import { MainPages, realtors, TeamCard } from "../components";

const page = () => {
  return (
    <MainPages bgImg="/team.jpg" big="Agents" small="OUR TEAM">
      {realtors.map((realtor, index) => (
        <TeamCard name={realtor.name} img={realtor.img} key={index} />
      ))}
    </MainPages>
    // <div>

    //   <div className="relative">
    //     <Image
    //       src={"/team.jpg"}
    //       alt="Team"
    //       priority
    //       width={1000}
    //       height={400}
    //       className="w-full h-[400px] object-cover object-center"
    //     />
    //     <div className="w-full h-full bg-indigo-800/55 absolute top-0 left-0 flex flex-col items-center justify-center gap-3 text-white tracking-widest">
    //       <p className=" text-2xl  font-thin  ">OUR TEAM</p>
    //       <h1 className="h1 font-bold text-6xl">Agents</h1>
    //     </div>
    //   </div>
    //   <section className="md:px-10 pb-5 mt-10 flex justify-center items-center w-full">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //       {realtors.map((realtor, index) => (
    //         <TeamCard name={realtor.name} img={realtor.img} key={index} />
    //       ))}
    //     </div>
    //   </section>
    // </div>
  );
};

export default page;
