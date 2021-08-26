import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from '@dripsy/core';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../navigation/screens';

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

const PlaylistTitle = styled(Text)({
  color: 'grey',
  padding: 10,
});

const StyledView = styled(View)({
  flex: 1,
});

const PlayListCover = styled(Image)({
  width: '100%',
  height: 150,
});

const PlayListList = styled(FlatList)({
  flexGrow: 1,
});

function PlayListComponent({ item }) {
  const nav = useNavigation();

  function onPressItem() {
    nav.navigate(screens.PlayList, { item: item });
  }

  return (
    <Touchble onPress={onPressItem}>
      <PlayListCover source={{ uri: item.imgUri }} />
      <PlaylistTitle>{item.text}</PlaylistTitle>
    </Touchble>
  );
}

export function Section({ sectionName, data }) {
  return (
    <StyledView>
      <SectionName>{sectionName}</SectionName>
      <PlayListList
        horizontal={true}
        renderItem={({ item }) => <PlayListComponent item={item} />}
        keyExtractor={(item) => item.id}
        data={data}
        showsHorizontalScrollIndicator={false}
      />
    </StyledView>
  );
}
