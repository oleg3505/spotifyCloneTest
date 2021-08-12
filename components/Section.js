import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from '@dripsy/core';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../navigation/screens';
import { FlatListFlexGrow } from './FlatListFlexGrow';

const SectionName = styled(Text)({
  color: 'white',
  fontSize: 24,
  marginTop: 20,
  margin: 2,
});

const Touchble = styled(TouchableOpacity)({
  width: 150,
  margin: 10,
});

const ItemText = styled(Text)({
  color: 'grey',
  padding: 10,
});

const StyledView = styled(View)({
  flex: 1,
});

const ImageStyled = styled(Image)({
  width: '100%',
  height: 150,
});

function Item({ item }) {
  const nav = useNavigation();

  function onPressItem() {
    nav.navigate(screens.PlayList, { item: item });
  }

  return (
    <Touchble onPress={onPressItem}>
      <ImageStyled source={{ uri: item.imgUri }} />
      <ItemText>{item.text}</ItemText>
    </Touchble>
  );
}

export function Section({ sectionName, data }) {
  return (
    <StyledView>
      <SectionName>{sectionName}</SectionName>
      <FlatListFlexGrow
        horizontal={true}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        data={data}
        showsHorizontalScrollIndicator={false}
      />
    </StyledView>
  );
}
