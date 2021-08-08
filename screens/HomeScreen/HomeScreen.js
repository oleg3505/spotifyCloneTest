import { styled } from 'dripsy';

import React from 'react';
import { Image, Text, View } from 'react-native';

import { Section } from '../../components/Section';
import { StyledView } from '../../components/StyledView';

const data = [
  {
    id: '1',
    imgUri:
      'https://images.freeimages.com/images/small-previews/9b6/among-giants-1375605.jpg',
    text: 'Some singers',
  },
  {
    id: '2',
    imgUri:
      'https://images.freeimages.com/images/small-previews/1c9/maine-at-4-45-am-1370871.jpg',
    text: 'Some singers',
  },
  {
    id: '3',
    imgUri:
      'https://images.freeimages.com/images/small-previews/bf4/the-road-through-the-woods-1449194.jpg ',
    text: 'Some singers',
  },
  {
    id: '4',
    imgUri:
      'https://images.freeimages.com/images/small-previews/383/the-home-of-the-candle-1-1425911.jpg',
    text: 'Some singers',
  },
  {
    id: '5',
    imgUri:
      'https://images.freeimages.com/images/small-previews/adf/sun-burst-1478549.jpg',
    text: 'Some singers',
  },
];

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
