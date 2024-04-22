import React from "react";

import ServisListItem from "../ServisListItem/ServisListItem";
import { Container } from "./ServisList.styled";

const ServisList = (props) => {
  let definitions = props.data;
  console.log(props.data);
  return (
    <Container>
      {definitions.map((definition) => (
        <ServisListItem
          key={definition.id}
          image={definition.image}
          title={definition.title}
          description={definition.description}
        />
      ))}
    </Container>
  );
};

export default ServisList;
