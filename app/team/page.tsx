import React from "react";
import { GridDiv, MainPages, realtors, TeamCard } from "../components";

const page = () => {
  return (
    <MainPages bgImg="/team.jpg" big="Agents" small="OUR TEAM">
      <GridDiv>
        {realtors.map((realtor, index) => (
          <TeamCard name={realtor.name} img={realtor.img} key={index} />
        ))}
      </GridDiv>
    </MainPages>
  );
};

export default page;
