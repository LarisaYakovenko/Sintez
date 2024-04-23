import styled from 'styled-components';
import backgroundImage from '../../images/bg-2.png';

export const Container = styled.div`
  /* margin-top: -200px; */
  /* min-height: 1000px; */
  /* background-repeat: no-repeat;
  justify-content: center; */
  flex-direction: column;
  overflow: auto;
  padding-bottom: 150px;
  /* margin: 0 auto; */

  background-image: url(${backgroundImage});
`;
export const P = styled.p`
  width: 400px;
  padding: 100px 10px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  text-align: center;

  color: #fff;
  font-size: 36px;
  line-height: 1.2;
  letter-spacing: 0.03em;
  @media screen and (min-width: 768px) {
    width: 800px;

    margin-left: auto;
    padding: 100px 100px 70px;
    display: flex;
    text-align: center;
    font-size: 64px;
  }

  @media screen and (min-width: 1440px) {
    width: 800px;
    margin: 0;

    margin-left: auto;
    padding: 150px 100px 70px;
    display: flex;
    text-align: center;
    font-size: 64px;
  }
`;

export const Table = styled.div`
  width: 180px;
  border: none;
  background-color: #1b1b1d;
  box-shadow: 0 6px 12px rgba(243, 244, 245, 0.3);
  border-radius: 10px;

  margin: 0 auto;
  margin-bottom: 80px;
  padding-top: 10px;
  text-align: center;
  color: #fff;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-left: auto;
    margin-right: 100px;
  }
`;
export const Schedule = styled.div`
  display: flex;
  padding: 20px;
`;
export const Time = styled.p`
  display: flex;
  padding: 50px 35px 20px;
`;
export const Free = styled.p`
  padding-left: 20px;
  padding: 35px;
  padding-bottom: 0;
  display: flex;
  color: red;
`;
export const Li = styled.li`
  &:last-child {
    color: red;
  }
`;
