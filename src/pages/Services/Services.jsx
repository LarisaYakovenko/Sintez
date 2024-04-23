// import React from 'react';

// const Services = () => {
//   return <div>Services</div>;
// };

// export default Services;

import React from 'react';
import ServisList from '../../components/ServisList/ServisList';
import { H2, Container } from './Services.styled';
import data from '../../../src/components/data.json';

const Services = () => {
  // console.log(data);
  return (
    <>
      <Container>
        <H2>наші послуги</H2>
        <ServisList data={data} />
      </Container>
    </>
  );
};

export default Services;
