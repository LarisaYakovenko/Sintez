// import React from 'react';

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;

import React from 'react';
import { Section, Container, Title, P, Info } from './Home.styled';

const Home = () => {
  return (
    <Section>
      <Container>
        <Title>перша приватна майстерня в Кременчуці</Title>
        <P>заснована в 1998 році</P>
        <Info>
          ремонт <br /> радіо-електронної техніки
        </Info>
      </Container>
    </Section>
  );
};

export default Home;
