import { styled } from 'dripsy';
import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Footer } from '../../components/Footer';

const ListOfSongs = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
});

const SongTitle = styled(Text)({
  color: 'white',
});
const SongSinger = styled(Text)({
  color: 'grey',
});

const PlayListCover = styled(Image)({
  width: 250,
  height: 250,
  margin: 20,
});

const SongCover = styled(Image)({
  width: 50,
  height: 50,
  margin: 10,
});

const Container = styled(FlatList)({
  flexGrow: 1,
  bg: 'primary',
});

const Header = styled(View)({
  alignItems: 'center',
});

function SongComponent({ item }) {
  return (
    <TouchableOpacity>
      <ListOfSongs>
        <SongCover source={{ uri: item.songImgUri }} />
        <View>
          <SongTitle>{item.song}</SongTitle>
          <SongSinger>{item.singer}</SongSinger>
        </View>
      </ListOfSongs>
    </TouchableOpacity>
  );
}

function PlayListScreen({ route }) {
  const { item } = route.params;

  return (
    <Container
      ListHeaderComponent={
        <Header>
          <PlayListCover source={{ uri: item.imgUri }} />
          <SongTitle>Play list</SongTitle>
          <SongTitle>{item.text}</SongTitle>
        </Header>
      }
      ListFooterComponent={<Footer />}
      renderItem={({ item }) => <SongComponent item={item} />}
      keyExtractor={(item) => item.id}
      data={item.songs}
      showsVerticalScrollIndicator={false}
    />
  );
}
export default PlayListScreen;
