import React from "react";
import office from "../../images/fasade.jpg";
import { Img } from "./Facade.styled";

const Facade = () => {
  return (
    <>
      <Img src={`${office}`} alt="office" width="600" />
    </>
  );
};

export default Facade;
