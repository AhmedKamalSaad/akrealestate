import { MainPages, saleArray, GridDiv } from "@/app/components";
import Card from "@/app/components/Card";

const page = () => {
  return (
    <MainPages
      small="OUR EXCLUSIVE PROPERTIES"
      big="Buy"
      bgImg="/project_img_15.jpg"
    >
      <GridDiv>
        {saleArray.map((s) => (
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
