import { styled } from 'dripsy';
import React, { useEffect } from 'react';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { data } from './data';
import { createStore } from '../../stores/createStore';

const store = createStore();

function HomeScreen() {
  // useEffect(() => {
  //   store.categories.fetch.run();
  // }, []);
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
