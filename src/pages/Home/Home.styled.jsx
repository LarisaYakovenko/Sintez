import styled from 'styled-components';
import backgroundImage from '../../images/bg-1.png';

export const Section = styled.div`
  /* background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center; */
`;
export const Container = styled.div`
  background-repeat: no-repeat;
  /* background-position: center; */
  justify-content: center;
  /* max-width: 1440px; */
  margin: 0 auto;

  /* padding: 150px auto; */
  background-image: url(${backgroundImage});
`;
export const Title = styled.h1`
  width: 800px;
  margin-bottom: 20px;
  margin-left: auto;
  padding-top: 60px;

  display: flex;
  justify-content: flex-end;
  text-align: center;
  color: #fff;
  font-size: 80px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.03em;
`;
export const P = styled.p`
  width: 450px;
  margin-left: auto;
  margin-bottom: 60px;
  margin-right: 100px;
  padding: 0 20px;
  padding-right: 60px;
  display: flex;
  text-align: center;
  /* height: 200px; */
  color: #fff;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;
export const Info = styled.p`
  width: 650px;
  height: 300px;
  margin-left: auto;
  padding-bottom: 120px;
  padding-right: 40px;
  display: flex;
  text-align: center;

  color: #fff;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;
