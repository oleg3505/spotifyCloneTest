import { styled } from 'dripsy';

import React from 'react';
import { Image, Text, View } from 'react-native';

import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { data } from './data';

function HomeScreen() {
  return (
    <Container>
      <Section sectionName="Special for u" data={data} />
      <Section sectionName="Feel" data={data} />
      <Section sectionName="For home" data={data} />
      <Section sectionName="Consentration" data={data} />
      <Section sectionName="New relizes" data={data} />
      <Footer />
    </Container>
  );
}

export default HomeScreen;
