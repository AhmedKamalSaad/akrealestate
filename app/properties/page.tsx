import React from "react";
import { MainPages, Sales } from "../components";
import Card from "../components/Card";

const page = () => {
  return (
    <MainPages
      small="OUR EXCLUSIVE PROPERTIES"
      big="All Properties"
      bgImg="/project_img_1.jpg"
    >
      {Sales.map((s) => (
        <Card
          baths={s.baths}
          beds={s.beds}
          city={s.city}
          img={s.img}
          imgText="Buy"
          levels={s.levels}
          location={s.location}
          price={s.price}
          sqft={s.sqft}
          key={s.location}
        />
      ))}
    </MainPages>
  );
};

export default page;
