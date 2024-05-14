import styled from 'styled-components';

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  /* margin: 20px auto; */
  color: #111;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.03em;
  margin-top: 20px;
`;
export const Container = styled.div`
  /* max-width: 480px; */
  min-height: 100vh;
  padding: 20px 0;
  margin: 0 auto;
  background-color: #abd2f1;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 100%;
  }
`;
