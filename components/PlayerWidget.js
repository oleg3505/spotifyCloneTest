import { styled } from '@dripsy/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useStore } from '../stores/createStore';
import GestureRecognizer from 'react-native-swipe-gestures';

const Container = styled(View)({
  // flex: 1,
  flexDirection: 'row',
  backgroundColor: '#313131',
  position: 'absolute',
  bottom: 50,
  width: '98%',
  alignItems: 'center',
  borderRadius: 5,
  marginX: 1,
});

const SongTitle = styled(Text)({
  color: 'white',
});
const SongSinger = styled(Text)({
  color: 'grey',
});
const SongCover = styled(Image)({
  width: 40,
  height: 40,
  margin: 10,
});
const item = {
  id: '1',
  songImgUri:
    'https://images.freeimages.com/images/small-previews/adf/sun-burst-1478549.jpg',
  singer: 'Some singer',
  song: 'some song',
};

function A() {
  return (
    <View>
      <Text>123</Text>
    </View>
  );
}

function PlayerWidget() {
  const store = useStore();
  return (
    <GestureRecognizer
      onSwipeLeft={() => store.player.setIsPlaying(false)}
      onSwipeRight={() => store.player.setIsPlaying(false)}
    >
      <Container>
        <SongCover source={{ uri: store.player.playerItem?.images[0].url }} />
        <SongTitle>{store.player.playerItem?.name}</SongTitle>
        <SongSinger>{store.player.playerItem?.artists[0].name}</SongSinger>
      </Container>
    </GestureRecognizer>
  );
}

export default observer(PlayerWidget);
