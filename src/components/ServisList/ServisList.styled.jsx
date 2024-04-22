import styled from "styled-components";

export const Container = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  /* display: grid;
  max-width: calc(100vw - 65px);
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 15px; */
  margin: 50px 120px;

  list-style: none;
  flex-wrap: wrap;
  gap: 60px;
  /* margin-left: auto;
  margin-right: auto; */
  /* @media screen and (min-width: 768px) {
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 40px;
  } */
`;
