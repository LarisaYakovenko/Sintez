import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.div`
  min-width: 1440px;
  margin: 0 auto;
`;
export const Container = styled.div`
  margin: auto;
  padding: 0 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #1b1b1d;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const Logo = styled.div`
  width: 400px;
  display: flex;
  justify-content: start;
  margin-right: auto;
`;

export const StyleNavLink = styled(NavLink)`
  display: flex;
  color: #111;
  font-weight: 600;
  gap: 15px;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.03em;

  &.active {
    color: #81c1ea;
    text-decoration: underline;
  }
`;

export const Item = styled.li`
  /* display: flex;

  width: auto;
  font-size: 8px; */
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;
