import { styled } from 'dripsy';

import React from 'react';
import { Image, Text, View } from 'react-native';

import { Section } from '../../components/Section';
import { StyledView } from '../../components/StyledView';
import { data } from './data';

function HomeScreen() {
  return (
    <StyledView>
      <Section sectionName="Special for u" data={data} />
      <Section sectionName="Feel" data={data} />
      <Section sectionName="For home" data={data} />
      <Section sectionName="Consentration" data={data} />
      <Section sectionName="New relizes" data={data} />
      <View style={{ padding: 25 }}></View>
    </StyledView>
  );
}

export default HomeScreen;
