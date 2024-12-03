import React from "react";
import { GridDiv, MainPages, Properties } from "../components";
import Card from "../components/Card";

const page = () => {
  return (
    <MainPages
      small="OUR EXCLUSIVE PROPERTIES"
      big="All Properties"
      bgImg="/project_img_22.jpg"
    >
      <GridDiv>
        {Properties.map((s) => (
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
        ))}
      </GridDiv>
    </MainPages>
  );
};

export default page;
