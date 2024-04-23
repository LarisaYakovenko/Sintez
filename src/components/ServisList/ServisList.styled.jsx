import styled from 'styled-components';

export const Container = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 30px;
  list-style: none;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 100%;
    gap: 60px;
    margin: 50px 120px;
  }
`;
