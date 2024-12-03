import { MainPages, rentArray, GridDiv } from "@/app/components";
import Card from "@/app/components/Card";

const page = () => {
  return (
    <MainPages
      small="OUR EXCLUSIVE PROPERTIES"
      big="Rent"
      bgImg="/project_img_10.jpg"
    >
      <GridDiv>
        {rentArray.map((s) => (
          <Card
            id={s.id}
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
          />
        ))}
      </GridDiv>
    </MainPages>
  );
};

export default page;
