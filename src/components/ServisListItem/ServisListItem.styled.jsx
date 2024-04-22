import styled from "styled-components";

// export const Cart = styled.li`
//   margin: auto;
//   /* padding: 10px; */
//   display: flex;
//   flex-wrap: wrap;
//   width: 300px;
//   border: 1px solid;

//   /* justify-content: end;
//   align-items: center;
//   background-color: #05090e; */
// `;
export const Container = styled.div``;
export const Cart = styled.li`
  padding: 30px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  border: none;
  background-color: #d3eaf1;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
  list-style: none;

  width: calc((100% - 120px) / 3);
`;
export const Img = styled.img`
  display: flex;

  width: 100%;
`;
