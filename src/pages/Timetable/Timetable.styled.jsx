import styled from 'styled-components';
import backgroundImage from '../../images/bg-2.png';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 480px;
  min-height: 100vh;
  overflow: auto;

  /* background-repeat: no-repeat;  */
  /* background-position: center; */
  /* justify-content: center;
  max-width: 1440px;
  margin: 0 auto;

  /* padding: 150px auto; */
  /* background-image: url(${backgroundImage}); */
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 100%;
  }
`;
