import styled from 'styled-components';
import backgroundImage from '../../images/bg-1.png';

// export const Section = styled.div`
//   min-height: 100%;
// `;
export const Container = styled.div`
  overflow: auto;
  /* max-width: 480px; */
  min-height: 100vh;
  background-repeat: no-repeat;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 100px;
  background-image: url(${backgroundImage});

  @media screen and (min-width: 768px) {
    max-width: 768px;
    /* max-width: 100%; */
  }

  @media screen and (min-width: 1440px) {
    max-width: 100%;
  }
`;
export const Title = styled.h1`
  width: 400px;
  margin-bottom: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-top: 100px;

  display: flex;
  justify-content: flex-end;
  text-align: center;
  color: #fff;
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.03em;
  @media screen and (min-width: 768px) {
    width: 600px;
    font-size: 48px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 80px;
    width: 800px;
    margin-bottom: 20px;
    margin-right: 0;
    padding-top: 60px;

    display: flex;
    /* justify-content: flex-end;
    text-align: center; */
  }
`;
export const P = styled.p`
  width: 450px;
  margin-left: auto;
  margin-bottom: 60px;
  margin-right: 100px;
  padding: 0 auto;
  /* padding-right: 60px; */
  display: flex;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.03em;

  @media screen and (min-width: 768px) {
    /* width: 450px;
    margin-left: auto;
    margin-bottom: 60px;
    margin-right: 100px; */
    /* padding: 0 20px; */
    /* padding-right: 60px; */

    margin: 0 auto;
    margin-bottom: 60px;
    display: flex;
    text-align: center;
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 450px;
    margin-left: auto;
    margin-bottom: 60px;
    margin-right: 100px;
    padding: 0 20px;
    padding-right: 60px;
    display: flex;
    text-align: center;
    font-size: 24px;
  }
`;
export const Info = styled.p`
  width: 400px;
  height: 300px;
  /* margin-left: auto; */
  margin: 0 auto;
  padding: 60px 0;

  /* padding-bottom: 120px; */
  /* padding-right: 36px; */
  display: flex;
  text-align: center;
  justify-content: center;

  color: #fff;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: 0.03em;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 650px;
    height: 300px;
    margin: 0;
    margin-left: auto;
    padding-bottom: 120px;
    padding-right: 40px;
    display: flex;
    text-align: center;
    font-size: 60px;
  }
`;
