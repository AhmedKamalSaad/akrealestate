import React from "react";
import { Sales } from ".";
import NewProperties from "./NewProperties";

const Rent = () => {
  return <NewProperties properties={Sales} text="Rent" type="RENT"/>;
};

export default Rent;
