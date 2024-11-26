import React from "react";
import { Sales } from ".";
import NewProperties from "./NewProperties";

const Sale = () => {
  return <NewProperties properties={Sales} text="Sale" type="SALE"/>;
};

export default Sale;
