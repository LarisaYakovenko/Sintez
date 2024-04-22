import React from "react";
import { Link } from "react-router-dom";
import { Container, H2, P } from "./Contacts.stayled";

const Contacts = () => {
  return (
    <Container>
      <H2>наші контакти</H2>
      <P>м.Кременчук, вул.Покровська, б.25</P>
      <Link href="tel:+380000000000">+380 00 000 00 00</Link>
    </Container>
  );
};

export default Contacts;
