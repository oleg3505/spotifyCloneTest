import { styled } from 'dripsy';
import React, { useEffect } from 'react';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { data } from './data';
import { useStore } from '../../stores/createStore';
import { observer } from 'mobx-react';
import CategoriesList from '../../components/CategoriesList';

function HomeScreen() {
  const store = useStore();
  useEffect(() => {
    // console.log(store.viewer.user);
    store.categories.fetch.run();
  }, []);
  // console.log('1', store.categories.asArray);

  return (
    <Container>
      <CategoriesList data={store.categories.asArray} />
      {/* <Section sectionName="Special for u" data={data} />
      <Section sectionName="Feel" data={data} />
      <Section sectionName="For home" data={data} />
      <Section sectionName="Consentration" data={data} />
      <Section sectionName="New relizes" data={data} /> */}
      <Footer />
    </Container>
  );
}

export default observer(HomeScreen);
