import { styled } from 'dripsy';
import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { FlatListFlexGrow } from '../../components/FlatListFlexGrow';
import { StyledView } from '../../components/StyledView';
import { ViewBottom } from '../../components/ViewBottom';

const ViewSongsFlatList = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
});

const TextSong = styled(Text)({
  color: 'white',
});
const TextSinger = styled(Text)({
  color: 'grey',
});

const ImageStyled = styled(Image)({
  width: 250,
  height: 250,
  margin: 20,
  marginHorizontal: 50,
});

const ImageStyledItem = styled(Image)({
  width: 50,
  height: 50,
  margin: 10,
});

function Item({ item }) {
  return (
    <TouchableOpacity>
      <ViewSongsFlatList>
        <ImageStyledItem source={{ uri: item.songImgUri }} />
        <View>
          <TextSong>{item.song}</TextSong>
          <TextSinger>{item.singer}</TextSinger>
        </View>
      </ViewSongsFlatList>
    </TouchableOpacity>
  );
}

function PlayListScreen({ route }) {
  const { item } = route.params;

  return (
    <StyledView>
      <ImageStyled source={{ uri: item.imgUri }} />
      <TextSong>Play list</TextSong>
      <TextSong>{item.text}</TextSong>
      <FlatListFlexGrow
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        data={item.songs}
        showsVerticalScrollIndicator={false}
      />
      <ViewBottom />
    </StyledView>
  );
}
export default PlayListScreen;
