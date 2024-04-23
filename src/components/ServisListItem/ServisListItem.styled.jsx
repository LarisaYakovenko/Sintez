import styled from 'styled-components';

export const Cart = styled.li`
  padding: 30px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  border: none;
  list-style: none;
  background-color: #d3eaf1;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }

  /* width: calc((100% - 120px) / 3); */
  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 120px) / 3);
  }
`;
export const Img = styled.img`
  display: flex;

  width: 100%;
`;
export const P = styled.p`
  width: 100%;
  margin-left: auto;
  margin-bottom: 10px;
  padding: 0 20px;
  display: flex;
  text-align: center;
  justify-content: center;
  color: #5caadb;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;
export const Description = styled.p`
  width: 100%;
  margin-left: auto;
  padding: 0 20px;
  display: flex;
  text-align: center;
  justify-content: center;
  color: #111;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;
