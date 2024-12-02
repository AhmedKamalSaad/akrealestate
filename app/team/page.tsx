import React from "react";
import { MainPages, realtors, TeamCard } from "../components";

const page = () => {
  return (
    <MainPages bgImg="/team.jpg" big="Agents" small="OUR TEAM">
      {realtors.map((realtor, index) => (
        <TeamCard name={realtor.name} img={realtor.img} key={index} />
      ))}
    </MainPages>
  );
};

export default page;
