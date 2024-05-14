import styled from 'styled-components';

export const Container = styled.div`
  /* background-position: center; */
  /* justify-content: center; */
  /* max-width: 1440px; */
  overflow: auto;
  /* max-width: 480px; */
  min-height: 100vh;
  margin: 0 auto;
  background-color: #abd2f1;
  padding: 70px 0;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 100%;
  }
`;
export const Photo = styled.div`
  overflow: visible;
  width: 390px;
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (min-width: 768px) {
    width: 650px;
  }

  @media screen and (min-width: 1440px) {
    width: 1400px;
    flex-direction: row;
    /* justify-content: center; */

    margin-top: 50px;
    flex-wrap: nowrap;
    gap: 60px;
  }
`;
