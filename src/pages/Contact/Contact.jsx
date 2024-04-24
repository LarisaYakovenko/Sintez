import React from 'react';
import Contacts from '../../components/Contacts/Contacts';
import MapComponent from '../../components/MapComponent/MapComponent';
import Facade from '../../components/Facade/Facade';
import { Container, Photo } from './Contact.stailed';

const Contact = () => {
  return (
    <Container>
      <Contacts />
      <Photo>
        <Facade />
        <MapComponent />
      </Photo>
    </Container>
  );
};

export default Contact;
