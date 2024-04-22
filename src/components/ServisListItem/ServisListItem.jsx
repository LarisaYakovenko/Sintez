import React from "react";
import { Cart, Img } from "./ServisListItem.styled";
import images from "../../images/cafe.png";

const ServisListItem = ({ image, title, description }) => {
  return (
    <Cart>
      <Img src={images} alt="tehnik" width="300" />
      {/* <Img src={`../../images/${image}`} alt="tehnik" width="300" /> */}
      <p>{title}</p>
      <p>{description}</p>
    </Cart>
  );
};

export default ServisListItem;
