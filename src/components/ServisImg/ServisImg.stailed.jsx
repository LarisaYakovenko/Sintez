import styled from 'styled-components';
import backgroundImage from '../../images/bg-2.png';

export const Container = styled.div`
  margin-top: -200px;
  min-height: 1000px;
  /* background-repeat: no-repeat;
  justify-content: center;

  margin: 0 auto; */

  background-image: url(${backgroundImage});
`;
export const P = styled.p`
  width: 800px;

  margin-left: auto;
  padding: 300px 100px 70px;
  display: flex;
  text-align: center;

  color: #fff;
  font-size: 64px;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;

export const Table = styled.div`
  width: 180px;
  border: none;
  background-color: #1b1b1d;
  box-shadow: 0 6px 12px rgba(243, 244, 245, 0.3);
  border-radius: 10px;
  /* margin-bottom: 120px; */
  margin-left: auto;
  margin-right: 100px;
  padding-top: 10px;
  /* display: flex; */
  text-align: center;

  color: #fff;
  font-size: 14px;
  /* line-height: 1.2;
  letter-spacing: 0.03em; */
`;
export const Schedule = styled.div`
  display: flex;
  padding: 20px;
  /* text-align: ; */

  /* color: #fff;
  font-size: 14px; */
  /* line-height: 1.2;
  letter-spacing: 0.03em; */
`;
export const Time = styled.p`
  display: flex;
  padding: 50px 35px 20px;
  /* padding-bottom: 10px; */
  /* justify-content: flex-end; */
  /* align-items: flex-end; */
`;
export const Free = styled.p`
  padding-left: 20px;
  /* margin-top: auto; */
  padding: 35px;
  padding-bottom: 0;
  display: flex;
  /* justify-content: flex-end; */
  /* align-items: flex-end; */
  color: red;
`;
export const Li = styled.li`
  &:last-child {
    color: red;
  }
`;
