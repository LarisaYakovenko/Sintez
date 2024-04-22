import React from 'react';
import {
  Container,
  P,
  Table,
  Schedule,
  Time,
  Free,
  Li,
} from './ServisImg.stailed';

const ServisImg = () => {
  const birthDay = new Date('1989');

  const newDay = new Date();
  console.log(birthDay);
  const age = newDay.getFullYear() - birthDay.getFullYear();

  return (
    <Container>
      <P>Ми лагодим Ваші улюблені гаджети вже {age} років</P>
      <div>
        <Table>
          <div>
            <p>графік роботи</p>
          </div>
          <Schedule>
            <ul>
              <Li>Пн</Li>
              <Li>Вт</Li>
              <Li>Ср</Li>
              <Li>Чт</Li>
              <Li>Пт</Li>
              <Li>Сб</Li>
              <Li>Нд</Li>
            </ul>
            <div>
              <Time>10 - 17</Time>
              <Free>Вихідний</Free>
            </div>
          </Schedule>
        </Table>
      </div>
    </Container>
  );
};

export default ServisImg;
