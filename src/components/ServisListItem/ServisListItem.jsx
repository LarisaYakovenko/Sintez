import React from 'react';
import { Cart, Img, P, Description } from './ServisListItem.styled';
import images from '../../images/cafe.png';

const ServisListItem = ({ image, title, description }) => {
  return (
    <Cart>
      <Img src={images} alt="tehnik" width="300" />
      {/* <Img src={`../../images/${image}`} alt="tehnik" width="300" /> */}
      <P>{title}</P>
      <Description>{description}</Description>
    </Cart>
  );
};

export default ServisListItem;
