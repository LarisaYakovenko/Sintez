import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  /* max-width: 480px; */
  min-height: 100vh;
  overflow: auto;
  background-repeat: no-repeat;
  background: #030810;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 100%;
  }
`;
