import { styled } from '@dripsy/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useStore } from '../stores/createStore';
import GestureRecognizer from 'react-native-swipe-gestures';
import { FontAwesome } from '@expo/vector-icons';

const Container = styled(View)({
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#313131',
  position: 'absolute',
  bottom: 50,
  alignItems: 'center',
  borderRadius: 7,
  marginX: 2,
});

const SongTitle = styled(Text)({
  color: 'white',
  maxWidth: 180,
});
const SongSinger = styled(Text)({
  color: 'grey',
  maxWidth: 180,
});
const SongCover = styled(Image)({
  width: 40,
  height: 40,
  margin: 2,
  borderRadius: 3,
});
const RightContainer = styled(View)({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const FlexDirectionColumn = styled(View)({
  flexDirection: 'column',
});

const FlexDirectionRow = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  marginX: 2,
});

const Icon = styled(FontAwesome)({
  marginX: 2,
});

function PlayerWidget() {
  const store = useStore();
  return (
    <GestureRecognizer
      onSwipeLeft={() => store.player.setIsPlaying(false)}
      onSwipeRight={() => store.player.setIsPlaying(false)}
    >
      <Container>
        <SongCover source={{ uri: store.player.playerItem?.images[0].url }} />
        <RightContainer>
          <FlexDirectionColumn>
            <SongTitle numberOfLines={1}>
              {store.player.playerItem?.name}
            </SongTitle>
            <SongSinger numberOfLines={1}>
              {store.player.playerItem?.artists[0].name}
            </SongSinger>
          </FlexDirectionColumn>
          <FlexDirectionRow>
            <Icon name="heart-o" size={24} color="white" />
            <Icon name="play" size={24} color="white" />
          </FlexDirectionRow>
        </RightContainer>
      </Container>
    </GestureRecognizer>
  );
}

export default observer(PlayerWidget);
