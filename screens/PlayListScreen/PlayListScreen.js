import { styled } from 'dripsy';
import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { StyledView } from '../../components/StyledView';

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

function Item({ item }) {
  return (
    <TouchableOpacity>
      <ViewSongsFlatList>
        <Image
          source={{ uri: item.songImgUri }}
          style={{ width: 50, height: 50, margin: 10 }}
        />
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
  console.log(route.params);
  return (
    <StyledView style={{ flex: 1 }}>
      <Image
        source={{ uri: item.imgUri }}
        style={{ width: 250, height: 250, margin: 20, marginHorizontal: 50 }}
      />
      <Text style={{ color: 'white' }}>Play list</Text>
      <Text style={{ color: 'white' }}>{item.text}</Text>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        data={item.songs}
        showsVerticalScrollIndicator={false}
      />
      <View style={{ padding: 25 }}></View>
    </StyledView>
  );
}
export default PlayListScreen;
