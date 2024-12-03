import React from "react";
import { GridDiv, MainPages, realtors, TeamCard } from "../components";
import { Metadata } from "next";

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
export const metadata: Metadata = {
  title: "Team",
  description: "AK realestate website",
};
